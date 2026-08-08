import { useMemo, useState } from 'react';

// Free fence calculator: number of posts and sections from length and post
// spacing (c/c).
function num(v: string): number { return Math.max(parseFloat(v.replace(',', '.')) || 0, 0); }

export default function StaketKalkylatorTool() {
  const [length, setLength] = useState('');
  const [cc, setCc] = useState('2');
  const result = useMemo(() => {
    const l = num(length);
    const c = num(cc);
    const sections = l > 0 && c > 0 ? Math.ceil(l / c) : 0;
    const posts = sections > 0 ? sections + 1 : 0;
    return { sections, posts };
  }, [length, cc]);
  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Staketberäknare – antal stolpar och sektioner</h2>
        <p className="lm-tool-sub">Fyll i staketets längd och avståndet mellan stolparna (c/c) så räknar vi ut antal stolpar och sektioner.</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Längd (m)</span><input type="number" min="0" inputMode="decimal" value={length} placeholder="t.ex. 20" onChange={(e) => setLength(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Stolpavstånd c/c (m)</span><input type="number" min="0" inputMode="decimal" value={cc} onChange={(e) => setCc(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Antal stolpar</span><strong>{result.posts.toLocaleString('sv-SE')} st</strong></div>
        <div className="lm-result-row lm-result-total"><span>Antal sektioner</span><strong>{result.sections.toLocaleString('sv-SE')} st</strong></div>
        <p className="lm-result-fine">En uppskattning (antal stolpar = sektioner + 1). Räkna med grind separat, och anpassa c/c efter staketets typ och vindlast.</p>
      </div>
    </div>
  );
}
