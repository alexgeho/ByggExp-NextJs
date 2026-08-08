import { useMemo, useState } from 'react';

// Free ROT-avdrag calculator. Rules (Skatteverket, from 2026-01-01): ROT = 30%
// of labour cost (incl. VAT), max 50 000 kr per person and year; two owners can
// share and double the ceiling. Applies to labour only, not material.

const ROT_RATE = 0.3;
const ROT_CAP_PER_PERSON = 50000;

function kr(value: number): string {
  return `${Math.round(value).toLocaleString('sv-SE')} kr`;
}

export default function RotKalkylatorTool() {
  const [labour, setLabour] = useState('');
  const [material, setMaterial] = useState('');
  const [owners, setOwners] = useState(1);

  const result = useMemo(() => {
    const labourCost = Math.max(parseFloat(labour.replace(',', '.')) || 0, 0);
    const materialCost = Math.max(parseFloat(material.replace(',', '.')) || 0, 0);
    const cap = ROT_CAP_PER_PERSON * owners;
    const raw = labourCost * ROT_RATE;
    const rot = Math.min(raw, cap);
    const capped = raw > cap;
    const labourAfter = labourCost - rot;
    const total = labourAfter + materialCost;
    return { labourCost, materialCost, cap, rot, capped, labourAfter, total };
  }, [labour, material, owners]);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Räkna ut ROT-avdraget</h2>
        <p className="lm-tool-sub">
          Fyll i arbetskostnaden så räknar vi ut ROT-avdraget och vad kunden betalar. Enligt Skatteverkets regler 2026: 30 % av arbetskostnaden, max 50 000 kr per person och år.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Arbetskostnad inkl. moms (kr)</span>
          <input
            type="number"
            min="0"
            inputMode="numeric"
            value={labour}
            placeholder="t.ex. 40000"
            onChange={(e) => setLabour(e.currentTarget.value)}
          />
        </label>
        <label className="lm-tool-field">
          <span>Materialkostnad inkl. moms (kr)</span>
          <input
            type="number"
            min="0"
            inputMode="numeric"
            value={material}
            placeholder="valfritt"
            onChange={(e) => setMaterial(e.currentTarget.value)}
          />
        </label>
        <label className="lm-tool-field">
          <span>Antal ägare som delar avdraget</span>
          <select value={owners} onChange={(e) => setOwners(parseInt(e.currentTarget.value, 10))}>
            <option value={1}>1 person (tak 50 000 kr)</option>
            <option value={2}>2 personer (tak 100 000 kr)</option>
          </select>
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight">
          <span>ROT-avdrag</span>
          <strong>{kr(result.rot)}</strong>
        </div>
        <div className="lm-result-row">
          <span>Arbetskostnad efter ROT</span>
          <span>{kr(result.labourAfter)}</span>
        </div>
        {result.materialCost > 0 ? (
          <div className="lm-result-row">
            <span>Material</span>
            <span>{kr(result.materialCost)}</span>
          </div>
        ) : null}
        <div className="lm-result-row lm-result-total">
          <span>Kunden betalar totalt</span>
          <strong>{kr(result.total)}</strong>
        </div>
        {result.capped ? (
          <p className="lm-result-note">
            Avdraget är begränsat till takbeloppet {kr(result.cap)}. Hela 30 % av arbetskostnaden ryms alltså inte inom ROT.
          </p>
        ) : null}
        <p className="lm-result-fine">
          Beräkningen är en uppskattning enligt reglerna 2026. Det slutliga avdraget beror på hur mycket ROT/RUT kunden redan använt under året (gemensamt tak 75 000 kr, varav max 50 000 kr ROT per person).
        </p>
      </div>
    </div>
  );
}
