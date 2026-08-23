import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import type { CalcLocale } from '../../lib/locale';
import { downloadMaterialPdf } from '../../lib/materialPdf';
import { fakturaHref, offertHref } from '../../lib/offert';

// Professional drywall (gipsskivor) calculator for a stud wall.
// Method follows Gyproc's Monteringshandbok: board width sets the stud c/c
// (900 mm -> c/c 450, 1200 mm -> c/c 600), a stud wall is clad on one or both
// sides, and screws run ~20 st/m² per board layer. It returns not just the
// sheet count but the whole bill of material: sheets, studs (löpmeter virke),
// syll/hammarband (or skena for steel), insulation and screws.
// Bilingual: sv default, en for /en/verktyg; nb falls back to sv text.

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

export default function GipsKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const nf = (v: number, d = 0) => v.toLocaleString(en ? 'en-GB' : 'sv-SE', { maximumFractionDigits: d });
  const t = en
    ? {
        title: 'Plasterboard calculator – the full material list',
        sub: 'Enter the wall and we work out plasterboard, studs, plates, insulation and screws. The board width sets the stud spacing (c/c) per Gyproc’s installation manual.',
        length: 'Wall length (m)', height: 'Wall height (m)',
        cladL: 'Cladding', cladBoth: 'Both sides', cladOne: 'One side',
        layersL: 'Layers per side', l1: '1 layer', l2: '2 layers',
        boardWidthL: 'Board width', boardLenL: 'Board length (m)',
        frameL: 'Frame', frameWood: 'Timber studs', frameSteel: 'Steel studs',
        insulL: 'Insulation in the wall', yes: 'Yes', no: 'No',
        openings: 'Deduct openings (m²)', spill: 'Waste (%)',
        rSheets: 'Plasterboard', rClad: 'Clad area / board incl. waste', rStuds: (cc: number) => `Studs (c/c ${cc} mm)`, rRail: '', rInsul: 'Insulation', rScrews: 'Plasterboard screws',
        railWood: 'Bottom + top plate', railSteel: 'Track (top + bottom)',
        fine: 'An estimate per Gyproc’s installation manual. The frame is counted once even with double-sided cladding; screws about 20 pcs/m² per layer (edge c200, field c300). Always check board sizes, stud type and fixings against the supplier’s instructions for your wall type.',
        offert: 'Create quote from this', faktura: 'Create invoice', excel: 'Export Excel', pdf: 'Export PDF',
        pcs: 'pcs', lm: 'lm',
        csvTitle: 'Plasterboard calculator', csvWall: 'Wall', wallDesc: (l: string, h: string, s: string, lay: string) => `${l} × ${h} m, ${s}, ${lay} layer(s)/side`, both: 'double-sided', one: 'single-sided',
        post: 'Item', qty: 'Quantity',
        mSheets: 'Plasterboard', mClad: 'Clad area', mGips: 'Board incl. waste', mScrews: 'Plasterboard screws',
        pdfTitle: 'Plasterboard – material list', pdfMeta: (l: string, h: string, s: string, lay: string) => `Wall ${l} × ${h} m · ${s} · ${lay} layer(s)/side`,
        soLabour: 'Installation labour',
      }
    : {
        title: 'Gipskalkylator – hela materiallistan',
        sub: 'Fyll i väggen så räknar vi ut gipsskivor, reglar, syll/hammarband, isolering och skruv. Skivbredden styr regelavståndet (c/c) enligt Gyprocs monteringshandbok.',
        length: 'Vägglängd (m)', height: 'Vägghöjd (m)',
        cladL: 'Beklädnad', cladBoth: 'Dubbelsidig (båda sidor)', cladOne: 'Enkelsidig (en sida)',
        layersL: 'Lager per sida', l1: '1 lager', l2: '2 lager',
        boardWidthL: 'Skivbredd', boardLenL: 'Skivlängd (m)',
        frameL: 'Stomme', frameWood: 'Träreglar', frameSteel: 'Stålreglar',
        insulL: 'Isolering i väggen', yes: 'Ja', no: 'Nej',
        openings: 'Avdrag öppningar (m²)', spill: 'Spill (%)',
        rSheets: 'Gipsskivor', rClad: 'Beklädd yta / gips inkl. spill', rStuds: (cc: number) => `Reglar (c/c ${cc} mm)`, rRail: '', rInsul: 'Isolering', rScrews: 'Gipsskruv',
        railWood: 'Syll + hammarband', railSteel: 'Skena (upp + ned)',
        fine: 'En uppskattning enligt Gyprocs monteringshandbok. Stommen räknas en gång även vid dubbelsidig beklädnad; skruv ca 20 st/m² och lager (kant c200, fält c300). Kontrollera alltid skivmått, regeltyp och infästning mot leverantörens anvisning för din väggtyp.',
        offert: 'Skapa offert av det här', faktura: 'Skapa faktura', excel: 'Exportera Excel', pdf: 'Exportera PDF',
        pcs: 'st', lm: 'lpm',
        csvTitle: 'Gipskalkylator', csvWall: 'Vägg', wallDesc: (l: string, h: string, s: string, lay: string) => `${l} × ${h} m, ${s}, ${lay} lager/sida`, both: 'dubbelsidig', one: 'enkelsidig',
        post: 'Post', qty: 'Mängd',
        mSheets: 'Gipsskivor', mClad: 'Beklädd yta', mGips: 'Gips inkl. spill', mScrews: 'Gipsskruv',
        pdfTitle: 'Gips – materiallista', pdfMeta: (l: string, h: string, s: string, lay: string) => `Vägg ${l} × ${h} m · ${s} · ${lay} lager/sida`,
        soLabour: 'Arbete montering',
      };

  const [length, setLength] = useState('');
  const [height, setHeight] = useState('2.5');
  const [sides, setSides] = useState('2'); // 1 = enkelsidig, 2 = dubbelsidig
  const [layers, setLayers] = useState('1'); // lager per sida
  const [boardWidth, setBoardWidth] = useState('1200'); // 900 | 1200 (mm)
  const [boardLen, setBoardLen] = useState('2.6'); // skivlängd (m)
  const [frame, setFrame] = useState('tra'); // tra | stal
  const [insulate, setInsulate] = useState('nej'); // ja | nej
  const [openings, setOpenings] = useState('0'); // m² dörr/fönster att dra av
  const [spill, setSpill] = useState('10');

  const r = useMemo(() => {
    const L = num(length);
    const H = num(height);
    const s = parseInt(sides, 10);
    const lay = parseInt(layers, 10);
    const cc = boardWidth === '900' ? 450 : 600; // mm, per Gyproc
    const spillF = 1 + num(spill) / 100;

    const oneSide = Math.max(L * H - num(openings), 0); // m² per sida, minus öppningar
    const cladArea = oneSide * s; // total beklädd yta
    const gipsNeed = cladArea * lay * spillF; // m² gips inkl. spill
    const boardArea = (num(boardWidth) / 1000) * num(boardLen);
    const sheets = boardArea > 0 ? Math.ceil(gipsNeed / boardArea) : 0;

    // Frame is single, regardless of how many sides are clad.
    const studCount = L > 0 ? Math.floor((L * 1000) / cc) + 1 : 0;
    const studMeters = studCount * H;
    const railMeters = L * 2; // syll + hammarband (eller skena upp/ned)

    const insulM2 = insulate === 'ja' ? oneSide : 0; // fyller stommen en gång
    // ~20 skruv/m² per gipslager (Gyproc: c200 kant / c300 fält).
    const screws = Math.round(cladArea * lay * 20 * spillF);

    return { cc, cladArea, gipsNeed, sheets, studCount, studMeters, railMeters, insulM2, screws };
  }, [length, height, sides, layers, boardWidth, boardLen, insulate, openings, spill]);

  const railLabel = frame === 'stal' ? t.railSteel : t.railWood;
  const sidesLabel = sides === '2' ? t.both : t.one;

  const exportCsv = () => {
    const rows: (string | number)[][] = [
      [t.csvTitle, 'byggexp.se'],
      [],
      [t.csvWall, t.wallDesc(length || '0', height || '0', sidesLabel, layers)],
      [],
      [t.post, t.qty],
      [t.mSheets, `${nf(r.sheets)} ${t.pcs}`],
      [t.mClad, `${nf(r.cladArea, 1)} m²`],
      [t.mGips, `${nf(r.gipsNeed, 1)} m²`],
      [t.rStuds(r.cc), `${nf(r.studCount)} ${t.pcs} / ${nf(r.studMeters, 1)} ${t.lm}`],
      [railLabel, `${nf(r.railMeters, 1)} ${t.lm}`],
      ...(r.insulM2 > 0 ? [[t.rInsul, `${nf(r.insulM2, 1)} m²`]] : []),
      [t.mScrews, `${nf(r.screws)} ${t.pcs}`],
    ];
    gaEvent('export_excel', { tool: 'gips-kalkylator' });
    downloadCsvRows(rows, 'gips-materiallista.csv');
  };

  const exportPdf = () => void downloadMaterialPdf({
    title: t.pdfTitle,
    meta: t.pdfMeta(length || '0', height || '0', sidesLabel, layers),
    rows: [
      { desc: t.mSheets, qty: `${nf(r.sheets)} ${t.pcs}` },
      { desc: `${t.mClad} / ${t.mGips}`, qty: `${nf(r.cladArea, 1)} / ${nf(r.gipsNeed, 1)} m²` },
      { desc: t.rStuds(r.cc), qty: `${nf(r.studCount)} ${t.pcs} · ${nf(r.studMeters, 1)} ${t.lm}` },
      { desc: railLabel, qty: `${nf(r.railMeters, 1)} ${t.lm}` },
      ...(r.insulM2 > 0 ? [{ desc: t.rInsul, qty: `${nf(r.insulM2, 1)} m²` }] : []),
      { desc: t.mScrews, qty: `${nf(r.screws)} ${t.pcs}` },
    ],
    filename: 'gips-materiallista.pdf',
    tool: 'gips-kalkylator',
  });

  const seedRows = [
    { desc: t.mSheets, qty: r.sheets },
    { desc: t.rStuds(r.cc), qty: r.studCount },
    { desc: `${railLabel} (${t.lm})`, qty: Math.round(r.railMeters) },
    { desc: `${t.rInsul} (m²)`, qty: Math.round(r.insulM2) },
    { desc: t.mScrews, qty: r.screws },
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
          <span>{t.length}</span>
          <input type="number" min="0" inputMode="decimal" value={length} placeholder={en ? 'e.g. 6' : 't.ex. 6'} onChange={(e) => setLength(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.height}</span>
          <input type="number" min="0" inputMode="decimal" value={height} onChange={(e) => setHeight(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.cladL}</span>
          <select value={sides} onChange={(e) => setSides(e.currentTarget.value)}>
            <option value="2">{t.cladBoth}</option>
            <option value="1">{t.cladOne}</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>{t.layersL}</span>
          <select value={layers} onChange={(e) => setLayers(e.currentTarget.value)}>
            <option value="1">{t.l1}</option>
            <option value="2">{t.l2}</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>{t.boardWidthL}</span>
          <select value={boardWidth} onChange={(e) => setBoardWidth(e.currentTarget.value)}>
            <option value="1200">1200 mm (c/c 600)</option>
            <option value="900">900 mm (c/c 450)</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>{t.boardLenL}</span>
          <select value={boardLen} onChange={(e) => setBoardLen(e.currentTarget.value)}>
            <option value="2.6">{en ? '2.60 m' : '2,60 m'}</option>
            <option value="2.7">{en ? '2.70 m' : '2,70 m'}</option>
            <option value="2.4">{en ? '2.40 m' : '2,40 m'}</option>
            <option value="3.0">{en ? '3.00 m' : '3,00 m'}</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>{t.frameL}</span>
          <select value={frame} onChange={(e) => setFrame(e.currentTarget.value)}>
            <option value="tra">{t.frameWood}</option>
            <option value="stal">{t.frameSteel}</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>{t.insulL}</span>
          <select value={insulate} onChange={(e) => setInsulate(e.currentTarget.value)}>
            <option value="nej">{t.no}</option>
            <option value="ja">{t.yes}</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>{t.openings}</span>
          <input type="number" min="0" inputMode="decimal" value={openings} onChange={(e) => setOpenings(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.spill}</span>
          <input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight">
          <span>{t.rSheets}</span>
          <strong>{nf(r.sheets)} {t.pcs}</strong>
        </div>
        <div className="lm-result-row">
          <span>{t.rClad}</span>
          <strong>{nf(r.cladArea, 1)} m² / {nf(r.gipsNeed, 1)} m²</strong>
        </div>
        <div className="lm-result-row">
          <span>{t.rStuds(r.cc)}</span>
          <strong>{nf(r.studCount)} {t.pcs} · {nf(r.studMeters, 1)} {t.lm}</strong>
        </div>
        <div className="lm-result-row">
          <span>{railLabel}</span>
          <strong>{nf(r.railMeters, 1)} {t.lm}</strong>
        </div>
        {r.insulM2 > 0 ? (
          <div className="lm-result-row">
            <span>{t.rInsul}</span>
            <strong>{nf(r.insulM2, 1)} m²</strong>
          </div>
        ) : null}
        <div className="lm-result-row lm-result-total">
          <span>{t.rScrews}</span>
          <strong>{nf(r.screws)} {t.pcs}</strong>
        </div>
        <p className="lm-result-fine">{t.fine}</p>
        <div className="lm-tool-actions" style={{ marginTop: 16 }}>
          <a className="lm-tool-button" href={r.sheets > 0 ? offertUrl : undefined} aria-disabled={r.sheets <= 0} onClick={() => gaEvent('offert_from_calculator', { tool: 'gips-kalkylator' })}>
            {t.offert}
          </a>
          <a className="lm-tool-secondary" href={r.sheets > 0 ? fakturaUrl : undefined} aria-disabled={r.sheets <= 0} onClick={() => gaEvent('faktura_from_calculator', { tool: 'gips-kalkylator' })}>
            {t.faktura}
          </a>
          <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={r.sheets <= 0}>
            {t.excel}
          </button>
          <button type="button" className="lm-tool-secondary" onClick={exportPdf} disabled={r.sheets <= 0}>
            {t.pdf}
          </button>
        </div>
      </div>
    </div>
  );
}
