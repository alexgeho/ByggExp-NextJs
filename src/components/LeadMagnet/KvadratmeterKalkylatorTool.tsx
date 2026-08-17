import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import { fakturaHref, offertHref } from '../../lib/offert';

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

  const nf = (v: number, d = 2) => v.toLocaleString('sv-SE', { maximumFractionDigits: d });

  const exportCsv = () => {
    const csvRows: (string | number)[][] = [
      ['Kvadratmeterberäknare', 'byggexp.se'],
      [],
      ['Utrymme', 'Längd (m)', 'Bredd (m)', 'Yta (m²)'],
      ...rows.map((row, i) => [`Yta ${i + 1}`, row.l || 0, row.w || 0, nf(num(row.l) * num(row.w))]),
      [],
      ['Total yta', `${nf(result.base)} m²`],
      ['Inkl. spill', `${nf(result.withSpill)} m²`],
      ...(result.cost > 0 ? [['Uppskattad materialkostnad', `${Math.round(result.cost).toLocaleString('sv-SE')} kr`]] : []),
    ];
    gaEvent('export_excel', { tool: 'kvadratmeter-kalkylator' });
    downloadCsvRows(csvRows, 'ytor-kvadratmeter.csv');
  };

  const seedRows = [
    { desc: 'Yta (m²)', qty: Math.round(result.withSpill * 100) / 100 },
    { desc: 'Arbete', qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);

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
        <div className="lm-tool-actions" style={{ marginTop: 16 }}>
          <a className="lm-tool-button" href={result.base > 0 ? offertUrl : undefined} aria-disabled={result.base <= 0} onClick={() => gaEvent('offert_from_calculator', { tool: 'kvadratmeter-kalkylator' })}>
            Skapa offert av det här
          </a>
          <a className="lm-tool-secondary" href={result.base > 0 ? fakturaUrl : undefined} aria-disabled={result.base <= 0} onClick={() => gaEvent('faktura_from_calculator', { tool: 'kvadratmeter-kalkylator' })}>
            Skapa faktura
          </a>
          <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={result.base <= 0}>
            Exportera till Excel
          </button>
        </div>
      </div>
    </div>
  );
}
