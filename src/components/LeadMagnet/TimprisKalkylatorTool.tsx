import { useMemo, useState } from 'react';

// Free "vad ska jag ta betalt i timmen" calculator. Works backwards from a
// desired salary + employer costs + overhead + profit to the hourly rate you
// need to charge, given your billable hours.

function kr(value: number): string {
  return `${Math.round(value).toLocaleString('sv-SE')} kr`;
}

export default function TimprisKalkylatorTool() {
  const [salary, setSalary] = useState('');
  const [hours, setHours] = useState('');
  const [social, setSocial] = useState('31.42');
  const [overhead, setOverhead] = useState('');
  const [profit, setProfit] = useState('10');

  const result = useMemo(() => {
    const monthlySalary = Math.max(parseFloat(salary.replace(',', '.')) || 0, 0);
    const billable = Math.max(parseFloat(hours.replace(',', '.')) || 0, 0);
    const soc = Math.max(parseFloat(social.replace(',', '.')) || 0, 0) / 100;
    const overheadCost = Math.max(parseFloat(overhead.replace(',', '.')) || 0, 0);
    const profitMargin = Math.max(parseFloat(profit.replace(',', '.')) || 0, 0) / 100;

    const labourCost = monthlySalary * (1 + soc);
    const totalCost = labourCost + overheadCost;
    const withProfit = totalCost * (1 + profitMargin);
    const hourlyExcl = billable > 0 ? withProfit / billable : 0;
    const hourlyIncl = hourlyExcl * 1.25;
    return { labourCost, totalCost, withProfit, hourlyExcl, hourlyIncl, billable };
  }, [salary, hours, social, overhead, profit]);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Räkna ut ditt timpris</h2>
        <p className="lm-tool-sub">
          Utgå från vad du vill tjäna så räknar vi ut vilket timpris du behöver ta betalt. Vi lägger på sociala avgifter, dina omkostnader och en vinstmarginal.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Önskad bruttolön per månad (kr)</span>
          <input type="number" min="0" inputMode="numeric" value={salary} placeholder="t.ex. 35000" onChange={(e) => setSalary(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Debiterbara timmar per månad</span>
          <input type="number" min="0" inputMode="numeric" value={hours} placeholder="t.ex. 120" onChange={(e) => setHours(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Sociala avgifter (%)</span>
          <input type="number" min="0" inputMode="decimal" value={social} onChange={(e) => setSocial(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Omkostnader per månad (kr)</span>
          <input type="number" min="0" inputMode="numeric" value={overhead} placeholder="t.ex. 10000" onChange={(e) => setOverhead(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Vinstmarginal (%)</span>
          <input type="number" min="0" inputMode="decimal" value={profit} onChange={(e) => setProfit(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight">
          <span>Timpris exkl. moms</span>
          <strong>{result.billable > 0 ? kr(result.hourlyExcl) : '—'}</strong>
        </div>
        <div className="lm-result-row">
          <span>Timpris inkl. moms (25 %)</span>
          <span>{result.billable > 0 ? kr(result.hourlyIncl) : '—'}</span>
        </div>
        <div className="lm-result-row">
          <span>Lönekostnad inkl. avgifter / mån</span>
          <span>{kr(result.labourCost)}</span>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>Total månadskostnad + vinst</span>
          <strong>{kr(result.withProfit)}</strong>
        </div>
        <p className="lm-result-fine">
          En uppskattning. Sociala avgifter är förifyllda med 31,42 % (normal arbetsgivaravgift). Justera omkostnader (verktyg, bil, försäkring, admin) och vinstmarginal efter din verksamhet.
        </p>
      </div>
    </div>
  );
}
