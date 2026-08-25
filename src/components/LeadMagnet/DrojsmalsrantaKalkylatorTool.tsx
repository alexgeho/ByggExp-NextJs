import { useMemo, useState } from 'react';

import type { CalcLocale } from '../../lib/locale';

// Free Swedish late-payment interest (dröjsmålsränta) calculator.
// Per räntelagen the default rate is the Riksbank reference rate + 8 percentage
// points. The reference rate is set twice a year (1 Jan / 1 Jul) and is
// user-adjustable here so the tool stays correct when Riksbanken changes it.
// Interest is simple: belopp × räntesats/100 × dagar/365. Bilingual: sv default,
// en for /en/verktyg.

function daysBetween(from: string, to: string): number {
  if (!from || !to) return 0;
  const a = new Date(from);
  const b = new Date(to);
  if (Number.isNaN(a.getTime()) || Number.isNaN(b.getTime())) return 0;
  const ms = b.getTime() - a.getTime();
  return Math.max(Math.round(ms / 86400000), 0);
}

export default function DrojsmalsrantaKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const loc = en ? 'en-GB' : 'sv-SE';
  const kr = (value: number) => `${value.toLocaleString(loc, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kr`;
  const t = en
    ? {
        title: 'Work out late-payment interest',
        sub: 'Enter the invoice amount, due date and when payment was made (or today’s date). The rate is the reference rate + 8 percentage points per the Swedish Interest Act – adjust the reference rate if Riksbanken has changed it.',
        amount: 'Invoice amount (kr)', amountPh: 'e.g. 50000',
        due: 'Due date', paid: 'Payment date (or today)', refRate: 'Reference rate (%)', spread: 'Spread (percentage points)',
        reminder: 'Reminder fee (60 kr)', debtColl: 'Debt-collection fee (180 kr)',
        rDelay: 'Delay', days: 'days', rInterest: (rate: string) => `Late-payment interest (${rate}%)`, rFees: 'Fees',
        rIntFees: 'Interest + fees', rTotal: 'To pay in total',
        note: 'The calculation uses simple interest (amount × rate × days/365). The reference rate is set by Riksbanken on 1 January and 1 July – check the current level at riksbank.se.',
      }
    : {
        title: 'Räkna ut dröjsmålsränta',
        sub: 'Fyll i fakturabeloppet, förfallodatum och när betalning skedde (eller dagens datum). Räntesatsen är referensräntan + 8 procentenheter enligt räntelagen – justera referensräntan om Riksbanken ändrat den.',
        amount: 'Fakturabelopp (kr)', amountPh: 't.ex. 50000',
        due: 'Förfallodatum', paid: 'Betaldatum (eller idag)', refRate: 'Referensränta (%)', spread: 'Påslag (procentenheter)',
        reminder: 'Påminnelseavgift (60 kr)', debtColl: 'Inkassoavgift (180 kr)',
        rDelay: 'Dröjsmål', days: 'dagar', rInterest: (rate: string) => `Dröjsmålsränta (${rate} %)`, rFees: 'Avgifter',
        rIntFees: 'Ränta + avgifter', rTotal: 'Att betala totalt',
        note: 'Beräkningen är enkel ränta (belopp × räntesats × dagar/365). Referensräntan fastställs av Riksbanken 1 januari och 1 juli – kontrollera aktuell nivå på riksbank.se.',
      };

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
    <div className="lm-tool lm-tool--split">

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>{t.amount}</span>
          <input type="number" min="0" inputMode="decimal" value={amount} placeholder={t.amountPh}
            onChange={(e) => setAmount(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.due}</span>
          <input type="date" value={due} onChange={(e) => setDue(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.paid}</span>
          <input type="date" value={paid} onChange={(e) => setPaid(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.refRate}</span>
          <input type="number" step="0.25" inputMode="decimal" value={refRate}
            onChange={(e) => setRefRate(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.spread}</span>
          <input type="number" step="1" inputMode="decimal" value={spread}
            onChange={(e) => setSpread(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field lm-tool-check">
          <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
          <span>{t.reminder}</span>
        </label>
        <label className="lm-tool-field lm-tool-check">
          <input type="checkbox" checked={debtColl} onChange={(e) => setDebtColl(e.currentTarget.checked)} />
          <span>{t.debtColl}</span>
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row">
          <span>{t.rDelay}</span>
          <span>{r.days} {t.days}</span>
        </div>
        <div className="lm-result-row">
          <span>{t.rInterest(r.rate.toLocaleString(loc))}</span>
          <span>{kr(r.ranta)}</span>
        </div>
        {r.avgifter > 0 && (
          <div className="lm-result-row">
            <span>{t.rFees}</span>
            <span>{kr(r.avgifter)}</span>
          </div>
        )}
        <div className="lm-result-row lm-result-highlight">
          <span>{t.rIntFees}</span>
          <strong>{kr(r.ranta + r.avgifter)}</strong>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>{t.rTotal}</span>
          <strong>{kr(r.total)}</strong>
        </div>
      </div>
      <p className="lm-tool-note">{t.note}</p>
    </div>
  );
}
