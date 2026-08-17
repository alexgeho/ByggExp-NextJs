import { useMemo, useState } from 'react';

import { downloadCsvRows } from '../../lib/download';
import { offertHref } from '../../lib/offert';

// Professional drywall (gipsskivor) calculator for a stud wall.
// Method follows Gyproc's Monteringshandbok: board width sets the stud c/c
// (900 mm -> c/c 450, 1200 mm -> c/c 600), a stud wall is clad on one or both
// sides, and screws run ~20 st/m² per board layer. It returns not just the
// sheet count but the whole bill of material: sheets, studs (löpmeter virke),
// syll/hammarband (or skena for steel), insulation and screws.

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

const nf = (v: number, d = 0) =>
  v.toLocaleString('sv-SE', { maximumFractionDigits: d });

export default function GipsKalkylatorTool() {
  const [length, setLength] = useState('');
  const [height, setHeight] = useState('2.5');
  const [sides, setSides] = useState('2'); // 1 = enkelsidig, 2 = dubbelsidig
  const [layers, setLayers] = useState('1'); // lager per sida
  const [boardWidth, setBoardWidth] = useState('1200'); // 900 | 1200 (mm)
  const [boardLen, setBoardLen] = useState('2.6'); // skivlängd (m)
  const [frame, setFrame] = useState('tra'); // tra | stal
  const [insulate, setInsulate] = useState('nej'); // ja | nej
  const [spill, setSpill] = useState('10');

  const r = useMemo(() => {
    const L = num(length);
    const H = num(height);
    const s = parseInt(sides, 10);
    const lay = parseInt(layers, 10);
    const cc = boardWidth === '900' ? 450 : 600; // mm, per Gyproc
    const spillF = 1 + num(spill) / 100;

    const oneSide = L * H; // m² per sida
    const cladArea = oneSide * s; // total beklädd yta
    const gipsNeed = cladArea * lay * spillF; // m² gips inkl. spill
    const boardArea = (num(boardWidth) / 1000) * num(boardLen);
    const sheets = boardArea > 0 ? Math.ceil(gipsNeed / boardArea) : 0;

    // Frame is single, regardless of how many sides are clad.
    const studCount = L > 0 ? Math.floor((L * 1000) / cc) + 1 : 0;
    const studMeters = studCount * H;
    const railMeters = L * 2; // syll + hammarband (eller skena upp/ned)

    const insulM2 = insulate === 'ja' ? oneSide : 0; // fyller stommen en gång
    // ~20 skruv/m² per gipslager (Gyproc: c200 kant / c300 fält).
    const screws = Math.round(cladArea * lay * 20 * spillF);

    return {
      cc,
      cladArea,
      gipsNeed,
      sheets,
      studCount,
      studMeters,
      railMeters,
      insulM2,
      screws,
    };
  }, [length, height, sides, layers, boardWidth, boardLen, insulate, spill]);

  const railLabel = frame === 'stal' ? 'Skena (upp + ned)' : 'Syll + hammarband';

  const exportCsv = () => {
    const rows: (string | number)[][] = [
      ['Gipskalkylator', 'byggexp.se'],
      [],
      ['Vägg', `${length || 0} × ${height || 0} m, ${sides === '2' ? 'dubbelsidig' : 'enkelsidig'}, ${layers} lager/sida`],
      [],
      ['Post', 'Mängd'],
      ['Gipsskivor', `${nf(r.sheets)} st`],
      ['Beklädd yta', `${nf(r.cladArea, 1)} m²`],
      ['Gips inkl. spill', `${nf(r.gipsNeed, 1)} m²`],
      [`Reglar (c/c ${r.cc} mm)`, `${nf(r.studCount)} st / ${nf(r.studMeters, 1)} lpm`],
      [railLabel, `${nf(r.railMeters, 1)} lpm`],
      ...(r.insulM2 > 0 ? [['Isolering', `${nf(r.insulM2, 1)} m²`]] : []),
      ['Gipsskruv', `${nf(r.screws)} st`],
    ];
    downloadCsvRows(rows, 'gips-materiallista.csv');
  };

  const offertUrl = offertHref([
    { desc: 'Gipsskivor', qty: r.sheets },
    { desc: `Reglar (c/c ${r.cc} mm)`, qty: r.studCount },
    { desc: `${railLabel} (lpm)`, qty: Math.round(r.railMeters) },
    { desc: 'Isolering (m²)', qty: Math.round(r.insulM2) },
    { desc: 'Gipsskruv', qty: r.screws },
    { desc: 'Arbete montering', qty: 1, labour: true },
  ]);

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Gipskalkylator – hela materiallistan</h2>
        <p className="lm-tool-sub">
          Fyll i väggen så räknar vi ut gipsskivor, reglar, syll/hammarband,
          isolering och skruv. Skivbredden styr regelavståndet (c/c) enligt
          Gyprocs monteringshandbok.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Vägglängd (m)</span>
          <input type="number" min="0" inputMode="decimal" value={length} placeholder="t.ex. 6" onChange={(e) => setLength(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Vägghöjd (m)</span>
          <input type="number" min="0" inputMode="decimal" value={height} onChange={(e) => setHeight(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Beklädnad</span>
          <select value={sides} onChange={(e) => setSides(e.currentTarget.value)}>
            <option value="2">Dubbelsidig (båda sidor)</option>
            <option value="1">Enkelsidig (en sida)</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>Lager per sida</span>
          <select value={layers} onChange={(e) => setLayers(e.currentTarget.value)}>
            <option value="1">1 lager</option>
            <option value="2">2 lager</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>Skivbredd</span>
          <select value={boardWidth} onChange={(e) => setBoardWidth(e.currentTarget.value)}>
            <option value="1200">1200 mm (c/c 600)</option>
            <option value="900">900 mm (c/c 450)</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>Skivlängd (m)</span>
          <select value={boardLen} onChange={(e) => setBoardLen(e.currentTarget.value)}>
            <option value="2.6">2,60 m</option>
            <option value="2.7">2,70 m</option>
            <option value="2.4">2,40 m</option>
            <option value="3.0">3,00 m</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>Stomme</span>
          <select value={frame} onChange={(e) => setFrame(e.currentTarget.value)}>
            <option value="tra">Träreglar</option>
            <option value="stal">Stålreglar</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>Isolering i väggen</span>
          <select value={insulate} onChange={(e) => setInsulate(e.currentTarget.value)}>
            <option value="nej">Nej</option>
            <option value="ja">Ja</option>
          </select>
        </label>
        <label className="lm-tool-field">
          <span>Spill (%)</span>
          <input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight">
          <span>Gipsskivor</span>
          <strong>{nf(r.sheets)} st</strong>
        </div>
        <div className="lm-result-row">
          <span>Beklädd yta / gips inkl. spill</span>
          <strong>{nf(r.cladArea, 1)} m² / {nf(r.gipsNeed, 1)} m²</strong>
        </div>
        <div className="lm-result-row">
          <span>Reglar (c/c {r.cc} mm)</span>
          <strong>{nf(r.studCount)} st · {nf(r.studMeters, 1)} lpm</strong>
        </div>
        <div className="lm-result-row">
          <span>{railLabel}</span>
          <strong>{nf(r.railMeters, 1)} lpm</strong>
        </div>
        {r.insulM2 > 0 ? (
          <div className="lm-result-row">
            <span>Isolering</span>
            <strong>{nf(r.insulM2, 1)} m²</strong>
          </div>
        ) : null}
        <div className="lm-result-row lm-result-total">
          <span>Gipsskruv</span>
          <strong>{nf(r.screws)} st</strong>
        </div>
        <p className="lm-result-fine">
          En uppskattning enligt Gyprocs monteringshandbok. Stommen räknas en gång
          även vid dubbelsidig beklädnad; skruv ca 20 st/m² och lager (kant c200,
          fält c300). Kontrollera alltid skivmått, regeltyp och infästning mot
          leverantörens anvisning för din väggtyp.
        </p>
        <div className="lm-tool-actions" style={{ marginTop: 16 }}>
          <a className="lm-tool-button" href={r.sheets > 0 ? offertUrl : undefined} aria-disabled={r.sheets <= 0}>
            Skapa offert av det här
          </a>
          <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={r.sheets <= 0}>
            Exportera till Excel
          </button>
        </div>
      </div>
    </div>
  );
}
