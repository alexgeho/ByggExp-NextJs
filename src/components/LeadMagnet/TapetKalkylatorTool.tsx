import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import { fakturaHref, offertHref } from '../../lib/offert';

// Wallpaper calculator: wall area + waste → number of rolls. Large patterns
// need more waste for matching, so the waste field defaults higher.
function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}
const nf = (v: number, d = 0) =>
  v.toLocaleString('sv-SE', { maximumFractionDigits: d });

export default function TapetKalkylatorTool() {
  const [area, setArea] = useState('');
  const [rollArea, setRollArea] = useState('5');
  const [spill, setSpill] = useState('15');

  const r = useMemo(() => {
    const need = num(area) * (1 + num(spill) / 100);
    const roll = num(rollArea);
    return { need, rolls: roll > 0 ? Math.ceil(need / roll) : 0 };
  }, [area, rollArea, spill]);

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
        ['Behov inkl. spill', `${nf(r.need, 1)} m²`],
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
          Fyll i väggytan och rullens yta så räknar vi ut hur många tapetrullar du
          behöver. Ett påslag för mönsterpassning och spill ingår.
        </p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Väggyta att tapetsera (m²)</span><input type="number" min="0" inputMode="decimal" value={area} placeholder="t.ex. 30" onChange={(e) => setArea(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Yta per rulle (m²)</span><input type="number" min="0" inputMode="decimal" value={rollArea} onChange={(e) => setRollArea(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Spill / mönsterpassning (%)</span><input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Behov inkl. spill</span><strong>{nf(r.need, 1)} m²</strong></div>
        <div className="lm-result-row lm-result-total"><span>Antal rullar</span><strong>{nf(r.rolls)} st</strong></div>
        <p className="lm-result-fine">
          En uppskattning. Stora mönster (stor rapport) kräver mer spill – höj då
          procenten. En standardrulle är ofta ca 5 m² – kontrollera på tapeten.
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
