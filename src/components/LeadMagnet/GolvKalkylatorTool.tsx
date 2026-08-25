import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import type { CalcLocale } from '../../lib/locale';
import { downloadMaterialPdf } from '../../lib/materialPdf';
import { fakturaHref, offertHref } from '../../lib/offert';

// Professional flooring / tiling calculator. Area + waste -> needed m² and
// packs; laying pattern presets the waste (straight vs diagonal). For tiles it
// also estimates tile adhesive (fästmassa) in kg and 20 kg bags — the job the
// retired kakelfix tool used to do. Bilingual: sv default, en for /en/verktyg.

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

type Material = 'klickgolv' | 'kakel';

export default function GolvKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const nf = (v: number, d = 0) => v.toLocaleString(en ? 'en-GB' : 'sv-SE', { maximumFractionDigits: d });
  const t = en
    ? {
        title: 'Flooring & tile calculator',
        sub: 'Enter the area and laying pattern and we work out the number of packs – for flooring, laminate, floor and wall tiles. For tiles you also get the tile adhesive needed.',
        materialL: 'Material', mFloor: 'Flooring / laminate / parquet', mTile: 'Wall / floor tiles',
        area: 'Area (m²)', patternL: 'Laying', pStraight: 'Straight (less waste)', pDiagonal: 'Diagonal (more waste)',
        spill: 'Waste (%)', perPack: 'm² per pack', fixPerM2: 'Tile adhesive (kg/m²)', fogPerM2: 'Grout (kg/m²)',
        rNeed: 'Need incl. waste', rPacks: 'Number of packs', rFix: 'Tile adhesive', rFog: 'Grout (approx.)',
        bag: 'bag', bags: 'bags',
        fine: 'An estimate. Diagonal laying and many angles increase waste. Adhesive consumption depends on trowel notch and tile size (often 3–6 kg/m²). Grout depends greatly on tile size and joint width (often ~0.3–1 kg/m²) – adjust the value. m² per pack is on the product.',
        offert: 'Create quote from this', faktura: 'Create invoice', excel: 'Export Excel', pdf: 'Export PDF',
        pcs: 'pcs',
        matFloor: 'Flooring/laminate', matTile: 'Wall/floor tiles',
        csvTitle: 'Flooring & tile calculator', post: 'Item', qty: 'Quantity',
        mNeed: 'Need incl. waste', mPacks: 'Number of packs', mFix: 'Tile adhesive', mFog: 'Grout (approx.)',
        pdfTitle: 'Flooring & tiles – material list',
        soPacks: (m: string) => `${m} (packs)`, soFix: 'Tile adhesive (20 kg bag)', soLabour: 'Laying labour',
      }
    : {
        title: 'Golv- och kakelkalkylator',
        sub: 'Fyll i ytan och läggningssätt så räknar vi ut antal förpackningar – för golv, laminat, klinker och kakel. För kakel får du även åtgången fästmassa.',
        materialL: 'Material', mFloor: 'Golv / laminat / parkett', mTile: 'Kakel / klinker',
        area: 'Yta (m²)', patternL: 'Läggning', pStraight: 'Rak (mindre spill)', pDiagonal: 'Diagonal (mer spill)',
        spill: 'Spill (%)', perPack: 'm² per förpackning', fixPerM2: 'Fästmassa (kg/m²)', fogPerM2: 'Fogbruk (kg/m²)',
        rNeed: 'Behov inkl. spill', rPacks: 'Antal förpackningar', rFix: 'Fästmassa', rFog: 'Fogbruk (ca)',
        bag: 'säck', bags: 'säck',
        fine: 'En uppskattning. Diagonal läggning och många vinklar ökar spillet. Fästmassans åtgång beror på tandning och plattstorlek (ofta 3–6 kg/m²). Fogbruket beror mycket på plattstorlek och fogbredd (ofta ca 0,3–1 kg/m²) – justera värdet. m² per förpackning står på produkten.',
        offert: 'Skapa offert av det här', faktura: 'Skapa faktura', excel: 'Exportera Excel', pdf: 'Exportera PDF',
        pcs: 'st',
        matFloor: 'Golv/laminat', matTile: 'Kakel/klinker',
        csvTitle: 'Golv- och kakelkalkylator', post: 'Post', qty: 'Mängd',
        mNeed: 'Behov inkl. spill', mPacks: 'Antal förpackningar', mFix: 'Fästmassa', mFog: 'Fogbruk (ca)',
        pdfTitle: 'Golv & kakel – materiallista',
        soPacks: (m: string) => `${m} (förpackningar)`, soFix: 'Fästmassa (säck 20 kg)', soLabour: 'Arbete läggning',
      };

  const [material, setMaterial] = useState<Material>('klickgolv');
  const [area, setArea] = useState('');
  const [pattern, setPattern] = useState('rak'); // rak | diagonal
  const [spill, setSpill] = useState('8');
  const [perPack, setPerPack] = useState('2.5');
  const [fixPerM2, setFixPerM2] = useState('4'); // kg fästmassa per m²
  const [fogPerM2, setFogPerM2] = useState('0.5'); // kg fogbruk per m² (grovt)

  const r = useMemo(() => {
    const base = num(area);
    const need = base * (1 + num(spill) / 100);
    const pack = num(perPack);
    const packs = pack > 0 ? Math.ceil(need / pack) : 0;
    const isTile = material === 'kakel';
    const fixKg = isTile ? base * num(fixPerM2) : 0;
    const fixBags = fixKg > 0 ? Math.ceil(fixKg / 20) : 0; // säck 20 kg
    const fogKg = isTile ? base * num(fogPerM2) : 0;
    return { need, packs, fixKg, fixBags, fogKg, isTile };
  }, [material, area, spill, perPack, fixPerM2, fogPerM2]);

  const onPattern = (v: string) => {
    setPattern(v);
    setSpill(v === 'diagonal' ? '12' : '8');
  };

  const matLabel = material === 'kakel' ? t.matTile : t.matFloor;

  const seedRows = [
    { desc: t.soPacks(matLabel), qty: r.packs },
    ...(r.isTile && r.fixBags > 0 ? [{ desc: t.soFix, qty: r.fixBags }] : []),
    { desc: t.soLabour, qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);

  const exportCsv = () => {
    gaEvent('export_excel', { tool: 'golv-kalkylator' });
    downloadCsvRows(
      [
        [t.csvTitle, 'byggexp.se'],
        [t.materialL, matLabel],
        [],
        [t.post, t.qty],
        [t.mNeed, `${nf(r.need, 1)} m²`],
        [t.mPacks, `${nf(r.packs)} ${t.pcs}`],
        ...(r.isTile ? [[t.mFix, `${nf(r.fixKg)} kg (${nf(r.fixBags)} ${t.bag})`]] : []),
        ...(r.isTile && r.fogKg > 0 ? [[t.mFog, `${nf(r.fogKg, 1)} kg`]] : []),
      ],
      'golv-materiallista.csv',
    );
  };

  const exportPdf = () => void downloadMaterialPdf({
    title: t.pdfTitle,
    meta: matLabel,
    rows: [
      { desc: t.mNeed, qty: `${nf(r.need, 1)} m²` },
      { desc: t.mPacks, qty: `${nf(r.packs)} ${t.pcs}` },
      ...(r.isTile && r.fixBags > 0 ? [{ desc: t.mFix, qty: `${nf(r.fixKg)} kg (${nf(r.fixBags)} ${t.bag})` }] : []),
      ...(r.isTile && r.fogKg > 0 ? [{ desc: t.mFog, qty: `${nf(r.fogKg, 1)} kg` }] : []),
    ],
    filename: 'golv-materiallista.pdf',
    tool: 'golv-kalkylator',
  });

  const disabled = r.packs <= 0;

  return (
    <div className="lm-tool lm-tool--split">

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>{t.materialL}</span>
          <select value={material} onChange={(e) => setMaterial(e.currentTarget.value as Material)}>
            <option value="klickgolv">{t.mFloor}</option>
            <option value="kakel">{t.mTile}</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>{t.area}</span>
          <input type="number" min="0" inputMode="decimal" value={area} placeholder={en ? 'e.g. 25' : 't.ex. 25'} onChange={(e) => setArea(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.patternL}</span>
          <select value={pattern} onChange={(e) => onPattern(e.currentTarget.value)}>
            <option value="rak">{t.pStraight}</option>
            <option value="diagonal">{t.pDiagonal}</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>{t.spill}</span>
          <input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.perPack}</span>
          <input type="number" min="0" inputMode="decimal" value={perPack} onChange={(e) => setPerPack(e.currentTarget.value)} />
        </label>
        {r.isTile ? (
          <label className="lm-tool-field">
            <span>{t.fixPerM2}</span>
            <input type="number" min="0" inputMode="decimal" value={fixPerM2} onChange={(e) => setFixPerM2(e.currentTarget.value)} />
          </label>
        ) : null}
        {r.isTile ? (
          <label className="lm-tool-field">
            <span>{t.fogPerM2}</span>
            <input type="number" min="0" inputMode="decimal" value={fogPerM2} onChange={(e) => setFogPerM2(e.currentTarget.value)} />
          </label>
        ) : null}
      </div>

      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight">
          <span>{t.rNeed}</span>
          <strong>{nf(r.need, 1)} m²</strong>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>{t.rPacks}</span>
          <strong>{nf(r.packs)} {t.pcs}</strong>
        </div>
        {r.isTile && r.fixKg > 0 ? (
          <div className="lm-result-row">
            <span>{t.rFix}</span>
            <span>{nf(r.fixKg)} kg · {nf(r.fixBags)} {t.bag} (20 kg)</span>
          </div>
        ) : null}
        {r.isTile && r.fogKg > 0 ? (
          <div className="lm-result-row">
            <span>{t.rFog}</span>
            <span>{nf(r.fogKg, 1)} kg</span>
          </div>
        ) : null}
        <p className="lm-result-fine">{t.fine}</p>
      </div>

      <div className="lm-tool-actions" style={{ marginTop: 16 }}>
        <a className="lm-tool-button" href={disabled ? undefined : offertUrl} aria-disabled={disabled} onClick={() => gaEvent('offert_from_calculator', { tool: 'golv-kalkylator' })}>
          {t.offert}
        </a>
        <a className="lm-tool-secondary" href={disabled ? undefined : fakturaUrl} aria-disabled={disabled} onClick={() => gaEvent('faktura_from_calculator', { tool: 'golv-kalkylator' })}>
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
