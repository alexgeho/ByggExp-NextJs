import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import GolvvarmeKalkylatorTool from '../../../components/LeadMagnet/GolvvarmeKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Hur lång slinga behöver jag för golvvärme?', answer: 'Ungefär ytan delat med c/c-avståndet: 20 m² med c/c 200 mm ger cirka 100 meter rör. Lägg till rör för tillopp och retur.' },
  { question: 'Hur långt kan en slinga vara?', answer: 'Ofta max cirka 100–120 meter per slinga beroende på rördimension. Ange max slinglängd så räknas antal slingor ut.' },
  { question: 'Vilket c/c-avstånd ska jag ha?', answer: 'Vanligt är 150–300 mm beroende på rum och värmebehov. Tätare c/c ger mer rör men jämnare värme.' },
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
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/golvvarme-kalkylator`;
  const title = 'Golvvärme kalkylator – slinglängd och antal slingor | ByggExp';
  const description = 'Räkna ut slinglängd och antal slingor för vattenburen golvvärme utifrån yta och centrumavstånd (c/c). Gratis kalkylator, utan konto.';

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
        title='Golvvärme'
        intro='Fyll i ytan och centrumavståndet (c/c) mellan rören så räknar vi ut ungefärlig slinglängd och antal slingor.'
        tool={<GolvvarmeKalkylatorTool />}
        leadForm={<ToolLeadForm tool="golvvarme-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/golvvarme-preview.webp"
            alt='Förhandsvisning av golvvärme'
            caption='Så ser golvvärme ut'
            width={1000}
            height={474}
          />
        }
        sections={[
          { id: 'sa-raknar-du', heading: 'Så räknar du ut golvvärmen', body: (<><ol><li>Räkna ut ytan i m².</li><li>Ange c/c-avstånd mellan rören.</li><li>Ange max slinglängd per slinga.</li><li>Se ungefärlig slinglängd och antal slingor.</li></ol></>) },
          { id: 'info', heading: 'Glöm inte tillopp och retur', body: (<><p>Slinglängden ovan är för själva golvytan. Räkna med extra rör fram och tillbaka till fördelaren, och håll dig inom maxlängden per slinga för ett jämnt flöde.</p></>) },
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
          { href: `/${LOCALE}/verktyg/kvadratmeter-kalkylator`, label: 'Kvadratmeterberäknare' },
          { href: `/${LOCALE}/verktyg/reglar-kalkylator`, label: 'Reglar & virke' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
