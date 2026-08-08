import { useMemo, useState } from 'react';

// Free drywall (gipsskivor) calculator: sheets needed from wall area, layers,
// sheet size and waste.
function num(v: string): number { return Math.max(parseFloat(v.replace(',', '.')) || 0, 0); }

export default function GipsKalkylatorTool() {
  const [area, setArea] = useState('');
  const [layers, setLayers] = useState(1);
  const [sheet, setSheet] = useState('3.0');
  const [spill, setSpill] = useState('10');
  const result = useMemo(() => {
    const need = num(area) * layers * (1 + num(spill) / 100);
    const s = num(sheet);
    return { need, sheets: s > 0 ? Math.ceil(need / s) : 0 };
  }, [area, layers, sheet, spill]);
  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Gipsberäknare – antal gipsskivor</h2>
        <p className="lm-tool-sub">Fyll i väggytan, antal lager och skivans storlek så räknar vi ut hur många gipsskivor du behöver, inklusive spill.</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Yta att skiva (m²)</span><input type="number" min="0" inputMode="decimal" value={area} placeholder="t.ex. 30" onChange={(e) => setArea(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Antal lager</span><select value={layers} onChange={(e) => setLayers(parseInt(e.currentTarget.value, 10))}><option value={1}>1 lager</option><option value={2}>2 lager</option></select></label>
        <label className="lm-tool-field"><span>m² per skiva</span><input type="number" min="0" inputMode="decimal" value={sheet} onChange={(e) => setSheet(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Spill (%)</span><input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Behov inkl. spill</span><strong>{result.need.toLocaleString('sv-SE', { maximumFractionDigits: 1 })} m²</strong></div>
        <div className="lm-result-row lm-result-total"><span>Antal gipsskivor</span><strong>{result.sheets.toLocaleString('sv-SE')} st</strong></div>
        <p className="lm-result-fine">En uppskattning. En vanlig gipsskiva (1200 × 2600 mm) är ca 3,1 m². Kontrollera skivans mått hos leverantören.</p>
      </div>
    </div>
  );
}
