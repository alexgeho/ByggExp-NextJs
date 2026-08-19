import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import EfterkalkylMallTool from '../../../components/LeadMagnet/EfterkalkylMallTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad är en efterkalkyl?',
    answer:
      'En efterkalkyl jämför anbudet/förkalkylen med det verkliga utfallet per post när jobbet är klart. Den visar var pengarna faktiskt gick och var marginalen läckte – kunskap du tar med till nästa anbud.',
  },
  {
    question: 'Varför ska jag göra efterkalkyl?',
    answer:
      'Utan efterkalkyl upprepar du samma kalkylfel om och om igen. Genom att se avvikelsen mellan kalkylerat och verkligt hittar du de poster som konsekvent underskattas – ofta arbetstid och ej fakturerad ÄTA.',
  },
  {
    question: 'Vad ska jag jämföra?',
    answer:
      'Per post: kalkylerad kostnad, verklig kostnad och avvikelsen. Räkna även ut kalkylerad kontra verklig marginal på hela jobbet.',
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

export default function EfterkalkylMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/efterkalkyl-mall`;
  const title = 'Efterkalkyl mall bygg gratis (PDF & Excel) | ByggExp';
  const description =
    'Ladda ner en gratis efterkalkyl-mall. Jämför anbud mot verkligt utfall per post, hitta marginalläckaget och räkna rätt på nästa jobb. Som PDF eller Excel.';

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
        title="Efterkalkyl – gratis mall"
        intro="Fyll i anbud mot verkligt utfall per post och ladda ner en färdig efterkalkyl som PDF eller Excel. Hitta var marginalen läcker och räkna rätt på nästa jobb i stället för att upprepa samma kalkylfel."
        tool={<EfterkalkylMallTool />}
        leadForm={<ToolLeadForm tool="efterkalkyl-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/efterkalkyl-preview.webp"
            alt="Förhandsvisning av efterkalkyl-mallen"
            caption="Så ser efterkalkyl-mallen ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'sa-hittar-du-laumlckaget',
            heading: 'Så hittar du marginalläckaget',
            body: (
              <p>
                Jämför varje post – arbetstid, material, UE, förbrukning – mellan kalkyl och verkligt utfall. De poster
                som avviker mest är där du ska justera nästa kalkyl. I bygg är det oftast arbetstiden och ej fakturerade
                ÄTA-arbeten som äter marginalen, inte materialpriset.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om efterkalkyl"
        faq={FAQ}
        cta={{
          heading: 'Projektekonomi i ByggExp',
          text: 'Koppla tid, inköp och ÄTA per projekt så efterkalkylen blir enkel. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/efterkalkyl-bygg-kalkyluppfoljning`, label: 'Guide: efterkalkyl' },
          { href: `/${LOCALE}/blog/tackningsbidrag-byggforetag`, label: 'Täckningsbidrag' },
          { href: `/${LOCALE}/verktyg/paslag-marginal-kalkylator`, label: 'Påslag & marginal-kalkylator' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
