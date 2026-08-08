import { useRef, useState } from 'react';

// Free "dela PDF" tool: extract selected pages (e.g. "1,3,5-7") from a PDF into
// a new file, entirely in the browser via pdf-lib. Files never leave the
// device. Ported from the opsplattform split-pdf implementation, client-side.

export default function SplitPdfTool() {
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

  function parsePages(input: string, total: number): number[] {
    const out: number[] = [];
    for (const part of input.split(',').map((p) => p.trim()).filter(Boolean)) {
      if (part.includes('-')) {
        const [a, b] = part.split('-').map((n) => parseInt(n.trim(), 10) - 1);
        for (let i = a; i <= b && i < total; i++) if (i >= 0) out.push(i);
      } else {
        const p = parseInt(part, 10) - 1;
        if (p >= 0 && p < total) out.push(p);
      }
    }
    return [...new Set(out)];
  }

  async function split() {
    if (!file) {
      setError('Välj en PDF-fil.');
      return;
    }
    if (!pages.trim()) {
      setError('Ange vilka sidor du vill extrahera, t.ex. 1,3,5-7.');
      return;
    }
    setBusy(true);
    setError('');
    try {
      const { PDFDocument } = await import('pdf-lib');
      const bytes = new Uint8Array(await file.arrayBuffer());
      const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });
      const indices = parsePages(pages, pdf.getPageCount());
      if (indices.length === 0) {
        setError('Inga giltiga sidor angavs.');
        setBusy(false);
        return;
      }
      const out = await PDFDocument.create();
      const copied = await out.copyPages(pdf, indices);
      copied.forEach((p) => out.addPage(p));
      const outBytes = await out.save();
      const blob = new Blob([outBytes as unknown as BlobPart], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'utvalda-sidor.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch {
      setError('Kunde inte dela PDF:en. Kontrollera att den inte är lösenordsskyddad.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Dela PDF – extrahera sidor direkt i webbläsaren</h2>
        <p className="lm-tool-sub">
          Välj en PDF och ange vilka sidor du vill plocka ut. Allt sker i din webbläsare – filen laddas aldrig upp till någon server. Inget konto behövs.
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
        <span>Sidor att extrahera</span>
        <input
          value={pages}
          placeholder="t.ex. 1,3,5-7"
          onChange={(e) => setPages(e.currentTarget.value)}
        />
      </label>

      {error ? <p className="lm-tool-error">{error}</p> : null}

      <div className="lm-tool-actions">
        <button type="button" className="lm-tool-button" onClick={split} disabled={busy || !file}>
          {busy ? 'Delar…' : 'Extrahera sidor'}
        </button>
      </div>
    </div>
  );
}
