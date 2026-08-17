import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import StaketKalkylatorTool from '../../../components/LeadMagnet/StaketKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Hur många stolpar behöver jag till staketet?', answer: 'Antal sektioner är längden delat med stolpavståndet, avrundat uppåt. Antal stolpar är sektioner + 1.' },
  { question: 'Vilket avstånd mellan staketstolpar?', answer: 'Ofta 2–2,5 meter, men det beror på staketets typ och vindlast. Tätare avstånd ger stadigare staket.' },
  { question: 'Ingår grinden?', answer: 'Nej, räkna grind och eventuella hörnstolpar separat.' },
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
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/staket-kalkylator`;
  const title = 'Staketberäknare – antal stolpar och sektioner | ByggExp';
  const description = 'Räkna ut antal stolpar och sektioner för ett staket utifrån längden och avståndet mellan stolparna. Gratis staketberäknare, utan konto.';

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
        title='Staketberäknare'
        intro='Fyll i staketets längd och avståndet mellan stolparna (c/c) så räknar vi ut antal stolpar och sektioner.'
        tool={<StaketKalkylatorTool />}
        leadForm={<ToolLeadForm tool="staket-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/staket-preview.webp"
            alt='Förhandsvisning av staketberäknare'
            caption='Så ser staketberäknare ut'
            width={1000}
            height={474}
          />
        }
        sections={[
          { id: 'sa-raknar-du', heading: 'Så räknar du ut staketet', body: (<><ol><li>Mät staketets längd i meter.</li><li>Ange avståndet mellan stolparna (c/c).</li><li>Se antal stolpar och sektioner.</li></ol></>) },
          { id: 'info', heading: 'Tänk på stabiliteten', body: (<><p>Kortare stolpavstånd ger ett stadigare staket, särskilt för höga plank eller blåsiga lägen. Gräv ner eller gjut fast stolparna ordentligt.</p></>) },
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
          { href: `/${LOCALE}/verktyg/grus-kalkylator`, label: 'Grus & makadam' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
