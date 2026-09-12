import { useEffect, useMemo, useRef, useState } from 'react';

import { EGENKONTROLL_PRESETS } from './egenkontrollPresets';
import ToolAppCta from './ToolAppCta';

// Free egenkontroll (self-inspection checklist) tool. Categories and result
// states mirror the ByggExp KMA module (Kvalitet/Miljö/Arbetsmiljö, and
// Ej besvarad/Godkänd/Anmärkning/Ej aktuellt). Pick a ready-made template to
// auto-fill professional control points, or fill your own — then download a
// PDF. sv-only by strategy.

type Row = { point: string; result: string; comment: string };

const RESULTS = ['Ej besvarad', 'Godkänd', 'Anmärkning', 'Ej aktuellt'];

const emptyRow = (): Row => ({ point: '', result: RESULTS[0], comment: '' });

// Rows to seed the table with when a dedicated landing (e.g. egenkontroll-el-mall)
// pre-selects a preset, so the tool opens already relevant to the search intent.
const presetRows = (presetId: string): Row[] => {
  const preset = EGENKONTROLL_PRESETS.find((p) => p.id === presetId);
  if (!preset) return [emptyRow(), emptyRow(), emptyRow()];
  return preset.items.map((item) => ({
    point: item.reference ? `${item.point} (${item.reference})` : item.point,
    result: RESULTS[0],
    comment: '',
  }));
};

