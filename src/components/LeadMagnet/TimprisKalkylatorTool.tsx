import { useMemo, useState } from 'react';

import type { CalcLocale } from '../../lib/locale';

// Free "what should I charge per hour" calculator. Works backwards from a
// desired salary + employer costs + overhead + profit to the hourly rate you
// need to charge, given your billable hours. Bilingual: sv default, en for /en.

export default function TimprisKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const loc = en ? 'en-GB' : 'sv-SE';
  const kr = (value: number) => `${Math.round(value).toLocaleString(loc)} kr`;
  const t = en
    ? {
        title: 'Work out your hourly rate',
        sub: 'Start from what you want to earn and we work out the hourly rate you need to charge. We add employer contributions, your overhead and a profit margin.',
        salary: 'Desired gross salary per month (kr)', salaryPh: 'e.g. 35000',
        hours: 'Billable hours per month', hoursPh: 'e.g. 120',
        social: 'Employer contributions (%)', semester: 'Holiday pay (%)',
        overhead: 'Overhead per month (kr)', overheadPh: 'e.g. 10000', profit: 'Profit margin (%)',
        rExcl: 'Hourly rate excl. VAT', rIncl: 'Hourly rate incl. VAT (25%)',
        rLabour: 'Labour cost incl. contributions / month', rTotal: 'Total monthly cost + profit',
        fine: 'An estimate. Employer contributions are prefilled at 31.42% (normal Swedish rate) and holiday pay at 12%. Adjust overhead (tools, vehicle, insurance, admin) and profit margin to your business. If you calculate on your own gross salary in a sole trader, you can set holiday pay to 0.',
      }
    : {
        title: 'Räkna ut ditt timpris',
        sub: 'Utgå från vad du vill tjäna så räknar vi ut vilket timpris du behöver ta betalt. Vi lägger på sociala avgifter, dina omkostnader och en vinstmarginal.',
        salary: 'Önskad bruttolön per månad (kr)', salaryPh: 't.ex. 35000',
        hours: 'Debiterbara timmar per månad', hoursPh: 't.ex. 120',
        social: 'Sociala avgifter (%)', semester: 'Semesterlön (%)',
        overhead: 'Omkostnader per månad (kr)', overheadPh: 't.ex. 10000', profit: 'Vinstmarginal (%)',
        rExcl: 'Timpris exkl. moms', rIncl: 'Timpris inkl. moms (25 %)',
        rLabour: 'Lönekostnad inkl. avgifter / mån', rTotal: 'Total månadskostnad + vinst',
        fine: 'En uppskattning. Sociala avgifter är förifyllda med 31,42 % (normal arbetsgivaravgift) och semesterlön med 12 %. Justera omkostnader (verktyg, bil, försäkring, admin) och vinstmarginal efter din verksamhet. Räknar du på egen bruttolön i enskild firma kan du sätta semester till 0.',
      };

  const [salary, setSalary] = useState('');
  const [hours, setHours] = useState('');
  const [social, setSocial] = useState('31.42');
  const [semester, setSemester] = useState('12');
  const [overhead, setOverhead] = useState('');
  const [profit, setProfit] = useState('10');

  const result = useMemo(() => {
    const monthlySalary = Math.max(parseFloat(salary.replace(',', '.')) || 0, 0);
    const billable = Math.max(parseFloat(hours.replace(',', '.')) || 0, 0);
    const soc = Math.max(parseFloat(social.replace(',', '.')) || 0, 0) / 100;
    const sem = Math.max(parseFloat(semester.replace(',', '.')) || 0, 0) / 100;
    const overheadCost = Math.max(parseFloat(overhead.replace(',', '.')) || 0, 0);
    const profitMargin = Math.max(parseFloat(profit.replace(',', '.')) || 0, 0) / 100;

    const labourCost = monthlySalary * (1 + sem) * (1 + soc);
    const totalCost = labourCost + overheadCost;
    const withProfit = totalCost * (1 + profitMargin);
    const hourlyExcl = billable > 0 ? withProfit / billable : 0;
    const hourlyIncl = hourlyExcl * 1.25;
    return { labourCost, totalCost, withProfit, hourlyExcl, hourlyIncl, billable };
  }, [salary, hours, social, semester, overhead, profit]);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">{t.title}</h2>
        <p className="lm-tool-sub">{t.sub}</p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>{t.salary}</span>
          <input type="number" min="0" inputMode="numeric" value={salary} placeholder={t.salaryPh} onChange={(e) => setSalary(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.hours}</span>
          <input type="number" min="0" inputMode="numeric" value={hours} placeholder={t.hoursPh} onChange={(e) => setHours(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.social}</span>
          <input type="number" min="0" inputMode="decimal" value={social} onChange={(e) => setSocial(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.semester}</span>
          <input type="number" min="0" inputMode="decimal" value={semester} onChange={(e) => setSemester(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.overhead}</span>
          <input type="number" min="0" inputMode="numeric" value={overhead} placeholder={t.overheadPh} onChange={(e) => setOverhead(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.profit}</span>
          <input type="number" min="0" inputMode="decimal" value={profit} onChange={(e) => setProfit(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight">
          <span>{t.rExcl}</span>
          <strong>{result.billable > 0 ? kr(result.hourlyExcl) : '—'}</strong>
        </div>
        <div className="lm-result-row">
          <span>{t.rIncl}</span>
          <span>{result.billable > 0 ? kr(result.hourlyIncl) : '—'}</span>
        </div>
        <div className="lm-result-row">
          <span>{t.rLabour}</span>
          <span>{kr(result.labourCost)}</span>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>{t.rTotal}</span>
          <strong>{kr(result.withProfit)}</strong>
        </div>
        <p className="lm-result-fine">{t.fine}</p>
      </div>
    </div>
  );
}
