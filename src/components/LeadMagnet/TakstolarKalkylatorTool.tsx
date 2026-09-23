import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import type { CalcLocale } from '../../lib/locale';
import { downloadMaterialPdf } from '../../lib/materialPdf';
import { fakturaHref, offertHref } from '../../lib/offert';

// Roof-truss calculator: number of trusses from roof length and spacing, plus
// optional truss geometry from span and pitch (ridge height, top-chord length,
// roof area) with a schematic drawing. Geometry only — not dimensioning.
// Bilingual: sv default, en for /en/verktyg; nb falls back to sv text.
function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

// Schematic W (fackverk) truss scaled to the entered span and pitch, with the
// span, ridge height and pitch labelled. Illustration only.
function TrussDrawing({
  b, deg, ov, height, caption, f2, unit,
}: { b: number; deg: number; ov: number; height: number; caption: string; f2: (v: number) => string; unit: string }) {
  const W = 640;
  const pad = 40;
  const total = b + 2 * ov;
  const scale = (W - pad * 2) / total;
  const h = Math.min(height * scale, 260);
  const sx = h / (height * scale || 1); // squash very steep roofs to keep the svg compact
  const H = h + 90;
  const x0 = pad + ov * scale; // wall line left
  const x1 = x0 + b * scale; // wall line right
  const xm = (x0 + x1) / 2;
  const yb = H - 50; // bottom chord
  const yt = yb - h; // ridge
  const drop = ov * scale * Math.tan((deg * Math.PI) / 180) * sx;
  // W (Fink) webs: bottom-chord nodes at the third points, top-chord nodes at
  // the middle of each slope.
  const q1 = x0 + (x1 - x0) / 3;
  const q2 = x0 + (2 * (x1 - x0)) / 3;
  const onTop = (x: number) => yb - ((x <= xm ? x - x0 : x1 - x) / (xm - x0)) * h;
  return (
    <figure className="lm-truss">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={caption}>
        <g stroke="#15324f" strokeWidth="3" fill="none" strokeLinecap="round">
          <line x1={x0} y1={yb} x2={x1} y2={yb} />
          <line x1={x0 - ov * scale} y1={yb + drop} x2={xm} y2={yt} />
          <line x1={x1 + ov * scale} y1={yb + drop} x2={xm} y2={yt} />
        </g>
        <g stroke="#2394ff" strokeWidth="2" fill="none">
          <line x1={q1} y1={yb} x2={(x0 + xm) / 2} y2={onTop((x0 + xm) / 2)} />
          <line x1={q1} y1={yb} x2={xm} y2={yt} />
          <line x1={q2} y1={yb} x2={xm} y2={yt} />
          <line x1={q2} y1={yb} x2={(xm + x1) / 2} y2={onTop((xm + x1) / 2)} />
        </g>
        <g fill="#5b7591" fontSize="13" fontFamily="system-ui, sans-serif" textAnchor="middle">
          <line x1={x0} y1={yb + 26} x2={x1} y2={yb + 26} stroke="#94a8bc" />
          <text x={xm} y={yb + 44}>{`${f2(b)} ${unit}`}</text>
          <line x1={xm} y1={yt} x2={xm} y2={yb} stroke="#94a8bc" strokeDasharray="4 4" />
          <text x={xm + 8} y={yb - 10} textAnchor="start">{`${f2(height)} ${unit}`}</text>
          <text x={x0 + 34} y={yb - 8} textAnchor="start">{`${f2(deg)}°`}</text>
        </g>
      </svg>
      <figcaption>{caption}</figcaption>
    </figure>
  );
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
        geoHead: 'Truss geometry (optional)', span: 'Span / building width (m)', pitch: 'Roof pitch (°)', overhang: 'Eave overhang (mm)',
        rHeight: 'Ridge height above bottom chord', rTop: 'Top chord length per side (incl. overhang)', rArea: 'Roof area, both slopes',
        geoFine: 'Pure geometry for a symmetric gable truss, measured to the chord centre lines. Timber sizes, webs and fixings come from the truss manufacturer’s engineer.',
        drawCap: 'Schematic W truss – not a construction drawing', m: 'm', m2: 'm²',
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
        geoHead: 'Takstolens mått (valfritt)', span: 'Spännvidd / husbredd (m)', pitch: 'Taklutning (°)', overhang: 'Takfotsutsprång (mm)',
        rHeight: 'Nockhöjd över underram', rTop: 'Överramens längd per sida (inkl. utsprång)', rArea: 'Takyta, båda takfallen',
        geoFine: 'Ren geometri för en symmetrisk sadeltakstol, mätt till ramarnas centrumlinjer. Virkesdimensioner, diagonaler och infästning bestäms av takstolstillverkarens konstruktör.',
        drawCap: 'Principskiss W-takstol – inte en konstruktionsritning', m: 'm', m2: 'm²',
      };

  const [length, setLength] = useState('');
  const [cc, setCc] = useState('1200');
  const [span, setSpan] = useState('');
  const [pitch, setPitch] = useState('');
  const [overhang, setOverhang] = useState('500');

  const r = useMemo(() => {
    const l = num(length);
    const c = num(cc);
    const count = l > 0 && c > 0 ? Math.ceil((l * 1000) / c) + 1 : 0;
    return { count };
  }, [length, cc]);

  // Symmetric gable truss: half-span b/2, pitch α. Ridge height = b/2·tan α;
  // top chord per side = (b/2 + overhang) / cos α; area = 2 · top chord · length.
  const geo = useMemo(() => {
    const b = num(span);
    const deg = num(pitch);
    if (b <= 0 || deg <= 0 || deg >= 80) return null;
    const a = (deg * Math.PI) / 180;
    const ov = num(overhang) / 1000;
    const height = (b / 2) * Math.tan(a);
    const top = (b / 2 + ov) / Math.cos(a);
    const l = num(length);
    const area = l > 0 ? 2 * top * (l + 2 * ov) : 0;
    return { b, deg, ov, height, top, area };
  }, [span, pitch, overhang, length]);
  const f2 = (v: number) => v.toLocaleString(en ? 'en-GB' : 'sv-SE', { maximumFractionDigits: 2 });

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
        ...(geo
          ? [
              [t.span, `${f2(geo.b)} ${t.m}`],
              [t.pitch, `${f2(geo.deg)}°`],
              [t.rHeight, `${f2(geo.height)} ${t.m}`],
              [t.rTop, `${f2(geo.top)} ${t.m}`],
              ...(geo.area ? [[t.rArea, `${f2(geo.area)} ${t.m2}`]] : []),
            ]
          : []),
      ],
      'takstolar.csv',
    );
  };

  const exportPdf = () => void downloadMaterialPdf({
    title: t.pdfTitle,
    rows: [
      { desc: t.mCount(cc), qty: `${nf(r.count)} ${t.pcs}` },
      ...(geo
        ? [
            { desc: `${t.span} / ${t.pitch}`, qty: `${f2(geo.b)} ${t.m} / ${f2(geo.deg)}°` },
            { desc: t.rHeight, qty: `${f2(geo.height)} ${t.m}` },
            { desc: t.rTop, qty: `${f2(geo.top)} ${t.m}` },
            ...(geo.area ? [{ desc: t.rArea, qty: `${f2(geo.area)} ${t.m2}` }] : []),
          ]
        : []),
    ],
    filename: 'takstolar.pdf',
    tool: 'takstolar-kalkylator',
    note: t.pdfNote,
  });

  return (
    <div className="lm-tool lm-tool--split lm-tool--truss">
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>{t.length}</span><input type="number" min="0" inputMode="decimal" value={length} placeholder={en ? 'e.g. 10' : 't.ex. 10'} onChange={(e) => setLength(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.cc}</span><input type="number" min="0" inputMode="numeric" value={cc} onChange={(e) => setCc(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-tool-grid">
        <p className="lm-tool-subhead lm-tool-field-wide">{t.geoHead}</p>
        <label className="lm-tool-field"><span>{t.span}</span><input type="number" min="0" inputMode="decimal" value={span} placeholder={en ? 'e.g. 8' : 't.ex. 8'} onChange={(e) => setSpan(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.pitch}</span><input type="number" min="0" max="75" inputMode="decimal" value={pitch} placeholder={en ? 'e.g. 27' : 't.ex. 27'} onChange={(e) => setPitch(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.overhang}</span><input type="number" min="0" inputMode="numeric" value={overhang} onChange={(e) => setOverhang(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>{t.rCount}</span><strong>{nf(r.count)} {t.pcs}</strong></div>
        {geo ? (
          <>
            <div className="lm-result-row"><span>{t.rHeight}</span><strong>{f2(geo.height)} {t.m}</strong></div>
            <div className="lm-result-row"><span>{t.rTop}</span><strong>{f2(geo.top)} {t.m}</strong></div>
            {geo.area ? <div className="lm-result-row"><span>{t.rArea}</span><strong>{f2(geo.area)} {t.m2}</strong></div> : null}
          </>
        ) : null}
        <p className="lm-result-fine">{t.fine}</p>
        {geo ? <p className="lm-result-fine">{t.geoFine}</p> : null}
      </div>
      {geo ? <TrussDrawing b={geo.b} deg={geo.deg} ov={geo.ov} height={geo.height} caption={t.drawCap} f2={f2} unit={t.m} /> : null}
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
