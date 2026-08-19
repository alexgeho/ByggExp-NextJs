import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import KorjournalMallTool from '../../../components/LeadMagnet/KorjournalMallTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad måste en körjournal innehålla?',
    answer:
      'Per resa: datum, mätarställning vid start och slut, körsträcka och ärendet (så att tjänste- och privatresor kan skiljas åt). En komplett körjournal är underlaget Skatteverket vill se vid en granskning.',
  },
  {
    question: 'Varför behöver jag föra körjournal?',
    answer:
      'Har du en firmabil kan du bli förmånsbeskattad om du inte kan visa att den bara används i tjänst. En noggrant förd körjournal är det som styrker att privatkörningen är ringa eller obefintlig.',
  },
  {
    question: 'Hur mycket privatkörning är tillåten utan förmån?',
    answer:
      'För att undvika bilförmån på en tjänstebil får privatkörningen vara högst ringa – som tumregel högst 10 tillfällen och totalt högst 100 mil per år. Körjournalen visar att du håller dig under gränsen.',
  },
  {
    question: 'Kostar mallen något?',
    answer: 'Nej, den är gratis och kräver inget konto. Fyll i och ladda ner PDF eller Excel.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function KorjournalMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/korjournal-mall`;
  const title = 'Körjournal mall gratis (PDF & Excel) | ByggExp';
  const description =
    'Ladda ner en gratis körjournal-mall som håller vid Skatteverkets granskning. Fyll i fordon och resor med mätarställning och ärende och få en färdig körjournal som PDF.';

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
        badge="Gratis mall"
        title="Körjournal – gratis mall"
        intro="Fyll i fordon och resor och ladda ner en färdig körjournal som PDF eller Excel. En noggrant förd körjournal håller vid Skatteverkets granskning och skyddar dig mot förmånsbeskattning på firmabilen."
        tool={<KorjournalMallTool />}
        leadForm={<ToolLeadForm tool="korjournal-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/korjournal-preview.webp"
            alt="Förhandsvisning av körjournal-mallen"
            caption="Så ser körjournal-mallen ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'vad-ska-med',
            heading: 'Vad ska körjournalen innehålla?',
            body: (
              <ul>
                <li>Fordon och registreringsnummer.</li>
                <li>Per resa: datum, mätarställning start/slut, körsträcka och ärende.</li>
                <li>Tydlig uppdelning på tjänste- och privatkörning.</li>
                <li>Summering per period så att totalen stämmer mot mätaren.</li>
              </ul>
            ),
          },
          {
            id: 'sa-slipper-du-forman',
            heading: 'Så slipper du förmånsbeskattning',
            body: (
              <p>
                För att undvika bilförmån på en tjänstebil måste privatkörningen vara ringa – högst 10 tillfällen och
                100 mil per år. Utan körjournal är det din uppgift att bevisa det, och då väger en löpande, komplett
                journal tungt. För privat bil i tjänst styrker journalen i stället din rätt till skattefri milersättning.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om körjournal"
        faq={FAQ}
        cta={{
          heading: 'Håll ordning på bil, tid och kostnader i ByggExp',
          text: 'Samla underlaget som firmans avdrag vilar på. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/korjournal-krav-skatteverket-bygg`, label: 'Guide: körjournal-krav' },
          { href: `/${LOCALE}/blog/milersattning-2026`, label: 'Milersättning' },
          { href: `/${LOCALE}/blog/servicebil-eller-formansbil`, label: 'Servicebil eller förmånsbil' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
