import { useMemo, useState } from 'react';

import type { CalcLocale } from '../../lib/locale';

// Free U-value calculator for a layered building element. U = 1 / (Rsi + ΣR + Rse)
// where each layer's R = thickness(m) / λ. Surface resistances depend on the
// element type (wall/roof/floor). Material λ values are typical defaults and can
// be overridden per layer. Bilingual: sv default, en for /en/verktyg.

const MAT_LAMBDA = [NaN, 0.037, 0.036, 0.022, 0.14, 0.25, 1.7, 0.6, 0.14, 1.0];
const SURFACE_R: Record<string, number> = {
  wall: 0.13 + 0.04,
  roof: 0.10 + 0.04,
  floor: 0.17 + 0.04,
};

const LAYERS = [0, 1, 2, 3, 4];

export default function UvardeKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const fmt = (value: number, dec = 3) => value.toLocaleString(en ? 'en-GB' : 'sv-SE', { minimumFractionDigits: dec, maximumFractionDigits: dec });
  const t = en
    ? {
        title: 'Work out the U-value',
        sub: 'Choose the construction type and add the material layers with thickness. The calculator sums the thermal resistance and works out the U-value (W/m²K). A lower U-value = better insulation.',
        elementL: 'Construction',
        materials: ['— choose material —', 'Mineral wool (0.037)', 'EPS (0.036)', 'PIR/PUR (0.022)', 'Timber stud (0.14)', 'Plasterboard (0.25)', 'Concrete (1.7)', 'Brick (0.6)', 'Wood/panel (0.14)', 'Render (1.0)'],
        surfaces: { wall: 'External wall', roof: 'Roof (upward)', floor: 'Floor (downward)' } as Record<string, string>,
        layer: (n: number) => `Layer ${n} – material`, lambda: 'λ (W/mK)', lambdaPh: 'e.g. 0.037', thick: 'Thickness (mm)', thickPh: 'e.g. 195',
        rSurface: 'Surface resistance (Rsi + Rse)', rMaterial: 'Material layers’ resistance', rTotal: 'Total thermal resistance R', rU: 'U-value',
        note: 'Simplified calculation for homogeneous layers (U = 1 / Rtot). With insulation between timber studs the value is lowered by thermal bridges – use the so-called λ-method or the U-value from the manufacturer’s data.',
      }
    : {
        title: 'Räkna ut U-värde',
        sub: 'Välj konstruktionstyp och lägg in materiallagren med tjocklek. Kalkylatorn summerar värmemotståndet och räknar ut U-värdet (W/m²K). Lägre U-värde = bättre isolering.',
        elementL: 'Konstruktion',
        materials: ['— välj material —', 'Mineralull (0,037)', 'EPS-cellplast (0,036)', 'PIR/PUR (0,022)', 'Träregel (0,14)', 'Gipsskiva (0,25)', 'Betong (1,7)', 'Tegel (0,6)', 'Trä/panel (0,14)', 'Puts (1,0)'],
        surfaces: { wall: 'Yttervägg', roof: 'Tak (uppåt)', floor: 'Golv (nedåt)' } as Record<string, string>,
        layer: (n: number) => `Lager ${n} – material`, lambda: 'λ (W/mK)', lambdaPh: 't.ex. 0.037', thick: 'Tjocklek (mm)', thickPh: 't.ex. 195',
        rSurface: 'Ytmotstånd (Rsi + Rse)', rMaterial: 'Materiallagrens motstånd', rTotal: 'Totalt värmemotstånd R', rU: 'U-värde',
        note: 'Förenklad beräkning för homogena skikt (U = 1 / Rtot). Vid isolering mellan träreglar sänks värdet av köldbryggor – räkna då med den så kallade λ-metoden eller U-värde enligt tillverkarens underlag.',
      };

  const [element, setElement] = useState('wall');
  const [mat, setMat] = useState<Record<number, number>>({ 0: 1 });
  const [lambda, setLambda] = useState<Record<number, string>>({});
  const [thick, setThick] = useState<Record<number, string>>({ 0: '' });

  const r = useMemo(() => {
    const rs = SURFACE_R[element];
    let rSum = 0;
    for (const i of LAYERS) {
      const presetLambda = MAT_LAMBDA[mat[i] ?? 0];
      const lam = !Number.isNaN(presetLambda)
        ? presetLambda
        : Math.max(parseFloat((lambda[i] || '').replace(',', '.')) || 0, 0);
      const th = Math.max(parseFloat((thick[i] || '').replace(',', '.')) || 0, 0) / 1000;
      const R = lam > 0 && th > 0 ? th / lam : 0;
      rSum += R;
    }
    const rTot = rs + rSum;
    const u = rTot > 0 ? 1 / rTot : 0;
    return { rs, rSum, rTot, u };
  }, [element, mat, lambda, thick]);

  return (
    <div className="lm-tool lm-tool--split">

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>{t.elementL}</span>
          <select value={element} onChange={(e) => setElement(e.currentTarget.value)}>
            {Object.keys(SURFACE_R).map((k) => (
              <option key={k} value={k}>{t.surfaces[k]}</option>
            ))}
          </select>
        </label>
      </div>

      {LAYERS.map((i) => {
        const presetLambda = MAT_LAMBDA[mat[i] ?? 0];
        const custom = Number.isNaN(presetLambda);
        return (
          <div className="lm-tool-grid" key={i}>
            <label className="lm-tool-field">
              <span>{t.layer(i + 1)}</span>
              <select
                value={mat[i] ?? 0}
                onChange={(e) => setMat((p) => ({ ...p, [i]: parseInt(e.currentTarget.value, 10) }))}
              >
                {t.materials.map((label, idx) => (
                  <option key={label} value={idx}>{label}</option>
                ))}
              </select>
            </label>
            {custom && (
              <label className="lm-tool-field">
                <span>{t.lambda}</span>
                <input type="number" step="0.001" inputMode="decimal" value={lambda[i] || ''}
                  placeholder={t.lambdaPh}
                  onChange={(e) => setLambda((p) => ({ ...p, [i]: e.currentTarget.value }))} />
              </label>
            )}
            <label className="lm-tool-field">
              <span>{t.thick}</span>
              <input type="number" min="0" inputMode="decimal" value={thick[i] || ''}
                placeholder={t.thickPh}
                onChange={(e) => setThick((p) => ({ ...p, [i]: e.currentTarget.value }))} />
            </label>
          </div>
        );
      })}

      <div className="lm-result">
        <div className="lm-result-row">
          <span>{t.rSurface}</span>
          <span>{fmt(r.rs)} m²K/W</span>
        </div>
        <div className="lm-result-row">
          <span>{t.rMaterial}</span>
          <span>{fmt(r.rSum)} m²K/W</span>
        </div>
        <div className="lm-result-row lm-result-highlight">
          <span>{t.rTotal}</span>
          <strong>{fmt(r.rTot)} m²K/W</strong>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>{t.rU}</span>
          <strong>{fmt(r.u)} W/m²K</strong>
        </div>
      </div>
      <p className="lm-tool-note">{t.note}</p>
    </div>
  );
}
