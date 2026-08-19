import MallToPdfTool, { type MallConfig } from './MallToPdfTool';

// Free driving-log (körjournal) template. Skatteverket accepts a log that shows,
// per trip: date, meter reading start/end, distance, and purpose (business vs
// private). A complete körjournal is what protects you from being taxed for a
// bilförmån on the firmabil. Header + trip rows → PDF/Excel.
const CONFIG: MallConfig = {
  pdfHeading: 'Körjournal',
  subtitle:
    'Fyll i fordon och resor och ladda ner en färdig körjournal som PDF eller Excel. En komplett körjournal håller vid Skatteverkets granskning och skyddar dig mot förmånsbeskattning. Klicka på "Fyll i exempel".',
  filePrefix: 'korjournal',
  stampField: 'regnr',
  fields: [
    { name: 'regnr', label: 'Registreringsnummer', placeholder: 'T.ex. ABC123' },
    { name: 'vehicle', label: 'Fordon', placeholder: 'T.ex. VW Transporter (lätt lastbil)' },
    { name: 'driver', label: 'Förare / företag', placeholder: 'Namn / Ditt Bygg AB' },
    { name: 'period', label: 'Period', placeholder: 'T.ex. januari 2026' },
    { name: 'startMeter', label: 'Mätarställning vid periodens start (km)', placeholder: 'T.ex. 45 200' },
    { name: 't1', label: 'Resa 1 (datum – från→till – ärende – km – tjänste/privat)', type: 'textarea', placeholder: 'T.ex. 2026-01-03 – Verkstan→Bäckvägen 12 – materialhämtning + jobb – 24 km – tjänste' },
    { name: 't2', label: 'Resa 2', type: 'textarea' },
    { name: 't3', label: 'Resa 3', type: 'textarea' },
    { name: 't4', label: 'Resa 4', type: 'textarea' },
    { name: 't5', label: 'Resa 5', type: 'textarea' },
    { name: 't6', label: 'Resa 6', type: 'textarea' },
    { name: 't7', label: 'Resa 7', type: 'textarea' },
    { name: 't8', label: 'Resa 8', type: 'textarea' },
    { name: 'endMeter', label: 'Mätarställning vid periodens slut (km)', placeholder: 'T.ex. 46 010' },
    { name: 'summary', label: 'Summering (tjänste-/privatkm)', placeholder: 'T.ex. 780 km tjänste, 30 km privat' },
  ],
  example: {
    regnr: 'ABC123',
    vehicle: 'VW Transporter (lätt lastbil)',
    driver: 'Ditt Bygg AB',
    period: 'januari 2026',
    startMeter: '45 200',
    t1: '2026-01-03 – Verkstan→Bäckvägen 12 – materialhämtning + jobb – 24 km – tjänste',
    t2: '2026-01-04 – Bäckvägen 12→grossist→arbetsplats – inköp – 31 km – tjänste',
    t3: '2026-01-07 – Kontoret→kundmöte Storgatan 5 – offert – 18 km – tjänste',
    t4: '2026-01-10 – Arbetsplats→hem – privat resa – 12 km – privat',
    summary: '780 km tjänste, 30 km privat',
    endMeter: '46 010',
  },
};

export default function KorjournalMallTool() {
  return <MallToPdfTool config={CONFIG} />;
}
