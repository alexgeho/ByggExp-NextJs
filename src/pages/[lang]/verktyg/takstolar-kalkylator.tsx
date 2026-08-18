import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import TakstolarKalkylatorTool from '../../../components/LeadMagnet/TakstolarKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Hur beräknar man antal takstolar?', answer: 'Beräkning av takstolar: ta takets längd delat med centrumavståndet (c/c) och lägg till 1. Ett 10 m tak med c/c 1200 mm ger 9 takstolar. Kalkylatorn räknar ut det åt dig.' },
  { question: 'Hur många takstolar behöver jag?', answer: 'Antal = takets längd delat med centrumavståndet (c/c) + 1. Ett 10 m tak med c/c 1200 mm ger 9 takstolar.' },
  { question: 'Vilket c/c-avstånd har takstolar?', answer: 'Vanligt är 1200 mm, men det beror på taktäckning, snölast och dimensionering. Följ konstruktörens uppgift.' },
  { question: 'Vad är skillnaden på att beräkna antal och att dimensionera takstolar?', answer: 'Den här kalkylatorn beräknar antal takstolar utifrån c/c. Dimensionering – att bestämma virkesdimensioner utifrån spännvidd och snölast – görs av en konstruktör enligt gällande last.' },
  { question: 'Ingår gavelspetsar och kortlingar?', answer: 'Nej, kalkylatorn räknar de vanliga takstolarna. Gavelkonstruktion och avväxlingar tillkommer.' },
  { question: 'Kostar det något?', answer: 'Nej, kalkylatorn för takstolar är gratis och kräver inget konto.' },
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
  const title = 'Beräkna takstolar – kalkylator för antal utifrån c/c | ByggExp';
  const description = 'Beräkna takstolar gratis: räkna ut antal takstolar utifrån takets längd och centrumavstånd (c/c). Enkel kalkylator för takstolsberäkning, utan konto.';

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
        title='Beräkna takstolar'
        intro='Beräkna antal takstolar snabbt: fyll i takets längd och centrumavstånd (c/c) så gör kalkylatorn takstolsberäkningen åt dig – gratis och utan konto.'
        tool={<TakstolarKalkylatorTool />}
        leadForm={<ToolLeadForm tool="takstolar-kalkylator" />}
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
          { id: 'sa-raknar-du', heading: 'Så beräknar du antal takstolar', body: (<><p>Beräkningen av takstolar bygger på en enkel formel: <strong>antal = takets längd / c/c + 1</strong>. Den extra takstolen är för att både gavlarna ska få en takstol.</p><ol><li>Mät takets längd i meter.</li><li>Ange centrumavstånd (c/c) i mm.</li><li>Se antal takstolar direkt.</li></ol></>) },
          { id: 'exempel', heading: 'Exempel på takstolsberäkning', body: (<><p>Ett tak som är 10 meter långt med c/c 1200 mm: 10 000 / 1200 = 8,33, avrundat uppåt till 9, plus 1 = <strong>10 takstolar</strong>. Med tätare c/c 600 mm blir det i stället cirka 18 takstolar för samma tak – centrumavståndet styr alltså både antal och materialåtgång.</p></>) },
          { id: 'cc-avstand', heading: 'Vilket c/c-avstånd ska takstolarna ha?', body: (<><p>Centrumavståndet (c/c) beror på taktäckning, underlagstak och snölast. Vanliga avstånd är 1200 mm för prefabricerade fackverkstakstolar, men tätare c/c (t.ex. 600–900 mm) förekommer vid tung taktäckning eller hög snölast. Använd alltid det c/c som konstruktören angett för ditt tak.</p></>) },
          { id: 'info', heading: 'Antal vs. dimensionering av takstolar', body: (<><p>Den här kalkylatorn gör en <strong>beräkning av antal takstolar</strong> – inte en hållfasthetsberäkning. <strong>Dimensionering av takstolar</strong> (val av virkesdimensioner, spännvidd och infästning utifrån snö- och vindlast) ska göras av en konstruktör enligt Eurokod. Använd antalet härifrån för material och offert, och följ alltid konstruktörens ritning för utförandet.</p></>) },
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
