import MallToPdfTool, { type MallConfig } from './MallToPdfTool';

// Free deviation report (avvikelserapport) template. Documents a deviation, its
// cause, the corrective action and the verification — the chain that protects
// you against vite and reklamation. Part of the egenkontroll/KMA cluster.
const CONFIG: MallConfig = {
  pdfHeading: 'Avvikelserapport',
  subtitle:
    'Dokumentera avvikelsen, orsaken, åtgärden och verifieringen och ladda ner en färdig avvikelserapport som PDF eller Excel. Klicka på "Fyll i exempel" för att se hur den fylls i.',
  filePrefix: 'avvikelserapport',
  stampField: 'number',
  signatures: ['Ansvarig underskrift', 'Verifierad av / datum'],
  fields: [
    { name: 'project', label: 'Projekt / arbetsplats', placeholder: 'T.ex. Tillbyggnad villa, Bäckvägen 12' },
    { name: 'date', label: 'Datum', type: 'date' },
    { name: 'number', label: 'Avvikelse-nr', placeholder: 'T.ex. 3' },
    { name: 'location', label: 'Plats / moment', placeholder: 'T.ex. Grundplatta, sektion B' },
    { name: 'reportedBy', label: 'Rapporterad av', placeholder: 'Namn / roll' },
    { name: 'description', label: 'Beskrivning av avvikelsen', type: 'textarea', placeholder: 'Vad avviker från krav/ritning/handling?' },
    { name: 'cause', label: 'Orsak', type: 'textarea', placeholder: 'Trolig orsak till avvikelsen' },
    { name: 'immediate', label: 'Omedelbar åtgärd', type: 'textarea', placeholder: 'Vad gjordes direkt?' },
    { name: 'corrective', label: 'Korrigerande åtgärd', type: 'textarea', placeholder: 'Åtgärd för att förhindra upprepning' },
    { name: 'responsible', label: 'Ansvarig för åtgärd', placeholder: 'Namn' },
    { name: 'due', label: 'Klar senast', type: 'date' },
    { name: 'verification', label: 'Verifiering / kontroll', type: 'textarea', placeholder: 'Hur och av vem har åtgärden verifierats?' },
    { name: 'status', label: 'Status', placeholder: 'Öppen / Åtgärdad / Stängd' },
  ],
  example: {
    project: 'Tillbyggnad villa, Bäckvägen 12',
    number: '3',
    location: 'Grundplatta, sektion B',
    reportedBy: 'Platschef',
    description: 'Betongens täckskikt över armering understiger föreskrivet mått på del av plattan.',
    cause: 'Distanser felplacerade vid gjutförberedelse.',
    immediate: 'Gjutning stoppad på sektionen, avvikande parti markerat.',
    corrective: 'Distanser kompletterade och kontrollmätning införd som kontrollpunkt i egenkontrollen.',
    responsible: 'Betongarbetare / platschef',
    verification: 'Kontrollmätning av täckskikt godkänd, dokumenterad med foto i egenkontrollen.',
    status: 'Stängd',
  },
};

export default function AvvikelserapportMallTool() {
  return <MallToPdfTool config={CONFIG} />;
}
