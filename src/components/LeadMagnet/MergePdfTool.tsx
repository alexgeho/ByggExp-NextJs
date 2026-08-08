import { useRef, useState } from 'react';

// Free "slå ihop PDF" tool. Merges several PDF (and PNG/JPG) files into one,
// entirely in the browser via pdf-lib — the files never leave the user's
// device, which is a privacy edge over server-based tools. Ported from the
// opsplattform merge-pdf implementation but run client-side.

type Item = { file: File; id: string };

const ACCEPT = '.pdf,.png,.jpg,.jpeg,application/pdf,image/png,image/jpeg';

export default function MergePdfTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  function addFiles(fileList: FileList | null) {
    if (!fileList) return;
    const added = Array.from(fileList).map((file, i) => ({
      file,
      id: `${file.name}-${file.size}-${items.length + i}`,
    }));
    setItems((prev) => [...prev, ...added]);
    setError('');
  }

  const remove = (id: string) => setItems((prev) => prev.filter((it) => it.id !== id));
  const clearAll = () => {
    setItems([]);
    setError('');
  };

  function move(index: number, dir: -1 | 1) {
    setItems((prev) => {
      const next = [...prev];
      const target = index + dir;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  async function merge() {
    if (items.length < 2) {
      setError('Lägg till minst 2 filer.');
      return;
    }
    setBusy(true);
    setError('');
    try {
      const { PDFDocument } = await import('pdf-lib');
      const merged = await PDFDocument.create();
      for (const { file } of items) {
        const bytes = new Uint8Array(await file.arrayBuffer());
        if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
          const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });
          const pages = await merged.copyPages(pdf, pdf.getPageIndices());
          pages.forEach((p) => merged.addPage(p));
        } else if (file.type === 'image/png') {
          const img = await merged.embedPng(bytes);
          merged.addPage([img.width, img.height]).drawImage(img, {
            x: 0,
            y: 0,
            width: img.width,
            height: img.height,
          });
        } else if (file.type === 'image/jpeg') {
          const img = await merged.embedJpg(bytes);
          merged.addPage([img.width, img.height]).drawImage(img, {
            x: 0,
            y: 0,
            width: img.width,
            height: img.height,
          });
        } else {
          setError(`Filtypen stöds inte: ${file.name}`);
          setBusy(false);
          return;
        }
      }
      const out = await merged.save();
      const blob = new Blob([out as unknown as BlobPart], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'sammanfogad.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch {
      setError('Kunde inte slå ihop filerna. Kontrollera att PDF:erna inte är lösenordsskyddade.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Slå ihop PDF – gratis och direkt i webbläsaren</h2>
        <p className="lm-tool-sub">
          Lägg till flera PDF-filer (eller bilder) och slå ihop dem till en enda PDF. Allt sker i din webbläsare – filerna laddas aldrig upp till någon server. Inget konto behövs.
        </p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={ACCEPT}
        multiple
        hidden
        onChange={(e) => {
          addFiles(e.currentTarget.files);
          e.currentTarget.value = '';
        }}
      />

      <button type="button" className="lm-pdf-drop" onClick={() => inputRef.current?.click()}>
        <strong>Välj filer</strong>
        <span>PDF, PNG eller JPG</span>
      </button>

      {items.length > 0 ? (
        <ol className="lm-pdf-list">
          {items.map((it, index) => (
            <li key={it.id} className="lm-pdf-item">
              <span className="lm-pdf-name">{it.file.name}</span>
              <span className="lm-pdf-actions-inline">
                <button type="button" aria-label="Flytta upp" onClick={() => move(index, -1)} disabled={index === 0}>↑</button>
                <button type="button" aria-label="Flytta ner" onClick={() => move(index, 1)} disabled={index === items.length - 1}>↓</button>
                <button type="button" aria-label="Ta bort" onClick={() => remove(it.id)}>×</button>
              </span>
            </li>
          ))}
        </ol>
      ) : null}

      {error ? <p className="lm-tool-error">{error}</p> : null}

      <div className="lm-tool-actions">
        {items.length > 0 ? (
          <button type="button" className="lm-tool-secondary" onClick={clearAll}>Rensa</button>
        ) : null}
        <button type="button" className="lm-tool-button" onClick={merge} disabled={busy || items.length < 2}>
          {busy ? 'Slår ihop…' : 'Slå ihop till PDF'}
        </button>
      </div>
    </div>
  );
}
