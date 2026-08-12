import { useState } from 'react';

import { EGENKONTROLL_PRESETS } from './egenkontrollPresets';

// Free egenkontroll (self-inspection checklist) tool. Categories and result
// states mirror the ByggExp KMA module (Kvalitet/Miljö/Arbetsmiljö, and
// Ej besvarad/Godkänd/Anmärkning/Ej aktuellt). Pick a ready-made template to
// auto-fill professional control points, or fill your own — then download a
// PDF. sv-only by strategy.

type Row = { point: string; result: string; comment: string };

const CATEGORIES = ['Kvalitet', 'Miljö', 'Arbetsmiljö', 'Övrigt'];
const RESULTS = ['Ej besvarad', 'Godkänd', 'Anmärkning', 'Ej aktuellt'];

const emptyRow = (): Row => ({ point: '', result: RESULTS[0], comment: '' });

export default function EgenkontrollTool() {
  const [title, setTitle] = useState('');
  const [project, setProject] = useState('');
  const [responsible, setResponsible] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [rows, setRows] = useState<Row[]>([emptyRow(), emptyRow(), emptyRow()]);
  const [busy, setBusy] = useState(false);

  const setRow = (index: number, patch: Partial<Row>) =>
    setRows((prev) => prev.map((row, i) => (i === index ? { ...row, ...patch } : row)));
  const addRow = () => setRows((prev) => [...prev, emptyRow()]);

  const applyPreset = (presetId: string) => {
    const preset = EGENKONTROLL_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;
    setTitle(preset.name);
    setCategory(preset.category);
    setRows(
      preset.items.map((item) => ({
        point: item.point,
        result: RESULTS[0],
        comment: item.reference ? `Ref: ${item.reference}` : '',
      })),
    );
  };
  const removeRow = (index: number) =>
    setRows((prev) => (prev.length > 1 ? prev.filter((_, i) => i !== index) : prev));

  async function downloadPdf() {
    setBusy(true);
    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      const marginX = 48;
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      let y = 64;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.text('Egenkontroll', marginX, y);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(120);
      y += 18;
      doc.text('Skapad med ByggExp – byggexp.se', marginX, y);
      doc.setTextColor(20);
      y += 26;

      doc.setFontSize(11);
      doc.text(`Titel: ${title.trim() || '—'}`, marginX, y);
      doc.text(`Kategori: ${category}`, pageWidth / 2, y);
      y += 18;
      doc.text(`Projekt: ${project.trim() || '—'}`, marginX, y);
      doc.text(`Ansvarig: ${responsible.trim() || '—'}`, pageWidth / 2, y);
      y += 18;
      doc.text(`Datum: ${date || '—'}`, marginX, y);
      y += 24;

      const cols = { point: marginX, result: marginX + 250, comment: marginX + 360 };
      doc.setFont('helvetica', 'bold');
      doc.text('Kontrollpunkt', cols.point, y);
      doc.text('Resultat', cols.result, y);
      doc.text('Kommentar', cols.comment, y);
      y += 8;
      doc.setDrawColor(210);
      doc.line(marginX, y, pageWidth - marginX, y);
      y += 16;
      doc.setFont('helvetica', 'normal');

      rows.forEach((row) => {
        if (y > pageHeight - 90) {
          doc.addPage();
          y = 64;
        }
        const point = doc.splitTextToSize(row.point || '—', 195) as string[];
        const comment = doc.splitTextToSize(row.comment || '—', pageWidth - cols.comment - marginX) as string[];
        doc.text(point, cols.point, y);
        doc.text(row.result, cols.result, y);
        doc.text(comment, cols.comment, y);
        y += Math.max(point.length, comment.length, 1) * 14 + 8;
      });

      y = Math.min(y + 30, pageHeight - 60);
      doc.setFontSize(10);
      doc.text('Underskrift ansvarig: ______________________________', marginX, y);

      doc.save(`egenkontroll-${(title.trim() || 'kontroll').replace(/\s+/g, '-').toLowerCase()}.pdf`);
    } finally {
      setBusy(false);
    }
  }

  // CSV opens directly in Excel/Google Sheets (BOM keeps åäö correct).
  function downloadCsv() {
    const out: (string | number)[][] = [
      ['Egenkontroll', title.trim() || ''],
      ['Kategori', category],
      ['Projekt', project.trim() || ''],
      ['Ansvarig', responsible.trim() || ''],
      ['Datum', date || ''],
      [],
      ['Kontrollpunkt', 'Resultat', 'Kommentar'],
      ...rows.map((r) => [r.point || '', r.result, r.comment || '']),
    ];
    const csv = out
      .map((cols) => cols.map((c) => `"${String(c ?? '').replace(/"/g, '""')}"`).join(';'))
      .join('\r\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `egenkontroll-${(title.trim() || 'kontroll').replace(/\s+/g, '-').toLowerCase()}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Fyll i och ladda ner din egenkontroll</h2>
        <p className="lm-tool-sub">
          Välj en färdig mall så fylls kontrollpunkterna i automatiskt – eller skriv egna. Ladda sedan ner din egenkontroll som PDF eller Excel. Inget konto behövs.
        </p>
      </div>

      <div className="lm-tool-presets">
        <span className="lm-tool-presets-label">Börja från en färdig mall:</span>
        <div className="lm-tool-presets-buttons">
          {EGENKONTROLL_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              className="lm-tool-preset"
              onClick={() => applyPreset(preset.id)}
            >
              {preset.name}
            </button>
          ))}
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
          <label className="lm-tool-field">
            <span>Titel</span>
            <input value={title} onChange={(e) => setTitle(e.currentTarget.value)} placeholder="T.ex. Egenkontroll el" />
          </label>
          <label className="lm-tool-field">
            <span>Kategori</span>
            <select value={category} onChange={(e) => setCategory(e.currentTarget.value)}>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>
          <label className="lm-tool-field">
            <span>Projekt</span>
            <input value={project} onChange={(e) => setProject(e.currentTarget.value)} placeholder="T.ex. Nybyggnad Ekgatan 4" />
          </label>
          <label className="lm-tool-field">
            <span>Ansvarig</span>
            <input value={responsible} onChange={(e) => setResponsible(e.currentTarget.value)} placeholder="Namn" />
          </label>
          <label className="lm-tool-field">
            <span>Datum</span>
            <input type="date" value={date} onChange={(e) => setDate(e.currentTarget.value)} />
          </label>
        </div>

        <div className="lm-tool-rows">
          <div className="lm-tool-row lm-tool-row-egen lm-tool-row-head">
            <span>Kontrollpunkt</span>
            <span>Resultat</span>
            <span>Kommentar</span>
            <span aria-hidden="true" />
          </div>
          {rows.map((row, index) => (
            <div className="lm-tool-row lm-tool-row-egen" key={index}>
              <input value={row.point} placeholder="Vad kontrolleras" onChange={(e) => setRow(index, { point: e.currentTarget.value })} />
              <select value={row.result} onChange={(e) => setRow(index, { result: e.currentTarget.value })}>
                {RESULTS.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              <input value={row.comment} placeholder="Valfritt" onChange={(e) => setRow(index, { comment: e.currentTarget.value })} />
              <button type="button" className="lm-tool-row-remove" aria-label="Ta bort rad" onClick={() => removeRow(index)}>
                ×
              </button>
            </div>
          ))}
        </div>

        <div className="lm-tool-actions">
          <button type="button" className="lm-tool-secondary" onClick={addRow}>
            + Lägg till kontrollpunkt
          </button>
          <button type="button" className="lm-tool-secondary" onClick={downloadCsv}>
            Ladda ner Excel
          </button>
          <button type="submit" className="lm-tool-button" disabled={busy}>
            {busy ? 'Skapar PDF…' : 'Ladda ner PDF'}
          </button>
        </div>
      </form>
    </div>
  );
}
