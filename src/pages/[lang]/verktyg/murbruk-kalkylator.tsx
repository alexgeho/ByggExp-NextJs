import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import MurbrukKalkylatorTool from '../../../components/LeadMagnet/MurbrukKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Hur mycket murbruk går det åt?', answer: 'Det beror på skikttjocklek och underlag. Ange åtgången i kg per m² (står ofta på säcken) så räknar kalkylatorn ut total mängd och antal säckar.' },
  { question: 'Hur många säckar bruk behöver jag?', answer: 'Total mängd i kg delat med säckens vikt, avrundat uppåt. Lägg på lite spill så du inte får slut.' },
  { question: 'Gäller det både mur- och putsbruk?', answer: 'Ja. Åtgången skiljer sig, men principen är densamma – justera kg per m² efter produkt och användning.' },
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
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/murbruk-kalkylator`;
  const title = 'Murbruk & puts kalkylator – åtgång och säckar | ByggExp';
  const description = 'Räkna ut åtgång av murbruk eller puts: total mängd i kg och antal säckar utifrån yta och åtgång per m². Gratis kalkylator, utan konto.';

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
        title='Murbruk & puts'
        intro='Fyll i ytan och åtgången i kg per m² så räknar vi ut total mängd bruk och antal säckar. Åtgången beror på skikttjocklek och underlag.'
        tool={<MurbrukKalkylatorTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/murbruk-preview.webp"
            alt='Förhandsvisning av murbruk & puts'
            caption='Så ser murbruk & puts ut'
            width={1000}
            height={474}
          />
        }
        sections={[
          { id: 'sa-raknar-du', heading: 'Så räknar du ut bruket', body: (<><ol><li>Räkna ut ytan i m².</li><li>Ange åtgången i kg per m² (från säcken).</li><li>Lägg på spill och säckens vikt.</li><li>Se total mängd och antal säckar.</li></ol></>) },
          { id: 'info', heading: 'Åtgången varierar', body: (<><p>Tjockare skikt och ojämna underlag drar mer bruk. Följ alltid tillverkarens uppgift om åtgång för din produkt och tillämpning.</p></>) },
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
          { href: `/${LOCALE}/verktyg/betong-kalkylator`, label: 'Betongberäknare' },
          { href: `/${LOCALE}/verktyg/kvadratmeter-kalkylator`, label: 'Kvadratmeterberäknare' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
