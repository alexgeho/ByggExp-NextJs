import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import { fakturaHref, offertHref } from '../../lib/offert';

// Roof-truss calculator: number of trusses from roof length and spacing.
function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}
const nf = (v: number) => v.toLocaleString('sv-SE');

export default function TakstolarKalkylatorTool() {
  const [length, setLength] = useState('');
  const [cc, setCc] = useState('1200');

  const r = useMemo(() => {
    const l = num(length);
    const c = num(cc);
    const count = l > 0 && c > 0 ? Math.floor((l * 1000) / c) + 1 : 0;
    return { count };
  }, [length, cc]);

  const seedRows = [
    { desc: `Takstolar (c/c ${cc})`, qty: r.count },
    { desc: 'Arbete resning takstolar', qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);
  const disabled = r.count <= 0;

  const exportCsv = () => {
    gaEvent('export_excel', { tool: 'takstolar-kalkylator' });
    downloadCsvRows(
      [
        ['Takstolar', 'byggexp.se'],
        [],
        ['Post', 'Mängd'],
        [`Antal takstolar (c/c ${cc})`, `${nf(r.count)} st`],
      ],
      'takstolar.csv',
    );
  };

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Takstolar – antal utifrån c/c</h2>
        <p className="lm-tool-sub">Fyll i takets längd och centrumavstånd (c/c) så räknar vi ut antal takstolar.</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Takets längd (m)</span><input type="number" min="0" inputMode="decimal" value={length} placeholder="t.ex. 10" onChange={(e) => setLength(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Centrumavstånd c/c (mm)</span><input type="number" min="0" inputMode="numeric" value={cc} onChange={(e) => setCc(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Antal takstolar</span><strong>{nf(r.count)} st</strong></div>
        <p className="lm-result-fine">En uppskattning (antal = längd ÷ c/c + 1). Vanligt c/c är 1200 mm, men följ konstruktörens dimensionering för din takstol och snölast.</p>
      </div>
      <div className="lm-tool-actions" style={{ marginTop: 16 }}>
        <a className="lm-tool-button" href={disabled ? undefined : offertUrl} aria-disabled={disabled} onClick={() => gaEvent('offert_from_calculator', { tool: 'takstolar-kalkylator' })}>
          Skapa offert av det här
        </a>
        <a className="lm-tool-secondary" href={disabled ? undefined : fakturaUrl} aria-disabled={disabled} onClick={() => gaEvent('faktura_from_calculator', { tool: 'takstolar-kalkylator' })}>
          Skapa faktura
        </a>
        <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={disabled}>
          Exportera till Excel
        </button>
      </div>
    </div>
  );
}
