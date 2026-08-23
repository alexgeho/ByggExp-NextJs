import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import type { CalcLocale } from '../../lib/locale';
import { downloadMaterialPdf } from '../../lib/materialPdf';
import { fakturaHref, offertHref } from '../../lib/offert';

// Gravel/soil calculator: volume from area × depth, plus weight in tonnes.
// Bilingual: sv default, en for /en/verktyg; nb falls back to sv text.
function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

export default function GrusKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const nf = (v: number, d = 1) => v.toLocaleString(en ? 'en-GB' : 'sv-SE', { maximumFractionDigits: d });
  const t = en
    ? {
        title: 'Gravel & crushed stone – volume and tonnes',
        sub: 'Enter the area and depth and we work out the volume in cubic metres and the weight in tonnes. Works for gravel, crushed stone, topsoil and sand – adjust the density to the material.',
        length: 'Length (m)', width: 'Width (m)', depth: 'Depth (cm)', density: 'Density (t/m³)', packning: 'Compaction (%)',
        rPacked: 'Volume (finished, compacted)', rOrder: 'To order (loose, incl. compaction)', rTons: 'Weight (approx.)',
        tons: 'tonnes',
        fine: 'Gravel and sub-base are delivered loose and compact by ~15–25%, so you order more than the finished (compacted) volume. Density varies: gravel/crushed stone about 1.5–1.8 t/m³, topsoil about 1.2–1.5. Check with the supplier.',
        offert: 'Create quote from this', faktura: 'Create invoice', excel: 'Export Excel', pdf: 'Export PDF',
        csvTitle: 'Gravel & crushed stone', post: 'Item', qty: 'Quantity',
        mPacked: 'Volume (finished/compacted)', mOrder: 'To order (loose, incl. compaction)', mTons: 'Weight (approx.)',
        pdfTitle: 'Gravel & crushed stone',
        soGravel: 'Gravel/crushed stone (tonnes)', soLabour: 'Labour/transport',
      }
    : {
        title: 'Grus & makadam – volym och ton',
        sub: 'Fyll i yta och djup så räknar vi ut volymen i kubikmeter och vikten i ton. Fungerar för grus, makadam, matjord och sand – justera densiteten efter materialet.',
        length: 'Längd (m)', width: 'Bredd (m)', depth: 'Djup (cm)', density: 'Densitet (ton/m³)', packning: 'Packning/komprimering (%)',
        rPacked: 'Volym (färdig, packad)', rOrder: 'Att beställa (löst, inkl. packning)', rTons: 'Vikt (ca)',
        tons: 'ton',
        fine: 'Grus och bärlager levereras löst och packas ihop ~15–25 % – därför beställer du mer än den färdiga (packade) volymen. Densiteten varierar: grus/makadam ca 1,5–1,8 ton/m³, matjord ca 1,2–1,5. Kontrollera med leverantören.',
        offert: 'Skapa offert av det här', faktura: 'Skapa faktura', excel: 'Exportera Excel', pdf: 'Exportera PDF',
        csvTitle: 'Grus & makadam', post: 'Post', qty: 'Mängd',
        mPacked: 'Volym (färdig/packad)', mOrder: 'Att beställa (löst, inkl. packning)', mTons: 'Vikt (ca)',
        pdfTitle: 'Grus & makadam',
        soGravel: 'Grus/makadam (ton)', soLabour: 'Arbete/transport',
      };

  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [depth, setDepth] = useState('10');
  const [density, setDensity] = useState('1.6');
  const [packning, setPackning] = useState('20'); // % komprimeringspåslag

  const r = useMemo(() => {
    const packed = num(length) * num(width) * (num(depth) / 100);
    const order = packed * (1 + num(packning) / 100);
    return { packed, order, tons: order * num(density) };
  }, [length, width, depth, density, packning]);

  const seedRows = [
    { desc: t.soGravel, qty: Math.round(r.tons * 10) / 10 },
    { desc: t.soLabour, qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);
  const disabled = r.order <= 0;

  const exportCsv = () => {
    gaEvent('export_excel', { tool: 'grus-kalkylator' });
    downloadCsvRows(
      [
        [t.csvTitle, 'byggexp.se'],
        [],
        [t.post, t.qty],
        [t.mPacked, `${nf(r.packed, 2)} m³`],
        [t.mOrder, `${nf(r.order, 2)} m³`],
        [t.mTons, `${nf(r.tons)} ${t.tons}`],
      ],
      'grus-makadam.csv',
    );
  };

  const exportPdf = () => void downloadMaterialPdf({
    title: t.pdfTitle,
    rows: [
      { desc: t.rPacked, qty: `${nf(r.packed, 2)} m³` },
      { desc: t.rOrder, qty: `${nf(r.order, 2)} m³` },
      { desc: t.mTons, qty: `${nf(r.tons)} ${t.tons}` },
    ],
    filename: 'grus-makadam.pdf',
    tool: 'grus-kalkylator',
  });

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">{t.title}</h2>
        <p className="lm-tool-sub">{t.sub}</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>{t.length}</span><input type="number" min="0" inputMode="decimal" value={length} placeholder={en ? 'e.g. 10' : 't.ex. 10'} onChange={(e) => setLength(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.width}</span><input type="number" min="0" inputMode="decimal" value={width} placeholder={en ? 'e.g. 3' : 't.ex. 3'} onChange={(e) => setWidth(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.depth}</span><input type="number" min="0" inputMode="decimal" value={depth} onChange={(e) => setDepth(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.density}</span><input type="number" min="0" inputMode="decimal" value={density} onChange={(e) => setDensity(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.packning}</span><input type="number" min="0" inputMode="decimal" value={packning} onChange={(e) => setPackning(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row"><span>{t.rPacked}</span><span>{nf(r.packed, 2)} m³</span></div>
        <div className="lm-result-row lm-result-highlight"><span>{t.rOrder}</span><strong>{nf(r.order, 2)} m³</strong></div>
        <div className="lm-result-row lm-result-total"><span>{t.rTons}</span><strong>{nf(r.tons)} {t.tons}</strong></div>
        <p className="lm-result-fine">{t.fine}</p>
      </div>
      <div className="lm-tool-actions" style={{ marginTop: 16 }}>
        <a className="lm-tool-button" href={disabled ? undefined : offertUrl} aria-disabled={disabled} onClick={() => gaEvent('offert_from_calculator', { tool: 'grus-kalkylator' })}>
          {t.offert}
        </a>
        <a className="lm-tool-secondary" href={disabled ? undefined : fakturaUrl} aria-disabled={disabled} onClick={() => gaEvent('faktura_from_calculator', { tool: 'grus-kalkylator' })}>
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
