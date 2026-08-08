import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import IsoleringKalkylatorTool from '../../../components/LeadMagnet/IsoleringKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Hur mycket isolering går det åt?', answer: 'Det beror på ytan och hur många m² en förpackning täcker vid vald tjocklek. Ju tjockare isolering, desto färre m² per förpackning.' },
  { question: 'Hur många m² täcker en förpackning?', answer: 'Det står på förpackningen och beror på tjockleken. Ange värdet i kalkylatorn så räknas antalet ut.' },
  { question: 'Ska jag räkna med spill?', answer: 'Ja, lite spill för kap mellan reglar och vid kanter är vanligt. Ett litet påslag ger marginal.' },
  { question: 'Kostar det något?', answer: 'Nej, kalkylatorn är gratis och kräver inget konto.' },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function Page() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/isolering-kalkylator`;
  const title = 'Isoleringsberäknare – antal förpackningar | ByggExp';
  const description = 'Räkna ut hur många förpackningar isolering du behöver utifrån ytan och hur mycket en förpackning täcker. Gratis kalkylator för isolering, utan konto.';

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
        badge='Gratis kalkylator'
        title='Isoleringsberäknare'
        intro='Fyll i ytan som ska isoleras och hur många m² en förpackning täcker för vald tjocklek så räknar vi ut antalet förpackningar.'
        tool={<IsoleringKalkylatorTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/isolering-preview.webp"
            alt='Förhandsvisning av isoleringsberäknare'
            caption='Så ser isoleringsberäknare ut'
            width={1000}
            height={474}
          />
        }
        sections={[
          { id: 'sa-raknar-du', heading: 'Så räknar du ut isoleringen', body: (<><ol><li>Räkna ut ytan som ska isoleras (m²).</li><li>Ange hur många m² en förpackning täcker.</li><li>Lägg på spill.</li><li>Se antal förpackningar.</li></ol></>) },
          { id: 'info', heading: 'Tänk på tjockleken', body: (<><p>Samma förpackning täcker färre m² ju tjockare isolering du väljer. Kontrollera vilken tjocklek som krävs för din konstruktion (vind, vägg, golv) innan du beställer.</p></>) },
        ]}
        faqHeading="Vanliga frågor"
        faq={FAQ}
        cta={{
          heading: 'Räkna material och tid i ByggExp',
          text: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler byggkalkylatorer"
        related={[
          { href: `/${LOCALE}/verktyg/reglar-kalkylator`, label: 'Reglar & virke' },
          { href: `/${LOCALE}/verktyg/gips-kalkylator`, label: 'Gipsberäknare' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
