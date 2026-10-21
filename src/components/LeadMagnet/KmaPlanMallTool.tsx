import MallToPdfTool, { type MallConfig } from './MallToPdfTool';

// Free KMA plan template (kvalitet, miljö, arbetsmiljö) for smaller firms.
// Sections follow the kma-plan-mall article: the three legs + roles and
// follow-up → PDF/Excel.
const CONFIG: MallConfig = {
  pdfHeading: 'KMA-plan',
  subtitle:
    'Fyll i kvalitet, miljö och arbetsmiljö för projektet och ladda ner en färdig KMA-plan som PDF eller Excel. Klicka på "Fyll i exempel".',
  filePrefix: 'kma-plan',
  stampField: 'project',
  fields: [
    { name: 'project', label: 'Projekt / arbetsplats', placeholder: 'T.ex. Renovering kontor, Storgatan 8' },
    { name: 'company', label: 'Företag / KMA-ansvarig', placeholder: 'Ditt Bygg AB – ansvarig' },
    { name: 'date', label: 'Datum', type: 'date' },
    { name: 'scope', label: 'Projektets omfattning', type: 'textarea', placeholder: 'Vad projektet omfattar och vilka krav som gäller' },
    { name: 'kvalitet', label: 'Kvalitet: egenkontroller och avvikelser', type: 'textarea', placeholder: 'Vilka moment egenkontrolleras, hur avvikelser hanteras' },
    { name: 'miljo', label: 'Miljö: avfall, kemikalier, buller', type: 'textarea', placeholder: 'Källsortering, kemikalieförteckning, störningar för grannar' },
    { name: 'arbetsmiljo', label: 'Arbetsmiljö: risker, skyddsronder, BAS-P/BAS-U', type: 'textarea', placeholder: 'Riskbedömning, arbetsmiljöplan, skyddsronder' },
    { name: 'roller', label: 'Roller och ansvar', type: 'textarea', placeholder: 'Vem ansvarar för kvalitet, miljö och arbetsmiljö' },
    { name: 'uppfoljning', label: 'Uppföljning och dokumentation', type: 'textarea', placeholder: 'Hur planen följs upp och vad som lämnas vid överlämning' },
  ],
  example: {
    project: 'Renovering kontor, Storgatan 8',
    company: 'Ditt Bygg AB – platschef Erik Lund',
    scope: 'Renovering av kontorsplan 300 m²: nya innerväggar, undertak, el och ytskikt. Krav enligt kontrakt, AMA Hus och BBR.',
    kvalitet: 'Egenkontroll av väggar, undertak, el och våtrum mot ritning och anvisning. Avvikelser dokumenteras med foto, åtgärd och verifiering.',
    miljo: 'Källsortering i containrar: trä, gips, metall, brännbart. Kemikalieförteckning med säkerhetsdatablad. Bullrande arbete 08–17.',
    arbetsmiljo: 'Arbetsmiljöplan upprättad av BAS-P. Riskbedömning före varje moment. Skyddsrond varannan vecka. BAS-U: platschef.',
    roller: 'Platschef: KMA-ansvarig. Arbetsledare: egenkontroller och skyddsronder. Varje yrkesarbetare: egen egenkontroll och avvikelserapport.',
    uppfoljning: 'Planen gås igenom vid byggmöte varje månad. Egenkontroller, avvikelser och intyg lämnas samlat vid slutbesiktning.',
  },
};

export default function KmaPlanMallTool() {
  return <MallToPdfTool config={CONFIG} />;
}
