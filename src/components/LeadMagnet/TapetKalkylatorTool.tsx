import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import { fakturaHref, offertHref } from '../../lib/offert';

// Wallpaper calculator using the correct strip (våder) method: wallpaper is hung
// in full-height drops, so the real driver is how many drops fit in a roll —
// floor(roll length / (wall height + pattern repeat)) — not raw area ÷ roll area.
// A tall wall or a large repeat (rapport) can drop a 10 m roll from 4 usable
// drops to 3, which a flat area+spill method silently misses.
function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}
const nf = (v: number, d = 0) =>
  v.toLocaleString('sv-SE', { maximumFractionDigits: d });

export default function TapetKalkylatorTool() {
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

    // Each drop must be at least wall height; with a pattern you lose up to one
    // repeat per drop for matching.
    const stripLen = H + rep;
    const stripsPerRoll = stripLen > 0 ? Math.floor(rLen / stripLen) : 0;
    const stripsNeeded =
      rW > 0 && W > 0 ? Math.ceil((W / rW) * (1 + num(extra) / 100)) : 0;
    const rolls =
      stripsPerRoll > 0 && stripsNeeded > 0
        ? Math.ceil(stripsNeeded / stripsPerRoll)
        : 0;
    return { stripsPerRoll, stripsNeeded, rolls };
  }, [wallWidth, height, repeat, rollLen, rollWidth, extra]);

  const seedRows = [
    { desc: 'Tapet (rullar)', qty: r.rolls },
    { desc: 'Arbete tapetsering', qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);
  const disabled = r.rolls <= 0;

  const exportCsv = () => {
    gaEvent('export_excel', { tool: 'tapet-kalkylator' });
    downloadCsvRows(
      [
        ['Tapetkalkylator', 'byggexp.se'],
        [],
        ['Post', 'Mängd'],
        ['Våder per rulle', `${nf(r.stripsPerRoll)} st`],
        ['Antal våder som behövs', `${nf(r.stripsNeeded)} st`],
        ['Antal rullar', `${nf(r.rolls)} st`],
      ],
      'tapet-materiallista.csv',
    );
  };

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Tapetkalkylator – hur många rullar?</h2>
        <p className="lm-tool-sub">
          Tapet hängs i hela våder, så vi räknar hur många våder som får plats på
          en rulle (rullängd ÷ takhöjd + mönsterrapport) och hur många våder
          väggarna kräver – det ger rätt antal rullar även för höga väggar och
          stora mönster.
        </p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Total väggbredd (m)</span><input type="number" min="0" inputMode="decimal" value={wallWidth} placeholder="t.ex. 12" onChange={(e) => setWallWidth(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Takhöjd (m)</span><input type="number" min="0" inputMode="decimal" value={height} onChange={(e) => setHeight(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Mönsterrapport (cm)</span><input type="number" min="0" inputMode="decimal" value={repeat} onChange={(e) => setRepeat(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Rullängd (m)</span><input type="number" min="0" inputMode="decimal" value={rollLen} onChange={(e) => setRollLen(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Rullbredd (cm)</span><input type="number" min="0" inputMode="decimal" value={rollWidth} onChange={(e) => setRollWidth(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Extra för kap/misstag (%)</span><input type="number" min="0" inputMode="decimal" value={extra} onChange={(e) => setExtra(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row"><span>Våder per rulle</span><span>{nf(r.stripsPerRoll)} st</span></div>
        <div className="lm-result-row"><span>Antal våder som behövs</span><span>{nf(r.stripsNeeded)} st</span></div>
        <div className="lm-result-row lm-result-highlight lm-result-total"><span>Antal rullar</span><strong>{nf(r.rolls)} st</strong></div>
        <p className="lm-result-fine">
          En uppskattning. Standardrulle är ofta 10,05 × 0,53 m. Mönsterrapport
          (rapport) står på tapeten – stora mönster ger färre våder per rulle.
          Köp gärna en extra rulle ur samma parti (batch) som reserv.
        </p>
      </div>
      <div className="lm-tool-actions" style={{ marginTop: 16 }}>
        <a className="lm-tool-button" href={disabled ? undefined : offertUrl} aria-disabled={disabled} onClick={() => gaEvent('offert_from_calculator', { tool: 'tapet-kalkylator' })}>
          Skapa offert av det här
        </a>
        <a className="lm-tool-secondary" href={disabled ? undefined : fakturaUrl} aria-disabled={disabled} onClick={() => gaEvent('faktura_from_calculator', { tool: 'tapet-kalkylator' })}>
          Skapa faktura
        </a>
        <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={disabled}>
          Exportera till Excel
        </button>
      </div>
    </div>
  );
}
