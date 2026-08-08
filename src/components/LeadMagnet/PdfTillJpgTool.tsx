import { useRef, useState } from 'react';

import { downloadBlob } from '../../lib/download';

// Free "PDF till JPG" tool: render each PDF page to a JPG image, in the browser
// via pdfjs-dist. One page downloads as a .jpg; several pages are zipped.
// Files never leave the device.

const QUALITY = [
  { value: 1.5, label: 'Standard' },
  { value: 2, label: 'Hög' },
  { value: 3, label: 'Mycket hög' },
];

export default function PdfTillJpgTool() {
  const [file, setFile] = useState<File | null>(null);
  const [scale, setScale] = useState(2);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  async function convert() {
    if (!file) {
      setError('Välj en PDF-fil.');
      return;
    }
    setBusy(true);
    setError('');
    setProgress('');
    try {
      const pdfjs = await import('pdfjs-dist');
      (pdfjs as unknown as { GlobalWorkerOptions: { workerSrc: string } }).GlobalWorkerOptions.workerSrc =
        '/pdf.worker.min.mjs';
      const bytes = new Uint8Array(await file.arrayBuffer());
      const doc = await pdfjs.getDocument({ data: bytes }).promise;
      const blobs: Blob[] = [];

      for (let i = 1; i <= doc.numPages; i++) {
        setProgress(`Renderar sida ${i} av ${doc.numPages}…`);
        const page = await doc.getPage(i);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);
        const context = canvas.getContext('2d');
        if (!context) throw new Error('no canvas context');
        await page.render({ canvasContext: context, viewport }).promise;
        const blob = await new Promise<Blob | null>((res) =>
          canvas.toBlob(res, 'image/jpeg', 0.92),
        );
        if (blob) blobs.push(blob);
      }

      const base = file.name.replace(/\.pdf$/i, '') || 'pdf';
      if (blobs.length === 0) {
        setError('Inga sidor kunde konverteras.');
      } else if (blobs.length === 1) {
        downloadBlob(blobs[0], `${base}.jpg`);
      } else {
        setProgress('Packar zip…');
        const JSZip = (await import('jszip')).default;
        const zip = new JSZip();
        blobs.forEach((b, idx) => zip.file(`${base}-sida-${idx + 1}.jpg`, b));
        const content = await zip.generateAsync({ type: 'blob' });
        downloadBlob(content, `${base}-jpg.zip`);
      }
      setProgress('');
    } catch {
      setError('Kunde inte konvertera PDF:en. Kontrollera att den inte är lösenordsskyddad.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Konvertera PDF till JPG</h2>
        <p className="lm-tool-sub">
          Välj en PDF så gör vi en JPG-bild av varje sida. En sida laddas ner som bild, flera sidor som en zip-fil. Allt sker i din webbläsare – filen laddas aldrig upp.
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
        <span>Bildkvalitet</span>
        <select value={scale} onChange={(e) => setScale(parseFloat(e.currentTarget.value))}>
          {QUALITY.map((q) => (
            <option key={q.value} value={q.value}>{q.label}</option>
          ))}
        </select>
      </label>

      {progress ? <p className="lm-tool-sub" style={{ marginTop: 12 }}>{progress}</p> : null}
      {error ? <p className="lm-tool-error">{error}</p> : null}

      <div className="lm-tool-actions">
        <button type="button" className="lm-tool-button" onClick={convert} disabled={busy || !file}>
          {busy ? 'Konverterar…' : 'Konvertera till JPG'}
        </button>
      </div>
    </div>
  );
}
