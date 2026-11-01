import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

import LegalDocument from "../../components/Legal/LegalDocument";
import { landingLanguageCodes, svEnLocales } from "../../locales/languages";

type Qa = { question: string; answer: string };

const FAQ_SV: Qa[] = [
  {
    question: "Vad är ByggExp?",
    answer:
      "ByggExp är en allt-i-ett-tjänst för byggföretag som samlar tidrapportering, digital personalliggare, schemaläggning, projekt- och uppgiftshantering, egenkontroller samt offert och faktura – både på webben och i mobilappen.",
  },
  {
    question: "Kan jag prova gratis?",
    answer:
      "Ja – de första 14 dagarna är gratis, med alla funktioner och utan att du behöver ange kort. Du kan koppla in hela teamet och se hur det fungerar på riktiga uppdrag, och bestämmer först därefter om du vill fortsätta.",
  },
  {
    question: "Är det svårt att komma igång?",
    answer:
      "Nej. De flesta är igång på cirka 5 minuter – öppna appen, välj projekt och starta tidtagningen på plats. Kontoret lägger upp projekt och uppgifter på webben och de på bygget använder mobilappen.",
  },
  {
    question: "Tänk om någon i teamet inte är så van vid teknik?",
    answer:
      "ByggExp är gjort för att vara enkelt och självförklarande, även för den som inte använt liknande appar tidigare. Vi hjälper er att komma igång och finns tillgängliga för frågor – de flesta hantverkare tycker att det är enklare än de trodde.",
  },
  {
    question: "Vad kostar ByggExp?",
    answer:
      "Tjänsten tillhandahålls mot en löpande abonnemangsavgift enligt gällande prislista och faktureras i förskott per månad eller år. Aktuella priser hittar du på startsidan.",
  },
  {
    question: "Fungerar ByggExp både på webben och i mobilen?",
    answer:
      "Ja. Kontoret arbetar på webben och de som är ute på bygget använder mobilappen. Allt synkas mot samma information i realtid.",
  },
  {
    question: "Hur fungerar tidrapportering och stämpelklocka med GPS?",
    answer:
      "De anställda checkar in och ut i appen, och tiden kan registreras automatiskt med GPS-baserad in- och utstämpling per arbetsplats – eller fyllas i manuellt i appen per projekt och dag, för den som inte vill dela sin position. Tiderna kan sedan exporteras, till exempel till Excel, för lön och fakturering.",
  },
  {
    question: "Ingår digital personalliggare?",
    answer:
      "Ja, en digital personalliggare ingår i tjänsten. Den hjälper dig att uppfylla kraven på elektronisk personalliggare på bygg- och renoveringsarbetsplatser.",
  },
  {
    question: "Är GPS-registrering av anställda tillåten?",
    answer:
      "GPS får användas för tidrapportering om det finns laglig grund och de anställda är informerade. Som arbetsgivare ansvarar du för att behandlingen kommuniceras till personalen. GPS är inget krav: medarbetare som inte vill dela sin position kan rapportera sina timmar manuellt i appen. Se vår integritetspolicy för mer information.",
  },
  {
    question: "Är mina data säkra?",
    answer:
      "All information krypteras och lagras på säkra servrar. Du styr själv åtkomsten, kan när som helst exportera dina data eller radera kontot, och vi lämnar inte ut uppgifter till tredje part.",
  },
  {
    question: "Äger jag mina data och kan jag exportera dem?",
    answer:
      "Ja. Du äger dina data och kan exportera dem till Excel på några klick, eller radera dem. Vid avslut kan uppgifterna exporteras, med undantag för det som lagen kräver att vi sparar.",
  },
  {
    question: "Tänk om det saknas en funktion vi behöver?",
    answer:
      "ByggExp är en levande produkt och vi lägger löpande till nya funktioner efter kundernas önskemål. Berätta vad ert företag behöver, så bygger vi det – era idéer blir en del av kommande uppdateringar.",
  },
  {
    question: "Kan jag säga upp abonnemanget?",
    answer:
      "Ja. Abonnemanget löper tills vidare och kan sägas upp när som helst. Uppsägningen gäller till slutet av den betalperiod som redan är betald.",
  },
  {
    question: "Hur får jag hjälp om jag kör fast?",
    answer:
      "Kontakta oss på support@byggexp.se så hjälper vi dig. Du hittar fler vägar att nå oss på vår kontaktsida.",
  },
];

