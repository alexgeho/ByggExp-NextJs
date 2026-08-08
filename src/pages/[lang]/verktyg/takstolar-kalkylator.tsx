import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import TakstolarKalkylatorTool from '../../../components/LeadMagnet/TakstolarKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Hur många takstolar behöver jag?', answer: 'Antal = takets längd delat med centrumavståndet (c/c) + 1. Ett 10 m tak med c/c 1200 mm ger 9 takstolar.' },
  { question: 'Vilket c/c-avstånd har takstolar?', answer: 'Vanligt är 1200 mm, men det beror på taktäckning, snölast och dimensionering. Följ konstruktörens uppgift.' },
  { question: 'Ingår gavelspetsar och kortlingar?', answer: 'Nej, kalkylatorn räknar de vanliga takstolarna. Gavelkonstruktion och avväxlingar tillkommer.' },
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
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/takstolar-kalkylator`;
  const title = 'Takstolar – räkna antal utifrån c/c | ByggExp';
  const description = 'Räkna ut antal takstolar utifrån takets längd och centrumavstånd (c/c). Gratis kalkylator för takstolar, utan konto.';

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
        title='Takstolar'
        intro='Fyll i takets längd och centrumavstånd (c/c) så räknar vi ut antal takstolar.'
        tool={<TakstolarKalkylatorTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/takstolar-preview.webp"
            alt='Förhandsvisning av takstolar'
            caption='Så ser takstolar ut'
            width={1000}
            height={474}
          />
        }
        sections={[
          { id: 'sa-raknar-du', heading: 'Så räknar du ut antal takstolar', body: (<><ol><li>Mät takets längd i meter.</li><li>Ange centrumavstånd (c/c) i mm.</li><li>Se antal takstolar.</li></ol></>) },
          { id: 'info', heading: 'Följ dimensioneringen', body: (<><p>Takstolar dimensioneras efter spännvidd, snölast och taktäckning. Använd kalkylatorn för en uppskattning, men följ alltid konstruktörens ritning.</p></>) },
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
          { href: `/${LOCALE}/verktyg/tak-kalkylator`, label: 'Takberäknare' },
          { href: `/${LOCALE}/verktyg/reglar-kalkylator`, label: 'Reglar & virke' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
