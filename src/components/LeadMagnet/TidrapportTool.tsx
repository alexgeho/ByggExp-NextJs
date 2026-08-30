import { useMemo, useRef, useState } from 'react';

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
  // Highlight the chosen template and scroll the table into view — same fix as
  // egenkontroll, where Clarity showed dead clicks on template buttons that gave
  // no visible feedback.
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const rowsRef = useRef<HTMLDivElement>(null);
  const afterPreset = (id: string) => {
    setActivePreset(id);
    window.setTimeout(() => {
      rowsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  };

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
    afterPreset('exempel');
  };

  // Period templates — a daily, weekly or monthly timesheet, like the
  // variants competitors offer. Weekly seeds weekday labels, monthly seeds
  // one row per day of the month.
  const WEEKDAYS = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];
  const seedDay = () => { setRows([emptyRow()]); afterPreset('dag'); };
  const seedWeek = () => { setRows(WEEKDAYS.map((day) => ({ date: '', hours: '', note: day }))); afterPreset('vecka'); };
  const seedMonth = () => {
    setRows(Array.from({ length: 31 }, (_, i) => ({ date: '', hours: '', note: `Dag ${i + 1}` })));
    afterPreset('manad');
  };

  // A ready-to-fill blank weekly timesheet, for people who just want to grab a
  // template and fill it in by hand (or customise it below).
  const blankRows = (): Row[] => WEEKDAYS.map((day) => ({ date: '', hours: '', note: day }));

  function downloadBlankCsv() {
    const out: (string | number)[][] = [
      ['Anställd', ''],
      ['Projekt', ''],
      [],
      ['Datum', 'Timmar', 'Anteckning'],
      ...WEEKDAYS.map((day) => ['', '', day]),
      [],
      ['Totalt', '', ''],
    ];
    const csv = out
      .map((cols) => cols.map((c) => `"${String(c ?? '').replace(/"/g, '""')}"`).join(';'))
      .join('\r\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tidrapport-tom-mall.csv';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

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

  // Build a print-friendly, ink-light timesheet PDF: black text on white with
  // thin rules only — no filled header band or zebra shading, so it's cheap to
  // print. No extra deps — drawn directly with jsPDF.
  async function generatePdf(
    rowList: Row[],
    meta: { employee: string; project: string },
    filenameBase: string,
  ) {
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    const M = 48;
    const rowH = 22;
    const colDateX = M;
    const colNoteX = M + 210;
    const hoursRightX = colNoteX - 24;
    const noteW = pageW - M - colNoteX;

    const rule = (yy: number, shade: number) => {
      doc.setDrawColor(shade, shade, shade);
      doc.setLineWidth(0.5);
      doc.line(M, yy, pageW - M, yy);
    };

    const drawTableHeader = (top: number) => {
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text('Datum', colDateX, top + 14);
      doc.text('Timmar', hoursRightX, top + 14, { align: 'right' });
      doc.text('Anteckning', colNoteX, top + 14);
      rule(top + rowH, 120);
    };

    // Title (plain text, no coloured band)
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('Tidrapport', M, 60);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(90, 90, 90);
    doc.text('Tidredovisning per projekt', M, 76);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text('byggexp.se', pageW - M, 60, { align: 'right' });
    rule(92, 120);

    // Meta
    let y = 120;
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.text('Anställd:', M, y);
    doc.setFont('helvetica', 'normal');
    doc.text(meta.employee.trim() || '—', M + 56, y);
    doc.setFont('helvetica', 'bold');
    doc.text('Projekt:', pageW / 2, y);
    doc.setFont('helvetica', 'normal');
    doc.text(meta.project.trim() || '—', pageW / 2 + 50, y);
    y += 15;
    doc.setFontSize(9);
    doc.setTextColor(120, 120, 120);
    doc.text(`Utskriven ${new Date().toLocaleDateString('sv-SE')}`, M, y);
    y += 20;

    // Table header
    drawTableHeader(y);
    y += rowH;

    // Rows (thin rule under each, no fill)
    doc.setFont('helvetica', 'normal');
    let sum = 0;
    rowList.forEach((row) => {
      if (y + rowH > pageH - 120) {
        doc.addPage();
        y = 60;
        drawTableHeader(y);
        y += rowH;
      }
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text(row.date || '', colDateX, y + 14);
      doc.text(row.hours || '', hoursRightX, y + 14, { align: 'right' });
      const note = doc.splitTextToSize(row.note || '', noteW) as string[];
      doc.text(note[0] || '', colNoteX, y + 14);
      rule(y + rowH, 210);
      const value = parseFloat((row.hours || '').replace(',', '.'));
      if (Number.isFinite(value)) sum += value;
      y += rowH;
    });

    // Total (bold text + rule, no fill)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text('Totalt', colDateX, y + 15);
    doc.text(`${sum.toLocaleString('sv-SE')} tim`, hoursRightX, y + 15, { align: 'right' });
    rule(y + rowH + 4, 120);
    y += rowH + 44;

    // Signature
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text('Underskrift', M, y);
    doc.setDrawColor(150, 150, 150);
    doc.line(M + 66, y + 2, M + 250, y + 2);
    doc.text('Datum', pageW / 2, y);
    doc.line(pageW / 2 + 44, y + 2, pageW - M, y + 2);

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text('Skapad gratis med ByggExp – byggexp.se/verktyg/tidrapport-mall', M, pageH - 30);

    doc.save(`${filenameBase}.pdf`);
  }

  const fileBase = () =>
    `tidrapport-${(employee.trim() || 'anstalld').replace(/\s+/g, '-').toLowerCase()}`;

  async function downloadPdf() {
    setBusy(true);
    try {
      await generatePdf(rows, { employee, project }, fileBase());
    } finally {
      setBusy(false);
    }
  }

  async function downloadBlankPdf() {
    setBusy(true);
    try {
      await generatePdf(blankRows(), { employee: '', project: '' }, 'tidrapport-tom-mall');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Ladda ner din tidrapport-mall</h2>
        <p className="lm-tool-sub">
          Ladda ner en färdig tom mall direkt – eller fyll i timmarna online nedan och ladda ner en klar PDF eller Excel med summan uträknad. Inget konto behövs.
        </p>
      </div>

      <div
        className="lm-tool-quick"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '12px',
          margin: '0 0 22px',
          padding: '16px',
          border: '1px solid #dfe3ea',
          borderRadius: '12px',
          background: '#f7f9fc',
        }}
      >
        <span style={{ fontWeight: 600 }}>Vill du bara ha en tom mall?</span>
        <button type="button" className="lm-tool-button" disabled={busy} onClick={() => void downloadBlankPdf()}>
          {busy ? 'Skapar…' : 'Ladda ner tom mall (PDF)'}
        </button>
        <button type="button" className="lm-tool-secondary" onClick={downloadBlankCsv}>
          Tom mall (Excel)
        </button>
        <span style={{ color: '#6e7685', fontSize: '0.9em' }}>Eller anpassa din egen nedan.</span>
      </div>

      <div className="lm-tool-presets">
        <span className="lm-tool-presets-label">Välj period eller fyll i exempel:</span>
        <div className="lm-tool-presets-buttons">
          <button type="button" className={`lm-tool-preset${activePreset === 'dag' ? ' is-active' : ''}`} aria-pressed={activePreset === 'dag'} onClick={seedDay}>Dagsmall</button>
          <button type="button" className={`lm-tool-preset${activePreset === 'vecka' ? ' is-active' : ''}`} aria-pressed={activePreset === 'vecka'} onClick={seedWeek}>Veckomall</button>
          <button type="button" className={`lm-tool-preset${activePreset === 'manad' ? ' is-active' : ''}`} aria-pressed={activePreset === 'manad'} onClick={seedMonth}>Månadsmall</button>
          <button type="button" className={`lm-tool-preset${activePreset === 'exempel' ? ' is-active' : ''}`} aria-pressed={activePreset === 'exempel'} onClick={fillExample}>Fyll i exempel</button>
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

        <div className="lm-tool-rows" ref={rowsRef}>
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
