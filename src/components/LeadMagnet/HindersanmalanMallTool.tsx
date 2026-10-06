import { useEffect, useRef, useState } from 'react';

import StickyDownloadBar from './StickyDownloadBar';
import ChipRow from './ChipRow';
import { useDraft } from '../../lib/useDraft';

// Free hindersanmälan (notice of hindrance + request for time extension) under
// AB 04 / ABT 06 kap 4 § 3 (grounds) and § 4 (notify "utan dröjsmål", else the
// hindrance can't be invoked). No formal written requirement, but written
// notice is what proves it — so the PDF is a ready-to-send A4 letter.
// Example text is the placeholder and goes into the PDF when a descriptive
// field is left empty; identity fields (names, dates) stay blank to write by
// hand. UX mirrors ArbetsberedningMallTool. sv-only by strategy.

const AVTAL = ['AB 04', 'ABT 06'] as const;

// AB 04 / ABT 06 kap 4 § 3, punkt 1–5 (short form).
export const HINDER_GRUNDER = [
  'Beställaren eller förhållande på beställarens sida (t.ex. ÄTA, sena handlingar)',
  'Myndighetsbeslut som medför allmän brist på material, hjälpmedel eller arbetskraft',
  'Krig, försvarsberedskap, epidemi, strejk, blockad eller lockout',
  'Väderleks- eller vattenståndsförhållanden som är osedvanliga för orten',
  'Annat förhållande utanför entreprenörens kontroll',
];

type Key =
  | 'datum'
  | 'ort'
  | 'bestallare'
  | 'bestallareKontakt'
  | 'entreprenor'
  | 'entreprenorKontakt'
  | 'projekt'
  | 'kontrakt'
  | 'hinder'
  | 'orsak'
  | 'upptackt'
  | 'paverkan'
  | 'forlangning'
  | 'kostnad'
  | 'atgarder'
  | 'namn'
  | 'befattning';

type Field = {
  key: Key;
  label: string;
  placeholder?: string;
  /** Placeholder is example text → used in the PDF when left empty. */
  example?: boolean;
  type?: 'date' | 'textarea';
  wide?: boolean;
};

const PARTER: Field[] = [
  { key: 'bestallare', label: 'Till – beställare', placeholder: 'Beställarens företag' },
  { key: 'bestallareKontakt', label: 'Att', placeholder: 'Beställarens ombud' },
  { key: 'entreprenor', label: 'Från – entreprenör', placeholder: 'Ditt företag' },
  { key: 'entreprenorKontakt', label: 'Kontaktperson', placeholder: 'Namn, telefon' },
  { key: 'projekt', label: 'Projekt', placeholder: 'Projekt och adress' },
  { key: 'kontrakt', label: 'Kontrakt', placeholder: 'Kontraktsnr / datum' },
];

const HINDER: Field[] = [
  {
    key: 'hinder',
    label: 'Vad hindrar',
    type: 'textarea',
    wide: true,
    example: true,
    placeholder:
      'Bygghandlingar för stomme plan 3 (K-ritningar) har inte levererats. Montaget av bjälklag plan 3 kan inte påbörjas.',
  },
  {
    key: 'orsak',
    label: 'Orsak',
    type: 'textarea',
    wide: true,
    example: true,
    placeholder:
      'Handlingarna skulle enligt tidplanen levereras senast vecka 14 av beställarens konstruktör. De är ännu inte levererade.',
  },
  { key: 'upptackt', label: 'Upptäckt', type: 'date' },
];

const TID: Field[] = [
  {
    key: 'paverkan',
    label: 'Påverkan på tidplanen',
    type: 'textarea',
    wide: true,
    example: true,
    placeholder:
      'Stomresning plan 3–4 och efterföljande tätt hus försenas. Arbetena kan inte utföras i annan ordning.',
  },
  { key: 'forlangning', label: 'Begärd förlängning', placeholder: '10 arbetsdagar', example: true },
  {
    key: 'kostnad',
    label: 'Kostnad / ersättning',
    placeholder: 'Ersättning begärs enligt kap 5 § 4, specificeras separat',
    example: true,
  },
  {
    key: 'atgarder',
    label: 'Våra åtgärder',
    type: 'textarea',
    wide: true,
    example: true,
    placeholder: 'Vi omdisponerar bemanningen till plan 1–2 och återupptar montaget direkt när handlingarna kommit.',
  },
];

