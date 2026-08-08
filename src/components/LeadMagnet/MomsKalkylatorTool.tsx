import { useMemo, useState } from 'react';

// Free Swedish VAT (moms) calculator. Rates: 25 % (standard, bygg), 12 %, 6 %.
// Enter an amount and whether it's excl. or incl. moms — get all three values.

const RATES = [25, 12, 6];

function kr(value: number): string {
  return `${value.toLocaleString('sv-SE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kr`;
}

export default function MomsKalkylatorTool() {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState(25);
  const [mode, setMode] = useState<'excl' | 'incl'>('excl');

  const result = useMemo(() => {
    const value = Math.max(parseFloat(amount.replace(',', '.')) || 0, 0);
    const r = rate / 100;
    let excl: number;
    let incl: number;
    if (mode === 'excl') {
      excl = value;
      incl = value * (1 + r);
    } else {
      incl = value;
      excl = value / (1 + r);
    }
    return { excl, moms: incl - excl, incl };
  }, [amount, rate, mode]);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Räkna ut moms</h2>
        <p className="lm-tool-sub">
          Fyll i ett belopp och välj momssats – se belopp exklusive moms, själva momsen och beloppet inklusive moms. Standardmomsen för byggtjänster är 25 %.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Belopp (kr)</span>
          <input
            type="number"
            min="0"
            inputMode="decimal"
            value={amount}
            placeholder="t.ex. 10000"
            onChange={(e) => setAmount(e.currentTarget.value)}
          />
        </label>
        <label className="lm-tool-field">
          <span>Beloppet är</span>
          <select value={mode} onChange={(e) => setMode(e.currentTarget.value as 'excl' | 'incl')}>
            <option value="excl">Exklusive moms</option>
            <option value="incl">Inklusive moms</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>Momssats</span>
          <select value={rate} onChange={(e) => setRate(parseInt(e.currentTarget.value, 10))}>
            {RATES.map((r) => (
              <option key={r} value={r}>{r} %</option>
            ))}
          </select>
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row">
          <span>Belopp exkl. moms</span>
          <span>{kr(result.excl)}</span>
        </div>
        <div className="lm-result-row lm-result-highlight">
          <span>Moms ({rate} %)</span>
          <strong>{kr(result.moms)}</strong>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>Belopp inkl. moms</span>
          <strong>{kr(result.incl)}</strong>
        </div>
      </div>
    </div>
  );
}