const FAQ_EN: Qa[] = [
  {
    question: "What is ByggExp?",
    answer:
      "ByggExp is an all-in-one service for construction firms that brings together time tracking, a digital staff ledger, scheduling, project and task management, self-inspections, and quotes and invoicing – both on the web and in the mobile app.",
  },
  {
    question: "Can I try it for free?",
    answer:
      "Yes – the first 14 days are free, with all features and without entering a card. You can add your whole team and see how it works on real jobs, and only decide afterwards whether to continue.",
  },
  {
    question: "Is it hard to get started?",
    answer:
      "No. Most people are up and running in about 5 minutes – open the app, pick a project and start the timer on site. The office sets up projects and tasks on the web, and the people on site use the mobile app.",
  },
  {
    question: "What if someone on the team isn't very tech-savvy?",
    answer:
      "ByggExp is built to be simple and self-explanatory, even for someone who hasn't used apps like this before. We help you get started and are available for questions – most tradespeople find it easier than they expected.",
  },
  {
    question: "How much does ByggExp cost?",
    answer:
      "The service is provided against a recurring subscription fee per the applicable price list, invoiced in advance monthly or yearly. Current prices are shown on the home page.",
  },
  {
    question: "Does ByggExp work on both web and mobile?",
    answer:
      "Yes. The office works on the web and the people on site use the mobile app. Everything syncs to the same information in real time.",
  },
  {
    question: "How does time tracking and the GPS time clock work?",
    answer:
      "Employees clock in and out in the app, and time can be recorded automatically with GPS-based check-in/check-out per site – or entered manually in the app per project and day, for anyone who prefers not to share their location. The hours can then be exported, for example to Excel, for payroll and invoicing.",
  },
  {
    question: "Is a digital staff ledger included?",
    answer:
      "Yes, a digital staff ledger (personalliggare) is included. It helps you meet the requirements for an electronic staff ledger on construction and renovation sites.",
  },
  {
    question: "Is GPS tracking of employees allowed?",
    answer:
      "GPS may be used for time tracking when there is a legal basis and employees are informed. As the employer you are responsible for communicating the processing to your staff. GPS is not required: employees who prefer not to share their location can report their hours manually in the app. See our privacy policy for more information.",
  },
  {
    question: "Is my data secure?",
    answer:
      "All information is encrypted and stored on secure servers. You control access, can export your data or delete your account at any time, and we do not share data with third parties.",
  },
  {
    question: "Do I own my data and can I export it?",
    answer:
      "Yes. You own your data and can export it to Excel in a few clicks, or delete it. On termination the data can be exported, except for what the law requires us to keep.",
  },
  {
    question: "What if a feature we need is missing?",
    answer:
      "ByggExp is a living product and we continuously add new features based on customer requests. Tell us what your company needs and we'll build it – your ideas become part of upcoming updates.",
  },
  {
    question: "Can I cancel the subscription?",
    answer:
      "Yes. The subscription runs until further notice and can be cancelled at any time. The cancellation takes effect at the end of the billing period already paid for.",
  },
  {
    question: "How do I get help if I get stuck?",
    answer:
      "Contact us at support@byggexp.se and we'll help you. You'll find more ways to reach us on our contact page.",
  },
];