const SIGN: Field[] = [
  { key: 'namn', label: 'Namn', placeholder: 'Ditt namn' },
  { key: 'befattning', label: 'Befattning', placeholder: 'Platschef' },
  { key: 'ort', label: 'Ort', placeholder: 'Ort' },
  { key: 'datum', label: 'Datum', type: 'date' },
];

const ALL = [...PARTER, ...HINDER, ...TID, ...SIGN];

type State = Record<Key, string> & { avtal: string; grund: string };

const emptyState = (): State => ({
  ...(Object.fromEntries(ALL.map((f) => [f.key, ''])) as Record<Key, string>),
  avtal: 'AB 04',
  grund: '',
});

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

const STORAGE_KEY = 'bx-hindersanmalan-draft';

function DownloadIcon() {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

export default function HindersanmalanMallTool() {
  const [s, setS] = useState<State>(emptyState);
  const [busy, setBusy] = useState(false);
  const toolRootRef = useRef<HTMLDivElement>(null);

  // --- Draft autosave (localStorage, only after a real edit) -----------------
  const draft = useDraft<Partial<State>>(STORAGE_KEY, s, {
    apply: (d) => setS({ ...emptyState(), ...d, datum: d.datum || today() }),
    hasContent: (d) => ALL.some((f) => f.key !== 'datum' && typeof d[f.key] === 'string' && d[f.key]?.trim()) || !!d.grund,
    onFresh: () => setS((p) => ({ ...p, datum: today() })),
  });
  const restored = draft.restored;

  function clearDraft() {
    draft.clear();
    setS({ ...emptyState(), datum: today() });
  }

  const set = (key: keyof State, value: string) => setS((p) => ({ ...p, [key]: value }));

  /** Typed value, else the example text (descriptive fields only), else empty. */
  const val = (key: Key) => {
    const f = ALL.find((x) => x.key === key);
    return s[key].trim() || (f?.example ? f.placeholder ?? '' : '');
  };
  const grundText = () => {
    const i = Number(s.grund);
    return i ? `Kap 4 § 3 punkt ${i} – ${HINDER_GRUNDER[i - 1]}` : '';
  };
  const fileBase = () => `hindersanmalan-${slug(s.projekt) || 'mall'}`;

  async function downloadPdf() {
    setBusy(true);
    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF({ unit: 'pt', format: 'a4', orientation: 'portrait' });
      const mx = 56;
      const pageW = doc.internal.pageSize.getWidth();
      const pageH = doc.internal.pageSize.getHeight();
      const right = pageW - mx;
      const width = right - mx;
      const bottom = pageH - 60;
      let y = 64;
      const ensure = (space: number) => {
        if (y + space > bottom) {
          doc.addPage();
          y = 64;
        }
      };
      const ink = () => doc.setTextColor(20);
      const muted = () => doc.setTextColor(110);

      // Date (top right) + title.
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      muted();
      const place = [s.ort.trim(), s.datum].filter(Boolean).join(', ');
      if (place) doc.text(place, right, y, { align: 'right' });
      ink();
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.text('Hindersanmälan', mx, y + 6);
      y += 24;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10.5);
      muted();
      doc.text(`Underrättelse om hinder och begäran om tidsförlängning enligt ${s.avtal} kap 4 §§ 3–4`, mx, y);
      ink();
      y += 28;

      // Parties: two columns, label small grey, value below (blank = write-in line).
      const colW = (width - 24) / 2;
      const party = (x: number, label: string, name: string, contact: string, contactLabel: string) => {
        let yy = y;
        doc.setFontSize(8);
        muted();
        doc.text(label.toUpperCase(), x, yy);
        yy += 15;
        ink();
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        if (name) doc.text(doc.splitTextToSize(name, colW) as string[], x, yy);
        else {
          doc.setDrawColor(170);
          doc.line(x, yy + 2, x + colW, yy + 2);
        }
        doc.setFont('helvetica', 'normal');
        yy += 17;
        doc.setFontSize(10);
        if (contact) doc.text(`${contactLabel}: ${contact}`, x, yy);
        else {
          doc.text(`${contactLabel}:`, x, yy);
          doc.setDrawColor(170);
          doc.line(x + doc.getTextWidth(`${contactLabel}:`) + 4, yy + 2, x + colW, yy + 2);
        }
        return yy;
      };
      const yA = party(mx, 'Till (beställare)', s.bestallare.trim(), s.bestallareKontakt.trim(), 'Att');
      const yB = party(mx + colW + 24, 'Från (entreprenör)', s.entreprenor.trim(), s.entreprenorKontakt.trim(), 'Kontakt');
      y = Math.max(yA, yB) + 24;

      // Project / contract rows.
      const kv = (label: string, value: string) => {
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text(label, mx, y);
        doc.setFont('helvetica', 'normal');
        const vx = mx + 92;
        if (value) {
          const lines = doc.splitTextToSize(value, right - vx) as string[];
          doc.text(lines, vx, y);
          y += lines.length * 13;
        } else {
          doc.setDrawColor(170);
          doc.line(vx, y + 2, right, y + 2);
          y += 13;
        }
        y += 6;
      };
      kv('Projekt', s.projekt.trim());
      kv('Kontrakt', [s.kontrakt.trim(), s.avtal].filter(Boolean).join(' · '));
      y += 6;
      doc.setDrawColor(210);
      doc.line(mx, y, right, y);
      y += 22;

      // Lead sentence.
      doc.setFontSize(10.5);
      const lead = doc.splitTextToSize(
        `Vi anmäler härmed hinder (${s.avtal} kap 4 § 4) och begär förlängning av kontraktstiden (kap 4 § 3).`,
        width,
      ) as string[];
      doc.text(lead, mx, y);
      y += lead.length * 14 + 14;

      // Numbered sections: bold heading, body text (blank → write-in lines).
      let n = 0;
      const block = (heading: string, body: string, blankLines = 2) => {
        n += 1;
        doc.setFontSize(10.5);
        const lines = body ? (doc.splitTextToSize(body, width) as string[]) : [];
        ensure(18 + Math.max(lines.length, blankLines) * 14 + 12);
        doc.setFont('helvetica', 'bold');
        doc.text(`${n}. ${heading}`, mx, y);
        doc.setFont('helvetica', 'normal');
        y += 16;
        if (lines.length) {
          doc.text(lines, mx, y);
          y += lines.length * 14;
        } else {
          doc.setDrawColor(190);
          for (let i = 0; i < blankLines; i += 1) {
            doc.line(mx, y + 2, right, y + 2);
            y += 18;
          }
        }
        y += 12;
      };

      // Short answers sit on the heading line ("4. Upptäckt: 2026-04-08").
      const inline = (heading: string, value: string) => {
        n += 1;
        ensure(30);
        doc.setFontSize(10.5);
        doc.setFont('helvetica', 'bold');
        const head = `${n}. ${heading}:`;
        doc.text(head, mx, y);
        const vx = mx + doc.getTextWidth(head) + 6;
        doc.setFont('helvetica', 'normal');
        if (value) {
          const lines = doc.splitTextToSize(value, right - vx) as string[];
          doc.text(lines, vx, y);
          y += (lines.length - 1) * 14;
        } else {
          doc.setDrawColor(190);
          doc.line(vx, y + 2, right, y + 2);
        }
        y += 26;
      };

      block('Hinder', val('hinder'));
      block('Orsak', val('orsak'));
      block('Grund', grundText(), 1);
      inline('Upptäckt', s.upptackt);
      block('Påverkan på tidplanen', val('paverkan'));
      inline('Begärd förlängning av kontraktstiden', val('forlangning'));
      if (val('kostnad')) inline('Kostnad / ersättning', val('kostnad'));
      if (val('atgarder')) block('Åtgärder för att begränsa förseningen', val('atgarder'));

      // Signature.
      ensure(110);
      y += 4;
      doc.setFontSize(10);
      const sigW = (width - 24) / 2;
      const sig = (x: number, label: string, value: string) => {
        if (value) doc.text(value, x, y - 4);
        doc.setDrawColor(150);
        doc.line(x, y, x + sigW, y);
        doc.setFontSize(8);
        muted();
        doc.text(label.toUpperCase(), x, y + 11);
        ink();
        doc.setFontSize(10);
      };
      doc.text('För entreprenören', mx, y);
      y += 40;
      sig(mx, 'Underskrift', '');
      sig(mx + sigW + 24, 'Ort och datum', place);
      y += 40;
      sig(mx, 'Namnförtydligande', s.namn.trim());
      sig(mx + sigW + 24, 'Befattning', s.befattning.trim());
      y += 46;

      // Receipt by the client — proves the notice was received in time.
      ensure(50);
      doc.setFontSize(10);
      doc.text('Mottagen av beställaren', mx, y);
      y += 36;
      sig(mx, 'Underskrift', '');
      sig(mx + sigW + 24, 'Datum', '');

      const pages = doc.getNumberOfPages();
      for (let p = 1; p <= pages; p += 1) {
        doc.setPage(p);
        doc.setFontSize(8);
        doc.setTextColor(140);
        doc.text('Skapad med ByggExp – byggexp.se', mx, pageH - 32);
        if (pages > 1) doc.text(`Sida ${p} av ${pages}`, right, pageH - 32, { align: 'right' });
      }

      doc.save(`${fileBase()}.pdf`);
    } finally {
      setBusy(false);
    }
  }

  // CSV opens directly in Excel/Google Sheets (BOM keeps åäö correct).
  function downloadCsv() {
    const out: string[][] = [
      ['Hindersanmälan', s.avtal],
      ...PARTER.map((f) => [f.label, val(f.key)]),
      ['Grund', grundText()],
      ...[...HINDER, ...TID, ...SIGN].map((f) => [f.label, val(f.key)]),
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

  const renderField = (f: Field) => (
    <label className={`lm-tool-field${f.wide ? ' lm-tool-field-wide' : ''}`} key={f.key}>
      <span>{f.label}</span>
      {f.type === 'textarea' ? (
        <textarea
          rows={3}
          value={s[f.key]}
          placeholder={f.placeholder}
          onChange={(e) => set(f.key, e.currentTarget.value)}
        />
      ) : (
        <input
          type={f.type === 'date' ? 'date' : 'text'}
          value={s[f.key]}
          placeholder={f.placeholder}
          onChange={(e) => set(f.key, e.currentTarget.value)}
        />
      )}
    </label>
  );

  const downloads = (bottom?: boolean) => (
    <div className={`lm-tool-actions lm-tool-download${bottom ? ' lm-tool-download--bottom' : ''}`}>
      <button type="button" className="lm-tool-button lm-tool-button--icon" onClick={downloadCsv}>
        <DownloadIcon />
        <span className="lm-hide-sm">Ladda ner </span>Excel
      </button>
      <button type="submit" className="lm-tool-button lm-tool-button--icon" disabled={busy}>
        <DownloadIcon />
        {busy ? 'Skapar PDF…' : <><span className="lm-hide-sm">Ladda ner </span>PDF</>}
      </button>
    </div>
  );

  return (
    <div className="lm-tool lm-ab lm-hinder" ref={toolRootRef} {...draft.bind}>
      <StickyDownloadBar scope={toolRootRef}>
        <button type="button" className="lm-tool-button lm-tool-button--icon" onClick={downloadCsv}>
          <DownloadIcon />
          Excel
        </button>
        <button type="button" className="lm-tool-button lm-tool-button--icon" disabled={busy} onClick={() => void downloadPdf()}>
          <DownloadIcon />
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
        <span className="lm-tool-presets-label">Avtal</span>
        <ChipRow label="Avtal">
          {AVTAL.map((a) => (
            <button
              key={a}
              type="button"
              className={`lm-tool-preset${s.avtal === a ? ' is-active' : ''}`}
              aria-pressed={s.avtal === a}
              onClick={() => set('avtal', a)}
            >
              {a}
            </button>
          ))}
        </ChipRow>
      </div>

      <form
        className="lm-tool-form"
        onSubmit={(event) => {
          event.preventDefault();
          void downloadPdf();
        }}
      >
        {downloads()}

        <div className="lm-tool-grid">{PARTER.map(renderField)}</div>

        <div className="lm-ab-section">
          <div className="lm-tool-section-row">Hinder</div>
          <div className="lm-tool-grid">
            {HINDER.slice(0, 2).map(renderField)}
            <label className="lm-tool-field">
              <span>Grund (kap 4 § 3)</span>
              <select value={s.grund} onChange={(e) => set('grund', e.currentTarget.value)}>
                <option value="">Välj punkt</option>
                {HINDER_GRUNDER.map((g, i) => (
                  <option key={g} value={String(i + 1)}>
                    {`${i + 1}. ${g}`}
                  </option>
                ))}
              </select>
            </label>
            {HINDER.slice(2).map(renderField)}
          </div>
        </div>

        <div className="lm-ab-section">
          <div className="lm-tool-section-row">Tid och kostnad</div>
          <div className="lm-tool-grid">{TID.map(renderField)}</div>
        </div>

        <div className="lm-ab-section">
          <div className="lm-tool-section-row">Underskrift</div>
          <div className="lm-tool-grid">{SIGN.map(renderField)}</div>
        </div>

        {/* Same downloads again at the end — people fill in, then forget to scroll up. */}
        {downloads(true)}
      </form>
    </div>
  );
}
