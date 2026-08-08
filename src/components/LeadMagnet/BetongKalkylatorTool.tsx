import { useMemo, useState } from 'react';

// Free concrete calculator: volume from length × width × thickness, plus the
// number of dry-concrete bags. Bag yield is adjustable (a 25 kg bag ≈ 12.5 L).

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

export default function BetongKalkylatorTool() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [thickness, setThickness] = useState('10');
  const [bagYield, setBagYield] = useState('12.5');
  const [spill, setSpill] = useState('5');

  const result = useMemo(() => {
    const l = num(length);
    const w = num(width);
    const t = num(thickness) / 100; // cm -> m
    const yieldL = num(bagYield);
    const spillPct = num(spill) / 100;
    const volume = l * w * t * (1 + spillPct);
    const liters = volume * 1000;
    const bags = yieldL > 0 ? Math.ceil(liters / yieldL) : 0;
    return { volume, liters, bags };
  }, [length, width, thickness, bagYield, spill]);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Betongberäknare – volym och antal säckar</h2>
        <p className="lm-tool-sub">
          Fyll i mått så räknar vi ut betongvolymen och antalet säckar. Bra för platta, grund och gjutning. Justera säckens volym efter din produkt (25 kg ≈ 12,5 liter).
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Längd (m)</span>
          <input type="number" min="0" inputMode="decimal" value={length} placeholder="t.ex. 5" onChange={(e) => setLength(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Bredd (m)</span>
          <input type="number" min="0" inputMode="decimal" value={width} placeholder="t.ex. 4" onChange={(e) => setWidth(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Tjocklek (cm)</span>
          <input type="number" min="0" inputMode="decimal" value={thickness} onChange={(e) => setThickness(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Spill (%)</span>
          <input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Liter per säck</span>
          <input type="number" min="0" inputMode="decimal" value={bagYield} onChange={(e) => setBagYield(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight">
          <span>Betongvolym</span>
          <strong>{result.volume.toLocaleString('sv-SE', { maximumFractionDigits: 2 })} m³</strong>
        </div>
        <div className="lm-result-row">
          <span>Motsvarar</span>
          <span>{Math.round(result.liters).toLocaleString('sv-SE')} liter</span>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>Antal säckar</span>
          <strong>{result.bags.toLocaleString('sv-SE')} st</strong>
        </div>
        <p className="lm-result-fine">
          En uppskattning inkl. spill. Säckens volym varierar mellan produkter – kontrollera värdet på förpackningen. För stora gjutningar är färdig betong (kubik) ofta billigare än säck.
        </p>
      </div>
    </div>
  );
}
