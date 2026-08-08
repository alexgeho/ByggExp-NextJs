import { useMemo, useState } from 'react';

// Free screw/nail quantity calculator: count and boxes from area × per m².
function num(v: string): number { return Math.max(parseFloat(v.replace(',', '.')) || 0, 0); }

export default function SkruvKalkylatorTool() {
  const [area, setArea] = useState('');
  const [perM2, setPerM2] = useState('20');
  const [perBox, setPerBox] = useState('200');
  const result = useMemo(() => {
    const count = Math.ceil(num(area) * num(perM2));
    const b = num(perBox);
    return { count, boxes: b > 0 ? Math.ceil(count / b) : 0 };
  }, [area, perM2, perBox]);
  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Skruv- och spikåtgång</h2>
        <p className="lm-tool-sub">Fyll i ytan och åtgången per m² så räknar vi ut antal skruvar/spikar och antal askar. Åtgången beror på infästning och c/c – justera värdet (gips ofta ca 15–20 per m²).</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Yta (m²)</span><input type="number" min="0" inputMode="decimal" value={area} placeholder="t.ex. 30" onChange={(e) => setArea(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Åtgång (st per m²)</span><input type="number" min="0" inputMode="decimal" value={perM2} onChange={(e) => setPerM2(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Antal per ask</span><input type="number" min="0" inputMode="numeric" value={perBox} onChange={(e) => setPerBox(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Antal skruvar/spik</span><strong>{result.count.toLocaleString('sv-SE')} st</strong></div>
        <div className="lm-result-row lm-result-total"><span>Antal askar</span><strong>{result.boxes.toLocaleString('sv-SE')} st</strong></div>
        <p className="lm-result-fine">En uppskattning. Räkna med marginal – det går snabbt åt fler vid komplicerade infästningar. Följ eventuella krav på infästningsavstånd.</p>
      </div>
    </div>
  );
}
