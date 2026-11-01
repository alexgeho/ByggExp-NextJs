import { useMemo } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import type { CalcLocale } from '../../lib/locale';
import { downloadMaterialPdf } from '../../lib/materialPdf';
import { fakturaHref, offertEnabled, offertHref } from '../../lib/offert';
import { useUrlParam, useUrlScope } from '../../lib/useUrlState';
import CopyLinkButton from './CopyLinkButton';

// Fence calculator: number of posts and sections from length and post spacing.
// sv default, en for /en/verktyg, nb for byggexp.no.
function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

export default function StaketKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const nb = locale === 'nb';
  const nf = (v: number) => v.toLocaleString(en ? 'en-GB' : nb ? 'nb-NO' : 'sv-SE');
  const eg = en ? 'e.g.' : nb ? 'f.eks.' : 't.ex.';
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
    : nb
    ? {
        title: 'Gjerdekalkulator – stolper og seksjoner',
        sub: 'Fyll inn gjerdets lengde og avstanden mellom stolpene (c/c), så regner vi ut antall stolper og seksjoner.',
        length: 'Lengde (m)', cc: 'Stolpeavstand c/c (m)',
        rPosts: 'Antall stolper', rSections: 'Antall seksjoner', pcs: 'stk',
        fine: 'Et overslag (antall stolper = seksjoner + 1). Regn med port separat, og tilpass c/c etter gjerdetype og vindlast.',
        offert: 'Lag tilbud av dette', faktura: 'Lag faktura', excel: 'Eksporter Excel', pdf: 'Eksporter PDF',
        csvTitle: 'Gjerdekalkulator', post: 'Post', qty: 'Mengde',
        mPosts: 'Antall stolper', mSections: 'Antall seksjoner', pdfTitle: 'Gjerde – materialliste',
        soPosts: 'Stolper', soSections: 'Seksjoner', soLabour: 'Arbeid montering av gjerde',
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

  const u = useUrlScope();
  const [length, setLength] = useUrlParam(u, 'l', '');
  const [cc, setCc] = useUrlParam(u, 'cc', '2');

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
        [t.csvTitle, nb ? 'byggexp.no' : 'byggexp.se'],
        [],
        [t.post, t.qty],
        [t.mPosts, `${nf(r.posts)} ${t.pcs}`],
        [t.mSections, `${nf(r.sections)} ${t.pcs}`],
      ],
      'staket-materiallista.csv',
    );
  };

  const exportPdf = () => void downloadMaterialPdf({
    locale,
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
        <label className="lm-tool-field"><span>{t.length}</span><input type="number" min="0" inputMode="decimal" value={length} placeholder={`${eg} 20`} onChange={(e) => setLength(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.cc}</span><input type="number" min="0" inputMode="decimal" value={cc} onChange={(e) => setCc(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>{t.rPosts}</span><strong>{nf(r.posts)} {t.pcs}<CopyLinkButton scope={u} tool="staket-kalkylator" en={en} nb={nb} /></strong></div>
        <div className="lm-result-row lm-result-total"><span>{t.rSections}</span><strong>{nf(r.sections)} {t.pcs}</strong></div>
        <p className="lm-result-fine">{t.fine}</p>
      </div>
      <div className="lm-tool-actions" style={{ marginTop: 16 }}>
        {offertEnabled(locale) ? (<a className="lm-tool-button" href={disabled ? undefined : offertUrl} aria-disabled={disabled} onClick={() => gaEvent('offert_from_calculator', { tool: 'staket-kalkylator' })}>
          {t.offert}
        </a>) : null}
        {offertEnabled(locale) ? (<a className="lm-tool-secondary" href={disabled ? undefined : fakturaUrl} aria-disabled={disabled} onClick={() => gaEvent('faktura_from_calculator', { tool: 'staket-kalkylator' })}>
          {t.faktura}
        </a>) : null}
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
