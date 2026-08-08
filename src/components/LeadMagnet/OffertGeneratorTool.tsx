import { useMemo, useState } from 'react';

// Free offert (quote) generator: fill company/customer + line rows, optionally
// apply ROT on labour rows, and download a professional PDF via jspdf. All in
// the browser. ROT = 30% of labour (incl. moms), capped 50 000 kr (2026).

type Row = { desc: string; qty: string; price: string; labour: boolean };

const emptyRow = (): Row => ({ desc: '', qty: '1', price: '', labour: false });
const ROT_CAP = 50000;

function kr(v: number): string {
  return `${Math.round(v).toLocaleString('sv-SE')} kr`;
}

export default function OffertGeneratorTool() {
  const [company, setCompany] = useState('');
  const [customer, setCustomer] = useState('');
  const [momsRate, setMomsRate] = useState(25);
  const [useRot, setUseRot] = useState(false);
  const [rows, setRows] = useState<Row[]>([emptyRow(), emptyRow()]);
  const [busy, setBusy] = useState(false);

  const setRow = (i: number, patch: Partial<Row>) =>
    setRows((prev) => prev.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));
  const addRow = () => setRows((prev) => [...prev, emptyRow()]);
  const removeRow = (i: number) =>
    setRows((prev) => (prev.length > 1 ? prev.filter((_, idx) => idx !== i) : prev));

  const totals = useMemo(() => {
    const r = momsRate / 100;
    let net = 0;
    let labourNet = 0;
    for (const row of rows) {
      const qty = parseFloat(row.qty.replace(',', '.')) || 0;
      const price = parseFloat(row.price.replace(',', '.')) || 0;
      const line = qty * price;
      net += line;
      if (row.labour) labourNet += line;
    }
    const moms = net * r;
    const gross = net + moms;
    const labourGross = labourNet * (1 + r);
    const rot = useRot ? Math.min(labourGross * 0.3, ROT_CAP) : 0;
    const toPay = gross - rot;
    return { net, moms, gross, rot, toPay };
  }, [rows, momsRate, useRot]);

  async function download() {
    setBusy(true);
    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      const marginX = 48;
      const pageW = doc.internal.pageSize.getWidth();
      const right = pageW - marginX;
      let y = 60;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.text('Offert', marginX, y);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(120);
      doc.text('Skapad med ByggExp – byggexp.se', marginX, y + 16);
      doc.setTextColor(20);
      y += 44;

      doc.setFontSize(11);
      doc.text(`Från: ${company.trim() || '—'}`, marginX, y);
      doc.text(`Till: ${customer.trim() || '—'}`, pageW / 2, y);
      y += 26;

      // table header
      const cx = { desc: marginX, qty: 320, price: 390, sum: right };
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text('Beskrivning', cx.desc, y);
      doc.text('Antal', cx.qty, y);
      doc.text('À-pris', cx.price, y);
      doc.text('Summa', cx.sum, y, { align: 'right' });
      y += 8;
      doc.setDrawColor(210);
      doc.line(marginX, y, right, y);
      y += 16;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);

      const pageH = doc.internal.pageSize.getHeight();
      for (const row of rows) {
        const qty = parseFloat(row.qty.replace(',', '.')) || 0;
        const price = parseFloat(row.price.replace(',', '.')) || 0;
        if (!row.desc.trim() && !price) continue;
        if (y > pageH - 120) {
          doc.addPage();
          y = 60;
        }
        const descLines = doc.splitTextToSize(
          row.desc.trim() + (row.labour ? '  (ROT)' : ''),
          cx.qty - cx.desc - 10,
        ) as string[];
        doc.text(descLines, cx.desc, y);
        doc.text(String(qty), cx.qty, y);
        doc.text(kr(price), cx.price, y);
        doc.text(kr(qty * price), cx.sum, y, { align: 'right' });
        y += Math.max(descLines.length * 13, 15) + 6;
      }

      y += 6;
      doc.line(marginX, y, right, y);
      y += 20;
      const line = (label: string, value: string, bold = false) => {
        doc.setFont('helvetica', bold ? 'bold' : 'normal');
        doc.text(label, pageW / 2, y);
        doc.text(value, cx.sum, y, { align: 'right' });
        y += 18;
      };
      line('Netto', kr(totals.net));
      line(`Moms (${momsRate} %)`, kr(totals.moms));
      if (useRot) line('ROT-avdrag', `-${kr(totals.rot)}`);
      line('Att betala', kr(totals.toPay), true);

      doc.save('offert.pdf');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="lm-tool">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Skapa en offert och ladda ner som PDF</h2>
        <p className="lm-tool-sub">
          Fyll i rader, moms och eventuellt ROT så räknar vi ut summorna och gör en färdig offert som PDF. Allt sker i din webbläsare. Inget konto behövs.
        </p>
      </div>

      <div className="lm-tool-grid">
        <label className="lm-tool-field">
          <span>Ditt företag</span>
          <input value={company} placeholder="Företagsnamn" onChange={(e) => setCompany(e.currentTarget.value)} />
        </label>
        <label className="lm-tool-field">
          <span>Kund</span>
          <input value={customer} placeholder="Kundens namn" onChange={(e) => setCustomer(e.currentTarget.value)} />
        </label>
      </div>

      <div className="lm-tool-rows">
        <div className="lm-tool-row lm-offert-row lm-tool-row-head">
          <span>Beskrivning</span>
          <span>Antal</span>
          <span>À-pris</span>
          <span>ROT</span>
          <span aria-hidden="true" />
        </div>
        {rows.map((row, i) => (
          <div className="lm-tool-row lm-offert-row" key={i}>
            <input value={row.desc} placeholder="T.ex. Arbete montering" onChange={(e) => setRow(i, { desc: e.currentTarget.value })} />
            <input type="number" min="0" value={row.qty} onChange={(e) => setRow(i, { qty: e.currentTarget.value })} />
            <input type="number" min="0" value={row.price} placeholder="0" onChange={(e) => setRow(i, { price: e.currentTarget.value })} />
            <input type="checkbox" checked={row.labour} aria-label="Arbetskostnad (ROT)" onChange={(e) => setRow(i, { labour: e.currentTarget.checked })} />
            <button type="button" className="lm-tool-row-remove" aria-label="Ta bort rad" onClick={() => removeRow(i)}>×</button>
          </div>
        ))}
      </div>

      <div className="lm-tool-actions" style={{ marginTop: 14 }}>
        <button type="button" className="lm-tool-secondary" onClick={addRow}>+ Lägg till rad</button>
        <label className="lm-tool-field" style={{ maxWidth: 140 }}>
          <span>Momssats</span>
          <select value={momsRate} onChange={(e) => setMomsRate(parseInt(e.currentTarget.value, 10))}>
            <option value={25}>25 %</option>
            <option value={12}>12 %</option>
            <option value={6}>6 %</option>
          </select>
        </label>
        <label className="lm-offert-rot">
          <input type="checkbox" checked={useRot} onChange={(e) => setUseRot(e.currentTarget.checked)} />
          <span>Använd ROT-avdrag (30 % på arbete)</span>
        </label>
      </div>

      <div className="lm-result">
        <div className="lm-result-row"><span>Netto</span><span>{kr(totals.net)}</span></div>
        <div className="lm-result-row"><span>Moms ({momsRate} %)</span><span>{kr(totals.moms)}</span></div>
        {useRot ? (
          <div className="lm-result-row lm-result-highlight"><span>ROT-avdrag</span><strong>-{kr(totals.rot)}</strong></div>
        ) : null}
        <div className="lm-result-row lm-result-total"><span>Att betala</span><strong>{kr(totals.toPay)}</strong></div>
      </div>

      <div className="lm-tool-actions">
        <button type="button" className="lm-tool-button" onClick={download} disabled={busy}>
          {busy ? 'Skapar PDF…' : 'Ladda ner offert (PDF)'}
        </button>
      </div>
    </div>
  );
}
