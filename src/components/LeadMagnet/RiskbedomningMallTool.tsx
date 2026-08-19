import MallToPdfTool, { type MallConfig } from './MallToPdfTool';

// Free written risk-assessment (riskbedömning) template. Before a risky moment on
// site you must assess the risk, decide measures and assign responsibility. Header
// + risk rows (source, likelihood/consequence, measure, responsible) → PDF/Excel.
const CONFIG: MallConfig = {
  pdfHeading: 'Riskbedömning',
  subtitle:
    'Fyll i moment och risker och ladda ner en färdig riskbedömning som PDF eller Excel. Görs innan riskfyllda arbetsmoment som en del av det systematiska arbetsmiljöarbetet. Klicka på "Fyll i exempel".',
  filePrefix: 'riskbedomning',
  stampField: 'project',
  signatures: ['Upprättad av', 'Datum'],
  fields: [
    { name: 'project', label: 'Projekt / arbetsplats', placeholder: 'T.ex. Takomläggning, Bäckvägen 12' },
    { name: 'activity', label: 'Arbetsmoment', placeholder: 'T.ex. Rivning av gammalt yttertak' },
    { name: 'date', label: 'Datum', type: 'date' },
    { name: 'author', label: 'Upprättad av', placeholder: 'Namn / roll' },
    { name: 'r1', label: 'Risk 1 (riskkälla – sannolikhet/konsekvens – åtgärd – ansvarig)', type: 'textarea', placeholder: 'T.ex. Fall från tak – hög/allvarlig – ställning + livlina – arbetsledare' },
    { name: 'r2', label: 'Risk 2', type: 'textarea' },
    { name: 'r3', label: 'Risk 3', type: 'textarea' },
    { name: 'r4', label: 'Risk 4', type: 'textarea' },
    { name: 'r5', label: 'Risk 5', type: 'textarea' },
    { name: 'r6', label: 'Risk 6', type: 'textarea' },
    { name: 'note', label: 'Uppföljning / kvarstående', type: 'textarea', placeholder: 'Hur och när åtgärderna följs upp' },
  ],
  example: {
    project: 'Takomläggning, Bäckvägen 12',
    activity: 'Rivning av gammalt yttertak',
    author: 'Arbetsledare',
    r1: 'Fall från tak – hög sannolikhet / allvarlig konsekvens – ställning med räcke + livlina och förankring – arbetsledare',
    r2: 'Fallande material till mark – medel / allvarlig – avspärrning nedanför + skyddsnät – Lag 1',
    r3: 'Asbest i äldre takpapp – låg / mycket allvarlig – provtagning före rivning, sanering av behörig – byggherre',
    r4: 'Tunga lyft – medel / måttlig – kran/lift, undvik manuell hantering – arbetsledare',
    r5: 'Väder (vind/halka) – medel / måttlig – stopp vid hård vind, halkskydd – arbetsledare',
    note: 'Riskbedömningen gås igenom med laget före start och uppdateras om förhållandena ändras.',
  },
};

export default function RiskbedomningMallTool() {
  return <MallToPdfTool config={CONFIG} />;
}
