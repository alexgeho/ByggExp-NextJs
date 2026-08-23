import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import { downloadMaterialPdf, type MaterialRow } from '../../lib/materialPdf';
import { fakturaHref, offertHref } from '../../lib/offert';

// Regelvägg (stud wall) calculator: studs from length/c/c, syll + hammarband,
// plus the full wall build-up — gips (one or two sides, single/double layer),
// mineralull, skruv and ångspärr — with a deduction for openings (m²). A real
// material list for an inner wall, not just stud count.
function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}
const nf = (v: number, d = 0) =>
  v.toLocaleString('sv-SE', { maximumFractionDigits: d });

const GIPS_BOARD_M2 = 2.88; // 2400 × 1200 mm
const SCREWS_PER_M2 = 20;

export default function ReglarKalkylatorTool() {
  const [length, setLength] = useState('');
  const [height, setHeight] = useState('2.4');
  const [cc, setCc] = useState('600');
  const [openings, setOpenings] = useState('0'); // m² dörrar/fönster
  const [sides, setSides] = useState('2'); // gips-sidor (0,1,2)
  const [layers, setLayers] = useState('1'); // gips-lager per sida
  const [insulation, setInsulation] = useState('ja');
  const [vapour, setVapour] = useState('ja'); // ångspärr/plastfolie
  const [spill, setSpill] = useState('10');

  const r = useMemo(() => {
    const l = num(length), h = num(height), c = num(cc);
    const count = c > 0 && l > 0 ? Math.floor((l * 1000) / c) + 1 : 0;
    const studMeters = count * h;
    const plateMeters = l * 2; // syll + hammarband
    const grossArea = l * h;
    const netArea = Math.max(grossArea - num(openings), 0);
    const spillF = 1 + num(spill) / 100;

    const nSides = num(sides);
    const nLayers = num(layers);
    const gipsArea = netArea * nSides * nLayers;
    const gipsBoards = gipsArea > 0 ? Math.ceil((gipsArea * spillF) / GIPS_BOARD_M2) : 0;
    const screws = Math.ceil(gipsArea * SCREWS_PER_M2);
    const insulM2 = insulation === 'ja' ? netArea : 0;
    const vapourM2 = vapour === 'ja' ? netArea * 1.1 : 0;

    return { count, studMeters, plateMeters, totalTimber: studMeters + plateMeters, netArea, gipsBoards, gipsArea, screws, insulM2, vapourM2 };
  }, [length, height, cc, openings, sides, layers, insulation, vapour, spill]);

  const materialRows = useMemo(() => {
    const rows: MaterialRow[] = [
      { desc: `Reglar (c/c ${cc})`, qty: `${nf(r.count)} st` },
      { desc: 'Reglar, virke', qty: `${nf(r.studMeters, 1)} lpm` },
      { desc: 'Syll + hammarband', qty: `${nf(r.plateMeters, 1)} lpm` },
      { desc: 'Totalt virke', qty: `${nf(r.totalTimber, 1)} lpm` },
    ];
    if (r.gipsBoards > 0) rows.push({ desc: 'Gipsskivor (2400×1200)', qty: `${nf(r.gipsBoards)} st (${nf(r.gipsArea, 1)} m²)` });
    if (r.screws > 0) rows.push({ desc: 'Gipsskruv', qty: `${nf(r.screws)} st` });
    if (r.insulM2 > 0) rows.push({ desc: 'Mineralull / isolering', qty: `${nf(r.insulM2, 1)} m²` });
    if (r.vapourM2 > 0) rows.push({ desc: 'Ångspärr / plastfolie', qty: `${nf(r.vapourM2, 1)} m²` });
    return rows;
  }, [r, cc]);

  const seedRows = [
    { desc: `Reglar (c/c ${cc})`, qty: r.count },
    ...(r.gipsBoards > 0 ? [{ desc: 'Gipsskivor (st)', qty: r.gipsBoards }] : []),
    ...(r.insulM2 > 0 ? [{ desc: 'Mineralull (m²)', qty: Math.round(r.insulM2) }] : []),
    { desc: 'Arbete stommontering', qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);
  const disabled = r.count <= 0;

  const exportCsv = () => {
    gaEvent('export_excel', { tool: 'reglar-kalkylator' });
    downloadCsvRows([['Regelvägg – materiallista', 'byggexp.se'], [], ['Post', 'Mängd'], ...materialRows.map((m) => [m.desc, m.qty])], 'regelvagg-materiallista.csv');
  };
  const exportPdf = () => void downloadMaterialPdf({ title: 'Regelvägg – materiallista', rows: materialRows, filename: 'regelvagg-materiallista.pdf', tool: 'reglar-kalkylator' });

  const fld = 'lm-tool-field';
  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Regelvägg – reglar, gips &amp; isolering</h2>
        <p className="lm-tool-sub">
          Fyll i väggens mått och uppbyggnad så räknar vi reglar, syll/hammarband,
          gipsskivor, skruv, isolering och ångspärr – med avdrag för öppningar.
          Exportera materiallistan till Excel eller PDF.
        </p>
      </div>
      <div className="lm-tool-grid">
        <label className={fld}><span>Väggens längd (m)</span><input type="number" min="0" inputMode="decimal" value={length} placeholder="t.ex. 6" onChange={(e) => setLength(e.currentTarget.value)} /></label>
        <label className={fld}><span>Väggens höjd (m)</span><input type="number" min="0" inputMode="decimal" value={height} onChange={(e) => setHeight(e.currentTarget.value)} /></label>
        <label className={fld}><span>Centrumavstånd c/c (mm)</span><input type="number" min="0" inputMode="numeric" value={cc} onChange={(e) => setCc(e.currentTarget.value)} /></label>
        <label className={fld}><span>Avdrag öppningar (m²)</span><input type="number" min="0" inputMode="decimal" value={openings} onChange={(e) => setOpenings(e.currentTarget.value)} /></label>
        <label className={fld}><span>Gips – sidor</span>
          <select value={sides} onChange={(e) => setSides(e.currentTarget.value)}>
            <option value="2">Båda sidor</option><option value="1">En sida</option><option value="0">Ingen gips</option>
          </select></label>
        <label className={fld}><span>Gips – lager per sida</span>
          <select value={layers} onChange={(e) => setLayers(e.currentTarget.value)}>
            <option value="1">1 lager</option><option value="2">2 lager</option>
          </select></label>
        <label className={fld}><span>Isolering (mineralull)?</span>
          <select value={insulation} onChange={(e) => setInsulation(e.currentTarget.value)}>
            <option value="ja">Ja</option><option value="nej">Nej</option>
          </select></label>
        <label className={fld}><span>Ångspärr / plastfolie?</span>
          <select value={vapour} onChange={(e) => setVapour(e.currentTarget.value)}>
            <option value="ja">Ja</option><option value="nej">Nej</option>
          </select></label>
        <label className={fld}><span>Spill (%)</span><input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Antal reglar</span><strong>{nf(r.count)} st</strong></div>
        <div className="lm-result-row"><span>Reglar, virke</span><span>{nf(r.studMeters, 1)} lpm</span></div>
        <div className="lm-result-row"><span>Syll + hammarband</span><span>{nf(r.plateMeters, 1)} lpm</span></div>
        <div className="lm-result-row lm-result-total"><span>Totalt virke</span><strong>{nf(r.totalTimber, 1)} lpm</strong></div>
        {r.gipsBoards > 0 ? <div className="lm-result-row"><span>Gipsskivor (2400×1200)</span><span>{nf(r.gipsBoards)} st · {nf(r.gipsArea, 1)} m²</span></div> : null}
        {r.screws > 0 ? <div className="lm-result-row"><span>Gipsskruv</span><span>{nf(r.screws)} st</span></div> : null}
        {r.insulM2 > 0 ? <div className="lm-result-row"><span>Mineralull / isolering</span><span>{nf(r.insulM2, 1)} m²</span></div> : null}
        {r.vapourM2 > 0 ? <div className="lm-result-row"><span>Ångspärr / plastfolie</span><span>{nf(r.vapourM2, 1)} m²</span></div> : null}
        <p className="lm-result-fine">
          Antal reglar = längd ÷ c/c + 1 (vanligt c/c 450 eller 600 mm). Gips räknas
          på nettoytan efter avdrag för öppningar, per sida och lager. Gipsskiva
          2400×1200 mm = 2,88 m². Kontrollera mot ritning och konstruktion.
        </p>
        <div className="lm-tool-actions" style={{ marginTop: 16 }}>
          <a className="lm-tool-button" href={disabled ? undefined : offertUrl} aria-disabled={disabled} onClick={() => gaEvent('offert_from_calculator', { tool: 'reglar-kalkylator' })}>Skapa offert av det här</a>
          <a className="lm-tool-secondary" href={disabled ? undefined : fakturaUrl} aria-disabled={disabled} onClick={() => gaEvent('faktura_from_calculator', { tool: 'reglar-kalkylator' })}>Skapa faktura</a>
          <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={disabled}>Exportera Excel</button>
          <button type="button" className="lm-tool-secondary" onClick={exportPdf} disabled={disabled}>Exportera PDF</button>
        </div>
      </div>
    </div>
  );
}
