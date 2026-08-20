import { useMemo, useState } from 'react';

// Free stair calculator: number of steps, step height and recommended going
// (tread depth) from total height. Uses the comfort rule 2·rise + going ≈ 630.
function num(v: string): number { return Math.max(parseFloat(v.replace(',', '.')) || 0, 0); }

export default function TrappaKalkylatorTool() {
  const [height, setHeight] = useState('');
  const [targetRise, setTargetRise] = useState('175');
  const result = useMemo(() => {
    const h = num(height);
    const t = num(targetRise);
    const steps = h > 0 && t > 0 ? Math.max(Math.round(h / t), 1) : 0;
    const rise = steps > 0 ? h / steps : 0;
    const going = rise > 0 ? Math.max(630 - 2 * rise, 0) : 0;
    // BBR riktvärden inomhus: steghöjd ≤ ~180 mm, stegdjup ≥ 250 mm.
    const warnings: string[] = [];
    if (rise > 180) warnings.push('Steghöjden överstiger BBR-riktvärdet ~180 mm – trappan blir brant. Lägg till fler steg (lägre önskad steghöjd).');
    if (going > 0 && going < 250) warnings.push('Stegdjupet understiger BBR-riktvärdet 250 mm (inomhus) – minska steghöjden för ett djupare steg.');
    return { steps, rise, going, warnings };
  }, [height, targetRise]);
  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Trappberäknare – antal steg och stegmått</h2>
        <p className="lm-tool-sub">Fyll i den totala höjden så räknar vi ut antal steg, steghöjd och ett rekommenderat stegdjup enligt bekvämlighetsregeln 2 × steghöjd + stegdjup ≈ 630 mm.</p>
      </div>
      <div className="lm-tool-grid">
        <label className="lm-tool-field"><span>Total höjd (mm)</span><input type="number" min="0" inputMode="numeric" value={height} placeholder="t.ex. 2700" onChange={(e) => setHeight(e.currentTarget.value)} /></label>
        <label className="lm-tool-field"><span>Önskad steghöjd (mm)</span><input type="number" min="0" inputMode="numeric" value={targetRise} onChange={(e) => setTargetRise(e.currentTarget.value)} /></label>
      </div>
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>Antal steg</span><strong>{result.steps.toLocaleString('sv-SE')} st</strong></div>
        <div className="lm-result-row"><span>Steghöjd</span><span>{result.rise.toLocaleString('sv-SE', { maximumFractionDigits: 0 })} mm</span></div>
        <div className="lm-result-row lm-result-total"><span>Rekommenderat stegdjup</span><strong>{result.going.toLocaleString('sv-SE', { maximumFractionDigits: 0 })} mm</strong></div>
        {result.warnings.map((w) => (
          <p key={w} className="lm-result-fine" style={{ color: '#b4530a', fontWeight: 600 }}>⚠ {w}</p>
        ))}
        <p className="lm-result-fine">En uppskattning. Bekväma trappor har ofta en steghöjd på 150–180 mm och stegdjup minst 250 mm (inomhus) enligt Boverkets byggregler (BBR). Kontrollera kraven för din typ av trappa.</p>
      </div>
    </div>
  );
}
