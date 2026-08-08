import { useMemo, useState } from 'react';

// Free stud/joist calculator: number of studs from length and c/c spacing.
function num(v: string): number { return Math.max(parseFloat(v.replace(',', '.')) || 0, 0); }

export default function ReglarKalkylatorTool() {
  const [length, setLength] = useState('');
  const [cc, setCc] = useState('600');
  const [height, setHeight] = useState('2.4');
  const result = useMemo(() => {
    const l = num(length);
    const c = num(cc);
    const count = c > 0 && l > 0 ? Math.floor((l * 1000) / c) + 1 : 0;
    const meters = count * num(height);
    return { count, meters };
  }, [length, cc, height]);
  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Reglar & virke – antal och löpmeter</h2>
        <p className="lm-tool-sub">Fyll i väggens längd och centrumavstånd (c/c) så räknar vi ut antal reglar och totalt antal löpmeter virke.</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Längd (m)</span><input type="number" min="0" inputMode="decimal" value={length} placeholder="t.ex. 6" onChange={(e) => setLength(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Centrumavstånd c/c (mm)</span><input type="number" min="0" inputMode="numeric" value={cc} onChange={(e) => setCc(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Regelns längd/höjd (m)</span><input type="number" min="0" inputMode="decimal" value={height} onChange={(e) => setHeight(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Antal reglar</span><strong>{result.count.toLocaleString('sv-SE')} st</strong></div>
        <div className="lm-result-row lm-result-total"><span>Totalt virke</span><strong>{result.meters.toLocaleString('sv-SE', { maximumFractionDigits: 1 })} löpmeter</strong></div>
        <p className="lm-result-fine">Antal = längd ÷ c/c + 1. Vanliga c/c-avstånd är 450 eller 600 mm. Glöm inte hammarband och syll utöver de stående reglarna.</p>
      </div>
    </div>
  );
}
