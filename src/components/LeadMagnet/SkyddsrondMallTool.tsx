import MallToPdfTool, { type MallConfig } from './MallToPdfTool';

// Free safety-round (skyddsrond) protocol template for construction sites. Header
// info plus the points typically walked through on a bygg-skyddsrond, each noted
// as OK / åtgärd / ansvarig / klar. Part of the systematic work-environment work.
const CONFIG: MallConfig = {
  pdfHeading: 'Skyddsrondsprotokoll',
  subtitle:
    'Fyll i deltagare och kontrollpunkter och ladda ner ett färdigt skyddsrondsprotokoll som PDF eller Excel. Klicka på "Fyll i exempel" för att se hur det fylls i.',
  filePrefix: 'skyddsrond',
  stampField: 'project',
  signatures: ['Skyddsombud', 'Arbetsledning'],
  fields: [
    { name: 'project', label: 'Projekt / arbetsplats', placeholder: 'T.ex. Nybyggnad villa, Bäckvägen 12' },
    { name: 'date', label: 'Datum', type: 'date' },
    { name: 'participants', label: 'Deltagare', placeholder: 'Skyddsombud, arbetsledare, ev. Bas-U' },
    { name: 'p1', label: 'Ordning & städning (fri väg, spill, avfall)', type: 'textarea', placeholder: 'OK / åtgärd – ansvarig – klar senast' },
    { name: 'p2', label: 'Fallskydd, räcken och öppningar', type: 'textarea' },
    { name: 'p3', label: 'Ställningar och stegar', type: 'textarea' },
    { name: 'p4', label: 'El, kablar och belysning', type: 'textarea' },
    { name: 'p5', label: 'Maskiner och handverktyg', type: 'textarea' },
    { name: 'p6', label: 'Personlig skyddsutrustning', type: 'textarea' },
    { name: 'p7', label: 'Brand, heta arbeten och utrymning', type: 'textarea' },
    { name: 'p8', label: 'Damm, buller och kemiska produkter', type: 'textarea' },
    { name: 'p9', label: 'Första hjälpen och skyltning', type: 'textarea' },
    { name: 'note', label: 'Övrigt / uppföljning', type: 'textarea', placeholder: 'Nästa skyddsrond, kvarstående punkter' },
  ],
  example: {
    project: 'Nybyggnad villa, Bäckvägen 12',
    participants: 'Skyddsombud Anna, arbetsledare Erik, Bas-U',
    p1: 'Åtgärd – bortforsling av spill vid entré – Lag 1 – 2026-05-15',
    p2: 'OK – räcken kompletta på plan 2',
    p3: 'Åtgärd – ställning saknar fotlist sektion B – UE Ställning – 2026-05-15',
    p4: 'OK – provisorisk el besiktigad',
    p5: 'Åtgärd – kap saknar skydd – Snickare – omgående',
    p6: 'OK – hjälm och skyddsskor bärs',
    p7: 'OK – brandsläckare på plats, heta arbeten-tillstånd finns',
    p8: 'Åtgärd – dammsug M-klass vid slipning – Lag 1 – löpande',
    p9: 'OK – första hjälpen-tavla uppmärkt',
    note: 'Nästa skyddsrond 2026-05-29. Kvarstående punkter följs upp av Bas-U.',
  },
};

export default function SkyddsrondMallTool() {
  return <MallToPdfTool config={CONFIG} />;
}
