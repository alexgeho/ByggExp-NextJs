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
      "Ja. Du kan testa ByggExp gratis med alla funktioner och utan att ange kort. Du bestämmer först därefter om du vill fortsätta med ett abonnemang.",
  },
  {
    question: "Vad kostar ByggExp?",
    answer:
      "Tjänsten tillhandahålls mot en löpande abonnemangsavgift enligt gällande prislista och faktureras i förskott per månad eller år. Aktuella priser hittar du på startsidan.",
  },
  {
    question: "Fungerar ByggExp både på webben och i mobilen?",
    answer:
      "Ja. Kontoret arbetar i webben och de som är ute på bygget använder mobilappen. Allt synkas mot samma information i realtid.",
  },
  {
    question: "Hur fungerar tidrapportering och stämpelklocka med GPS?",
    answer:
      "De anställda checkar in och ut i appen, och tiden kan registreras med GPS-baserad in- och utstämpling per arbetsplats. Tiderna kan sedan exporteras, till exempel till Excel, för lön och fakturering.",
  },
  {
    question: "Ingår digital personalliggare?",
    answer:
      "Ja, en digital personalliggare ingår i tjänsten. Den hjälper dig att uppfylla kraven på elektronisk personalliggare på bygg- och renoveringsarbetsplatser.",
  },
  {
    question: "Är GPS-registrering av anställda tillåten?",
    answer:
      "GPS får användas för tidrapportering om det finns laglig grund och de anställda är informerade. Som arbetsgivare ansvarar du för att behandlingen kommuniceras till personalen. Se vår integritetspolicy för mer information.",
  },
  {
    question: "Äger jag min data och kan jag exportera den?",
    answer:
      "Ja. Du äger dina data och kan exportera eller radera dem. Vid avslut kan uppgifterna exporteras, med undantag för vad lag kräver att vi sparar.",
  },
  {
    question: "Kan jag säga upp abonnemanget?",
    answer:
      "Ja. Abonnemanget löper tills vidare och kan sägas upp med en (1) månads uppsägningstid till utgången av innevarande betalperiod.",
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
      "Yes. You can try ByggExp for free with all features and without entering a card. You only decide afterwards whether to continue with a subscription.",
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
      "Employees clock in and out in the app, and time can be recorded with GPS-based check-in/check-out per site. The hours can then be exported, for example to Excel, for payroll and invoicing.",
  },
  {
    question: "Is a digital staff ledger included?",
    answer:
      "Yes, a digital staff ledger (personalliggare) is included. It helps you meet the requirements for an electronic staff ledger on construction and renovation sites.",
  },
  {
    question: "Is GPS tracking of employees allowed?",
    answer:
      "GPS may be used for time tracking when there is a legal basis and employees are informed. As the employer you are responsible for communicating the processing to your staff. See our privacy policy for more information.",
  },
  {
    question: "Do I own my data and can I export it?",
    answer:
      "Yes. You own your data and can export or delete it. On termination the data can be exported, except for what the law requires us to keep.",
  },
  {
    question: "Can I cancel the subscription?",
    answer:
      "Yes. The subscription runs until further notice and can be terminated with one (1) month's notice to the end of the current billing period.",
  },
  {
    question: "How do I get help if I get stuck?",
    answer:
      "Contact us at support@byggexp.se and we'll help you. You'll find more ways to reach us on our contact page.",
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
