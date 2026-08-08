import { useRef, useState } from 'react';

import { downloadBytes, parsePageSpec } from '../../lib/download';

// Free "ta bort sidor" tool: remove selected pages (e.g. "2,4") from a PDF,
// keeping the rest — in the browser via pdf-lib. Files never leave the device.

export default function TaBortSidorTool() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [pages, setPages] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  async function onSelect(selected: File | null) {
    setError('');
    setPageCount(null);
    setFile(selected);
    if (!selected) return;
    try {
      const { PDFDocument } = await import('pdf-lib');
      const bytes = new Uint8Array(await selected.arrayBuffer());
      const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });
      setPageCount(pdf.getPageCount());
    } catch {
      setError('Kunde inte läsa PDF-filen.');
    }
  }

  async function removePages() {
    if (!file) {
      setError('Välj en PDF-fil.');
      return;
    }
    if (!pages.trim()) {
      setError('Ange vilka sidor du vill ta bort, t.ex. 2,4.');
      return;
    }
    setBusy(true);
    setError('');
    try {
      const { PDFDocument } = await import('pdf-lib');
      const bytes = new Uint8Array(await file.arrayBuffer());
      const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });
      const total = pdf.getPageCount();
      const toRemove = new Set(parsePageSpec(pages, total));
      const keep = pdf.getPageIndices().filter((i) => !toRemove.has(i));
      if (keep.length === 0) {
        setError('Du kan inte ta bort alla sidor.');
        setBusy(false);
        return;
      }
      const out = await PDFDocument.create();
      const copied = await out.copyPages(pdf, keep);
      copied.forEach((p) => out.addPage(p));
      downloadBytes(await out.save(), 'utan-sidor.pdf');
    } catch {
      setError('Kunde inte bearbeta PDF:en. Kontrollera att den inte är lösenordsskyddad.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Ta bort sidor ur en PDF</h2>
        <p className="lm-tool-sub">
          Välj en PDF och ange vilka sidor som ska tas bort – resten behålls. Allt sker i din webbläsare, filen laddas aldrig upp. Inget konto behövs.
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

      <label className="lm-tool-field lm-tool-field-wide" style={{ marginTop: 16 }}>
        <span>Sidor att ta bort</span>
        <input value={pages} placeholder="t.ex. 2,4" onChange={(e) => setPages(e.currentTarget.value)} />
      </label>

      {error ? <p className="lm-tool-error">{error}</p> : null}

      <div className="lm-tool-actions">
        <button type="button" className="lm-tool-button" onClick={removePages} disabled={busy || !file}>
          {busy ? 'Bearbetar…' : 'Ta bort sidor'}
        </button>
      </div>
    </div>
  );
}
