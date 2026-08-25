import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import type { CalcLocale } from '../../lib/locale';
import { downloadMaterialPdf, type MaterialRow } from '../../lib/materialPdf';
import { fakturaHref, offertHref } from '../../lib/offert';

// Regelvägg (stud wall) calculator: studs from length/c/c, syll + hammarband,
// plus the full wall build-up — gips (one or two sides, single/double layer),
// mineralull, skruv and ångspärr — with a deduction for openings (m²). A real
// material list for an inner wall, not just stud count. Bilingual: sv default,
// en for /en/verktyg; nb falls back to sv text.
function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

const GIPS_BOARD_M2 = 2.88; // 2400 × 1200 mm
const SCREWS_PER_M2 = 20;

export default function ReglarKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const nf = (v: number, d = 0) => v.toLocaleString(en ? 'en-GB' : 'sv-SE', { maximumFractionDigits: d });
  const t = en
    ? {
        title: 'Stud wall – studs, plasterboard & insulation',
        sub: 'Enter the wall dimensions and build-up and we work out studs, bottom/top plates, plasterboard, screws, insulation and vapour barrier – with a deduction for openings. Export the material list to Excel or PDF.',
        length: 'Wall length (m)', height: 'Wall height (m)', cc: 'Stud spacing c/c (mm)', openings: 'Deduct openings (m²)',
        sidesL: 'Plasterboard – sides', sBoth: 'Both sides', sOne: 'One side', sNone: 'No plasterboard',
        layersL: 'Plasterboard – layers per side', l1: '1 layer', l2: '2 layers',
        insulQ: 'Insulation (mineral wool)?', vapourQ: 'Vapour barrier / plastic film?', yes: 'Yes', no: 'No', spill: 'Waste (%)',
        rCount: 'Number of studs', rStud: 'Studs, timber', rPlate: 'Bottom + top plate', rTotal: 'Total timber',
        rGips: 'Plasterboard (2400×1200)', rScrew: 'Plasterboard screws', rInsul: 'Mineral wool / insulation', rVapour: 'Vapour barrier / film',
        fine: 'Number of studs = length ÷ c/c + 1 (common c/c 450 or 600 mm). Plasterboard is figured on the net area after deducting openings, per side and layer. A 2400×1200 mm board = 2.88 m². Check against drawings and structure.',
        offert: 'Create quote from this', faktura: 'Create invoice', excel: 'Export Excel', pdf: 'Export PDF',
        pcs: 'pcs', lm: 'lm',
        mCount: (cc: string) => `Studs (c/c ${cc})`, mStud: 'Studs, timber', mPlate: 'Bottom + top plate', mTotal: 'Total timber',
        mGips: 'Plasterboard (2400×1200)', mScrew: 'Plasterboard screws', mInsul: 'Mineral wool / insulation', mVapour: 'Vapour barrier / film',
        csvTitle: 'Stud wall – material list', post: 'Item', qty: 'Quantity', pdfTitle: 'Stud wall – material list',
        soGips: 'Plasterboard (pcs)', soInsul: 'Mineral wool (m²)', soLabour: 'Frame assembly labour',
      }
    : {
        title: 'Regelvägg – reglar, gips & isolering',
        sub: 'Fyll i väggens mått och uppbyggnad så räknar vi reglar, syll/hammarband, gipsskivor, skruv, isolering och ångspärr – med avdrag för öppningar. Exportera materiallistan till Excel eller PDF.',
        length: 'Väggens längd (m)', height: 'Väggens höjd (m)', cc: 'Centrumavstånd c/c (mm)', openings: 'Avdrag öppningar (m²)',
        sidesL: 'Gips – sidor', sBoth: 'Båda sidor', sOne: 'En sida', sNone: 'Ingen gips',
        layersL: 'Gips – lager per sida', l1: '1 lager', l2: '2 lager',
        insulQ: 'Isolering (mineralull)?', vapourQ: 'Ångspärr / plastfolie?', yes: 'Ja', no: 'Nej', spill: 'Spill (%)',
        rCount: 'Antal reglar', rStud: 'Reglar, virke', rPlate: 'Syll + hammarband', rTotal: 'Totalt virke',
        rGips: 'Gipsskivor (2400×1200)', rScrew: 'Gipsskruv', rInsul: 'Mineralull / isolering', rVapour: 'Ångspärr / plastfolie',
        fine: 'Antal reglar = längd ÷ c/c + 1 (vanligt c/c 450 eller 600 mm). Gips räknas på nettoytan efter avdrag för öppningar, per sida och lager. Gipsskiva 2400×1200 mm = 2,88 m². Kontrollera mot ritning och konstruktion.',
        offert: 'Skapa offert av det här', faktura: 'Skapa faktura', excel: 'Exportera Excel', pdf: 'Exportera PDF',
        pcs: 'st', lm: 'lpm',
        mCount: (cc: string) => `Reglar (c/c ${cc})`, mStud: 'Reglar, virke', mPlate: 'Syll + hammarband', mTotal: 'Totalt virke',
        mGips: 'Gipsskivor (2400×1200)', mScrew: 'Gipsskruv', mInsul: 'Mineralull / isolering', mVapour: 'Ångspärr / plastfolie',
        csvTitle: 'Regelvägg – materiallista', post: 'Post', qty: 'Mängd', pdfTitle: 'Regelvägg – materiallista',
        soGips: 'Gipsskivor (st)', soInsul: 'Mineralull (m²)', soLabour: 'Arbete stommontering',
      };

  const [length, setLength] = useState('');
  const [height, setHeight] = useState('2.4');
  const [cc, setCc] = useState('600');
  const [openings, setOpenings] = useState('0'); // m² dörrar/fönster
  const [sides, setSides] = useState('2'); // gips-sidor (0,1,2)
  const [layers, setLayers] = useState('1'); // gips-lager per sida
  const [insulation, setInsulation] = useState('ja');
  const [vapour, setVapour] = useState('ja'); // ångspärr/plastfolie
  const [spill, setSpill] = useState('10');

  const r = useMemo(() => {
    const l = num(length), h = num(height), c = num(cc);
    const count = c > 0 && l > 0 ? Math.floor((l * 1000) / c) + 1 : 0;
    const studMeters = count * h;
    const plateMeters = l * 2; // syll + hammarband
    const grossArea = l * h;
    const netArea = Math.max(grossArea - num(openings), 0);
    const spillF = 1 + num(spill) / 100;

    const nSides = num(sides);
    const nLayers = num(layers);
    const gipsArea = netArea * nSides * nLayers;
    const gipsBoards = gipsArea > 0 ? Math.ceil((gipsArea * spillF) / GIPS_BOARD_M2) : 0;
    const screws = Math.ceil(gipsArea * SCREWS_PER_M2);
    const insulM2 = insulation === 'ja' ? netArea : 0;
    const vapourM2 = vapour === 'ja' ? netArea * 1.1 : 0;

    return { count, studMeters, plateMeters, totalTimber: studMeters + plateMeters, netArea, gipsBoards, gipsArea, screws, insulM2, vapourM2 };
  }, [length, height, cc, openings, sides, layers, insulation, vapour, spill]);

  const materialRows = useMemo(() => {
    const rows: MaterialRow[] = [
      { desc: t.mCount(cc), qty: `${nf(r.count)} ${t.pcs}` },
      { desc: t.mStud, qty: `${nf(r.studMeters, 1)} ${t.lm}` },
      { desc: t.mPlate, qty: `${nf(r.plateMeters, 1)} ${t.lm}` },
      { desc: t.mTotal, qty: `${nf(r.totalTimber, 1)} ${t.lm}` },
    ];
    if (r.gipsBoards > 0) rows.push({ desc: t.mGips, qty: `${nf(r.gipsBoards)} ${t.pcs} (${nf(r.gipsArea, 1)} m²)` });
    if (r.screws > 0) rows.push({ desc: t.mScrew, qty: `${nf(r.screws)} ${t.pcs}` });
    if (r.insulM2 > 0) rows.push({ desc: t.mInsul, qty: `${nf(r.insulM2, 1)} m²` });
    if (r.vapourM2 > 0) rows.push({ desc: t.mVapour, qty: `${nf(r.vapourM2, 1)} m²` });
    return rows;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [r, cc, locale]);

  const seedRows = [
    { desc: t.mCount(cc), qty: r.count },
    ...(r.gipsBoards > 0 ? [{ desc: t.soGips, qty: r.gipsBoards }] : []),
    ...(r.insulM2 > 0 ? [{ desc: t.soInsul, qty: Math.round(r.insulM2) }] : []),
    { desc: t.soLabour, qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);
  const disabled = r.count <= 0;

  const exportCsv = () => {
    gaEvent('export_excel', { tool: 'reglar-kalkylator' });
    downloadCsvRows([[t.csvTitle, 'byggexp.se'], [], [t.post, t.qty], ...materialRows.map((m) => [m.desc, m.qty])], 'regelvagg-materiallista.csv');
  };
  const exportPdf = () => void downloadMaterialPdf({ title: t.pdfTitle, rows: materialRows, filename: 'regelvagg-materiallista.pdf', tool: 'reglar-kalkylator' });

  const fld = 'lm-tool-field';
  return (
    <div className="lm-tool lm-tool--split">
      <div className="lm-tool-grid">
        <label className={fld}><span>{t.length}</span><input type="number" min="0" inputMode="decimal" value={length} placeholder={en ? 'e.g. 6' : 't.ex. 6'} onChange={(e) => setLength(e.currentTarget.value)} /></label>
        <label className={fld}><span>{t.height}</span><input type="number" min="0" inputMode="decimal" value={height} onChange={(e) => setHeight(e.currentTarget.value)} /></label>
        <label className={fld}><span>{t.cc}</span><input type="number" min="0" inputMode="numeric" value={cc} onChange={(e) => setCc(e.currentTarget.value)} /></label>
        <label className={fld}><span>{t.openings}</span><input type="number" min="0" inputMode="decimal" value={openings} onChange={(e) => setOpenings(e.currentTarget.value)} /></label>
        <label className={fld}><span>{t.sidesL}</span>
          <select value={sides} onChange={(e) => setSides(e.currentTarget.value)}>
            <option value="2">{t.sBoth}</option><option value="1">{t.sOne}</option><option value="0">{t.sNone}</option>
          </select></label>
        <label className={fld}><span>{t.layersL}</span>
          <select value={layers} onChange={(e) => setLayers(e.currentTarget.value)}>
            <option value="1">{t.l1}</option><option value="2">{t.l2}</option>
          </select></label>
        <label className={fld}><span>{t.insulQ}</span>
          <select value={insulation} onChange={(e) => setInsulation(e.currentTarget.value)}>
            <option value="ja">{t.yes}</option><option value="nej">{t.no}</option>
          </select></label>
        <label className={fld}><span>{t.vapourQ}</span>
          <select value={vapour} onChange={(e) => setVapour(e.currentTarget.value)}>
            <option value="ja">{t.yes}</option><option value="nej">{t.no}</option>
          </select></label>
        <label className={fld}><span>{t.spill}</span><input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>{t.rCount}</span><strong>{nf(r.count)} {t.pcs}</strong></div>
        <div className="lm-result-row"><span>{t.rStud}</span><span>{nf(r.studMeters, 1)} {t.lm}</span></div>
        <div className="lm-result-row"><span>{t.rPlate}</span><span>{nf(r.plateMeters, 1)} {t.lm}</span></div>
        <div className="lm-result-row lm-result-total"><span>{t.rTotal}</span><strong>{nf(r.totalTimber, 1)} {t.lm}</strong></div>
        {r.gipsBoards > 0 ? <div className="lm-result-row"><span>{t.rGips}</span><span>{nf(r.gipsBoards)} {t.pcs} · {nf(r.gipsArea, 1)} m²</span></div> : null}
        {r.screws > 0 ? <div className="lm-result-row"><span>{t.rScrew}</span><span>{nf(r.screws)} {t.pcs}</span></div> : null}
        {r.insulM2 > 0 ? <div className="lm-result-row"><span>{t.rInsul}</span><span>{nf(r.insulM2, 1)} m²</span></div> : null}
        {r.vapourM2 > 0 ? <div className="lm-result-row"><span>{t.rVapour}</span><span>{nf(r.vapourM2, 1)} m²</span></div> : null}
        <p className="lm-result-fine">{t.fine}</p>
        <div className="lm-tool-actions" style={{ marginTop: 16 }}>
          <a className="lm-tool-button" href={disabled ? undefined : offertUrl} aria-disabled={disabled} onClick={() => gaEvent('offert_from_calculator', { tool: 'reglar-kalkylator' })}>{t.offert}</a>
          <a className="lm-tool-secondary" href={disabled ? undefined : fakturaUrl} aria-disabled={disabled} onClick={() => gaEvent('faktura_from_calculator', { tool: 'reglar-kalkylator' })}>{t.faktura}</a>
          <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={disabled}>{t.excel}</button>
          <button type="button" className="lm-tool-secondary" onClick={exportPdf} disabled={disabled}>{t.pdf}</button>
        </div>
      </div>
    </div>
  );
}
