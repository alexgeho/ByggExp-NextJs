import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import type { CalcLocale } from '../../lib/locale';
import { downloadMaterialPdf } from '../../lib/materialPdf';
import { fakturaHref, offertHref } from '../../lib/offert';

// Decking calculator: lineal metres and boards from area, board width, gap and
// waste — plus the joists (reglar/bärlina) underneath at a chosen c/c.
// Bilingual: sv default, en for /en/verktyg; nb falls back to sv text.
function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

export default function TrallKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const nf = (v: number, d = 0) => v.toLocaleString(en ? 'en-GB' : 'sv-SE', { maximumFractionDigits: d });
  const t = en
    ? {
        title: 'Decking calculator – boards and joists',
        sub: 'Enter the deck area, board width and gap and we work out the linear metres of decking, the number of boards and the joists/bearers under the deck – incl. waste.',
        area: 'Area (m²)', board: 'Board width (mm)', gap: 'Gap (mm)', len: 'Board length (m)', cc: 'Joist c/c (mm)', spill: 'Waste (%)',
        rMeters: 'Linear metres of decking', rBoards: 'Number of boards', rJoist: (cc: string) => `Joists/bearers (c/c ${cc})`,
        lm: 'lm', pcs: 'pcs',
        fine: 'An estimate. The gap affects consumption. Joists are counted as total length at the chosen c/c – add posts/piers and fixings separately.',
        offert: 'Create quote from this', faktura: 'Create invoice', excel: 'Export Excel', pdf: 'Export PDF',
        csvTitle: 'Decking calculator', post: 'Item', qty: 'Quantity',
        mMeters: 'Linear metres of decking', mBoards: 'Decking boards', mJoist: (cc: string) => `Joists/bearers c/c ${cc}`,
        pdfTitle: 'Decking – material list',
        soMeters: 'Decking (linear metres)', soBoards: 'Decking boards', soJoist: (cc: string) => `Joists/bearers c/c ${cc} (lm)`, soLabour: 'Decking labour',
      }
    : {
        title: 'Trallkalkylator – brädor och reglar',
        sub: 'Fyll i altanens yta, brädans bredd och springan så räknar vi ut löpmeter trall, antal brädor och reglar/bärlina under trallen – inkl. spill.',
        area: 'Yta (m²)', board: 'Brädans bredd (mm)', gap: 'Springa (mm)', len: 'Brädans längd (m)', cc: 'Reglar c/c (mm)', spill: 'Spill (%)',
        rMeters: 'Löpmeter trall', rBoards: 'Antal brädor', rJoist: (cc: string) => `Reglar/bärlina (c/c ${cc})`,
        lm: 'lpm', pcs: 'st',
        fine: 'En uppskattning. Springan påverkar åtgången. Reglar räknas som total längd vid valt c/c – lägg till stolpar/plintar och infästning separat.',
        offert: 'Skapa offert av det här', faktura: 'Skapa faktura', excel: 'Exportera Excel', pdf: 'Exportera PDF',
        csvTitle: 'Trallkalkylator', post: 'Post', qty: 'Mängd',
        mMeters: 'Löpmeter trall', mBoards: 'Trallbrädor', mJoist: (cc: string) => `Reglar/bärlina c/c ${cc}`,
        pdfTitle: 'Trall – materiallista',
        soMeters: 'Trall (löpmeter)', soBoards: 'Trallbrädor', soJoist: (cc: string) => `Reglar/bärlina c/c ${cc} (lpm)`, soLabour: 'Arbete trallläggning',
      };

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
    const ccM = num(cc) / 1000;
    const joistM = ccM > 0 ? num(area) / ccM : 0;
    return { meters, boards, joistM };
  }, [area, board, gap, len, cc, spill]);

  const seedRows = [
    { desc: t.soMeters, qty: Math.round(r.meters) },
    { desc: t.soBoards, qty: r.boards },
    { desc: t.soJoist(cc), qty: Math.round(r.joistM) },
    { desc: t.soLabour, qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);
  const disabled = r.boards <= 0;

  const exportCsv = () => {
    gaEvent('export_excel', { tool: 'trall-kalkylator' });
    downloadCsvRows(
      [
        [t.csvTitle, 'byggexp.se'],
        [],
        [t.post, t.qty],
        [t.mMeters, `${nf(r.meters)} ${t.lm}`],
        [t.mBoards, `${nf(r.boards)} ${t.pcs}`],
        [t.mJoist(cc), `${nf(r.joistM)} ${t.lm}`],
      ],
      'trall-materiallista.csv',
    );
  };

  const exportPdf = () => void downloadMaterialPdf({
    title: t.pdfTitle,
    rows: [
      { desc: t.mMeters, qty: `${nf(r.meters)} ${t.lm}` },
      { desc: t.mBoards, qty: `${nf(r.boards)} ${t.pcs}` },
      { desc: t.mJoist(cc), qty: `${nf(r.joistM)} ${t.lm}` },
    ],
    filename: 'trall-materiallista.pdf',
    tool: 'trall-kalkylator',
  });

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">{t.title}</h2>
        <p className="lm-tool-sub">{t.sub}</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>{t.area}</span><input type="number" min="0" inputMode="decimal" value={area} placeholder={en ? 'e.g. 20' : 't.ex. 20'} onChange={(e) => setArea(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.board}</span><input type="number" min="0" inputMode="decimal" value={board} onChange={(e) => setBoard(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.gap}</span><input type="number" min="0" inputMode="decimal" value={gap} onChange={(e) => setGap(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.len}</span><input type="number" min="0" inputMode="decimal" value={len} onChange={(e) => setLen(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.cc}</span><input type="number" min="0" inputMode="numeric" value={cc} onChange={(e) => setCc(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.spill}</span><input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>{t.rMeters}</span><strong>{nf(r.meters)} {t.lm}</strong></div>
        <div className="lm-result-row lm-result-total"><span>{t.rBoards}</span><strong>{nf(r.boards)} {t.pcs}</strong></div>
        <div className="lm-result-row"><span>{t.rJoist(cc)}</span><span>{nf(r.joistM)} {t.lm}</span></div>
        <p className="lm-result-fine">{t.fine}</p>
      </div>
      <div className="lm-tool-actions" style={{ marginTop: 16 }}>
        <a className="lm-tool-button" href={disabled ? undefined : offertUrl} aria-disabled={disabled} onClick={() => gaEvent('offert_from_calculator', { tool: 'trall-kalkylator' })}>
          {t.offert}
        </a>
        <a className="lm-tool-secondary" href={disabled ? undefined : fakturaUrl} aria-disabled={disabled} onClick={() => gaEvent('faktura_from_calculator', { tool: 'trall-kalkylator' })}>
          {t.faktura}
        </a>
        <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={disabled}>
          {t.excel}
        </button>
        <button type="button" className="lm-tool-secondary" onClick={exportPdf} disabled={disabled}>
          {t.pdf}
        </button>
      </div>
    </div>
  );
}
