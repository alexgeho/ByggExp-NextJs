import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import { downloadMaterialPdf } from '../../lib/materialPdf';
import { fakturaHref, offertHref } from '../../lib/offert';

// Professional paint calculator. Litres = (area − openings) × coats ÷ coverage,
// plus waste. Coverage (m²/litre) is preset per surface type (interior wall/
// ceiling, wood façade, rendered façade) but editable, and door/window openings
// can be deducted. Also suggests a practical can size to buy.

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}
const nf = (v: number, d = 0) =>
  v.toLocaleString('sv-SE', { maximumFractionDigits: d });

type Surface = 'vagg' | 'tak' | 'fasadtra' | 'fasadputs';

// Default coverage per coat (m²/litre), typical Swedish figures. Interior
// wall/ceiling paints (Beckers Interio, Alcro) state ~8–10 m²/l per coat; 8 is
// a realistic-but-safe default (field is editable).
const COVERAGE: Record<Surface, number> = {
  vagg: 8,
  tak: 8,
  fasadtra: 5,
  fasadputs: 4,
};

export default function FargKalkylatorTool() {
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
    vagg: 'Innervägg',
    tak: 'Innertak',
    fasadtra: 'Fasad – trä',
    fasadputs: 'Fasad – puts',
  };

  const exportCsv = () => {
    const rows: (string | number)[][] = [
      ['Färgkalkylator', 'byggexp.se'],
      ['Yta / färgtyp', surfaceLabel[surface]],
      ['Strykningar', coats],
      ['Täckförmåga', `${num(coverage) || defCov} m²/l`],
      [],
      ['Post', 'Mängd'],
      ['Yta att måla totalt', `${nf(r.paintedArea, 1)} m²`],
      ['Färg som behövs', `${nf(r.liters, 1)} liter`],
      ['Köp minst (avrundat)', `${nf(r.buy)} liter`],
    ];
    gaEvent('export_excel', { tool: 'farg-kalkylator' });
    downloadCsvRows(rows, 'farg-atgang.csv');
  };

  const exportPdf = () => void downloadMaterialPdf({
    title: 'Färg – åtgång',
    meta: `${surfaceLabel[surface]} · ${coats} strykningar · ${num(coverage) || defCov} m²/l`,
    rows: [
      { desc: 'Yta att måla totalt', qty: `${nf(r.paintedArea, 1)} m²` },
      { desc: 'Färg som behövs', qty: `${nf(r.liters, 1)} liter` },
      { desc: 'Köp minst (avrundat)', qty: `${nf(r.buy)} liter` },
    ],
    filename: 'farg-atgang.pdf',
    tool: 'farg-kalkylator',
    note: 'Uppskattning. Åtgången påverkas av underlaget. Täckförmågan står på burken.',
  });

  const seedRows = [
    { desc: `Färg – ${surfaceLabel[surface]} (liter)`, qty: r.buy },
    { desc: 'Arbete målning', qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Färgkalkylator – hur mycket färg?</h2>
        <p className="lm-tool-sub">
          Välj yta, ange kvadratmeter och antal strykningar så räknar vi ut hur
          många liter färg du behöver – med avdrag för fönster och dörrar.
          Täckförmågan sätts efter färgtyp men kan justeras efter burken.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Yta / färgtyp</span>
          <select value={surface} onChange={(e) => { setSurface(e.currentTarget.value as Surface); setCoverage(''); }}>
            <option value="vagg">Innervägg</option>
            <option value="tak">Innertak</option>
            <option value="fasadtra">Fasad – trä</option>
            <option value="fasadputs">Fasad – puts</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>Yta att måla (m²)</span>
          <input type="number" min="0" inputMode="decimal" value={area} placeholder="t.ex. 40" onChange={(e) => setArea(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Avdrag fönster/dörrar (m²)</span>
          <input type="number" min="0" inputMode="decimal" value={openings} onChange={(e) => setOpenings(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Antal strykningar</span>
          <input type="number" min="1" inputMode="numeric" value={coats} onChange={(e) => setCoats(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Täckförmåga m²/l (standard {nf(defCov)})</span>
          <input type="number" min="0" inputMode="decimal" value={coverage} placeholder={nf(defCov)} onChange={(e) => setCoverage(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Spill (%)</span>
          <input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row">
          <span>Yta att måla totalt</span>
          <span>{nf(r.paintedArea, 1)} m²</span>
        </div>
        <div className="lm-result-row lm-result-highlight">
          <span>Färg som behövs</span>
          <strong>{nf(r.liters, 1)} liter</strong>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>Köp minst (avrundat)</span>
          <strong>{nf(r.buy)} liter</strong>
        </div>
        <p className="lm-result-fine">
          En uppskattning. Åtgången påverkas av underlaget – sugande, grovt eller
          mörkt-till-ljust underlag drar mer och kan kräva en extra strykning eller
          grundfärg. Täckförmågan står på burken.
        </p>
        <div className="lm-tool-actions" style={{ marginTop: 16 }}>
          <a className="lm-tool-button" href={r.liters > 0 ? offertUrl : undefined} aria-disabled={r.liters <= 0} onClick={() => gaEvent('offert_from_calculator', { tool: 'farg-kalkylator' })}>
            Skapa offert av det här
          </a>
          <a className="lm-tool-secondary" href={r.liters > 0 ? fakturaUrl : undefined} aria-disabled={r.liters <= 0} onClick={() => gaEvent('faktura_from_calculator', { tool: 'farg-kalkylator' })}>
            Skapa faktura
          </a>
          <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={r.liters <= 0}>
            Exportera Excel
          </button>
          <button type="button" className="lm-tool-secondary" onClick={exportPdf} disabled={r.liters <= 0}>
            Exportera PDF
          </button>
        </div>
      </div>
    </div>
  );
}
