import { useMemo, useState } from 'react';

// Free roof-truss calculator: number of trusses from roof length and spacing.
function num(v: string): number { return Math.max(parseFloat(v.replace(',', '.')) || 0, 0); }

export default function TakstolarKalkylatorTool() {
  const [length, setLength] = useState('');
  const [cc, setCc] = useState('1200');
  const result = useMemo(() => {
    const l = num(length);
    const c = num(cc);
    const count = l > 0 && c > 0 ? Math.floor((l * 1000) / c) + 1 : 0;
    return { count };
  }, [length, cc]);
  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Takstolar – antal utifrån c/c</h2>
        <p className="lm-tool-sub">Fyll i takets längd och centrumavstånd (c/c) så räknar vi ut antal takstolar.</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Takets längd (m)</span><input type="number" min="0" inputMode="decimal" value={length} placeholder="t.ex. 10" onChange={(e) => setLength(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Centrumavstånd c/c (mm)</span><input type="number" min="0" inputMode="numeric" value={cc} onChange={(e) => setCc(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Antal takstolar</span><strong>{result.count.toLocaleString('sv-SE')} st</strong></div>
        <p className="lm-result-fine">En uppskattning (antal = längd ÷ c/c + 1). Vanligt c/c är 1200 mm, men följ konstruktörens dimensionering för din takstol och snölast.</p>
      </div>
    </div>
  );
}
