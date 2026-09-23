import { useState } from 'react';

import ToolAppCta from './ToolAppCta';

// Free kontrollplan (PBL) template as a real control table. Per control point
// Boverket expects: vad som kontrolleras, hur, mot vilket underlag, vem som
// kontrollerar, and whether it is an egenkontroll or done by a certified
// sakkunnig (PBL 10 kap.) — plus a date/signature per point. The plan also
// lists the anmälningar to the byggnadsnämnd and its arbetsplatsbesök.
// Header + table + notes → PDF (landscape) or Excel (CSV). sv-only.

type Row = { what: string; how: string; against: string; who: string; kind: string };

const KINDS = ['Egenkontroll', 'Certifierad sakkunnig', 'Kontrollansvarig'];

const emptyRow = (): Row => ({ what: '', how: '', against: '', who: '', kind: KINDS[0] });

type Head = {
  property: string;
  project: string;
  permit: string;
  builder: string;
  ka: string;
  notifications: string;
  visits: string;
  waste: string;
  finalNote: string;
};

const EMPTY_HEAD: Head = {
  property: '',
  project: '',
  permit: '',
  builder: '',
  ka: '',
  notifications: '',
  visits: '',
  waste: '',
  finalNote: '',
};

const EXAMPLE_HEAD: Head = {
  property: 'Kungsängen 1:23',
  project: 'Tillbyggnad enbostadshus, 20 m²',
  permit: 'BL 2026-000123',
  builder: 'Anna Andersson, 070-000 00 00',
  ka: 'Krävs ej (enkel åtgärd enligt byggnadsnämndens beslut)',
  notifications:
    'Meddela byggnadsnämnden när grundläggningen är klar och när åtgärden är färdigställd (inför slutbesked).',
  visits: 'Arbetsplatsbesök enligt byggnadsnämndens beslut, t.ex. när stommen är rest.',
  waste:
    'Bygg- och rivningsavfall sorteras i minst fraktionerna trä, mineral (betong/tegel/klinker/keramik/sten), metall, glas, plast och gips.',
  finalNote: 'Ifylld och signerad kontrollplan, intyg (våtrum, VVS, el) och OVK-protokoll lämnas till byggnadsnämnden.',
};

const EXAMPLE_ROWS: Row[] = [
  { what: 'Grundläggning: mått och armering', how: 'Mätning, okulär', against: 'K-ritning', who: 'Entreprenör', kind: 'Egenkontroll' },
  { what: 'Fuktkvot i virke före inbyggnad', how: 'Mätning', against: 'Fuktsäkerhetsprojektering', who: 'Entreprenör', kind: 'Egenkontroll' },
  { what: 'Bärande konstruktion: dimensioner och infästningar', how: 'Okulär, mått', against: 'K-ritning', who: 'Entreprenör', kind: 'Egenkontroll' },
  { what: 'Brandskydd: avskiljningar och genomföringar', how: 'Okulär', against: 'Brandskyddsbeskrivning, BBR', who: 'Entreprenör', kind: 'Egenkontroll' },
  { what: 'Tätskikt i våtrum', how: 'Okulär, intyg', against: 'Branschregler (t.ex. GVK/BKR)', who: 'Behörig våtrumsmontör', kind: 'Egenkontroll' },
  { what: 'Tappvatten och avlopp: täthet', how: 'Provning, intyg', against: 'Säker Vatteninstallation 2026:1', who: 'VVS-företag', kind: 'Egenkontroll' },
  { what: 'Elinstallation', how: 'Kontroll och mätning', against: 'Företagets egenkontrollprogram', who: 'Elinstallationsföretag', kind: 'Egenkontroll' },
  { what: 'Ventilation: flöden', how: 'Mätning, protokoll', against: 'Projekterade flöden', who: 'Ventilationsentreprenör', kind: 'Egenkontroll' },
  { what: 'OVK före ibruktagning', how: 'Funktionskontroll', against: 'OVK-föreskrifter', who: 'Certifierad funktionskontrollant', kind: 'Certifierad sakkunnig' },
];

