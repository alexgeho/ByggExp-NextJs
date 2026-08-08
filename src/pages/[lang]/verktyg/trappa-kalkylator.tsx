import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import TrappaKalkylatorTool from '../../../components/LeadMagnet/TrappaKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Hur räknar jag ut antal steg i en trappa?', answer: 'Dela den totala höjden med önskad steghöjd (ofta ca 175 mm) och avrunda. Den faktiska steghöjden blir höjden delat med antal steg.' },
  { question: 'Vad är en bekväm steghöjd?', answer: 'Ofta 150–180 mm. En vanlig tumregel är att 2 × steghöjd + stegdjup ska bli ungefär 600–640 mm för en bekväm trappa.' },
  { question: 'Vilka krav finns på trappor?', answer: 'Boverkets byggregler (BBR) ställer krav på bland annat steghöjd, stegdjup och bredd. Kontrollera kraven för din typ av trappa.' },
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
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/trappa-kalkylator`;
  const title = 'Trappberäknare – antal steg och stegmått | ByggExp';
  const description = 'Räkna ut antal steg, steghöjd och stegdjup för en trappa utifrån den totala höjden. Gratis trappberäknare enligt bekvämlighetsregeln, utan konto.';

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
        title='Trappberäknare'
        intro='Fyll i den totala höjden så räknar vi ut antal steg, steghöjd och ett rekommenderat stegdjup enligt bekvämlighetsregeln 2 × steghöjd + stegdjup ≈ 630 mm.'
        tool={<TrappaKalkylatorTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/trappa-preview.webp"
            alt='Förhandsvisning av trappberäknare'
            caption='Så ser trappberäknare ut'
            width={1000}
            height={474}
          />
        }
        sections={[
          { id: 'sa-raknar-du', heading: 'Så räknar du ut trappan', body: (<><ol><li>Mät den totala höjden trappan ska överbrygga (mm).</li><li>Ange en önskad steghöjd (ofta ca 175 mm).</li><li>Se antal steg, faktisk steghöjd och rekommenderat stegdjup.</li></ol></>) },
          { id: 'info', heading: 'Bekvämlighetsregeln', body: (<><p>En trappa upplevs bekväm när 2 × steghöjd + stegdjup är ungefär 630 mm. Blir stegen för höga eller för grunda känns trappan obekväm och kan bli osäker.</p></>) },
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
          { href: `/${LOCALE}/verktyg/fall-kalkylator`, label: 'Fall & lutning' },
          { href: `/${LOCALE}/verktyg/kvadratmeter-kalkylator`, label: 'Kvadratmeterberäknare' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
