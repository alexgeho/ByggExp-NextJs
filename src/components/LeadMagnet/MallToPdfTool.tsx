import { useEffect, useRef, useState } from 'react';

// Generic form → PDF/Excel lead-magnet tool. Give it a set of fields, a heading
// and an example, and the visitor fills it in and downloads a ready template as
// PDF (jspdf, in the browser) or Excel/CSV. Used by the contract/checklist/plan
// templates so they all share the same reliable renderer.

export type MallField = {
  name: string;
  label: string;
  type?: 'text' | 'date' | 'textarea';
  placeholder?: string;
};

export type MallConfig = {
  /** Heading printed at the top of the PDF and shown above the form. */
  pdfHeading: string;
  /** Short instruction under the form heading. */
  subtitle: string;
  /** Filename prefix, e.g. "entreprenadkontrakt". */
  filePrefix: string;
  /** Field the filename stamp is taken from (falls back to a generic stamp). */
  stampField?: string;
  fields: MallField[];
  example: Record<string, string>;
  /** Two signature lines at the bottom of the PDF; omit to hide. */
  signatures?: [string, string];
  /**
   * Prominent "download the blank template right now" bar above the form.
   * Serves visitors who just want the mall in one click (e.g. "abt 06 mall
   * gratis") without scrolling or filling anything in.
   */
  instantDownload?: {
    /** e.g. "Ladda ner tom entreprenadkontrakt-mall" */
    label: string;
    /** Small helper line under the buttons. */
    note?: string;
  };
  /**
   * Quick-fill chips that set a single field (e.g. pick AB 04 / ABT 06).
   * Lets the searcher land on exactly the variant they googled.
   */
  presets?: {
    field: string;
    label: string;
    options: string[];
  };
  /**
   * Persist the visitor's input to localStorage so a bookmarked page keeps
   * their draft on return. Off by default (other mall tools don't need it).
   */
  persist?: boolean;
};

