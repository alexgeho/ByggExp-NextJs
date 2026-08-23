import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import { fakturaHref, offertHref } from '../../lib/offert';

// Professional roof calculator. Roof area for a pitched roof is the footprint
// (incl. eaves overhang) ÷ cos(pitch). From the area it estimates the covering
// bill (tiles/plåt/papp, bärläkt, ströläkt, underlagspapp) and — optionally —
// takavvattning (hängrännor by eaves length, stuprör by count × building height,
// rännkrokar), snörasskydd, and byggnadsställning (perimeter × work height) for
// roof work. Optional items default to sensible values and can be turned off.

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}
const nf = (v: number, d = 0) =>
  v.toLocaleString('sv-SE', { maximumFractionDigits: d });

type Covering = 'betongpanna' | 'tegelpanna' | 'plat' | 'papp';

const DEFAULTS: Record<Covering, { tiles: number; gauge: number }> = {
  betongpanna: { tiles: 9.5, gauge: 345 },
  tegelpanna: { tiles: 13, gauge: 320 },
  plat: { tiles: 0, gauge: 600 },
  papp: { tiles: 0, gauge: 0 },
};

export default function TakKalkylatorTool() {
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

  const coveringLabel: Record<Covering, string> = {
    betongpanna: 'Betongpanna', tegelpanna: 'Tegelpanna', plat: 'Plåt (profil)', papp: 'Papp / duk',
  };

  const materialRows = useMemo(() => {
    const rows: { desc: string; qty: string }[] = [
      { desc: 'Takyta', qty: `${nf(r.roofArea, 1)} m²` },
    ];
    if (r.hasTiles) rows.push({ desc: `Takpannor (${coveringLabel[covering]})`, qty: `${nf(r.tileCount)} st` });
    else rows.push({ desc: `Taktäckning ${coveringLabel[covering]}`, qty: `${nf(r.feltM2, 1)} m²` });
    if (r.hasBatten) { rows.push({ desc: 'Bärläkt', qty: `${nf(r.battenM)} lpm` }); rows.push({ desc: 'Ströläkt', qty: `${nf(r.strolaktM)} lpm` }); }
    rows.push({ desc: 'Underlagspapp', qty: `${nf(r.feltM2, 1)} m²` });
    if (r.nock > 0) rows.push({ desc: 'Nock (längd)', qty: `${nf(r.nock, 1)} m` });
    if (r.gutterM > 0) {
      rows.push({ desc: 'Hängrännor', qty: `${nf(r.gutterM, 1)} m` });
      rows.push({ desc: 'Rännkrokar', qty: `${nf(r.rannkrok)} st` });
      rows.push({ desc: `Stuprör (${nf(r.nDown)} st)`, qty: `${nf(r.stuprorM, 1)} m` });
    }
    if (r.snorM > 0) rows.push({ desc: 'Snörasskydd', qty: `${nf(r.snorM, 1)} m` });
    if (r.scaffoldM2 > 0) rows.push({ desc: 'Byggnadsställning', qty: `${nf(r.scaffoldM2, 1)} m²` });
    return rows;
  }, [r, covering]);

  const exportCsv = () => {
    const rows: (string | number)[][] = [
      ['Takkalkylator', 'byggexp.se'],
      ['Takform', form === 'sadel' ? 'Sadeltak' : 'Pulpettak'],
      ['Taktäckning', coveringLabel[covering]],
      [], ['Post', 'Mängd'],
      ...materialRows.map((m) => [m.desc, m.qty]),
    ];
    gaEvent('export_excel', { tool: 'tak-kalkylator' });
    downloadCsvRows(rows, 'tak-materiallista.csv');
  };

  const exportPdf = async () => {
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    const mx = 48; const pw = doc.internal.pageSize.getWidth(); let y = 64;
    doc.setFont('helvetica', 'bold'); doc.setFontSize(20); doc.text('Tak – materiallista', mx, y);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(120);
    y += 18; doc.text('Skapad med ByggExp – byggexp.se', mx, y);
    doc.setTextColor(20); doc.setFontSize(11); y += 26;
    doc.text(`${form === 'sadel' ? 'Sadeltak' : 'Pulpettak'} · ${coveringLabel[covering]}`, mx, y);
    y += 22; doc.setDrawColor(210); doc.line(mx, y, pw - mx, y);
    doc.setFont('helvetica', 'bold'); doc.text('Post', mx, y + 12); doc.text('Mängd', pw - mx, y + 12, { align: 'right' });
    doc.setFont('helvetica', 'normal'); y += 26;
    materialRows.forEach((m) => { doc.text(m.desc, mx, y); doc.text(m.qty, pw - mx, y, { align: 'right' }); y += 20; });
    y += 10; doc.setFontSize(9); doc.setTextColor(120);
    doc.text('Uppskattning. Kontrollera mot tillverkarens läggningsanvisning.', mx, y);
    gaEvent('export_pdf', { tool: 'tak-kalkylator' });
    doc.save('tak-materiallista.pdf');
  };

  const seedRows = [
    r.hasTiles
      ? { desc: `Takpannor (${coveringLabel[covering]})`, qty: r.tileCount }
      : { desc: `Taktäckning ${coveringLabel[covering]} (m²)`, qty: Math.round(r.feltM2) },
    ...(r.hasBatten ? [{ desc: 'Bärläkt (lpm)', qty: Math.round(r.battenM) }] : []),
    { desc: 'Underlagspapp (m²)', qty: Math.round(r.feltM2) },
    ...(r.gutterM > 0 ? [{ desc: 'Hängrännor (m)', qty: Math.round(r.gutterM) }, { desc: 'Stuprör (m)', qty: Math.round(r.stuprorM) }] : []),
    ...(r.scaffoldM2 > 0 ? [{ desc: 'Byggnadsställning (m²)', qty: Math.round(r.scaffoldM2) }] : []),
    { desc: 'Arbete taktäckning', qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);
  const fld = 'lm-tool-field';

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Takkalkylator – yta, pannor, avvattning &amp; ställning</h2>
        <p className="lm-tool-sub">
          Ange husets mått och taklutning så räknar vi takytan och materialet:
          takpannor, läkt och papp – plus (valfritt) hängrännor, stuprör,
          snörasskydd och byggnadsställning för takarbetet. Exportera till Excel
          eller PDF.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className={fld}><span>Takform</span>
          <select value={form} onChange={(e) => setForm(e.currentTarget.value)}>
            <option value="sadel">Sadeltak (två fall)</option>
            <option value="pulpet">Pulpettak (ett fall)</option>
          </select></label>
        <label className={fld}><span>Byggnadens längd (m)</span>
          <input type="number" min="0" inputMode="decimal" value={length} placeholder="t.ex. 10" onChange={(e) => setLength(e.currentTarget.value)} /></label>
        <label className={fld}><span>Byggnadens bredd (m)</span>
          <input type="number" min="0" inputMode="decimal" value={width} placeholder="t.ex. 8" onChange={(e) => setWidth(e.currentTarget.value)} /></label>
        <label className={fld}><span>Taklutning (grader)</span>
          <input type="number" min="0" max="80" inputMode="decimal" value={pitch} onChange={(e) => setPitch(e.currentTarget.value)} /></label>
        <label className={fld}><span>Takutsprång (m)</span>
          <input type="number" min="0" inputMode="decimal" value={overhang} onChange={(e) => setOverhang(e.currentTarget.value)} /></label>
        <label className={fld}><span>Byggnadshöjd till takfot (m)</span>
          <input type="number" min="0" inputMode="decimal" value={height} onChange={(e) => setHeight(e.currentTarget.value)} /></label>
        <label className={fld}><span>Taktäckning</span>
          <select value={covering} onChange={(e) => { setCovering(e.currentTarget.value as Covering); setTiles(''); }}>
            <option value="betongpanna">Betongpanna</option>
            <option value="tegelpanna">Tegelpanna</option>
            <option value="plat">Plåt (profil)</option>
            <option value="papp">Papp / duk</option>
          </select></label>
        {def.tiles > 0 ? (
          <label className={fld}><span>Pannor per m² (standard {nf(def.tiles, 1)})</span>
            <input type="number" min="0" inputMode="decimal" value={tiles} placeholder={nf(def.tiles, 1)} onChange={(e) => setTiles(e.currentTarget.value)} /></label>
        ) : null}
        <label className={fld}><span>Spill / överlapp (%)</span>
          <input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} /></label>

        <label className={fld}><span>Hängrännor &amp; stuprör?</span>
          <select value={gutters} onChange={(e) => setGutters(e.currentTarget.value)}>
            <option value="ja">Ja</option><option value="nej">Nej</option>
          </select></label>
        {gutters === 'ja' ? (
          <>
            <label className={fld}><span>Antal stuprör</span>
              <input type="number" min="0" inputMode="numeric" value={downpipes} onChange={(e) => setDownpipes(e.currentTarget.value)} /></label>
            <label className={fld}><span>Rännkrok c/c (m)</span>
              <input type="number" min="0" inputMode="decimal" value={krokCC} onChange={(e) => setKrokCC(e.currentTarget.value)} /></label>
          </>
        ) : null}
        <label className={fld}><span>Snörasskydd?</span>
          <select value={snorasskydd} onChange={(e) => setSnorasskydd(e.currentTarget.value)}>
            <option value="nej">Nej</option><option value="ja">Ja</option>
          </select></label>
        <label className={fld}><span>Byggnadsställning?</span>
          <select value={scaffold} onChange={(e) => setScaffold(e.currentTarget.value)}>
            <option value="nej">Nej</option><option value="ja">Ja (fasadyta)</option>
          </select></label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row"><span>Byggnadens grundyta</span><span>{nf(r.footprint, 1)} m²</span></div>
        <div className="lm-result-row lm-result-highlight">
          <span>Takyta ({form === 'sadel' ? 'sadeltak' : 'pulpettak'})</span>
          <strong>{nf(r.roofArea, 1)} m²</strong>
        </div>
        {r.hasTiles ? (
          <div className="lm-result-row lm-result-total"><span>Antal takpannor (ca)</span><strong>{nf(r.tileCount)} st</strong></div>
        ) : (
          <div className="lm-result-row lm-result-total"><span>Taktäckning inkl. överlapp</span><strong>{nf(r.feltM2, 1)} m²</strong></div>
        )}
        {r.hasBatten ? <div className="lm-result-row"><span>Bärläkt</span><span>{nf(r.battenM)} lpm</span></div> : null}
        {r.hasBatten ? <div className="lm-result-row"><span>Ströläkt</span><span>{nf(r.strolaktM)} lpm</span></div> : null}
        <div className="lm-result-row"><span>Underlagspapp (ca)</span><span>{nf(r.feltM2, 1)} m²</span></div>
        {r.nock > 0 ? <div className="lm-result-row"><span>Nock (längd)</span><span>{nf(r.nock, 1)} m</span></div> : null}
        {r.gutterM > 0 ? (
          <>
            <div className="lm-result-row"><span>Hängrännor</span><span>{nf(r.gutterM, 1)} m</span></div>
            <div className="lm-result-row"><span>Rännkrokar</span><span>{nf(r.rannkrok)} st</span></div>
            <div className="lm-result-row"><span>Stuprör ({nf(r.nDown)} st)</span><span>{nf(r.stuprorM, 1)} m</span></div>
          </>
        ) : null}
        {r.snorM > 0 ? <div className="lm-result-row"><span>Snörasskydd</span><span>{nf(r.snorM, 1)} m</span></div> : null}
        {r.scaffoldM2 > 0 ? <div className="lm-result-row"><span>Byggnadsställning (fasadyta)</span><span>{nf(r.scaffoldM2, 1)} m²</span></div> : null}
        <p className="lm-result-fine">
          Takyta = grundyta (inkl. utsprång) ÷ cos(taklutning). Hängrännor räknas
          på takfotslängden, stuprör på antal × byggnadshöjd, och ställning som
          fasadyta (omkrets × arbetshöjd). Antal pannor och läktavstånd beror på
          modell – följ tillverkarens läggningsanvisning.
        </p>
        <div className="lm-tool-actions" style={{ marginTop: 16 }}>
          <a className="lm-tool-button" href={r.roofArea > 0 ? offertUrl : undefined} aria-disabled={r.roofArea <= 0} onClick={() => gaEvent('offert_from_calculator', { tool: 'tak-kalkylator' })}>
            Skapa offert av det här
          </a>
          <a className="lm-tool-secondary" href={r.roofArea > 0 ? fakturaUrl : undefined} aria-disabled={r.roofArea <= 0} onClick={() => gaEvent('faktura_from_calculator', { tool: 'tak-kalkylator' })}>
            Skapa faktura
          </a>
          <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={r.roofArea <= 0}>Exportera Excel</button>
          <button type="button" className="lm-tool-secondary" onClick={() => void exportPdf()} disabled={r.roofArea <= 0}>Exportera PDF</button>
        </div>
      </div>
    </div>
  );
}
