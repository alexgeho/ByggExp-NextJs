import MallToPdfTool, { type MallConfig } from './MallToPdfTool';

// Free quality plan (kvalitetsplan) template for smaller construction firms. The
// quality half of a KMA plan: how quality is secured, controlled and documented
// through the project. Header + sections → PDF/Excel.
const CONFIG: MallConfig = {
  pdfHeading: 'Kvalitetsplan',
  subtitle:
    'Fyll i projektuppgifter och kvalitetsrutiner och ladda ner en färdig kvalitetsplan som PDF eller Excel. En nedbantad plan som passar mindre byggföretag. Klicka på "Fyll i exempel".',
  filePrefix: 'kvalitetsplan',
  stampField: 'project',
  fields: [
    { name: 'project', label: 'Projekt / arbetsplats', placeholder: 'T.ex. Tillbyggnad villa, Bäckvägen 12' },
    { name: 'company', label: 'Företag / kvalitetsansvarig', placeholder: 'Ditt Bygg AB – ansvarig' },
    { name: 'date', label: 'Datum', type: 'date' },
    { name: 'scope', label: 'Omfattning och kvalitetsmål', type: 'textarea', placeholder: 'Vad projektet omfattar och vilken kvalitetsnivå som gäller' },
    { name: 'standards', label: 'Krav och standarder som gäller', type: 'textarea', placeholder: 'T.ex. BBR, AMA, tillverkaranvisningar, kontrakt' },
    { name: 'control', label: 'Egenkontroll och kontrollpunkter', type: 'textarea', placeholder: 'Vilka moment egenkontrolleras, mot vad och av vem' },
    { name: 'deviation', label: 'Avvikelsehantering', type: 'textarea', placeholder: 'Hur avvikelser rapporteras, åtgärdas och verifieras' },
    { name: 'material', label: 'Materialhantering / mottagningskontroll', type: 'textarea', placeholder: 'Kontroll av leveranser, CE/prestandadeklaration, lagring' },
    { name: 'docs', label: 'Dokumentation och överlämning', type: 'textarea', placeholder: 'Vilka dokument samlas in och lämnas till beställaren' },
    { name: 'responsibility', label: 'Roller och ansvar', type: 'textarea', placeholder: 'Vem ansvarar för vad i kvalitetsarbetet' },
  ],
  example: {
    project: 'Tillbyggnad villa, Bäckvägen 12',
    company: 'Ditt Bygg AB – platschef kvalitetsansvarig',
    scope: 'Tillbyggnad 20 m² med nytt våtrum. Kvalitetsnivå enligt kontrakt, BBR och branschregler.',
    standards: 'BBR, AMA Hus, BBV/GVK för våtrum, tillverkaranvisningar, kontraktshandlingar.',
    control: 'Egenkontroll av grund, tätskikt, bärande konstruktion, el och VVS – mot ritning och anvisning, av utförande hantverkare.',
    deviation: 'Avvikelser dokumenteras i avvikelserapport med orsak, åtgärd och verifiering. Återkommande avvikelser blir nya kontrollpunkter.',
    material: 'Mottagningskontroll av leveranser: rätt vara, oskadad, giltig prestandadeklaration (DoP/CE). Fuktkänsligt material lagras torrt.',
    docs: 'Egenkontroller, avvikelserapporter, intyg och relationshandlingar samlas och lämnas vid överlämning.',
    responsibility: 'Platschef ansvarar för kvalitetsplanen; respektive yrkesarbetare för sin egenkontroll.',
  },
};

export default function KvalitetsplanMallTool() {
  return <MallToPdfTool config={CONFIG} />;
}
