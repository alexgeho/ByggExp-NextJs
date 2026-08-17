import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import { fakturaHref, offertHref } from '../../lib/offert';

// Professional insulation calculator. From area and thickness it returns the
// insulated area, the volume (m³), the number of packs and an approximate
// U-value for the insulation layer (U ≈ lambda / thickness). Mineral wool
// lambda defaults to 0,036 W/mK; pack coverage depends on thickness so it is
// editable. Boards are 560 mm wide → fit stud frames at c/c 600 mm.

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}
const nf = (v: number, d = 0) =>
  v.toLocaleString('sv-SE', { maximumFractionDigits: d });

export default function IsoleringKalkylatorTool() {
  const [area, setArea] = useState('');
  const [thickness, setThickness] = useState('170'); // mm
  const [lambda, setLambda] = useState('0.036'); // W/mK
  const [perPack, setPerPack] = useState('5.4'); // m² per förpackning
  const [spill, setSpill] = useState('5');

  const r = useMemo(() => {
    const need = num(area) * (1 + num(spill) / 100);
    const t = num(thickness) / 1000; // m
    const volume = need * t;
    const p = num(perPack);
    const packs = p > 0 ? Math.ceil(need / p) : 0;
    const lam = num(lambda);
    const uValue = t > 0 && lam > 0 ? lam / t : 0; // enbart isolerskiktet
    return { need, volume, packs, uValue };
  }, [area, thickness, lambda, perPack, spill]);

  const exportCsv = () => {
    const rows: (string | number)[][] = [
      ['Isoleringskalkylator', 'byggexp.se'],
      ['Tjocklek', `${thickness} mm`],
      ['Lambda', `${lambda} W/mK`],
      [],
      ['Post', 'Mängd'],
      ['Behov inkl. spill', `${nf(r.need, 1)} m²`],
      ['Antal förpackningar', `${nf(r.packs)} st`],
      ['Volym isolering', `${nf(r.volume, 1)} m³`],
      ['U-värde, isolerskiktet (ca)', `${nf(r.uValue, 2)} W/m²K`],
    ];
    gaEvent('export_excel', { tool: 'isolering-kalkylator' });
    downloadCsvRows(rows, 'isolering-materiallista.csv');
  };

  const seedRows = [
    { desc: `Isolering ${thickness} mm (förpackningar)`, qty: r.packs },
    { desc: 'Arbete isolering', qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Isoleringskalkylator – mängd & U-värde</h2>
        <p className="lm-tool-sub">
          Ange yta och isoleringstjocklek så räknar vi ut antal förpackningar,
          volym och ett ungefärligt U-värde för isolerskiktet. Standard är
          mineralull med lambda 0,036 W/mK.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Yta att isolera (m²)</span>
          <input type="number" min="0" inputMode="decimal" value={area} placeholder="t.ex. 50" onChange={(e) => setArea(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Tjocklek (mm)</span>
          <select value={thickness} onChange={(e) => setThickness(e.currentTarget.value)}>
            {['45', '70', '95', '120', '145', '170', '195', '220', '245'].map((t) => (
              <option key={t} value={t}>{t} mm</option>
            ))}
          </select>
        </label>
        <label className="lm-tool-field">
          <span>Lambda (W/mK)</span>
          <input type="number" min="0" step="0.001" inputMode="decimal" value={lambda} onChange={(e) => setLambda(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>m² per förpackning</span>
          <input type="number" min="0" inputMode="decimal" value={perPack} onChange={(e) => setPerPack(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Spill (%)</span>
          <input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight">
          <span>Behov inkl. spill</span>
          <strong>{nf(r.need, 1)} m²</strong>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>Antal förpackningar</span>
          <strong>{nf(r.packs)} st</strong>
        </div>
        <div className="lm-result-row">
          <span>Volym isolering</span>
          <span>{nf(r.volume, 1)} m³</span>
        </div>
        <div className="lm-result-row">
          <span>U-värde, isolerskiktet (ca)</span>
          <span>{nf(r.uValue, 2)} W/m²K</span>
        </div>
        <p className="lm-result-fine">
          En uppskattning. Hur många m² en förpackning täcker beror på tjockleken –
          värdet står på förpackningen. U-värdet gäller enbart isolerskiktet; ett
          korrekt U-värde för hela väggen tar även hänsyn till reglar, skivor och
          köldbryggor. Skivor 560 mm breda passar reglar c/c 600 mm.
        </p>
        <div className="lm-tool-actions" style={{ marginTop: 16 }}>
          <a className="lm-tool-button" href={r.packs > 0 ? offertUrl : undefined} aria-disabled={r.packs <= 0} onClick={() => gaEvent('offert_from_calculator', { tool: 'isolering-kalkylator' })}>
            Skapa offert av det här
          </a>
          <a className="lm-tool-secondary" href={r.packs > 0 ? fakturaUrl : undefined} aria-disabled={r.packs <= 0} onClick={() => gaEvent('faktura_from_calculator', { tool: 'isolering-kalkylator' })}>
            Skapa faktura
          </a>
          <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={r.packs <= 0}>
            Exportera till Excel
          </button>
        </div>
      </div>
    </div>
  );
}
