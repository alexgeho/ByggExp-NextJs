import { useMemo, useState } from 'react';

// Free slope (fall) calculator: height difference, percentage and ratio from
// length and fall in mm per metre.
function num(v: string): number { return Math.max(parseFloat(v.replace(',', '.')) || 0, 0); }

type Unit = 'mmpm' | 'procent' | 'ratio';

export default function FallKalkylatorTool() {
  const [length, setLength] = useState('');
  const [val, setVal] = useState('15');
  const [unit, setUnit] = useState<Unit>('mmpm');
  const result = useMemo(() => {
    const l = num(length);
    const v = num(val);
    // Normalise whatever unit the user entered to mm per metre.
    const f = unit === 'procent' ? v * 10 : unit === 'ratio' ? (v > 0 ? 1000 / v : 0) : v;
    const drop = l * f; // mm
    const pct = f / 10; // mm per m -> %
    const ratio = f > 0 ? 1000 / f : 0;
    return { drop, pct, ratio, f };
  }, [length, val, unit]);
  const unitHint = unit === 'procent' ? 't.ex. 2' : unit === 'ratio' ? 't.ex. 50' : 't.ex. 15';
  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Fall & lutning – räkna ut höjdskillnad</h2>
        <p className="lm-tool-sub">Fyll i längden och fallet i mm per meter så räknar vi ut total höjdskillnad, lutning i procent och som förhållande (1:X). Bra för avlopp, mark och tak.</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Längd (m)</span><input type="number" min="0" inputMode="decimal" value={length} placeholder="t.ex. 6" onChange={(e) => setLength(e.currentTarget.value)} /></label>
        <label className="lm-tool-field">
          <span>Fall angivet som</span>
          <select value={unit} onChange={(e) => setUnit(e.currentTarget.value as Unit)}>
            <option value="mmpm">mm per meter</option>
            <option value="procent">Procent (%)</option>
            <option value="ratio">Förhållande (1:X)</option>
          </select>
        </label>
        <label className="lm-tool-field"><span>{unit === 'procent' ? 'Fall (%)' : unit === 'ratio' ? 'Fall (1:X – ange X)' : 'Fall (mm per meter)'}</span><input type="number" min="0" inputMode="decimal" value={val} placeholder={unitHint} onChange={(e) => setVal(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Höjdskillnad</span><strong>{result.drop.toLocaleString('sv-SE', { maximumFractionDigits: 0 })} mm</strong></div>
        <div className="lm-result-row"><span>Fall</span><span>{result.f.toLocaleString('sv-SE', { maximumFractionDigits: 1 })} mm/m</span></div>
        <div className="lm-result-row"><span>Lutning</span><span>{result.pct.toLocaleString('sv-SE', { maximumFractionDigits: 2 })} %</span></div>
        <div className="lm-result-row lm-result-total"><span>Förhållande</span><strong>{result.ratio > 0 ? `1:${result.ratio.toLocaleString('sv-SE', { maximumFractionDigits: 0 })}` : '—'}</strong></div>
        <p className="lm-result-fine">Riktvärden: avloppsrör ofta 10–20 mm/m, mark från husgrund minst 15 mm/m (1:50) de första metrarna, fall mot golvbrunn i dusch 1:150 (7 mm/m) till 1:50 (20 mm/m). Följ gällande branschregler för din tillämpning.</p>
      </div>
    </div>
  );
}
