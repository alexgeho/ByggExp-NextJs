import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import TimprisKalkylatorTool from '../../../components/LeadMagnet/TimprisKalkylatorTool';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad ska jag ta betalt per timme som hantverkare?',
    answer:
      'Det beror på din önskade lön, dina omkostnader och hur många timmar du kan fakturera. Utgå från lönen, lägg på sociala avgifter (ca 31,42 %), omkostnader och en vinstmarginal och dela på debiterbara timmar – det gör kalkylatorn åt dig.',
  },
  {
    question: 'Varför är timpriset så mycket högre än min lön per timme?',
    answer:
      'För att timpriset ska täcka mer än lönen: sociala avgifter, verktyg, bil, försäkringar, admin och tid som inte är debiterbar, plus vinst. Alla timmar du jobbar går inte att fakturera.',
  },
  {
    question: 'Vad är debiterbara timmar?',
    answer:
      'De timmar du faktiskt kan fakturera en kund. Restid, offerter, admin och annat ofakturerbart räknas inte – därför är de ofta klart färre än din totala arbetstid.',
  },
  {
    question: 'Ingår moms i timpriset?',
    answer:
      'Kalkylatorn visar timpris både exklusive och inklusive moms (25 %). Till privatpersoner anger du oftast pris inklusive moms.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function TimprisKalkylatorPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/timpris-kalkylator`;
  const title = 'Timpris-kalkylator – vad ska du ta betalt i timmen | ByggExp';
  const description =
    'Räkna ut vilket timpris du behöver ta betalt som hantverkare. Utgå från önskad lön, sociala avgifter, omkostnader och vinst – gratis kalkylator, utan konto.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
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
        badge="Gratis kalkylator"
        title="Timpris-kalkylator – vad ska du ta betalt?"
        intro="Räkna baklänges från vad du vill tjäna till vilket timpris du behöver ta betalt. Kalkylatorn lägger på sociala avgifter, dina omkostnader och en vinstmarginal och delar på dina debiterbara timmar."
        tool={<TimprisKalkylatorTool />}
        leadForm={<ToolLeadForm tool="timpris-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/timpris-preview.webp"
            alt="Förhandsvisning av timpris-kalkylator"
            caption="Så ser timpris-kalkylatorn ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'sa-fungerar-det',
            heading: 'Så räknas timpriset ut',
            body: (
              <ol>
                <li>Utgå från din önskade bruttolön per månad.</li>
                <li>Lägg på sociala avgifter (ca 31,42 %) – det är kostnaden för att ha dig anställd.</li>
                <li>Lägg på omkostnader: verktyg, bil, försäkringar, lokal och admin.</li>
                <li>Lägg på en vinstmarginal så att företaget går runt och kan växa.</li>
                <li>Dela summan på dina debiterbara timmar – då får du timpriset.</li>
              </ol>
            ),
          },
          {
            id: 'debiterbara-timmar',
            heading: 'Glöm inte de icke debiterbara timmarna',
            body: (
              <p>
                Ett vanligt misstag är att räkna med alla arbetstimmar som om de vore fakturerbara. I
                verkligheten går tid åt till offerter, inköp, restid och administration. Räknar du med
                för många debiterbara timmar blir timpriset för lågt och du tjänar mindre än du tror.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om timpris"
        faq={FAQ}
        cta={{
          heading: 'Se lönsamheten per projekt i ByggExp',
          text: 'Följ tid, kostnader och marginal per projekt i realtid. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler gratis verktyg"
        related={[
          { href: `/${LOCALE}/blog/timpris-hantverkare`, label: 'Guide: vad ska du ta betalt per timme?' },
          { href: `/${LOCALE}/verktyg/paslag-marginal-kalkylator`, label: 'Påslag & marginal' },
          { href: `/${LOCALE}/verktyg/rot-avdrag-kalkylator`, label: 'ROT-avdrag kalkylator' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
