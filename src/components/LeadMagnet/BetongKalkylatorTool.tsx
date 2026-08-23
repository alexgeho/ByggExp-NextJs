import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import { fakturaHref, offertHref } from '../../lib/offert';

// Professional concrete calculator for "platta på mark" and other pours.
// Slab mode models the real build-up (per TräGuiden / Boverket practice):
//   makadam (bärlager) → cellplast/EPS (200–300 mm) → armeringsnät (150×150,
//   K6/K8) on spacers → betongplatta (100–120 mm) + kantbalk (thickened edge with
//   längsgående kamstål). Concrete + edge beam + edge insulation + edge bars all
//   scale with the PERIMETER, so an L-shape/complex slab costs more than a
//   rectangle of the same area — the tool lets you enter area + perimeter directly
//   for non-rectangular slabs. Exports material list to Excel (CSV) and PDF.

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}
const nf = (v: number, d = 0) =>
  v.toLocaleString('sv-SE', { maximumFractionDigits: d });

type Shape = 'platta' | 'balk' | 'plint';
type Form = 'rekt' | 'egen';

// Standard material sizes (Swedish market)
const MESH_SHEET_M2 = 11.5; // armeringsnät 5,0 × 2,3 m ≈ 11,5 m²
const EPS_BOARD_M2 = 0.72; // cellplastskiva 1200 × 600 mm
const EPS_BOARD_MM = 100; // per skiva (lager staplas)

