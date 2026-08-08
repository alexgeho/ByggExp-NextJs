import { useMemo, useState } from 'react';

// Free tidrapport (time report) tool: fill employee + project + day rows and
// download a PDF with an automatic hour total. Mirrors what ByggExp captures
// for hours (worker, project, date, hours). sv-only by strategy.

type Row = { date: string; hours: string; note: string };

const emptyRow = (): Row => ({ date: '', hours: '', note: '' });

export default function TidrapportTool() {
  const [employee, setEmployee] = useState('');
  const [project, setProject] = useState('');
  const [rows, setRows] = useState<Row[]>([emptyRow(), emptyRow(), emptyRow()]);
  const [busy, setBusy] = useState(false);

  const total = useMemo(
    () =>
      rows.reduce((sum, row) => {
        const value = parseFloat(row.hours.replace(',', '.'));
        return sum + (Number.isFinite(value) ? value : 0);
      }, 0),
    [rows],
  );

  const setRow = (index: number, patch: Partial<Row>) =>
    setRows((prev) => prev.map((row, i) => (i === index ? { ...row, ...patch } : row)));

  const addRow = () => setRows((prev) => [...prev, emptyRow()]);
  const removeRow = (index: number) =>
    setRows((prev) => (prev.length > 1 ? prev.filter((_, i) => i !== index) : prev));

  const fillExample = () => {
    setEmployee('Erik Andersson');
    setProject('Nybyggnad Ekgatan 4');
    setRows([
      { date: '', hours: '8', note: 'Reglade innerväggar' },
      { date: '', hours: '8', note: 'El i kök' },
      { date: '', hours: '6', note: 'Städ och skyddsrond' },
    ]);
  };

  // Period templates — a daily, weekly or monthly timesheet, like the
  // variants competitors offer. Weekly seeds weekday labels, monthly seeds
  // one row per day of the month.
  const WEEKDAYS = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];
  const seedDay = () => setRows([emptyRow()]);
  const seedWeek = () => setRows(WEEKDAYS.map((day) => ({ date: '', hours: '', note: day })));
  const seedMonth = () =>
    setRows(Array.from({ length: 31 }, (_, i) => ({ date: '', hours: '', note: `Dag ${i + 1}` })));

  function downloadCsv() {
    const rowsOut = [
      ['Anställd', employee],
      ['Projekt', project],
      [],
      ['Datum', 'Timmar', 'Anteckning'],
      ...rows.map((r) => [r.date, r.hours, r.note]),
      [],
      ['Totalt', total.toLocaleString('sv-SE'), ''],
    ];
    const csv = rowsOut
      .map((cols) => cols.map((c) => `"${String(c ?? '').replace(/"/g, '""')}"`).join(';'))
      .join('\r\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `tidrapport-${(employee.trim() || 'anstalld').replace(/\s+/g, '-').toLowerCase()}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  async function downloadPdf() {
    setBusy(true);
    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      const marginX = 48;
      const pageWidth = doc.internal.pageSize.getWidth();
      let y = 64;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.text('Tidrapport', marginX, y);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(120);
      y += 18;
      doc.text('Skapad med ByggExp – byggexp.se', marginX, y);
      doc.setTextColor(20);
      y += 26;

      doc.setFontSize(11);
      doc.text(`Anställd: ${employee.trim() || '—'}`, marginX, y);
      doc.text(`Projekt: ${project.trim() || '—'}`, pageWidth / 2, y);
      y += 22;

      // table header
      const cols = { date: marginX, hours: marginX + 130, note: marginX + 210 };
      doc.setFont('helvetica', 'bold');
      doc.text('Datum', cols.date, y);
      doc.text('Timmar', cols.hours, y);
      doc.text('Anteckning', cols.note, y);
      y += 8;
      doc.setDrawColor(210);
      doc.line(marginX, y, pageWidth - marginX, y);
      y += 16;
      doc.setFont('helvetica', 'normal');

      const pageHeight = doc.internal.pageSize.getHeight();
      rows.forEach((row) => {
        if (y > pageHeight - 90) {
          doc.addPage();
          y = 64;
        }
        doc.text(row.date || '—', cols.date, y);
        doc.text(row.hours || '—', cols.hours, y);
        const note = doc.splitTextToSize(row.note || '—', pageWidth - cols.note - marginX) as string[];
        doc.text(note, cols.note, y);
        y += Math.max(note.length * 14, 16) + 4;
      });

      y += 6;
      doc.line(marginX, y, pageWidth - marginX, y);
      y += 18;
      doc.setFont('helvetica', 'bold');
      doc.text(`Totalt: ${total.toLocaleString('sv-SE')} timmar`, cols.hours, y);
      y += 40;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('Underskrift: ______________________________', marginX, y);

      doc.save(`tidrapport-${(employee.trim() || 'anstalld').replace(/\s+/g, '-').toLowerCase()}.pdf`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Fyll i och ladda ner din tidrapport</h2>
        <p className="lm-tool-sub">
          Välj period (dag, vecka eller månad), fyll i timmarna och ladda ner som PDF eller Excel. Summan räknas ut automatiskt. Inget konto behövs.
        </p>
      </div>

      <div className="lm-tool-presets">
        <span className="lm-tool-presets-label">Välj period eller fyll i exempel:</span>
        <div className="lm-tool-presets-buttons">
          <button type="button" className="lm-tool-preset" onClick={seedDay}>Dagsmall</button>
          <button type="button" className="lm-tool-preset" onClick={seedWeek}>Veckomall</button>
          <button type="button" className="lm-tool-preset" onClick={seedMonth}>Månadsmall</button>
          <button type="button" className="lm-tool-preset" onClick={fillExample}>Fyll i exempel</button>
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
            <span>Anställd</span>
            <input value={employee} onChange={(e) => setEmployee(e.currentTarget.value)} placeholder="För- och efternamn" />
          </label>
          <label className="lm-tool-field">
            <span>Projekt</span>
            <input value={project} onChange={(e) => setProject(e.currentTarget.value)} placeholder="T.ex. Nybyggnad Ekgatan 4" />
          </label>
        </div>

        <div className="lm-tool-rows">
          <div className="lm-tool-row lm-tool-row-head">
            <span>Datum</span>
            <span>Timmar</span>
            <span>Anteckning</span>
            <span aria-hidden="true" />
          </div>
          {rows.map((row, index) => (
            <div className="lm-tool-row" key={index}>
              <input type="date" value={row.date} onChange={(e) => setRow(index, { date: e.currentTarget.value })} />
              <input type="number" step="0.25" min="0" value={row.hours} placeholder="0" onChange={(e) => setRow(index, { hours: e.currentTarget.value })} />
              <input value={row.note} placeholder="Valfritt" onChange={(e) => setRow(index, { note: e.currentTarget.value })} />
              <button type="button" className="lm-tool-row-remove" aria-label="Ta bort rad" onClick={() => removeRow(index)}>
                ×
              </button>
            </div>
          ))}
        </div>

        <div className="lm-tool-actions">
          <button type="button" className="lm-tool-secondary" onClick={addRow}>
            + Lägg till rad
          </button>
          <span className="lm-tool-total">Totalt: {total.toLocaleString('sv-SE')} timmar</span>
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
