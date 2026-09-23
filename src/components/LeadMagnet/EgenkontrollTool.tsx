import { useEffect, useMemo, useRef, useState } from 'react';

import { EGENKONTROLL_PRESETS } from './egenkontrollPresets';
import ToolAppCta from './ToolAppCta';

// Free egenkontroll (self-inspection checklist) tool. Categories and result
// states mirror the ByggExp KMA module (Kvalitet/Miljö/Arbetsmiljö, and
// Ej besvarad/Godkänd/Anmärkning/Ej aktuellt). Pick a ready-made template to
// auto-fill professional control points, or fill your own — then download a
// PDF. sv-only by strategy.

type Row = {
  point: string;
  result: string;
  comment: string;
  // Optional protocol fields, filled from presets like el (sections + measured values).
  section?: string;
  reference?: string;
  /** How the point is checked (Boverket: "hur"), e.g. "Mätning". */
  method?: string;
  unit?: string;
  requirement?: string;
  measured?: string;
};

const RESULTS = ['Ej besvarad', 'Godkänd', 'Anmärkning', 'Ej aktuellt'];

const emptyRow = (): Row => ({ point: '', result: RESULTS[0], comment: '' });

// Rows to seed the table with when a dedicated landing (e.g. egenkontroll-el-mall)
// pre-selects a preset, so the tool opens already relevant to the search intent.
const presetRows = (presetId: string): Row[] => {
  const preset = EGENKONTROLL_PRESETS.find((p) => p.id === presetId);
  if (!preset) return [emptyRow(), emptyRow(), emptyRow()];
  return preset.items.map((item) => ({
    point: item.point,
    result: RESULTS[0],
    comment: '',
    section: item.section,
    reference: item.reference,
    method: item.method,
    unit: item.unit,
    requirement: item.requirement,
    measured: '',
  }));
};

