import MallToPdfTool, { type MallConfig } from './MallToPdfTool';

// Free construction-contract template. Fields cover what an entreprenadkontrakt
// needs to hold up at dispute (parties, scope, price model, time, ÄTA, warranty,
// termination). B2B contract wording is the user's own — this is a fill-in mall.
const CONFIG: MallConfig = {
  pdfHeading: 'Entreprenadkontrakt',
  subtitle:
    'Fyll i uppgifterna nedan och ladda ner ett färdigt entreprenadkontrakt som PDF eller Excel att signera. Klicka på "Fyll i exempel" för att se hur det fylls i. Inget konto behövs.',
  filePrefix: 'entreprenadkontrakt',
  stampField: 'project',
  signatures: ['Beställarens underskrift', 'Entreprenörens underskrift'],
  instantDownload: {
    label: 'Ladda ner tom entreprenadkontrakt-mall direkt',
    note: 'PDF eller Word att skriva ut och fylla i för hand – inget konto behövs. Fyll hellre i digitalt nedan för ett färdigt kontrakt.',
  },
  presets: {
    field: 'standard',
    label: 'Välj standardavtal (fyller i mallen åt dig):',
    options: ['AB 04', 'ABT 06', 'ABS 18', 'Hantverkarformuläret 17'],
  },
  persist: true,
  fields: [
    { name: 'project', label: 'Projekt / arbetsplats', placeholder: 'T.ex. Badrumsrenovering, Bäckvägen 12' },
    { name: 'date', label: 'Datum', type: 'date' },
    { name: 'customer', label: 'Beställare (namn / org.nr / person.nr)', placeholder: 'Namn, org.nr och adress' },
    { name: 'contractor', label: 'Entreprenör (namn / org.nr)', placeholder: 'Ditt företag, org.nr och adress' },
    { name: 'standard', label: 'Avtalstyp / standardavtal', placeholder: 'T.ex. AB 04, ABT 06, ABS 18 eller Hantverkarformuläret 17' },
    { name: 'scope', label: 'Arbetsomfattning (vad ingår)', type: 'textarea', placeholder: 'Beskriv arbetet som ska utföras' },
    { name: 'exclusions', label: 'Ingår inte / avgränsningar', type: 'textarea', placeholder: 'Vad som uttryckligen är exkluderat' },
    { name: 'priceModel', label: 'Prismodell', placeholder: 'Fast pris / löpande räkning / takpris' },
    { name: 'price', label: 'Pris exkl. moms', placeholder: 'T.ex. 180 000 kr' },
    { name: 'paymentPlan', label: 'Betalplan', type: 'textarea', placeholder: 'T.ex. 30 % vid start, 40 % vid halvtid, 30 % efter godkänd besiktning' },
    { name: 'start', label: 'Starttid', type: 'date' },
    { name: 'end', label: 'Beräknad sluttid', type: 'date' },
    { name: 'penalty', label: 'Förseningsvite', placeholder: 'T.ex. 1 % av kontraktssumman per påbörjad vecka' },
    { name: 'ata', label: 'Hantering av ÄTA-arbeten', type: 'textarea', placeholder: 'T.ex. ÄTA ska beställas skriftligt innan de utförs' },
    { name: 'warranty', label: 'Garanti- och ansvarstid', placeholder: 'T.ex. garantitid 5 år, ansvarstid 10 år (AB 04)' },
    { name: 'insurance', label: 'Försäkring', placeholder: 'T.ex. giltig ansvarsförsäkring' },
    { name: 'termination', label: 'Hävningsvillkor', type: 'textarea', placeholder: 'Under vilka förutsättningar avtalet får hävas' },
  ],
  example: {
    project: 'Badrumsrenovering, Bäckvägen 12',
    customer: 'Beställaren AB, 556000-0000, Bäckvägen 12',
    contractor: 'Ditt Bygg AB, 559000-0000, Storgatan 1',
    standard: 'Hantverkarformuläret 17 (konsument)',
    scope: 'Totalrenovering av badrum ca 6 m²: rivning, tätskikt enligt BBV, kakel/klinker, VVS och el.',
    exclusions: ' Commode och blandare tillhandahålls av beställaren. Målning av angränsande rum ingår ej.',
    priceModel: 'Fast pris',
    price: '180 000 kr exkl. moms',
    paymentPlan: '30 % vid start, 40 % efter tätskikt, 30 % efter godkänd slutbesiktning.',
    penalty: '1 % av kontraktssumman per påbörjad förseningsvecka, max 10 %.',
    ata: 'ÄTA-arbeten ska beställas skriftligt innan de utförs och prissättas separat.',
    warranty: 'Garantitid 5 år för arbetet, 2 år för material. Ansvarstid 10 år.',
    insurance: 'Entreprenören har giltig ansvarsförsäkring.',
    termination: 'Part får häva vid väsentligt avtalsbrott efter skriftlig erinran och skälig tid för rättelse.',
  },
  // #3 e-sign pitch: contracts are the moment digital signing matters most.
  appCta: {
    heading: 'Signera kontraktet digitalt i ByggExp',
    text:
      'Mallen ovan är gratis att fylla i och skriva ut. Vill du slippa utskrift och skanning? I ByggExp skapar du kontraktet, skickar det för digital signering och får en tidsstämplad bekräftelse på vad parterna godkänt – kopplat till rätt projekt.',
    bullets: [
      'Digital signering – ingen utskrift, ingen skanning',
      'Tidsstämplat bevis på vad som avtalats om en tvist uppstår',
      'Kontrakt, ÄTA och offert samlade per projekt',
    ],
    secondary: { href: '/sv/blog/ab-04-och-abt-06', label: 'Läs: AB 04 vs ABT 06' },
  },
};

export default function EntreprenadkontraktMallTool() {
  return <MallToPdfTool config={CONFIG} />;
}
