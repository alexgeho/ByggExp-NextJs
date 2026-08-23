import { useMemo, useState } from 'react';

import type { CalcLocale } from '../../lib/locale';

// Free delay-penalty (förseningsvite) calculator for construction contracts.
// AB 04/ABT 06: if a vite is agreed it is normally a percentage of the contract
// sum per commenced week of delay. A cap (takbelopp) can be agreed. All figures
// are user-adjustable since the rate and cap are set in each contract. Bilingual:
// sv default, en for /en/verktyg.

export default function ForseningsviteKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const kr = (value: number) => `${value.toLocaleString(en ? 'en-GB' : 'sv-SE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} kr`;
  const t = en
    ? {
        title: 'Work out the delay penalty (liquidated damages)',
        sub: 'Enter the contract sum, the agreed penalty rate per commenced week and the number of weeks of delay. A penalty applies only if it is expressly agreed – otherwise compensation for proven loss applies.',
        sum: 'Contract sum (kr)', sumPh: 'e.g. 1000000',
        rate: 'Penalty rate (% per week)', weeks: 'Number of weeks of delay', weeksPh: 'e.g. 4',
        cap: 'Cap (% of the sum, optional)', capPh: 'e.g. 10',
        rPerWeek: 'Penalty per week', rWeeks: 'Number of weeks (commenced = whole)', pcs: 'pcs', rTotal: 'Delay penalty total',
        capped: 'The amount is limited to the agreed cap.',
        note: 'Under AB 04/ABT 06, an agreed penalty replaces the client’s right to damages for the delay. If there is no penalty clause, the loss must instead be proven. Always check the exact terms of the contract.',
      }
    : {
        title: 'Räkna ut förseningsvite',
        sub: 'Ange kontraktssumman, avtalad vitessats per påbörjad vecka och antal veckors försening. Vite utgår bara om det uttryckligen avtalats – annars gäller ersättning för styrkt skada.',
        sum: 'Kontraktssumma (kr)', sumPh: 't.ex. 1000000',
        rate: 'Vitessats (% per vecka)', weeks: 'Antal veckors försening', weeksPh: 't.ex. 4',
        cap: 'Takbelopp (% av summan, valfritt)', capPh: 't.ex. 10',
        rPerWeek: 'Vite per vecka', rWeeks: 'Antal veckor (påbörjad = hel)', pcs: 'st', rTotal: 'Förseningsvite totalt',
        capped: 'Beloppet är begränsat till det avtalade takbeloppet.',
        note: 'Enligt AB 04/ABT 06 ersätter ett avtalat vite beställarens rätt till skadestånd för förseningen. Saknas vitesklausul måste skadan i stället styrkas. Kontrollera alltid kontraktets exakta villkor.',
      };

  const [sum, setSum] = useState('');
  const [rate, setRate] = useState('1');
  const [weeks, setWeeks] = useState('');
  const [cap, setCap] = useState('');

  const r = useMemo(() => {
    const kontraktssumma = Math.max(parseFloat(sum.replace(',', '.')) || 0, 0);
    const vitessats = Math.max(parseFloat(rate.replace(',', '.')) || 0, 0);
    const antalVeckor = Math.max(Math.ceil(parseFloat(weeks.replace(',', '.')) || 0), 0);
    const capPct = parseFloat(cap.replace(',', '.'));
    const perVecka = kontraktssumma * (vitessats / 100);
    let vite = perVecka * antalVeckor;
    let capped = false;
    if (!Number.isNaN(capPct) && capPct > 0) {
      const takbelopp = kontraktssumma * (capPct / 100);
      if (vite > takbelopp) {
        vite = takbelopp;
        capped = true;
      }
    }
    return { perVecka, antalVeckor, vite, capped };
  }, [sum, rate, weeks, cap]);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">{t.title}</h2>
        <p className="lm-tool-sub">{t.sub}</p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>{t.sum}</span>
          <input type="number" min="0" inputMode="decimal" value={sum} placeholder={t.sumPh}
            onChange={(e) => setSum(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.rate}</span>
          <input type="number" step="0.1" min="0" inputMode="decimal" value={rate}
            onChange={(e) => setRate(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.weeks}</span>
          <input type="number" step="1" min="0" inputMode="numeric" value={weeks} placeholder={t.weeksPh}
            onChange={(e) => setWeeks(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.cap}</span>
          <input type="number" step="1" min="0" inputMode="decimal" value={cap} placeholder={t.capPh}
            onChange={(e) => setCap(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row">
          <span>{t.rPerWeek}</span>
          <span>{kr(r.perVecka)}</span>
        </div>
        <div className="lm-result-row">
          <span>{t.rWeeks}</span>
          <span>{r.antalVeckor} {t.pcs}</span>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>{t.rTotal}</span>
          <strong>{kr(r.vite)}</strong>
        </div>
      </div>
      {r.capped && (
        <p className="lm-tool-note">{t.capped}</p>
      )}
      <p className="lm-tool-note">{t.note}</p>
    </div>
  );
}
