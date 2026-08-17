import { useMemo, useState } from 'react';

// Free area calculator: sum the area (length × width) of one or more rectangles
// (rooms/sections), with an optional waste margin for material planning.

type Row = { l: string; w: string };
const emptyRow = (): Row => ({ l: '', w: '' });

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

export default function KvadratmeterKalkylatorTool() {
  const [rows, setRows] = useState<Row[]>([emptyRow(), emptyRow()]);
  const [spill, setSpill] = useState('0');
  const [price, setPrice] = useState('');

  const setRow = (i: number, patch: Partial<Row>) =>
    setRows((prev) => prev.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));
  const addRow = () => setRows((prev) => [...prev, emptyRow()]);
  const removeRow = (i: number) =>
    setRows((prev) => (prev.length > 1 ? prev.filter((_, idx) => idx !== i) : prev));

  const result = useMemo(() => {
    const base = rows.reduce((sum, r) => sum + num(r.l) * num(r.w), 0);
    const withSpill = base * (1 + num(spill) / 100);
    const cost = num(price) > 0 ? withSpill * num(price) : 0;
    return { base, withSpill, cost };
  }, [rows, spill, price]);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Kvadratmeterberäknare – räkna ut ytan</h2>
        <p className="lm-tool-sub">
          Fyll i längd och bredd för ett eller flera utrymmen så summeras ytan i kvadratmeter. Lägg till spill om du ska beställa material som golv, kakel eller färg.
        </p>
      </div>

      <div className="lm-tool-rows">
        <div className="lm-tool-row lm-tool-row-head">
          <span>Längd (m)</span>
          <span>Bredd (m)</span>
          <span>Yta</span>
          <span aria-hidden="true" />
        </div>
        {rows.map((row, i) => (
          <div className="lm-tool-row" key={i}>
            <input type="number" min="0" inputMode="decimal" value={row.l} placeholder="0" onChange={(e) => setRow(i, { l: e.currentTarget.value })} />
            <input type="number" min="0" inputMode="decimal" value={row.w} placeholder="0" onChange={(e) => setRow(i, { w: e.currentTarget.value })} />
            <input value={`${(num(row.l) * num(row.w)).toLocaleString('sv-SE', { maximumFractionDigits: 2 })} m²`} readOnly tabIndex={-1} />
            <button type="button" className="lm-tool-row-remove" aria-label="Ta bort rad" onClick={() => removeRow(i)}>×</button>
          </div>
        ))}
      </div>

      <div className="lm-tool-actions" style={{ marginTop: 14 }}>
        <button type="button" className="lm-tool-secondary" onClick={addRow}>+ Lägg till utrymme</button>
        <label className="lm-tool-field" style={{ maxWidth: 160 }}>
          <span>Spill (%)</span>
          <input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field" style={{ maxWidth: 180 }}>
          <span>Pris per m² (valfritt)</span>
          <input type="number" min="0" inputMode="decimal" value={price} placeholder="kr/m²" onChange={(e) => setPrice(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight">
          <span>Total yta</span>
          <strong>{result.base.toLocaleString('sv-SE', { maximumFractionDigits: 2 })} m²</strong>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>Inkl. spill – beställ minst</span>
          <strong>{result.withSpill.toLocaleString('sv-SE', { maximumFractionDigits: 2 })} m²</strong>
        </div>
        {result.cost > 0 ? (
          <div className="lm-result-row">
            <span>Uppskattad materialkostnad</span>
            <span>{Math.round(result.cost).toLocaleString('sv-SE')} kr</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
