import { useMemo, useState } from 'react';

// Free delay-penalty (förseningsvite) calculator for construction contracts.
// AB 04/ABT 06: if a vite is agreed it is normally a percentage of the contract
// sum per commenced week of delay. A cap (takbelopp) can be agreed. All figures
// are user-adjustable since the rate and cap are set in each contract.

function kr(value: number): string {
  return `${value.toLocaleString('sv-SE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} kr`;
}

export default function ForseningsviteKalkylatorTool() {
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
        <h2 className="lm-tool-title">Räkna ut förseningsvite</h2>
        <p className="lm-tool-sub">
          Ange kontraktssumman, avtalad vitessats per påbörjad vecka och antal veckors försening. Vite utgår bara
          om det uttryckligen avtalats – annars gäller ersättning för styrkt skada.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Kontraktssumma (kr)</span>
          <input type="number" min="0" inputMode="decimal" value={sum} placeholder="t.ex. 1000000"
            onChange={(e) => setSum(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Vitessats (% per vecka)</span>
          <input type="number" step="0.1" min="0" inputMode="decimal" value={rate}
            onChange={(e) => setRate(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Antal veckors försening</span>
          <input type="number" step="1" min="0" inputMode="numeric" value={weeks} placeholder="t.ex. 4"
            onChange={(e) => setWeeks(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Takbelopp (% av summan, valfritt)</span>
          <input type="number" step="1" min="0" inputMode="decimal" value={cap} placeholder="t.ex. 10"
            onChange={(e) => setCap(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row">
          <span>Vite per vecka</span>
          <span>{kr(r.perVecka)}</span>
        </div>
        <div className="lm-result-row">
          <span>Antal veckor (påbörjad = hel)</span>
          <span>{r.antalVeckor} st</span>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>Förseningsvite totalt</span>
          <strong>{kr(r.vite)}</strong>
        </div>
      </div>
      {r.capped && (
        <p className="lm-tool-note">Beloppet är begränsat till det avtalade takbeloppet.</p>
      )}
      <p className="lm-tool-note">
        Enligt AB 04/ABT 06 ersätter ett avtalat vite beställarens rätt till skadestånd för förseningen. Saknas
        vitesklausul måste skadan i stället styrkas. Kontrollera alltid kontraktets exakta villkor.
      </p>
    </div>
  );
}
