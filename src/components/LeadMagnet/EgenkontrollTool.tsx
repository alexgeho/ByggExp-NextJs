import { type FormEvent, useRef, useState } from 'react';

import { API_URL } from '../../config/api';
import { gaEvent } from '../../lib/analytics';
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
  const [category, setCategory] = useState(seed?.category ?? CATEGORIES[0]);
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

  // AI generator + email gate. Generation is free; only downloading an
  // AI-generated result asks for an email (= a warm lead). The plain manual /
  // preset template stays free so we don't hurt the existing lead magnet.
  const [aiMoment, setAiMoment] = useState('');
  const [aiMaterial, setAiMaterial] = useState('');
  const [aiBusy, setAiBusy] = useState(false);
  const [aiError, setAiError] = useState('');
  const [aiUsed, setAiUsed] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);
  const [gateBusy, setGateBusy] = useState(false);
  const [email, setEmail] = useState('');
  const pendingRef = useRef<'pdf' | 'csv' | null>(null);

  async function generateAi() {
    const moment = aiMoment.trim();
    if (!moment || aiBusy) return;
    setAiBusy(true);
    setAiError('');
    try {
      const res = await fetch('/api/egenkontroll-generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ moment, material: aiMaterial.trim() }),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        if (res.status === 503) {
          // Key not configured yet — show a friendly "coming soon" instead of a
          // scary error, and steer the user to the ready-made templates below.
          setAiError('AI-funktionen aktiveras inom kort – välj en färdig mall nedan så länge.');
          return;
        }
        throw new Error(j.error || 'Kunde inte generera.');
      }
      const data = (await res.json()) as {
        title: string;
        category: string;
        rows: { point: string; krav: string; method: string }[];
      };
      setActivePreset(null);
      setTitle(data.title);
      if (CATEGORIES.includes(data.category)) setCategory(data.category);
      setRows(
        data.rows.map((r) => ({
          point: r.point,
          result: RESULTS[0],
          comment: [r.krav ? `Krav: ${r.krav}` : '', r.method ? `Metod: ${r.method}` : '']
            .filter(Boolean)
            .join(' · '),
        })),
      );
      setAiUsed(true);
      gaEvent('egenkontroll_ai_generate', { moment: moment.slice(0, 60) });
      window.setTimeout(() => {
        rowsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 60);
    } catch (e) {
      setAiError(e instanceof Error ? e.message : 'Något gick fel.');
    } finally {
      setAiBusy(false);
    }
  }

  // Returns true if the download may proceed; otherwise opens the email gate.
  function ensureUnlocked(kind: 'pdf' | 'csv'): boolean {
    if (!aiUsed || unlocked) return true;
    pendingRef.current = kind;
    setGateOpen(true);
    return false;
  }

  async function submitGate(event: FormEvent) {
    event.preventDefault();
    const mail = email.trim();
    if (!mail.includes('@') || gateBusy) return;
    setGateBusy(true);
    try {
      // Best-effort lead to sales; don't block the download on it.
      void fetch(`${API_URL}/mail/demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'f-email': mail,
          'f-source': 'verktyg:egenkontroll-ai',
          'f-message': `AI-egenkontroll: ${aiMoment.trim()}`,
        }),
      }).catch(() => {});
      gaEvent('egenkontroll_ai_unlock', {});
      setUnlocked(true);
      setGateOpen(false);
      const kind = pendingRef.current;
      pendingRef.current = null;
      if (kind === 'csv') downloadCsv();
      else void downloadPdf();
    } finally {
      setGateBusy(false);
    }
  }

  const setRow = (index: number, patch: Partial<Row>) =>
    setRows((prev) => prev.map((row, i) => (i === index ? { ...row, ...patch } : row)));
  const addRow = () => setRows((prev) => [...prev, emptyRow()]);

  const applyPreset = (presetId: string) => {
    const preset = EGENKONTROLL_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;
    setActivePreset(presetId);
    setTitle(preset.name);
    setCategory(preset.category);
    setRows(
      preset.items.map((item) => ({
        point: item.point,
        result: RESULTS[0],
        comment: item.reference ? `Ref: ${item.reference}` : '',
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
    if (!ensureUnlocked('pdf')) return;
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
    if (!ensureUnlocked('csv')) return;
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

      <div
        className="lm-tool-ai"
        style={{
          border: '1px solid rgba(37, 99, 235, 0.25)',
          background: 'rgba(37, 99, 235, 0.05)',
          borderRadius: 12,
          padding: 16,
          marginBottom: 18,
        }}
      >
        <strong style={{ display: 'block', marginBottom: 4 }}>
          ✨ Skapa en egenkontroll för just ditt moment – med AI
        </strong>
        <p className="lm-tool-sub" style={{ marginTop: 0 }}>
          Beskriv vad du ska kontrollera – el, VVS, tätskikt, betong, tak – så föreslår vi rätt
          kontrollpunkter med krav och kontrollmetod, klart att granska, fylla i och skriva under.
        </p>
        <div className="lm-tool-grid">
          <label className="lm-tool-field">
            <span>Vad ska du kontrollera?</span>
            <input value={aiMoment} placeholder="T.ex. elinstallation i kök, tätskikt i våtrum" onChange={(e) => setAiMoment(e.currentTarget.value)} />
          </label>
          <label className="lm-tool-field">
            <span>Material / detaljer (valfritt)</span>
            <input value={aiMaterial} placeholder="T.ex. GVK, golvbrunn" onChange={(e) => setAiMaterial(e.currentTarget.value)} />
          </label>
        </div>
        <div className="lm-tool-actions" style={{ marginTop: 10 }}>
          <button type="button" className="lm-tool-button" onClick={() => void generateAi()} disabled={aiBusy || !aiMoment.trim()}>
            {aiBusy ? 'Genererar…' : 'Generera med AI'}
          </button>
          {aiError ? <span className="lm-result-fine" style={{ color: '#d64545' }}>{aiError}</span> : null}
        </div>
        {aiUsed ? (
          <p className="lm-result-fine" style={{ marginTop: 10 }}>
            AI-genererat förslag – granska och anpassa mot ritning, gällande krav och tillverkarens
            anvisning innan du använder eller lämnar för signering.
          </p>
        ) : null}
      </div>

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

      {gateOpen ? (
        <form
          className="lm-tool-gate"
          onSubmit={submitGate}
          style={{
            marginTop: 14,
            border: '1px solid rgba(37, 99, 235, 0.25)',
            background: 'rgba(37, 99, 235, 0.05)',
            borderRadius: 12,
            padding: 16,
          }}
        >
          <strong style={{ display: 'block', marginBottom: 4 }}>Nästan klart!</strong>
          <p className="lm-tool-sub" style={{ marginTop: 0 }}>
            Ange din e-post så låser vi upp nedladdningen av din AI-egenkontroll.
          </p>
          <div className="lm-tool-actions">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="namn@företag.se"
              autoComplete="email"
              required
              style={{ minWidth: 240 }}
            />
            <button type="submit" className="lm-tool-button" disabled={gateBusy || !email.includes('@')}>
              {gateBusy ? 'Låser upp…' : 'Lås upp & ladda ner'}
            </button>
          </div>
          <p className="lm-result-fine" style={{ marginTop: 8 }}>
            Vi använder e-posten bara för att kontakta dig om egenkontroll och ByggExp.
          </p>
        </form>
      ) : null}
    </div>
  );
}
