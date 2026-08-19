import MallToPdfTool, { type MallConfig } from './MallToPdfTool';

// Free bill-of-quantities (mängdförteckning) template. Header info plus a set of
// line items the estimator fills in (post, quantity, unit, á-price). Downloads
// as PDF/Excel. A structured mängdförteckning gives comparable anbud and fewer
// tvister about what was included.
const CONFIG: MallConfig = {
  pdfHeading: 'Mängdförteckning',
  subtitle:
    'Fyll i projektuppgifter och poster (mängd, enhet och á-pris) och ladda ner en färdig mängdförteckning som PDF eller Excel. Klicka på "Fyll i exempel" för att se hur den fylls i.',
  filePrefix: 'mangdforteckning',
  stampField: 'project',
  fields: [
    { name: 'project', label: 'Projekt / arbetsplats', placeholder: 'T.ex. Tillbyggnad villa, Bäckvägen 12' },
    { name: 'date', label: 'Datum', type: 'date' },
    { name: 'author', label: 'Upprättad av', placeholder: 'Namn / företag' },
    { name: 'p1', label: 'Post 1 (beskrivning – mängd – enhet – á-pris)', type: 'textarea', placeholder: 'T.ex. Rivning innervägg – 12 – m² – 350 kr' },
    { name: 'p2', label: 'Post 2', type: 'textarea' },
    { name: 'p3', label: 'Post 3', type: 'textarea' },
    { name: 'p4', label: 'Post 4', type: 'textarea' },
    { name: 'p5', label: 'Post 5', type: 'textarea' },
    { name: 'p6', label: 'Post 6', type: 'textarea' },
    { name: 'p7', label: 'Post 7', type: 'textarea' },
    { name: 'p8', label: 'Post 8', type: 'textarea' },
    { name: 'sum', label: 'Summa exkl. moms', placeholder: 'T.ex. 245 000 kr' },
    { name: 'note', label: 'Noteringar / förutsättningar', type: 'textarea', placeholder: 'T.ex. Á-priser exkl. moms. Material tillkommer enligt specifikation.' },
  ],
  example: {
    project: 'Tillbyggnad villa, Bäckvägen 12',
    author: 'Ditt Bygg AB',
    p1: 'Rivning innervägg inkl. bortforsling – 12 – m² – 350 kr',
    p2: 'Grundförstärkning – 1 – st – 28 000 kr',
    p3: 'Stomme trä inkl. resning – 20 – m² – 1 950 kr',
    p4: 'Yttertak inkl. papp och plåt – 25 – m² – 1 200 kr',
    p5: 'Fönstermontage – 4 – st – 3 500 kr',
    p6: 'Isolering och gips – 60 – m² – 620 kr',
    p7: 'El (UE) – 1 – st – 42 000 kr',
    p8: 'VVS (UE) – 1 – st – 38 000 kr',
    sum: '245 000 kr exkl. moms',
    note: 'Á-priser exkl. moms. Ytskikt och vitvaror enligt separat specifikation. ROT avser arbetskostnaden.',
  },
};

export default function MangdforteckningMallTool() {
  return <MallToPdfTool config={CONFIG} />;
}
