import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import { downloadMaterialPdf } from '../../lib/materialPdf';
import { fakturaHref, offertHref } from '../../lib/offert';

// Decking calculator: lineal metres and boards from area, board width, gap and
// waste — plus the joists (reglar/bärlina) underneath at a chosen c/c.
function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}
const nf = (v: number, d = 0) =>
  v.toLocaleString('sv-SE', { maximumFractionDigits: d });

export default function TrallKalkylatorTool() {
  const [area, setArea] = useState('');
  const [board, setBoard] = useState('95');
  const [gap, setGap] = useState('4');
  const [len, setLen] = useState('3.6');
  const [cc, setCc] = useState('600');
  const [spill, setSpill] = useState('10');

  const r = useMemo(() => {
    const pitch = (num(board) + num(gap)) / 1000; // m
    const spillF = 1 + num(spill) / 100;
    const meters = pitch > 0 ? (num(area) / pitch) * spillF : 0;
    const l = num(len);
    const boards = l > 0 ? Math.ceil(meters / l) : 0;
    // Joists run across the boards; total joist length ≈ area / c/c.
    const ccM = num(cc) / 1000;
    const joistM = ccM > 0 ? num(area) / ccM : 0;
    return { meters, boards, joistM };
  }, [area, board, gap, len, cc, spill]);

  const seedRows = [
    { desc: 'Trall (löpmeter)', qty: Math.round(r.meters) },
    { desc: 'Trallbrädor', qty: r.boards },
    { desc: `Reglar/bärlina c/c ${cc} (lpm)`, qty: Math.round(r.joistM) },
    { desc: 'Arbete trallläggning', qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);
  const disabled = r.boards <= 0;

  const exportCsv = () => {
    gaEvent('export_excel', { tool: 'trall-kalkylator' });
    downloadCsvRows(
      [
        ['Trallkalkylator', 'byggexp.se'],
        [],
        ['Post', 'Mängd'],
        ['Löpmeter trall', `${nf(r.meters)} lpm`],
        ['Trallbrädor', `${nf(r.boards)} st`],
        [`Reglar/bärlina c/c ${cc}`, `${nf(r.joistM)} lpm`],
      ],
      'trall-materiallista.csv',
    );
  };

  const exportPdf = () => void downloadMaterialPdf({
    title: 'Trall – materiallista',
    rows: [
      { desc: 'Löpmeter trall', qty: `${nf(r.meters)} lpm` },
      { desc: 'Trallbrädor', qty: `${nf(r.boards)} st` },
      { desc: `Reglar/bärlina c/c ${cc}`, qty: `${nf(r.joistM)} lpm` },
    ],
    filename: 'trall-materiallista.pdf',
    tool: 'trall-kalkylator',
  });

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Trallkalkylator – brädor och reglar</h2>
        <p className="lm-tool-sub">
          Fyll i altanens yta, brädans bredd och springan så räknar vi ut löpmeter
          trall, antal brädor och reglar/bärlina under trallen – inkl. spill.
        </p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Yta (m²)</span><input type="number" min="0" inputMode="decimal" value={area} placeholder="t.ex. 20" onChange={(e) => setArea(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Brädans bredd (mm)</span><input type="number" min="0" inputMode="decimal" value={board} onChange={(e) => setBoard(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Springa (mm)</span><input type="number" min="0" inputMode="decimal" value={gap} onChange={(e) => setGap(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Brädans längd (m)</span><input type="number" min="0" inputMode="decimal" value={len} onChange={(e) => setLen(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Reglar c/c (mm)</span><input type="number" min="0" inputMode="numeric" value={cc} onChange={(e) => setCc(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Spill (%)</span><input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Löpmeter trall</span><strong>{nf(r.meters)} lpm</strong></div>
        <div className="lm-result-row lm-result-total"><span>Antal brädor</span><strong>{nf(r.boards)} st</strong></div>
        <div className="lm-result-row"><span>Reglar/bärlina (c/c {cc})</span><span>{nf(r.joistM)} lpm</span></div>
        <p className="lm-result-fine">
          En uppskattning. Springan påverkar åtgången. Reglar räknas som total längd
          vid valt c/c – lägg till stolpar/plintar och infästning separat.
        </p>
      </div>
      <div className="lm-tool-actions" style={{ marginTop: 16 }}>
        <a className="lm-tool-button" href={disabled ? undefined : offertUrl} aria-disabled={disabled} onClick={() => gaEvent('offert_from_calculator', { tool: 'trall-kalkylator' })}>
          Skapa offert av det här
        </a>
        <a className="lm-tool-secondary" href={disabled ? undefined : fakturaUrl} aria-disabled={disabled} onClick={() => gaEvent('faktura_from_calculator', { tool: 'trall-kalkylator' })}>
          Skapa faktura
        </a>
        <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={disabled}>
          Exportera Excel
        </button>
        <button type="button" className="lm-tool-secondary" onClick={exportPdf} disabled={disabled}>
          Exportera PDF
        </button>
      </div>
    </div>
  );
}
