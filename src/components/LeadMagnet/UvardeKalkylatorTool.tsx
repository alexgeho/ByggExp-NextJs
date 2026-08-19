import { useMemo, useState } from 'react';

// Free U-value calculator for a layered building element. U = 1 / (Rsi + ΣR + Rse)
// where each layer's R = thickness(m) / λ. Surface resistances depend on the
// element type (wall/roof/floor). Material λ values are typical defaults and can
// be overridden per layer.

type Material = { label: string; lambda: number };
const MATERIALS: Material[] = [
  { label: '— välj material —', lambda: NaN },
  { label: 'Mineralull (0,037)', lambda: 0.037 },
  { label: 'EPS-cellplast (0,036)', lambda: 0.036 },
  { label: 'PIR/PUR (0,022)', lambda: 0.022 },
  { label: 'Träregel (0,14)', lambda: 0.14 },
  { label: 'Gipsskiva (0,25)', lambda: 0.25 },
  { label: 'Betong (1,7)', lambda: 1.7 },
  { label: 'Tegel (0,6)', lambda: 0.6 },
  { label: 'Trä/panel (0,14)', lambda: 0.14 },
  { label: 'Puts (1,0)', lambda: 1.0 },
];

// Rsi + Rse per element type (horizontal / upward / downward heat flow).
const SURFACE: Record<string, { r: number; label: string }> = {
  wall: { r: 0.13 + 0.04, label: 'Yttervägg' },
  roof: { r: 0.10 + 0.04, label: 'Tak (uppåt)' },
  floor: { r: 0.17 + 0.04, label: 'Golv (nedåt)' },
};

const LAYERS = [0, 1, 2, 3, 4];

function fmt(value: number, dec = 3): string {
  return value.toLocaleString('sv-SE', { minimumFractionDigits: dec, maximumFractionDigits: dec });
}

export default function UvardeKalkylatorTool() {
  const [element, setElement] = useState('wall');
  const [mat, setMat] = useState<Record<number, number>>({ 0: 1 });
  const [lambda, setLambda] = useState<Record<number, string>>({});
  const [thick, setThick] = useState<Record<number, string>>({ 0: '' });

  const r = useMemo(() => {
    const rs = SURFACE[element].r;
    let rSum = 0;
    const rows: { i: number; R: number }[] = [];
    for (const i of LAYERS) {
      const preset = MATERIALS[mat[i] ?? 0];
      const lam = preset && !Number.isNaN(preset.lambda)
        ? preset.lambda
        : Math.max(parseFloat((lambda[i] || '').replace(',', '.')) || 0, 0);
      const t = Math.max(parseFloat((thick[i] || '').replace(',', '.')) || 0, 0) / 1000;
      const R = lam > 0 && t > 0 ? t / lam : 0;
      if (R > 0) rows.push({ i, R });
      rSum += R;
    }
    const rTot = rs + rSum;
    const u = rTot > 0 ? 1 / rTot : 0;
    return { rs, rSum, rTot, u, rows };
  }, [element, mat, lambda, thick]);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Räkna ut U-värde</h2>
        <p className="lm-tool-sub">
          Välj konstruktionstyp och lägg in materiallagren med tjocklek. Kalkylatorn summerar värmemotståndet och
          räknar ut U-värdet (W/m²K). Lägre U-värde = bättre isolering.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Konstruktion</span>
          <select value={element} onChange={(e) => setElement(e.currentTarget.value)}>
            {Object.entries(SURFACE).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </label>
      </div>

      {LAYERS.map((i) => {
        const preset = MATERIALS[mat[i] ?? 0];
        const custom = !preset || Number.isNaN(preset.lambda);
        return (
          <div className="lm-tool-grid" key={i}>
            <label className="lm-tool-field">
              <span>Lager {i + 1} – material</span>
              <select
                value={mat[i] ?? 0}
                onChange={(e) => setMat((p) => ({ ...p, [i]: parseInt(e.currentTarget.value, 10) }))}
              >
                {MATERIALS.map((m, idx) => (
                  <option key={m.label} value={idx}>{m.label}</option>
                ))}
              </select>
            </label>
            {custom && (
              <label className="lm-tool-field">
                <span>λ (W/mK)</span>
                <input type="number" step="0.001" inputMode="decimal" value={lambda[i] || ''}
                  placeholder="t.ex. 0.037"
                  onChange={(e) => setLambda((p) => ({ ...p, [i]: e.currentTarget.value }))} />
              </label>
            )}
            <label className="lm-tool-field">
              <span>Tjocklek (mm)</span>
              <input type="number" min="0" inputMode="decimal" value={thick[i] || ''}
                placeholder="t.ex. 195"
                onChange={(e) => setThick((p) => ({ ...p, [i]: e.currentTarget.value }))} />
            </label>
          </div>
        );
      })}

      <div className="lm-result">
        <div className="lm-result-row">
          <span>Ytmotstånd (Rsi + Rse)</span>
          <span>{fmt(r.rs)} m²K/W</span>
        </div>
        <div className="lm-result-row">
          <span>Materiallagrens motstånd</span>
          <span>{fmt(r.rSum)} m²K/W</span>
        </div>
        <div className="lm-result-row lm-result-highlight">
          <span>Totalt värmemotstånd R</span>
          <strong>{fmt(r.rTot)} m²K/W</strong>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>U-värde</span>
          <strong>{fmt(r.u)} W/m²K</strong>
        </div>
      </div>
      <p className="lm-tool-note">
        Förenklad beräkning för homogena skikt (U = 1 / R<sub>tot</sub>). Vid isolering mellan träreglar sänks
        värdet av köldbryggor – räkna då med den så kallade λ-metoden eller U-värde enligt tillverkarens underlag.
      </p>
    </div>
  );
}
