import { useMemo, useState } from 'react';

// Free slope (fall) calculator: height difference, percentage and ratio from
// length and fall in mm per metre.
function num(v: string): number { return Math.max(parseFloat(v.replace(',', '.')) || 0, 0); }

export default function FallKalkylatorTool() {
  const [length, setLength] = useState('');
  const [fall, setFall] = useState('15');
  const result = useMemo(() => {
    const l = num(length);
    const f = num(fall);
    const drop = l * f; // mm
    const pct = f / 10; // mm per m -> %
    const ratio = f > 0 ? 1000 / f : 0;
    return { drop, pct, ratio };
  }, [length, fall]);
  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Fall & lutning – räkna ut höjdskillnad</h2>
        <p className="lm-tool-sub">Fyll i längden och fallet i mm per meter så räknar vi ut total höjdskillnad, lutning i procent och som förhållande (1:X). Bra för avlopp, mark och tak.</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Längd (m)</span><input type="number" min="0" inputMode="decimal" value={length} placeholder="t.ex. 6" onChange={(e) => setLength(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Fall (mm per meter)</span><input type="number" min="0" inputMode="decimal" value={fall} onChange={(e) => setFall(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Höjdskillnad</span><strong>{result.drop.toLocaleString('sv-SE', { maximumFractionDigits: 0 })} mm</strong></div>
        <div className="lm-result-row"><span>Lutning</span><span>{result.pct.toLocaleString('sv-SE', { maximumFractionDigits: 2 })} %</span></div>
        <div className="lm-result-row lm-result-total"><span>Förhållande</span><strong>{result.ratio > 0 ? `1:${result.ratio.toLocaleString('sv-SE', { maximumFractionDigits: 0 })}` : '—'}</strong></div>
        <p className="lm-result-fine">Riktvärden: avloppsrör ofta 10–20 mm/m, mark från husgrund minst 15 mm/m (1:50) de första metrarna. Följ gällande krav för din tillämpning.</p>
      </div>
    </div>
  );
}
