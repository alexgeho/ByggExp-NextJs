import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import { fakturaHref, offertHref } from '../../lib/offert';

// Professional concrete calculator. Concrete volume depends on the shape of
// the pour, so the tool switches inputs by construction type:
//  - Platta/golv: area × thickness, with an optional thickened edge beam
//    (kantbalk) — the classic "platta på mark".
//  - Grundmur/balk/fundament: length × width × height.
//  - Plintar/stolphål (round): π·r²·depth × count.
// It returns volume, dry-concrete bags (25 kg ≈ 12,5 L per Finja/Finja-typ),
// big-bag and mixing-water equivalents, plus reinforcement mesh area for slabs.

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

const nf = (v: number, d = 0) =>
  v.toLocaleString('sv-SE', { maximumFractionDigits: d });

type Shape = 'platta' | 'balk' | 'plint';

export default function BetongKalkylatorTool() {
  const [shape, setShape] = useState<Shape>('platta');

  // Platta
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [thickness, setThickness] = useState('10'); // cm
  const [edge, setEdge] = useState('nej'); // kantbalk ja/nej
  const [edgeW, setEdgeW] = useState('20'); // cm
  const [edgeH, setEdgeH] = useState('20'); // cm

  // Balk / grundmur
  const [bLen, setBLen] = useState('');
  const [bWidth, setBWidth] = useState('20'); // cm
  const [bHeight, setBHeight] = useState('30'); // cm

  // Plint / stolphål
  const [diam, setDiam] = useState('30'); // cm
  const [depth, setDepth] = useState('60'); // cm
  const [count, setCount] = useState('4');

  const [bagYield, setBagYield] = useState('12.5'); // liter per 25 kg-säck
  const [spill, setSpill] = useState('5');

  const r = useMemo(() => {
    let base = 0; // m³ före spill
    let meshArea = 0; // m² armeringsnät (endast platta)

    if (shape === 'platta') {
      const L = num(length);
      const W = num(width);
      base = L * W * (num(thickness) / 100);
      meshArea = L * W;
      if (edge === 'ja') {
        const perim = 2 * (L + W);
        base += perim * (num(edgeW) / 100) * (num(edgeH) / 100);
      }
    } else if (shape === 'balk') {
      base = num(bLen) * (num(bWidth) / 100) * (num(bHeight) / 100);
    } else {
      const rMeter = num(diam) / 100 / 2;
      base = Math.PI * rMeter * rMeter * (num(depth) / 100) * num(count);
    }

    const volume = base * (1 + num(spill) / 100);
    const liters = volume * 1000;
    const y = num(bagYield);
    const bags = y > 0 ? Math.ceil(liters / y) : 0;
    const bigBags = liters > 0 ? liters / 520 : 0; // storsäck 1000 kg ≈ 520 L
    const water = bags * 3.5; // ca 3–4 liter per 25 kg-säck

    return { volume, liters, bags, bigBags, water, meshArea };
  }, [shape, length, width, thickness, edge, edgeW, edgeH, bLen, bWidth, bHeight, diam, depth, count, bagYield, spill]);

  const shapeLabel =
    shape === 'platta' ? 'Platta / golv' : shape === 'balk' ? 'Grundmur / balk' : 'Plintar / stolphål';

  const exportCsv = () => {
    const rows: (string | number)[][] = [
      ['Betongkalkylator', 'byggexp.se'],
      ['Gjutning', shapeLabel],
      [],
      ['Post', 'Mängd'],
      ['Betongvolym inkl. spill', `${nf(r.volume, 2)} m³`],
      ['Motsvarar', `${nf(r.liters)} liter`],
      ['Säckar torrbetong (25 kg)', `${nf(r.bags)} st`],
      ['Eller storsäck (1000 kg)', `${nf(r.bigBags, 1)} st`],
      ['Blandningsvatten (ca)', `${nf(r.water)} liter`],
      ...(shape === 'platta' && r.meshArea > 0 ? [['Armeringsnät (ca)', `${nf(r.meshArea, 1)} m²`]] : []),
    ];
    gaEvent('export_excel', { tool: 'betong-kalkylator' });
    downloadCsvRows(rows, 'betong-materiallista.csv');
  };

  const seedRows = [
    { desc: 'Betong, säck 25 kg', qty: r.bags },
    ...(shape === 'platta' && r.meshArea > 0 ? [{ desc: 'Armeringsnät (m²)', qty: Math.round(r.meshArea) }] : []),
    { desc: 'Arbete gjutning', qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Betongkalkylator – volym, säckar & vatten</h2>
        <p className="lm-tool-sub">
          Välj vad du gjuter så räknar vi ut betongvolym, antal säckar,
          blandningsvatten och – för plattor – armeringsnät. En säck 25 kg
          torrbetong ger ca 12,5 liter färdig betong.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Vad gjuter du?</span>
          <select value={shape} onChange={(e) => setShape(e.currentTarget.value as Shape)}>
            <option value="platta">Platta / golv</option>
            <option value="balk">Grundmur / balk / fundament</option>
            <option value="plint">Plintar / stolphål (runda)</option>
          </select>
        </label>

        {shape === 'platta' ? (
          <>
            <label className="lm-tool-field">
              <span>Längd (m)</span>
              <input type="number" min="0" inputMode="decimal" value={length} placeholder="t.ex. 5" onChange={(e) => setLength(e.currentTarget.value)} />
            </label>
            <label className="lm-tool-field">
              <span>Bredd (m)</span>
              <input type="number" min="0" inputMode="decimal" value={width} placeholder="t.ex. 4" onChange={(e) => setWidth(e.currentTarget.value)} />
            </label>
            <label className="lm-tool-field">
              <span>Tjocklek (cm)</span>
              <input type="number" min="0" inputMode="decimal" value={thickness} onChange={(e) => setThickness(e.currentTarget.value)} />
            </label>
            <label className="lm-tool-field">
              <span>Kantbalk?</span>
              <select value={edge} onChange={(e) => setEdge(e.currentTarget.value)}>
                <option value="nej">Nej</option>
                <option value="ja">Ja</option>
              </select>
            </label>
            {edge === 'ja' ? (
              <>
                <label className="lm-tool-field">
                  <span>Kantbalk bredd (cm)</span>
                  <input type="number" min="0" inputMode="decimal" value={edgeW} onChange={(e) => setEdgeW(e.currentTarget.value)} />
                </label>
                <label className="lm-tool-field">
                  <span>Kantbalk höjd (cm)</span>
                  <input type="number" min="0" inputMode="decimal" value={edgeH} onChange={(e) => setEdgeH(e.currentTarget.value)} />
                </label>
              </>
            ) : null}
          </>
        ) : null}

        {shape === 'balk' ? (
          <>
            <label className="lm-tool-field">
              <span>Längd (m)</span>
              <input type="number" min="0" inputMode="decimal" value={bLen} placeholder="t.ex. 12" onChange={(e) => setBLen(e.currentTarget.value)} />
            </label>
            <label className="lm-tool-field">
              <span>Bredd (cm)</span>
              <input type="number" min="0" inputMode="decimal" value={bWidth} onChange={(e) => setBWidth(e.currentTarget.value)} />
            </label>
            <label className="lm-tool-field">
              <span>Höjd (cm)</span>
              <input type="number" min="0" inputMode="decimal" value={bHeight} onChange={(e) => setBHeight(e.currentTarget.value)} />
            </label>
          </>
        ) : null}

        {shape === 'plint' ? (
          <>
            <label className="lm-tool-field">
              <span>Diameter (cm)</span>
              <input type="number" min="0" inputMode="decimal" value={diam} onChange={(e) => setDiam(e.currentTarget.value)} />
            </label>
            <label className="lm-tool-field">
              <span>Djup (cm)</span>
              <input type="number" min="0" inputMode="decimal" value={depth} onChange={(e) => setDepth(e.currentTarget.value)} />
            </label>
            <label className="lm-tool-field">
              <span>Antal (st)</span>
              <input type="number" min="0" inputMode="numeric" value={count} onChange={(e) => setCount(e.currentTarget.value)} />
            </label>
          </>
        ) : null}

        <label className="lm-tool-field">
          <span>Liter per säck (25 kg)</span>
          <input type="number" min="0" inputMode="decimal" value={bagYield} onChange={(e) => setBagYield(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Spill (%)</span>
          <input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight">
          <span>Betongvolym inkl. spill</span>
          <strong>{nf(r.volume, 2)} m³</strong>
        </div>
        <div className="lm-result-row">
          <span>Motsvarar</span>
          <span>{nf(r.liters)} liter</span>
        </div>
        <div className="lm-result-row lm-result-total">
          <span>Säckar torrbetong (25 kg)</span>
          <strong>{nf(r.bags)} st</strong>
        </div>
        <div className="lm-result-row">
          <span>Eller storsäck (1000 kg)</span>
          <span>{nf(r.bigBags, 1)} st</span>
        </div>
        <div className="lm-result-row">
          <span>Blandningsvatten (ca)</span>
          <span>{nf(r.water)} liter</span>
        </div>
        {shape === 'platta' && r.meshArea > 0 ? (
          <div className="lm-result-row">
            <span>Armeringsnät (ca)</span>
            <span>{nf(r.meshArea, 1)} m²</span>
          </div>
        ) : null}
        <p className="lm-result-fine">
          En uppskattning inkl. spill. Säckens volym varierar mellan produkter –
          kontrollera värdet på förpackningen. Från ca 1–2 m³ är fabriksbetong
          (kubik) oftast billigare och enklare än säck. Armeringsnät säljs i
          mattor (t.ex. 2,3 × 5 m) – räkna med överlapp.
        </p>
        <div className="lm-tool-actions" style={{ marginTop: 16 }}>
          <a className="lm-tool-button" href={r.volume > 0 ? offertUrl : undefined} aria-disabled={r.volume <= 0} onClick={() => gaEvent('offert_from_calculator', { tool: 'betong-kalkylator' })}>
            Skapa offert av det här
          </a>
          <a className="lm-tool-secondary" href={r.volume > 0 ? fakturaUrl : undefined} aria-disabled={r.volume <= 0} onClick={() => gaEvent('faktura_from_calculator', { tool: 'betong-kalkylator' })}>
            Skapa faktura
          </a>
          <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={r.volume <= 0}>
            Exportera till Excel
          </button>
        </div>
      </div>
    </div>
  );
}
