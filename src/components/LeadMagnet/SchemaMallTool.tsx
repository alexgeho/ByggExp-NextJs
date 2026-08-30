import { useRef, useState } from 'react';

// Free arbetsschema (weekly staff schedule) tool: employees × weekdays, download
// a clean print-friendly PDF or Excel — or grab a blank template to fill by hand.
// sv-only by strategy. Mirrors the print style of the tidrapport-mall tool.

const DAYS = ['Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör', 'Sön'];

type Row = { name: string; days: string[] };
const emptyRow = (): Row => ({ name: '', days: ['', '', '', '', '', '', ''] });

export default function SchemaMallTool() {
  const [company, setCompany] = useState('');
  const [week, setWeek] = useState('');
  const [rows, setRows] = useState<Row[]>([emptyRow(), emptyRow(), emptyRow()]);
  const [busy, setBusy] = useState(false);
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const rowsRef = useRef<HTMLDivElement>(null);
  const afterPreset = (id: string) => {
    setActivePreset(id);
    window.setTimeout(() => rowsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 60);
  };

  const setName = (i: number, name: string) =>
    setRows((prev) => prev.map((r, idx) => (idx === i ? { ...r, name } : r)));
  const setDay = (i: number, d: number, value: string) =>
    setRows((prev) => prev.map((r, idx) => (idx === i ? { ...r, days: r.days.map((v, dd) => (dd === d ? value : v)) } : r)));
  const addRow = () => setRows((prev) => [...prev, emptyRow()]);
  const removeRow = (i: number) => setRows((prev) => (prev.length > 1 ? prev.filter((_, idx) => idx !== i) : prev));

  const fillExample = () => {
    setCompany('Andersson Bygg AB');
    setWeek('v. 36');
    setRows([
      { name: 'Erik Andersson', days: ['07–16', '07–16', '07–16', '07–16', '07–15', '', ''] },
      { name: 'Johan Nilsson', days: ['07–16', '07–16', '', '07–16', '07–16', '', ''] },
      { name: 'Sara Lind', days: ['08–17', '08–17', '08–17', '', '08–17', '', ''] },
    ]);
    afterPreset('exempel');
  };

  async function generatePdf(
    rowList: Row[],
    meta: { company: string; week: string },
    filenameBase: string,
    opts: { fillPage?: boolean } = {},
  ) {
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF({ unit: 'pt', format: 'a4', orientation: 'landscape' });
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    const M = 40;
    const rowH = 26;
    const nameX = M;
    const dayStart = M + 150;
    const dcw = (pageW - M - dayStart) / 7;

    const colX = [M];
    for (let i = 0; i <= 7; i += 1) colX.push(dayStart + i * dcw);

    const rule = (yy: number, shade: number) => {
      doc.setDrawColor(shade, shade, shade);
      doc.setLineWidth(0.5);
      doc.line(M, yy, pageW - M, yy);
    };
    const colDividers = (top: number) => {
      doc.setDrawColor(205, 205, 205);
      doc.setLineWidth(0.5);
      colX.forEach((x) => doc.line(x, top, x, top + rowH));
    };
    const dayCenter = (d: number) => dayStart + d * dcw + dcw / 2;

    const drawTableHeader = (top: number) => {
      rule(top, 120);
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text('Namn', nameX + 6, top + 16);
      DAYS.forEach((d, i) => doc.text(d, dayCenter(i), top + 16, { align: 'center' }));
      colDividers(top);
      rule(top + rowH, 120);
    };

    // Title
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('Arbetsschema', M, 54);
    rule(70, 120);

    // Meta
    let y = 98;
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.text('Företag:', M, y);
    doc.setFont('helvetica', 'normal');
    doc.text(meta.company.trim(), M + 56, y);
    doc.setFont('helvetica', 'bold');
    doc.text('Vecka:', M + 340, y);
    doc.setFont('helvetica', 'normal');
    doc.text(meta.week.trim(), M + 388, y);
    y += 24;

    // Table
    drawTableHeader(y);
    y += rowH;
    doc.setFont('helvetica', 'normal');
    rowList.forEach((row) => {
      if (y + rowH > pageH - 40) {
        doc.addPage();
        y = 50;
        drawTableHeader(y);
        y += rowH;
      }
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      const name = doc.splitTextToSize(row.name || '', dayStart - nameX - 12) as string[];
      doc.text(name[0] || '', nameX + 6, y + 16);
      row.days.forEach((value, d) => {
        if (value) doc.text(value, dayCenter(d), y + 16, { align: 'center' });
      });
      colDividers(y);
      rule(y + rowH, 210);
      y += rowH;
    });

    if (opts.fillPage) {
      const fillBottom = pageH - 40;
      while (y + rowH <= fillBottom) {
        colDividers(y);
        rule(y + rowH, 210);
        y += rowH;
      }
    }

    doc.save(`${filenameBase}.pdf`);
  }

  function generateCsv(rowList: Row[], meta: { company: string; week: string }, filenameBase: string) {
    const out: string[][] = [
      ['Företag', meta.company],
      ['Vecka', meta.week],
      [],
      ['Namn', ...DAYS],
      ...rowList.map((r) => [r.name, ...r.days]),
    ];
    const csv = out
      .map((cols) => cols.map((c) => `"${String(c ?? '').replace(/"/g, '""')}"`).join(';'))
      .join('\r\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filenameBase}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  const fileBase = () => `arbetsschema-${(week.trim() || 'vecka').replace(/\s+/g, '-').replace(/\./g, '').toLowerCase()}`;
  const blankRows = (): Row[] => Array.from({ length: 6 }, emptyRow);

  async function downloadPdf() {
    setBusy(true);
    try {
      await generatePdf(rows, { company, week }, fileBase(), { fillPage: true });
    } finally {
      setBusy(false);
    }
  }
  async function downloadBlankPdf() {
    setBusy(true);
    try {
      await generatePdf([], { company: '', week: '' }, 'arbetsschema-tom-mall', { fillPage: true });
    } finally {
      setBusy(false);
    }
  }
  const downloadCsv = () => generateCsv(rows, { company, week }, fileBase());
  const downloadBlankCsv = () => generateCsv(blankRows(), { company: '', week: '' }, 'arbetsschema-tom-mall');

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Gör ett arbetsschema för veckan</h2>
        <p className="lm-tool-sub">
          Ladda ner en färdig tom mall direkt – eller fyll i personal och pass per dag nedan och ladda ner som PDF eller Excel. Inget konto behövs.
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
        <span style={{ color: '#6e7685', fontSize: '0.9em' }}>Eller fyll i ditt eget nedan.</span>
      </div>

      <div className="lm-tool-presets">
        <span className="lm-tool-presets-label">Fyll i exempel:</span>
        <div className="lm-tool-presets-buttons">
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
            <span>Företag / avdelning</span>
            <input value={company} onChange={(e) => setCompany(e.currentTarget.value)} placeholder="T.ex. Andersson Bygg AB" />
          </label>
          <label className="lm-tool-field">
            <span>Vecka</span>
            <input value={week} onChange={(e) => setWeek(e.currentTarget.value)} placeholder="T.ex. v. 36" />
          </label>
        </div>

        <div className="lm-tool-rows" ref={rowsRef} style={{ overflowX: 'auto' }}>
          <div className="lm-tool-schema-row lm-tool-schema-head" style={{ display: 'grid', gridTemplateColumns: '160px repeat(7, 1fr) 32px', gap: '6px', alignItems: 'center', fontWeight: 600, minWidth: '720px' }}>
            <span>Namn</span>
            {DAYS.map((d) => (
              <span key={d} style={{ textAlign: 'center' }}>{d}</span>
            ))}
            <span aria-hidden="true" />
          </div>
          {rows.map((row, i) => (
            <div className="lm-tool-schema-row" key={i} style={{ display: 'grid', gridTemplateColumns: '160px repeat(7, 1fr) 32px', gap: '6px', alignItems: 'center', minWidth: '720px', marginTop: '6px' }}>
              <input value={row.name} placeholder="Namn" onChange={(e) => setName(i, e.currentTarget.value)} />
              {row.days.map((value, d) => (
                <input key={d} value={value} placeholder="–" style={{ textAlign: 'center' }} onChange={(e) => setDay(i, d, e.currentTarget.value)} />
              ))}
              <button type="button" className="lm-tool-row-remove" aria-label="Ta bort rad" onClick={() => removeRow(i)}>×</button>
            </div>
          ))}
        </div>

        <div className="lm-tool-actions">
          <button type="button" className="lm-tool-secondary" onClick={addRow}>+ Lägg till person</button>
          <span className="lm-tool-total" />
          <button type="button" className="lm-tool-secondary" onClick={downloadCsv}>Ladda ner Excel</button>
          <button type="submit" className="lm-tool-button" disabled={busy}>
            {busy ? 'Skapar PDF…' : 'Ladda ner PDF'}
          </button>
        </div>
      </form>
    </div>
  );
}
