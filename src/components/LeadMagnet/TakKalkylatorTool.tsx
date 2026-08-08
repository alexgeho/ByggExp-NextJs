import { useMemo, useState } from 'react';

// Free roof-area calculator for a gable roof (sadeltak): roof area = footprint /
// cos(pitch). Also estimates roof tiles from an adjustable tiles-per-m² value.

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

export default function TakKalkylatorTool() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [pitch, setPitch] = useState('27');
  const [margin, setMargin] = useState('10');
  const [tilesPerM2, setTilesPerM2] = useState('10');

  const result = useMemo(() => {
    const l = num(length);
    const w = num(width);
    const v = num(pitch);
    const extra = 1 + num(margin) / 100;
    const footprint = l * w;
    const cos = Math.cos((v * Math.PI) / 180);
    const roofArea = cos > 0 ? (footprint / cos) * extra : 0;
    const tiles = Math.ceil(roofArea * num(tilesPerM2));
    return { footprint, roofArea, tiles };
  }, [length, width, pitch, margin, tilesPerM2]);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Takberäknare – räkna ut takytan</h2>
        <p className="lm-tool-sub">
          Fyll i byggnadens mått och taklutning så räknar vi ut takytan (sadeltak) och en uppskattning av antalet takpannor. Justera pannor per m² efter din pannmodell.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Byggnadens längd (m)</span>
          <input type="number" min="0" inputMode="decimal" value={length} placeholder="t.ex. 10" onChange={(e) => setLength(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Byggnadens bredd (m)</span>
          <input type="number" min="0" inputMode="decimal" value={width} placeholder="t.ex. 8" onChange={(e) => setWidth(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Taklutning (grader)</span>
          <input type="number" min="0" max="80" inputMode="decimal" value={pitch} onChange={(e) => setPitch(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Påslag för överhäng/spill (%)</span>
          <input type="number" min="0" inputMode="decimal" value={margin} onChange={(e) => setMargin(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Takpannor per m²</span>
          <input type="number" min="0" inputMode="decimal" value={tilesPerM2} onChange={(e) => setTilesPerM2(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row">
          <span>Byggnadens grundyta</span>
          <span>{result.footprint.toLocaleString('sv-SE', { maximumFractionDigits: 1 })} m²</span>
        </div>
        <div className="lm-result-row lm-result-highlight">
          <span>Takyta (sadeltak)</span>
          <strong>{result.roofArea.toLocaleString('sv-SE', { maximumFractionDigits: 1 })} m²</strong>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>Antal takpannor (ca)</span>
          <strong>{result.tiles.toLocaleString('sv-SE')} st</strong>
        </div>
        <p className="lm-result-fine">
          Uppskattning för ett symmetriskt sadeltak (takyta = grundyta ÷ cos(taklutning)) inkl. påslag. Antal pannor beror på pannmodell – kontrollera pannor per m² hos leverantören.
        </p>
      </div>
    </div>
  );
}
