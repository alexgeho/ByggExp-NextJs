import { useMemo, useState } from 'react';

// Free wallpaper calculator: wall area + waste → number of rolls.
function num(v: string): number { return Math.max(parseFloat(v.replace(',', '.')) || 0, 0); }

export default function TapetKalkylatorTool() {
  const [area, setArea] = useState('');
  const [rollArea, setRollArea] = useState('5');
  const [spill, setSpill] = useState('15');
  const result = useMemo(() => {
    const need = num(area) * (1 + num(spill) / 100);
    const roll = num(rollArea);
    return { need, rolls: roll > 0 ? Math.ceil(need / roll) : 0 };
  }, [area, rollArea, spill]);
  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Tapetberäknare – hur många rullar?</h2>
        <p className="lm-tool-sub">Fyll i väggytan och rullens yta så räknar vi ut hur många tapetrullar du behöver. Ett påslag för mönsterpassning och spill ingår.</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Väggyta att tapetsera (m²)</span><input type="number" min="0" inputMode="decimal" value={area} placeholder="t.ex. 30" onChange={(e) => setArea(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Yta per rulle (m²)</span><input type="number" min="0" inputMode="decimal" value={rollArea} onChange={(e) => setRollArea(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Spill / mönsterpassning (%)</span><input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Behov inkl. spill</span><strong>{result.need.toLocaleString('sv-SE', { maximumFractionDigits: 1 })} m²</strong></div>
        <div className="lm-result-row lm-result-total"><span>Antal rullar</span><strong>{result.rolls.toLocaleString('sv-SE')} st</strong></div>
        <p className="lm-result-fine">En uppskattning. Stora mönster kräver mer spill. En standardrulle är ofta ca 5 m² – kontrollera på tapeten.</p>
      </div>
    </div>
  );
}
