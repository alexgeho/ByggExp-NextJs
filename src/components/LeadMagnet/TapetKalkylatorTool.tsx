import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import type { CalcLocale } from '../../lib/locale';
import { downloadMaterialPdf } from '../../lib/materialPdf';
import { fakturaHref, offertHref } from '../../lib/offert';

// Wallpaper calculator using the correct strip (våder) method: wallpaper is hung
// in full-height drops, so the real driver is how many drops fit in a roll —
// floor(roll length / (wall height + pattern repeat)) — not raw area ÷ roll area.
// Bilingual: sv default, en for /en/verktyg; nb falls back to sv text.
function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

export default function TapetKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const nf = (v: number, d = 0) => v.toLocaleString(en ? 'en-GB' : 'sv-SE', { maximumFractionDigits: d });
  const t = en
    ? {
        title: 'Wallpaper calculator – how many rolls?',
        sub: 'Wallpaper is hung in full drops, so we work out how many drops fit on a roll (roll length ÷ ceiling height + pattern repeat) and how many drops the walls need – giving the right number of rolls even for tall walls and large patterns.',
        wallWidth: 'Total wall width (m)', height: 'Ceiling height (m)', repeat: 'Pattern repeat (cm)',
        rollLen: 'Roll length (m)', rollWidth: 'Roll width (cm)', extra: 'Extra for cuts/mistakes (%)',
        rPerRoll: 'Drops per roll', rNeeded: 'Drops needed', rRolls: 'Number of rolls',
        pcs: 'pcs',
        fine: 'An estimate. A standard roll is often 10.05 × 0.53 m. The pattern repeat is on the wallpaper – large patterns give fewer drops per roll. Buy an extra roll from the same batch as a reserve.',
        offert: 'Create quote from this', faktura: 'Create invoice', excel: 'Export Excel', pdf: 'Export PDF',
        csvTitle: 'Wallpaper calculator', post: 'Item', qty: 'Quantity',
        mPerRoll: 'Drops per roll', mNeeded: 'Drops needed', mRolls: 'Number of rolls',
        pdfTitle: 'Wallpaper – material list', pdfNote: 'Estimate. Buy an extra roll from the same batch as a reserve.',
        soRolls: 'Wallpaper (rolls)', soLabour: 'Wallpapering labour',
      }
    : {
        title: 'Tapetkalkylator – hur många rullar?',
        sub: 'Tapet hängs i hela våder, så vi räknar hur många våder som får plats på en rulle (rullängd ÷ takhöjd + mönsterrapport) och hur många våder väggarna kräver – det ger rätt antal rullar även för höga väggar och stora mönster.',
        wallWidth: 'Total väggbredd (m)', height: 'Takhöjd (m)', repeat: 'Mönsterrapport (cm)',
        rollLen: 'Rullängd (m)', rollWidth: 'Rullbredd (cm)', extra: 'Extra för kap/misstag (%)',
        rPerRoll: 'Våder per rulle', rNeeded: 'Antal våder som behövs', rRolls: 'Antal rullar',
        pcs: 'st',
        fine: 'En uppskattning. Standardrulle är ofta 10,05 × 0,53 m. Mönsterrapport (rapport) står på tapeten – stora mönster ger färre våder per rulle. Köp gärna en extra rulle ur samma parti (batch) som reserv.',
        offert: 'Skapa offert av det här', faktura: 'Skapa faktura', excel: 'Exportera Excel', pdf: 'Exportera PDF',
        csvTitle: 'Tapetkalkylator', post: 'Post', qty: 'Mängd',
        mPerRoll: 'Våder per rulle', mNeeded: 'Antal våder som behövs', mRolls: 'Antal rullar',
        pdfTitle: 'Tapet – materiallista', pdfNote: 'Uppskattning. Köp gärna en extra rulle ur samma parti (batch) som reserv.',
        soRolls: 'Tapet (rullar)', soLabour: 'Arbete tapetsering',
      };

  const [wallWidth, setWallWidth] = useState(''); // total väggbredd, m
  const [height, setHeight] = useState('2.5'); // takhöjd, m
  const [repeat, setRepeat] = useState('0'); // mönsterrapport, cm
  const [rollLen, setRollLen] = useState('10.05'); // rullängd, m
  const [rollWidth, setRollWidth] = useState('53'); // rullbredd, cm
  const [extra, setExtra] = useState('10'); // extra för kap/misstag, %

  const r = useMemo(() => {
    const W = num(wallWidth);
    const H = num(height);
    const rep = num(repeat) / 100;
    const rLen = num(rollLen);
    const rW = num(rollWidth) / 100;

    const stripLen = H + rep;
    const stripsPerRoll = stripLen > 0 ? Math.floor(rLen / stripLen) : 0;
    const stripsNeeded = rW > 0 && W > 0 ? Math.ceil((W / rW) * (1 + num(extra) / 100)) : 0;
    const rolls = stripsPerRoll > 0 && stripsNeeded > 0 ? Math.ceil(stripsNeeded / stripsPerRoll) : 0;
    return { stripsPerRoll, stripsNeeded, rolls };
  }, [wallWidth, height, repeat, rollLen, rollWidth, extra]);

  const seedRows = [
    { desc: t.soRolls, qty: r.rolls },
    { desc: t.soLabour, qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);
  const disabled = r.rolls <= 0;

  const exportCsv = () => {
    gaEvent('export_excel', { tool: 'tapet-kalkylator' });
    downloadCsvRows(
      [
        [t.csvTitle, 'byggexp.se'],
        [],
        [t.post, t.qty],
        [t.mPerRoll, `${nf(r.stripsPerRoll)} ${t.pcs}`],
        [t.mNeeded, `${nf(r.stripsNeeded)} ${t.pcs}`],
        [t.mRolls, `${nf(r.rolls)} ${t.pcs}`],
      ],
      'tapet-materiallista.csv',
    );
  };

  const exportPdf = () => void downloadMaterialPdf({
    title: t.pdfTitle,
    rows: [
      { desc: t.mPerRoll, qty: `${nf(r.stripsPerRoll)} ${t.pcs}` },
      { desc: t.mNeeded, qty: `${nf(r.stripsNeeded)} ${t.pcs}` },
      { desc: t.mRolls, qty: `${nf(r.rolls)} ${t.pcs}` },
    ],
    filename: 'tapet-materiallista.pdf',
    tool: 'tapet-kalkylator',
    note: t.pdfNote,
  });

  return (
    <div className="lm-tool lm-tool--split">
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>{t.wallWidth}</span><input type="number" min="0" inputMode="decimal" value={wallWidth} placeholder={en ? 'e.g. 12' : 't.ex. 12'} onChange={(e) => setWallWidth(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.height}</span><input type="number" min="0" inputMode="decimal" value={height} onChange={(e) => setHeight(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.repeat}</span><input type="number" min="0" inputMode="decimal" value={repeat} onChange={(e) => setRepeat(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.rollLen}</span><input type="number" min="0" inputMode="decimal" value={rollLen} onChange={(e) => setRollLen(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.rollWidth}</span><input type="number" min="0" inputMode="decimal" value={rollWidth} onChange={(e) => setRollWidth(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.extra}</span><input type="number" min="0" inputMode="decimal" value={extra} onChange={(e) => setExtra(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row"><span>{t.rPerRoll}</span><span>{nf(r.stripsPerRoll)} {t.pcs}</span></div>
        <div className="lm-result-row"><span>{t.rNeeded}</span><span>{nf(r.stripsNeeded)} {t.pcs}</span></div>
        <div className="lm-result-row lm-result-highlight lm-result-total"><span>{t.rRolls}</span><strong>{nf(r.rolls)} {t.pcs}</strong></div>
        <p className="lm-result-fine">{t.fine}</p>
      </div>
      <div className="lm-tool-actions" style={{ marginTop: 16 }}>
        <a className="lm-tool-button" href={disabled ? undefined : offertUrl} aria-disabled={disabled} onClick={() => gaEvent('offert_from_calculator', { tool: 'tapet-kalkylator' })}>
          {t.offert}
        </a>
        <a className="lm-tool-secondary" href={disabled ? undefined : fakturaUrl} aria-disabled={disabled} onClick={() => gaEvent('faktura_from_calculator', { tool: 'tapet-kalkylator' })}>
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
