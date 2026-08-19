import MallToPdfTool, { type MallConfig } from './MallToPdfTool';

// Free project time-plan / Gantt template. A fillable activity list (name,
// responsible, start, end, dependency) that downloads as PDF/Excel. The visual
// Gantt with % done lives in the ByggExp product; this is the print-ready plan.
const CONFIG: MallConfig = {
  pdfHeading: 'Tidsplan / Gantt-schema',
  subtitle:
    'Fyll i projektets aktiviteter med start, slut och ansvarig och ladda ner en färdig tidsplan som PDF eller Excel. Klicka på "Fyll i exempel" för att se hur den fylls i.',
  filePrefix: 'tidsplan',
  stampField: 'project',
  fields: [
    { name: 'project', label: 'Projekt', placeholder: 'T.ex. Nybyggnad villa, Bäckvägen 12' },
    { name: 'start', label: 'Projektstart', type: 'date' },
    { name: 'end', label: 'Projektslut', type: 'date' },
    { name: 'a1', label: 'Aktivitet 1 (namn – ansvarig – start – slut – beroende)', type: 'textarea', placeholder: 'T.ex. Markarbete – UE Mark AB – v.10 – v.12 – –' },
    { name: 'a2', label: 'Aktivitet 2', type: 'textarea' },
    { name: 'a3', label: 'Aktivitet 3', type: 'textarea' },
    { name: 'a4', label: 'Aktivitet 4', type: 'textarea' },
    { name: 'a5', label: 'Aktivitet 5', type: 'textarea' },
    { name: 'a6', label: 'Aktivitet 6', type: 'textarea' },
    { name: 'a7', label: 'Aktivitet 7', type: 'textarea' },
    { name: 'a8', label: 'Aktivitet 8', type: 'textarea' },
    { name: 'criticalPath', label: 'Kritisk linje / milstolpar', type: 'textarea', placeholder: 'Vilka aktiviteter styr slutdatumet' },
  ],
  example: {
    project: 'Nybyggnad villa, Bäckvägen 12',
    a1: 'Markarbete och grund – UE Mark AB – v.10 – v.12 – –',
    a2: 'Stomme och tak – Eget lag – v.12 – v.16 – efter grund',
    a3: 'Tak och tätt hus – Eget lag – v.16 – v.18 – efter stomme',
    a4: 'El och VVS grovinstallation – UE El & VVS – v.17 – v.20 – parallellt',
    a5: 'Isolering och gips – Eget lag – v.20 – v.23 – efter grovinstallation',
    a6: 'Ytskikt och inredning – Eget lag – v.23 – v.28 – efter gips',
    a7: 'Finish el/VVS – UE El & VVS – v.27 – v.29 – efter ytskikt',
    a8: 'Slutbesiktning och överlämning – Beställare + besiktningsman – v.30 – v.30 – efter finish',
    criticalPath: 'Grund → stomme → tätt hus → gips → ytskikt styr slutdatumet. Väderberoende moment v.10–v.16.',
  },
};

export default function GanttSchemaMallTool() {
  return <MallToPdfTool config={CONFIG} />;
}
