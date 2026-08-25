import { useMemo, useState } from 'react';

import type { CalcLocale } from '../../lib/locale';

// Free stair calculator: number of steps, step height and recommended going
// (tread depth) from total height. Uses the comfort rule 2·rise + going ≈ 630.
// Bilingual: sv default, en for /en/verktyg; nb falls back to sv text.
function num(v: string): number { return Math.max(parseFloat(v.replace(',', '.')) || 0, 0); }

export default function TrappaKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale }) {
  const en = locale === 'en';
  const loc = en ? 'en-GB' : 'sv-SE';
  const t = en
    ? {
        title: 'Stair calculator – number of steps and step dimensions',
        sub: 'Enter the total height and we work out the number of steps, the step height (rise) and a recommended going (tread depth) per the comfort rule 2 × rise + going ≈ 630 mm.',
        height: 'Total height (mm)', targetRise: 'Desired step height (mm)', heightPh: 'e.g. 2700',
        rSteps: 'Number of steps', rRise: 'Step height (rise)', rGoing: 'Recommended going (tread depth)',
        pcs: 'pcs',
        warnRise: 'The rise exceeds the BBR guide value of ~180 mm – the stair becomes steep. Add more steps (lower the desired rise).',
        warnGoing: 'The going is below the BBR guide value of 250 mm (indoors) – reduce the rise for a deeper tread.',
        fine: 'An estimate. Comfortable stairs often have a rise of 150–180 mm and a going of at least 250 mm (indoors) per the Swedish building regulations (BBR). Check the requirements for your type of stair.',
      }
    : {
        title: 'Trappberäknare – antal steg och stegmått',
        sub: 'Fyll i den totala höjden så räknar vi ut antal steg, steghöjd och ett rekommenderat stegdjup enligt bekvämlighetsregeln 2 × steghöjd + stegdjup ≈ 630 mm.',
        height: 'Total höjd (mm)', targetRise: 'Önskad steghöjd (mm)', heightPh: 't.ex. 2700',
        rSteps: 'Antal steg', rRise: 'Steghöjd', rGoing: 'Rekommenderat stegdjup',
        pcs: 'st',
        warnRise: 'Steghöjden överstiger BBR-riktvärdet ~180 mm – trappan blir brant. Lägg till fler steg (lägre önskad steghöjd).',
        warnGoing: 'Stegdjupet understiger BBR-riktvärdet 250 mm (inomhus) – minska steghöjden för ett djupare steg.',
        fine: 'En uppskattning. Bekväma trappor har ofta en steghöjd på 150–180 mm och stegdjup minst 250 mm (inomhus) enligt Boverkets byggregler (BBR). Kontrollera kraven för din typ av trappa.',
      };

  const [height, setHeight] = useState('');
  const [targetRise, setTargetRise] = useState('175');
  const result = useMemo(() => {
    const h = num(height);
    const tr = num(targetRise);
    const steps = h > 0 && tr > 0 ? Math.max(Math.round(h / tr), 1) : 0;
    const rise = steps > 0 ? h / steps : 0;
    const going = rise > 0 ? Math.max(630 - 2 * rise, 0) : 0;
    const warnings: string[] = [];
    if (rise > 180) warnings.push(t.warnRise);
    if (going > 0 && going < 250) warnings.push(t.warnGoing);
    return { steps, rise, going, warnings };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height, targetRise, locale]);
  return (
    <div className="lm-tool lm-tool--split">
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>{t.height}</span><input type="number" min="0" inputMode="numeric" value={height} placeholder={t.heightPh} onChange={(e) => setHeight(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>{t.targetRise}</span><input type="number" min="0" inputMode="numeric" value={targetRise} onChange={(e) => setTargetRise(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>{t.rSteps}</span><strong>{result.steps.toLocaleString(loc)} {t.pcs}</strong></div>
        <div className="lm-result-row"><span>{t.rRise}</span><span>{result.rise.toLocaleString(loc, { maximumFractionDigits: 0 })} mm</span></div>
        <div className="lm-result-row lm-result-total"><span>{t.rGoing}</span><strong>{result.going.toLocaleString(loc, { maximumFractionDigits: 0 })} mm</strong></div>
        {result.warnings.map((w) => (
          <p key={w} className="lm-result-fine" style={{ color: '#b4530a', fontWeight: 600 }}>⚠ {w}</p>
        ))}
        <p className="lm-result-fine">{t.fine}</p>
      </div>
    </div>
  );
}