export default function BetongKalkylatorTool() {
  const [shape, setShape] = useState<Shape>('platta');

  // Platta – form
  const [form, setForm] = useState<Form>('rekt');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [area, setArea] = useState(''); // egen form: m²
  const [perim, setPerim] = useState(''); // egen form: m
  const [thickness, setThickness] = useState('10'); // cm platta

  // Platta – kantbalk
  const [edge, setEdge] = useState('ja');
  const [edgeW, setEdgeW] = useState('30'); // cm
  const [edgeH, setEdgeH] = useState('35'); // cm (djup)
  const [edgeBars, setEdgeBars] = useState('3'); // längsgående kamstål

  // Platta – isolering & bärlager & armering
  const [isoThick, setIsoThick] = useState('300'); // mm cellplast (0 = ingen)
  const [baseThick, setBaseThick] = useState('150'); // mm makadam (0 = ingen)
  const [mesh, setMesh] = useState('ja'); // armeringsnät

  // Balk / grundmur
  const [bLen, setBLen] = useState('');
  const [bWidth, setBWidth] = useState('20');
  const [bHeight, setBHeight] = useState('30');

  // Plint / stolphål
  const [diam, setDiam] = useState('30');
  const [depth, setDepth] = useState('60');
  const [count, setCount] = useState('4');

  const [bagYield, setBagYield] = useState('12.5');
  const [spill, setSpill] = useState('5');

  const r = useMemo(() => {
    let base = 0; // betong m³ före spill
    let A = 0; // area m²
    let P = 0; // omkrets m
    let meshArea = 0, meshSheets = 0;
    let isoVol = 0, isoBoards = 0;
    let baseVol = 0;
    let edgeBarsLen = 0;

    if (shape === 'platta') {
      if (form === 'rekt') {
        const L = num(length), W = num(width);
        A = L * W;
        P = 2 * (L + W);
      } else {
        A = num(area);
        P = num(perim);
      }
      const t = num(thickness) / 100;
      base = A * t;
      if (edge === 'ja') {
        // Slab already counts the footprint at `thickness`; add only the extra
        // depth of the thickened edge below it (edgeH − thickness).
        const extraDepth = Math.max(num(edgeH) / 100 - t, 0);
        base += P * (num(edgeW) / 100) * extraDepth;
        edgeBarsLen = P * num(edgeBars);
      }
      if (mesh === 'ja') {
        meshArea = A * 1.15; // +15 % överlapp
        meshSheets = Math.ceil(meshArea / MESH_SHEET_M2);
      }
      const tIso = num(isoThick) / 1000; // m
      isoVol = A * tIso;
      if (tIso > 0) {
        const layers = Math.ceil(num(isoThick) / EPS_BOARD_MM);
        isoBoards = Math.ceil(A / EPS_BOARD_M2) * layers;
      }
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

    return { volume, liters, bags, bigBags, water, A, P, meshArea, meshSheets, isoVol, isoBoards, baseVol, edgeBarsLen };
  }, [shape, form, length, width, area, perim, thickness, edge, edgeW, edgeH, edgeBars, isoThick, baseThick, mesh, bLen, bWidth, bHeight, diam, depth, count, bagYield, spill]);

  const shapeLabel = shape === 'platta' ? 'Platta på mark' : shape === 'balk' ? 'Grundmur / balk' : 'Plintar / stolphål';

  // Material list shared by CSV, PDF, offert and faktura.
  const materialRows = useMemo(() => {
    const rows: { desc: string; qty: string }[] = [
      { desc: 'Betong inkl. spill', qty: `${nf(r.volume, 2)} m³ (${nf(r.liters)} l)` },
      { desc: 'Säckar torrbetong (25 kg)', qty: `${nf(r.bags)} st` },
      { desc: 'Eller storsäck (1000 kg)', qty: `${nf(r.bigBags, 1)} st` },
      { desc: 'Blandningsvatten (ca)', qty: `${nf(r.water)} liter` },
    ];
    if (shape === 'platta') {
      if (r.meshSheets > 0) rows.push({ desc: 'Armeringsnät (5,0×2,3 m)', qty: `${nf(r.meshSheets)} st (${nf(r.meshArea, 1)} m²)` });
      if (r.edgeBarsLen > 0) rows.push({ desc: 'Kantjärn / kamstål', qty: `${nf(r.edgeBarsLen)} m` });
      if (r.isoVol > 0) rows.push({ desc: 'Cellplast / EPS', qty: `${nf(r.isoVol, 2)} m³ (${nf(r.isoBoards)} skivor 1200×600)` });
      if (r.baseVol > 0) rows.push({ desc: 'Makadam / bärlager', qty: `${nf(r.baseVol, 2)} m³` });
    }
    return rows;
  }, [r, shape]);

  const exportCsv = () => {
    const rows: (string | number)[][] = [
      ['Betongkalkylator', 'byggexp.se'],
      ['Gjutning', shapeLabel],
      ...(shape === 'platta' ? [['Area', `${nf(r.A, 1)} m²`], ['Omkrets', `${nf(r.P, 1)} m`]] : []),
      [],
      ['Post', 'Mängd'],
      ...materialRows.map((m) => [m.desc, m.qty]),
    ];
    gaEvent('export_excel', { tool: 'betong-kalkylator' });
    downloadCsvRows(rows, 'betong-materiallista.csv');
  };

  const exportPdf = async () => {
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    const mx = 48;
    const pw = doc.internal.pageSize.getWidth();
    let y = 64;
    doc.setFont('helvetica', 'bold'); doc.setFontSize(20);
    doc.text('Betong – materiallista', mx, y);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(120);
    y += 18; doc.text('Skapad med ByggExp – byggexp.se', mx, y);
    doc.setTextColor(20); doc.setFontSize(11); y += 26;
    doc.text(`Gjutning: ${shapeLabel}`, mx, y);
    if (shape === 'platta') { doc.text(`Area: ${nf(r.A, 1)} m²   Omkrets: ${nf(r.P, 1)} m`, pw / 2, y); }
    y += 22;
    doc.setDrawColor(210); doc.line(mx, y, pw - mx, y); y += 8;
    doc.setFont('helvetica', 'bold'); doc.text('Post', mx, y + 12); doc.text('Mängd', pw - mx, y + 12, { align: 'right' });
    doc.setFont('helvetica', 'normal'); y += 26;
    materialRows.forEach((m) => {
      doc.text(m.desc, mx, y);
      doc.text(m.qty, pw - mx, y, { align: 'right' });
      y += 20;
    });
    y += 10; doc.setFontSize(9); doc.setTextColor(120);
    doc.text('Uppskattning inkl. spill. Kontrollera mot ritning och konstruktörens dimensionering.', mx, y);
    gaEvent('export_pdf', { tool: 'betong-kalkylator' });
    doc.save('betong-materiallista.pdf');
  };

  const seedRows = [
    { desc: 'Betong, säck 25 kg', qty: r.bags },
    ...(shape === 'platta' && r.meshSheets > 0 ? [{ desc: 'Armeringsnät (st)', qty: r.meshSheets }] : []),
    ...(shape === 'platta' && r.isoBoards > 0 ? [{ desc: 'Cellplast (skivor)', qty: r.isoBoards }] : []),
    { desc: 'Arbete gjutning', qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);

  const fld = 'lm-tool-field';

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Betongkalkylator – platta på mark, säckar &amp; armering</h2>
        <p className="lm-tool-sub">
          Räknar betongvolym, cellplast, armering och bärlager för en platta på
          mark – med kantbalk och stöd för L-formade plattor. Även grundbalk och
          plintar. Exportera materiallistan till Excel eller PDF.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className={fld}>
          <span>Vad gjuter du?</span>
          <select value={shape} onChange={(e) => setShape(e.currentTarget.value as Shape)}>
            <option value="platta">Platta på mark</option>
            <option value="balk">Grundmur / balk / fundament</option>
            <option value="plint">Plintar / stolphål (runda)</option>
          </select>
        </label>

        {shape === 'platta' ? (
          <>
            <label className={fld}>
              <span>Form</span>
              <select value={form} onChange={(e) => setForm(e.currentTarget.value as Form)}>
                <option value="rekt">Rektangulär (längd × bredd)</option>
                <option value="egen">Egen form / L-form (area + omkrets)</option>
              </select>
            </label>
            {form === 'rekt' ? (
              <>
                <label className={fld}><span>Längd (m)</span>
                  <input type="number" min="0" inputMode="decimal" value={length} placeholder="t.ex. 10" onChange={(e) => setLength(e.currentTarget.value)} /></label>
                <label className={fld}><span>Bredd (m)</span>
                  <input type="number" min="0" inputMode="decimal" value={width} placeholder="t.ex. 8" onChange={(e) => setWidth(e.currentTarget.value)} /></label>
              </>
            ) : (
              <>
                <label className={fld}><span>Area (m²)</span>
                  <input type="number" min="0" inputMode="decimal" value={area} placeholder="t.ex. 92" onChange={(e) => setArea(e.currentTarget.value)} /></label>
                <label className={fld}><span>Omkrets (m)</span>
                  <input type="number" min="0" inputMode="decimal" value={perim} placeholder="t.ex. 46" onChange={(e) => setPerim(e.currentTarget.value)} /></label>
              </>
            )}
            <label className={fld}><span>Betongtjocklek (cm)</span>
              <input type="number" min="0" inputMode="decimal" value={thickness} onChange={(e) => setThickness(e.currentTarget.value)} /></label>

            <label className={fld}><span>Kantbalk?</span>
              <select value={edge} onChange={(e) => setEdge(e.currentTarget.value)}>
                <option value="ja">Ja</option><option value="nej">Nej</option>
              </select></label>
            {edge === 'ja' ? (
              <>
                <label className={fld}><span>Kantbalk bredd (cm)</span>
                  <input type="number" min="0" inputMode="decimal" value={edgeW} onChange={(e) => setEdgeW(e.currentTarget.value)} /></label>
                <label className={fld}><span>Kantbalk djup (cm)</span>
                  <input type="number" min="0" inputMode="decimal" value={edgeH} onChange={(e) => setEdgeH(e.currentTarget.value)} /></label>
                <label className={fld}><span>Kamstål i kant (antal stänger)</span>
                  <input type="number" min="0" inputMode="numeric" value={edgeBars} onChange={(e) => setEdgeBars(e.currentTarget.value)} /></label>
              </>
            ) : null}

            <label className={fld}><span>Armeringsnät?</span>
              <select value={mesh} onChange={(e) => setMesh(e.currentTarget.value)}>
                <option value="ja">Ja (150×150)</option><option value="nej">Nej</option>
              </select></label>
            <label className={fld}><span>Cellplast / isolering (mm)</span>
              <input type="number" min="0" inputMode="decimal" value={isoThick} onChange={(e) => setIsoThick(e.currentTarget.value)} /></label>
            <label className={fld}><span>Makadam / bärlager (mm)</span>
              <input type="number" min="0" inputMode="decimal" value={baseThick} onChange={(e) => setBaseThick(e.currentTarget.value)} /></label>
          </>
        ) : null}

        {shape === 'balk' ? (
          <>
            <label className={fld}><span>Längd (m)</span>
              <input type="number" min="0" inputMode="decimal" value={bLen} placeholder="t.ex. 12" onChange={(e) => setBLen(e.currentTarget.value)} /></label>
            <label className={fld}><span>Bredd (cm)</span>
              <input type="number" min="0" inputMode="decimal" value={bWidth} onChange={(e) => setBWidth(e.currentTarget.value)} /></label>
            <label className={fld}><span>Höjd (cm)</span>
              <input type="number" min="0" inputMode="decimal" value={bHeight} onChange={(e) => setBHeight(e.currentTarget.value)} /></label>
          </>
        ) : null}

        {shape === 'plint' ? (
          <>
            <label className={fld}><span>Diameter (cm)</span>
              <input type="number" min="0" inputMode="decimal" value={diam} onChange={(e) => setDiam(e.currentTarget.value)} /></label>
            <label className={fld}><span>Djup (cm)</span>
              <input type="number" min="0" inputMode="decimal" value={depth} onChange={(e) => setDepth(e.currentTarget.value)} /></label>
            <label className={fld}><span>Antal (st)</span>
              <input type="number" min="0" inputMode="numeric" value={count} onChange={(e) => setCount(e.currentTarget.value)} /></label>
          </>
        ) : null}

        <label className={fld}><span>Liter per säck (25 kg)</span>
          <input type="number" min="0" inputMode="decimal" value={bagYield} onChange={(e) => setBagYield(e.currentTarget.value)} /></label>
        <label className={fld}><span>Spill (%)</span>
          <input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} /></label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight">
          <span>Betongvolym inkl. spill</span>
          <strong>{nf(r.volume, 2)} m³</strong>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>Säckar torrbetong (25 kg)</span>
          <strong>{nf(r.bags)} st</strong>
        </div>
        <div className="lm-result-row"><span>Eller storsäck (1000 kg)</span><span>{nf(r.bigBags, 1)} st</span></div>
        <div className="lm-result-row"><span>Blandningsvatten (ca)</span><span>{nf(r.water)} liter</span></div>
        {shape === 'platta' ? (
          <>
            {r.meshSheets > 0 ? <div className="lm-result-row"><span>Armeringsnät (5,0×2,3 m)</span><span>{nf(r.meshSheets)} st · {nf(r.meshArea, 1)} m²</span></div> : null}
            {r.edgeBarsLen > 0 ? <div className="lm-result-row"><span>Kantjärn / kamstål</span><span>{nf(r.edgeBarsLen)} m</span></div> : null}
            {r.isoVol > 0 ? <div className="lm-result-row"><span>Cellplast / EPS</span><span>{nf(r.isoVol, 2)} m³ · {nf(r.isoBoards)} skivor</span></div> : null}
            {r.baseVol > 0 ? <div className="lm-result-row"><span>Makadam / bärlager</span><span>{nf(r.baseVol, 2)} m³</span></div> : null}
          </>
        ) : null}
        <p className="lm-result-fine">
          Uppskattning inkl. spill enligt vanlig uppbyggnad (makadam → cellplast
          200–300 mm → armeringsnät → betong + kantbalk). En L-formad platta har
          större omkrets än en rektangel med samma area, vilket ger mer kantbalk,
          kantisolering och kantjärn. Kontrollera alltid mot ritning och
          konstruktörens dimensionering.
        </p>
        <div className="lm-tool-actions" style={{ marginTop: 16 }}>
          <a className="lm-tool-button" href={r.volume > 0 ? offertUrl : undefined} aria-disabled={r.volume <= 0} onClick={() => gaEvent('offert_from_calculator', { tool: 'betong-kalkylator' })}>
            Skapa offert av det här
          </a>
          <a className="lm-tool-secondary" href={r.volume > 0 ? fakturaUrl : undefined} aria-disabled={r.volume <= 0} onClick={() => gaEvent('faktura_from_calculator', { tool: 'betong-kalkylator' })}>
            Skapa faktura
          </a>
          <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={r.volume <= 0}>Exportera Excel</button>
          <button type="button" className="lm-tool-secondary" onClick={() => void exportPdf()} disabled={r.volume <= 0}>Exportera PDF</button>
        </div>
      </div>
    </div>
  );
}
