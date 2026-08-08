import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import TapetKalkylatorTool from '../../../components/LeadMagnet/TapetKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Hur många m² täcker en tapetrulle?', answer: 'En standardrulle täcker ofta cirka 5 m², men det varierar – kontrollera på tapeten och ange värdet i kalkylatorn.' },
  { question: 'Varför behöver jag extra för mönster?', answer: 'Tapeter med mönster kräver att mönstret passas mellan våderna, vilket ger mer spill. Ju större mönster, desto större påslag.' },
  { question: 'Ska jag dra av fönster och dörrar?', answer: 'Vid små ytor kan du räkna bruttoväggytan för marginal. Vid stora öppningar kan du dra av dem, men ha alltid lite reserv.' },
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
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/tapet-kalkylator`;
  const title = 'Tapetberäknare – hur många rullar tapet | ByggExp';
  const description = 'Räkna ut hur många rullar tapet du behöver utifrån väggytan och rullens storlek, inkl. spill för mönsterpassning. Gratis kalkylator, utan konto.';

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
        title='Tapetberäknare'
        intro='Fyll i väggytan och rullens yta så räknar vi ut hur många tapetrullar du behöver, med påslag för mönsterpassning och spill.'
        tool={<TapetKalkylatorTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/tapet-preview.webp"
            alt='Förhandsvisning av tapetberäknare'
            caption='Så ser tapetberäknare ut'
            width={1000}
            height={474}
          />
        }
        sections={[
          { id: 'sa-raknar-du', heading: 'Så räknar du ut antal rullar', body: (<><ol><li>Räkna ut väggytan som ska tapetseras (m²).</li><li>Ange rullens yta (ofta ca 5 m²).</li><li>Lägg på spill för mönsterpassning.</li><li>Se hur många rullar du behöver.</li></ol></>) },
          { id: 'info', heading: 'Tips', body: (<><p>Köp alla rullar ur samma parti (samma batchnummer) så att färgen stämmer, och ta gärna en rulle extra som reserv.</p></>) },
        ]}
        faqHeading='Vanliga frågor'
        faq={FAQ}
        cta={{
          heading: 'Räkna material och tid i ByggExp',
          text: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler byggkalkylatorer"
        related={[
          { href: `/${LOCALE}/verktyg/farg-kalkylator`, label: 'Färgåtgång' },
          { href: `/${LOCALE}/verktyg/kvadratmeter-kalkylator`, label: 'Kvadratmeterberäknare' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
