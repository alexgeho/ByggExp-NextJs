import { useMemo, useState } from 'react';

// Free paint-quantity calculator: litres = area × coats ÷ coverage (m²/litre).
// Coverage and number of coats are adjustable.

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

export default function FargKalkylatorTool() {
  const [area, setArea] = useState('');
  const [coats, setCoats] = useState('2');
  const [coverage, setCoverage] = useState('7');

  const result = useMemo(() => {
    const a = num(area);
    const c = num(coats);
    const cov = num(coverage);
    const liters = cov > 0 ? (a * c) / cov : 0;
    return { paintedArea: a * c, liters };
  }, [area, coats, coverage]);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Färgåtgång – hur mycket färg behöver du?</h2>
        <p className="lm-tool-sub">
          Fyll i ytan som ska målas, antal strykningar och färgens täckförmåga så räknar vi ut hur många liter du behöver. Täckförmågan står på burken (ofta 6–8 m² per liter).
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Yta att måla (m²)</span>
          <input type="number" min="0" inputMode="decimal" value={area} placeholder="t.ex. 40" onChange={(e) => setArea(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Antal strykningar</span>
          <input type="number" min="1" inputMode="numeric" value={coats} onChange={(e) => setCoats(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Täckförmåga (m² per liter)</span>
          <input type="number" min="0" inputMode="decimal" value={coverage} onChange={(e) => setCoverage(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row">
          <span>Yta att måla totalt</span>
          <span>{result.paintedArea.toLocaleString('sv-SE', { maximumFractionDigits: 1 })} m²</span>
        </div>
        <div className="lm-result-row lm-result-highlight">
          <span>Färg som behövs</span>
          <strong>{result.liters.toLocaleString('sv-SE', { maximumFractionDigits: 1 })} liter</strong>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>Köp minst (avrundat)</span>
          <strong>{Math.ceil(result.liters).toLocaleString('sv-SE')} liter</strong>
        </div>
        <p className="lm-result-fine">
          En uppskattning. Åtgången påverkas av underlaget – ett sugande eller ojämnt underlag drar mer färg. Räkna gärna med lite marginal.
        </p>
      </div>
    </div>
  );
}
