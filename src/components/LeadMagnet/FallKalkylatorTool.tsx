import { useMemo, useState } from 'react';

import type { CalcLocale } from '../../lib/locale';

// Free slope (fall) calculator: height difference, percentage and ratio from
// length and fall in mm per metre. Bilingual: sv default, en for /en/verktyg.
function num(v: string): number { return Math.max(parseFloat(v.replace(',', '.')) || 0, 0); }

type Unit = 'mmpm' | 'procent' | 'ratio';

export default function FallKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const loc = en ? 'en-GB' : 'sv-SE';
  const t = en
    ? {
        title: 'Slope & fall – work out the height difference',
        sub: 'Enter the length and the fall in mm per metre and we work out the total height difference, the slope in percent and as a ratio (1:X). Handy for drainage, ground and roofs.',
        length: 'Length (m)', fallAs: 'Fall given as', uMm: 'mm per metre', uPct: 'Percent (%)', uRatio: 'Ratio (1:X)',
        labMm: 'Fall (mm per metre)', labPct: 'Fall (%)', labRatio: 'Fall (1:X – enter X)',
        rDrop: 'Height difference', rFall: 'Fall', rSlope: 'Slope', rRatio: 'Ratio',
        fine: 'Guide values: drain pipes often 10–20 mm/m, ground away from the foundation at least 15 mm/m (1:50) for the first few metres, fall to a floor drain in a shower 1:150 (7 mm/m) to 1:50 (20 mm/m). Follow the applicable industry rules for your application.',
        hMm: 'e.g. 15', hPct: 'e.g. 2', hRatio: 'e.g. 50', hLen: 'e.g. 6',
      }
    : {
        title: 'Fall & lutning – räkna ut höjdskillnad',
        sub: 'Fyll i längden och fallet i mm per meter så räknar vi ut total höjdskillnad, lutning i procent och som förhållande (1:X). Bra för avlopp, mark och tak.',
        length: 'Längd (m)', fallAs: 'Fall angivet som', uMm: 'mm per meter', uPct: 'Procent (%)', uRatio: 'Förhållande (1:X)',
        labMm: 'Fall (mm per meter)', labPct: 'Fall (%)', labRatio: 'Fall (1:X – ange X)',
        rDrop: 'Höjdskillnad', rFall: 'Fall', rSlope: 'Lutning', rRatio: 'Förhållande',
        fine: 'Riktvärden: avloppsrör ofta 10–20 mm/m, mark från husgrund minst 15 mm/m (1:50) de första metrarna, fall mot golvbrunn i dusch 1:150 (7 mm/m) till 1:50 (20 mm/m). Följ gällande branschregler för din tillämpning.',
        hMm: 't.ex. 15', hPct: 't.ex. 2', hRatio: 't.ex. 50', hLen: 't.ex. 6',
      };

  const [length, setLength] = useState('');
  const [val, setVal] = useState('15');
  const [unit, setUnit] = useState<Unit>('mmpm');
  const result = useMemo(() => {
    const l = num(length);
    const v = num(val);
    const f = unit === 'procent' ? v * 10 : unit === 'ratio' ? (v > 0 ? 1000 / v : 0) : v;
    const drop = l * f; // mm
    const pct = f / 10; // mm per m -> %
    const ratio = f > 0 ? 1000 / f : 0;
    return { drop, pct, ratio, f };
  }, [length, val, unit]);
  const unitHint = unit === 'procent' ? t.hPct : unit === 'ratio' ? t.hRatio : t.hMm;
  const valLabel = unit === 'procent' ? t.labPct : unit === 'ratio' ? t.labRatio : t.labMm;
  return (
    <div className="lm-tool lm-tool--split">
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>{t.length}</span><input type="number" min="0" inputMode="decimal" value={length} placeholder={t.hLen} onChange={(e) => setLength(e.currentTarget.value)} /></label>
        <label className="lm-tool-field">
          <span>{t.fallAs}</span>
          <select value={unit} onChange={(e) => setUnit(e.currentTarget.value as Unit)}>
            <option value="mmpm">{t.uMm}</option>
            <option value="procent">{t.uPct}</option>
            <option value="ratio">{t.uRatio}</option>
          </select>
        </label>
        <label className="lm-tool-field"><span>{valLabel}</span><input type="number" min="0" inputMode="decimal" value={val} placeholder={unitHint} onChange={(e) => setVal(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>{t.rDrop}</span><strong>{result.drop.toLocaleString(loc, { maximumFractionDigits: 0 })} mm</strong></div>
        <div className="lm-result-row"><span>{t.rFall}</span><span>{result.f.toLocaleString(loc, { maximumFractionDigits: 1 })} mm/m</span></div>
        <div className="lm-result-row"><span>{t.rSlope}</span><span>{result.pct.toLocaleString(loc, { maximumFractionDigits: 2 })} %</span></div>
        <div className="lm-result-row lm-result-total"><span>{t.rRatio}</span><strong>{result.ratio > 0 ? `1:${result.ratio.toLocaleString(loc, { maximumFractionDigits: 0 })}` : '—'}</strong></div>
        <p className="lm-result-fine">{t.fine}</p>
      </div>
    </div>
  );
}
