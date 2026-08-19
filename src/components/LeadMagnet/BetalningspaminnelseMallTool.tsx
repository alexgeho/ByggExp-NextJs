import MallToPdfTool, { type MallConfig } from './MallToPdfTool';

// Free payment-reminder (betalningspåminnelse) template. Fill in the overdue
// invoice, add the statutory late fee (450 kr B2B / 60 kr påminnelseavgift) and
// dröjsmålsränta, and download a ready reminder as PDF/Excel.
const CONFIG: MallConfig = {
  pdfHeading: 'Betalningspåminnelse',
  subtitle:
    'Fyll i den obetalda fakturan och ladda ner en färdig betalningspåminnelse som PDF eller Excel. Klicka på "Fyll i exempel" för att se hur den fylls i.',
  filePrefix: 'betalningspaminnelse',
  stampField: 'invoiceNo',
  fields: [
    { name: 'sender', label: 'Avsändare (ditt företag)', placeholder: 'Ditt Bygg AB, org.nr, adress' },
    { name: 'recipient', label: 'Mottagare (kund)', placeholder: 'Kundens namn och adress' },
    { name: 'date', label: 'Datum', type: 'date' },
    { name: 'invoiceNo', label: 'Fakturanummer', placeholder: 'T.ex. 2026-104' },
    { name: 'invoiceDate', label: 'Ursprungligt fakturadatum', type: 'date' },
    { name: 'dueDate', label: 'Ursprunglig förfallodag', type: 'date' },
    { name: 'amount', label: 'Obetalt belopp (inkl. moms)', placeholder: 'T.ex. 24 500 kr' },
    { name: 'reminderFee', label: 'Påminnelse-/förseningsavgift', placeholder: 'T.ex. 60 kr (privat) eller 450 kr (företag)' },
    { name: 'interest', label: 'Dröjsmålsränta', placeholder: 'T.ex. dröjsmålsränta enligt räntelagen (10 % 2026)' },
    { name: 'newDue', label: 'Ny förfallodag', type: 'date' },
    { name: 'total', label: 'Att betala nu (belopp + avgift + ränta)', placeholder: 'T.ex. 24 960 kr' },
    { name: 'message', label: 'Meddelande', type: 'textarea', placeholder: 'Kort text: betala snarast, annars går ärendet till inkasso' },
  ],
  example: {
    sender: 'Ditt Bygg AB, 559000-0000, Storgatan 1',
    recipient: 'Beställaren AB, Bäckvägen 12',
    invoiceNo: '2026-104',
    amount: '24 500 kr',
    reminderFee: '450 kr (lagstadgad förseningsersättning, företag)',
    interest: 'Dröjsmålsränta enligt räntelagen (referensränta + 8 %, dvs. 10 % 2026)',
    total: '24 960 kr + upplupen ränta',
    message: 'Vår faktura ovan är förfallen. Vänligen betala snarast, dock senast den nya förfallodagen. Har betalning redan skett ber vi dig bortse från denna påminnelse. Vid utebliven betalning överlämnas ärendet till inkasso.',
  },
};

export default function BetalningspaminnelseMallTool() {
  return <MallToPdfTool config={CONFIG} />;
}
