import MallToPdfTool, { type MallConfig } from './MallToPdfTool';

// Free kontrollplan (PBL) template for simpler bygglov/anmälan projects. Header
// info plus a set of control points the byggherre/entreprenör fills in. For
// bigger projects a certified kontrollansvarig sets up the plan.
const CONFIG: MallConfig = {
  pdfHeading: 'Kontrollplan enligt PBL',
  subtitle:
    'Fyll i projektuppgifter och kontrollpunkter och ladda ner en färdig kontrollplan som PDF eller Excel. Klicka på "Fyll i exempel" för att se hur den fylls i. För större projekt krävs en kontrollansvarig (KA).',
  filePrefix: 'kontrollplan',
  stampField: 'property',
  signatures: ['Byggherrens underskrift', 'Datum'],
  fields: [
    { name: 'property', label: 'Fastighetsbeteckning', placeholder: 'T.ex. Kungsängen 1:23' },
    { name: 'project', label: 'Åtgärd / projekt', placeholder: 'T.ex. Tillbyggnad enbostadshus' },
    { name: 'permit', label: 'Bygglov / anmälan (diarienr)', placeholder: 'T.ex. BL 2026-000123' },
    { name: 'builder', label: 'Byggherre', placeholder: 'Namn och kontaktuppgifter' },
    { name: 'ka', label: 'Kontrollansvarig (om sådan krävs)', placeholder: 'Namn och behörighet, eller "krävs ej"' },
    { name: 'cp1', label: 'Kontrollpunkt 1 (vad – mot vilket krav – metod – utförd av)', type: 'textarea', placeholder: 'T.ex. Grundläggning – mot K-ritning – visuellt/mått – egenkontroll' },
    { name: 'cp2', label: 'Kontrollpunkt 2', type: 'textarea' },
    { name: 'cp3', label: 'Kontrollpunkt 3', type: 'textarea' },
    { name: 'cp4', label: 'Kontrollpunkt 4', type: 'textarea' },
    { name: 'cp5', label: 'Kontrollpunkt 5', type: 'textarea' },
    { name: 'cp6', label: 'Kontrollpunkt 6', type: 'textarea' },
    { name: 'waste', label: 'Rivnings-/byggavfall (utsortering)', type: 'textarea', placeholder: 'Hur bygg- och rivningsavfall sorteras och tas om hand' },
    { name: 'finalNote', label: 'Underlag för slutbesked', type: 'textarea', placeholder: 'Vad som lämnas till byggnadsnämnden för slutbesked' },
  ],
  example: {
    property: 'Kungsängen 1:23',
    project: 'Tillbyggnad enbostadshus, 20 m²',
    permit: 'BL 2026-000123',
    builder: 'Anna Andersson, 070-000 00 00',
    ka: 'Krävs ej (enkel åtgärd)',
    cp1: 'Grundläggning – mot konstruktionsritning – kontroll av mått och armering – egenkontroll entreprenör.',
    cp2: 'Tätskikt/fuktskydd – mot BBR och tillverkaranvisning – visuell kontroll – egenkontroll.',
    cp3: 'Bärande konstruktion – mot K-ritning – mått och infästningar – egenkontroll.',
    cp4: 'Brandskydd – mot BBR – visuell kontroll av avskiljningar – egenkontroll.',
    cp5: 'Ventilation – mot projektering – funktionskontroll – behörig installatör.',
    cp6: 'El – mot gällande regler – kontroll av behörig elinstallatör.',
    waste: 'Bygg- och rivningsavfall sorteras i minst fraktionerna trä, mineral (betong/tegel/klinker/keramik/sten), metall, glas, plast och gips.',
    finalNote: 'Ifylld och signerad kontrollplan samt intyg lämnas till byggnadsnämnden för slutbesked.',
  },
};

export default function KontrollplanMallTool() {
  return <MallToPdfTool config={CONFIG} />;
}
