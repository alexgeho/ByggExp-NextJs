import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import MangdforteckningMallTool from '../../../components/LeadMagnet/MangdforteckningMallTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad är en mängdförteckning?',
    answer:
      'En mängdförteckning är en strukturerad lista över de poster och mängder som ingår i ett byggprojekt, ofta med enhet och á-pris. Den gör anbud jämförbara och minskar tvister om vad som ingick.',
  },
  {
    question: 'Vad ska en post innehålla?',
    answer:
      'Beskrivning av arbetet, mängd, enhet (m², lpm, st, m³) och á-pris. Summan per post är mängd × á-pris. Mallen har fält för varje post och en totalsumma.',
  },
  {
    question: 'Skiljer sig mängdförteckning från offert?',
    answer:
      'Mängdförteckningen är det tekniska underlaget med poster och mängder. Offerten är erbjudandet till kunden. De hänger ihop – en tydlig mängdförteckning ger en tydlig offert.',
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

export default function MangdforteckningMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/mangdforteckning-mall`;
  const title = 'Mängdförteckning mall gratis (PDF & Excel) | ByggExp';
  const description =
    'Ladda ner en gratis mängdförteckning-mall. Fyll i poster med mängd, enhet och á-pris och få ett färdigt kalkylunderlag som PDF eller Excel. För byggföretag och hantverkare.';

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
        title="Mängdförteckning – gratis mall"
        intro="Fyll i projektets poster med mängd, enhet och á-pris och ladda ner en färdig mängdförteckning som PDF eller Excel. Ett tydligt kalkylunderlag ger jämförbara anbud och färre tvister om vad som ingick."
        tool={<MangdforteckningMallTool />}
        leadForm={<ToolLeadForm tool="mangdforteckning-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/mangdforteckning-preview.webp"
            alt="Förhandsvisning av mängdförteckning-mallen"
            caption="Så ser mängdförteckning-mallen ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'sa-gor-du',
            heading: 'Så gör du en bra mängdförteckning',
            body: (
              <ul>
                <li>Dela upp projektet i tydliga poster i logisk ordning.</li>
                <li>Ange mängd och rätt enhet (m², lpm, st, m³) för varje post.</li>
                <li>Sätt á-pris per post och summera – lätt att uppdatera vid ändringar.</li>
                <li>Notera förutsättningar så att det framgår vad som ingår och inte.</li>
              </ul>
            ),
          },
          {
            id: 'fran-mangd-till-offert',
            heading: 'Från mängdförteckning till offert',
            body: (
              <p>
                När mängderna är fastställda är steget till offert kort: lägg på arbete, moms och eventuellt ROT-avdrag.
                Använd vår <a href={`/${LOCALE}/verktyg/offert-mall`}>offertmall</a> för att skapa ett proffsigt erbjudande av underlaget.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om mängdförteckning"
        faq={FAQ}
        cta={{
          heading: 'Kalkylera och offerera i ByggExp',
          text: 'Samla kalkyl, offert och inköp på ett ställe. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/mangdforteckning-bygg`, label: 'Guide: mängdförteckning' },
          { href: `/${LOCALE}/blog/skriva-offert`, label: 'Skriva offert' },
          { href: `/${LOCALE}/verktyg/offert-mall`, label: 'Offert-mall (PDF)' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