const HEAD_FIELDS: { name: keyof Head; label: string; placeholder: string }[] = [
  { name: 'property', label: 'Fastighetsbeteckning', placeholder: 'T.ex. Kungsängen 1:23' },
  { name: 'project', label: 'Åtgärd / projekt', placeholder: 'T.ex. Tillbyggnad enbostadshus' },
  { name: 'permit', label: 'Bygglov / anmälan (diarienr)', placeholder: 'T.ex. BL 2026-000123' },
  { name: 'builder', label: 'Byggherre', placeholder: 'Namn och kontaktuppgifter' },
  { name: 'ka', label: 'Kontrollansvarig (namn, certifieringsnr)', placeholder: 'Eller "krävs ej"' },
];

const NOTE_FIELDS: { name: keyof Head; label: string; placeholder: string }[] = [
  { name: 'notifications', label: 'Anmälningar till byggnadsnämnden', placeholder: 'Vad som ska meddelas nämnden och när' },
  { name: 'visits', label: 'Byggnadsnämndens arbetsplatsbesök', placeholder: 'När nämnden besöker arbetsplatsen' },
  { name: 'waste', label: 'Bygg- och rivningsavfall', placeholder: 'Hur avfallet sorteras och tas om hand' },
  { name: 'finalNote', label: 'Underlag för slutbesked', placeholder: 'Vad som lämnas till nämnden för slutbesked' },
];

// jsPDF's built-in Helvetica is WinAnsi: åäö and ² work, ≥/≤ don't.
const pdfText = (s: string) => s.replace(/≥/g, '>=').replace(/≤/g, '<=');