export default function MallToPdfTool({ config }: { config: MallConfig }) {
  const empty: Record<string, string> = Object.fromEntries(config.fields.map((f) => [f.name, '']));
  const [values, setValues] = useState<Record<string, string>>(empty);
  const [busy, setBusy] = useState(false);
  const storageKey = `mall-draft:${config.filePrefix}`;
  const restored = useRef(false);

  // Restore a saved draft on mount so a bookmarked page keeps the visitor's
  // input. Runs once, client-side only.
  useEffect(() => {
    if (!config.persist || restored.current) return;
    restored.current = true;
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const saved = JSON.parse(raw) as Record<string, string>;
        // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time restore of a saved draft after mount (avoids SSR/hydration mismatch)
        setValues((prev) => ({ ...prev, ...saved }));
      }
    } catch {
      // ignore unreadable/blocked storage
    }
  }, [config.persist, storageKey]);

  // Save on change (only once a draft actually has content).
  useEffect(() => {
    if (!config.persist || !restored.current) return;
    try {
      const hasContent = Object.values(values).some((v) => v.trim() !== '');
      if (hasContent) window.localStorage.setItem(storageKey, JSON.stringify(values));
      else window.localStorage.removeItem(storageKey);
    } catch {
      // ignore quota/blocked storage
    }
  }, [config.persist, storageKey, values]);

  const setField = (name: string, value: string) =>
    setValues((prev) => ({ ...prev, [name]: value }));

  const fillExample = () => setValues({ ...empty, ...config.example });

  const clearForm = () => {
    setValues(empty);
    if (config.persist) {
      try {
        window.localStorage.removeItem(storageKey);
      } catch {
        // ignore
      }
    }
  };

  const activePreset = config.presets ? values[config.presets.field]?.trim() : '';

  const stamp = (src: Record<string, string>) => {
    const raw = config.stampField ? src[config.stampField]?.trim() : '';
    return raw ? raw.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'mall' : 'mall';
  };

  async function downloadPdf(src: Record<string, string> = values) {
    setBusy(true);
    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      const marginX = 48;
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const contentWidth = pageWidth - marginX * 2;
      let y = 64;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(19);
      const heading = doc.splitTextToSize(config.pdfHeading, contentWidth) as string[];
      doc.text(heading, marginX, y);
      y += heading.length * 20 - 2;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(120);
      y += 14;
      doc.text('Skapad med ByggExp – byggexp.se', marginX, y);
      doc.setTextColor(20);
      y += 20;
      doc.setDrawColor(210);
      doc.line(marginX, y, pageWidth - marginX, y);
      y += 24;

      for (const field of config.fields) {
        const value = src[field.name]?.trim() || '—';
        if (y > pageHeight - 120) {
          doc.addPage();
          y = 64;
        }
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        const label = doc.splitTextToSize(field.label, contentWidth) as string[];
        doc.text(label, marginX, y);
        y += label.length * 14 + 1;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        const lines = doc.splitTextToSize(value, contentWidth) as string[];
        doc.text(lines, marginX, y);
        y += lines.length * 14 + 12;
      }

      if (config.signatures) {
        if (y > pageHeight - 120) {
          doc.addPage();
          y = 64;
        }
        y += 12;
        doc.setDrawColor(210);
        doc.line(marginX, y, pageWidth - marginX, y);
        y += 30;
        doc.setFontSize(10);
        doc.text(`${config.signatures[0]}: ____________________________`, marginX, y);
        y += 28;
        doc.text(`${config.signatures[1]}: ____________________________`, marginX, y);
      }

      doc.save(`${config.filePrefix}-${stamp(src)}.pdf`);
    } finally {
      setBusy(false);
    }
  }

  // CSV opens directly in Excel/Google Sheets (BOM keeps åäö correct).
  function downloadCsv(src: Record<string, string> = values) {
    const rows: (string | number)[][] = [
      [config.pdfHeading, ''],
      ['Skapad med', 'ByggExp – byggexp.se'],
      [],
      ...config.fields.map((field) => [field.label, src[field.name]?.trim() || '']),
    ];
    const csv = rows
      .map((cols) => cols.map((c) => `"${String(c ?? '').replace(/"/g, '""')}"`).join(';'))
      .join('\r\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${config.filePrefix}-${stamp(src)}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="lm-tool">
      {config.instantDownload && (
        <div className="lm-tool-instant">
          <div className="lm-tool-instant-text">
            <strong>{config.instantDownload.label}</strong>
            {config.instantDownload.note && <span>{config.instantDownload.note}</span>}
          </div>
          <div className="lm-tool-instant-actions">
            <button
              type="button"
              className="lm-tool-button"
              disabled={busy}
              onClick={() => void downloadPdf(empty)}
            >
              {busy ? 'Skapar PDF…' : 'Ladda ner tom PDF'}
            </button>
            <button
              type="button"
              className="lm-tool-secondary"
              onClick={() => downloadCsv(empty)}
            >
              Word / Excel
            </button>
          </div>
        </div>
      )}

      <div className="lm-tool-head">
        <h2 className="lm-tool-title">{config.pdfHeading}</h2>
        <p className="lm-tool-sub">{config.subtitle}</p>
      </div>

      {config.presets && (
        <div className="lm-tool-presets">
          <span className="lm-tool-presets-label">{config.presets.label}</span>
          <div className="lm-tool-presets-buttons">
            {config.presets.options.map((option) => (
              <button
                key={option}
                type="button"
                className={`lm-tool-preset${activePreset === option ? ' is-active' : ''}`}
                onClick={() => setField(config.presets!.field, option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="lm-tool-presets">
        <span className="lm-tool-presets-label">Se hur den fylls i:</span>
        <div className="lm-tool-presets-buttons">
          <button type="button" className="lm-tool-preset" onClick={fillExample}>
            Fyll i exempel
          </button>
          <button type="button" className="lm-tool-preset" onClick={clearForm}>
            Rensa formuläret
          </button>
        </div>
      </div>

      <form
        className="lm-tool-form"
        onSubmit={(event) => {
          event.preventDefault();
          void downloadPdf();
        }}
      >
        <div className="lm-tool-grid">
          {config.fields.map((field) => (
            <label
              key={field.name}
              className={`lm-tool-field${field.type === 'textarea' ? ' lm-tool-field-wide' : ''}`}
            >
              <span>{field.label}</span>
              {field.type === 'textarea' ? (
                <textarea
                  rows={3}
                  value={values[field.name]}
                  placeholder={field.placeholder}
                  onChange={(event) => setField(field.name, event.currentTarget.value)}
                />
              ) : (
                <input
                  type={field.type || 'text'}
                  value={values[field.name]}
                  placeholder={field.placeholder}
                  onChange={(event) => setField(field.name, event.currentTarget.value)}
                />
              )}
            </label>
          ))}
        </div>

        <div className="lm-tool-actions">
          <button type="submit" className="lm-tool-button" disabled={busy}>
            {busy ? 'Skapar PDF…' : 'Ladda ner PDF'}
          </button>
          <button type="button" className="lm-tool-secondary" onClick={() => downloadCsv()}>
            Ladda ner Excel
          </button>
        </div>
      </form>
    </div>
  );
}
