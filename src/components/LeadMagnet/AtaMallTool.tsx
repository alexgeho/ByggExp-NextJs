import { useState } from 'react';

// Free ÄTA (change/additional work order) tool: the visitor fills the form and
// downloads a ready ÄTA order as PDF or Excel. Fields follow what AB 04 kap 2
// makes relevant so the order actually holds up (type, kind, amount, who
// ordered/notified and when). PDF is generated in the browser with jspdf.

type Field = {
  name: string;
  label: string;
  type?: 'text' | 'date' | 'textarea';
  placeholder?: string;
};

// sv-only magnet.
const FIELDS: Field[] = [
  { name: 'project', label: 'Projekt / arbetsplats', placeholder: 'T.ex. Nybyggnad villa, Bäckvägen 12' },
  { name: 'date', label: 'Datum', type: 'date' },
  { name: 'ataNumber', label: 'ÄTA-nr', placeholder: 'T.ex. 4' },
  { name: 'customer', label: 'Beställare', placeholder: 'Namn / företag' },
  { name: 'contractor', label: 'Entreprenör / utförare', placeholder: 'Ditt företag' },
  { name: 'type', label: 'Typ (ändring / tillägg / avgående)', placeholder: 'T.ex. Tilläggsarbete' },
  { name: 'kind', label: 'Föreskriven eller likställd ÄTA', placeholder: 'T.ex. Föreskriven (beställd)' },
  { name: 'description', label: 'Beskrivning av arbetet', type: 'textarea', placeholder: 'Vad, var och varför' },
  { name: 'quantity', label: 'Mängd / à-pris', placeholder: 'T.ex. 3 st × 850 kr' },
  { name: 'amount', label: 'Belopp exkl. moms', placeholder: 'T.ex. 2 550 kr' },
  { name: 'rot', label: 'ROT-avdrag', placeholder: 'Ja / Nej' },
  { name: 'timeImpact', label: 'Påverkan på tidplan', placeholder: 'T.ex. Ingen / +2 dagar' },
  { name: 'orderedBy', label: 'Beställd / underrättad av (och när)', type: 'textarea', placeholder: 'T.ex. Beställaren via mejl 2026-05-14' },
];

const EMPTY: Record<string, string> = Object.fromEntries(
  FIELDS.map((field) => [field.name, '']),
);

export default function AtaMallTool() {
  const [values, setValues] = useState<Record<string, string>>(EMPTY);
  const [busy, setBusy] = useState(false);

  const setField = (name: string, value: string) =>
    setValues((prev) => ({ ...prev, [name]: value }));

  const fillExample = () =>
    setValues({
      project: 'Nybyggnad villa, Bäckvägen 12',
      date: '',
      ataNumber: '4',
      customer: 'Beställaren AB',
      contractor: 'Ditt Bygg AB',
      type: 'Tilläggsarbete',
      kind: 'Föreskriven (beställd)',
      description: 'Extra eluttag i garage, 3 st, på beställarens begäran.',
      quantity: '3 st × 850 kr',
      amount: '2 550 kr exkl. moms',
      rot: 'Nej',
      timeImpact: 'Ingen påverkan på tidplan',
      orderedBy: 'Beställaren via mejl 2026-05-14',
    });

  async function downloadPdf() {
    setBusy(true);
    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      const marginX = 48;
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const contentWidth = pageWidth - marginX * 2;
      let y = 64;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.text('ÄTA – ändrings- och tilläggsarbete', marginX, y);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(120);
      y += 18;
      doc.text('Skapad med ByggExp – byggexp.se', marginX, y);
      doc.setTextColor(20);
      y += 20;
      doc.setDrawColor(210);
      doc.line(marginX, y, pageWidth - marginX, y);
      y += 24;

      for (const field of FIELDS) {
        const value = values[field.name]?.trim() || '—';
        if (y > pageHeight - 120) {
          doc.addPage();
          y = 64;
        }
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.text(field.label, marginX, y);
        y += 15;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        const lines = doc.splitTextToSize(value, contentWidth) as string[];
        doc.text(lines, marginX, y);
        y += lines.length * 14 + 12;
      }

      if (y > pageHeight - 110) {
        doc.addPage();
        y = 64;
      }
      y += 12;
      doc.setDrawColor(210);
      doc.line(marginX, y, pageWidth - marginX, y);
      y += 30;
      doc.setFontSize(10);
      doc.text('Beställarens underskrift: ____________________________', marginX, y);
      y += 28;
      doc.text('Entreprenörens underskrift: __________________________', marginX, y);

      const stamp = values.ataNumber?.trim() ? `nr-${values.ataNumber.trim()}` : 'utan-nr';
      doc.save(`ata-${stamp}.pdf`);
    } finally {
      setBusy(false);
    }
  }

  // CSV opens directly in Excel/Google Sheets (BOM keeps åäö correct).
  function downloadCsv() {
    const rows: (string | number)[][] = [
      ['ÄTA – ändrings- och tilläggsarbete', ''],
      ['Skapad med', 'ByggExp – byggexp.se'],
      [],
      ...FIELDS.map((field) => [field.label, values[field.name]?.trim() || '']),
    ];
    const csv = rows
      .map((cols) => cols.map((c) => `"${String(c ?? '').replace(/"/g, '""')}"`).join(';'))
      .join('\r\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const stamp = values.ataNumber?.trim() ? `nr-${values.ataNumber.trim()}` : 'utan-nr';
    link.href = url;
    link.download = `ata-${stamp}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Fyll i och ladda ner din ÄTA</h2>
        <p className="lm-tool-sub">
          Fyll i uppgifterna nedan och ladda ner en färdig ÄTA-beställning som PDF eller Excel att signera. Klicka på &quot;Fyll i exempel&quot; för att se en färdig, ifylld ÄTA. Inget konto behövs.
        </p>
      </div>

      <div className="lm-tool-presets">
        <span className="lm-tool-presets-label">Se hur den fylls i:</span>
        <div className="lm-tool-presets-buttons">
          <button type="button" className="lm-tool-preset" onClick={fillExample}>
            Fyll i exempel
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
          {FIELDS.map((field) => (
            <label
              key={field.name}
              className={`lm-tool-field${field.type === 'textarea' ? ' lm-tool-field-wide' : ''}`}
            >
              <span>{field.label}</span>
              {field.type === 'textarea' ? (
                <textarea
                  rows={3}
                  value={values[field.name]}
                  placeholder={field.placeholder}
                  onChange={(event) => setField(field.name, event.currentTarget.value)}
                />
              ) : (
                <input
                  type={field.type || 'text'}
                  value={values[field.name]}
                  placeholder={field.placeholder}
                  onChange={(event) => setField(field.name, event.currentTarget.value)}
                />
              )}
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
    </div>
  );
}
