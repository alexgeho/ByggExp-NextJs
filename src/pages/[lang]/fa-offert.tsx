import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../components/LeadMagnet/LeadMagnetPage';
import OffertLeadForm from '../../components/LeadMagnet/OffertLeadForm';
import { toolLocaleEnabled, type ToolLocale } from '../../lib/locale';
import { localeOrigin } from '../../lib/seo';
import { footerTranslations } from '../../locales/footer';
import { headerTranslations } from '../../locales/header';

// B2C lead-generation landing: homeowners request quotes ("Få 3 offerter"), and
// the leads are routed to construction firms. This is the conversion destination
// that the B2C organic content (ROT, bygglov, cost calculators) funnels into.
// sv on byggexp.se, nb on byggexp.no.
type Locale = ToolLocale;

type Content = {
  title: string;
  description: string;
  badge: string;
  h1: string;
  intro: string;
  sections: { id: string; heading: string; body: ReactNode }[];
  faqHeading: string;
  faq: LeadMagnetFaqItem[];
};

const CONTENT: Record<Locale, Content> = {
  sv: {
    title: 'Få 3 offerter från byggföretag – gratis | ByggExp',
    description:
      'Beskriv ditt byggprojekt så förmedlar vi din förfrågan till byggföretag som kan utföra jobbet. Få upp till 3 offerter – kostnadsfritt och utan förpliktelser.',
    badge: 'Gratis & utan förpliktelser',
    h1: 'Få 3 offerter från byggföretag',
    intro:
      'Ska du renovera, bygga till eller anlita en hantverkare? Beskriv projektet så förmedlar vi din förfrågan till byggföretag som kan jobbet. Du får offerter att jämföra – gratis och utan att binda dig.',
    sections: [
      {
        id: 'sa-fungerar-det',
        heading: 'Så fungerar det',
        body: (
          <ol>
            <li>Fyll i vad som ska göras, var och när.</li>
            <li>Vi förmedlar förfrågan till byggföretag i ditt område.</li>
            <li>Du får offerter och väljer själv om du vill gå vidare.</li>
          </ol>
        ),
      },
      {
        id: 'varfor',
        heading: 'Varför jämföra offerter?',
        body: (
          <ul>
            <li>Rätt pris – jämför flera företag i stället för att gissa.</li>
            <li>Spara tid – en förfrågan i stället för att ringa runt.</li>
            <li>Trygghet – välj ett företag du känner dig bekväm med.</li>
          </ul>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor',
    faq: [
      { question: 'Kostar det något att få offerter?', answer: 'Nej. Att skicka en förfrågan och få offerter är gratis och utan förpliktelser. Du väljer själv om du vill anlita något företag.' },
      { question: 'Hur många offerter får jag?', answer: 'Vi strävar efter att förmedla din förfrågan till upp till tre byggföretag som kan utföra jobbet i ditt område.' },
      { question: 'Måste jag tacka ja?', answer: 'Nej. Offerterna är helt utan förpliktelser – du bestämmer om och med vem du vill gå vidare.' },
    ],
  },
  nb: {
    title: 'Få 3 tilbud fra byggefirmaer – gratis | ByggExp',
    description:
      'Beskriv byggeprosjektet ditt, så formidler vi forespørselen til byggefirmaer som kan utføre jobben. Få opptil 3 tilbud – gratis og uforpliktende.',
    badge: 'Gratis & uforpliktende',
    h1: 'Få 3 tilbud fra byggefirmaer',
    intro:
      'Skal du renovere, bygge på eller leie inn en håndverker? Beskriv prosjektet, så formidler vi forespørselen til byggefirmaer som kan jobben. Du får tilbud å sammenligne – gratis og uforpliktende.',
    sections: [
      {
        id: 'sa-fungerar-det',
        heading: 'Slik fungerer det',
        body: (
          <ol>
            <li>Fyll inn hva som skal gjøres, hvor og når.</li>
            <li>Vi formidler forespørselen til byggefirmaer i ditt område.</li>
            <li>Du får tilbud og velger selv om du vil gå videre.</li>
          </ol>
        ),
      },
      {
        id: 'varfor',
        heading: 'Hvorfor sammenligne tilbud?',
        body: (
          <ul>
            <li>Riktig pris – sammenlign flere firmaer i stedet for å gjette.</li>
            <li>Spar tid – én forespørsel i stedet for å ringe rundt.</li>
            <li>Trygghet – velg et firma du føler deg komfortabel med.</li>
          </ul>
        ),
      },
    ],
    faqHeading: 'Vanlige spørsmål',
    faq: [
      { question: 'Koster det noe å få tilbud?', answer: 'Nei. Å sende en forespørsel og få tilbud er gratis og uforpliktende. Du velger selv om du vil leie inn et firma.' },
      { question: 'Hvor mange tilbud får jeg?', answer: 'Vi tilstreber å formidle forespørselen din til opptil tre byggefirmaer som kan utføre jobben i ditt område.' },
      { question: 'Må jeg takke ja?', answer: 'Nei. Tilbudene er helt uforpliktende – du bestemmer om og med hvem du vil gå videre.' },
    ],
  },
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const lang = params?.lang;
  if (!toolLocaleEnabled(lang)) {
    return { notFound: true };
  }
  return { props: { lang } };
};

export default function FaOffertPage({ lang }: { lang: Locale }) {
  const c = CONTENT[lang];
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/fa-offert`;

  return (
    <>
      <Head>
        <title>{c.title}</title>
        <meta name="description" content={c.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={c.title} />
        <meta property="og:description" content={c.description} />
        <meta property="og:url" content={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: c.faq.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: { '@type': 'Answer', text: item.answer },
              })),
            }),
          }}
        />
      </Head>

      <Header headerT={headerT} />

      <LeadMagnetPage
        badge={c.badge}
        title={c.h1}
        intro={c.intro}
        leadForm={<OffertLeadForm lang={lang} source="fa-offert" />}
        sections={c.sections}
        faqHeading={c.faqHeading}
        faq={c.faq}
      />

      <Footer footerT={footerT} />
    </>
  );
}
