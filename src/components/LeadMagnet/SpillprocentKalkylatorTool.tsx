import { useMemo, useState } from 'react';

// Free waste/spill calculator. Enter the net quantity and a spill percentage
// (or pick a material preset) to get the gross quantity to order. Presets are
// typical ranges; the user can always override with an exact percentage.

type Preset = { label: string; spill: number };

const PRESETS: Preset[] = [
  { label: 'Eget värde', spill: NaN },
  { label: 'Takpannor / tegel (10 %)', spill: 10 },
  { label: 'Trall / golvbräda (8 %)', spill: 8 },
  { label: 'Klinker / kakel (10 %)', spill: 10 },
  { label: 'Gips (10 %)', spill: 10 },
  { label: 'Betong, gjutning (5 %)', spill: 5 },
  { label: 'Isolering (5 %)', spill: 5 },
  { label: 'Reglar / virke (8 %)', spill: 8 },
  { label: 'Komplext tak / plåt (15 %)', spill: 15 },
];

function num(value: number): string {
  return value.toLocaleString('sv-SE', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

export default function SpillprocentKalkylatorTool() {
  const [net, setNet] = useState('');
  const [unit, setUnit] = useState('m²');
  const [presetIdx, setPresetIdx] = useState(1);
  const [custom, setCustom] = useState('10');

  const r = useMemo(() => {
    const netto = Math.max(parseFloat(net.replace(',', '.')) || 0, 0);
    const preset = PRESETS[presetIdx];
    const spill = Number.isNaN(preset.spill)
      ? Math.max(parseFloat(custom.replace(',', '.')) || 0, 0)
      : preset.spill;
    const spillmangd = netto * (spill / 100);
    const brutto = netto + spillmangd;
    return { netto, spill, spillmangd, brutto };
  }, [net, presetIdx, custom]);

  const isCustom = Number.isNaN(PRESETS[presetIdx].spill);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Räkna ut spill och materialåtgång</h2>
        <p className="lm-tool-sub">
          Ange nettoåtgången och välj material (eller eget spillpåslag) så får du bruttomängden att beställa.
          Kapspill och kassation gör att du alltid behöver köpa mer än den rena ytan.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Nettoåtgång</span>
          <input type="number" min="0" inputMode="decimal" value={net} placeholder="t.ex. 120"
            onChange={(e) => setNet(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Enhet</span>
          <select value={unit} onChange={(e) => setUnit(e.currentTarget.value)}>
            <option value="m²">m²</option>
            <option value="lpm">lpm</option>
            <option value="st">st</option>
            <option value="m³">m³</option>
            <option value="kg">kg</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>Material / spill</span>
          <select value={presetIdx} onChange={(e) => setPresetIdx(parseInt(e.currentTarget.value, 10))}>
            {PRESETS.map((p, i) => (
              <option key={p.label} value={i}>{p.label}</option>
            ))}
          </select>
        </label>
        {isCustom && (
          <label className="lm-tool-field">
            <span>Spillpåslag (%)</span>
            <input type="number" step="1" min="0" inputMode="decimal" value={custom}
              onChange={(e) => setCustom(e.currentTarget.value)} />
          </label>
        )}
      </div>

      <div className="lm-result">
        <div className="lm-result-row">
          <span>Nettoåtgång</span>
          <span>{num(r.netto)} {unit}</span>
        </div>
        <div className="lm-result-row">
          <span>Spill ({num(r.spill)} %)</span>
          <span>{num(r.spillmangd)} {unit}</span>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>Att beställa</span>
          <strong>{num(r.brutto)} {unit}</strong>
        </div>
      </div>
      <p className="lm-tool-note">
        Riktvärden – exakt spill beror på ytans form, antal skärningar och materialets format. Runda alltid upp
        till hel förpackning och kontrollera leverantörens anvisning.
      </p>
    </div>
  );
}
