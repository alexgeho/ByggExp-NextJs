import { useMemo, useState } from 'react';

import type { CalcLocale } from '../../lib/locale';

// Free ROT-avdrag calculator. Rules (Skatteverket, from 2026-01-01): ROT = 30%
// of labour cost (incl. VAT), max 50 000 kr per person and year; two owners can
// share and double the ceiling. Applies to labour only, not material. Bilingual:
// sv default, en for /en/verktyg.

const ROT_RATE = 0.3;
const ROT_CAP_PER_PERSON = 50000;

export default function RotKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const kr = (value: number) => `${Math.round(value).toLocaleString(en ? 'en-GB' : 'sv-SE')} kr`;
  const t = en
    ? {
        title: 'Work out the ROT deduction',
        sub: 'Enter the labour cost and we work out the ROT deduction and what the customer pays. Per Skatteverket’s 2026 rules: 30% of the labour cost, max 50,000 kr per person and year.',
        labour: 'Labour cost incl. VAT (kr)', labourPh: 'e.g. 40000',
        material: 'Material cost incl. VAT (kr)', materialPh: 'optional',
        owners: 'Number of owners sharing the deduction', o1: '1 person (cap 50,000 kr)', o2: '2 people (cap 100,000 kr)',
        rRot: 'ROT deduction', rAfter: 'Labour cost after ROT', rMaterial: 'Material', rTotal: 'Customer pays in total',
        capped: (cap: string) => `The deduction is limited to the cap of ${cap}. The full 30% of the labour cost does not fit within ROT.`,
        fine: 'The calculation is an estimate per the 2026 rules. The final deduction depends on how much ROT/RUT the customer has already used this year (shared cap 75,000 kr, of which max 50,000 kr ROT per person).',
      }
    : {
        title: 'Räkna ut ROT-avdraget',
        sub: 'Fyll i arbetskostnaden så räknar vi ut ROT-avdraget och vad kunden betalar. Enligt Skatteverkets regler 2026: 30 % av arbetskostnaden, max 50 000 kr per person och år.',
        labour: 'Arbetskostnad inkl. moms (kr)', labourPh: 't.ex. 40000',
        material: 'Materialkostnad inkl. moms (kr)', materialPh: 'valfritt',
        owners: 'Antal ägare som delar avdraget', o1: '1 person (tak 50 000 kr)', o2: '2 personer (tak 100 000 kr)',
        rRot: 'ROT-avdrag', rAfter: 'Arbetskostnad efter ROT', rMaterial: 'Material', rTotal: 'Kunden betalar totalt',
        capped: (cap: string) => `Avdraget är begränsat till takbeloppet ${cap}. Hela 30 % av arbetskostnaden ryms alltså inte inom ROT.`,
        fine: 'Beräkningen är en uppskattning enligt reglerna 2026. Det slutliga avdraget beror på hur mycket ROT/RUT kunden redan använt under året (gemensamt tak 75 000 kr, varav max 50 000 kr ROT per person).',
      };

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
    <div className="lm-tool lm-tool--split">

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>{t.labour}</span>
          <input type="number" min="0" inputMode="numeric" value={labour} placeholder={t.labourPh} onChange={(e) => setLabour(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.material}</span>
          <input type="number" min="0" inputMode="numeric" value={material} placeholder={t.materialPh} onChange={(e) => setMaterial(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.owners}</span>
          <select value={owners} onChange={(e) => setOwners(parseInt(e.currentTarget.value, 10))}>
            <option value={1}>{t.o1}</option>
            <option value={2}>{t.o2}</option>
          </select>
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight">
          <span>{t.rRot}</span>
          <strong>{kr(result.rot)}</strong>
        </div>
        <div className="lm-result-row">
          <span>{t.rAfter}</span>
          <span>{kr(result.labourAfter)}</span>
        </div>
        {result.materialCost > 0 ? (
          <div className="lm-result-row">
            <span>{t.rMaterial}</span>
            <span>{kr(result.materialCost)}</span>
          </div>
        ) : null}
        <div className="lm-result-row lm-result-total">
          <span>{t.rTotal}</span>
          <strong>{kr(result.total)}</strong>
        </div>
        {result.capped ? (
          <p className="lm-result-note">{t.capped(kr(result.cap))}</p>
        ) : null}
        <p className="lm-result-fine">{t.fine}</p>
      </div>
    </div>
  );
}
