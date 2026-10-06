import { useEffect, useRef, useState } from 'react';

import {
  ARBETSBEREDNING_PRESETS,
  RISK_FLAGS,
  type ArbetsberedningPreset,
  type RiskFlag,
} from './arbetsberedningPresets';

// Free arbetsberedning (work preparation) template. Structure follows
// Byggföretagen "Mall 2" (2024): projektinformation, moment och utförare,
// arbetsordning, egenkontroll — plus a simple risk table (risk → åtgärd) with
// SBUF-style quick risk boxes and signatures (laget "tagit del av" +
// godkänd av arbetsledning/BAS-U). Pick a moment to fill it with a ready
// example; template text stays a placeholder and is used in the PDF when the
// field is left empty. sv-only by strategy. UX mirrors EgenkontrollTool.

type HeadKey =
  | 'moment'
  | 'project'
  | 'author'
  | 'date'
  | 'leader'
  | 'period'
  | 'byggdel'
  | 'utforare'
  | 'underlag'
  | 'krav';

type HintKey = 'moment' | 'byggdel' | 'utforare' | 'underlag' | 'krav';

const FIELDS: { key: HeadKey; label: string; placeholder?: string; hint?: HintKey; date?: boolean }[] = [
  { key: 'moment', label: 'Arbetsmoment', placeholder: 'Vad ska göras', hint: 'moment' },
  { key: 'project', label: 'Projekt', placeholder: 'Projekt och ort' },
  { key: 'author', label: 'Upprättad av', placeholder: 'Namn' },
  { key: 'date', label: 'Datum', date: true },
  { key: 'leader', label: 'Arbetsledare', placeholder: 'Platschef / arbetsledare' },
  { key: 'period', label: 'Pågår', placeholder: 'Från – till' },
  { key: 'byggdel', label: 'Byggdel', placeholder: 'Byggdel', hint: 'byggdel' },
  { key: 'utforare', label: 'Utförare', placeholder: 'Vem utför momentet', hint: 'utforare' },
  { key: 'underlag', label: 'Ritning / underlag', placeholder: 'Ritningar, anvisningar', hint: 'underlag' },
  { key: 'krav', label: 'Krav', placeholder: 'Krav på utförandet', hint: 'krav' },
];

type Head = Record<HeadKey, string>;
const emptyHead = (): Head => ({
  moment: '', project: '', author: '', date: '', leader: '',
  period: '', byggdel: '', utforare: '', underlag: '', krav: '',
});

/** Template text lives in `hint`: placeholder on screen, value in the PDF. */
type Step = { text: string; hint?: string };
type Risk = { risk: string; action: string; riskHint?: string; actionHint?: string };
type Check = { point: string; hint?: string; result: string; comment: string; showComment?: boolean };

// "Tomt" = leave the result blank (filled in by hand on the printout).
const RESULT_OPTIONS = ['Godkänd', 'Anmärkning', 'Tomt'];
const DEFAULT_RESULT = 'Godkänd';

const emptyStep = (): Step => ({ text: '' });
const emptyRisk = (): Risk => ({ risk: '', action: '' });
const emptyCheck = (): Check => ({ point: '', result: DEFAULT_RESULT, comment: '' });

type Rows = { steps: Step[]; risks: Risk[]; checks: Check[]; flags: RiskFlag[] };

const baseRows = (preset?: ArbetsberedningPreset): Rows =>
  preset
    ? {
        steps: preset.steps.map((hint) => ({ text: '', hint })),
        risks: preset.risks.map((r) => ({ risk: '', action: '', riskHint: r.risk, actionHint: r.action })),
        checks: preset.checks.map((hint) => ({ ...emptyCheck(), hint })),
        flags: [...preset.flags],
      }
    : {
        steps: [emptyStep(), emptyStep(), emptyStep()],
        risks: [emptyRisk(), emptyRisk(), emptyRisk()],
        checks: [emptyCheck(), emptyCheck(), emptyCheck()],
        flags: [],
      };

