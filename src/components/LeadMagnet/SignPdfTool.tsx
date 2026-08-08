import { useRef, useState } from 'react';

import { downloadBytes } from '../../lib/download';

// Free "signera PDF" tool: draw a signature on a canvas and stamp it onto a
// chosen page/position of a PDF, in the browser via pdf-lib. This is a VISUAL
// signature (an image) — not a BankID / eIDAS legal e-signature.

const CANVAS_W = 500;
const CANVAS_H = 180;

type Position = 'br' | 'bl' | 'bc';

const POSITIONS: { value: Position; label: string }[] = [
  { value: 'br', label: 'Nere till höger' },
  { value: 'bl', label: 'Nere till vänster' },
  { value: 'bc', label: 'Nere i mitten' },
];

export default function SignPdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [position, setPosition] = useState<Position>('br');
  const [width, setWidth] = useState(180);
  const [hasInk, setHasInk] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);

  async function onSelect(selected: File | null) {
    setError('');
    setPageCount(null);
    setPage(1);
    setFile(selected);
    if (!selected) return;
    try {
      const { PDFDocument } = await import('pdf-lib');
      const bytes = new Uint8Array(await selected.arrayBuffer());
      const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });
      const count = pdf.getPageCount();
      setPageCount(count);
      setPage(count); // default: sign the last page
    } catch {
      setError('Kunde inte läsa PDF-filen.');
    }
  }

  function ctx() {
    const c = canvasRef.current;
    return c ? c.getContext('2d') : null;
  }

  function pointFromEvent(e: React.PointerEvent<HTMLCanvasElement>) {
    const c = canvasRef.current!;
    const rect = c.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) * (c.width / rect.width),
      y: (e.clientY - rect.top) * (c.height / rect.height),
    };
  }

  function start(e: React.PointerEvent<HTMLCanvasElement>) {
    const g = ctx();
    if (!g) return;
    drawing.current = true;
    canvasRef.current?.setPointerCapture(e.pointerId);
    g.lineWidth = 2.5;
    g.lineCap = 'round';
    g.lineJoin = 'round';
    g.strokeStyle = '#0a2236';
    const p = pointFromEvent(e);
    g.beginPath();
    g.moveTo(p.x, p.y);
  }

  function draw(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current) return;
    const g = ctx();
    if (!g) return;
    const p = pointFromEvent(e);
    g.lineTo(p.x, p.y);
    g.stroke();
    setHasInk(true);
  }

  function end() {
    drawing.current = false;
  }

  function clearSignature() {
    const g = ctx();
    if (g) g.clearRect(0, 0, CANVAS_W, CANVAS_H);
    setHasInk(false);
  }

  async function sign() {
    if (!file) {
      setError('Välj en PDF-fil.');
      return;
    }
    if (!hasInk) {
      setError('Rita din signatur i rutan.');
      return;
    }
    setBusy(true);
    setError('');
    try {
      const { PDFDocument } = await import('pdf-lib');
      const pngUrl = canvasRef.current!.toDataURL('image/png');
      const pngBytes = new Uint8Array(await (await fetch(pngUrl)).arrayBuffer());
      const bytes = new Uint8Array(await file.arrayBuffer());
      const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });
      const pages = pdf.getPages();
      const target = pages[Math.min(Math.max(page, 1), pages.length) - 1];
      const png = await pdf.embedPng(pngBytes);
      const sigW = width;
      const sigH = (width * CANVAS_H) / CANVAS_W;
      const { width: pw } = target.getSize();
      const margin = 40;
      let x = pw - sigW - margin;
      if (position === 'bl') x = margin;
      else if (position === 'bc') x = (pw - sigW) / 2;
      target.drawImage(png, { x, y: margin, width: sigW, height: sigH });
      downloadBytes(await pdf.save(), 'signerad.pdf');
    } catch {
      setError('Kunde inte signera PDF:en. Kontrollera att den inte är lösenordsskyddad.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Signera PDF – rita din signatur</h2>
        <p className="lm-tool-sub">
          Välj en PDF, rita din signatur och placera den på dokumentet. Allt sker i din webbläsare – filen laddas aldrig upp. Detta är en visuell signatur (bild), inte en BankID-signatur.
        </p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept=".pdf,application/pdf"
        hidden
        onChange={(e) => {
          void onSelect(e.currentTarget.files?.[0] || null);
          e.currentTarget.value = '';
        }}
      />

      <button type="button" className="lm-pdf-drop" onClick={() => inputRef.current?.click()}>
        <strong>{file ? file.name : 'Välj PDF-fil'}</strong>
        <span>{pageCount != null ? `${pageCount} sidor` : 'En PDF-fil'}</span>
      </button>

      <div className="lm-sign-pad-wrap">
        <span className="lm-sign-label">Rita din signatur</span>
        <canvas
          ref={canvasRef}
          className="lm-sign-pad"
          width={CANVAS_W}
          height={CANVAS_H}
          onPointerDown={start}
          onPointerMove={draw}
          onPointerUp={end}
          onPointerLeave={end}
        />
        <button type="button" className="lm-tool-secondary" onClick={clearSignature}>
          Rensa signatur
        </button>
      </div>

      <div className="lm-tool-grid" style={{ marginTop: 16 }}>
        <label className="lm-tool-field">
          <span>Sida att signera</span>
          <input
            type="number"
            min={1}
            max={pageCount || 1}
            value={page}
            onChange={(e) => setPage(parseInt(e.currentTarget.value, 10) || 1)}
          />
        </label>
        <label className="lm-tool-field">
          <span>Placering</span>
          <select value={position} onChange={(e) => setPosition(e.currentTarget.value as Position)}>
            {POSITIONS.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>
        </label>
        <label className="lm-tool-field">
          <span>Storlek: {width} px</span>
          <input
            type="range"
            min={100}
            max={280}
            value={width}
            onChange={(e) => setWidth(parseInt(e.currentTarget.value, 10))}
          />
        </label>
      </div>

      {error ? <p className="lm-tool-error">{error}</p> : null}

      <div className="lm-tool-actions">
        <button type="button" className="lm-tool-button" onClick={sign} disabled={busy || !file}>
          {busy ? 'Signerar…' : 'Signera och ladda ner'}
        </button>
      </div>
    </div>
  );
}