// Rows that carry a requirement or unit turn the checklist into a protocol with
// a Krav column (what the point is checked against); rows with a unit add a
// Mätvärde column on top.
const isProtocol = (rows: Row[]) => rows.some((r) => r.unit || r.requirement);
const hasMeasure = (rows: Row[]) => rows.some((r) => r.unit);

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
  const [meta, setMeta] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  // Clarity showed most "dead clicks" landing on the template buttons: users
  // clicked a template but got no visible feedback (the filled table is below
  // the fold). Track the chosen preset to highlight it, and scroll the table
  // into view so it's obvious the template was applied.
  const [activePreset, setActivePreset] = useState<string | null>(defaultPreset ?? null);
  const rowsRef = useRef<HTMLDivElement>(null);
  // Preset whose extra header fields / signatures / footnote apply. Kept separate
  // from activePreset (the highlight), which resets when a draft is restored.
  const [presetId, setPresetId] = useState<string | null>(defaultPreset ?? null);
  const preset = EGENKONTROLL_PRESETS.find((p) => p.id === presetId);
  const protocol = isProtocol(rows);
  const measure = hasMeasure(rows);

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
          date: string; rows: Row[]; meta: Record<string, string>; presetId: string | null;
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
          if (d.meta) setMeta(d.meta);
          if (d.presetId !== undefined) setPresetId(d.presetId);
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
        JSON.stringify({ title, project, responsible, date, rows, meta, presetId }),
      );
    } catch {
      /* full/avstängd storage – ej kritiskt */
    }
  }, [title, project, responsible, date, rows, meta, presetId, storageKey]);

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
    setPresetId(defaultPreset ?? null);
    setMeta({});
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

  const applyPreset = (id: string) => {
    const chosen = EGENKONTROLL_PRESETS.find((p) => p.id === id);
    if (!chosen) return;
    setActivePreset(id);
    setPresetId(id);
    setTitle(chosen.name);
    setRows(presetRows(id));
    // Let the table render, then bring it into view as clear confirmation.
    window.setTimeout(() => {
      rowsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  };
  const removeRow = (index: number) =>
    setRows((prev) => (prev.length > 1 ? prev.filter((_, i) => i !== index) : prev));

  // "Egenkontroll El" → egenkontroll-el (not egenkontroll-egenkontroll-el).
  const fileBase = () =>
    `egenkontroll-${(title.trim() || 'kontroll').replace(/^egenkontroll\s*/i, '').trim() || 'kontroll'}`
      .replace(/[\s/]+/g, '-')
      .toLowerCase();

  async function downloadPdf() {
    setBusy(true);
    try {
      const { jsPDF } = await import('jspdf');
      // jsPDF's built-in Helvetica is WinAnsi: åäö and × work, Ω/Δ/≥/≤ don't.
      const pdfText = (s: string) =>
        s
          .replace(/MΩ/g, 'Mohm')
          .replace(/Ω/g, 'ohm')
          .replace(/Δ/g, 'd')
          .replace(/≥/g, '>=')
          .replace(/≤/g, '<=');
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
      doc.text(pdfText(title.trim() || 'Egenkontroll'), marginX, y);
      doc.setFont('helvetica', 'normal');
      y += 26;

      doc.setFontSize(11);
      const rightColX = marginX + 440;
      // Meta-fält: skriv värdet om det finns, annars en linje att fylla i för hand.
      const metaLine = (label: string, value: string, x: number, lineEnd: number) => {
        const text = `${label}: `;
        doc.text(text, x, y);
        const startX = x + doc.getTextWidth(text);
        if (value.trim()) {
          doc.text(pdfText(value.trim()), startX, y);
        } else {
          doc.setDrawColor(160);
          doc.line(startX, y + 2, lineEnd, y + 2);
        }
      };
      metaLine('Projekt', project, marginX, rightColX - 30);
      metaLine('Datum', date, rightColX, tableRight);
      y += 22;
      metaLine('Ansvarig', responsible, marginX, rightColX - 30);
      y += 22;
      // Preset-specific header fields (e.g. el: företag, installatör, instrument).
      (preset?.meta ?? []).forEach((f) => {
        metaLine(f.label, meta[f.name] ?? '', marginX, tableRight);
        y += 20;
      });
      y += 6;

      // Table columns. Empty Resultat/Datum/Kommentar cells are deliberately
      // left blank so the sheet can be printed and filled in by hand. A
      // measurement protocol adds Krav + Mätvärde columns.
      const cols = protocol && measure
        ? [
            { key: 'point', label: 'Kontrollpunkt / metod', w: 240 },
            { key: 'krav', label: 'Krav / underlag', w: 120 },
            { key: 'measured', label: 'Mätvärde', w: 80 },
            { key: 'result', label: 'Resultat', w: 80 },
            { key: 'sign', label: 'Datum / sign.', w: 90 },
            { key: 'comment', label: 'Kommentar', w: 0 },
          ]
        : protocol
        ? [
            { key: 'point', label: 'Kontrollpunkt / metod', w: 280 },
            { key: 'krav', label: 'Krav / underlag', w: 150 },
            { key: 'result', label: 'Resultat', w: 80 },
            { key: 'sign', label: 'Datum / sign.', w: 100 },
            { key: 'comment', label: 'Kommentar', w: 0 },
          ]
        : [
            { key: 'point', label: 'Kontrollpunkt', w: 340 },
            { key: 'result', label: 'Resultat', w: 120 },
            { key: 'sign', label: 'Datum / sign.', w: 110 },
            { key: 'comment', label: 'Kommentar', w: 0 },
          ];
      const colX: number[] = [];
      let cx = marginX;
      cols.forEach((c) => {
        colX.push(cx);
        cx += c.w;
      });
      const colW = (i: number) => (i < cols.length - 1 ? cols[i].w : tableRight - colX[i]) - 8;

      const drawHeader = () => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        cols.forEach((c, i) => doc.text(c.label, colX[i] + 4, y + 15));
        doc.setFont('helvetica', 'normal');
        y += 22;
      };

      // Column separators for one row (section rows only get the outer border).
      const drawVerticals = (top: number, bottom: number, outerOnly = false) => {
        doc.setDrawColor(180);
        (outerOnly ? [marginX, tableRight] : [...colX, tableRight]).forEach((x) =>
          doc.line(x, top, x, bottom),
        );
      };

      const newPage = () => {
        doc.addPage();
        y = 54;
      };

      const headerTop = y;
      drawHeader();
      drawVerticals(headerTop, y);
      doc.line(marginX, headerTop, tableRight, headerTop);
      doc.setDrawColor(180);
      doc.line(marginX, y, tableRight, y); // underline header row
      doc.setFontSize(9.5);

      let lastSection: string | undefined;
      rows.forEach((row) => {
        // Section heading row spanning the table (e.g. "A. Före ibruktagning").
        if (row.section && row.section !== lastSection) {
          lastSection = row.section;
          if (y + 22 + 28 > pageHeight - 70) {
            newPage();
            const top = y;
            drawHeader();
            drawVerticals(top, y);
            doc.line(marginX, top, tableRight, top);
            doc.line(marginX, y, tableRight, y);
          }
          doc.setFillColor(238, 242, 247);
          doc.rect(marginX, y, tableRight - marginX, 20, 'F');
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(10);
          doc.text(pdfText(row.section), marginX + 4, y + 14);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(9.5);
          doc.setDrawColor(180);
          doc.line(marginX, y, tableRight, y);
          drawVerticals(y, y + 20, true);
          y += 20;
          doc.line(marginX, y, tableRight, y);
        }

        const pointBase = row.reference ? `${row.point}  (${row.reference})` : row.point;
        // Method on its own line under the point (Boverket: vad + hur).
        const pointText = row.method ? `${pointBase}\nMetod: ${row.method}` : pointBase;
        const measuredText = row.measured?.trim()
          ? `${row.measured.trim()}${row.unit ? ` ${row.unit}` : ''}`
          : row.unit
            ? `______ ${row.unit}`
            : '';
        const cell: Record<string, string> = {
          point: pdfText(pointText || ''),
          krav: pdfText(row.requirement || ''),
          measured: pdfText(measuredText),
          // Only print an answered result; leave "Ej besvarad" blank to fill in.
          result: row.result && row.result !== 'Ej besvarad' ? row.result : '',
          sign: '',
          comment: pdfText(row.comment || ''),
        };
        const lines = cols.map((c, i) => doc.splitTextToSize(cell[c.key] || '', colW(i)) as string[]);
        const lineCount = Math.max(1, ...lines.map((l) => l.length));
        const rowHeight = Math.max(lineCount * 12 + 12, 26);

        if (y + rowHeight > pageHeight - 70) {
          newPage();
          const top = y;
          drawHeader();
          drawVerticals(top, y);
          doc.setDrawColor(180);
          doc.line(marginX, top, tableRight, top);
          doc.line(marginX, y, tableRight, y);
          doc.setFontSize(9.5);
        }

        lines.forEach((l, i) => doc.text(l, colX[i] + 4, y + 15));
        drawVerticals(y, y + rowHeight);
        y += rowHeight;
        doc.setDrawColor(220);
        doc.line(marginX, y, tableRight, y); // row separator
      });

      // Signatures (el: one per control stage) + regulatory footnote.
      const signatures = preset?.signatures ?? ['Underskrift ansvarig'];
      const blockHeight = signatures.length * 22 + (preset?.footnote ? 40 : 0) + 30;
      if (y + blockHeight > pageHeight - 30) {
        newPage();
      } else {
        y += 30;
      }
      doc.setFontSize(10);
      signatures.forEach((s) => {
        doc.text(`${pdfText(s)}: ______________________________________`, marginX, y);
        y += 22;
      });
      if (preset?.footnote) {
        doc.setFontSize(8);
        doc.setTextColor(110);
        const fn = doc.splitTextToSize(pdfText(preset.footnote), tableRight - marginX) as string[];
        doc.text(fn, marginX, y + 4);
        doc.setTextColor(0);
      }

      doc.save(`${fileBase()}.pdf`);
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
      ...(preset?.meta ?? []).map((f) => [f.label, meta[f.name] ?? '']),
      [],
      protocol
        ? ['Avsnitt', 'Kontrollpunkt', 'Metod', 'Referens', 'Krav / underlag', 'Mätvärde', 'Enhet', 'Resultat', 'Datum / sign.', 'Kommentar']
        : ['Kontrollpunkt', 'Resultat', 'Datum / sign.', 'Kommentar'],
      ...rows.map((r) =>
        protocol
          ? [r.section || '', r.point || '', r.method || '', r.reference || '', r.requirement || '', r.measured || '', r.unit || '', r.result, '', r.comment || '']
          : [r.point || '', r.result, '', r.comment || ''],
      ),
      ...(preset?.signatures ?? ['Underskrift ansvarig']).map((s) => [s, '']),
    ];
    const csv = out
      .map((cols) => cols.map((c) => `"${String(c ?? '').replace(/"/g, '""')}"`).join(';'))
      .join('\r\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileBase()}.csv`;
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

        {preset?.meta?.length ? (
          <div className="lm-tool-grid lm-tool-meta-extra">
            {preset.meta.map((f) => (
              <label className="lm-tool-field" key={f.name}>
                <span>{f.label}</span>
                <input
                  value={meta[f.name] ?? ''}
                  placeholder={f.placeholder}
                  onChange={(e) => {
                    const value = e.currentTarget.value;
                    setMeta((prev) => ({ ...prev, [f.name]: value }));
                  }}
                />
              </label>
            ))}
          </div>
        ) : null}

        <div className="lm-tool-rows" ref={rowsRef}>
          {measure ? null : (
            <div className="lm-tool-row lm-tool-row-egen lm-tool-row-head">
              <span>Kontrollpunkt</span>
              <span>Resultat</span>
              <span>Kommentar</span>
              <span aria-hidden="true" />
            </div>
          )}
          {rows.map((row, index) => {
            const showSection = !!row.section && row.section !== rows[index - 1]?.section;
            return (
              <div key={index}>
                {showSection ? <div className="lm-tool-section-row">{row.section}</div> : null}
                <div className={`lm-tool-row lm-tool-row-egen${measure ? ' lm-tool-row-egen-measure' : ''}`}>
                  <div className="lm-tool-row-point">
                    <input value={row.point} placeholder="Vad kontrolleras" aria-label="Kontrollpunkt" onChange={(e) => setRow(index, { point: e.currentTarget.value })} />
                    {row.method || row.requirement || row.reference ? (
                      <span className="lm-tool-row-ref">
                        {[
                          row.method ? <>Metod: {row.method}</> : null,
                          row.requirement ? <>Krav: <strong>{row.requirement}</strong></> : null,
                          row.reference || null,
                        ]
                          .filter(Boolean)
                          .map((part, i) => (
                            <span key={i}>{i > 0 ? ' · ' : null}{part}</span>
                          ))}
                      </span>
                    ) : null}
                  </div>
                  {measure ? (
                    row.unit ? (
                      <label className="lm-tool-measure">
                        <input
                          value={row.measured ?? ''}
                          inputMode="decimal"
                          aria-label={`Mätvärde (${row.unit})`}
                          placeholder="–"
                          onChange={(e) => setRow(index, { measured: e.currentTarget.value })}
                        />
                        <span>{row.unit}</span>
                      </label>
                    ) : (
                      <span aria-hidden="true" />
                    )
                  ) : null}
                  <select value={row.result} aria-label="Resultat" onChange={(e) => setRow(index, { result: e.currentTarget.value })}>
                    {RESULTS.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                  <input value={row.comment} placeholder="Valfritt" aria-label="Kommentar" onChange={(e) => setRow(index, { comment: e.currentTarget.value })} />
                  <button type="button" className="lm-tool-row-remove" aria-label="Ta bort rad" onClick={() => removeRow(index)}>
                    ×
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {preset?.footnote ? <p className="lm-tool-footnote">{preset.footnote}</p> : null}

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
