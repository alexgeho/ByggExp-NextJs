import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import type { CalcLocale } from '../../lib/locale';
import { downloadMaterialPdf } from '../../lib/materialPdf';
import { fakturaHref, offertHref } from '../../lib/offert';

// Roof-truss calculator: number of trusses from roof length and spacing.
// Bilingual: sv default, en for /en/verktyg; nb falls back to sv text.
function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

export default function TakstolarKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const nf = (v: number) => v.toLocaleString(en ? 'en-GB' : 'sv-SE');
  const t = en
    ? {
        title: 'Roof trusses – number from c/c',
        sub: 'Enter the roof length and the spacing (c/c) and we work out the number of roof trusses.',
        length: 'Roof length (m)', cc: 'Spacing c/c (mm)',
        rCount: 'Number of trusses', pcs: 'pcs',
        fine: 'An estimate (count = length ÷ c/c + 1). A common c/c is 1200 mm, but follow the engineer’s dimensioning for your truss and snow load.',
        offert: 'Create quote from this', faktura: 'Create invoice', excel: 'Export Excel', pdf: 'Export PDF',
        csvTitle: 'Roof trusses', post: 'Item', qty: 'Quantity',
        mCount: (cc: string) => `Number of trusses (c/c ${cc})`,
        pdfTitle: 'Roof trusses', pdfNote: 'Count, not dimensioning. Dimensioning is done by an engineer per snow and wind load.',
        soTrusses: (cc: string) => `Roof trusses (c/c ${cc})`, soLabour: 'Truss erection labour',
      }
    : {
        title: 'Takstolar – antal utifrån c/c',
        sub: 'Fyll i takets längd och centrumavstånd (c/c) så räknar vi ut antal takstolar.',
        length: 'Takets längd (m)', cc: 'Centrumavstånd c/c (mm)',
        rCount: 'Antal takstolar', pcs: 'st',
        fine: 'En uppskattning (antal = längd ÷ c/c + 1). Vanligt c/c är 1200 mm, men följ konstruktörens dimensionering för din takstol och snölast.',
        offert: 'Skapa offert av det här', faktura: 'Skapa faktura', excel: 'Exportera Excel', pdf: 'Exportera PDF',
        csvTitle: 'Takstolar', post: 'Post', qty: 'Mängd',
        mCount: (cc: string) => `Antal takstolar (c/c ${cc})`,
        pdfTitle: 'Takstolar', pdfNote: 'Antal, inte dimensionering. Dimensionering görs av konstruktör enligt snö- och vindlast.',
        soTrusses: (cc: string) => `Takstolar (c/c ${cc})`, soLabour: 'Arbete resning takstolar',
      };

  const [length, setLength] = useState('');
  const [cc, setCc] = useState('1200');

  const r = useMemo(() => {
    const l = num(length);
    const c = num(cc);
    const count = l > 0 && c > 0 ? Math.ceil((l * 1000) / c) + 1 : 0;
    return { count };
  }, [length, cc]);

  const seedRows = [
    { desc: t.soTrusses(cc), qty: r.count },
    { desc: t.soLabour, qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);
  const disabled = r.count <= 0;

  const exportCsv = () => {
    gaEvent('export_excel', { tool: 'takstolar-kalkylator' });
    downloadCsvRows(
      [
        [t.csvTitle, 'byggexp.se'],
        [],
        [t.post, t.qty],
        [t.mCount(cc), `${nf(r.count)} ${t.pcs}`],
      ],
      'takstolar.csv',
    );
  };

  const exportPdf = () => void downloadMaterialPdf({
    title: t.pdfTitle,
    rows: [{ desc: t.mCount(cc), qty: `${nf(r.count)} ${t.pcs}` }],
    filename: 'takstolar.pdf',
    tool: 'takstolar-kalkylator',
    note: t.pdfNote,
  });

  return (
    <div className="lm-tool lm-tool--split">
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>{t.length}</span><input type="number" min="0" inputMode="decimal" value={length} placeholder={en ? 'e.g. 10' : 't.ex. 10'} onChange={(e) => setLength(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.cc}</span><input type="number" min="0" inputMode="numeric" value={cc} onChange={(e) => setCc(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>{t.rCount}</span><strong>{nf(r.count)} {t.pcs}</strong></div>
        <p className="lm-result-fine">{t.fine}</p>
      </div>
      <div className="lm-tool-actions" style={{ marginTop: 16 }}>
        <a className="lm-tool-button" href={disabled ? undefined : offertUrl} aria-disabled={disabled} onClick={() => gaEvent('offert_from_calculator', { tool: 'takstolar-kalkylator' })}>
          {t.offert}
        </a>
        <a className="lm-tool-secondary" href={disabled ? undefined : fakturaUrl} aria-disabled={disabled} onClick={() => gaEvent('faktura_from_calculator', { tool: 'takstolar-kalkylator' })}>
          {t.faktura}
        </a>
        <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={disabled}>
          {t.excel}
        </button>
        <button type="button" className="lm-tool-secondary" onClick={exportPdf} disabled={disabled}>
          {t.pdf}
        </button>
      </div>
    </div>
  );
}
