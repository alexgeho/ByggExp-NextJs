import { useRef, useState } from 'react';

import { downloadBytes } from '../../lib/download';

// Free "vattenstämpel / watermark" tool: stamp a diagonal text watermark on
// every page of a PDF, in the browser via pdf-lib. Files never leave the device.

const PRESETS = ['UTKAST', 'KOPIA', 'KONFIDENTIELLT', 'BETALD'];

export default function WatermarkPdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState('UTKAST');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  async function apply() {
    if (!file) {
      setError('Välj en PDF-fil.');
      return;
    }
    if (!text.trim()) {
      setError('Skriv texten till vattenstämpeln.');
      return;
    }
    setBusy(true);
    setError('');
    try {
      const { PDFDocument, StandardFonts, degrees, rgb } = await import('pdf-lib');
      const bytes = new Uint8Array(await file.arrayBuffer());
      const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });
      const font = await pdf.embedFont(StandardFonts.HelveticaBold);
      const label = text.trim();

      for (const page of pdf.getPages()) {
        const { width, height } = page.getSize();
        const diag = Math.sqrt(width * width + height * height);
        let size = 64;
        let textWidth = font.widthOfTextAtSize(label, size);
        if (textWidth > diag * 0.8) {
          size = (size * (diag * 0.8)) / textWidth;
          textWidth = font.widthOfTextAtSize(label, size);
        }
        const cos = Math.cos(Math.PI / 4);
        const sin = Math.sin(Math.PI / 4);
        page.drawText(label, {
          x: width / 2 - (textWidth / 2) * cos,
          y: height / 2 - (textWidth / 2) * sin,
          size,
          font,
          color: rgb(0.5, 0.5, 0.5),
          rotate: degrees(45),
          opacity: 0.25,
        });
      }
      downloadBytes(await pdf.save(), 'vattenstamplad.pdf');
    } catch {
      setError('Kunde inte lägga till vattenstämpeln. Kontrollera att PDF:en inte är lösenordsskyddad.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Lägg till vattenstämpel i PDF</h2>
        <p className="lm-tool-sub">
          Välj en PDF och lägg en diagonal vattenstämpel på alla sidor. Allt sker i din webbläsare – filen laddas aldrig upp. Inget konto behövs.
        </p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept=".pdf,application/pdf"
        hidden
        onChange={(e) => {
          setFile(e.currentTarget.files?.[0] || null);
          setError('');
          e.currentTarget.value = '';
        }}
      />

      <button type="button" className="lm-pdf-drop" onClick={() => inputRef.current?.click()}>
        <strong>{file ? file.name : 'Välj PDF-fil'}</strong>
        <span>En PDF-fil</span>
      </button>

      <div className="lm-tool-presets">
        <span className="lm-tool-presets-label">Vanliga stämplar:</span>
        <div className="lm-tool-presets-buttons">
          {PRESETS.map((p) => (
            <button key={p} type="button" className="lm-tool-preset" onClick={() => setText(p)}>
              {p}
            </button>
          ))}
        </div>
      </div>

      <label className="lm-tool-field lm-tool-field-wide" style={{ marginTop: 16 }}>
        <span>Text på vattenstämpeln</span>
        <input value={text} placeholder="t.ex. UTKAST" onChange={(e) => setText(e.currentTarget.value)} />
      </label>

      {error ? <p className="lm-tool-error">{error}</p> : null}

      <div className="lm-tool-actions">
        <button type="button" className="lm-tool-button" onClick={apply} disabled={busy || !file}>
          {busy ? 'Lägger till…' : 'Lägg till vattenstämpel'}
        </button>
      </div>
    </div>
  );
}
