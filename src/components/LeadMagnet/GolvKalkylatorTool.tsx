import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import { fakturaHref, offertHref } from '../../lib/offert';

// Professional flooring / tiling calculator. Area + waste -> needed m² and
// packs; laying pattern presets the waste (straight vs diagonal). For tiles it
// also estimates tile adhesive (fästmassa) in kg and 20 kg bags — the job the
// retired kakelfix tool used to do.

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}
const nf = (v: number, d = 0) =>
  v.toLocaleString('sv-SE', { maximumFractionDigits: d });

type Material = 'klickgolv' | 'kakel';

export default function GolvKalkylatorTool() {
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

  const matLabel = material === 'kakel' ? 'Kakel/klinker' : 'Golv/laminat';

  const seedRows = [
    { desc: `${matLabel} (förpackningar)`, qty: r.packs },
    ...(r.isTile && r.fixBags > 0 ? [{ desc: 'Fästmassa (säck 20 kg)', qty: r.fixBags }] : []),
    { desc: 'Arbete läggning', qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);

  const exportCsv = () => {
    gaEvent('export_excel', { tool: 'golv-kalkylator' });
    downloadCsvRows(
      [
        ['Golv- och kakelkalkylator', 'byggexp.se'],
        ['Material', matLabel],
        [],
        ['Post', 'Mängd'],
        ['Behov inkl. spill', `${nf(r.need, 1)} m²`],
        ['Antal förpackningar', `${nf(r.packs)} st`],
        ...(r.isTile ? [['Fästmassa', `${nf(r.fixKg)} kg (${nf(r.fixBags)} säck)`]] : []),
        ...(r.isTile && r.fogKg > 0 ? [['Fogbruk (ca)', `${nf(r.fogKg, 1)} kg`]] : []),
      ],
      'golv-materiallista.csv',
    );
  };

  const disabled = r.packs <= 0;

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Golv- och kakelkalkylator</h2>
        <p className="lm-tool-sub">
          Fyll i ytan och läggningssätt så räknar vi ut antal förpackningar –
          för golv, laminat, klinker och kakel. För kakel får du även åtgången
          fästmassa.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Material</span>
          <select value={material} onChange={(e) => setMaterial(e.currentTarget.value as Material)}>
            <option value="klickgolv">Golv / laminat / parkett</option>
            <option value="kakel">Kakel / klinker</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>Yta (m²)</span>
          <input type="number" min="0" inputMode="decimal" value={area} placeholder="t.ex. 25" onChange={(e) => setArea(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Läggning</span>
          <select value={pattern} onChange={(e) => onPattern(e.currentTarget.value)}>
            <option value="rak">Rak (mindre spill)</option>
            <option value="diagonal">Diagonal (mer spill)</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>Spill (%)</span>
          <input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>m² per förpackning</span>
          <input type="number" min="0" inputMode="decimal" value={perPack} onChange={(e) => setPerPack(e.currentTarget.value)} />
        </label>
        {r.isTile ? (
          <label className="lm-tool-field">
            <span>Fästmassa (kg/m²)</span>
            <input type="number" min="0" inputMode="decimal" value={fixPerM2} onChange={(e) => setFixPerM2(e.currentTarget.value)} />
          </label>
        ) : null}
        {r.isTile ? (
          <label className="lm-tool-field">
            <span>Fogbruk (kg/m²)</span>
            <input type="number" min="0" inputMode="decimal" value={fogPerM2} onChange={(e) => setFogPerM2(e.currentTarget.value)} />
          </label>
        ) : null}
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
        {r.isTile && r.fixKg > 0 ? (
          <div className="lm-result-row">
            <span>Fästmassa</span>
            <span>{nf(r.fixKg)} kg · {nf(r.fixBags)} säck (20 kg)</span>
          </div>
        ) : null}
        {r.isTile && r.fogKg > 0 ? (
          <div className="lm-result-row">
            <span>Fogbruk (ca)</span>
            <span>{nf(r.fogKg, 1)} kg</span>
          </div>
        ) : null}
        <p className="lm-result-fine">
          En uppskattning. Diagonal läggning och många vinklar ökar spillet.
          Fästmassans åtgång beror på tandning och plattstorlek (ofta 3–6 kg/m²).
          Fogbruket beror mycket på plattstorlek och fogbredd (ofta ca 0,3–1 kg/m²)
          – justera värdet. m² per förpackning står på produkten.
        </p>
      </div>

      <div className="lm-tool-actions" style={{ marginTop: 16 }}>
        <a className="lm-tool-button" href={disabled ? undefined : offertUrl} aria-disabled={disabled} onClick={() => gaEvent('offert_from_calculator', { tool: 'golv-kalkylator' })}>
          Skapa offert av det här
        </a>
        <a className="lm-tool-secondary" href={disabled ? undefined : fakturaUrl} aria-disabled={disabled} onClick={() => gaEvent('faktura_from_calculator', { tool: 'golv-kalkylator' })}>
          Skapa faktura
        </a>
        <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={disabled}>
          Exportera till Excel
        </button>
      </div>
    </div>
  );
}