// nb (byggexp.no). The sv "digital personalliggare" items are left out: the
// module is not fully shipped (docs/seo/product-facts-verified.md) and the
// Swedish register rules don't apply in Norway.
const FAQ_NB: Qa[] = [
  {
    question: "Hva er ByggExp?",
    answer:
      "ByggExp er en alt-i-ett-tjeneste for byggefirma som samler timeregistrering, arbeidsplaner, prosjekt- og oppgavestyring, egenkontroller samt tilbud og faktura – både på nett og i mobilappen.",
  },
  {
    question: "Kan jeg prøve gratis?",
    answer:
      "Ja – de første 14 dagene er gratis, med alle funksjoner og uten at du trenger å oppgi kort. Du kan koble på hele teamet og se hvordan det fungerer på ekte oppdrag, og bestemmer først deretter om du vil fortsette.",
  },
  {
    question: "Er det vanskelig å komme i gang?",
    answer:
      "Nei. De fleste er i gang på cirka 5 minutter – åpne appen, velg prosjekt og start tidtakingen på stedet. Kontoret legger inn prosjekter og oppgaver på nett, og de på byggeplassen bruker mobilappen.",
  },
  {
    question: "Hva om noen i teamet ikke er så vant med teknologi?",
    answer:
      "ByggExp er laget for å være enkelt og selvforklarende, også for den som ikke har brukt lignende apper før. Vi hjelper dere i gang og er tilgjengelige for spørsmål – de fleste håndverkere synes det er enklere enn de trodde.",
  },
  {
    question: "Hva koster ByggExp?",
    answer:
      "Tjenesten leveres mot en løpende abonnementsavgift etter gjeldende prisliste og faktureres forskuddsvis per måned eller år. Aktuelle priser finner du på forsiden.",
  },
  {
    question: "Fungerer ByggExp både på nett og på mobil?",
    answer:
      "Ja. Kontoret jobber på nett, og de som er ute på byggeplassen bruker mobilappen. Alt synkroniseres mot den samme informasjonen i sanntid.",
  },
  {
    question: "Hvordan fungerer timeregistrering og stemplingsur med GPS?",
    answer:
      "De ansatte sjekker inn og ut i appen, og tiden kan registreres automatisk med GPS-basert inn- og utstempling per arbeidsplass – eller fylles inn manuelt i appen per prosjekt og dag, for den som ikke vil dele posisjonen sin. Timene kan deretter eksporteres, for eksempel til Excel, for lønn og fakturering.",
  },
  {
    question: "Er GPS-registrering av ansatte tillatt?",
    answer:
      "GPS kan brukes til timeregistrering når det finnes et lovlig grunnlag og de ansatte er informert. Som arbeidsgiver er du ansvarlig for at behandlingen kommuniseres til de ansatte. GPS er ikke et krav: ansatte som ikke vil dele posisjonen sin, kan registrere timene manuelt i appen. Se personvernerklæringen vår for mer informasjon.",
  },
  {
    question: "Er dataene mine trygge?",
    answer:
      "All informasjon krypteres og lagres på sikre servere. Du styrer selv tilgangen, kan når som helst eksportere dataene dine eller slette kontoen, og vi gir ikke ut opplysninger til tredjepart.",
  },
  {
    question: "Eier jeg dataene mine, og kan jeg eksportere dem?",
    answer:
      "Ja. Du eier dataene dine og kan eksportere dem til Excel med noen få klikk, eller slette dem. Ved avslutning kan opplysningene eksporteres, med unntak av det loven krever at vi oppbevarer.",
  },
  {
    question: "Hva om det mangler en funksjon vi trenger?",
    answer:
      "ByggExp er et levende produkt, og vi legger fortløpende til nye funksjoner etter kundenes ønsker. Fortell oss hva bedriften deres trenger, så bygger vi det – ideene deres blir en del av kommende oppdateringer.",
  },
  {
    question: "Kan jeg si opp abonnementet?",
    answer:
      "Ja. Abonnementet løper til det sies opp, og kan sies opp når som helst. Oppsigelsen gjelder fra slutten av betalingsperioden som allerede er betalt.",
  },
  {
    question: "Hvordan får jeg hjelp hvis jeg står fast?",
    answer:
      "Kontakt oss på support@byggexp.se, så hjelper vi deg. Du finner flere måter å nå oss på på kontaktsiden vår.",
  },
];

function faqSchema(items: Qa[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: landingLanguageCodes.map((lang) => ({ params: { lang } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ lang: string }> = async ({ params }) => ({
  props: { lang: (params?.lang as string) || "sv" },
});

export default function FaqPage({
  lang,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const isSv = lang === "sv";
  if (lang === "nb") return <FaqNb />;
  const items = isSv ? FAQ_SV : FAQ_EN;
  const title = isSv ? "Vanliga frågor" : "Frequently asked questions";
  const description = isSv
    ? "Vanliga frågor om ByggExp – tidrapportering, personalliggare, priser, gratis test, GPS och support för byggföretag."
    : "Frequently asked questions about ByggExp – time tracking, staff ledger, pricing, free trial, GPS and support for construction firms.";
  const contactLabel = isSv
    ? "Hittar du inte svaret? Kontakta oss på "
    : "Can't find your answer? Contact us at ";
  const contactHref = `/${isSv ? "sv" : "en"}/contact`;
  const contactLink = isSv ? "kontaktsidan" : "the contact page";

  return (
    <LegalDocument
      title={title}
      lang={isSv ? "sv" : "en"}
      contentLocales={svEnLocales}
      description={description}
      head={
        <script
          type="application/ld+json"
          // Keep visible FAQ and schema in sync from a single source.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(items)) }}
        />
      }
    >
      {items.map((item) => (
        <div key={item.question}>
          <h2>{item.question}</h2>
          <p>{item.answer}</p>
        </div>
      ))}

      <p>
        {contactLabel}
        <a href="mailto:support@byggexp.se">support@byggexp.se</a>
        {isSv ? " eller via " : " or via "}
        <Link href={contactHref}>{contactLink}</Link>.
      </p>
    </LegalDocument>
  );
}

// Norwegian FAQ for byggexp.no: own text, self-canonical on .no (LegalDocument).
function FaqNb() {
  return (
    <LegalDocument
      title="Vanlige spørsmål"
      lang="nb"
      contentLocales={svEnLocales}
      description="Vanlige spørsmål om ByggExp – timeregistrering, priser, gratis prøveperiode, GPS og support for byggefirma."
      head={
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_NB)) }}
        />
      }
    >
      {FAQ_NB.map((item) => (
        <div key={item.question}>
          <h2>{item.question}</h2>
          <p>{item.answer}</p>
        </div>
      ))}

      <p>
        Finner du ikke svaret? Kontakt oss på{" "}
        <a href="mailto:support@byggexp.se">support@byggexp.se</a> eller via{" "}
        <Link href="/nb/contact">kontaktsiden</Link>.
      </p>
    </LegalDocument>
  );
}
