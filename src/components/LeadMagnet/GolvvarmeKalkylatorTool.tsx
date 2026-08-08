import { useMemo, useState } from 'react';

// Free underfloor-heating calculator: pipe/loop length from area and pipe
// spacing (c/c), plus number of loops given a max loop length.
function num(v: string): number { return Math.max(parseFloat(v.replace(',', '.')) || 0, 0); }

export default function GolvvarmeKalkylatorTool() {
  const [area, setArea] = useState('');
  const [cc, setCc] = useState('200');
  const [maxLoop, setMaxLoop] = useState('100');
  const result = useMemo(() => {
    const c = num(cc);
    const total = c > 0 ? (num(area) * 1000) / c : 0;
    const m = num(maxLoop);
    return { total, loops: m > 0 && total > 0 ? Math.ceil(total / m) : 0 };
  }, [area, cc, maxLoop]);
  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Golvvärme – slinglängd och antal slingor</h2>
        <p className="lm-tool-sub">Fyll i ytan och centrumavståndet (c/c) mellan rören så räknar vi ut ungefärlig slinglängd och antal slingor. Lägg till tillopp/retur separat.</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Yta (m²)</span><input type="number" min="0" inputMode="decimal" value={area} placeholder="t.ex. 20" onChange={(e) => setArea(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Centrumavstånd c/c (mm)</span><input type="number" min="0" inputMode="numeric" value={cc} onChange={(e) => setCc(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Max slinglängd (m)</span><input type="number" min="0" inputMode="numeric" value={maxLoop} onChange={(e) => setMaxLoop(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Ungefärlig slinglängd</span><strong>{result.total.toLocaleString('sv-SE', { maximumFractionDigits: 0 })} m</strong></div>
        <div className="lm-result-row lm-result-total"><span>Antal slingor</span><strong>{result.loops.toLocaleString('sv-SE')} st</strong></div>
        <p className="lm-result-fine">En uppskattning (slinglängd ≈ yta ÷ c/c). Räkna med extra rör för tillopp och retur till fördelaren, och håll dig inom max slinglängd per slinga.</p>
      </div>
    </div>
  );
}
