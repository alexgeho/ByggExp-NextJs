import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import type { CalcLocale } from '../../lib/locale';
import { downloadMaterialPdf } from '../../lib/materialPdf';
import { fakturaHref, offertHref } from '../../lib/offert';

// Professional insulation calculator. From area and thickness it returns the
// insulated area, the volume (m³), the number of packs and an approximate
// U-value for the insulation layer (U ≈ lambda / thickness). Bilingual: sv
// default, en for /en/verktyg; nb falls back to sv text.

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

export default function IsoleringKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const nf = (v: number, d = 0) => v.toLocaleString(en ? 'en-GB' : 'sv-SE', { maximumFractionDigits: d });
  const t = en
    ? {
        title: 'Insulation calculator – quantity & U-value',
        sub: 'Enter the area and insulation thickness and we work out the number of packs, the volume and an approximate U-value for the insulation layer. The default is mineral wool with lambda 0.036 W/mK.',
        area: 'Area to insulate (m²)', thickness: 'Thickness (mm)', lambda: 'Lambda (W/mK)', perPack: 'm² per pack', spill: 'Waste (%)',
        rNeed: 'Need incl. waste', rPacks: 'Number of packs', rVolume: 'Insulation volume', rU: 'U-value, insulation layer (approx.)',
        pcs: 'pcs',
        fine: 'An estimate. How many m² a pack covers depends on the thickness – the value is on the pack. The U-value applies only to the insulation layer; a correct U-value for the whole wall also accounts for studs, boards and thermal bridges. Boards 560 mm wide fit studs at c/c 600 mm.',
        offert: 'Create quote from this', faktura: 'Create invoice', excel: 'Export Excel', pdf: 'Export PDF',
        csvTitle: 'Insulation calculator', csvThick: 'Thickness', post: 'Item', qty: 'Quantity',
        mNeed: 'Need incl. waste', mPacks: 'Number of packs', mVolume: 'Insulation volume', mU: 'U-value, insulation layer (approx.)',
        pdfTitle: 'Insulation – material list', pdfMeta: (th: string, l: string) => `${th} mm · lambda ${l} W/mK`,
        pdfNote: 'The U-value applies only to the insulation layer. A correct whole-wall U-value accounts for studs, boards and thermal bridges.',
        soIso: (th: string) => `Insulation ${th} mm (packs)`, soLabour: 'Insulation labour',
      }
    : {
        title: 'Isoleringskalkylator – mängd & U-värde',
        sub: 'Ange yta och isoleringstjocklek så räknar vi ut antal förpackningar, volym och ett ungefärligt U-värde för isolerskiktet. Standard är mineralull med lambda 0,036 W/mK.',
        area: 'Yta att isolera (m²)', thickness: 'Tjocklek (mm)', lambda: 'Lambda (W/mK)', perPack: 'm² per förpackning', spill: 'Spill (%)',
        rNeed: 'Behov inkl. spill', rPacks: 'Antal förpackningar', rVolume: 'Volym isolering', rU: 'U-värde, isolerskiktet (ca)',
        pcs: 'st',
        fine: 'En uppskattning. Hur många m² en förpackning täcker beror på tjockleken – värdet står på förpackningen. U-värdet gäller enbart isolerskiktet; ett korrekt U-värde för hela väggen tar även hänsyn till reglar, skivor och köldbryggor. Skivor 560 mm breda passar reglar c/c 600 mm.',
        offert: 'Skapa offert av det här', faktura: 'Skapa faktura', excel: 'Exportera Excel', pdf: 'Exportera PDF',
        csvTitle: 'Isoleringskalkylator', csvThick: 'Tjocklek', post: 'Post', qty: 'Mängd',
        mNeed: 'Behov inkl. spill', mPacks: 'Antal förpackningar', mVolume: 'Volym isolering', mU: 'U-värde, isolerskiktet (ca)',
        pdfTitle: 'Isolering – materiallista', pdfMeta: (th: string, l: string) => `${th} mm · lambda ${l} W/mK`,
        pdfNote: 'U-värdet gäller enbart isolerskiktet. Ett korrekt U-värde för hela väggen tar hänsyn till reglar, skivor och köldbryggor.',
        soIso: (th: string) => `Isolering ${th} mm (förpackningar)`, soLabour: 'Arbete isolering',
      };

  const [area, setArea] = useState('');
  const [thickness, setThickness] = useState('170'); // mm
  const [lambda, setLambda] = useState('0.036'); // W/mK
  const [perPack, setPerPack] = useState('5.4'); // m² per förpackning
  const [spill, setSpill] = useState('5');

  const r = useMemo(() => {
    const need = num(area) * (1 + num(spill) / 100);
    const th = num(thickness) / 1000; // m
    const volume = need * th;
    const p = num(perPack);
    const packs = p > 0 ? Math.ceil(need / p) : 0;
    const lam = num(lambda);
    const uValue = th > 0 && lam > 0 ? lam / th : 0; // enbart isolerskiktet
    return { need, volume, packs, uValue };
  }, [area, thickness, lambda, perPack, spill]);

  const exportCsv = () => {
    const rows: (string | number)[][] = [
      [t.csvTitle, 'byggexp.se'],
      [t.csvThick, `${thickness} mm`],
      [t.lambda, `${lambda} W/mK`],
      [],
      [t.post, t.qty],
      [t.mNeed, `${nf(r.need, 1)} m²`],
      [t.mPacks, `${nf(r.packs)} ${t.pcs}`],
      [t.mVolume, `${nf(r.volume, 1)} m³`],
      [t.mU, `${nf(r.uValue, 2)} W/m²K`],
    ];
    gaEvent('export_excel', { tool: 'isolering-kalkylator' });
    downloadCsvRows(rows, 'isolering-materiallista.csv');
  };

  const exportPdf = () => void downloadMaterialPdf({
    title: t.pdfTitle,
    meta: t.pdfMeta(thickness, lambda),
    rows: [
      { desc: t.mNeed, qty: `${nf(r.need, 1)} m²` },
      { desc: t.mPacks, qty: `${nf(r.packs)} ${t.pcs}` },
      { desc: t.mVolume, qty: `${nf(r.volume, 1)} m³` },
      { desc: t.mU, qty: `${nf(r.uValue, 2)} W/m²K` },
    ],
    filename: 'isolering-materiallista.pdf',
    tool: 'isolering-kalkylator',
    note: t.pdfNote,
  });

  const seedRows = [
    { desc: t.soIso(thickness), qty: r.packs },
    { desc: t.soLabour, qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);

  return (
    <div className="lm-tool lm-tool--split">

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>{t.area}</span>
          <input type="number" min="0" inputMode="decimal" value={area} placeholder={en ? 'e.g. 50' : 't.ex. 50'} onChange={(e) => setArea(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.thickness}</span>
          <select value={thickness} onChange={(e) => setThickness(e.currentTarget.value)}>
            {['45', '70', '95', '120', '145', '170', '195', '220', '245'].map((th) => (
              <option key={th} value={th}>{th} mm</option>
            ))}
          </select>
        </label>
        <label className="lm-tool-field">
          <span>{t.lambda}</span>
          <input type="number" min="0" step="0.001" inputMode="decimal" value={lambda} onChange={(e) => setLambda(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.perPack}</span>
          <input type="number" min="0" inputMode="decimal" value={perPack} onChange={(e) => setPerPack(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.spill}</span>
          <input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} />
        </label>
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
        <div className="lm-result-row">
          <span>{t.rVolume}</span>
          <span>{nf(r.volume, 1)} m³</span>
        </div>
        <div className="lm-result-row">
          <span>{t.rU}</span>
          <span>{nf(r.uValue, 2)} W/m²K</span>
        </div>
        <p className="lm-result-fine">{t.fine}</p>
        <div className="lm-tool-actions" style={{ marginTop: 16 }}>
          <a className="lm-tool-button" href={r.packs > 0 ? offertUrl : undefined} aria-disabled={r.packs <= 0} onClick={() => gaEvent('offert_from_calculator', { tool: 'isolering-kalkylator' })}>
            {t.offert}
          </a>
          <a className="lm-tool-secondary" href={r.packs > 0 ? fakturaUrl : undefined} aria-disabled={r.packs <= 0} onClick={() => gaEvent('faktura_from_calculator', { tool: 'isolering-kalkylator' })}>
            {t.faktura}
          </a>
          <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={r.packs <= 0}>
            {t.excel}
          </button>
          <button type="button" className="lm-tool-secondary" onClick={exportPdf} disabled={r.packs <= 0}>
            {t.pdf}
          </button>
        </div>
      </div>
    </div>
  );
}
