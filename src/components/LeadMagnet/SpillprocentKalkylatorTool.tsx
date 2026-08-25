import { useMemo, useState } from 'react';

import type { CalcLocale } from '../../lib/locale';

// Free waste/spill calculator. Enter the net quantity and a spill percentage
// (or pick a material preset) to get the gross quantity to order. Presets are
// typical ranges; the user can always override with an exact percentage.
// Bilingual: sv default, en for /en/verktyg.

export default function SpillprocentKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const num = (value: number) => value.toLocaleString(en ? 'en-GB' : 'sv-SE', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  const t = en
    ? {
        title: 'Work out waste and material need',
        sub: 'Enter the net need and choose a material (or your own waste allowance) to get the gross quantity to order. Cutting waste and rejects mean you always need to buy more than the clean area.',
        net: 'Net need', netPh: 'e.g. 120', unit: 'Unit', material: 'Material / waste', custom: 'Waste allowance (%)',
        rNet: 'Net need', rSpill: (p: string) => `Waste (${p}%)`, rOrder: 'To order',
        note: 'Guide values – exact waste depends on the shape of the area, the number of cuts and the material format. Always round up to a whole pack and check the supplier’s instructions.',
        presets: ['Custom value', 'Roof tiles / brick (10%)', 'Decking / floorboard (8%)', 'Floor / wall tiles (10%)', 'Plasterboard (10%)', 'Concrete, casting (5%)', 'Insulation (5%)', 'Studs / timber (8%)', 'Complex roof / sheet metal (15%)'],
        pcs: 'pcs',
      }
    : {
        title: 'Räkna ut spill och materialåtgång',
        sub: 'Ange nettoåtgången och välj material (eller eget spillpåslag) så får du bruttomängden att beställa. Kapspill och kassation gör att du alltid behöver köpa mer än den rena ytan.',
        net: 'Nettoåtgång', netPh: 't.ex. 120', unit: 'Enhet', material: 'Material / spill', custom: 'Spillpåslag (%)',
        rNet: 'Nettoåtgång', rSpill: (p: string) => `Spill (${p} %)`, rOrder: 'Att beställa',
        note: 'Riktvärden – exakt spill beror på ytans form, antal skärningar och materialets format. Runda alltid upp till hel förpackning och kontrollera leverantörens anvisning.',
        presets: ['Eget värde', 'Takpannor / tegel (10 %)', 'Trall / golvbräda (8 %)', 'Klinker / kakel (10 %)', 'Gips (10 %)', 'Betong, gjutning (5 %)', 'Isolering (5 %)', 'Reglar / virke (8 %)', 'Komplext tak / plåt (15 %)'],
        pcs: 'st',
      };

  const PRESET_SPILL = [NaN, 10, 8, 10, 10, 5, 5, 8, 15];

  const [net, setNet] = useState('');
  const [unit, setUnit] = useState('m²');
  const [presetIdx, setPresetIdx] = useState(1);
  const [custom, setCustom] = useState('10');

  const r = useMemo(() => {
    const netto = Math.max(parseFloat(net.replace(',', '.')) || 0, 0);
    const presetSpill = PRESET_SPILL[presetIdx];
    const spill = Number.isNaN(presetSpill)
      ? Math.max(parseFloat(custom.replace(',', '.')) || 0, 0)
      : presetSpill;
    const spillmangd = netto * (spill / 100);
    const brutto = netto + spillmangd;
    return { netto, spill, spillmangd, brutto };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [net, presetIdx, custom]);

  const isCustom = Number.isNaN(PRESET_SPILL[presetIdx]);
  // Unit labels: 'st'/'pcs' is the only locale-dependent one.
  const unitLabel = unit === 'st' ? t.pcs : unit;

  return (
    <div className="lm-tool lm-tool--split">

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>{t.net}</span>
          <input type="number" min="0" inputMode="decimal" value={net} placeholder={t.netPh}
            onChange={(e) => setNet(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.unit}</span>
          <select value={unit} onChange={(e) => setUnit(e.currentTarget.value)}>
            <option value="m²">m²</option>
            <option value="lpm">{en ? 'lm' : 'lpm'}</option>
            <option value="st">{t.pcs}</option>
            <option value="m³">m³</option>
            <option value="kg">kg</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>{t.material}</span>
          <select value={presetIdx} onChange={(e) => setPresetIdx(parseInt(e.currentTarget.value, 10))}>
            {t.presets.map((label, i) => (
              <option key={label} value={i}>{label}</option>
            ))}
          </select>
        </label>
        {isCustom && (
          <label className="lm-tool-field">
            <span>{t.custom}</span>
            <input type="number" step="1" min="0" inputMode="decimal" value={custom}
              onChange={(e) => setCustom(e.currentTarget.value)} />
          </label>
        )}
      </div>

      <div className="lm-result">
        <div className="lm-result-row">
          <span>{t.rNet}</span>
          <span>{num(r.netto)} {unitLabel}</span>
        </div>
        <div className="lm-result-row">
          <span>{t.rSpill(num(r.spill))}</span>
          <span>{num(r.spillmangd)} {unitLabel}</span>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>{t.rOrder}</span>
          <strong>{num(r.brutto)} {unitLabel}</strong>
        </div>
      </div>
      <p className="lm-tool-note">{t.note}</p>
    </div>
  );
}
