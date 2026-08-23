import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import type { CalcLocale } from '../../lib/locale';
import { downloadMaterialPdf } from '../../lib/materialPdf';
import { fakturaHref, offertHref } from '../../lib/offert';

// Professional paint calculator. Litres = (area − openings) × coats ÷ coverage,
// plus waste. Coverage (m²/litre) is preset per surface type (interior wall/
// ceiling, wood façade, rendered façade) but editable, and door/window openings
// can be deducted. Also suggests a practical can size to buy. Bilingual: sv
// default, en for /en/verktyg; nb falls back to sv text.

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

type Surface = 'vagg' | 'tak' | 'fasadtra' | 'fasadputs';

// Default coverage per coat (m²/litre), typical Swedish figures.
const COVERAGE: Record<Surface, number> = { vagg: 8, tak: 8, fasadtra: 5, fasadputs: 4 };

export default function FargKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const nf = (v: number, d = 0) => v.toLocaleString(en ? 'en-GB' : 'sv-SE', { maximumFractionDigits: d });
  const t = en
    ? {
        title: 'Paint calculator – how much paint?',
        sub: 'Choose the surface, enter the square metres and number of coats and we work out how many litres of paint you need – with a deduction for windows and doors. Coverage is preset by paint type but can be adjusted to the can.',
        surfaceL: 'Surface / paint type', sVagg: 'Interior wall', sTak: 'Interior ceiling', sFasadtra: 'Façade – wood', sFasadputs: 'Façade – render',
        area: 'Area to paint (m²)', openings: 'Deduct windows/doors (m²)', coats: 'Number of coats',
        coverageL: (d: string) => `Coverage m²/l (default ${d})`, spill: 'Waste (%)',
        rArea: 'Total area to paint', rLiters: 'Paint needed', rBuy: 'Buy at least (rounded)',
        litres: 'litres',
        fine: 'An estimate. Consumption is affected by the substrate – absorbent, rough or dark-to-light surfaces use more and may need an extra coat or primer. Coverage is on the can.',
        offert: 'Create quote from this', faktura: 'Create invoice', excel: 'Export Excel', pdf: 'Export PDF',
        csvTitle: 'Paint calculator', csvSurface: 'Surface / paint type', csvCoats: 'Coats', csvCoverage: 'Coverage', post: 'Item', qty: 'Quantity',
        mArea: 'Total area to paint', mLiters: 'Paint needed', mBuy: 'Buy at least (rounded)',
        pdfTitle: 'Paint – consumption', pdfMeta: (s: string, c: string, cov: string) => `${s} · ${c} coats · ${cov} m²/l`,
        pdfNote: 'Estimate. Consumption is affected by the substrate. Coverage is on the can.',
        soPaint: (s: string) => `Paint – ${s} (litres)`, soLabour: 'Painting labour',
      }
    : {
        title: 'Färgkalkylator – hur mycket färg?',
        sub: 'Välj yta, ange kvadratmeter och antal strykningar så räknar vi ut hur många liter färg du behöver – med avdrag för fönster och dörrar. Täckförmågan sätts efter färgtyp men kan justeras efter burken.',
        surfaceL: 'Yta / färgtyp', sVagg: 'Innervägg', sTak: 'Innertak', sFasadtra: 'Fasad – trä', sFasadputs: 'Fasad – puts',
        area: 'Yta att måla (m²)', openings: 'Avdrag fönster/dörrar (m²)', coats: 'Antal strykningar',
        coverageL: (d: string) => `Täckförmåga m²/l (standard ${d})`, spill: 'Spill (%)',
        rArea: 'Yta att måla totalt', rLiters: 'Färg som behövs', rBuy: 'Köp minst (avrundat)',
        litres: 'liter',
        fine: 'En uppskattning. Åtgången påverkas av underlaget – sugande, grovt eller mörkt-till-ljust underlag drar mer och kan kräva en extra strykning eller grundfärg. Täckförmågan står på burken.',
        offert: 'Skapa offert av det här', faktura: 'Skapa faktura', excel: 'Exportera Excel', pdf: 'Exportera PDF',
        csvTitle: 'Färgkalkylator', csvSurface: 'Yta / färgtyp', csvCoats: 'Strykningar', csvCoverage: 'Täckförmåga', post: 'Post', qty: 'Mängd',
        mArea: 'Yta att måla totalt', mLiters: 'Färg som behövs', mBuy: 'Köp minst (avrundat)',
        pdfTitle: 'Färg – åtgång', pdfMeta: (s: string, c: string, cov: string) => `${s} · ${c} strykningar · ${cov} m²/l`,
        pdfNote: 'Uppskattning. Åtgången påverkas av underlaget. Täckförmågan står på burken.',
        soPaint: (s: string) => `Färg – ${s} (liter)`, soLabour: 'Arbete målning',
      };

  const [surface, setSurface] = useState<Surface>('vagg');
  const [area, setArea] = useState('');
  const [openings, setOpenings] = useState('0');
  const [coats, setCoats] = useState('2');
  const [coverage, setCoverage] = useState(''); // override, tom = standard
  const [spill, setSpill] = useState('10');

  const defCov = COVERAGE[surface];

  const r = useMemo(() => {
    const net = Math.max(num(area) - num(openings), 0);
    const c = num(coats);
    const cov = num(coverage) || defCov;
    const paintedArea = net * c;
    const liters = cov > 0 ? (paintedArea / cov) * (1 + num(spill) / 100) : 0;
    return { paintedArea, liters, buy: Math.ceil(liters) };
  }, [area, openings, coats, coverage, defCov, spill]);

  const surfaceLabel: Record<Surface, string> = {
    vagg: t.sVagg, tak: t.sTak, fasadtra: t.sFasadtra, fasadputs: t.sFasadputs,
  };
  const sLabel = surfaceLabel[surface];

  const exportCsv = () => {
    const rows: (string | number)[][] = [
      [t.csvTitle, 'byggexp.se'],
      [t.csvSurface, sLabel],
      [t.csvCoats, coats],
      [t.csvCoverage, `${num(coverage) || defCov} m²/l`],
      [],
      [t.post, t.qty],
      [t.mArea, `${nf(r.paintedArea, 1)} m²`],
      [t.mLiters, `${nf(r.liters, 1)} ${t.litres}`],
      [t.mBuy, `${nf(r.buy)} ${t.litres}`],
    ];
    gaEvent('export_excel', { tool: 'farg-kalkylator' });
    downloadCsvRows(rows, 'farg-atgang.csv');
  };

  const exportPdf = () => void downloadMaterialPdf({
    title: t.pdfTitle,
    meta: t.pdfMeta(sLabel, coats, String(num(coverage) || defCov)),
    rows: [
      { desc: t.mArea, qty: `${nf(r.paintedArea, 1)} m²` },
      { desc: t.mLiters, qty: `${nf(r.liters, 1)} ${t.litres}` },
      { desc: t.mBuy, qty: `${nf(r.buy)} ${t.litres}` },
    ],
    filename: 'farg-atgang.pdf',
    tool: 'farg-kalkylator',
    note: t.pdfNote,
  });

  const seedRows = [
    { desc: t.soPaint(sLabel), qty: r.buy },
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

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>{t.surfaceL}</span>
          <select value={surface} onChange={(e) => { setSurface(e.currentTarget.value as Surface); setCoverage(''); }}>
            <option value="vagg">{t.sVagg}</option>
            <option value="tak">{t.sTak}</option>
            <option value="fasadtra">{t.sFasadtra}</option>
            <option value="fasadputs">{t.sFasadputs}</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>{t.area}</span>
          <input type="number" min="0" inputMode="decimal" value={area} placeholder={en ? 'e.g. 40' : 't.ex. 40'} onChange={(e) => setArea(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.openings}</span>
          <input type="number" min="0" inputMode="decimal" value={openings} onChange={(e) => setOpenings(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.coats}</span>
          <input type="number" min="1" inputMode="numeric" value={coats} onChange={(e) => setCoats(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.coverageL(nf(defCov))}</span>
          <input type="number" min="0" inputMode="decimal" value={coverage} placeholder={nf(defCov)} onChange={(e) => setCoverage(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.spill}</span>
          <input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row">
          <span>{t.rArea}</span>
          <span>{nf(r.paintedArea, 1)} m²</span>
        </div>
        <div className="lm-result-row lm-result-highlight">
          <span>{t.rLiters}</span>
          <strong>{nf(r.liters, 1)} {t.litres}</strong>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>{t.rBuy}</span>
          <strong>{nf(r.buy)} {t.litres}</strong>
        </div>
        <p className="lm-result-fine">{t.fine}</p>
        <div className="lm-tool-actions" style={{ marginTop: 16 }}>
          <a className="lm-tool-button" href={r.liters > 0 ? offertUrl : undefined} aria-disabled={r.liters <= 0} onClick={() => gaEvent('offert_from_calculator', { tool: 'farg-kalkylator' })}>
            {t.offert}
          </a>
          <a className="lm-tool-secondary" href={r.liters > 0 ? fakturaUrl : undefined} aria-disabled={r.liters <= 0} onClick={() => gaEvent('faktura_from_calculator', { tool: 'farg-kalkylator' })}>
            {t.faktura}
          </a>
          <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={r.liters <= 0}>
            {t.excel}
          </button>
          <button type="button" className="lm-tool-secondary" onClick={exportPdf} disabled={r.liters <= 0}>
            {t.pdf}
          </button>
        </div>
      </div>
    </div>
  );
}
