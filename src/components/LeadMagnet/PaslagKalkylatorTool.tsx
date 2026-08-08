import { useMemo, useState } from 'react';

// Free markup/margin calculator (påslag vs marginal). Converts a cost into a
// selling price using either a markup % or a target margin %, and shows both so
// the common mix-up between påslag and marginal becomes clear.

function kr(value: number): string {
  return `${value.toLocaleString('sv-SE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kr`;
}
function pct(value: number): string {
  return `${value.toLocaleString('sv-SE', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} %`;
}

export default function PaslagKalkylatorTool() {
  const [cost, setCost] = useState('');
  const [mode, setMode] = useState<'markup' | 'margin'>('markup');
  const [percent, setPercent] = useState('');

  const result = useMemo(() => {
    const c = Math.max(parseFloat(cost.replace(',', '.')) || 0, 0);
    const p = Math.max(parseFloat(percent.replace(',', '.')) || 0, 0) / 100;
    let price: number;
    if (mode === 'markup') {
      price = c * (1 + p);
    } else {
      price = p < 1 ? c / (1 - p) : 0; // margin must be < 100 %
    }
    const profit = price - c;
    const marginPct = price > 0 ? (profit / price) * 100 : 0;
    const markupPct = c > 0 ? (profit / c) * 100 : 0;
    return { cost: c, price, profit, marginPct, markupPct };
  }, [cost, mode, percent]);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Räkna ut påslag och marginal</h2>
        <p className="lm-tool-sub">
          Fyll i din självkostnad och antingen ett påslag eller en önskad marginal – se försäljningspriset, vinsten samt både påslag och marginal.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Självkostnad (kr)</span>
          <input type="number" min="0" inputMode="decimal" value={cost} placeholder="t.ex. 1000" onChange={(e) => setCost(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Räkna med</span>
          <select value={mode} onChange={(e) => setMode(e.currentTarget.value as 'markup' | 'margin')}>
            <option value="markup">Påslag (%)</option>
            <option value="margin">Marginal (%)</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>{mode === 'markup' ? 'Påslag (%)' : 'Marginal (%)'}</span>
          <input type="number" min="0" inputMode="decimal" value={percent} placeholder="t.ex. 30" onChange={(e) => setPercent(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight">
          <span>Försäljningspris (exkl. moms)</span>
          <strong>{kr(result.price)}</strong>
        </div>
        <div className="lm-result-row">
          <span>Vinst</span>
          <span>{kr(result.profit)}</span>
        </div>
        <div className="lm-result-row">
          <span>Påslag</span>
          <span>{pct(result.markupPct)}</span>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>Marginal</span>
          <strong>{pct(result.marginPct)}</strong>
        </div>
        <p className="lm-result-fine">
          Påslag räknas på självkostnaden, marginal räknas på försäljningspriset – därför skiljer sig procenttalen åt. Ett påslag på 30 % ger t.ex. en marginal på cirka 23 %.
        </p>
      </div>
    </div>
  );
}
