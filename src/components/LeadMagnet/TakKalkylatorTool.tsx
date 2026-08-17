import { useMemo, useState } from 'react';

// Professional roof calculator. Roof area for a pitched roof is the footprint
// (incl. eaves overhang) divided by cos(pitch). From the area it estimates the
// full covering bill: tiles (per model), battens (bärläkt löpmeter from the
// batten gauge) and underlay felt (m² incl. overlap). Tile-per-m² and batten
// gauge defaults follow common Swedish concrete/clay tiles and are editable.

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}
const nf = (v: number, d = 0) =>
  v.toLocaleString('sv-SE', { maximumFractionDigits: d });

type Covering = 'betongpanna' | 'tegelpanna' | 'plat' | 'papp';

// [tiles per m², batten gauge mm]. Plåt/papp use no tiles.
const DEFAULTS: Record<Covering, { tiles: number; gauge: number }> = {
  betongpanna: { tiles: 9.5, gauge: 345 },
  tegelpanna: { tiles: 13, gauge: 320 },
  plat: { tiles: 0, gauge: 600 },
  papp: { tiles: 0, gauge: 0 },
};

export default function TakKalkylatorTool() {
  const [form, setForm] = useState('sadel'); // sadel | pulpet
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [pitch, setPitch] = useState('27');
  const [overhang, setOverhang] = useState('0.3');
  const [covering, setCovering] = useState<Covering>('betongpanna');
  const [tiles, setTiles] = useState(''); // override, tom = modellens standard
  const [spill, setSpill] = useState('10');

  const def = DEFAULTS[covering];

  const r = useMemo(() => {
    const o = num(overhang);
    const effL = num(length) + 2 * o;
    const effW = num(width) + 2 * o;
    const footprint = effL * effW;
    const cos = Math.cos((num(pitch) * Math.PI) / 180);
    const roofArea = cos > 0 ? footprint / cos : 0; // täcker båda takfall
    const spillF = 1 + num(spill) / 100;

    const tilesPerM2 = num(tiles) || def.tiles;
    const tileCount = tilesPerM2 > 0 ? Math.ceil(roofArea * tilesPerM2 * spillF) : 0;
    const battenM = def.gauge > 0 ? (roofArea / (def.gauge / 1000)) * spillF : 0;
    const feltM2 = roofArea * 1.1; // ca 10 % överlapp

    return {
      footprint: num(length) * num(width),
      roofArea,
      tileCount,
      battenM,
      feltM2,
      hasTiles: def.tiles > 0,
      hasBatten: def.gauge > 0,
    };
  }, [length, width, pitch, overhang, tiles, spill, def]);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Takkalkylator – yta, pannor & läkt</h2>
        <p className="lm-tool-sub">
          Ange byggnadens mått och taklutning så räknar vi ut takytan och
          materialet: takpannor, bärläkt (löpmeter) och underlagspapp. Takytan
          räknas per takfall, inte som platt yta.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Takform</span>
          <select value={form} onChange={(e) => setForm(e.currentTarget.value)}>
            <option value="sadel">Sadeltak (två fall)</option>
            <option value="pulpet">Pulpettak (ett fall)</option>
          </select>
        </label>
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
          <span>Takutsprång (m)</span>
          <input type="number" min="0" inputMode="decimal" value={overhang} onChange={(e) => setOverhang(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Taktäckning</span>
          <select value={covering} onChange={(e) => { setCovering(e.currentTarget.value as Covering); setTiles(''); }}>
            <option value="betongpanna">Betongpanna</option>
            <option value="tegelpanna">Tegelpanna</option>
            <option value="plat">Plåt (profil)</option>
            <option value="papp">Papp / duk</option>
          </select>
        </label>
        {def.tiles > 0 ? (
          <label className="lm-tool-field">
            <span>Pannor per m² (standard {nf(def.tiles, 1)})</span>
            <input type="number" min="0" inputMode="decimal" value={tiles} placeholder={nf(def.tiles, 1)} onChange={(e) => setTiles(e.currentTarget.value)} />
          </label>
        ) : null}
        <label className="lm-tool-field">
          <span>Spill / överlapp (%)</span>
          <input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row">
          <span>Byggnadens grundyta</span>
          <span>{nf(r.footprint, 1)} m²</span>
        </div>
        <div className="lm-result-row lm-result-highlight">
          <span>Takyta ({form === 'sadel' ? 'sadeltak' : 'pulpettak'})</span>
          <strong>{nf(r.roofArea, 1)} m²</strong>
        </div>
        {r.hasTiles ? (
          <div className="lm-result-row lm-result-total">
            <span>Antal takpannor (ca)</span>
            <strong>{nf(r.tileCount)} st</strong>
          </div>
        ) : (
          <div className="lm-result-row lm-result-total">
            <span>Taktäckning inkl. överlapp</span>
            <strong>{nf(r.feltM2, 1)} m²</strong>
          </div>
        )}
        {r.hasBatten ? (
          <div className="lm-result-row">
            <span>Bärläkt (ca)</span>
            <span>{nf(r.battenM)} löpmeter</span>
          </div>
        ) : null}
        <div className="lm-result-row">
          <span>Underlagspapp (ca)</span>
          <span>{nf(r.feltM2, 1)} m²</span>
        </div>
        <p className="lm-result-fine">
          En uppskattning: takyta = grundyta (inkl. utsprång) ÷ cos(taklutning).
          Antal pannor och läktavstånd beror på modell – kontrollera alltid
          tillverkarens läggningsanvisning. Underlagspapp och plåt säljs på rulle
          med överlapp.
        </p>
      </div>
    </div>
  );
}
