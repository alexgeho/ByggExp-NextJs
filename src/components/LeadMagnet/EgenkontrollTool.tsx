import { useEffect, useMemo, useRef, useState } from 'react';

import StickyDownloadBar from './StickyDownloadBar';

import { EGENKONTROLL_PRESETS } from './egenkontrollPresets';

// True when a title is just one of the template names (never typed by the user).
// True when a title comes from a template, not the user: the template name
// itself, or an old prefilled name the user typed into ("Egenkontroll xyz /
// Gjutning") — it contains the template's trade part. Such a title is dropped
// so the (pale, template-following) placeholder shows instead.
const isPresetName = (value?: string | null) => {
  const v = value?.trim().toLowerCase();
  if (!v) return false;
  return EGENKONTROLL_PRESETS.some((p) => {
    const name = p.name.trim().toLowerCase();
    const trade = name.replace(/^egenkontroll\s+/, '');
    return v === name || (v.startsWith('egenkontroll') && trade.length > 2 && v.includes(trade.split(' / ').pop()!));
  });
};

// Free egenkontroll (self-inspection checklist) tool. Categories and result
// states mirror the ByggExp KMA module (Kvalitet/Miljö/Arbetsmiljö, and
// Ej besvarad/Godkänd/Anmärkning/Ej aktuellt). Pick a ready-made template to
// auto-fill professional control points, or fill your own — then download a
// PDF. sv-only by strategy.

type Row = {
  point: string;
  /** Template text: shown as the placeholder, used when point is left empty. */
  hint?: string;
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
  /** UI only: comment / measured value opened via the ⋯ menu. */
  showComment?: boolean;
  showMeasure?: boolean;
};

const RESULTS = ['Ej besvarad', 'Godkänd', 'Anmärkning', 'Ej aktuellt'];
// What the dropdown offers. "Tomt" = leave the result empty (filled in by hand
// on the printout); "Ej besvarad"/"Ej aktuellt" only show for old drafts.
const RESULT_OPTIONS = ['Godkänd', 'Anmärkning', 'Tomt'];
const BLANK_RESULTS = new Set(['Ej besvarad', 'Tomt']);

// New rows start as Godkänd (owner: most points pass) — tap ! or – to change.
const DEFAULT_RESULT = 'Godkänd';
const emptyRow = (): Row => ({ point: '', result: DEFAULT_RESULT, comment: '' });

