import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import { fakturaHref, offertHref } from '../../lib/offert';

// Gravel/soil calculator: volume from area × depth, plus weight in tonnes.
function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}
const nf = (v: number, d = 1) =>
  v.toLocaleString('sv-SE', { maximumFractionDigits: d });

export default function GrusKalkylatorTool() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [depth, setDepth] = useState('10');
  const [density, setDensity] = useState('1.6');

  const r = useMemo(() => {
    const volume = num(length) * num(width) * (num(depth) / 100);
    return { volume, tons: volume * num(density) };
  }, [length, width, depth, density]);

  const seedRows = [
    { desc: 'Grus/makadam (ton)', qty: Math.round(r.tons * 10) / 10 },
    { desc: 'Arbete/transport', qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);
  const disabled = r.volume <= 0;

  const exportCsv = () => {
    gaEvent('export_excel', { tool: 'grus-kalkylator' });
    downloadCsvRows(
      [
        ['Grus & makadam', 'byggexp.se'],
        [],
        ['Post', 'Mängd'],
        ['Volym', `${nf(r.volume, 2)} m³`],
        ['Vikt (ca)', `${nf(r.tons)} ton`],
      ],
      'grus-makadam.csv',
    );
  };

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Grus & makadam – volym och ton</h2>
        <p className="lm-tool-sub">Fyll i yta och djup så räknar vi ut volymen i kubikmeter och vikten i ton. Fungerar för grus, makadam, matjord och sand – justera densiteten efter materialet.</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Längd (m)</span><input type="number" min="0" inputMode="decimal" value={length} placeholder="t.ex. 10" onChange={(e) => setLength(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Bredd (m)</span><input type="number" min="0" inputMode="decimal" value={width} placeholder="t.ex. 3" onChange={(e) => setWidth(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Djup (cm)</span><input type="number" min="0" inputMode="decimal" value={depth} onChange={(e) => setDepth(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Densitet (ton/m³)</span><input type="number" min="0" inputMode="decimal" value={density} onChange={(e) => setDensity(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Volym</span><strong>{nf(r.volume, 2)} m³</strong></div>
        <div className="lm-result-row lm-result-total"><span>Vikt (ca)</span><strong>{nf(r.tons)} ton</strong></div>
        <p className="lm-result-fine">En uppskattning. Densiteten varierar: grus/makadam ca 1,5–1,8 ton/m³, matjord ca 1,2–1,5. Kontrollera med leverantören.</p>
      </div>
      <div className="lm-tool-actions" style={{ marginTop: 16 }}>
        <a className="lm-tool-button" href={disabled ? undefined : offertUrl} aria-disabled={disabled} onClick={() => gaEvent('offert_from_calculator', { tool: 'grus-kalkylator' })}>
          Skapa offert av det här
        </a>
        <a className="lm-tool-secondary" href={disabled ? undefined : fakturaUrl} aria-disabled={disabled} onClick={() => gaEvent('faktura_from_calculator', { tool: 'grus-kalkylator' })}>
          Skapa faktura
        </a>
        <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={disabled}>
          Exportera till Excel
        </button>
      </div>
    </div>
  );
}
