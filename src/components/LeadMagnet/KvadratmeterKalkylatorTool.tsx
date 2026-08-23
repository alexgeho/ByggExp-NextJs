import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import type { CalcLocale } from '../../lib/locale';
import { downloadMaterialPdf } from '../../lib/materialPdf';
import { fakturaHref, offertHref } from '../../lib/offert';

// Free area calculator: sum the area (length × width) of one or more rectangles
// (rooms/sections), with an optional waste margin for material planning.
// Bilingual: sv default, en for /en/verktyg; nb falls back to sv text.

type Row = { l: string; w: string };
const emptyRow = (): Row => ({ l: '', w: '' });

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

export default function KvadratmeterKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const loc = en ? 'en-GB' : 'sv-SE';
  const nf = (v: number, d = 2) => v.toLocaleString(loc, { maximumFractionDigits: d });
  const kr = (v: number) => `${Math.round(v).toLocaleString(loc)} kr`;
  const t = en
    ? {
        title: 'Square-metre calculator – work out the area',
        sub: 'Enter the length and width for one or more spaces and the area is summed in square metres. Add waste if you are ordering material such as flooring, tiles or paint.',
        length: 'Length (m)', width: 'Width (m)', area: 'Area', removeLabel: 'Remove row',
        addRow: '+ Add space', spill: 'Waste (%)', price: 'Price per m² (optional)', pricePh: 'kr/m²',
        total: 'Total area', withSpill: 'Incl. waste – order at least', cost: 'Estimated material cost',
        offert: 'Create quote from this', faktura: 'Create invoice', excel: 'Export Excel', pdf: 'Export PDF',
        csvTitle: 'Square-metre calculator', csvSpace: 'Space', csvArea: 'Area (m²)',
        pdfTitle: 'Areas – square metres', pArea: (i: number, l: string, w: string) => `Area ${i} (${l} × ${w} m)`,
        soArea: 'Area (m²)', soLabour: 'Labour',
      }
    : {
        title: 'Kvadratmeterberäknare – räkna ut ytan',
        sub: 'Fyll i längd och bredd för ett eller flera utrymmen så summeras ytan i kvadratmeter. Lägg till spill om du ska beställa material som golv, kakel eller färg.',
        length: 'Längd (m)', width: 'Bredd (m)', area: 'Yta', removeLabel: 'Ta bort rad',
        addRow: '+ Lägg till utrymme', spill: 'Spill (%)', price: 'Pris per m² (valfritt)', pricePh: 'kr/m²',
        total: 'Total yta', withSpill: 'Inkl. spill – beställ minst', cost: 'Uppskattad materialkostnad',
        offert: 'Skapa offert av det här', faktura: 'Skapa faktura', excel: 'Exportera Excel', pdf: 'Exportera PDF',
        csvTitle: 'Kvadratmeterberäknare', csvSpace: 'Utrymme', csvArea: 'Yta (m²)',
        pdfTitle: 'Ytor – kvadratmeter', pArea: (i: number, l: string, w: string) => `Yta ${i} (${l} × ${w} m)`,
        soArea: 'Yta (m²)', soLabour: 'Arbete',
      };

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

  const exportCsv = () => {
    const csvRows: (string | number)[][] = [
      [t.csvTitle, 'byggexp.se'],
      [],
      [t.csvSpace, t.length, t.width, t.csvArea],
      ...rows.map((row, i) => [`${t.area} ${i + 1}`, row.l || 0, row.w || 0, nf(num(row.l) * num(row.w))]),
      [],
      [t.total, `${nf(result.base)} m²`],
      [t.withSpill, `${nf(result.withSpill)} m²`],
      ...(result.cost > 0 ? [[t.cost, kr(result.cost)]] : []),
    ];
    gaEvent('export_excel', { tool: 'kvadratmeter-kalkylator' });
    downloadCsvRows(csvRows, 'ytor-kvadratmeter.csv');
  };

  const exportPdf = () => void downloadMaterialPdf({
    title: t.pdfTitle,
    rows: [
      ...rows.map((row, i) => ({ desc: t.pArea(i + 1, row.l || '0', row.w || '0'), qty: `${nf(num(row.l) * num(row.w))} m²` })),
      { desc: t.total, qty: `${nf(result.base)} m²` },
      { desc: t.withSpill, qty: `${nf(result.withSpill)} m²` },
      ...(result.cost > 0 ? [{ desc: t.cost, qty: kr(result.cost) }] : []),
    ],
    filename: 'ytor-kvadratmeter.pdf',
    tool: 'kvadratmeter-kalkylator',
  });

  const seedRows = [
    { desc: t.soArea, qty: Math.round(result.withSpill * 100) / 100 },
    { desc: t.soLabour, qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">{t.title}</h2>
        <p className="lm-tool-sub">{t.sub}</p>
      </div>

      <div className="lm-tool-rows">
        <div className="lm-tool-row lm-tool-row-head">
          <span>{t.length}</span>
          <span>{t.width}</span>
          <span>{t.area}</span>
          <span aria-hidden="true" />
        </div>
        {rows.map((row, i) => (
          <div className="lm-tool-row" key={i}>
            <input type="number" min="0" inputMode="decimal" value={row.l} placeholder="0" onChange={(e) => setRow(i, { l: e.currentTarget.value })} />
            <input type="number" min="0" inputMode="decimal" value={row.w} placeholder="0" onChange={(e) => setRow(i, { w: e.currentTarget.value })} />
            <input value={`${nf(num(row.l) * num(row.w))} m²`} readOnly tabIndex={-1} />
            <button type="button" className="lm-tool-row-remove" aria-label={t.removeLabel} onClick={() => removeRow(i)}>×</button>
          </div>
        ))}
      </div>

      <div className="lm-tool-actions" style={{ marginTop: 14 }}>
        <button type="button" className="lm-tool-secondary" onClick={addRow}>{t.addRow}</button>
        <label className="lm-tool-field" style={{ maxWidth: 160 }}>
          <span>{t.spill}</span>
          <input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field" style={{ maxWidth: 180 }}>
          <span>{t.price}</span>
          <input type="number" min="0" inputMode="decimal" value={price} placeholder={t.pricePh} onChange={(e) => setPrice(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight">
          <span>{t.total}</span>
          <strong>{nf(result.base)} m²</strong>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>{t.withSpill}</span>
          <strong>{nf(result.withSpill)} m²</strong>
        </div>
        {result.cost > 0 ? (
          <div className="lm-result-row">
            <span>{t.cost}</span>
            <span>{kr(result.cost)}</span>
          </div>
        ) : null}
        <div className="lm-tool-actions" style={{ marginTop: 16 }}>
          <a className="lm-tool-button" href={result.base > 0 ? offertUrl : undefined} aria-disabled={result.base <= 0} onClick={() => gaEvent('offert_from_calculator', { tool: 'kvadratmeter-kalkylator' })}>
            {t.offert}
          </a>
          <a className="lm-tool-secondary" href={result.base > 0 ? fakturaUrl : undefined} aria-disabled={result.base <= 0} onClick={() => gaEvent('faktura_from_calculator', { tool: 'kvadratmeter-kalkylator' })}>
            {t.faktura}
          </a>
          <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={result.base <= 0}>
            {t.excel}
          </button>
          <button type="button" className="lm-tool-secondary" onClick={exportPdf} disabled={result.base <= 0}>
            {t.pdf}
          </button>
        </div>
      </div>
    </div>
  );
}
