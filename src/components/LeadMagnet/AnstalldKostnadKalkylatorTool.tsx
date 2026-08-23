import { useMemo, useState } from 'react';

import type { CalcLocale } from '../../lib/locale';

// Free "what does an employee cost" calculator for construction companies.
// Loaded monthly cost = gross salary + employer contributions (arbetsgivar-
// avgift, default 31.42 %) + holiday pay (semester, default 12 %) + optional
// overhead (insurance, tools, clothes). Also shows the cost per billable hour.
// All rates are user-adjustable. Bilingual: sv default, en for /en/verktyg.

export default function AnstalldKostnadKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const kr = (value: number) => `${Math.round(value).toLocaleString(en ? 'en-GB' : 'sv-SE')} kr`;
  const t = en
    ? {
        title: 'Work out what an employee costs',
        sub: 'Enter the monthly salary and the calculator works out the real cost including employer contributions, holiday pay and any overhead – plus the cost per billable hour. All percentages are adjustable.',
        salary: 'Monthly salary (gross, kr)', salaryPh: 'e.g. 34000',
        aga: 'Employer contributions (%)', holiday: 'Holiday supplement (%)', overhead: 'Overhead (%)', hours: 'Billable hours / month',
        rSalary: 'Gross salary', rAga: 'Employer contributions', rHoliday: 'Holiday pay', rOverhead: 'Overhead',
        rMonth: 'Cost / month', rYear: 'Cost / year', rHour: 'Cost / billable hour',
        note: 'Guide value. Employer contributions are 31.42% for most employees in 2026. Holiday pay, insurance and pension can vary with collective agreements – adjust the percentages to your situation.',
      }
    : {
        title: 'Räkna ut vad en anställd kostar',
        sub: 'Fyll i månadslönen så räknar kalkylatorn ut den verkliga kostnaden inklusive arbetsgivaravgifter, semester och eventuella omkostnader – plus kostnaden per debiterbar timme. Alla procentsatser går att justera.',
        salary: 'Månadslön (brutto, kr)', salaryPh: 't.ex. 34000',
        aga: 'Arbetsgivaravgift (%)', holiday: 'Semesterpåslag (%)', overhead: 'Omkostnader (%)', hours: 'Debiterbara timmar / månad',
        rSalary: 'Bruttolön', rAga: 'Arbetsgivaravgift', rHoliday: 'Semester', rOverhead: 'Omkostnader',
        rMonth: 'Kostnad / månad', rYear: 'Kostnad / år', rHour: 'Kostnad / debiterbar timme',
        note: 'Riktvärde. Arbetsgivaravgiften är 31,42 % för de flesta anställda 2026. Semesterlön, försäkringar och avtalspension kan variera med kollektivavtal – justera procentsatserna efter er situation.',
      };

  const [salary, setSalary] = useState('');
  const [aga, setAga] = useState('31.42');
  const [holiday, setHoliday] = useState('12');
  const [overhead, setOverhead] = useState('0');
  const [hours, setHours] = useState('130');

  const r = useMemo(() => {
    const lon = Math.max(parseFloat(salary.replace(',', '.')) || 0, 0);
    const agaP = Math.max(parseFloat(aga.replace(',', '.')) || 0, 0);
    const holP = Math.max(parseFloat(holiday.replace(',', '.')) || 0, 0);
    const ohP = Math.max(parseFloat(overhead.replace(',', '.')) || 0, 0);
    const h = Math.max(parseFloat(hours.replace(',', '.')) || 0, 0);
    const agaBelopp = lon * (agaP / 100);
    const holidayBelopp = lon * (holP / 100);
    const bas = lon + agaBelopp + holidayBelopp;
    const overheadBelopp = bas * (ohP / 100);
    const total = bas + overheadBelopp;
    const perHour = h > 0 ? total / h : 0;
    return { lon, agaBelopp, holidayBelopp, overheadBelopp, total, year: total * 12, perHour };
  }, [salary, aga, holiday, overhead, hours]);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">{t.title}</h2>
        <p className="lm-tool-sub">{t.sub}</p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>{t.salary}</span>
          <input type="number" min="0" inputMode="decimal" value={salary} placeholder={t.salaryPh}
            onChange={(e) => setSalary(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.aga}</span>
          <input type="number" step="0.01" inputMode="decimal" value={aga}
            onChange={(e) => setAga(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.holiday}</span>
          <input type="number" step="0.5" inputMode="decimal" value={holiday}
            onChange={(e) => setHoliday(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.overhead}</span>
          <input type="number" step="1" inputMode="decimal" value={overhead}
            onChange={(e) => setOverhead(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.hours}</span>
          <input type="number" step="1" inputMode="numeric" value={hours}
            onChange={(e) => setHours(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row">
          <span>{t.rSalary}</span>
          <span>{kr(r.lon)}</span>
        </div>
        <div className="lm-result-row">
          <span>{t.rAga}</span>
          <span>{kr(r.agaBelopp)}</span>
        </div>
        <div className="lm-result-row">
          <span>{t.rHoliday}</span>
          <span>{kr(r.holidayBelopp)}</span>
        </div>
        {r.overheadBelopp > 0 && (
          <div className="lm-result-row">
            <span>{t.rOverhead}</span>
            <span>{kr(r.overheadBelopp)}</span>
          </div>
        )}
        <div className="lm-result-row lm-result-highlight">
          <span>{t.rMonth}</span>
          <strong>{kr(r.total)}</strong>
        </div>
        <div className="lm-result-row">
          <span>{t.rYear}</span>
          <span>{kr(r.year)}</span>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>{t.rHour}</span>
          <strong>{kr(r.perHour)}</strong>
        </div>
      </div>
      <p className="lm-tool-note">{t.note}</p>
    </div>
  );
}
