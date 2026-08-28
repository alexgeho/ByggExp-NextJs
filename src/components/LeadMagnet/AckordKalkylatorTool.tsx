import { useMemo, useState } from 'react';

// Free ackord (piece-rate) slutavräkning calculator for Byggavtalet.
// Slutavräkning: ackordssumma (prislista × mängder) − utbetalda förskott =
// ackordsöverskott, som fördelas i laget via fördelningslistan.
// Granskningsarvode = 1,5 % av ackordssumman (dras från arbetarens lön på
// byggavtalets område). Facts from the paired article ackordslon-bygg.
// The visitor enters ackordssumma/förskott themselves (from their prislista), so
// nothing is hard-coded. Equal per-person split is a simplification — real
// fördelning uses the lagets fördelningslista/andelar. sv-only.

export default function AckordKalkylatorTool() {
  const loc = 'sv-SE';
  const kr = (v: number) =>
    `${v.toLocaleString(loc, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} kr`;

  const [ackord, setAckord] = useState('');
  const [forskott, setForskott] = useState('');
  const [team, setTeam] = useState('');
  const [arvode, setArvode] = useState('1.5');

  const r = useMemo(() => {
    const ackordssumma = Math.max(parseFloat(ackord.replace(/\s/g, '').replace(',', '.')) || 0, 0);
    const utbetalt = Math.max(parseFloat(forskott.replace(/\s/g, '').replace(',', '.')) || 0, 0);
    const antal = Math.max(parseInt(team, 10) || 0, 0);
    const arvodePct = Math.max(parseFloat(arvode.replace(',', '.')) || 0, 0);

    const overskott = ackordssumma - utbetalt;
    const granskningsarvode = ackordssumma * (arvodePct / 100);
    const perPerson = antal > 0 ? overskott / antal : 0;
    return { ackordssumma, utbetalt, overskott, granskningsarvode, antal, perPerson };
  }, [ackord, forskott, team, arvode]);

  return (
    <div className="lm-tool lm-tool--split">
      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Ackordssumma (kr)</span>
          <input type="number" min="0" step="1000" inputMode="decimal" value={ackord}
            placeholder="t.ex. 900000" onChange={(e) => setAckord(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Utbetalda förskott (kr)</span>
          <input type="number" min="0" step="1000" inputMode="decimal" value={forskott}
            placeholder="t.ex. 780000" onChange={(e) => setForskott(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Antal i laget (för fördelning)</span>
          <input type="number" min="0" step="1" inputMode="numeric" value={team}
            placeholder="t.ex. 4" onChange={(e) => setTeam(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Granskningsarvode (%)</span>
          <input type="number" min="0" step="0.1" inputMode="decimal" value={arvode}
            onChange={(e) => setArvode(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row">
          <span>Ackordssumma</span>
          <span>{kr(r.ackordssumma)}</span>
        </div>
        <div className="lm-result-row">
          <span>− Utbetalda förskott</span>
          <span>{kr(r.utbetalt)}</span>
        </div>
        <div className="lm-result-row lm-result-highlight">
          <span>Ackordsöverskott att fördela</span>
          <strong>{kr(r.overskott)}</strong>
        </div>
        {r.antal > 0 && (
          <div className="lm-result-row">
            <span>Per person (jämn fördelning, {r.antal} st)</span>
            <span>{kr(r.perPerson)}</span>
          </div>
        )}
        <div className="lm-result-row lm-result-total">
          <span>Granskningsarvode ({parseFloat(arvode.replace(',', '.')) || 0} % av ackordssumman)</span>
          <strong>{kr(r.granskningsarvode)}</strong>
        </div>
      </div>
      <p className="lm-tool-note">
        Slutavräkning: ackordssumman (prislista × utförda mängder) minus utbetalda förskott ger
        ackordsöverskottet, som fördelas i laget enligt fördelningslistan – den jämna fördelningen ovan
        är en förenkling, verklig fördelning sker efter avtalade andelar. Granskningsarvodet är 1,5 % av
        ackordssumman och redovisas till mätningskontoret. Ackordslönen får aldrig underskrida
        Byggavtalets lägstanivå. Verktyget ger en uppskattning, inte en färdig avräkning.
      </p>
    </div>
  );
}
