import { gaEvent } from './analytics';

// Shared material-list PDF for the free calculators. Keeps a consistent, branded
// layout (title, meta line, two-column table, disclaimer) so every calculator can
// export a clean PDF with one call. jsPDF is imported dynamically so it only ships
// when a visitor actually exports.
export type MaterialRow = { desc: string; qty: string };

export async function downloadMaterialPdf(opts: {
  title: string; // e.g. "Betong – materiallista"
  meta?: string; // e.g. "Sadeltak · Betongpanna"
  rows: MaterialRow[];
  filename: string; // e.g. "betong-materiallista.pdf"
  tool: string; // for analytics
  note?: string; // disclaimer line
}) {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const mx = 48;
  const pw = doc.internal.pageSize.getWidth();
  const ph = doc.internal.pageSize.getHeight();
  let y = 64;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text(opts.title, mx, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(120);
  y += 18;
  doc.text('Skapad med ByggExp – byggexp.se', mx, y);
  doc.setTextColor(20);
  if (opts.meta) {
    y += 20;
    doc.setFontSize(11);
    doc.text(opts.meta, mx, y);
  }
  y += 20;
  doc.setDrawColor(210);
  doc.line(mx, y, pw - mx, y);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Post', mx, y + 14);
  doc.text('Mängd', pw - mx, y + 14, { align: 'right' });
  doc.setFont('helvetica', 'normal');
  y += 30;

  for (const row of opts.rows) {
    if (y > ph - 90) {
      doc.addPage();
      y = 64;
    }
    doc.text(String(row.desc), mx, y);
    doc.text(String(row.qty), pw - mx, y, { align: 'right' });
    y += 20;
  }

  y = Math.min(y + 12, ph - 50);
  doc.setFontSize(9);
  doc.setTextColor(120);
  doc.text(
    opts.note ||
      'Uppskattning inkl. spill. Kontrollera mot ritning, tillverkarens anvisning och gällande regler.',
    mx,
    y,
    { maxWidth: pw - 2 * mx },
  );

  gaEvent('export_pdf', { tool: opts.tool });
  doc.save(opts.filename);
}
