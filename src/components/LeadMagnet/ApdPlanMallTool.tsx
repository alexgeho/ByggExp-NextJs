import MallToPdfTool, { type MallConfig } from './MallToPdfTool';

// Free APD plan (arbetsplatsdisposition) template. Sections follow the APD
// article: etablering, upplag, transportvägar, kran, separation, ledningar.
// Written as a description of the site layout (no drawing) → PDF/Excel.
const CONFIG: MallConfig = {
  pdfHeading: 'APD-plan (arbetsplatsdisposition)',
  subtitle:
    'Fyll i hur arbetsplatsen är ordnad och ladda ner APD-planen som PDF eller Excel. Bifoga gärna en skiss över tomten. Klicka på "Fyll i exempel".',
  filePrefix: 'apd-plan',
  stampField: 'project',
  appCta: {
    heading: 'Slipp börja om – gör APD-plan i ByggExp',
    text: 'Mallen ovan är gratis. I ByggExp fyller du i på plats, återanvänder dina mallar och samlar alla dokument per projekt – APD-plan, egenkontroll, ÄTA, offert och mer på ett ställe.',
  },
  fields: [
    { name: 'project', label: 'Projekt / arbetsplats', placeholder: 'T.ex. Flerbostadshus, Ekgatan 4' },
    { name: 'company', label: 'Företag / BAS-P', placeholder: 'Ditt Bygg AB – BAS-P' },
    { name: 'date', label: 'Datum / revidering', type: 'date' },
    { name: 'etablering', label: 'Etablering: bodar, personalutrymmen, toaletter', type: 'textarea', placeholder: 'Var bodar, omklädning, toaletter och kontor står' },
    { name: 'upplag', label: 'Upplag och materialintag', type: 'textarea', placeholder: 'Var material lossas och lagras, avfall och sortering' },
    { name: 'transport', label: 'Transportvägar och in-/utfart', type: 'textarea', placeholder: 'Infart, vändplats, parkering, leveranstider' },
    { name: 'kran', label: 'Kran och lyft', type: 'textarea', placeholder: 'Kranens placering, svängradie, lyftzon och avspärrning' },
    { name: 'separation', label: 'Skyddsavstånd och separation fordon/gående', type: 'textarea', placeholder: 'Gångvägar, avskiljning, backvakt' },
    { name: 'ledningar', label: 'Ledningar, avgränsning och skyltning', type: 'textarea', placeholder: 'El, vatten, avlopp i mark, stängsel, skyltar' },
    { name: 'nod', label: 'Nödläge: första hjälpen, brand, återsamlingsplats', type: 'textarea', placeholder: 'Var finns första hjälpen, brandsläckare och återsamlingsplats' },
  ],
  example: {
    project: 'Flerbostadshus, Ekgatan 4',
    company: 'Ditt Bygg AB – BAS-P Anna Berg',
    etablering: 'Bodetablering vid norra tomtgränsen: 2 personalbodar, kontorsbod, 2 toaletter. El från byggcentral vid bodarna.',
    upplag: 'Materialintag från Ekgatan, upplag på hårdgjord yta öster om huset. Containrar för trä, gips, metall och brännbart vid infarten.',
    transport: 'En in-/utfart från Ekgatan. Vändplats vid upplaget. Leveranser vardagar 07–16, anmäls till arbetsledare dagen innan.',
    kran: 'Mobilkran vid lyft av stomme, uppställd på västra sidan. Lyftzon spärras av, ingen vistelse under last.',
    separation: 'Gångväg från bodar till huset markerad och avskild med stängsel från körväg. Backvakt vid backande lastbil.',
    ledningar: 'Befintlig vattenledning i mark längs Ekgatan utmärkt. Byggstängsel runt tomten, skyltar vid infart: skyddsutrustning, besökare anmäl sig.',
    nod: 'Första hjälpen och ögondusch i personalboden. Brandsläckare vid bodar och varje våningsplan. Återsamlingsplats vid infarten.',
  },
};

export default function ApdPlanMallTool() {
  return <MallToPdfTool config={CONFIG} />;
}
