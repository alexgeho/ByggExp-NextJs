import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import type { CalcLocale } from '../../lib/locale';
import { downloadMaterialPdf } from '../../lib/materialPdf';
import { fakturaHref, offertHref } from '../../lib/offert';

// Fence calculator: number of posts and sections from length and post spacing.
// Bilingual: sv default, en for /en/verktyg; nb falls back to sv text.
function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

export default function StaketKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const nf = (v: number) => v.toLocaleString(en ? 'en-GB' : 'sv-SE');
  const t = en
    ? {
        title: 'Fence calculator – posts and sections',
        sub: 'Enter the fence length and the spacing between posts (c/c) and we work out the number of posts and sections.',
        length: 'Length (m)', cc: 'Post spacing c/c (m)',
        rPosts: 'Number of posts', rSections: 'Number of sections', pcs: 'pcs',
        fine: 'An estimate (number of posts = sections + 1). Count a gate separately, and adapt the c/c to the fence type and wind load.',
        offert: 'Create quote from this', faktura: 'Create invoice', excel: 'Export Excel', pdf: 'Export PDF',
        csvTitle: 'Fence calculator', post: 'Item', qty: 'Quantity',
        mPosts: 'Number of posts', mSections: 'Number of sections', pdfTitle: 'Fence – material list',
        soPosts: 'Posts', soSections: 'Sections', soLabour: 'Fence assembly labour',
      }
    : {
        title: 'Staketkalkylator – stolpar och sektioner',
        sub: 'Fyll i staketets längd och avståndet mellan stolparna (c/c) så räknar vi ut antal stolpar och sektioner.',
        length: 'Längd (m)', cc: 'Stolpavstånd c/c (m)',
        rPosts: 'Antal stolpar', rSections: 'Antal sektioner', pcs: 'st',
        fine: 'En uppskattning (antal stolpar = sektioner + 1). Räkna med grind separat, och anpassa c/c efter staketets typ och vindlast.',
        offert: 'Skapa offert av det här', faktura: 'Skapa faktura', excel: 'Exportera Excel', pdf: 'Exportera PDF',
        csvTitle: 'Staketkalkylator', post: 'Post', qty: 'Mängd',
        mPosts: 'Antal stolpar', mSections: 'Antal sektioner', pdfTitle: 'Staket – materiallista',
        soPosts: 'Stolpar', soSections: 'Sektioner', soLabour: 'Arbete staketmontering',
      };

  const [length, setLength] = useState('');
  const [cc, setCc] = useState('2');

  const r = useMemo(() => {
    const l = num(length);
    const c = num(cc);
    const sections = l > 0 && c > 0 ? Math.ceil(l / c) : 0;
    const posts = sections > 0 ? sections + 1 : 0;
    return { sections, posts };
  }, [length, cc]);

  const seedRows = [
    { desc: t.soPosts, qty: r.posts },
    { desc: t.soSections, qty: r.sections },
    { desc: t.soLabour, qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);
  const disabled = r.posts <= 0;

  const exportCsv = () => {
    gaEvent('export_excel', { tool: 'staket-kalkylator' });
    downloadCsvRows(
      [
        [t.csvTitle, 'byggexp.se'],
        [],
        [t.post, t.qty],
        [t.mPosts, `${nf(r.posts)} ${t.pcs}`],
        [t.mSections, `${nf(r.sections)} ${t.pcs}`],
      ],
      'staket-materiallista.csv',
    );
  };

  const exportPdf = () => void downloadMaterialPdf({
    title: t.pdfTitle,
    rows: [
      { desc: t.mPosts, qty: `${nf(r.posts)} ${t.pcs}` },
      { desc: t.mSections, qty: `${nf(r.sections)} ${t.pcs}` },
    ],
    filename: 'staket-materiallista.pdf',
    tool: 'staket-kalkylator',
  });

  return (
    <div className="lm-tool lm-tool--split">
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>{t.length}</span><input type="number" min="0" inputMode="decimal" value={length} placeholder={en ? 'e.g. 20' : 't.ex. 20'} onChange={(e) => setLength(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.cc}</span><input type="number" min="0" inputMode="decimal" value={cc} onChange={(e) => setCc(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>{t.rPosts}</span><strong>{nf(r.posts)} {t.pcs}</strong></div>
        <div className="lm-result-row lm-result-total"><span>{t.rSections}</span><strong>{nf(r.sections)} {t.pcs}</strong></div>
        <p className="lm-result-fine">{t.fine}</p>
      </div>
      <div className="lm-tool-actions" style={{ marginTop: 16 }}>
        <a className="lm-tool-button" href={disabled ? undefined : offertUrl} aria-disabled={disabled} onClick={() => gaEvent('offert_from_calculator', { tool: 'staket-kalkylator' })}>
          {t.offert}
        </a>
        <a className="lm-tool-secondary" href={disabled ? undefined : fakturaUrl} aria-disabled={disabled} onClick={() => gaEvent('faktura_from_calculator', { tool: 'staket-kalkylator' })}>
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
