import { useMemo, useState } from 'react';

// Free travel-time / travel-cost calculator for Byggavtalet. Two SEPARATE posts
// (the whole point of the paired article restidsersattning-byggavtalet):
//   • Reskostnadsersättning – km-based. Verified 2025/26 avtalssatser: egen bil
//     2,50 kr/km, samåkningstillägg 0,85 kr/km per passagerare, passagerare
//     0,85 kr/km, utgår när enkel resväg > 2 km. Rates are user-adjustable since
//     they are revised 1 maj each avtalsår.
//   • Restidsersättning – time-based, and the rate is AVTALSBEROENDE and revised,
//     so it is NOT hard-coded: the visitor enters the current restidssats (kr/tim)
//     from gällande Byggavtal. (Article explicitly warns against unverified rates.)
// sv-only (Byggavtalet-specific).

type Mode = 'bil' | 'forare' | 'passagerare' | 'kollektiv';

export default function RestidsersattningKalkylatorTool() {
  const loc = 'sv-SE';
  const kr = (v: number) =>
    `${v.toLocaleString(loc, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kr`;

  const [km, setKm] = useState('');
  const [days, setDays] = useState('');
  const [mode, setMode] = useState<Mode>('bil');
  const [passengers, setPassengers] = useState('0');
  const [bilrate, setBilrate] = useState('2.50');
  const [poolrate, setPoolrate] = useState('0.85');
  const [travelHours, setTravelHours] = useState('');
  const [travelRate, setTravelRate] = useState('');

  const r = useMemo(() => {
    const enkel = Math.max(parseFloat(km.replace(',', '.')) || 0, 0);
    const resdagar = Math.max(parseFloat(days.replace(',', '.')) || 0, 0);
    const pax = Math.max(parseInt(passengers, 10) || 0, 0);
    const bil = Math.max(parseFloat(bilrate.replace(',', '.')) || 0, 0);
    const pool = Math.max(parseFloat(poolrate.replace(',', '.')) || 0, 0);
    const tr = Math.max(parseFloat(travelHours.replace(',', '.')) || 0, 0);
    const trRate = Math.max(parseFloat(travelRate.replace(',', '.')) || 0, 0);

    const kmTR = enkel * 2; // tur och retur
    const eligible = enkel > 2; // ersättning utgår när enkel resväg överstiger 2 km
    let perDag = 0;
    if (eligible) {
      if (mode === 'bil') perDag = kmTR * bil;
      else if (mode === 'forare') perDag = kmTR * (bil + pax * pool);
      else if (mode === 'passagerare') perDag = kmTR * pool;
      else perDag = 0; // kollektivtrafik – mot uppvisat kvitto
    }
    const reskostnad = perDag * resdagar;
    const restid = tr * trRate;
    return { eligible, mode, perDag, reskostnad, restid, total: reskostnad + restid };
  }, [km, days, mode, passengers, bilrate, poolrate, travelHours, travelRate]);

  return (
    <div className="lm-tool lm-tool--split">
      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Enkel resväg (km)</span>
          <input type="number" min="0" step="0.1" inputMode="decimal" value={km}
            placeholder="t.ex. 30" onChange={(e) => setKm(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Antal resdagar</span>
          <input type="number" min="0" step="1" inputMode="numeric" value={days}
            placeholder="t.ex. 5" onChange={(e) => setDays(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Färdsätt</span>
          <select value={mode} onChange={(e) => setMode(e.currentTarget.value as Mode)}>
            <option value="bil">Egen bil</option>
            <option value="forare">Samåkning (förare)</option>
            <option value="passagerare">Samåkning (passagerare)</option>
            <option value="kollektiv">Kollektivtrafik (mot kvitto)</option>
          </select>
        </label>
        {mode === 'forare' && (
          <label className="lm-tool-field">
            <span>Antal passagerare</span>
            <input type="number" min="0" step="1" inputMode="numeric" value={passengers}
              onChange={(e) => setPassengers(e.currentTarget.value)} />
          </label>
        )}
        <label className="lm-tool-field">
          <span>Bilersättning (kr/km)</span>
          <input type="number" min="0" step="0.05" inputMode="decimal" value={bilrate}
            onChange={(e) => setBilrate(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Samåkningstillägg (kr/km/passagerare)</span>
          <input type="number" min="0" step="0.05" inputMode="decimal" value={poolrate}
            onChange={(e) => setPoolrate(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Restid (timmar)</span>
          <input type="number" min="0" step="0.5" inputMode="decimal" value={travelHours}
            placeholder="t.ex. 2" onChange={(e) => setTravelHours(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Restidssats (kr/tim, enligt avtal)</span>
          <input type="number" min="0" step="1" inputMode="decimal" value={travelRate}
            placeholder="ange avtalssats" onChange={(e) => setTravelRate(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        {!r.eligible && (
          <div className="lm-result-row">
            <span>Reskostnad</span>
            <span>enkel resväg ≤ 2 km – ingen ersättning</span>
          </div>
        )}
        {r.mode === 'kollektiv' ? (
          <div className="lm-result-row">
            <span>Reskostnad</span>
            <span>ersätts mot uppvisat kvitto</span>
          </div>
        ) : (
          <>
            <div className="lm-result-row">
              <span>Reskostnad per resdag (tur och retur)</span>
              <span>{kr(r.perDag)}</span>
            </div>
            <div className="lm-result-row lm-result-highlight">
              <span>Reskostnadsersättning totalt</span>
              <strong>{kr(r.reskostnad)}</strong>
            </div>
          </>
        )}
        <div className="lm-result-row">
          <span>Restidsersättning (timmar × avtalssats)</span>
          <span>{kr(r.restid)}</span>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>Reskostnad + restid</span>
          <strong>{kr(r.total)}</strong>
        </div>
      </div>
      <p className="lm-tool-note">
        Reskostnadsersättning och restidsersättning är två olika poster och redovisas på egna rader:
        den ena betalar kilometrarna, den andra restiden. Restidssatsen är avtalsberoende – hämta den
        från gällande Byggavtal. Reskostnaden är capad vid avtalets traktamentesnivå per dag, och
        satserna revideras 1 maj. Skattefri milersättning är 25 kr/mil (2,50 kr/km) 2026 – belopp
        däröver blir skattepliktig lön. Verktyget ger en uppskattning, inte en färdig reseräkning.
      </p>
    </div>
  );
}