export default function KontrollplanMallTool() {
  const [head, setHead] = useState<Head>(EMPTY_HEAD);
  const [rows, setRows] = useState<Row[]>([emptyRow(), emptyRow(), emptyRow()]);
  const [busy, setBusy] = useState(false);

  const setRow = (index: number, patch: Partial<Row>) =>
    setRows((prev) => prev.map((row, i) => (i === index ? { ...row, ...patch } : row)));
  const addRow = () => setRows((prev) => [...prev, emptyRow()]);
  const removeRow = (index: number) =>
    setRows((prev) => (prev.length > 1 ? prev.filter((_, i) => i !== index) : prev));

  const fillExample = () => {
    setHead(EXAMPLE_HEAD);
    setRows(EXAMPLE_ROWS);
  };
  const clearForm = () => {
    setHead(EMPTY_HEAD);
    setRows([emptyRow(), emptyRow(), emptyRow()]);
  };

  const fileBase = () => {
    const raw = head.property
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Kungsängen → kungsangen, not kungs-ngen
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    return `kontrollplan${raw ? `-${raw.slice(0, 40)}` : ''}`;
  };

  // Blank rows still print (empty table lines to fill in by hand); fully empty
  // trailing rows are dropped only when there are filled ones.
  const printableRows = () => {
    const filled = rows.filter((r) => r.what.trim());
    return filled.length ? filled : rows;
  };

  async function downloadPdf() {
    setBusy(true);
    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF({ unit: 'pt', format: 'a4', orientation: 'landscape' });
      const marginX = 40;
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const right = pageWidth - marginX;
      let y = 54;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.text('Kontrollplan enligt plan- och bygglagen', marginX, y);
      doc.setFont('helvetica', 'normal');
      y += 26;

      // Header fields: value if filled, otherwise a line to write on.
      doc.setFontSize(10.5);
      const colX = [marginX, marginX + 380];
      HEAD_FIELDS.forEach((f, i) => {
        const x = colX[i % 2];
        const lineEnd = i % 2 === 0 ? colX[1] - 20 : right;
        const label = `${f.label}: `;
        doc.text(label, x, y);
        const startX = x + doc.getTextWidth(label);
        const value = head[f.name].trim();
        if (value) {
          const fit = doc.splitTextToSize(pdfText(value), lineEnd - startX) as string[];
          doc.text(fit[0], startX, y);
        } else {
          doc.setDrawColor(160);
          doc.line(startX, y + 2, lineEnd, y + 2);
        }
        if (i % 2 === 1 || i === HEAD_FIELDS.length - 1) y += 20;
      });
      y += 8;

      const cols = [
        { label: 'Kontroll (vad)', w: 175 },
        { label: 'Hur', w: 105 },
        { label: 'Mot vilket underlag', w: 135 },
        { label: 'Vem kontrollerar', w: 115 },
        { label: 'Egenkontroll / sakkunnig', w: 110 },
        { label: 'Datum / signatur', w: 0 },
      ];
      const xs: number[] = [];
      let cx = marginX;
      cols.forEach((c) => {
        xs.push(cx);
        cx += c.w;
      });
      const colW = (i: number) => (i < cols.length - 1 ? cols[i].w : right - xs[i]) - 8;

      const verticals = (top: number, bottom: number) => {
        doc.setDrawColor(180);
        [...xs, right].forEach((x) => doc.line(x, top, x, bottom));
      };
      const drawHeader = () => {
        const top = y;
        doc.setFillColor(238, 242, 247);
        doc.rect(marginX, y, right - marginX, 22, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        cols.forEach((c, i) => doc.text(c.label, xs[i] + 4, y + 15));
        doc.setFont('helvetica', 'normal');
        y += 22;
        verticals(top, y);
        doc.line(marginX, top, right, top);
        doc.line(marginX, y, right, y);
      };

      drawHeader();
      doc.setFontSize(9.5);
      printableRows().forEach((row) => {
        const cells = [row.what, row.how, row.against, row.who, row.what.trim() ? row.kind : '', ''];
        const lines = cells.map((c, i) => doc.splitTextToSize(pdfText(c || ''), colW(i)) as string[]);
        const h = Math.max(28, Math.max(...lines.map((l) => l.length)) * 12 + 12);
        if (y + h > pageHeight - 60) {
          doc.addPage();
          y = 54;
          drawHeader();
          doc.setFontSize(9.5);
        }
        lines.forEach((l, i) => doc.text(l, xs[i] + 4, y + 15));
        verticals(y, y + h);
        y += h;
        doc.setDrawColor(200);
        doc.line(marginX, y, right, y);
      });

      // Notes: anmälningar, arbetsplatsbesök, avfall, slutbesked.
      y += 18;
      NOTE_FIELDS.forEach((f) => {
        const value = head[f.name].trim();
        const body = doc.splitTextToSize(pdfText(value || ''), right - marginX) as string[];
        const need = 16 + Math.max(1, body.length) * 13 + 10;
        if (y + need > pageHeight - 40) {
          doc.addPage();
          y = 54;
        }
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10.5);
        doc.text(f.label, marginX, y);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        y += 15;
        if (value) {
          doc.text(body, marginX, y);
          y += body.length * 13 + 8;
        } else {
          doc.setDrawColor(160);
          doc.line(marginX, y + 2, right, y + 2);
          y += 18;
        }
      });

      // Signatures.
      if (y + 70 > pageHeight - 30) {
        doc.addPage();
        y = 54;
      } else {
        y += 16;
      }
      doc.setFontSize(10);
      ['Byggherre – namn, datum', 'Kontrollansvarig – namn, certifieringsnr, datum'].forEach((s) => {
        doc.text(`${s}: ______________________________________`, marginX, y);
        y += 22;
      });
      doc.setFontSize(8);
      doc.setTextColor(110);
      const foot = doc.splitTextToSize(
        'Kontrollplan enligt plan- och bygglagen (10 kap.). För varje kontroll anges vad som kontrolleras, hur, mot vilket underlag, vem som gör kontrollen och om den görs som egenkontroll eller av certifierad sakkunnig. Datera och signera varje kontroll när den är utförd. Byggnadsnämnden fastställer kontrollplanen i startbeskedet.',
        right - marginX,
      ) as string[];
      doc.text(foot, marginX, y + 4);
      doc.setTextColor(0);

      doc.save(`${fileBase()}.pdf`);
    } finally {
      setBusy(false);
    }
  }

  // CSV opens directly in Excel/Google Sheets (BOM keeps åäö correct).
  function downloadCsv() {
    const out: string[][] = [
      ['Kontrollplan enligt PBL', ''],
      ...HEAD_FIELDS.map((f) => [f.label, head[f.name]]),
      [],
      ['Kontroll (vad)', 'Hur', 'Mot vilket underlag', 'Vem kontrollerar', 'Egenkontroll / sakkunnig', 'Datum / signatur'],
      ...printableRows().map((r) => [r.what, r.how, r.against, r.who, r.what.trim() ? r.kind : '', '']),
      [],
      ...NOTE_FIELDS.map((f) => [f.label, head[f.name]]),
      [],
      ['Byggherre – namn, datum', ''],
      ['Kontrollansvarig – namn, certifieringsnr, datum', ''],
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
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Kontrollplan enligt PBL</h2>
        <p className="lm-tool-sub">
          Fyll i projektuppgifter och en rad per kontroll – vad, hur, mot vilket underlag, vem och om det är
          egenkontroll eller certifierad sakkunnig – och ladda ner kontrollplanen som PDF eller Excel.
          Klicka på "Fyll i exempel" för att se ett ifyllt exempel. För större projekt tar en kontrollansvarig (KA)
          fram planen.
        </p>
      </div>

      <div className="lm-tool-presets">
        <span className="lm-tool-presets-label">Se hur den fylls i:</span>
        <div className="lm-tool-presets-buttons">
          <button type="button" className="lm-tool-preset" onClick={fillExample}>
            Fyll i exempel
          </button>
          <button type="button" className="lm-tool-preset" onClick={clearForm}>
            Rensa formuläret
          </button>
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
          {HEAD_FIELDS.map((f) => (
            <label key={f.name} className="lm-tool-field">
              <span>{f.label}</span>
              <input
                value={head[f.name]}
                placeholder={f.placeholder}
                onChange={(e) => setHead((prev) => ({ ...prev, [f.name]: e.currentTarget.value }))}
              />
            </label>
          ))}
        </div>

        <div className="lm-kp-rows">
          {rows.map((row, index) => (
            <div className="lm-kp-row" key={index}>
              <input
                className="lm-kp-what"
                value={row.what}
                placeholder="Vad kontrolleras"
                aria-label="Kontroll (vad)"
                onChange={(e) => setRow(index, { what: e.currentTarget.value })}
              />
              <div className="lm-kp-grid">
                <input value={row.how} placeholder="Hur (metod)" aria-label="Hur" onChange={(e) => setRow(index, { how: e.currentTarget.value })} />
                <input value={row.against} placeholder="Mot vilket underlag" aria-label="Mot vilket underlag" onChange={(e) => setRow(index, { against: e.currentTarget.value })} />
                <input value={row.who} placeholder="Vem kontrollerar" aria-label="Vem kontrollerar" onChange={(e) => setRow(index, { who: e.currentTarget.value })} />
                <select value={row.kind} aria-label="Egenkontroll eller sakkunnig" onChange={(e) => setRow(index, { kind: e.currentTarget.value })}>
                  {KINDS.map((k) => (
                    <option key={k} value={k}>{k}</option>
                  ))}
                </select>
                <button type="button" className="lm-tool-row-remove" aria-label="Ta bort rad" onClick={() => removeRow(index)}>
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>

        <button type="button" className="lm-tool-secondary lm-kp-add" onClick={addRow}>
          + Lägg till kontroll
        </button>

        <div className="lm-tool-grid">
          {NOTE_FIELDS.map((f) => (
            <label key={f.name} className="lm-tool-field lm-tool-field-wide">
              <span>{f.label}</span>
              <textarea
                rows={2}
                value={head[f.name]}
                placeholder={f.placeholder}
                onChange={(e) => setHead((prev) => ({ ...prev, [f.name]: e.currentTarget.value }))}
              />
            </label>
          ))}
        </div>

        <div className="lm-tool-actions">
          <button type="submit" className="lm-tool-button" disabled={busy}>
            {busy ? 'Skapar PDF…' : 'Ladda ner PDF'}
          </button>
          <button type="button" className="lm-tool-secondary" onClick={downloadCsv}>
            Ladda ner Excel
          </button>
        </div>
      </form>

      <ToolAppCta
        tool="kontrollplan"
        heading="Följ kontrollplanen i ByggExp"
        text="Mallen ovan är gratis. I ByggExp kopplar du kontrollerna till egenkontroller som fylls i på plats, med foto, datum och signatur – samlat per projekt och klart att lämna in inför slutbesked."
        bullets={[
          'Egenkontroller ifyllda på plats och kopplade till kontrollplanen',
          'Foto, datum och signatur per kontroll',
          'Allt underlag samlat per projekt inför slutbesked',
        ]}
        secondary={{ href: '/sv/verktyg', label: 'Se alla gratis verktyg' }}
      />
    </div>
  );
}
