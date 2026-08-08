import { useMemo, useState } from 'react';

// Free rebar mesh calculator: number of mesh sheets from area, sheet size and
// overlap.
function num(v: string): number { return Math.max(parseFloat(v.replace(',', '.')) || 0, 0); }

export default function ArmeringKalkylatorTool() {
  const [area, setArea] = useState('');
  const [sheet, setSheet] = useState('10');
  const [overlap, setOverlap] = useState('15');
  const result = useMemo(() => {
    const need = num(area) * (1 + num(overlap) / 100);
    const s = num(sheet);
    return { need, sheets: s > 0 ? Math.ceil(need / s) : 0 };
  }, [area, sheet, overlap]);
  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Armeringsnät – antal mattor</h2>
        <p className="lm-tool-sub">Fyll i ytan som ska armeras och mattans storlek så räknar vi ut antal armeringsnät, med påslag för överlapp. Vanlig matta är t.ex. 2 × 5 m (10 m²).</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Yta att armera (m²)</span><input type="number" min="0" inputMode="decimal" value={area} placeholder="t.ex. 40" onChange={(e) => setArea(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>m² per matta</span><input type="number" min="0" inputMode="decimal" value={sheet} onChange={(e) => setSheet(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Överlapp (%)</span><input type="number" min="0" inputMode="decimal" value={overlap} onChange={(e) => setOverlap(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Behov inkl. överlapp</span><strong>{result.need.toLocaleString('sv-SE', { maximumFractionDigits: 1 })} m²</strong></div>
        <div className="lm-result-row lm-result-total"><span>Antal mattor</span><strong>{result.sheets.toLocaleString('sv-SE')} st</strong></div>
        <p className="lm-result-fine">En uppskattning. Armeringsnät ska överlappa – ofta ett par rutor. Följ konstruktörens anvisning för nättyp och överlapp.</p>
      </div>
    </div>
  );
}
