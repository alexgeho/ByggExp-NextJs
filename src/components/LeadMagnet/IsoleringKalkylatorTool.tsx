import { useMemo, useState } from 'react';

// Free insulation calculator: packs needed from area, pack coverage and waste.
function num(v: string): number { return Math.max(parseFloat(v.replace(',', '.')) || 0, 0); }

export default function IsoleringKalkylatorTool() {
  const [area, setArea] = useState('');
  const [perPack, setPerPack] = useState('5.4');
  const [spill, setSpill] = useState('5');
  const result = useMemo(() => {
    const need = num(area) * (1 + num(spill) / 100);
    const p = num(perPack);
    return { need, packs: p > 0 ? Math.ceil(need / p) : 0 };
  }, [area, perPack, spill]);
  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Isoleringsberäknare – antal förpackningar</h2>
        <p className="lm-tool-sub">Fyll i ytan som ska isoleras och hur många m² en förpackning täcker (för vald tjocklek) så räknar vi ut antalet förpackningar.</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Yta att isolera (m²)</span><input type="number" min="0" inputMode="decimal" value={area} placeholder="t.ex. 50" onChange={(e) => setArea(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>m² per förpackning</span><input type="number" min="0" inputMode="decimal" value={perPack} onChange={(e) => setPerPack(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Spill (%)</span><input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Behov inkl. spill</span><strong>{result.need.toLocaleString('sv-SE', { maximumFractionDigits: 1 })} m²</strong></div>
        <div className="lm-result-row lm-result-total"><span>Antal förpackningar</span><strong>{result.packs.toLocaleString('sv-SE')} st</strong></div>
        <p className="lm-result-fine">En uppskattning. Hur många m² en förpackning täcker beror på isoleringens tjocklek – värdet står på förpackningen.</p>
      </div>
    </div>
  );
}