export default function EgenkontrollTool({
  defaultPreset,
}: {
  defaultPreset?: string;
} = {}) {
  const seed = defaultPreset
    ? EGENKONTROLL_PRESETS.find((p) => p.id === defaultPreset)
    : undefined;
  const [title, setTitle] = useState(seed?.name ?? '');
  const [project, setProject] = useState('');
  const [responsible, setResponsible] = useState('');
  const [date, setDate] = useState('');
  const [rows, setRows] = useState<Row[]>(
    defaultPreset ? presetRows(defaultPreset) : [emptyRow(), emptyRow(), emptyRow()],
  );
  const [busy, setBusy] = useState(false);
  // Clarity showed most "dead clicks" landing on the template buttons: users
  // clicked a template but got no visible feedback (the filled table is below
  // the fold). Track the chosen preset to highlight it, and scroll the table
  // into view so it's obvious the template was applied.
  const [activePreset, setActivePreset] = useState<string | null>(defaultPreset ?? null);
  const rowsRef = useRef<HTMLDivElement>(null);

  // --- Utkast sparas automatiskt i webbläsaren ---------------------------------
  // Det som gör verktyget värt att komma tillbaka till: du kan börja fylla i en
  // egenkontroll, stänga fliken och fortsätta senare – allt ligger kvar. Sparas
  // i localStorage (client-only, därav effekt istället för useState-init för att
  // undvika SSR-hydration-mismatch). Egen nyckel per mall så el/VVS/… inte krockar.
  const storageKey = `bx-egenkontroll-draft${defaultPreset ? `-${defaultPreset}` : ''}`;
  const [restored, setRestored] = useState(false);
  const hydratedRef = useRef(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const d = JSON.parse(raw) as Partial<{
          title: string; project: string; responsible: string;
          date: string; rows: Row[];
        }>;
        const hasContent =
          !!d.title?.trim() ||
          !!d.project?.trim() ||
          !!(d.rows?.some((r) => r.point?.trim() || r.comment?.trim() || r.result !== RESULTS[0]));
        if (hasContent) {
          if (d.title !== undefined) setTitle(d.title);
          if (d.project !== undefined) setProject(d.project);
          if (d.responsible !== undefined) setResponsible(d.responsible);
          if (d.date !== undefined) setDate(d.date);
          if (d.rows?.length) {
            setRows(d.rows);
            setActivePreset(null);
          }
          setRestored(true);
        }
      }
    } catch {
      /* korrupt/otillgänglig storage – strunt i det */
    }
    hydratedRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!hydratedRef.current) return; // spara inte förrän vi läst ev. befintligt utkast
    try {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify({ title, project, responsible, date, rows }),
      );
    } catch {
      /* full/avstängd storage – ej kritiskt */
    }
  }, [title, project, responsible, date, rows, storageKey]);

  function clearDraft() {
    try {
      window.localStorage.removeItem(storageKey);
    } catch {
      /* noop */
    }
    setTitle(seed?.name ?? '');
    setProject('');
    setResponsible('');
    setDate('');
    setRows(defaultPreset ? presetRows(defaultPreset) : [emptyRow(), emptyRow(), emptyRow()]);
    setActivePreset(defaultPreset ?? null);
    setRestored(false);
  }

  // Sammanfattning – ger känslan av ett riktigt verktyg och sporrar till att
  // faktiskt besvara alla punkter. Räknar bara ifyllda kontrollpunkter.
  const stats = useMemo(() => {
    const filled = rows.filter((r) => r.point.trim());
    return {
      total: filled.length,
      godkand: filled.filter((r) => r.result === 'Godkänd').length,
      anmarkning: filled.filter((r) => r.result === 'Anmärkning').length,
      kvar: filled.filter((r) => r.result === 'Ej besvarad').length,
    };
  }, [rows]);

  const setRow = (index: number, patch: Partial<Row>) =>
    setRows((prev) => prev.map((row, i) => (i === index ? { ...row, ...patch } : row)));
  const addRow = () => setRows((prev) => [...prev, emptyRow()]);

  const applyPreset = (presetId: string) => {
    const preset = EGENKONTROLL_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;
    setActivePreset(presetId);
    setTitle(preset.name);
    setRows(
      preset.items.map((item) => ({
        point: item.reference ? `${item.point} (${item.reference})` : item.point,
        result: RESULTS[0],
        comment: '',
      })),
    );
    // Let the table render, then bring it into view as clear confirmation.
    window.setTimeout(() => {
      rowsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  };
  const removeRow = (index: number) =>
    setRows((prev) => (prev.length > 1 ? prev.filter((_, i) => i !== index) : prev));

  async function downloadPdf() {
    setBusy(true);
    try {
      const { jsPDF } = await import('jspdf');
      // Landscape (horizontal) so the table has room for a Datum column and
      // wide "Kommentar" cells that are comfortable to write in.
      const doc = new jsPDF({ unit: 'pt', format: 'a4', orientation: 'landscape' });
      const marginX = 40;
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const tableRight = pageWidth - marginX;
      let y = 54;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.text('Egenkontroll', marginX, y);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(120);
      y += 16;
      doc.text('Skapad med ByggExp – byggexp.se', marginX, y);
      doc.setTextColor(20);
      y += 24;

      doc.setFontSize(11);
      const rightColX = marginX + 440;
      // Meta-fält: skriv värdet om det finns, annars en linje att fylla i för hand.
      const metaLine = (label: string, value: string, x: number, lineEnd: number) => {
        const text = `${label}: `;
        doc.text(text, x, y);
        const startX = x + doc.getTextWidth(text);
        if (value.trim()) {
          doc.text(value.trim(), startX, y);
        } else {
          doc.setDrawColor(160);
          doc.line(startX, y + 2, lineEnd, y + 2);
        }
      };
      metaLine('Titel', title, marginX, rightColX - 30);
      metaLine('Ansvarig', responsible, rightColX, tableRight);
      y += 22;
      metaLine('Projekt', project, marginX, rightColX - 30);
      metaLine('Datum', date, rightColX, tableRight);
      y += 26;

      // Table columns. Empty Resultat/Datum/Kommentar cells are deliberately
      // left blank so the sheet can be printed and filled in by hand.
      const colX = {
        point: marginX,
        result: marginX + 340,
        datum: marginX + 340 + 120,
        comment: marginX + 340 + 120 + 110,
      };
      const pointWidth = colX.result - colX.point - 12;
      const commentWidth = tableRight - colX.comment - 8;

      const drawHeader = () => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.text('Kontrollpunkt', colX.point + 4, y + 15);
        doc.text('Resultat', colX.result + 4, y + 15);
        doc.text('Datum', colX.datum + 4, y + 15);
        doc.text('Kommentar', colX.comment + 4, y + 15);
        doc.setFont('helvetica', 'normal');
        y += 22;
      };

      // Vertical column separators + top border for one page's table block.
      const drawVerticals = (top: number, bottom: number) => {
        doc.setDrawColor(180);
        doc.line(marginX, top, tableRight, top);
        [marginX, colX.result, colX.datum, colX.comment, tableRight].forEach((x) => {
          doc.line(x, top, x, bottom);
        });
      };

      let tableTop = y;
      drawHeader();
      doc.setDrawColor(180);
      doc.line(marginX, y, tableRight, y); // underline header row
      doc.setFontSize(10);

      rows.forEach((row) => {
        const pointLines = doc.splitTextToSize(row.point || '', pointWidth) as string[];
        const commentLines = doc.splitTextToSize(row.comment || '', commentWidth) as string[];
        const lineCount = Math.max(pointLines.length, commentLines.length, 1);
        const rowHeight = Math.max(lineCount * 13 + 13, 28);

        if (y + rowHeight > pageHeight - 70) {
          drawVerticals(tableTop, y);
          doc.addPage();
          y = 54;
          tableTop = y;
          drawHeader();
          doc.setDrawColor(180);
          doc.line(marginX, y, tableRight, y);
          doc.setFontSize(10);
        }

        const textY = y + 16;
        doc.text(pointLines, colX.point + 4, textY);
        // Only print an answered result; leave "Ej besvarad" blank to fill in.
        if (row.result && row.result !== 'Ej besvarad') {
          doc.text(row.result, colX.result + 4, textY);
        }
        // Datum-cellen lämnas alltid tom att fylla i.
        doc.text(commentLines, colX.comment + 4, textY);
        y += rowHeight;
        doc.setDrawColor(220);
        doc.line(marginX, y, tableRight, y); // row separator
      });

      drawVerticals(tableTop, y);

      y = Math.min(y + 34, pageHeight - 40);
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
      ['Projekt', project.trim() || ''],
      ['Ansvarig', responsible.trim() || ''],
      ['Datum', date || ''],
      [],
      ['Kontrollpunkt', 'Resultat', 'Datum', 'Kommentar'],
      ...rows.map((r) => [r.point || '', r.result, '', r.comment || '']),
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
      {restored ? (
        <div
          role="status"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            flexWrap: 'wrap',
            border: '1px solid rgba(22, 163, 74, 0.3)',
            background: 'rgba(22, 163, 74, 0.08)',
            borderRadius: 12,
            padding: '10px 14px',
            marginBottom: 16,
          }}
        >
          <span style={{ fontSize: 14 }}>
            ↩︎ Vi återställde ditt sparade utkast – fortsätt där du slutade.
          </span>
          <button
            type="button"
            className="lm-tool-secondary"
            style={{ marginLeft: 'auto' }}
            onClick={clearDraft}
          >
            Börja om
          </button>
        </div>
      ) : null}

      <div className="lm-tool-presets">
        <span className="lm-tool-presets-label">Börja från en färdig mall:</span>
        <div className="lm-tool-presets-buttons">
          {EGENKONTROLL_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              className={`lm-tool-preset${activePreset === preset.id ? ' is-active' : ''}`}
              aria-pressed={activePreset === preset.id}
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

        <div className="lm-tool-rows" ref={rowsRef}>
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

        {stats.total > 0 ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              flexWrap: 'wrap',
              margin: '4px 0 2px',
              fontSize: 13,
            }}
          >
            <span style={{ fontWeight: 600 }}>
              {stats.total} {stats.total === 1 ? 'kontrollpunkt' : 'kontrollpunkter'}
            </span>
            <span aria-hidden="true" style={{ color: '#9ca3af' }}>·</span>
            <span style={{ color: '#16a34a' }}>✓ {stats.godkand} godkända</span>
            {stats.anmarkning > 0 ? (
              <span style={{ color: '#d97706' }}>⚠ {stats.anmarkning} anmärkning{stats.anmarkning === 1 ? '' : 'ar'}</span>
            ) : null}
            {stats.kvar > 0 ? (
              <span style={{ color: '#6b7280' }}>○ {stats.kvar} kvar att besvara</span>
            ) : (
              <span style={{ color: '#16a34a' }}>Alla besvarade 🎉</span>
            )}
          </div>
        ) : null}

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

        <p className="lm-result-fine" style={{ marginTop: 8 }}>
          💾 Utkastet sparas automatiskt i den här webbläsaren – du kan stänga sidan och fortsätta senare.
        </p>
      </form>

      <ToolAppCta
        tool="egenkontroll-mall"
        heading="Slipp börja om – gör egenkontroller i ByggExp"
        text="Mallen ovan är gratis. I ByggExp finns färdiga egenkontroll-mallar för el, VVS, bygg och skyddsrond – du fyller i på plats, markerar resultat och samlar alla kontroller per projekt."
        bullets={[
          'Färdiga mallar för el, VVS, bygg och skyddsrond',
          'Anmärkningar följs upp tills de är åtgärdade',
          'Egenkontroller samlade med byggdagbok, foton och tid per projekt',
        ]}
        secondary={{ href: '/sv/verktyg', label: 'Se alla gratis verktyg' }}
      />
    </div>
  );
}
