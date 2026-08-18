import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import ReglarKalkylatorTool from '../../../components/LeadMagnet/ReglarKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Hur räknar jag antal reglar?', answer: 'Antal stående reglar = längd ÷ centrumavstånd (c/c) + 1. En 6 m vägg med c/c 600 mm ger 6000 ÷ 600 + 1 = 11 reglar.' },
  { question: 'Vilket c/c-avstånd ska jag ha?', answer: 'Vanliga avstånd är 450 eller 600 mm beroende på skiv- och isoleringsmått samt krav. 600 mm är vanligast för innerväggar.' },
  { question: 'Ingår syll och hammarband?', answer: 'Nej, kalkylatorn räknar de stående reglarna. Lägg till virke för syll (nedtill) och hammarband (upptill) separat.' },
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
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/reglar-kalkylator`;
  const title = 'Reglar & virke kalkylator – antal reglar (c/c) | ByggExp';
  const description = 'Räkna ut antal reglar och löpmeter virke utifrån väggens längd och centrumavstånd (c/c). Gratis kalkylator för regelvägg och stomme, utan konto.';

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
        title='Reglar & virke'
        intro='Fyll i väggens längd och centrumavstånd (c/c) så räknar vi ut antal reglar och totalt antal löpmeter virke.'
        tool={<ReglarKalkylatorTool />}
        leadForm={<ToolLeadForm tool="reglar-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/reglar-preview.webp"
            alt='Förhandsvisning av reglar & virke'
            caption='Så ser reglar & virke ut'
            width={1000}
            height={474}
          />
        }
        sections={[
          { id: 'sa-raknar-du', heading: 'Så räknar du ut virket', body: (<><ol><li>Mät väggens längd i meter.</li><li>Välj centrumavstånd (c/c) i mm.</li><li>Ange regelns längd/höjd.</li><li>Se antal reglar och totalt löpmeter.</li></ol></>) },
          { id: 'info', heading: 'Glöm inte', body: (<><p>Utöver de stående reglarna behövs syll och hammarband, samt kortlingar och extra reglar vid dörrar, fönster och hörn.</p></>) },
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
          { href: `/${LOCALE}/verktyg/takstolar-kalkylator`, label: 'Beräkna takstolar' },
          { href: `/${LOCALE}/verktyg/kvadratmeter-kalkylator`, label: 'Kvadratmeterberäknare' },
          { href: `/${LOCALE}/verktyg/betong-kalkylator`, label: 'Betongberäknare' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