// Only what the user typed/chose — template text is not input.
const rowsInput = (r: Rows) =>
  JSON.stringify([
    r.steps.map((s) => [s.text.trim(), s.hint ?? '']),
    r.risks.map((x) => [x.risk.trim(), x.action.trim(), x.riskHint ?? '']),
    r.checks.map((c) => [c.point.trim(), c.result, c.comment.trim(), c.hint ?? '']),
    [...r.flags].sort(),
  ]);
const rowsEdited = (r: Rows, preset?: ArbetsberedningPreset) => rowsInput(r) !== rowsInput(baseRows(preset));

const findPreset = (id?: string | null) => ARBETSBEREDNING_PRESETS.find((p) => p.id === id);

// Local YYYY-MM-DD (toISOString alone would give UTC and can be off by a day).
const today = () => {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
};

const slug = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);

const STORAGE_KEY = 'bx-arbetsberedning-draft';

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

export default function ArbetsberedningMallTool() {
  const [head, setHead] = useState<Head>(emptyHead);
  const [rows, setRows] = useState<Rows>(() => baseRows());
  const [presetId, setPresetId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const preset = findPreset(presetId);
  const { steps, risks, checks, flags } = rows;

  /** Typed value, else the template text (preset), else empty. */
  const headValue = (key: HeadKey) => {
    const hint = FIELDS.find((f) => f.key === key)?.hint;
    return head[key].trim() || (hint && preset ? preset[hint] : '');
  };

  // Chips: one line rendered three times, drifting slowly in a loop (pauses
  // on hover/touch, can be scrolled by hand) — same as EgenkontrollTool.
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
    box.scrollLeft = box.scrollWidth / 3;
    box.addEventListener('scroll', wrap, { passive: true });
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let pos = box.scrollLeft;
    const tick = () => {
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
  }, []);
  const pauseChips = (paused: boolean) => {
    chipsPaused.current = paused;
  };

  // --- Draft autosave (localStorage, client-only) ----------------------------
  const [restored, setRestored] = useState(false);
  const hydratedRef = useRef(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const d = JSON.parse(raw) as Partial<{ head: Head; rows: Rows; presetId: string | null }>;
        const savedPreset = findPreset(d.presetId);
        const savedRows = d.rows?.steps && d.rows.risks && d.rows.checks ? { ...d.rows, flags: d.rows.flags ?? [] } : null;
        const hasContent =
          Object.entries(d.head ?? {}).some(([k, v]) => k !== 'date' && v?.trim()) ||
          (!!savedRows && rowsEdited(savedRows, savedPreset));
        if (hasContent) {
          // eslint-disable-next-line react-hooks/set-state-in-effect -- restore the saved draft from localStorage after mount (not available during SSR).
          setHead({ ...emptyHead(), ...d.head, date: d.head?.date || today() });
          if (savedRows) setRows(savedRows);
          setPresetId(savedPreset ? savedPreset.id : null);
          setRestored(true);
          hydratedRef.current = true;
          return;
        }
      }
    } catch {
      /* korrupt/otillgänglig storage */
    }
    setHead((h) => ({ ...h, date: today() }));
    hydratedRef.current = true;
  }, []);

  useEffect(() => {
    if (!hydratedRef.current) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ head, rows, presetId }));
    } catch {
      /* full/avstängd storage */
    }
  }, [head, rows, presetId]);

  function clearDraft() {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* noop */
    }
    setHead({ ...emptyHead(), date: today() });
    setRows(baseRows());
    setPresetId(null);
    setRestored(false);
  }

  // Row ⋯ menu; closes on any outside click.
  const [menu, setMenu] = useState<string | null>(null);
  useEffect(() => {
    if (menu === null) return;
    const close = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.lm-tool-row-more')) setMenu(null);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [menu]);

  const applyPreset = (id: string) => {
    if (id === presetId) return;
    if (rowsEdited(rows, preset) && !window.confirm('Ersätta dina rader med mallen?')) return;
    setPresetId(id);
    setRows(baseRows(findPreset(id)));
  };

  type ListKey = 'steps' | 'risks' | 'checks';
  const patchRow = <K extends ListKey>(key: K, index: number, patch: Partial<Rows[K][number]>) =>
    setRows((prev) => ({
      ...prev,
      [key]: (prev[key] as Rows[K][number][]).map((r, i) => (i === index ? { ...r, ...patch } : r)),
    }));
  const addRow = (key: ListKey) =>
    setRows((prev) => ({
      ...prev,
      [key]: [...prev[key], key === 'steps' ? emptyStep() : key === 'risks' ? emptyRisk() : emptyCheck()],
    }));
  const removeRow = (key: ListKey, index: number) =>
    setRows((prev) =>
      prev[key].length > 1 ? { ...prev, [key]: (prev[key] as unknown[]).filter((_, i) => i !== index) } : prev,
    );
  const toggleFlag = (flag: RiskFlag) =>
    setRows((prev) => ({
      ...prev,
      flags: prev.flags.includes(flag) ? prev.flags.filter((f) => f !== flag) : [...prev.flags, flag],
    }));

  const stepText = (s: Step) => s.text.trim() || s.hint || '';
  const checkText = (c: Check) => c.point.trim() || c.hint || '';
  const fileBase = () => `arbetsberedning-${slug(head.moment) || preset?.id || 'mall'}`;

  async function downloadPdf() {
    setBusy(true);
    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF({ unit: 'pt', format: 'a4', orientation: 'portrait' });
      const marginX = 40;
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const right = pageWidth - marginX;
      const bottom = pageHeight - 50;
      let y = 50;
      const ensure = (space: number) => {
        if (y + space > bottom) {
          doc.addPage();
          y = 50;
          return true;
        }
        return false;
      };

      // Title (+ moment).
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.text('Arbetsberedning', marginX, y + 4);
      y += 30;

      const section = (label: string) => {
        ensure(20 + 40);
        doc.setFillColor(238, 242, 247);
        doc.rect(marginX, y, right - marginX, 20, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10.5);
        doc.setTextColor(20);
        doc.text(label, marginX + 6, y + 14);
        doc.setFont('helvetica', 'normal');
        y += 26;
      };

      // Boxed form cells: small grey label on top, value below (empty = room to write).
      const cells = (row: [string, string][]) => {
        const w = (right - marginX) / row.length;
        doc.setFontSize(10);
        const lines = row.map(([, v]) => doc.splitTextToSize(v, w - 12) as string[]);
        const h = Math.max(34, 20 + Math.max(...lines.map((l) => l.length)) * 12);
        ensure(h);
        row.forEach(([label], i) => {
          const x = marginX + i * w;
          doc.setDrawColor(190);
          doc.rect(x, y, w, h);
          doc.setFontSize(7.5);
          doc.setTextColor(110);
          doc.text(label.toUpperCase(), x + 6, y + 10);
          doc.setFontSize(10);
          doc.setTextColor(20);
          doc.text(lines[i], x + 6, y + 23);
        });
        y += h;
      };

      // Table with header row, wrapped cells and page breaks (header repeats).
      const table = (cols: { label: string; w: number }[], data: string[][], minRows: number) => {
        const xs: number[] = [];
        let cx = marginX;
        cols.forEach((c) => {
          xs.push(cx);
          cx += c.w;
        });
        const width = (i: number) => (i < cols.length - 1 ? cols[i].w : right - xs[i]);
        const header = () => {
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8.5);
          doc.setDrawColor(190);
          cols.forEach((c, i) => {
            doc.rect(xs[i], y, width(i), 18);
            doc.text(c.label, xs[i] + 5, y + 12);
          });
          doc.setFont('helvetica', 'normal');
          y += 18;
        };
        ensure(18 + 24);
        header();
        const all = [...data];
        while (all.length < minRows) all.push(cols.map(() => ''));
        all.forEach((cellsRow) => {
          doc.setFontSize(9.5);
          const lines = cellsRow.map((v, i) => doc.splitTextToSize(v, width(i) - 10) as string[]);
          const h = Math.max(24, Math.max(...lines.map((l) => l.length)) * 12 + 10);
          if (ensure(h)) header();
          doc.setFontSize(9.5);
          doc.setDrawColor(190);
          lines.forEach((l, i) => {
            doc.rect(xs[i], y, width(i), h);
            doc.text(l, xs[i] + 5, y + 15);
          });
          y += h;
        });
        y += 14;
      };

      section('1. Projektinformation');
      cells([['Projekt', head.project.trim()], ['Datum', head.date]]);
      cells([['Upprättad av', head.author.trim()], ['Arbetsledare / platschef', head.leader.trim()]]);
      y += 14;

      section('2. Moment och utförare');
      cells([['Arbetsmoment', headValue('moment')]]);
      cells([['Byggdel', headValue('byggdel')], ['Pågår från – till', head.period.trim()]]);
      cells([['Utförare', headValue('utforare')]]);
      cells([['Ritning / underlag', headValue('underlag')], ['Krav', headValue('krav')]]);
      y += 14;

      section('3. Arbetsordning');
      table(
        [
          { label: 'Nr', w: 30 },
          { label: 'Arbetssteg – metod, material, utrustning, tider, bemanning', w: 0 },
        ],
        steps.map((s, i) => [`${i + 1}`, stepText(s)]).filter(([, t]) => t),
        Math.max(6, steps.length),
      );

      section('4. Risker och åtgärder');
      // Quick risk boxes (ticked = X): even 3-column grid inside
      // the margins, same 6pt gap under the heading band as other sections.
      doc.setFontSize(9.5);
      ensure(40);
      const flagCols = 3;
      const flagW = (right - marginX) / flagCols;
      const flagRow = 16;
      const flagItems: { label: string; checked?: boolean; other?: boolean }[] = [
        ...RISK_FLAGS.map((f) => ({ label: f.label, checked: flags.includes(f.id) })),
        { label: 'Annat:', other: true },
      ];
      flagItems.forEach((item, i) => {
        const fx = marginX + (i % flagCols) * flagW;
        const top = y + Math.floor(i / flagCols) * flagRow;
        const base = top + 8;
        if (item.other) {
          doc.text(item.label, fx, base);
          doc.setDrawColor(150);
          doc.line(fx + doc.getTextWidth(item.label) + 4, base + 1, right, base + 1);
          return;
        }
        doc.setDrawColor(120);
        doc.rect(fx, base - 8, 9, 9);
        if (item.checked) {
          doc.setFont('helvetica', 'bold');
          doc.text('X', fx + 1.6, base - 0.6);
          doc.setFont('helvetica', 'normal');
        }
        doc.text(item.label, fx + 14, base);
      });
      y += Math.ceil(flagItems.length / flagCols) * flagRow + 6;
      table(
        [
          { label: 'Risk', w: 220 },
          { label: 'Åtgärd', w: 0 },
        ],
        risks
          .map((r) => [r.risk.trim() || r.riskHint || '', r.action.trim() || r.actionHint || ''])
          .filter(([a, b]) => a || b),
        Math.max(5, risks.length),
      );

      section('5. Egenkontroll');
      table(
        [
          { label: 'Kontroll av', w: 200 },
          { label: 'Resultat', w: 75 },
          { label: 'Datum / sign.', w: 85 },
          { label: 'Notering', w: 0 },
        ],
        checks
          .filter((c) => checkText(c))
          .map((c) => [checkText(c), c.result === 'Tomt' ? '' : c.result, '', c.comment.trim()]),
        Math.max(5, checks.length),
      );

      section('6. Genomgång och godkännande');
      const signCols = [
        { label: 'Namn', w: 200 },
        { label: 'Underskrift', w: 200 },
        { label: 'Datum', w: 0 },
      ];
      doc.setFontSize(9.5);
      ensure(20);
      doc.text('Genomgången med laget – tagit del av', marginX, y + 8);
      y += 16;
      table(signCols, [], 4);
      ensure(20 + 18 + 24);
      doc.setFontSize(9.5);
      doc.text('Godkänd av arbetsledning / BAS-U', marginX, y + 8);
      y += 16;
      table(signCols, [], 1);

      doc.setFontSize(8);
      doc.setTextColor(120);
      doc.text('Skapad med ByggExp – byggexp.se', marginX, pageHeight - 28);
      doc.setTextColor(20);

      doc.save(`${fileBase()}.pdf`);
    } finally {
      setBusy(false);
    }
  }

  // CSV opens directly in Excel/Google Sheets (BOM keeps åäö correct).
  function downloadCsv() {
    const out: string[][] = [
      ['Arbetsberedning'],
      ...FIELDS.map((f) => [f.label, f.key === 'date' ? head.date : headValue(f.key)]),
      [],
      ['Arbetsordning'],
      ...steps.filter((s) => stepText(s)).map((s, i) => [`${i + 1}`, stepText(s)]),
      [],
      ['Risker', ...RISK_FLAGS.filter((f) => flags.includes(f.id)).map((f) => f.label)],
      ['Risk', 'Åtgärd'],
      ...risks
        .map((r) => [r.risk.trim() || r.riskHint || '', r.action.trim() || r.actionHint || ''])
        .filter(([a, b]) => a || b),
      [],
      ['Egenkontroll'],
      ['Kontroll av', 'Resultat', 'Datum / sign.', 'Notering'],
      ...checks
        .filter((c) => checkText(c))
        .map((c) => [checkText(c), c.result === 'Tomt' ? '' : c.result, '', c.comment.trim()]),
      [],
      ['Genomgången med laget – tagit del av', ''],
      ['Godkänd av arbetsledning / BAS-U', ''],
    ];
    const csv = out.map((cols) => cols.map((c) => `"${String(c ?? '').replace(/"/g, '""')}"`).join(';')).join('\r\n');
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

  const moreMenu = (id: string, items: { label: string; onClick: () => void; danger?: boolean }[]) => (
    <div className="lm-tool-row-more">
      <button
        type="button"
        className="lm-tool-row-more-btn"
        aria-label="Fler val"
        aria-expanded={menu === id}
        onClick={() => setMenu(menu === id ? null : id)}
      >
        ⋯
      </button>
      {menu === id ? (
        <div className="lm-tool-row-menu" role="menu">
          {items.map((it) => (
            <button
              key={it.label}
              type="button"
              role="menuitem"
              className={it.danger ? 'is-danger' : undefined}
              onClick={() => {
                it.onClick();
                setMenu(null);
              }}
            >
              {it.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );

  const addButton = (key: ListKey, label: string) => (
    <div className="lm-ab-add">
      <button type="button" className="lm-tool-button lm-tool-button--icon lm-tool-button--ghost" onClick={() => addRow(key)}>
        <Icon name="plus" />
        {label}
      </button>
    </div>
  );

  return (
    <div className="lm-tool lm-ab">
      {restored ? (
        <div className="lm-tool-draft" role="status">
          <span>Utkast återställt</span>
          <button type="button" onClick={clearDraft}>
            Börja om
          </button>
        </div>
      ) : null}

      <div className="lm-tool-presets">
        <span className="lm-tool-presets-label">Moment</span>
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
          {[0, 1, 2].flatMap((copy) =>
            ARBETSBEREDNING_PRESETS.map((p) => (
              <button
                key={`${copy}-${p.id}`}
                type="button"
                className={`lm-tool-preset${presetId === p.id ? ' is-active' : ''}`}
                aria-pressed={presetId === p.id}
                aria-hidden={copy !== 1 || undefined}
                tabIndex={copy !== 1 ? -1 : undefined}
                onClick={() => applyPreset(p.id)}
              >
                {p.name}
              </button>
            )),
          )}
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
          {FIELDS.map((f) => {
            const hint = f.hint && preset ? preset[f.hint] : undefined;
            return (
              <label className="lm-tool-field" key={f.key}>
                <span>{f.label}</span>
                <input
                  type={f.date ? 'date' : 'text'}
                  value={head[f.key]}
                  placeholder={hint ?? f.placeholder}
                  title={hint}
                  onChange={(e) => {
                    const value = e.currentTarget.value;
                    setHead((h) => ({ ...h, [f.key]: value }));
                  }}
                />
              </label>
            );
          })}
        </div>

        <div className="lm-ab-section">
          <div className="lm-tool-section-row">Arbetsordning</div>
          <div className="lm-tool-rows">
            {steps.map((s, i) => (
              <div className="lm-tool-row lm-ab-row-step" key={i}>
                <span className="lm-ab-num">{i + 1}</span>
                <input
                  value={s.text}
                  placeholder={s.hint || 'Arbetssteg'}
                  title={s.hint}
                  aria-label={`Arbetssteg ${i + 1}`}
                  onChange={(e) => patchRow('steps', i, { text: e.currentTarget.value })}
                />
                {moreMenu(`step-${i}`, [{ label: 'Ta bort', danger: true, onClick: () => removeRow('steps', i) }])}
              </div>
            ))}
          </div>
          {addButton('steps', 'Lägg till steg')}
        </div>

        <div className="lm-ab-section">
          <div className="lm-tool-section-row">Risker och åtgärder</div>
          <div className="lm-ab-flags">
            {RISK_FLAGS.map((f) => (
              <label className="lm-ab-flag" key={f.id}>
                <input type="checkbox" checked={flags.includes(f.id)} onChange={() => toggleFlag(f.id)} />
                <span>{f.label}</span>
              </label>
            ))}
          </div>
          <div className="lm-tool-rows lm-ab-risks">
            {risks.map((r, i) => (
              <div className="lm-tool-row lm-ab-row-risk" key={i}>
                <input
                  value={r.risk}
                  placeholder={r.riskHint || 'Risk'}
                  title={r.riskHint}
                  aria-label="Risk"
                  onChange={(e) => patchRow('risks', i, { risk: e.currentTarget.value })}
                />
                <input
                  value={r.action}
                  placeholder={r.actionHint || 'Åtgärd'}
                  title={r.actionHint}
                  aria-label="Åtgärd"
                  onChange={(e) => patchRow('risks', i, { action: e.currentTarget.value })}
                />
                {moreMenu(`risk-${i}`, [{ label: 'Ta bort', danger: true, onClick: () => removeRow('risks', i) }])}
              </div>
            ))}
          </div>
          {addButton('risks', 'Lägg till risk')}
        </div>

        <div className="lm-ab-section">
          <div className="lm-tool-section-row">Egenkontroll</div>
          <div className="lm-tool-rows">
            {checks.map((c, i) => {
              const showComment = c.showComment || !!c.comment;
              return (
                <div className="lm-tool-row lm-tool-row-ek" key={i}>
                  <div className="lm-tool-row-point">
                    <input
                      value={c.point}
                      placeholder={c.hint || 'Kontroll av'}
                      title={c.hint}
                      aria-label="Kontroll av"
                      onChange={(e) => patchRow('checks', i, { point: e.currentTarget.value })}
                    />
                  </div>
                  <select
                    value={c.result}
                    aria-label="Resultat"
                    onChange={(e) => patchRow('checks', i, { result: e.currentTarget.value })}
                  >
                    {RESULT_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  {moreMenu(`check-${i}`, [
                    ...(showComment ? [] : [{ label: 'Notering', onClick: () => patchRow('checks', i, { showComment: true }) }]),
                    { label: 'Ta bort', danger: true, onClick: () => removeRow('checks', i) },
                  ])}
                  {showComment ? (
                    <div className="lm-tool-row-extra">
                      <input
                        className="lm-tool-row-comment"
                        value={c.comment}
                        placeholder="Notering"
                        aria-label="Notering"
                        autoFocus={c.showComment && !c.comment}
                        onChange={(e) => patchRow('checks', i, { comment: e.currentTarget.value })}
                      />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          {addButton('checks', 'Lägg till kontroll')}
        </div>

      </form>
    </div>
  );
}
