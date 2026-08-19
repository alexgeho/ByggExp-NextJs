import { useMemo, useState } from 'react';

// Free Swedish late-payment interest (dröjsmålsränta) calculator.
// Per räntelagen the default rate is the Riksbank reference rate + 8 percentage
// points. The reference rate is set twice a year (1 Jan / 1 Jul) and is
// user-adjustable here so the tool stays correct when Riksbanken changes it.
// Interest is simple: belopp × räntesats/100 × dagar/365.

function kr(value: number): string {
  return `${value.toLocaleString('sv-SE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kr`;
}

function daysBetween(from: string, to: string): number {
  if (!from || !to) return 0;
  const a = new Date(from);
  const b = new Date(to);
  if (Number.isNaN(a.getTime()) || Number.isNaN(b.getTime())) return 0;
  const ms = b.getTime() - a.getTime();
  return Math.max(Math.round(ms / 86400000), 0);
}

export default function DrojsmalsrantaKalkylatorTool() {
  const [amount, setAmount] = useState('');
  const [due, setDue] = useState('');
  const [paid, setPaid] = useState('');
  const [refRate, setRefRate] = useState('2');
  const [spread, setSpread] = useState('8');
  const [reminder, setReminder] = useState(false);
  const [debtColl, setDebtColl] = useState(false);

  const r = useMemo(() => {
    const belopp = Math.max(parseFloat(amount.replace(',', '.')) || 0, 0);
    const rate = Math.max((parseFloat(refRate.replace(',', '.')) || 0) + (parseFloat(spread.replace(',', '.')) || 0), 0);
    const days = daysBetween(due, paid);
    const ranta = belopp * (rate / 100) * (days / 365);
    const avgifter = (reminder ? 60 : 0) + (debtColl ? 180 : 0);
    return { belopp, rate, days, ranta, avgifter, total: belopp + ranta + avgifter };
  }, [amount, due, paid, refRate, spread, reminder, debtColl]);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Räkna ut dröjsmålsränta</h2>
        <p className="lm-tool-sub">
          Fyll i fakturabeloppet, förfallodatum och när betalning skedde (eller dagens datum). Räntesatsen är
          referensräntan + 8 procentenheter enligt räntelagen – justera referensräntan om Riksbanken ändrat den.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Fakturabelopp (kr)</span>
          <input type="number" min="0" inputMode="decimal" value={amount} placeholder="t.ex. 50000"
            onChange={(e) => setAmount(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Förfallodatum</span>
          <input type="date" value={due} onChange={(e) => setDue(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Betaldatum (eller idag)</span>
          <input type="date" value={paid} onChange={(e) => setPaid(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Referensränta (%)</span>
          <input type="number" step="0.25" inputMode="decimal" value={refRate}
            onChange={(e) => setRefRate(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Påslag (procentenheter)</span>
          <input type="number" step="1" inputMode="decimal" value={spread}
            onChange={(e) => setSpread(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field lm-tool-check">
          <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
          <span>Påminnelseavgift (60 kr)</span>
        </label>
        <label className="lm-tool-field lm-tool-check">
          <input type="checkbox" checked={debtColl} onChange={(e) => setDebtColl(e.currentTarget.checked)} />
          <span>Inkassoavgift (180 kr)</span>
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row">
          <span>Dröjsmål</span>
          <span>{r.days} dagar</span>
        </div>
        <div className="lm-result-row">
          <span>Dröjsmålsränta ({r.rate.toLocaleString('sv-SE')} %)</span>
          <span>{kr(r.ranta)}</span>
        </div>
        {r.avgifter > 0 && (
          <div className="lm-result-row">
            <span>Avgifter</span>
            <span>{kr(r.avgifter)}</span>
          </div>
        )}
        <div className="lm-result-row lm-result-highlight">
          <span>Ränta + avgifter</span>
          <strong>{kr(r.ranta + r.avgifter)}</strong>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>Att betala totalt</span>
          <strong>{kr(r.total)}</strong>
        </div>
      </div>
      <p className="lm-tool-note">
        Beräkningen är enkel ränta (belopp × räntesats × dagar/365). Referensräntan fastställs av Riksbanken
        1&nbsp;januari och 1&nbsp;juli – kontrollera aktuell nivå på riksbank.se.
      </p>
    </div>
  );
}
