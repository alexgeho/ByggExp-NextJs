import { useMemo, useState } from 'react';

// Free "what does an employee cost" calculator for construction companies.
// Loaded monthly cost = gross salary + employer contributions (arbetsgivar-
// avgift, default 31.42 %) + holiday pay (semester, default 12 %) + optional
// overhead (insurance, tools, clothes). Also shows the cost per billable hour.
// All rates are user-adjustable.

function kr(value: number): string {
  return `${Math.round(value).toLocaleString('sv-SE')} kr`;
}

export default function AnstalldKostnadKalkylatorTool() {
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
        <h2 className="lm-tool-title">Räkna ut vad en anställd kostar</h2>
        <p className="lm-tool-sub">
          Fyll i månadslönen så räknar kalkylatorn ut den verkliga kostnaden inklusive arbetsgivaravgifter, semester
          och eventuella omkostnader – plus kostnaden per debiterbar timme. Alla procentsatser går att justera.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Månadslön (brutto, kr)</span>
          <input type="number" min="0" inputMode="decimal" value={salary} placeholder="t.ex. 34000"
            onChange={(e) => setSalary(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Arbetsgivaravgift (%)</span>
          <input type="number" step="0.01" inputMode="decimal" value={aga}
            onChange={(e) => setAga(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Semesterpåslag (%)</span>
          <input type="number" step="0.5" inputMode="decimal" value={holiday}
            onChange={(e) => setHoliday(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Omkostnader (%)</span>
          <input type="number" step="1" inputMode="decimal" value={overhead}
            onChange={(e) => setOverhead(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Debiterbara timmar / månad</span>
          <input type="number" step="1" inputMode="numeric" value={hours}
            onChange={(e) => setHours(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row">
          <span>Bruttolön</span>
          <span>{kr(r.lon)}</span>
        </div>
        <div className="lm-result-row">
          <span>Arbetsgivaravgift</span>
          <span>{kr(r.agaBelopp)}</span>
        </div>
        <div className="lm-result-row">
          <span>Semester</span>
          <span>{kr(r.holidayBelopp)}</span>
        </div>
        {r.overheadBelopp > 0 && (
          <div className="lm-result-row">
            <span>Omkostnader</span>
            <span>{kr(r.overheadBelopp)}</span>
          </div>
        )}
        <div className="lm-result-row lm-result-highlight">
          <span>Kostnad / månad</span>
          <strong>{kr(r.total)}</strong>
        </div>
        <div className="lm-result-row">
          <span>Kostnad / år</span>
          <span>{kr(r.year)}</span>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>Kostnad / debiterbar timme</span>
          <strong>{kr(r.perHour)}</strong>
        </div>
      </div>
      <p className="lm-tool-note">
        Riktvärde. Arbetsgivaravgiften är 31,42 % för de flesta anställda 2026. Semesterlön, försäkringar och
        avtalspension kan variera med kollektivavtal – justera procentsatserna efter er situation.
      </p>
    </div>
  );
}
