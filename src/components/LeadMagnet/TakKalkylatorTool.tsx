import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import type { CalcLocale } from '../../lib/locale';
import { fakturaHref, offertHref } from '../../lib/offert';

// Professional roof calculator. Roof area for a pitched roof is the footprint
// (incl. eaves overhang) ÷ cos(pitch). From the area it estimates the covering
// bill (tiles/plåt/papp, bärläkt, ströläkt, underlagspapp) and — optionally —
// takavvattning (hängrännor by eaves length, stuprör by count × building height,
// rännkrokar), snörasskydd, and byggnadsställning (perimeter × work height) for
// roof work. Optional items default to sensible values and can be turned off.
// Bilingual: sv default, en for /en/verktyg; nb falls back to sv text.

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

type Covering = 'betongpanna' | 'tegelpanna' | 'plat' | 'papp';

const DEFAULTS: Record<Covering, { tiles: number; gauge: number }> = {
  betongpanna: { tiles: 9.5, gauge: 345 },
  tegelpanna: { tiles: 13, gauge: 320 },
  plat: { tiles: 0, gauge: 600 },
  papp: { tiles: 0, gauge: 0 },
};

export default function TakKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const nf = (v: number, d = 0) => v.toLocaleString(en ? 'en-GB' : 'sv-SE', { maximumFractionDigits: d });
  const t = en
    ? {
        title: 'Roof calculator – area, tiles, drainage & scaffolding',
        sub: 'Enter the building dimensions and roof pitch and we work out the roof area and material: tiles, battens and felt – plus (optionally) gutters, downpipes, snow guards and scaffolding for the roof work. Export to Excel or PDF.',
        formL: 'Roof type', oSadel: 'Gable roof (two slopes)', oPulpet: 'Mono-pitch roof (one slope)',
        length: 'Building length (m)', width: 'Building width (m)', pitch: 'Roof pitch (degrees)', overhang: 'Roof overhang (m)', height: 'Building height to eaves (m)',
        coveringL: 'Roof covering', tilesPerM2: (d: string) => `Tiles per m² (default ${d})`, spill: 'Waste / overlap (%)',
        guttersQ: 'Gutters & downpipes?', yes: 'Yes', no: 'No', downpipes: 'Number of downpipes', krokCC: 'Gutter bracket c/c (m)',
        snowQ: 'Snow guards?', scaffoldQ: 'Scaffolding?', scaffoldYes: 'Yes (façade area)',
        rFootprint: 'Building footprint', rRoof: (f: string) => `Roof area (${f})`, rTiles: 'Number of tiles (approx.)', rCover: 'Covering incl. overlap',
        rBatten: 'Tiling battens', rStrolakt: 'Counter battens', rFelt: 'Underlay felt (approx.)', rNock: 'Ridge (length)',
        rGutter: 'Gutters', rKrok: 'Gutter brackets', rStupror: (n: string) => `Downpipes (${n} pcs)`, rSnow: 'Snow guards', rScaffold: 'Scaffolding (façade area)',
        fine: 'Roof area = footprint (incl. overhang) ÷ cos(pitch). Gutters are figured on the eaves length, downpipes on count × building height, and scaffolding as façade area (perimeter × work height). Number of tiles and batten spacing depend on the model – follow the manufacturer’s laying instructions.',
        offert: 'Create quote from this', faktura: 'Create invoice', excel: 'Export Excel', pdf: 'Export PDF',
        pcs: 'pcs', lm: 'lm',
        sadelShort: 'gable roof', pulpetShort: 'mono-pitch roof',
        cov: { betongpanna: 'Concrete tile', tegelpanna: 'Clay tile', plat: 'Sheet metal (profiled)', papp: 'Felt / membrane' } as Record<Covering, string>,
        mRoof: 'Roof area', mTiles: (c: string) => `Roof tiles (${c})`, mCover: (c: string) => `Roof covering ${c}`, mBatten: 'Tiling battens', mStrolakt: 'Counter battens', mFelt: 'Underlay felt', mNock: 'Ridge (length)', mGutter: 'Gutters', mKrok: 'Gutter brackets', mStupror: (n: string) => `Downpipes (${n} pcs)`, mSnow: 'Snow guards', mScaffold: 'Scaffolding',
        csvTitle: 'Roof calculator', csvForm: 'Roof type', csvCov: 'Roof covering', csvPost: 'Item', csvQty: 'Quantity',
        pdfTitle: 'Roof – material list', pdfBy: 'Created with ByggExp – byggexp.se', pdfNote: 'Estimate. Check against the manufacturer’s laying instructions.',
        soCover: (c: string) => `Roof covering ${c} (m²)`, soBatten: 'Tiling battens (lm)', soFelt: 'Underlay felt (m²)', soGutter: 'Gutters (m)', soStupror: 'Downpipes (m)', soScaffold: 'Scaffolding (m²)', soLabour: 'Roofing labour',
      }
    : {
        title: 'Takkalkylator – yta, pannor, avvattning & ställning',
        sub: 'Ange husets mått och taklutning så räknar vi takytan och materialet: takpannor, läkt och papp – plus (valfritt) hängrännor, stuprör, snörasskydd och byggnadsställning för takarbetet. Exportera till Excel eller PDF.',
        formL: 'Takform', oSadel: 'Sadeltak (två fall)', oPulpet: 'Pulpettak (ett fall)',
        length: 'Byggnadens längd (m)', width: 'Byggnadens bredd (m)', pitch: 'Taklutning (grader)', overhang: 'Takutsprång (m)', height: 'Byggnadshöjd till takfot (m)',
        coveringL: 'Taktäckning', tilesPerM2: (d: string) => `Pannor per m² (standard ${d})`, spill: 'Spill / överlapp (%)',
        guttersQ: 'Hängrännor & stuprör?', yes: 'Ja', no: 'Nej', downpipes: 'Antal stuprör', krokCC: 'Rännkrok c/c (m)',
        snowQ: 'Snörasskydd?', scaffoldQ: 'Byggnadsställning?', scaffoldYes: 'Ja (fasadyta)',
        rFootprint: 'Byggnadens grundyta', rRoof: (f: string) => `Takyta (${f})`, rTiles: 'Antal takpannor (ca)', rCover: 'Taktäckning inkl. överlapp',
        rBatten: 'Bärläkt', rStrolakt: 'Ströläkt', rFelt: 'Underlagspapp (ca)', rNock: 'Nock (längd)',
        rGutter: 'Hängrännor', rKrok: 'Rännkrokar', rStupror: (n: string) => `Stuprör (${n} st)`, rSnow: 'Snörasskydd', rScaffold: 'Byggnadsställning (fasadyta)',
        fine: 'Takyta = grundyta (inkl. utsprång) ÷ cos(taklutning). Hängrännor räknas på takfotslängden, stuprör på antal × byggnadshöjd, och ställning som fasadyta (omkrets × arbetshöjd). Antal pannor och läktavstånd beror på modell – följ tillverkarens läggningsanvisning.',
        offert: 'Skapa offert av det här', faktura: 'Skapa faktura', excel: 'Exportera Excel', pdf: 'Exportera PDF',
        pcs: 'st', lm: 'lpm',
        sadelShort: 'sadeltak', pulpetShort: 'pulpettak',
        cov: { betongpanna: 'Betongpanna', tegelpanna: 'Tegelpanna', plat: 'Plåt (profil)', papp: 'Papp / duk' } as Record<Covering, string>,
        mRoof: 'Takyta', mTiles: (c: string) => `Takpannor (${c})`, mCover: (c: string) => `Taktäckning ${c}`, mBatten: 'Bärläkt', mStrolakt: 'Ströläkt', mFelt: 'Underlagspapp', mNock: 'Nock (längd)', mGutter: 'Hängrännor', mKrok: 'Rännkrokar', mStupror: (n: string) => `Stuprör (${n} st)`, mSnow: 'Snörasskydd', mScaffold: 'Byggnadsställning',
        csvTitle: 'Takkalkylator', csvForm: 'Takform', csvCov: 'Taktäckning', csvPost: 'Post', csvQty: 'Mängd',
        pdfTitle: 'Tak – materiallista', pdfBy: 'Skapad med ByggExp – byggexp.se', pdfNote: 'Uppskattning. Kontrollera mot tillverkarens läggningsanvisning.',
        soCover: (c: string) => `Taktäckning ${c} (m²)`, soBatten: 'Bärläkt (lpm)', soFelt: 'Underlagspapp (m²)', soGutter: 'Hängrännor (m)', soStupror: 'Stuprör (m)', soScaffold: 'Byggnadsställning (m²)', soLabour: 'Arbete taktäckning',
      };

  const [form, setForm] = useState('sadel'); // sadel | pulpet
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [pitch, setPitch] = useState('27');
  const [overhang, setOverhang] = useState('0.3');
  const [covering, setCovering] = useState<Covering>('betongpanna');
  const [tiles, setTiles] = useState('');
  const [spill, setSpill] = useState('10');

  // Optional extras
  const [height, setHeight] = useState('5'); // byggnadshöjd till takfot (m) – för stuprör & ställning
  const [gutters, setGutters] = useState('ja'); // hängrännor + stuprör
  const [downpipes, setDownpipes] = useState('2'); // antal stuprör
  const [krokCC, setKrokCC] = useState('0.6'); // rännkroksavstånd m
  const [snorasskydd, setSnorasskydd] = useState('nej');
  const [scaffold, setScaffold] = useState('nej'); // byggnadsställning

  const def = DEFAULTS[covering];

  const r = useMemo(() => {
    const o = num(overhang);
    const L = num(length), W = num(width);
    const effL = L + 2 * o;
    const effW = W + 2 * o;
    const footprint = effL * effW;
    const cos = Math.cos((num(pitch) * Math.PI) / 180);
    const roofArea = cos > 0 ? footprint / cos : 0;
    const spillF = 1 + num(spill) / 100;

    const tilesPerM2 = num(tiles) || def.tiles;
    const tileCount = tilesPerM2 > 0 ? Math.ceil(roofArea * tilesPerM2 * spillF) : 0;
    const battenM = def.gauge > 0 ? (roofArea / (def.gauge / 1000)) * spillF : 0;
    const strolaktM = def.gauge > 0 ? roofArea / 0.6 : 0; // ströläkt c/c ~600 mm
    const feltM2 = roofArea * 1.1;

    // Takavvattning: eaves length (takfot) drains to gutters. Sadeltak = 2 long
    // sides; pulpettak = 1.
    const eaves = form === 'sadel' ? 2 * effL : effL;
    const nock = form === 'sadel' ? effL : 0;
    const gutterM = gutters === 'ja' ? eaves : 0;
    const krokCcM = num(krokCC);
    const rannkrok = gutters === 'ja' && krokCcM > 0 ? Math.ceil(eaves / krokCcM) : 0;
    const nDown = gutters === 'ja' ? num(downpipes) : 0;
    const stuprorM = nDown * (num(height) + 0.5); // ner till mark + lite marginal
    const snorM = snorasskydd === 'ja' ? eaves : 0;

    // Ställning: fasadyta runt huset × arbetshöjd (takfotshöjd + 1 m).
    const perimeter = 2 * (effL + effW);
    const scaffoldM2 = scaffold === 'ja' ? perimeter * (num(height) + 1) : 0;

    return {
      footprint: L * W, roofArea, tileCount, battenM, strolaktM, feltM2,
      hasTiles: def.tiles > 0, hasBatten: def.gauge > 0,
      eaves, nock, gutterM, rannkrok, nDown, stuprorM, snorM, scaffoldM2,
    };
  }, [form, length, width, pitch, overhang, tiles, spill, def, height, gutters, downpipes, krokCC, snorasskydd, scaffold]);

  const cov = t.cov[covering];

  const materialRows = useMemo(() => {
    const rows: { desc: string; qty: string }[] = [
      { desc: t.mRoof, qty: `${nf(r.roofArea, 1)} m²` },
    ];
    if (r.hasTiles) rows.push({ desc: t.mTiles(cov), qty: `${nf(r.tileCount)} ${t.pcs}` });
    else rows.push({ desc: t.mCover(cov), qty: `${nf(r.feltM2, 1)} m²` });
    if (r.hasBatten) { rows.push({ desc: t.mBatten, qty: `${nf(r.battenM)} ${t.lm}` }); rows.push({ desc: t.mStrolakt, qty: `${nf(r.strolaktM)} ${t.lm}` }); }
    rows.push({ desc: t.mFelt, qty: `${nf(r.feltM2, 1)} m²` });
    if (r.nock > 0) rows.push({ desc: t.mNock, qty: `${nf(r.nock, 1)} m` });
    if (r.gutterM > 0) {
      rows.push({ desc: t.mGutter, qty: `${nf(r.gutterM, 1)} m` });
      rows.push({ desc: t.mKrok, qty: `${nf(r.rannkrok)} ${t.pcs}` });
      rows.push({ desc: t.mStupror(nf(r.nDown)), qty: `${nf(r.stuprorM, 1)} m` });
    }
    if (r.snorM > 0) rows.push({ desc: t.mSnow, qty: `${nf(r.snorM, 1)} m` });
    if (r.scaffoldM2 > 0) rows.push({ desc: t.mScaffold, qty: `${nf(r.scaffoldM2, 1)} m²` });
    return rows;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [r, covering, locale]);

  const exportCsv = () => {
    const rows: (string | number)[][] = [
      [t.csvTitle, 'byggexp.se'],
      [t.csvForm, form === 'sadel' ? t.oSadel : t.oPulpet],
      [t.csvCov, cov],
      [], [t.csvPost, t.csvQty],
      ...materialRows.map((m) => [m.desc, m.qty]),
    ];
    gaEvent('export_excel', { tool: 'tak-kalkylator' });
    downloadCsvRows(rows, 'tak-materiallista.csv');
  };

  const exportPdf = async () => {
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    const mx = 48; const pw = doc.internal.pageSize.getWidth(); let y = 64;
    doc.setFont('helvetica', 'bold'); doc.setFontSize(20); doc.text(t.pdfTitle, mx, y);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(120);
    y += 18; doc.text(t.pdfBy, mx, y);
    doc.setTextColor(20); doc.setFontSize(11); y += 26;
    doc.text(`${form === 'sadel' ? t.oSadel : t.oPulpet} · ${cov}`, mx, y);
    y += 22; doc.setDrawColor(210); doc.line(mx, y, pw - mx, y);
    doc.setFont('helvetica', 'bold'); doc.text(t.csvPost, mx, y + 12); doc.text(t.csvQty, pw - mx, y + 12, { align: 'right' });
    doc.setFont('helvetica', 'normal'); y += 26;
    materialRows.forEach((m) => { doc.text(m.desc, mx, y); doc.text(m.qty, pw - mx, y, { align: 'right' }); y += 20; });
    y += 10; doc.setFontSize(9); doc.setTextColor(120);
    doc.text(t.pdfNote, mx, y);
    gaEvent('export_pdf', { tool: 'tak-kalkylator' });
    doc.save('tak-materiallista.pdf');
  };

  const seedRows = [
    r.hasTiles
      ? { desc: t.mTiles(cov), qty: r.tileCount }
      : { desc: t.soCover(cov), qty: Math.round(r.feltM2) },
    ...(r.hasBatten ? [{ desc: t.soBatten, qty: Math.round(r.battenM) }] : []),
    { desc: t.soFelt, qty: Math.round(r.feltM2) },
    ...(r.gutterM > 0 ? [{ desc: t.soGutter, qty: Math.round(r.gutterM) }, { desc: t.soStupror, qty: Math.round(r.stuprorM) }] : []),
    ...(r.scaffoldM2 > 0 ? [{ desc: t.soScaffold, qty: Math.round(r.scaffoldM2) }] : []),
    { desc: t.soLabour, qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);
  const fld = 'lm-tool-field';

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">{t.title}</h2>
        <p className="lm-tool-sub">{t.sub}</p>
      </div>

      <div className="lm-tool-grid">
        <label className={fld}><span>{t.formL}</span>
          <select value={form} onChange={(e) => setForm(e.currentTarget.value)}>
            <option value="sadel">{t.oSadel}</option>
            <option value="pulpet">{t.oPulpet}</option>
          </select></label>
        <label className={fld}><span>{t.length}</span>
          <input type="number" min="0" inputMode="decimal" value={length} placeholder={en ? 'e.g. 10' : 't.ex. 10'} onChange={(e) => setLength(e.currentTarget.value)} /></label>
        <label className={fld}><span>{t.width}</span>
          <input type="number" min="0" inputMode="decimal" value={width} placeholder={en ? 'e.g. 8' : 't.ex. 8'} onChange={(e) => setWidth(e.currentTarget.value)} /></label>
        <label className={fld}><span>{t.pitch}</span>
          <input type="number" min="0" max="80" inputMode="decimal" value={pitch} onChange={(e) => setPitch(e.currentTarget.value)} /></label>
        <label className={fld}><span>{t.overhang}</span>
          <input type="number" min="0" inputMode="decimal" value={overhang} onChange={(e) => setOverhang(e.currentTarget.value)} /></label>
        <label className={fld}><span>{t.height}</span>
          <input type="number" min="0" inputMode="decimal" value={height} onChange={(e) => setHeight(e.currentTarget.value)} /></label>
        <label className={fld}><span>{t.coveringL}</span>
          <select value={covering} onChange={(e) => { setCovering(e.currentTarget.value as Covering); setTiles(''); }}>
            <option value="betongpanna">{t.cov.betongpanna}</option>
            <option value="tegelpanna">{t.cov.tegelpanna}</option>
            <option value="plat">{t.cov.plat}</option>
            <option value="papp">{t.cov.papp}</option>
          </select></label>
        {def.tiles > 0 ? (
          <label className={fld}><span>{t.tilesPerM2(nf(def.tiles, 1))}</span>
            <input type="number" min="0" inputMode="decimal" value={tiles} placeholder={nf(def.tiles, 1)} onChange={(e) => setTiles(e.currentTarget.value)} /></label>
        ) : null}
        <label className={fld}><span>{t.spill}</span>
          <input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} /></label>

        <label className={fld}><span>{t.guttersQ}</span>
          <select value={gutters} onChange={(e) => setGutters(e.currentTarget.value)}>
            <option value="ja">{t.yes}</option><option value="nej">{t.no}</option>
          </select></label>
        {gutters === 'ja' ? (
          <>
            <label className={fld}><span>{t.downpipes}</span>
              <input type="number" min="0" inputMode="numeric" value={downpipes} onChange={(e) => setDownpipes(e.currentTarget.value)} /></label>
            <label className={fld}><span>{t.krokCC}</span>
              <input type="number" min="0" inputMode="decimal" value={krokCC} onChange={(e) => setKrokCC(e.currentTarget.value)} /></label>
          </>
        ) : null}
        <label className={fld}><span>{t.snowQ}</span>
          <select value={snorasskydd} onChange={(e) => setSnorasskydd(e.currentTarget.value)}>
            <option value="nej">{t.no}</option><option value="ja">{t.yes}</option>
          </select></label>
        <label className={fld}><span>{t.scaffoldQ}</span>
          <select value={scaffold} onChange={(e) => setScaffold(e.currentTarget.value)}>
            <option value="nej">{t.no}</option><option value="ja">{t.scaffoldYes}</option>
          </select></label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row"><span>{t.rFootprint}</span><span>{nf(r.footprint, 1)} m²</span></div>
        <div className="lm-result-row lm-result-highlight">
          <span>{t.rRoof(form === 'sadel' ? t.sadelShort : t.pulpetShort)}</span>
          <strong>{nf(r.roofArea, 1)} m²</strong>
        </div>
        {r.hasTiles ? (
          <div className="lm-result-row lm-result-total"><span>{t.rTiles}</span><strong>{nf(r.tileCount)} {t.pcs}</strong></div>
        ) : (
          <div className="lm-result-row lm-result-total"><span>{t.rCover}</span><strong>{nf(r.feltM2, 1)} m²</strong></div>
        )}
        {r.hasBatten ? <div className="lm-result-row"><span>{t.rBatten}</span><span>{nf(r.battenM)} {t.lm}</span></div> : null}
        {r.hasBatten ? <div className="lm-result-row"><span>{t.rStrolakt}</span><span>{nf(r.strolaktM)} {t.lm}</span></div> : null}
        <div className="lm-result-row"><span>{t.rFelt}</span><span>{nf(r.feltM2, 1)} m²</span></div>
        {r.nock > 0 ? <div className="lm-result-row"><span>{t.rNock}</span><span>{nf(r.nock, 1)} m</span></div> : null}
        {r.gutterM > 0 ? (
          <>
            <div className="lm-result-row"><span>{t.rGutter}</span><span>{nf(r.gutterM, 1)} m</span></div>
            <div className="lm-result-row"><span>{t.rKrok}</span><span>{nf(r.rannkrok)} {t.pcs}</span></div>
            <div className="lm-result-row"><span>{t.rStupror(nf(r.nDown))}</span><span>{nf(r.stuprorM, 1)} m</span></div>
          </>
        ) : null}
        {r.snorM > 0 ? <div className="lm-result-row"><span>{t.rSnow}</span><span>{nf(r.snorM, 1)} m</span></div> : null}
        {r.scaffoldM2 > 0 ? <div className="lm-result-row"><span>{t.rScaffold}</span><span>{nf(r.scaffoldM2, 1)} m²</span></div> : null}
        <p className="lm-result-fine">{t.fine}</p>
        <div className="lm-tool-actions" style={{ marginTop: 16 }}>
          <a className="lm-tool-button" href={r.roofArea > 0 ? offertUrl : undefined} aria-disabled={r.roofArea <= 0} onClick={() => gaEvent('offert_from_calculator', { tool: 'tak-kalkylator' })}>
            {t.offert}
          </a>
          <a className="lm-tool-secondary" href={r.roofArea > 0 ? fakturaUrl : undefined} aria-disabled={r.roofArea <= 0} onClick={() => gaEvent('faktura_from_calculator', { tool: 'tak-kalkylator' })}>
            {t.faktura}
          </a>
          <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={r.roofArea <= 0}>{t.excel}</button>
          <button type="button" className="lm-tool-secondary" onClick={() => void exportPdf()} disabled={r.roofArea <= 0}>{t.pdf}</button>
        </div>
      </div>
    </div>
  );
}