// Rows to seed the table with when a dedicated landing (e.g. egenkontroll-el-mall)
// pre-selects a preset, so the tool opens already relevant to the search intent.
const presetRows = (presetId: string): Row[] => {
  const preset = EGENKONTROLL_PRESETS.find((p) => p.id === presetId);
  if (!preset) return [emptyRow(), emptyRow(), emptyRow()];
  return preset.items.map((item) => ({
    point: '',
    hint: item.point,
    result: DEFAULT_RESULT,
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
// Local YYYY-MM-DD (toISOString alone would give UTC and can be off by a day).
const today = () => {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
};

// Only what the user can type/choose — template text (point/method/…) is not input.
const rowInput = (r: Row) => [r.point.trim(), r.result, r.comment.trim(), (r.measured ?? '').trim()];
const baseRows = (presetId?: string | null) =>
  presetId ? presetRows(presetId) : [emptyRow(), emptyRow(), emptyRow()];
/** Rows differ from the untouched template (or the blank start). */
const rowsEdited = (rows: Row[], presetId?: string | null) =>
  JSON.stringify(rows.map(rowInput)) !== JSON.stringify(baseRows(presetId).map(rowInput));

/** What the row says: typed text, else the template text. */
const pointOf = (r: Row) => r.point.trim() || r.hint || '';

// Old drafts stored template text as the value — turn it back into the hint.
const ALL_POINTS = new Set(EGENKONTROLL_PRESETS.flatMap((p) => p.items.map((i) => i.point)));
// Old answers "Ej besvarad"/"Ej aktuellt" are now just "Tomt" (blank).
const migrateRow = (r: Row): Row => {
  const row = r.result === 'Ej besvarad' || r.result === 'Ej aktuellt' ? { ...r, result: 'Tomt' } : r;
  return !row.hint && ALL_POINTS.has(row.point) ? { ...row, hint: row.point, point: '' } : row;
};

const isProtocol = (rows: Row[]) => rows.some((r) => r.unit || r.requirement);
const hasMeasure = (rows: Row[]) => rows.some((r) => r.unit);

// Feather glyphs (24×24 stroke) — actions differ by icon, not colour.
const ICONS = {
  // Download (arrow into tray) — reads as "save file" at a glance.
  download: <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />,
  plus: <path d="M12 5v14M5 12h14" />,
  grid: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </>
  ),
  fileText: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </>
  ),
};

function Icon({ name }: { name: keyof typeof ICONS }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

export default function EgenkontrollTool({
  defaultPreset,
}: {
  defaultPreset?: string;
} = {}) {
  // Title stays empty: the template name is only the placeholder (and the
  // fallback for PDF/Excel), so the user never has to delete text to type.
  const [title, setTitle] = useState('');
  const [project, setProject] = useState('');
  const [responsible, setResponsible] = useState('');
  const [date, setDate] = useState('');
  const [rows, setRows] = useState<Row[]>(() => baseRows(defaultPreset));
  const [meta, setMeta] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const toolRootRef = useRef<HTMLDivElement>(null);
  // Chosen template: highlight + extra header fields / signatures / footnote.
  const [presetId, setPresetId] = useState<string | null>(defaultPreset ?? null);
  const preset = EGENKONTROLL_PRESETS.find((p) => p.id === presetId);
  const docTitle = title.trim() || preset?.name || 'Egenkontroll';
  // Chips: one line rendered three times, drifting slowly in a loop (pauses
  // on hover/touch, can be scrolled by hand). Scroll position is kept inside
  // the middle copy so either direction wraps around seamlessly.
  const chipsRef = useRef<HTMLDivElement>(null);
  const chipsPaused = useRef(false);
  useEffect(() => {
    const box = chipsRef.current;
    if (!box) return;
    const wrap = () => {
      const third = box.scrollWidth / 3;
      if (box.scrollLeft < third * 0.5) box.scrollLeft += third;
      else if (box.scrollLeft > third * 1.5) box.scrollLeft -= third;
    };
    // Start the loop on the active (else first) chip of the middle copy, placed
    // just past the edge fade, so no chip is cut on load.
    const n = box.children.length / 3;
    const activeIdx = Math.max(EGENKONTROLL_PRESETS.findIndex((p) => p.id === defaultPreset), 0);
    const startChip = box.children[n + activeIdx] as HTMLElement | undefined;
    const cs = getComputedStyle(box);
    const fade = (cs.maskImage || cs.webkitMaskImage || 'none') === 'none' ? 0 : 40;
    box.scrollLeft = startChip
      ? box.scrollLeft + startChip.getBoundingClientRect().left - box.getBoundingClientRect().left - fade
      : box.scrollWidth / 3;
    box.addEventListener('scroll', wrap, { passive: true });
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let pos = box.scrollLeft;
    const tick = () => {
      // Keep a float position: scrollLeft may round sub-pixel steps away.
      if (chipsPaused.current || Math.abs(box.scrollLeft - pos) > 2) pos = box.scrollLeft;
      if (!chipsPaused.current) {
        pos += 0.35;
        box.scrollLeft = pos;
      }
      raf = requestAnimationFrame(tick);
    };
    if (!still) raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      box.removeEventListener('scroll', wrap);
    };
    // Mount-only: the loop's start point is the preset the page opened with.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const pauseChips = (paused: boolean) => {
    chipsPaused.current = paused;
  };
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
        // Old drafts stored the template name as the title value — that is
        // not user input, so it is dropped (the name stays the placeholder).
        const savedTitle = isPresetName(d.title) ? '' : (d.title ?? '');
        // Restore only real user input — not a blank form, a just-picked
        // template or the auto-filled date.
        const hasContent =
          !!savedTitle.trim() ||
          !!d.project?.trim() ||
          !!d.responsible?.trim() ||
          Object.values(d.meta ?? {}).some((v) => v?.trim()) ||
          (!!d.rows?.length && rowsEdited(d.rows.map(migrateRow), d.presetId));
        if (hasContent) {
          // eslint-disable-next-line react-hooks/set-state-in-effect -- restore the saved draft from localStorage after mount (not available during SSR).
          setTitle(savedTitle);
          setProject(d.project ?? '');
          setResponsible(d.responsible ?? '');
          setDate(d.date || today());
          if (d.rows?.length) setRows(d.rows.map(migrateRow));
          setMeta(d.meta ?? {});
          if (d.presetId !== undefined) setPresetId(d.presetId);
          setRestored(true);
          hydratedRef.current = true;
          return;
        }
      }
    } catch {
      /* korrupt/otillgänglig storage – strunt i det */
    }
    // Client-only default (SSR would render a different/empty value).
    setDate(today());
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
    setTitle('');
    setProject('');
    setResponsible('');
    setDate(today());
    setRows(baseRows(defaultPreset));
    setPresetId(defaultPreset ?? null);
    setMeta({});
    setRestored(false);
  }

  // Sammanfattning – ger känslan av ett riktigt verktyg och sporrar till att
  // faktiskt besvara alla punkter. Räknar bara ifyllda kontrollpunkter.
  const stats = useMemo(() => {
    const filled = rows.filter((r) => pointOf(r));
    return {
      total: filled.length,
      godkand: filled.filter((r) => r.result === 'Godkänd').length,
      anmarkning: filled.filter((r) => r.result === 'Anmärkning').length,
      kvar: filled.filter((r) => BLANK_RESULTS.has(r.result)).length,
    };
  }, [rows]);

  // Row ⋯ menu (Kommentar / Ta bort); closes on any outside click.
  const [menuRow, setMenuRow] = useState<number | null>(null);
  useEffect(() => {
    if (menuRow === null) return;
    const close = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.lm-tool-row-more')) setMenuRow(null);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [menuRow]);

  const setRow = (index: number, patch: Partial<Row>) =>
    setRows((prev) => prev.map((row, i) => (i === index ? { ...row, ...patch } : row)));
  const addRow = () => setRows((prev) => [...prev, emptyRow()]);

  const applyPreset = (id: string) => {
    if (id === presetId) return;
    // Don't silently wipe points the user already answered/typed.
    if (rowsEdited(rows, presetId) && !window.confirm('Ersätta dina kontrollpunkter med mallen?')) return;
    setPresetId(id);
    setRows(presetRows(id));
    // A title that is just a template name follows the template (placeholder).
    if (isPresetName(title)) setTitle('');
  };
  const removeRow = (index: number) =>
    setRows((prev) => (prev.length > 1 ? prev.filter((_, i) => i !== index) : prev));

  // "Egenkontroll El" → egenkontroll-el (not egenkontroll-egenkontroll-el).
  const fileBase = () =>
    `egenkontroll-${docTitle.replace(/^egenkontroll\s*/i, '').trim() || 'kontroll'}`
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
      doc.text(pdfText(docTitle), marginX, y);
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

        const pointBase = row.reference ? `${pointOf(row)}  (${row.reference})` : pointOf(row);
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
          // Only print an answered result; "Tomt" stays blank to fill in by hand.
          result: row.result && !BLANK_RESULTS.has(row.result) ? row.result : '',
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
      ['Egenkontroll', docTitle],
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
          ? [r.section || '', pointOf(r), r.method || '', r.reference || '', r.requirement || '', r.measured || '', r.unit || '', BLANK_RESULTS.has(r.result) ? '' : r.result, '', r.comment || '']
          : [pointOf(r), BLANK_RESULTS.has(r.result) ? '' : r.result, '', r.comment || ''],
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
    <div className="lm-tool" ref={toolRootRef}>
      <StickyDownloadBar scope={toolRootRef}>
        <button type="button" className="lm-tool-button lm-tool-button--icon" onClick={downloadCsv}>
          <Icon name="download" />
          Excel
        </button>
        <button type="button" className="lm-tool-button lm-tool-button--icon" disabled={busy} onClick={() => void downloadPdf()}>
          <Icon name="download" />
          {busy ? 'Skapar PDF…' : 'PDF'}
        </button>
      </StickyDownloadBar>
      {restored ? (
        <div className="lm-tool-draft" role="status">
          <span>Utkast återställt</span>
          <button type="button" onClick={clearDraft}>
            Börja om
          </button>
        </div>
      ) : null}

      <div className="lm-tool-presets">
        <span className="lm-tool-presets-label">Mall</span>
        <div
          className="lm-tool-presets-buttons"
          ref={chipsRef}
          onMouseEnter={() => pauseChips(true)}
          onMouseLeave={() => pauseChips(false)}
          onTouchStart={() => pauseChips(true)}
          onTouchEnd={() => pauseChips(false)}
          onFocus={() => pauseChips(true)}
          onBlur={() => pauseChips(false)}
        >
          {[0, 1, 2].flatMap((copy) => EGENKONTROLL_PRESETS.map((preset) => (
            <button
              key={`${copy}-${preset.id}`}
              type="button"
              className={`lm-tool-preset${presetId === preset.id ? ' is-active' : ''}`}
              aria-pressed={presetId === preset.id}
              aria-hidden={copy !== 1 || undefined}
              tabIndex={copy !== 1 ? -1 : undefined}
              onClick={() => applyPreset(preset.id)}
            >
              {/* "Egenkontroll" is the page's subject — chips say only the trade. */}
              {preset.name.replace(/^Egenkontroll\s+/i, '')}
            </button>
          )))}
        </div>
      </div>

      <form
        className="lm-tool-form"
        onSubmit={(event) => {
          event.preventDefault();
          void downloadPdf();
        }}
      >
        {/* Downloads first: the PDF/Excel is what people came for (owner). */}
        <div className="lm-tool-actions lm-tool-download">
          <button type="button" className="lm-tool-button lm-tool-button--icon" onClick={downloadCsv}>
            <Icon name="download" />
            <span className="lm-hide-sm">Ladda ner </span>Excel
          </button>
          <button type="submit" className="lm-tool-button lm-tool-button--icon" disabled={busy}>
            <Icon name="download" />
            {busy ? 'Skapar PDF…' : <><span className="lm-hide-sm">Ladda ner </span>PDF</>}
          </button>
        </div>

        <div className="lm-tool-grid">
          <label className="lm-tool-field">
            <span>Titel</span>
            <input value={title} onChange={(e) => setTitle(e.currentTarget.value)} placeholder={preset?.name ?? 'Egenkontroll'} />
          </label>
          <label className="lm-tool-field">
            <span>Projekt</span>
            <input value={project} onChange={(e) => setProject(e.currentTarget.value)} placeholder="Projekt eller adress" />
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

        <div className="lm-tool-rows">
          {measure ? null : (
            <div className="lm-tool-row lm-tool-row-ek lm-tool-row-head">
              <span>Kontrollpunkt</span>
              <span>Resultat</span>
              <span aria-hidden="true" />
            </div>
          )}
          {rows.map((row, index) => {
            const showSection = !!row.section && row.section !== rows[index - 1]?.section;
            // Comment is hidden behind ⋯ until asked for (or already filled).
            const showComment = row.showComment || !!row.comment;
            // Mätvärde too: off the main line, opened via ⋯ (the PDF keeps a blank line for it).
            const showMeasure = !!row.unit && (row.showMeasure || !!row.measured?.trim());
            return (
              <div key={index}>
                {showSection ? <div className="lm-tool-section-row">{row.section}</div> : null}
                <div className={`lm-tool-row lm-tool-row-ek`}>
                  <div className="lm-tool-row-point">
                    <input value={row.point} placeholder={row.hint || 'Kontrollpunkt'} title={row.hint} aria-label="Kontrollpunkt" onChange={(e) => setRow(index, { point: e.currentTarget.value })} />
                    {/* Metod/Krav stay in the PDF/Excel, not on screen (less text). */}
                  </div>
                  {/* Godkänd by default; legacy values only show for old drafts. */}
                  <select value={row.result} aria-label="Resultat" onChange={(e) => setRow(index, { result: e.currentTarget.value })}>
                    {(RESULT_OPTIONS.includes(row.result) ? RESULT_OPTIONS : [row.result, ...RESULT_OPTIONS]).map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                  <div className="lm-tool-row-more">
                    <button
                      type="button"
                      className="lm-tool-row-more-btn"
                      aria-label="Fler val"
                      aria-expanded={menuRow === index}
                      onClick={() => setMenuRow(menuRow === index ? null : index)}
                    >
                      ⋯
                    </button>
                    {menuRow === index ? (
                      <div className="lm-tool-row-menu" role="menu">
                        {row.unit && !showMeasure ? (
                          <button type="button" role="menuitem" onClick={() => { setRow(index, { showMeasure: true }); setMenuRow(null); }}>
                            Mätvärde
                          </button>
                        ) : null}
                        {showComment ? null : (
                          <button type="button" role="menuitem" onClick={() => { setRow(index, { showComment: true }); setMenuRow(null); }}>
                            Kommentar
                          </button>
                        )}
                        <button type="button" role="menuitem" className="is-danger" onClick={() => { removeRow(index); setMenuRow(null); }}>
                          Ta bort
                        </button>
                      </div>
                    ) : null}
                  </div>
                  {showMeasure || showComment ? (
                    <div className="lm-tool-row-extra">
                      {showMeasure ? (
                        <label className="lm-tool-measure">
                          <input
                            value={row.measured ?? ''}
                            inputMode="decimal"
                            aria-label={`Mätvärde (${row.unit})`}
                            placeholder="Mätvärde"
                            autoFocus={row.showMeasure && !row.measured}
                            onChange={(e) => setRow(index, { measured: e.currentTarget.value })}
                          />
                          <span>{row.unit}</span>
                        </label>
                      ) : null}
                      {showComment ? (
                        <input
                          className="lm-tool-row-comment"
                          value={row.comment}
                          placeholder="Kommentar"
                          aria-label="Kommentar"
                          autoFocus={row.showComment && !row.comment}
                          onChange={(e) => setRow(index, { comment: e.currentTarget.value })}
                        />
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
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
            {/* One line: progress, plus remarks when there are any. */}
            <span style={{ fontWeight: 600 }}>
              {stats.godkand}/{stats.total} godkända
            </span>
            {stats.anmarkning > 0 ? (
              <span style={{ color: '#d97706' }}>· {stats.anmarkning} anmärkning{stats.anmarkning === 1 ? '' : 'ar'}</span>
            ) : null}
          </div>
        ) : null}

        <div className="lm-tool-actions">
          <button type="button" className="lm-tool-button lm-tool-button--icon lm-tool-button--ghost" onClick={addRow}>
            <Icon name="plus" />
            Lägg till kontrollpunkt
          </button>
        </div>

        {/* Same downloads again at the end — people fill in, then forget to scroll up. */}
        <div className="lm-tool-actions lm-tool-download lm-tool-download--bottom">
          <button type="button" className="lm-tool-button lm-tool-button--icon" onClick={downloadCsv}>
            <Icon name="download" />
            <span className="lm-hide-sm">Ladda ner </span>Excel
          </button>
          <button type="submit" className="lm-tool-button lm-tool-button--icon" disabled={busy}>
            <Icon name="download" />
            {busy ? 'Skapar PDF…' : <><span className="lm-hide-sm">Ladda ner </span>PDF</>}
          </button>
        </div>
      </form>
    </div>
  );
}
