import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import { fakturaHref, offertHref } from '../../lib/offert';

// Stud/joist calculator: number of studs from length and c/c, plus total lumber
// (löpmeter) and the syll + hammarband (top/bottom plates) for a wall.
function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}
const nf = (v: number, d = 0) =>
  v.toLocaleString('sv-SE', { maximumFractionDigits: d });

export default function ReglarKalkylatorTool() {
  const [length, setLength] = useState('');
  const [cc, setCc] = useState('600');
  const [height, setHeight] = useState('2.4');

  const r = useMemo(() => {
    const l = num(length);
    const c = num(cc);
    const count = c > 0 && l > 0 ? Math.floor((l * 1000) / c) + 1 : 0;
    const studMeters = count * num(height);
    const plateMeters = l * 2; // syll + hammarband
    return { count, studMeters, plateMeters, total: studMeters + plateMeters };
  }, [length, cc, height]);

  const seedRows = [
    { desc: `Reglar (c/c ${cc})`, qty: r.count },
    { desc: 'Reglar, virke (lpm)', qty: Math.round(r.studMeters) },
    { desc: 'Syll + hammarband (lpm)', qty: Math.round(r.plateMeters) },
    { desc: 'Arbete stommontering', qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);
  const disabled = r.count <= 0;

  const exportCsv = () => {
    gaEvent('export_excel', { tool: 'reglar-kalkylator' });
    downloadCsvRows(
      [
        ['Reglar & virke', 'byggexp.se'],
        [],
        ['Post', 'Mängd'],
        [`Antal reglar (c/c ${cc})`, `${nf(r.count)} st`],
        ['Reglar, virke', `${nf(r.studMeters, 1)} lpm`],
        ['Syll + hammarband', `${nf(r.plateMeters, 1)} lpm`],
        ['Totalt virke', `${nf(r.total, 1)} lpm`],
      ],
      'reglar-virke.csv',
    );
  };

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Reglar & virke – antal och löpmeter</h2>
        <p className="lm-tool-sub">
          Fyll i väggens längd, centrumavstånd (c/c) och höjd så räknar vi ut antal
          reglar, löpmeter virke och syll + hammarband.
        </p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Längd (m)</span><input type="number" min="0" inputMode="decimal" value={length} placeholder="t.ex. 6" onChange={(e) => setLength(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Centrumavstånd c/c (mm)</span><input type="number" min="0" inputMode="numeric" value={cc} onChange={(e) => setCc(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Regelns höjd (m)</span><input type="number" min="0" inputMode="decimal" value={height} onChange={(e) => setHeight(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Antal reglar</span><strong>{nf(r.count)} st</strong></div>
        <div className="lm-result-row"><span>Reglar, virke</span><span>{nf(r.studMeters, 1)} lpm</span></div>
        <div className="lm-result-row"><span>Syll + hammarband</span><span>{nf(r.plateMeters, 1)} lpm</span></div>
        <div className="lm-result-row lm-result-total"><span>Totalt virke</span><strong>{nf(r.total, 1)} lpm</strong></div>
        <p className="lm-result-fine">
          Antal reglar = längd ÷ c/c + 1. Vanliga c/c är 450 eller 600 mm. Syll och
          hammarband räknas som 2 × väggens längd.
        </p>
      </div>
      <div className="lm-tool-actions" style={{ marginTop: 16 }}>
        <a className="lm-tool-button" href={disabled ? undefined : offertUrl} aria-disabled={disabled} onClick={() => gaEvent('offert_from_calculator', { tool: 'reglar-kalkylator' })}>
          Skapa offert av det här
        </a>
        <a className="lm-tool-secondary" href={disabled ? undefined : fakturaUrl} aria-disabled={disabled} onClick={() => gaEvent('faktura_from_calculator', { tool: 'reglar-kalkylator' })}>
          Skapa faktura
        </a>
        <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={disabled}>
          Exportera till Excel
        </button>
      </div>
    </div>
  );
}
