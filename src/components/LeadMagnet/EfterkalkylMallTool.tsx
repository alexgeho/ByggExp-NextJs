import MallToPdfTool, { type MallConfig } from './MallToPdfTool';

// Free post-calculation (efterkalkyl) template. Compare the bid/estimate against
// the real outcome per cost item to find the margin leak and price the next job
// right. Header + rows (post: estimated vs actual vs deviation) → PDF/Excel.
const CONFIG: MallConfig = {
  pdfHeading: 'Efterkalkyl',
  subtitle:
    'Fyll i anbud mot verkligt utfall per post och ladda ner en färdig efterkalkyl som PDF eller Excel. Hitta marginalläckaget och räkna rätt på nästa jobb. Klicka på "Fyll i exempel".',
  filePrefix: 'efterkalkyl',
  stampField: 'project',
  fields: [
    { name: 'project', label: 'Projekt', placeholder: 'T.ex. Badrumsrenovering, Bäckvägen 12' },
    { name: 'bidSum', label: 'Anbudssumma (exkl. moms)', placeholder: 'T.ex. 180 000 kr' },
    { name: 'author', label: 'Upprättad av / datum', placeholder: 'Namn – 2026-06-01' },
    { name: 'p1', label: 'Post 1 (beskrivning – kalkylerat – verkligt – avvikelse)', type: 'textarea', placeholder: 'T.ex. Arbetstid – 60 000 – 72 000 – +12 000' },
    { name: 'p2', label: 'Post 2', type: 'textarea' },
    { name: 'p3', label: 'Post 3', type: 'textarea' },
    { name: 'p4', label: 'Post 4', type: 'textarea' },
    { name: 'p5', label: 'Post 5', type: 'textarea' },
    { name: 'p6', label: 'Post 6', type: 'textarea' },
    { name: 'result', label: 'Resultat (kalkylerad vs verklig marginal)', type: 'textarea', placeholder: 'T.ex. Kalkylerad marginal 15 %, verklig 8 % – tappet ligger i arbetstid och ÄTA.' },
    { name: 'learnings', label: 'Lärdomar till nästa anbud', type: 'textarea', placeholder: 'Vad justeras i nästa kalkyl' },
  ],
  example: {
    project: 'Badrumsrenovering, Bäckvägen 12',
    bidSum: '180 000 kr exkl. moms',
    author: 'Platschef – 2026-06-01',
    p1: 'Arbetstid – 60 000 – 72 000 – +12 000 (fler timmar än beräknat)',
    p2: 'Material kakel/klinker – 35 000 – 33 500 – −1 500',
    p3: 'VVS (UE) – 28 000 – 28 000 – 0',
    p4: 'El (UE) – 18 000 – 21 000 – +3 000 (ÄTA extra uttag)',
    p5: 'Tätskikt och förbrukning – 9 000 – 10 500 – +1 500',
    result: 'Kalkylerad marginal 15 %, verklig 8 %. Tappet ligger i arbetstid och en ej fakturerad ÄTA.',
    learnings: 'Lägg på mer tid på rivning i kalkylen och fakturera ÄTA löpande i stället för på slutet.',
  },
};

export default function EfterkalkylMallTool() {
  return <MallToPdfTool config={CONFIG} />;
}
