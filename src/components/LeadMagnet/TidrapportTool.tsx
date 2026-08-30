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

  // A ready-to-fill blank weekly timesheet (Excel), for people who just want to
  // grab a template and fill it in by hand (or customise it below).
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

  // Build a print-friendly LANDSCAPE timesheet PDF: black text on white, thin
  // rules only (ink-light), with a Signatur column so each day can be signed
  // off. No extra deps — drawn directly with jsPDF.
  async function generatePdf(
    rowList: Row[],
    meta: { employee: string; project: string },
    filenameBase: string,
    opts: { fillPage?: boolean } = {},
  ) {
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF({ unit: 'pt', format: 'a4', orientation: 'landscape' });
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    const M = 40;
    const rowH = 26;
    const colDateX = M;
    const hoursRightX = M + 160;
    const colNoteX = M + 185;
    const colSigX = pageW - M - 200;
    const sigDivX = colSigX - 14;
    const noteW = sigDivX - colNoteX - 8;

    const rule = (yy: number, shade: number) => {
      doc.setDrawColor(shade, shade, shade);
      doc.setLineWidth(0.5);
      doc.line(M, yy, pageW - M, yy);
    };
    // Vertical divider that sets the Signatur column apart, drawn per row so it
    // continues correctly across page breaks.
    const sigDivider = (top: number) => {
      doc.setDrawColor(205, 205, 205);
      doc.setLineWidth(0.5);
      doc.line(sigDivX, top, sigDivX, top + rowH);
    };

    const drawTableHeader = (top: number) => {
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text('Datum', colDateX, top + 16);
      doc.text('Timmar', hoursRightX, top + 16, { align: 'right' });
      doc.text('Anteckning', colNoteX, top + 16);
      doc.text('Signatur', colSigX, top + 16);
      sigDivider(top);
      rule(top + rowH, 120);
    };

    // Title
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('Tidrapport', M, 54);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(90, 90, 90);
    doc.text('Tidredovisning per projekt', M, 70);
    rule(84, 120);

    // Meta
    let y = 112;
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.text('Anställd:', M, y);
    doc.setFont('helvetica', 'normal');
    doc.text(meta.employee.trim(), M + 56, y);
    doc.setFont('helvetica', 'bold');
    doc.text('Projekt:', M + 340, y);
    doc.setFont('helvetica', 'normal');
    doc.text(meta.project.trim(), M + 392, y);
    y += 15;
    doc.setFontSize(9);
    doc.setTextColor(120, 120, 120);
    doc.text(`Utskriven ${new Date().toLocaleDateString('sv-SE')}`, M, y);
    y += 20;

    // Table header
    drawTableHeader(y);
    y += rowH;

    // Rows (thin rule under each + Signatur divider, no fill)
    doc.setFont('helvetica', 'normal');
    let sum = 0;
    rowList.forEach((row) => {
      if (y + rowH > pageH - 50) {
        doc.addPage();
        y = 50;
        drawTableHeader(y);
        y += rowH;
      }
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text(row.date || '', colDateX, y + 16);
      doc.text(row.hours || '', hoursRightX, y + 16, { align: 'right' });
      const note = doc.splitTextToSize(row.note || '', noteW) as string[];
      doc.text(note[0] || '', colNoteX, y + 16);
      sigDivider(y);
      rule(y + rowH, 210);
      const value = parseFloat((row.hours || '').replace(',', '.'));
      if (Number.isFinite(value)) sum += value;
      y += rowH;
    });

    // Fill the rest of the page with empty rows, so a downloaded template has
    // no big blank space at the bottom and can be filled in by hand.
    if (opts.fillPage) {
      const fillBottom = pageH - 150;
      while (y + rowH <= fillBottom) {
        sigDivider(y);
        rule(y + rowH, 210);
        y += rowH;
      }
    }

    // Total (bold text + rule, no fill)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text('Totalt', colDateX, y + 16);
    const totalText = opts.fillPage && sum === 0 ? '' : `${sum.toLocaleString('sv-SE')} tim`;
    doc.text(totalText, hoursRightX, y + 16, { align: 'right' });
    rule(y + rowH + 2, 120);

    // Client approval — filled in by the client's representative on handover.
    y += rowH + 40;
    if (y + 70 > pageH - 40) {
      doc.addPage();
      y = 60;
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text('Godkänd av', M, y);
    y += 30;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setDrawColor(150, 150, 150);
    doc.setLineWidth(0.5);
    doc.text('Namn:', M, y);
    doc.line(M + 42, y + 2, M + 330, y + 2);
    doc.text('Signatur:', M + 360, y);
    doc.line(M + 420, y + 2, M + 615, y + 2);
    doc.text('Datum:', M + 645, y);
    doc.line(M + 695, y + 2, pageW - M, y + 2);

    doc.save(`${filenameBase}.pdf`);
  }

  const fileBase = () =>
    `tidrapport-${(employee.trim() || 'anstalld').replace(/\s+/g, '-').toLowerCase()}`;

  async function downloadPdf() {
    setBusy(true);
    try {
      await generatePdf(rows, { employee, project }, fileBase(), { fillPage: true });
    } finally {
      setBusy(false);
    }
  }

  async function downloadBlankPdf() {
    setBusy(true);
    try {
      await generatePdf([], { employee: '', project: '' }, 'tidrapport-tom-mall', { fillPage: true });
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
