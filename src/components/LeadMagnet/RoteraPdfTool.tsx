import { useRef, useState } from 'react';

import { downloadBytes } from '../../lib/download';

// Free "rotera PDF" tool: rotate every page 90/180/270°, in the browser via
// pdf-lib. Files never leave the device.

export default function RoteraPdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [angle, setAngle] = useState(90);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  async function rotate() {
    if (!file) {
      setError('Välj en PDF-fil.');
      return;
    }
    setBusy(true);
    setError('');
    try {
      const { PDFDocument, degrees } = await import('pdf-lib');
      const bytes = new Uint8Array(await file.arrayBuffer());
      const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });
      pdf.getPages().forEach((page) => {
        const current = page.getRotation().angle;
        page.setRotation(degrees((current + angle) % 360));
      });
      downloadBytes(await pdf.save(), 'roterad.pdf');
    } catch {
      setError('Kunde inte rotera PDF:en. Kontrollera att den inte är lösenordsskyddad.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Rotera PDF</h2>
        <p className="lm-tool-sub">
          Välj en PDF och rotera alla sidor. Allt sker i din webbläsare – filen laddas aldrig upp. Inget konto behövs.
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

      <label className="lm-tool-field lm-tool-field-wide" style={{ marginTop: 16 }}>
        <span>Rotation</span>
        <select value={angle} onChange={(e) => setAngle(parseInt(e.currentTarget.value, 10))}>
          <option value={90}>90° medurs</option>
          <option value={180}>180°</option>
          <option value={270}>270° (90° moturs)</option>
        </select>
      </label>

      {error ? <p className="lm-tool-error">{error}</p> : null}

      <div className="lm-tool-actions">
        <button type="button" className="lm-tool-button" onClick={rotate} disabled={busy || !file}>
          {busy ? 'Roterar…' : 'Rotera PDF'}
        </button>
      </div>
    </div>
  );
}
