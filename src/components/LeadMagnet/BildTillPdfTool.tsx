import { useRef, useState } from 'react';

import { downloadBytes } from '../../lib/download';

// Free "bild till PDF" tool: turn JPG/PNG images into a single PDF (one image
// per page), fully in the browser via pdf-lib. Files never leave the device.

type Item = { file: File; id: string };

export default function BildTillPdfTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  function addFiles(list: FileList | null) {
    if (!list) return;
    const added = Array.from(list)
      .filter((f) => f.type === 'image/png' || f.type === 'image/jpeg')
      .map((file, i) => ({ file, id: `${file.name}-${file.size}-${items.length + i}` }));
    if (added.length === 0) {
      setError('Välj PNG- eller JPG-bilder.');
      return;
    }
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
      const t = index + dir;
      if (t < 0 || t >= next.length) return prev;
      [next[index], next[t]] = [next[t], next[index]];
      return next;
    });
  }

  async function create() {
    if (items.length === 0) {
      setError('Lägg till minst en bild.');
      return;
    }
    setBusy(true);
    setError('');
    try {
      const { PDFDocument } = await import('pdf-lib');
      const pdf = await PDFDocument.create();
      for (const { file } of items) {
        const bytes = new Uint8Array(await file.arrayBuffer());
        const img =
          file.type === 'image/png' ? await pdf.embedPng(bytes) : await pdf.embedJpg(bytes);
        pdf.addPage([img.width, img.height]).drawImage(img, {
          x: 0,
          y: 0,
          width: img.width,
          height: img.height,
        });
      }
      downloadBytes(await pdf.save(), 'bilder.pdf');
    } catch {
      setError('Kunde inte skapa PDF:en.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Konvertera bilder till PDF</h2>
        <p className="lm-tool-sub">
          Lägg till JPG- eller PNG-bilder och gör en PDF med en bild per sida. Allt sker i din webbläsare – bilderna laddas aldrig upp. Inget konto behövs.
        </p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept=".png,.jpg,.jpeg,image/png,image/jpeg"
        multiple
        hidden
        onChange={(e) => {
          addFiles(e.currentTarget.files);
          e.currentTarget.value = '';
        }}
      />

      <button type="button" className="lm-pdf-drop" onClick={() => inputRef.current?.click()}>
        <strong>Välj bilder</strong>
        <span>PNG eller JPG</span>
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
        <button type="button" className="lm-tool-button" onClick={create} disabled={busy || items.length === 0}>
          {busy ? 'Skapar PDF…' : 'Skapa PDF'}
        </button>
      </div>
    </div>
  );
}
