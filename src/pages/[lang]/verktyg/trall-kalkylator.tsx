import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import TrallKalkylatorTool from '../../../components/LeadMagnet/TrallKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Hur mycket trall går det åt per m²?', answer: 'Det beror på brädans bredd och springan. Med 95 mm bräda och 4 mm springa täcker varje bräda ca 99 mm, vilket ger drygt 10 löpmeter per m².' },
  { question: 'Hur stor springa ska jag ha?', answer: 'Ofta 3–6 mm beroende på virkets fukthalt – trä rör sig. Ange springan i kalkylatorn så påverkas åtgången.' },
  { question: 'Ingår reglar under trallen?', answer: 'Nej, kalkylatorn räknar trallbrädorna. Räkna virke till reglar/bärlina separat, ofta med c/c 600 mm.' },
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
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/trall-kalkylator`;
  const title = 'Trallberäknare – räkna löpmeter och brädor | ByggExp';
  const description = 'Räkna ut hur mycket trall du behöver: löpmeter och antal brädor utifrån altanens yta, brädbredd och springa. Gratis trallberäknare, utan konto.';

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
        title='Trallberäknare'
        intro='Fyll i altanens yta, brädans bredd och springan mellan brädorna så räknar vi ut hur många löpmeter trall och antal brädor du behöver, inkl. spill.'
        tool={<TrallKalkylatorTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/trall-preview.webp"
            alt='Förhandsvisning av trallberäknare'
            caption='Så ser trallberäknare ut'
            width={1000}
            height={474}
          />
        }
        sections={[
          { id: 'sa-raknar-du', heading: 'Så räknar du ut trallen', body: (<><ol><li>Räkna ut altanens yta i m².</li><li>Ange brädans bredd och springan.</li><li>Ange brädans längd och spill.</li><li>Se löpmeter och antal brädor.</li></ol></>) },
          { id: 'info', heading: 'Glöm inte underlaget', body: (<><p>Utöver trallbrädorna behöver du reglar/bärlina, plintar eller grund och infästning. Köp gärna någon bräda extra för kap och framtida byten.</p></>) },
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
          { href: `/${LOCALE}/verktyg/kvadratmeter-kalkylator`, label: 'Kvadratmeterberäknare' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
