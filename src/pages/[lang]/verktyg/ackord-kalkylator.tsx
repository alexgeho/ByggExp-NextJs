import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import AckordKalkylatorTool from '../../../components/LeadMagnet/AckordKalkylatorTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv-only — Byggavtalet-specific. Serves "ackord lön", "räkna ackord",
// "ackordsöverskott", "ackord bygg".
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Hur räknar man ut ackordsöverskottet?',
    answer:
      'Vid slutavräkning räknas ackordssumman fram utifrån prislistan och utförda mängder. Utbetalda förskott dras av, och det som återstår är ackordsöverskottet som fördelas i laget enligt fördelningslistan. Exempel: ackordssumma 900 000 kr minus förskott 780 000 kr = 120 000 kr att fördela.',
  },
  {
    question: 'Hur stort är granskningsarvodet?',
    answer:
      'Granskningsarvodet är 1,5 % av arbetarens ackordssumma. På byggavtalets område dras det från arbetarens lön (på anläggningsavtalet betalar arbetsgivaren), och det redovisas till fackets mätningskontor. Sammantaget kan mätnings- och granskningsarvode uppgå till som mest cirka 2 % av lönesummorna.',
  },
  {
    question: 'Får ackordslönen bli lägre än avtalad lägstalön?',
    answer:
      'Nej. Ackord är en prestationslön ovanpå de avtalade nivåerna, och utfallet får aldrig underskrida Byggavtalets lägstanivå. Utforma ackordsöverenskommelsen så att lönegolvet alltid hålls.',
  },
  {
    question: 'Vad ska ackordsöverenskommelsen (ackordssedeln) innehålla?',
    answer:
      'Vilken prislista/ackordslista som gäller (godkänd av båda parter), arbetets omfattning och avgränsning, samt nivå för löpande förskott. Ackordet ska regleras skriftligt innan arbetet påbörjas – det skyddar mot tvist vid slutavräkningen.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function AckordKalkylatorPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/ackord-kalkylator`;
  const metaTitle = 'Ackordskalkylator – räkna ackordsöverskott (Byggavtalet) | ByggExp';
  const description =
    'Räkna ut ackordsöverskottet gratis: ackordssumma minus utbetalda förskott, granskningsarvode 1,5 % och fördelning i laget. För slutavräkning enligt Byggavtalet.';

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQ.map((item) => ({
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
        wide
        badge="Gratis kalkylator"
        title="Ackordskalkylator – räkna ut ackordsöverskottet"
        intro="Fyll i ackordssumman från prislistan och utbetalda förskott, så räknar kalkylatorn ut ackordsöverskottet att fördela, granskningsarvodet och en jämn fördelning per person. För slutavräkning enligt Byggavtalet. Gratis och utan konto."
        tool={<AckordKalkylatorTool />}
        leadForm={<ToolLeadForm tool="ackord-kalkylator" />}
        sections={[
          {
            id: 'sa-raknas-ackordet',
            heading: 'Så räknas ackordet – prislista, förskott och slutavräkning',
            body: (
              <ol>
                <li>Ackordssedel tecknas innan arbetet startar, med godkänd prislista.</li>
                <li>Förskott betalas löpande via förskottssedlar medan arbetet pågår.</li>
                <li>Vid slutavräkning räknas ackordssumman fram ur prislista × utförda mängder.</li>
                <li>Utbetalda förskott dras av – återstoden är ackordsöverskottet.</li>
                <li>Överskottet fördelas i laget via fördelningslistan.</li>
              </ol>
            ),
          },
          {
            id: 'granskningsarvode',
            heading: 'Granskningsarvode och lägstalön',
            body: (
              <p>
                Granskningsarvodet är <strong>1,5 % av ackordssumman</strong> och redovisas till fackets
                mätningskontor. Ackordslönen får aldrig underskrida Byggavtalets lägstanivå – ackord är
                en prestationslön ovanpå de avtalade nivåerna. Läs hela genomgången i guiden om{' '}
                <a href={`/${LOCALE}/blog/ackordslon-bygg`}>ackordslön i bygg</a>.
              </p>
            ),
          },
          {
            id: 'underlag',
            heading: 'Bygg avräkningen på spårbara siffror',
            body: (
              <p>
                Slutsedeln och fördelningslistan ska bygga på fakta, inte minnesbilder. Med löpande
                tidrapportering och mängddokumentation samlar du timmar och utförda moment redan när
                jobbet görs – ett spårbart underlag som gör det enklare att lämna korrekt ackordsunderlag
                i tid.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om ackord"
        faq={FAQ}
        cta={{
          heading: 'Spårbart ackordsunderlag i ByggExp',
          text: 'Samla timmar och utförda mängder löpande per projekt, så bygger slutavräkningen på fakta. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/ackordslon-bygg`, label: 'Guide: ackordslön i bygg' },
          { href: `/${LOCALE}/verktyg/ob-overtid-kalkylator`, label: 'OB & övertid kalkylator' },
          { href: `/${LOCALE}/verktyg/tidrapport-mall`, label: 'Tidrapport-mall (PDF)' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
