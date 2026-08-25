import { useMemo, useState } from 'react';

import type { CalcLocale } from '../../lib/locale';

// Free Swedish VAT (moms) calculator. Rates: 25 % (standard, bygg), 12 %, 6 %.
// Enter an amount and whether it's excl. or incl. moms — get all three values.
// Bilingual: sv default, en for /en/verktyg; nb falls back to sv text.

const RATES = [25, 12, 6];

export default function MomsKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const loc = en ? 'en-GB' : 'sv-SE';
  const kr = (value: number) =>
    `${value.toLocaleString(loc, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kr`;
  const t = en
    ? {
        title: 'Calculate VAT',
        sub: 'Enter an amount and choose the VAT rate – see the amount excluding VAT, the VAT itself and the amount including VAT. The standard VAT rate for construction services is 25%.',
        amount: 'Amount (kr)', amountPh: 'e.g. 10000',
        theAmountIs: 'The amount is', excl: 'Excluding VAT', incl: 'Including VAT',
        rate: 'VAT rate',
        rExcl: 'Amount excl. VAT', rVat: (r: number) => `VAT (${r}%)`, rIncl: 'Amount incl. VAT',
      }
    : {
        title: 'Räkna ut moms',
        sub: 'Fyll i ett belopp och välj momssats – se belopp exklusive moms, själva momsen och beloppet inklusive moms. Standardmomsen för byggtjänster är 25 %.',
        amount: 'Belopp (kr)', amountPh: 't.ex. 10000',
        theAmountIs: 'Beloppet är', excl: 'Exklusive moms', incl: 'Inklusive moms',
        rate: 'Momssats',
        rExcl: 'Belopp exkl. moms', rVat: (r: number) => `Moms (${r} %)`, rIncl: 'Belopp inkl. moms',
      };

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
    <div className="lm-tool lm-tool--split">

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>{t.amount}</span>
          <input
            type="number"
            min="0"
            inputMode="decimal"
            value={amount}
            placeholder={t.amountPh}
            onChange={(e) => setAmount(e.currentTarget.value)}
          />
        </label>
        <label className="lm-tool-field">
          <span>{t.theAmountIs}</span>
          <select value={mode} onChange={(e) => setMode(e.currentTarget.value as 'excl' | 'incl')}>
            <option value="excl">{t.excl}</option>
            <option value="incl">{t.incl}</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>{t.rate}</span>
          <select value={rate} onChange={(e) => setRate(parseInt(e.currentTarget.value, 10))}>
            {RATES.map((r) => (
              <option key={r} value={r}>{r} %</option>
            ))}
          </select>
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row">
          <span>{t.rExcl}</span>
          <span>{kr(result.excl)}</span>
        </div>
        <div className="lm-result-row lm-result-highlight">
          <span>{t.rVat(rate)}</span>
          <strong>{kr(result.moms)}</strong>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>{t.rIncl}</span>
          <strong>{kr(result.incl)}</strong>
        </div>
      </div>
    </div>
  );
}
