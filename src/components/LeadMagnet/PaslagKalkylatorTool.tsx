import { useMemo, useState } from 'react';

import type { CalcLocale } from '../../lib/locale';

// Free markup/margin calculator (påslag vs marginal). Converts a cost into a
// selling price using either a markup % or a target margin %, and shows both so
// the common mix-up between markup and margin becomes clear. Bilingual: sv
// default, en for /en/verktyg; nb falls back to sv text.

export default function PaslagKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const loc = en ? 'en-GB' : 'sv-SE';
  const kr = (v: number) => `${v.toLocaleString(loc, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kr`;
  const pct = (v: number) => `${v.toLocaleString(loc, { minimumFractionDigits: 1, maximumFractionDigits: 1 })} %`;
  const t = en
    ? {
        title: 'Work out markup and margin',
        sub: 'Enter your cost and either a markup or a target margin – see the selling price, the profit and both markup and margin.',
        cost: 'Cost price (kr)', costPh: 'e.g. 1000',
        calcWith: 'Calculate with', markup: 'Markup (%)', margin: 'Margin (%)',
        percentPh: 'e.g. 30',
        rPrice: 'Selling price (excl. VAT)', rProfit: 'Profit', rMarkup: 'Markup', rMargin: 'Margin',
        fine: 'Markup is calculated on the cost price, margin on the selling price – that’s why the percentages differ. A 30% markup gives, for example, a margin of about 23%.',
      }
    : {
        title: 'Räkna ut påslag och marginal',
        sub: 'Fyll i din självkostnad och antingen ett påslag eller en önskad marginal – se försäljningspriset, vinsten samt både påslag och marginal.',
        cost: 'Självkostnad (kr)', costPh: 't.ex. 1000',
        calcWith: 'Räkna med', markup: 'Påslag (%)', margin: 'Marginal (%)',
        percentPh: 't.ex. 30',
        rPrice: 'Försäljningspris (exkl. moms)', rProfit: 'Vinst', rMarkup: 'Påslag', rMargin: 'Marginal',
        fine: 'Påslag räknas på självkostnaden, marginal räknas på försäljningspriset – därför skiljer sig procenttalen åt. Ett påslag på 30 % ger t.ex. en marginal på cirka 23 %.',
      };

  const [cost, setCost] = useState('');
  const [mode, setMode] = useState<'markup' | 'margin'>('markup');
  const [percent, setPercent] = useState('');

  const result = useMemo(() => {
    const c = Math.max(parseFloat(cost.replace(',', '.')) || 0, 0);
    const p = Math.max(parseFloat(percent.replace(',', '.')) || 0, 0) / 100;
    let price: number;
    if (mode === 'markup') {
      price = c * (1 + p);
    } else {
      price = p < 1 ? c / (1 - p) : 0; // margin must be < 100 %
    }
    const profit = price - c;
    const marginPct = price > 0 ? (profit / price) * 100 : 0;
    const markupPct = c > 0 ? (profit / c) * 100 : 0;
    return { cost: c, price, profit, marginPct, markupPct };
  }, [cost, mode, percent]);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">{t.title}</h2>
        <p className="lm-tool-sub">{t.sub}</p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>{t.cost}</span>
          <input type="number" min="0" inputMode="decimal" value={cost} placeholder={t.costPh} onChange={(e) => setCost(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>{t.calcWith}</span>
          <select value={mode} onChange={(e) => setMode(e.currentTarget.value as 'markup' | 'margin')}>
            <option value="markup">{t.markup}</option>
            <option value="margin">{t.margin}</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>{mode === 'markup' ? t.markup : t.margin}</span>
          <input type="number" min="0" inputMode="decimal" value={percent} placeholder={t.percentPh} onChange={(e) => setPercent(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight">
          <span>{t.rPrice}</span>
          <strong>{kr(result.price)}</strong>
        </div>
        <div className="lm-result-row">
          <span>{t.rProfit}</span>
          <span>{kr(result.profit)}</span>
        </div>
        <div className="lm-result-row">
          <span>{t.rMarkup}</span>
          <span>{pct(result.markupPct)}</span>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>{t.rMargin}</span>
          <strong>{pct(result.marginPct)}</strong>
        </div>
        <p className="lm-result-fine">{t.fine}</p>
      </div>
    </div>
  );
}
