import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import type { CalcLocale } from '../../lib/locale';
import { downloadMaterialPdf } from '../../lib/materialPdf';
import { fakturaHref, offertHref } from '../../lib/offert';

// Underfloor-heating calculator: pipe/loop length from area and pipe spacing
// (c/c), plus number of loops given a max loop length. Bilingual: sv default,
// en for /en/verktyg; nb falls back to sv text.
function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

export default function GolvvarmeKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const nf = (v: number) => v.toLocaleString(en ? 'en-GB' : 'sv-SE', { maximumFractionDigits: 0 });
  const t = en
    ? {
        title: 'Underfloor heating – loop length and number of loops',
        sub: 'Enter the area and the pipe spacing (c/c) and we work out the approximate loop length and number of loops. Add supply/return separately.',
        area: 'Area (m²)', cc: 'Pipe spacing c/c (mm)', maxLoop: 'Max loop length (m)',
        rTotal: 'Approx. loop length', rLoops: 'Number of loops',
        m: 'm', pcs: 'pcs',
        fine: 'An estimate (loop length ≈ area ÷ c/c). Allow extra pipe for supply and return to the manifold, and stay within the max loop length per loop.',
        offert: 'Create quote from this', faktura: 'Create invoice', excel: 'Export Excel', pdf: 'Export PDF',
        csvTitle: 'Underfloor heating', post: 'Item', qty: 'Quantity',
        mTotal: 'Approx. loop length', mLoops: 'Number of loops',
        soPipe: (cc: string) => `Underfloor pipe c/c ${cc} (m)`, soLoops: 'Loops / manifold ports', soLabour: 'Installation labour',
      }
    : {
        title: 'Golvvärme – slinglängd och antal slingor',
        sub: 'Fyll i ytan och centrumavståndet (c/c) mellan rören så räknar vi ut ungefärlig slinglängd och antal slingor. Lägg till tillopp/retur separat.',
        area: 'Yta (m²)', cc: 'Centrumavstånd c/c (mm)', maxLoop: 'Max slinglängd (m)',
        rTotal: 'Ungefärlig slinglängd', rLoops: 'Antal slingor',
        m: 'm', pcs: 'st',
        fine: 'En uppskattning (slinglängd ≈ yta ÷ c/c). Räkna med extra rör för tillopp och retur till fördelaren, och håll dig inom max slinglängd per slinga.',
        offert: 'Skapa offert av det här', faktura: 'Skapa faktura', excel: 'Exportera Excel', pdf: 'Exportera PDF',
        csvTitle: 'Golvvärme', post: 'Post', qty: 'Mängd',
        mTotal: 'Ungefärlig slinglängd', mLoops: 'Antal slingor',
        soPipe: (cc: string) => `Golvvärmerör c/c ${cc} (m)`, soLoops: 'Slingor / fördelaruttag', soLabour: 'Arbete installation',
      };

  const [area, setArea] = useState('');
  const [cc, setCc] = useState('200');
  const [maxLoop, setMaxLoop] = useState('100');

  const r = useMemo(() => {
    const c = num(cc);
    const total = c > 0 ? (num(area) * 1000) / c : 0;
    const m = num(maxLoop);
    return { total, loops: m > 0 && total > 0 ? Math.ceil(total / m) : 0 };
  }, [area, cc, maxLoop]);

  const seedRows = [
    { desc: t.soPipe(cc), qty: Math.round(r.total) },
    { desc: t.soLoops, qty: r.loops },
    { desc: t.soLabour, qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);
  const disabled = r.total <= 0;

  const exportCsv = () => {
    gaEvent('export_excel', { tool: 'golvvarme-kalkylator' });
    downloadCsvRows(
      [
        [t.csvTitle, 'byggexp.se'],
        [],
        [t.post, t.qty],
        [t.mTotal, `${nf(r.total)} ${t.m}`],
        [t.mLoops, `${nf(r.loops)} ${t.pcs}`],
      ],
      'golvvarme.csv',
    );
  };

  const exportPdf = () => void downloadMaterialPdf({
    title: t.csvTitle,
    rows: [
      { desc: t.mTotal, qty: `${nf(r.total)} ${t.m}` },
      { desc: t.mLoops, qty: `${nf(r.loops)} ${t.pcs}` },
    ],
    filename: 'golvvarme.pdf',
    tool: 'golvvarme-kalkylator',
  });

  return (
    <div className="lm-tool lm-tool--split">
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>{t.area}</span><input type="number" min="0" inputMode="decimal" value={area} placeholder={en ? 'e.g. 20' : 't.ex. 20'} onChange={(e) => setArea(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.cc}</span><input type="number" min="0" inputMode="numeric" value={cc} onChange={(e) => setCc(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.maxLoop}</span><input type="number" min="0" inputMode="numeric" value={maxLoop} onChange={(e) => setMaxLoop(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>{t.rTotal}</span><strong>{nf(r.total)} {t.m}</strong></div>
        <div className="lm-result-row lm-result-total"><span>{t.rLoops}</span><strong>{nf(r.loops)} {t.pcs}</strong></div>
        <p className="lm-result-fine">{t.fine}</p>
      </div>
      <div className="lm-tool-actions" style={{ marginTop: 16 }}>
        <a className="lm-tool-button" href={disabled ? undefined : offertUrl} aria-disabled={disabled} onClick={() => gaEvent('offert_from_calculator', { tool: 'golvvarme-kalkylator' })}>
          {t.offert}
        </a>
        <a className="lm-tool-secondary" href={disabled ? undefined : fakturaUrl} aria-disabled={disabled} onClick={() => gaEvent('faktura_from_calculator', { tool: 'golvvarme-kalkylator' })}>
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
