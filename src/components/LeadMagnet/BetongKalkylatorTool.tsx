import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import { downloadMaterialPdf, type MaterialRow } from '../../lib/materialPdf';
import { fakturaHref, offertHref } from '../../lib/offert';

// Full concrete-slab estimator ("platta på mark"). Beyond volume it models the
// real build-up and a cost estimate (à-pris = material + arbete), so it competes
// with paid kalkyl-programs on the "vad kostar platta på mark" intent while
// staying free. Sources: TräGuiden/Boverket build-up; rebar tie wire ~10 kg/ton
// and place+tie ~12 h/ton (industry norms); platta på mark ~1100–1800 kr/m² incl.
// labour (2026). All prices/norms are editable riktvärden.

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}
const nf = (v: number, d = 0) =>
  v.toLocaleString('sv-SE', { maximumFractionDigits: d });
const kr = (v: number) => `${Math.round(v).toLocaleString('sv-SE')} kr`;

type Shape = 'platta' | 'balk' | 'plint';
type Form = 'rekt' | 'egen';

const MESH_SHEET_M2 = 11.5; // armeringsnät 5,0 × 2,3 m
const EPS_BOARD_M2 = 0.72; // cellplastskiva 1200 × 600 mm
const EPS_BOARD_MM = 100;
// Rebar weight kg/m by diameter, and mesh weight kg/m² by type.
const BAR_KG_PER_M: Record<string, number> = { '10': 0.617, '12': 0.888, '16': 1.578 };
const MESH_KG_PER_M2: Record<string, number> = { '5': 2.2, '6': 3.05, '7': 4.3, '8': 5.5 };
// Load-bearing cellplast/EPS grades under a slab and a riktpris kr/m³ (editable).
const EPS_PRICE: Record<string, number> = { S80: 1200, S100: 1400, S150: 1800, S200: 2300 };

