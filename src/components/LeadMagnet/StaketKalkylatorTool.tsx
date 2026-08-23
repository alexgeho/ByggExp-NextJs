import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import { downloadMaterialPdf } from '../../lib/materialPdf';
import { fakturaHref, offertHref } from '../../lib/offert';

// Fence calculator: number of posts and sections from length and post spacing.
function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}
const nf = (v: number) => v.toLocaleString('sv-SE');

export default function StaketKalkylatorTool() {
  const [length, setLength] = useState('');
  const [cc, setCc] = useState('2');

  const r = useMemo(() => {
    const l = num(length);
    const c = num(cc);
    const sections = l > 0 && c > 0 ? Math.ceil(l / c) : 0;
    const posts = sections > 0 ? sections + 1 : 0;
    return { sections, posts };
  }, [length, cc]);

  const seedRows = [
    { desc: 'Stolpar', qty: r.posts },
    { desc: 'Sektioner', qty: r.sections },
    { desc: 'Arbete staketmontering', qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);
  const disabled = r.posts <= 0;

  const exportCsv = () => {
    gaEvent('export_excel', { tool: 'staket-kalkylator' });
    downloadCsvRows(
      [
        ['Staketkalkylator', 'byggexp.se'],
        [],
        ['Post', 'Mängd'],
        ['Antal stolpar', `${nf(r.posts)} st`],
        ['Antal sektioner', `${nf(r.sections)} st`],
      ],
      'staket-materiallista.csv',
    );
  };

  const exportPdf = () => void downloadMaterialPdf({
    title: 'Staket – materiallista',
    rows: [
      { desc: 'Antal stolpar', qty: `${nf(r.posts)} st` },
      { desc: 'Antal sektioner', qty: `${nf(r.sections)} st` },
    ],
    filename: 'staket-materiallista.pdf',
    tool: 'staket-kalkylator',
  });

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Staketkalkylator – stolpar och sektioner</h2>
        <p className="lm-tool-sub">Fyll i staketets längd och avståndet mellan stolparna (c/c) så räknar vi ut antal stolpar och sektioner.</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Längd (m)</span><input type="number" min="0" inputMode="decimal" value={length} placeholder="t.ex. 20" onChange={(e) => setLength(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Stolpavstånd c/c (m)</span><input type="number" min="0" inputMode="decimal" value={cc} onChange={(e) => setCc(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Antal stolpar</span><strong>{nf(r.posts)} st</strong></div>
        <div className="lm-result-row lm-result-total"><span>Antal sektioner</span><strong>{nf(r.sections)} st</strong></div>
        <p className="lm-result-fine">En uppskattning (antal stolpar = sektioner + 1). Räkna med grind separat, och anpassa c/c efter staketets typ och vindlast.</p>
      </div>
      <div className="lm-tool-actions" style={{ marginTop: 16 }}>
        <a className="lm-tool-button" href={disabled ? undefined : offertUrl} aria-disabled={disabled} onClick={() => gaEvent('offert_from_calculator', { tool: 'staket-kalkylator' })}>
          Skapa offert av det här
        </a>
        <a className="lm-tool-secondary" href={disabled ? undefined : fakturaUrl} aria-disabled={disabled} onClick={() => gaEvent('faktura_from_calculator', { tool: 'staket-kalkylator' })}>
          Skapa faktura
        </a>
        <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={disabled}>
          Exportera Excel
        </button>
        <button type="button" className="lm-tool-secondary" onClick={exportPdf} disabled={disabled}>
          Exportera PDF
        </button>
      </div>
    </div>
  );
}
