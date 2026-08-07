import { useState } from 'react';

// Free byggdagbok (site diary) tool: the visitor fills the form and downloads a
// ready PDF. Fields mirror the real ByggExp dagbok form (DagbokForm.jsx) so the
// template matches what the product captures. The PDF is generated fully in the
// browser with jspdf (imported lazily so it never runs during SSR).

type Field = {
  name: string;
  label: string;
  type?: 'text' | 'date' | 'number' | 'textarea';
  placeholder?: string;
};

// Field labels are Swedish — this magnet is sv-only by strategy.
const FIELDS: Field[] = [
  { name: 'project', label: 'Projekt / arbetsplats', placeholder: 'T.ex. Nybyggnad Ekgatan 4' },
  { name: 'date', label: 'Datum', type: 'date' },
  { name: 'weather', label: 'Väder', placeholder: 'T.ex. Molnigt, lätt regn' },
  { name: 'temperature', label: 'Temperatur', placeholder: '+18°C' },
  { name: 'crewCount', label: 'Antal på plats', type: 'number' },
  { name: 'personnel', label: 'Personal / vilka var på plats', type: 'textarea' },
  { name: 'workPerformed', label: 'Utfört arbete', type: 'textarea' },
  { name: 'deviations', label: 'Avvikelser / hinder', type: 'textarea' },
  { name: 'ata', label: 'ÄTA / ändringar', type: 'textarea' },
  { name: 'materials', label: 'Leveranser / material', type: 'textarea' },
  { name: 'notes', label: 'Övriga anteckningar', type: 'textarea' },
];

const EMPTY: Record<string, string> = Object.fromEntries(
  FIELDS.map((field) => [field.name, '']),
);

export default function ByggdagbokTool() {
  const [values, setValues] = useState<Record<string, string>>(EMPTY);
  const [busy, setBusy] = useState(false);

  const setField = (name: string, value: string) =>
    setValues((prev) => ({ ...prev, [name]: value }));

  const fillExample = () =>
    setValues({
      project: 'Nybyggnad Ekgatan 4',
      date: '',
      weather: 'Molnigt, lätt regn',
      temperature: '+12°C',
      crewCount: '4',
      personnel: 'Anna (lag), Erik, Johan, Sara',
      workPerformed: 'Reglade innerväggar plan 2, drog el i kök.',
      deviations: 'Materialleverans försenad 2 h.',
      ata: 'Extra eluttag i kök enligt kundens önskemål.',
      materials: 'Gips 40 skivor, reglar 60 st.',
      notes: 'Skyddsrond utförd utan anmärkning.',
    });

  async function downloadPdf() {
    setBusy(true);
    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      const marginX = 48;
      const pageWidth = doc.internal.pageSize.getWidth();
      const contentWidth = pageWidth - marginX * 2;
      let y = 64;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.text('Byggdagbok', marginX, y);
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

      const pageHeight = doc.internal.pageSize.getHeight();
      for (const field of FIELDS) {
        const value = values[field.name]?.trim() || '—';
        if (y > pageHeight - 80) {
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

      const stamp = (values.date || '').replace(/[^0-9-]/g, '') || 'utan-datum';
      doc.save(`byggdagbok-${stamp}.pdf`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Fyll i och ladda ner din byggdagbok</h2>
        <p className="lm-tool-sub">
          Fyll i dagens uppgifter nedan och ladda ner en färdig PDF att spara eller skriva ut. Inget konto behövs.
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
        </div>
      </form>
    </div>
  );
}
