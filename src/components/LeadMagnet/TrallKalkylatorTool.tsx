import { useMemo, useState } from 'react';

// Free decking calculator: lineal metres and boards from area, board width,
// gap and waste.
function num(v: string): number { return Math.max(parseFloat(v.replace(',', '.')) || 0, 0); }

export default function TrallKalkylatorTool() {
  const [area, setArea] = useState('');
  const [board, setBoard] = useState('95');
  const [gap, setGap] = useState('4');
  const [len, setLen] = useState('3.6');
  const [spill, setSpill] = useState('10');
  const result = useMemo(() => {
    const pitch = (num(board) + num(gap)) / 1000; // m
    const meters = pitch > 0 ? (num(area) / pitch) * (1 + num(spill) / 100) : 0;
    const l = num(len);
    return { meters, boards: l > 0 ? Math.ceil(meters / l) : 0 };
  }, [area, board, gap, len, spill]);
  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Trallberäknare – löpmeter och brädor</h2>
        <p className="lm-tool-sub">Fyll i altanens yta, brädans bredd och springan mellan brädorna så räknar vi ut hur många löpmeter trall och antal brädor du behöver, inkl. spill.</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Yta (m²)</span><input type="number" min="0" inputMode="decimal" value={area} placeholder="t.ex. 20" onChange={(e) => setArea(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Brädans bredd (mm)</span><input type="number" min="0" inputMode="decimal" value={board} onChange={(e) => setBoard(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Springa (mm)</span><input type="number" min="0" inputMode="decimal" value={gap} onChange={(e) => setGap(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Brädans längd (m)</span><input type="number" min="0" inputMode="decimal" value={len} onChange={(e) => setLen(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Spill (%)</span><input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Löpmeter trall</span><strong>{result.meters.toLocaleString('sv-SE', { maximumFractionDigits: 0 })} lpm</strong></div>
        <div className="lm-result-row lm-result-total"><span>Antal brädor</span><strong>{result.boards.toLocaleString('sv-SE')} st</strong></div>
        <p className="lm-result-fine">En uppskattning. Glöm inte virke till reglar/bärlina under trallen. Springan påverkar åtgången – räkna med marginal.</p>
      </div>
    </div>
  );
}