export default function BetongKalkylatorTool() {
  const [shape, setShape] = useState<Shape>('platta');
  const [form, setForm] = useState<Form>('rekt');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [area, setArea] = useState('');
  const [perim, setPerim] = useState('');
  const [thickness, setThickness] = useState('10');

  const [edge, setEdge] = useState('ja');
  const [edgeW, setEdgeW] = useState('30');
  const [edgeH, setEdgeH] = useState('35');
  const [edgeBars, setEdgeBars] = useState('3');
  const [barDia, setBarDia] = useState('12'); // kamstål diameter mm

  const [isoThick, setIsoThick] = useState('300');
  const [epsGrade, setEpsGrade] = useState('S100'); // cellplast-kvalitet (bärighet)
  const [baseThick, setBaseThick] = useState('150');
  const [mesh, setMesh] = useState('ja');
  const [meshType, setMeshType] = useState('6'); // K6/K8 → kg/m²
  const [bindPerTon, setBindPerTon] = useState('10'); // kg bindtråd per ton stål

  const [bLen, setBLen] = useState('');
  const [bWidth, setBWidth] = useState('20');
  const [bHeight, setBHeight] = useState('30');
  const [diam, setDiam] = useState('30');
  const [depth, setDepth] = useState('60');
  const [count, setCount] = useState('4');

  const [bagYield, setBagYield] = useState('12.5');
  const [spill, setSpill] = useState('5');
  const [concreteMode, setConcreteMode] = useState('fabrik'); // fabrik | sack

  // Cost layer (riktpriser 2026, editable)
  const [showCost, setShowCost] = useState(false);
  const [pBetong, setPBetong] = useState('1600'); // kr/m³ fabriksbetong
  const [pSack, setPSack] = useState('80'); // kr/säck 25 kg
  const [pMesh, setPMesh] = useState('300'); // kr/nät
  const [pSteel, setPSteel] = useState('18'); // kr/kg kamstål
  const [pBind, setPBind] = useState('45'); // kr/kg bindtråd
  const [pIso, setPIso] = useState('1400'); // kr/m³ cellplast
  const [pBase, setPBase] = useState('300'); // kr/m³ makadam
  const [timpris, setTimpris] = useState('500'); // kr/tim
  const [hRebarTon, setHRebarTon] = useState('12'); // arbetstimmar per ton armering
  const [hPerM2, setHPerM2] = useState('1.2'); // övrig arbetstid per m² (schakt/iso/gjutning)
  const [walkPct, setWalkPct] = useState('10'); // gångtid/förflyttning – påslag på arbetstid
  const [rot, setRot] = useState('nej');

  const r = useMemo(() => {
    let base = 0, A = 0, P = 0;
    let meshArea = 0, meshSheets = 0, meshKg = 0;
    let isoVol = 0, isoBoards = 0, baseVol = 0;
    let edgeBarsLen = 0, edgeBarKg = 0;

    if (shape === 'platta') {
      if (form === 'rekt') { const L = num(length), W = num(width); A = L * W; P = 2 * (L + W); }
      else { A = num(area); P = num(perim); }
      const t = num(thickness) / 100;
      base = A * t;
      if (edge === 'ja') {
        const extraDepth = Math.max(num(edgeH) / 100 - t, 0);
        base += P * (num(edgeW) / 100) * extraDepth;
        edgeBarsLen = P * num(edgeBars);
        edgeBarKg = edgeBarsLen * (BAR_KG_PER_M[barDia] || 0.888);
      }
      if (mesh === 'ja') {
        meshArea = A * 1.15;
        meshSheets = Math.ceil(meshArea / MESH_SHEET_M2);
        meshKg = A * (MESH_KG_PER_M2[meshType] || 3.05);
      }
      const tIso = num(isoThick) / 1000;
      isoVol = A * tIso;
      if (tIso > 0) isoBoards = Math.ceil(A / EPS_BOARD_M2) * Math.ceil(num(isoThick) / EPS_BOARD_MM);
      baseVol = A * (num(baseThick) / 1000);
    } else if (shape === 'balk') {
      base = num(bLen) * (num(bWidth) / 100) * (num(bHeight) / 100);
    } else {
      const rMeter = num(diam) / 100 / 2;
      base = Math.PI * rMeter * rMeter * (num(depth) / 100) * num(count);
    }

    const volume = base * (1 + num(spill) / 100);
    const liters = volume * 1000;
    const y = num(bagYield);
    const bags = y > 0 ? Math.ceil(liters / y) : 0;
    const bigBags = liters > 0 ? liters / 520 : 0;
    const water = bags * 3.5;

    const steelKg = meshKg + edgeBarKg;
    const steelTon = steelKg / 1000;
    const bindKg = steelTon * num(bindPerTon);
    const rebarHours = steelTon * num(hRebarTon);
    const otherHours = shape === 'platta' ? A * num(hPerM2) : 0;
    // Gångtid/förflyttning: non-productive walking/moving time added on top.
    const totalHours = (rebarHours + otherHours) * (1 + num(walkPct) / 100);

    // Costs
    const cConcrete = concreteMode === 'sack' ? bags * num(pSack) : volume * num(pBetong);
    const cMesh = meshSheets * num(pMesh);
    const cSteel = edgeBarKg * num(pSteel);
    const cBind = bindKg * num(pBind);
    const cIso = isoVol * num(pIso);
    const cBase = baseVol * num(pBase);
    const cMaterial = cConcrete + cMesh + cSteel + cBind + cIso + cBase;
    const cLabour = totalHours * num(timpris);
    const cTotal = cMaterial + cLabour;
    const rotAvdrag = rot === 'ja' ? cLabour * 0.30 : 0; // ROT: 30 % av arbetskostnaden
    const cAfterRot = cTotal - rotAvdrag;
    const perM2 = A > 0 ? cTotal / A : 0;

    return { volume, liters, bags, bigBags, water, A, P, meshArea, meshSheets, meshKg, isoVol, isoBoards, baseVol, edgeBarsLen, edgeBarKg, steelKg, bindKg, rebarHours, otherHours, totalHours, cConcrete, cMesh, cSteel, cBind, cIso, cBase, cMaterial, cLabour, cTotal, rotAvdrag, cAfterRot, perM2 };
  }, [shape, form, length, width, area, perim, thickness, edge, edgeW, edgeH, edgeBars, barDia, isoThick, baseThick, mesh, meshType, bindPerTon, bLen, bWidth, bHeight, diam, depth, count, bagYield, spill, concreteMode, pBetong, pSack, pMesh, pSteel, pBind, pIso, pBase, timpris, hRebarTon, hPerM2, walkPct, rot]);

  const shapeLabel = shape === 'platta' ? 'Platta på mark' : shape === 'balk' ? 'Grundmur / balk' : 'Plintar / stolphål';

  const materialRows = useMemo(() => {
    const rows: MaterialRow[] = [
      { desc: 'Betong inkl. spill', qty: `${nf(r.volume, 2)} m³ (${nf(r.liters)} l)` },
    ];
    if (concreteMode === 'sack') rows.push({ desc: 'Säckar torrbetong (25 kg)', qty: `${nf(r.bags)} st` });
    else rows.push({ desc: 'Fabriksbetong', qty: `${nf(r.volume, 2)} m³` });
    rows.push({ desc: 'Blandningsvatten (ca)', qty: `${nf(r.water)} liter` });
    if (shape === 'platta') {
      if (r.meshSheets > 0) rows.push({ desc: `Armeringsnät K${meshType} (5,0×2,3 m)`, qty: `${nf(r.meshSheets)} st · ${nf(r.meshKg)} kg` });
      if (r.edgeBarKg > 0) rows.push({ desc: `Kantjärn Ø${barDia} mm`, qty: `${nf(r.edgeBarsLen)} m · ${nf(r.edgeBarKg)} kg` });
      if (r.bindKg > 0) rows.push({ desc: 'Bindtråd', qty: `${nf(r.bindKg, 1)} kg` });
      if (r.isoVol > 0) rows.push({ desc: `Cellplast / EPS ${epsGrade}`, qty: `${nf(r.isoVol, 2)} m³ (${nf(r.isoBoards)} skivor)` });
      if (r.baseVol > 0) rows.push({ desc: 'Makadam / bärlager', qty: `${nf(r.baseVol, 2)} m³` });
    }
    return rows;
  }, [r, shape, concreteMode, meshType, barDia, epsGrade]);

  const costRows = useMemo((): MaterialRow[] => ([
    { desc: 'Material', qty: kr(r.cMaterial) },
    { desc: `Arbete (${nf(r.totalHours, 1)} tim)`, qty: kr(r.cLabour) },
    { desc: 'Summa exkl. moms', qty: kr(r.cTotal) },
    ...(r.rotAvdrag > 0 ? [{ desc: 'ROT-avdrag (30 % av arbete)', qty: `−${kr(r.rotAvdrag)}` }] : []),
    ...(r.rotAvdrag > 0 ? [{ desc: 'Att betala efter ROT', qty: kr(r.cAfterRot) }] : []),
    ...(r.perM2 > 0 ? [{ desc: 'Riktpris per m²', qty: kr(r.perM2) }] : []),
  ]), [r]);

  const exportCsv = () => {
    const rows: (string | number)[][] = [
      ['Betong – kalkyl', 'byggexp.se'], ['Gjutning', shapeLabel],
      ...(shape === 'platta' ? [['Area', `${nf(r.A, 1)} m²`], ['Omkrets', `${nf(r.P, 1)} m`]] : []),
      [], ['Material', 'Mängd'], ...materialRows.map((m) => [m.desc, m.qty]),
      ...(showCost ? [[], ['Kostnad (riktpris)', ''], ...costRows.map((c) => [c.desc, c.qty])] : []),
    ];
    gaEvent('export_excel', { tool: 'betong-kalkylator' });
    downloadCsvRows(rows, 'betong-kalkyl.csv');
  };
  const exportPdf = () => void downloadMaterialPdf({
    title: 'Betong – kalkyl',
    meta: `${shapeLabel}${shape === 'platta' ? ` · ${nf(r.A, 1)} m² · omkrets ${nf(r.P, 1)} m` : ''}`,
    rows: showCost ? [...materialRows, { desc: '— Kostnad (riktpris) —', qty: '' }, ...costRows] : materialRows,
    filename: 'betong-kalkyl.pdf', tool: 'betong-kalkylator',
    note: 'Riktvärden inkl. spill. Priser och arbetstider är redigerbara uppskattningar – kontrollera mot ritning, konstruktörens dimensionering och aktuella priser.',
  });

  const seedRows = [
    concreteMode === 'sack' ? { desc: 'Betong, säck 25 kg', qty: r.bags } : { desc: 'Fabriksbetong (m³)', qty: Math.round(r.volume * 10) / 10 },
    ...(r.meshSheets > 0 ? [{ desc: 'Armeringsnät (st)', qty: r.meshSheets }] : []),
    ...(r.isoBoards > 0 ? [{ desc: 'Cellplast (skivor)', qty: r.isoBoards }] : []),
    { desc: 'Arbete gjutning/armering', qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);
  const fld = 'lm-tool-field';

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Betongkalkylator – platta på mark, armering &amp; kostnad</h2>
        <p className="lm-tool-sub">
          Räknar betong, cellplast, armering (nät + kantjärn + bindtråd) och bärlager
          för en platta på mark – med kantbalk och stöd för L-formade plattor. Slå på
          kostnad för ett riktpris (material + arbete + ROT). Exportera till Excel eller PDF.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className={fld}><span>Vad gjuter du?</span>
          <select value={shape} onChange={(e) => setShape(e.currentTarget.value as Shape)}>
            <option value="platta">Platta på mark</option>
            <option value="balk">Grundmur / balk / fundament</option>
            <option value="plint">Plintar / stolphål (runda)</option>
          </select></label>

        {shape === 'platta' ? (
          <>
            <label className={fld}><span>Form</span>
              <select value={form} onChange={(e) => setForm(e.currentTarget.value as Form)}>
                <option value="rekt">Rektangulär (längd × bredd)</option>
                <option value="egen">Egen form / L-form (area + omkrets)</option>
              </select></label>
            {form === 'rekt' ? (
              <>
                <label className={fld}><span>Längd (m)</span><input type="number" min="0" inputMode="decimal" value={length} placeholder="t.ex. 10" onChange={(e) => setLength(e.currentTarget.value)} /></label>
                <label className={fld}><span>Bredd (m)</span><input type="number" min="0" inputMode="decimal" value={width} placeholder="t.ex. 8" onChange={(e) => setWidth(e.currentTarget.value)} /></label>
              </>
            ) : (
              <>
                <label className={fld}><span>Area (m²)</span><input type="number" min="0" inputMode="decimal" value={area} placeholder="t.ex. 92" onChange={(e) => setArea(e.currentTarget.value)} /></label>
                <label className={fld}><span>Omkrets (m)</span><input type="number" min="0" inputMode="decimal" value={perim} placeholder="t.ex. 46" onChange={(e) => setPerim(e.currentTarget.value)} /></label>
              </>
            )}
            <label className={fld}><span>Betongtjocklek (cm)</span><input type="number" min="0" inputMode="decimal" value={thickness} onChange={(e) => setThickness(e.currentTarget.value)} /></label>
            <label className={fld}><span>Kantbalk?</span>
              <select value={edge} onChange={(e) => setEdge(e.currentTarget.value)}><option value="ja">Ja</option><option value="nej">Nej</option></select></label>
            {edge === 'ja' ? (
              <>
                <label className={fld}><span>Kantbalk bredd (cm)</span><input type="number" min="0" inputMode="decimal" value={edgeW} onChange={(e) => setEdgeW(e.currentTarget.value)} /></label>
                <label className={fld}><span>Kantbalk djup (cm)</span><input type="number" min="0" inputMode="decimal" value={edgeH} onChange={(e) => setEdgeH(e.currentTarget.value)} /></label>
                <label className={fld}><span>Kamstål i kant (antal)</span><input type="number" min="0" inputMode="numeric" value={edgeBars} onChange={(e) => setEdgeBars(e.currentTarget.value)} /></label>
                <label className={fld}><span>Kamstål diameter</span>
                  <select value={barDia} onChange={(e) => setBarDia(e.currentTarget.value)}><option value="10">Ø10 mm</option><option value="12">Ø12 mm</option><option value="16">Ø16 mm</option></select></label>
              </>
            ) : null}
            <label className={fld}><span>Armeringsnät?</span>
              <select value={mesh} onChange={(e) => setMesh(e.currentTarget.value)}><option value="ja">Ja</option><option value="nej">Nej</option></select></label>
            {mesh === 'ja' ? (
              <label className={fld}><span>Nättyp</span>
                <select value={meshType} onChange={(e) => setMeshType(e.currentTarget.value)}>
                  <option value="5">K5 (Ø5)</option><option value="6">K6 (Ø6)</option><option value="7">K7 (Ø7)</option><option value="8">K8 (Ø8)</option>
                </select></label>
            ) : null}
            <label className={fld}><span>Cellplast / EPS – tjocklek (mm)</span><input type="number" min="0" inputMode="decimal" value={isoThick} placeholder="t.ex. 300" onChange={(e) => setIsoThick(e.currentTarget.value)} /></label>
            <label className={fld}><span>Cellplast – kvalitet (bärighet)</span>
              <select value={epsGrade} onChange={(e) => { const g = e.currentTarget.value; setEpsGrade(g); setPIso(String(EPS_PRICE[g] || 1400)); }}>
                <option value="S80">EPS S80 (lätt last)</option>
                <option value="S100">EPS S100 (normal villa)</option>
                <option value="S150">EPS S150 (tyngre last)</option>
                <option value="S200">EPS S200 (industri)</option>
              </select></label>
            <label className={fld}><span>Makadam / bärlager (mm)</span><input type="number" min="0" inputMode="decimal" value={baseThick} onChange={(e) => setBaseThick(e.currentTarget.value)} /></label>
          </>
        ) : null}

        {shape === 'balk' ? (
          <>
            <label className={fld}><span>Längd (m)</span><input type="number" min="0" inputMode="decimal" value={bLen} placeholder="t.ex. 12" onChange={(e) => setBLen(e.currentTarget.value)} /></label>
            <label className={fld}><span>Bredd (cm)</span><input type="number" min="0" inputMode="decimal" value={bWidth} onChange={(e) => setBWidth(e.currentTarget.value)} /></label>
            <label className={fld}><span>Höjd (cm)</span><input type="number" min="0" inputMode="decimal" value={bHeight} onChange={(e) => setBHeight(e.currentTarget.value)} /></label>
          </>
        ) : null}
        {shape === 'plint' ? (
          <>
            <label className={fld}><span>Diameter (cm)</span><input type="number" min="0" inputMode="decimal" value={diam} onChange={(e) => setDiam(e.currentTarget.value)} /></label>
            <label className={fld}><span>Djup (cm)</span><input type="number" min="0" inputMode="decimal" value={depth} onChange={(e) => setDepth(e.currentTarget.value)} /></label>
            <label className={fld}><span>Antal (st)</span><input type="number" min="0" inputMode="numeric" value={count} onChange={(e) => setCount(e.currentTarget.value)} /></label>
          </>
        ) : null}

        <label className={fld}><span>Betong</span>
          <select value={concreteMode} onChange={(e) => setConcreteMode(e.currentTarget.value)}><option value="fabrik">Fabriksbetong (m³)</option><option value="sack">Säck 25 kg</option></select></label>
        {concreteMode === 'sack' ? <label className={fld}><span>Liter per säck</span><input type="number" min="0" inputMode="decimal" value={bagYield} onChange={(e) => setBagYield(e.currentTarget.value)} /></label> : null}
        <label className={fld}><span>Spill (%)</span><input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} /></label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Betongvolym inkl. spill</span><strong>{nf(r.volume, 2)} m³</strong></div>
        {concreteMode === 'sack'
          ? <div className="lm-result-row lm-result-total"><span>Säckar torrbetong (25 kg)</span><strong>{nf(r.bags)} st</strong></div>
          : <div className="lm-result-row"><span>Motsvarar storsäck (1000 kg)</span><span>{nf(r.bigBags, 1)} st</span></div>}
        <div className="lm-result-row"><span>Blandningsvatten (ca)</span><span>{nf(r.water)} liter</span></div>
        {shape === 'platta' ? (
          <>
            {r.meshSheets > 0 ? <div className="lm-result-row"><span>Armeringsnät K{meshType}</span><span>{nf(r.meshSheets)} st · {nf(r.meshKg)} kg</span></div> : null}
            {r.edgeBarKg > 0 ? <div className="lm-result-row"><span>Kantjärn Ø{barDia}</span><span>{nf(r.edgeBarsLen)} m · {nf(r.edgeBarKg)} kg</span></div> : null}
            {r.bindKg > 0 ? <div className="lm-result-row"><span>Bindtråd</span><span>{nf(r.bindKg, 1)} kg</span></div> : null}
            {r.isoVol > 0 ? <div className="lm-result-row"><span>Cellplast / EPS {epsGrade}</span><span>{nf(r.isoVol, 2)} m³ · {nf(r.isoBoards)} skivor</span></div> : null}
            {r.baseVol > 0 ? <div className="lm-result-row"><span>Makadam / bärlager</span><span>{nf(r.baseVol, 2)} m³</span></div> : null}
          </>
        ) : null}
      </div>

      {shape === 'platta' ? (
        <div style={{ marginTop: 16 }}>
          <label className={fld} style={{ maxWidth: 260 }}>
            <span>Visa kostnad (riktpris)?</span>
            <select value={showCost ? 'ja' : 'nej'} onChange={(e) => setShowCost(e.currentTarget.value === 'ja')}>
              <option value="nej">Nej</option><option value="ja">Ja – material + arbete</option>
            </select>
          </label>

          {showCost ? (
            <>
              <div className="lm-tool-grid" style={{ marginTop: 12 }}>
                {concreteMode === 'sack'
                  ? <label className={fld}><span>Betong (kr/säck)</span><input type="number" min="0" inputMode="decimal" value={pSack} onChange={(e) => setPSack(e.currentTarget.value)} /></label>
                  : <label className={fld}><span>Fabriksbetong (kr/m³)</span><input type="number" min="0" inputMode="decimal" value={pBetong} onChange={(e) => setPBetong(e.currentTarget.value)} /></label>}
                <label className={fld}><span>Armeringsnät (kr/nät)</span><input type="number" min="0" inputMode="decimal" value={pMesh} onChange={(e) => setPMesh(e.currentTarget.value)} /></label>
                <label className={fld}><span>Kamstål (kr/kg)</span><input type="number" min="0" inputMode="decimal" value={pSteel} onChange={(e) => setPSteel(e.currentTarget.value)} /></label>
                <label className={fld}><span>Bindtråd (kr/kg)</span><input type="number" min="0" inputMode="decimal" value={pBind} onChange={(e) => setPBind(e.currentTarget.value)} /></label>
                <label className={fld}><span>Cellplast (kr/m³)</span><input type="number" min="0" inputMode="decimal" value={pIso} onChange={(e) => setPIso(e.currentTarget.value)} /></label>
                <label className={fld}><span>Makadam (kr/m³)</span><input type="number" min="0" inputMode="decimal" value={pBase} onChange={(e) => setPBase(e.currentTarget.value)} /></label>
                <label className={fld}><span>Timpris arbete (kr/tim)</span><input type="number" min="0" inputMode="decimal" value={timpris} onChange={(e) => setTimpris(e.currentTarget.value)} /></label>
                <label className={fld}><span>Armering: tim/ton</span><input type="number" min="0" inputMode="decimal" value={hRebarTon} onChange={(e) => setHRebarTon(e.currentTarget.value)} /></label>
                <label className={fld}><span>Övrigt arbete: tim/m²</span><input type="number" min="0" inputMode="decimal" value={hPerM2} onChange={(e) => setHPerM2(e.currentTarget.value)} /></label>
                <label className={fld}><span>Gångtid / förflyttning (%)</span><input type="number" min="0" inputMode="decimal" value={walkPct} onChange={(e) => setWalkPct(e.currentTarget.value)} /></label>
                <label className={fld}><span>Bindtråd (kg/ton)</span><input type="number" min="0" inputMode="decimal" value={bindPerTon} onChange={(e) => setBindPerTon(e.currentTarget.value)} /></label>
                <label className={fld}><span>ROT-avdrag (privatperson)?</span>
                  <select value={rot} onChange={(e) => setRot(e.currentTarget.value)}><option value="nej">Nej</option><option value="ja">Ja</option></select></label>
              </div>

              <div className="lm-result" style={{ marginTop: 12 }}>
                <div className="lm-result-row"><span>Material</span><span>{kr(r.cMaterial)}</span></div>
                <div className="lm-result-row"><span>Arbete ({nf(r.totalHours, 1)} tim)</span><span>{kr(r.cLabour)}</span></div>
                <div className="lm-result-row lm-result-highlight"><span>Summa exkl. moms</span><strong>{kr(r.cTotal)}</strong></div>
                {r.rotAvdrag > 0 ? <div className="lm-result-row"><span>ROT-avdrag (30 % av arbete)</span><span>−{kr(r.rotAvdrag)}</span></div> : null}
                {r.rotAvdrag > 0 ? <div className="lm-result-row lm-result-total"><span>Att betala efter ROT</span><strong>{kr(r.cAfterRot)}</strong></div> : null}
                {r.perM2 > 0 ? <div className="lm-result-row"><span>Riktpris per m²</span><span>{kr(r.perM2)}</span></div> : null}
              </div>
            </>
          ) : null}
        </div>
      ) : null}

      <p className="lm-result-fine">
        Uppskattning inkl. spill enligt vanlig uppbyggnad (makadam → cellplast 200–300 mm →
        armeringsnät + kantjärn → betong + kantbalk). En L-formad platta har större omkrets
        och därmed mer kantbalk, kantisolering och kantjärn. Kostnaden är ett riktpris – en
        färdig platta på mark ligger ofta ca 1 100–1 800 kr/m² inkl. arbete. Priser och
        arbetstider är redigerbara. Kontrollera alltid mot ritning och konstruktörens
        dimensionering.
      </p>
      <div className="lm-tool-actions" style={{ marginTop: 16 }}>
        <a className="lm-tool-button" href={r.volume > 0 ? offertUrl : undefined} aria-disabled={r.volume <= 0} onClick={() => gaEvent('offert_from_calculator', { tool: 'betong-kalkylator' })}>Skapa offert av det här</a>
        <a className="lm-tool-secondary" href={r.volume > 0 ? fakturaUrl : undefined} aria-disabled={r.volume <= 0} onClick={() => gaEvent('faktura_from_calculator', { tool: 'betong-kalkylator' })}>Skapa faktura</a>
        <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={r.volume <= 0}>Exportera Excel</button>
        <button type="button" className="lm-tool-secondary" onClick={exportPdf} disabled={r.volume <= 0}>Exportera PDF</button>
      </div>
    </div>
  );
}
