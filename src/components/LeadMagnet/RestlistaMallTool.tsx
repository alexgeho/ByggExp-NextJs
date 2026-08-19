import MallToPdfTool, { type MallConfig } from './MallToPdfTool';

// Free punch list / restlista template for the hand-over phase. Header info plus
// a set of remaining points (location, remark, responsible, due). Downloads as
// PDF/Excel. Closes the gap between slutbesiktning and överlämning.
const CONFIG: MallConfig = {
  pdfHeading: 'Restlista / punchlista',
  subtitle:
    'Fyll i projektuppgifter och kvarstående punkter och ladda ner en färdig restlista som PDF eller Excel att dela och bocka av. Klicka på "Fyll i exempel" för att se hur den fylls i.',
  filePrefix: 'restlista',
  stampField: 'project',
  fields: [
    { name: 'project', label: 'Projekt / arbetsplats', placeholder: 'T.ex. Nybyggnad villa, Bäckvägen 12' },
    { name: 'date', label: 'Datum', type: 'date' },
    { name: 'author', label: 'Upprättad av', placeholder: 'Namn / roll' },
    { name: 'p1', label: 'Punkt 1 (plats – anmärkning – ansvarig – klar senast)', type: 'textarea', placeholder: 'T.ex. Bad plan 2 – silikonfog saknas vid dusch – Snickare – 2026-06-01' },
    { name: 'p2', label: 'Punkt 2', type: 'textarea' },
    { name: 'p3', label: 'Punkt 3', type: 'textarea' },
    { name: 'p4', label: 'Punkt 4', type: 'textarea' },
    { name: 'p5', label: 'Punkt 5', type: 'textarea' },
    { name: 'p6', label: 'Punkt 6', type: 'textarea' },
    { name: 'p7', label: 'Punkt 7', type: 'textarea' },
    { name: 'p8', label: 'Punkt 8', type: 'textarea' },
    { name: 'p9', label: 'Punkt 9', type: 'textarea' },
    { name: 'p10', label: 'Punkt 10', type: 'textarea' },
    { name: 'note', label: 'Noteringar', type: 'textarea', placeholder: 'T.ex. Restlistan gås igenom vid efterbesiktning 2026-06-05.' },
  ],
  example: {
    project: 'Nybyggnad villa, Bäckvägen 12',
    author: 'Platschef, Ditt Bygg AB',
    p1: 'Bad plan 2 – silikonfog saknas vid dusch – Snickare – 2026-06-01',
    p2: 'Kök – lucka justeras, glipa mot vägg – Snickare – 2026-06-01',
    p3: 'Vardagsrum – bättringsmålning vid fönster – Målare – 2026-06-02',
    p4: 'Entré – tröskel saknar list – Snickare – 2026-06-02',
    p5: 'El – täcklock uttag hall saknas – Elektriker (UE) – 2026-06-03',
    p6: 'Tak – nockpanna sitter löst sektion B – Takläggare – 2026-06-03',
    note: 'Restlistan gås igenom vid efterbesiktning 2026-06-05. Kvarstående punkter dokumenteras med foto.',
  },
};

export default function RestlistaMallTool() {
  return <MallToPdfTool config={CONFIG} />;
}
