import { useMemo, useState } from 'react';

// Free OB/övertid calculator for Byggavtalet. OB and övertid are percentages on
// "utgående lön" (base hourly wage incl. variable pay), NOT the base wage alone.
// Rates are the Byggavtalet levels, sourced from our verified article
// ob-overtid-byggavtalet-rakna:
//   OB  §2 p5:   OB1 20% (05–06), OB2 40% (18–22), OB3 70% (natt 22–05, lör/sön/helg)
//   ÖT  §2 p6.1: A 30% (vardag ~06–17), B 50% (05–06 & 17–19), C 70% (19–22),
//                D 100% (natt 22–05, lör/sön/helg)
// The visitor enters their own utgående timlön, so no wage is hard-coded. sv-only
// (Byggavtalet is Swedish-market specific).

type Level = { id: string; label: string; pct: number; group: 'OB' | 'ÖT' };

const LEVELS: Level[] = [
  { id: 'ob1', label: 'OB 1 – 20 % (morgon kl 05–06)', pct: 20, group: 'OB' },
  { id: 'ob2', label: 'OB 2 – 40 % (kväll kl 18–22)', pct: 40, group: 'OB' },
  { id: 'ob3', label: 'OB 3 – 70 % (natt 22–05, lör/sön/helg)', pct: 70, group: 'OB' },
  { id: 'ota', label: 'Övertid A – 30 % (vardag ca 06–17)', pct: 30, group: 'ÖT' },
  { id: 'otb', label: 'Övertid B – 50 % (kl 05–06 och 17–19)', pct: 50, group: 'ÖT' },
  { id: 'otc', label: 'Övertid C – 70 % (kl 19–22)', pct: 70, group: 'ÖT' },
  { id: 'otd', label: 'Övertid D – 100 % (natt 22–05, lör/sön/helg)', pct: 100, group: 'ÖT' },
];

export default function ObOvertidKalkylatorTool() {
  const loc = 'sv-SE';
  const kr = (v: number) =>
    `${v.toLocaleString(loc, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kr`;

  const [wage, setWage] = useState('');
  const [hours, setHours] = useState('');
  const [levelId, setLevelId] = useState('ota');

  const r = useMemo(() => {
    const timlon = Math.max(parseFloat(wage.replace(',', '.')) || 0, 0);
    const timmar = Math.max(parseFloat(hours.replace(',', '.')) || 0, 0);
    const level = LEVELS.find((l) => l.id === levelId) ?? LEVELS[0];
    const tillaggPerTim = timlon * (level.pct / 100);
    const tillaggTotalt = tillaggPerTim * timmar;
    const grundlon = timlon * timmar;
    return {
      pct: level.pct,
      group: level.group,
      tillaggPerTim,
      tillaggTotalt,
      grundlon,
      total: grundlon + tillaggTotalt,
    };
  }, [wage, hours, levelId]);

  return (
    <div className="lm-tool lm-tool--split">
      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Utgående timlön (kr/tim)</span>
          <input
            type="number"
            min="0"
            inputMode="decimal"
            value={wage}
            placeholder="t.ex. 220"
            onChange={(e) => setWage(e.currentTarget.value)}
          />
        </label>
        <label className="lm-tool-field">
          <span>Antal timmar</span>
          <input
            type="number"
            min="0"
            step="0.5"
            inputMode="decimal"
            value={hours}
            placeholder="t.ex. 3"
            onChange={(e) => setHours(e.currentTarget.value)}
          />
        </label>
        <label className="lm-tool-field lm-tool-field-wide">
          <span>OB- eller övertidsnivå</span>
          <select value={levelId} onChange={(e) => setLevelId(e.currentTarget.value)}>
            <optgroup label="OB-ersättning (§ 2 p5)">
              {LEVELS.filter((l) => l.group === 'OB').map((l) => (
                <option key={l.id} value={l.id}>
                  {l.label}
                </option>
              ))}
            </optgroup>
            <optgroup label="Övertid (§ 2 p6.1)">
              {LEVELS.filter((l) => l.group === 'ÖT').map((l) => (
                <option key={l.id} value={l.id}>
                  {l.label}
                </option>
              ))}
            </optgroup>
          </select>
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row">
          <span>Grundlön ({r.pct > 0 ? 'timmar × timlön' : '—'})</span>
          <span>{kr(r.grundlon)}</span>
        </div>
        <div className="lm-result-row">
          <span>
            {r.group === 'OB' ? 'OB-tillägg' : 'Övertidstillägg'} per timme ({r.pct} %)
          </span>
          <span>{kr(r.tillaggPerTim)}</span>
        </div>
        <div className="lm-result-row lm-result-highlight">
          <span>{r.group === 'OB' ? 'OB-tillägg' : 'Övertidstillägg'} totalt</span>
          <strong>{kr(r.tillaggTotalt)}</strong>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>Grundlön + tillägg</span>
          <strong>{kr(r.total)}</strong>
        </div>
      </div>
      <p className="lm-tool-note">
        OB och övertid räknas i procent på utgående lön (fastställd tim-/månadslön inkl. rörlig
        lönedel), inte enbart på grundtimlönen. Nivån styrs av klockslag och veckodag – stäm alltid
        av mot Byggavtalet § 2 innan du bygger in gränserna i lönerutinen. Verktyget ger en
        uppskattning, inte en färdig lönekörning.
      </p>
    </div>
  );
}
