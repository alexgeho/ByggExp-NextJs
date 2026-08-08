import { useMemo, useState } from 'react';

// Free tile-adhesive calculator: total kg and bags from area × consumption.
function num(v: string): number { return Math.max(parseFloat(v.replace(',', '.')) || 0, 0); }

export default function KakelfixKalkylatorTool() {
  const [area, setArea] = useState('');
  const [perM2, setPerM2] = useState('4');
  const [spill, setSpill] = useState('5');
  const [bag, setBag] = useState('20');
  const result = useMemo(() => {
    const kg = num(area) * num(perM2) * (1 + num(spill) / 100);
    const b = num(bag);
    return { kg, bags: b > 0 ? Math.ceil(kg / b) : 0 };
  }, [area, perM2, spill, bag]);
  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Kakelfix – åtgång fästmassa</h2>
        <p className="lm-tool-sub">Fyll i ytan och åtgången i kg per m² så räknar vi ut hur mycket fästmassa (kakelfix) du behöver och antal säckar. Åtgången beror på tandad spackel och plattstorlek.</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Yta (m²)</span><input type="number" min="0" inputMode="decimal" value={area} placeholder="t.ex. 15" onChange={(e) => setArea(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Åtgång (kg per m²)</span><input type="number" min="0" inputMode="decimal" value={perM2} onChange={(e) => setPerM2(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Spill (%)</span><input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Kg per säck</span><input type="number" min="0" inputMode="decimal" value={bag} onChange={(e) => setBag(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Total mängd fix</span><strong>{result.kg.toLocaleString('sv-SE', { maximumFractionDigits: 0 })} kg</strong></div>
        <div className="lm-result-row lm-result-total"><span>Antal säckar</span><strong>{result.bags.toLocaleString('sv-SE')} st</strong></div>
        <p className="lm-result-fine">En uppskattning. Åtgången ökar med större tandning och större plattor – ofta 3–6 kg/m². Följ uppgiften på säcken.</p>
      </div>
    </div>
  );
}
