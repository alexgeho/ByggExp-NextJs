import { useMemo, useState } from 'react';

// Free flooring/tiles calculator: area + waste → needed m² and number of packs.
function num(v: string): number { return Math.max(parseFloat(v.replace(',', '.')) || 0, 0); }

export default function GolvKalkylatorTool() {
  const [area, setArea] = useState('');
  const [spill, setSpill] = useState('8');
  const [perPack, setPerPack] = useState('2.5');
  const result = useMemo(() => {
    const need = num(area) * (1 + num(spill) / 100);
    const pack = num(perPack);
    return { need, packs: pack > 0 ? Math.ceil(need / pack) : 0 };
  }, [area, spill, perPack]);
  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Golv- och kakelberäknare</h2>
        <p className="lm-tool-sub">Fyll i ytan, spill och förpackningens storlek så räknar vi ut hur många kvadratmeter och förpackningar du behöver – för golv, laminat, klinker och kakel.</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Yta (m²)</span><input type="number" min="0" inputMode="decimal" value={area} placeholder="t.ex. 25" onChange={(e) => setArea(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Spill (%)</span><input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>m² per förpackning</span><input type="number" min="0" inputMode="decimal" value={perPack} onChange={(e) => setPerPack(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Behov inkl. spill</span><strong>{result.need.toLocaleString('sv-SE', { maximumFractionDigits: 1 })} m²</strong></div>
        <div className="lm-result-row lm-result-total"><span>Antal förpackningar</span><strong>{result.packs.toLocaleString('sv-SE')} st</strong></div>
        <p className="lm-result-fine">En uppskattning. Räkna med mer spill vid diagonal läggning eller många vinklar. m² per förpackning står på produkten.</p>
      </div>
    </div>
  );
}
