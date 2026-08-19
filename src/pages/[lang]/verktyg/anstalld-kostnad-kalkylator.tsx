import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import AnstalldKostnadKalkylatorTool from '../../../components/LeadMagnet/AnstalldKostnadKalkylatorTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad kostar en anställd egentligen?',
    answer:
      'Mer än lönen. Ovanpå bruttolönen tillkommer arbetsgivaravgifter (31,42 % för de flesta 2026), semesterlön (ofta 12 %) och omkostnader som försäkring, arbetskläder och verktyg. En månadslön på 34 000 kr landar ofta runt 50 000 kr i verklig månadskostnad.',
  },
  {
    question: 'Hur räknar jag kostnad per timme?',
    answer:
      'Dela den totala månadskostnaden med antalet debiterbara timmar per månad. Alla timmar är inte debiterbara – restid, möten och ställtid ingår inte, så räkna realistiskt (ofta 120–140 h/månad).',
  },
  {
    question: 'Hur hög är arbetsgivaravgiften 2026?',
    answer:
      'Den generella arbetsgivaravgiften är 31,42 % av bruttolönen. Vissa åldersgrupper kan ha nedsatt avgift – justera procentsatsen i kalkylatorn om det gäller din anställda.',
  },
  {
    question: 'Kostar kalkylatorn något?',
    answer: 'Nej, den är gratis och kräver inget konto.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function AnstalldKostnadKalkylatorPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/anstalld-kostnad-kalkylator`;
  const title = 'Vad kostar en anställd? Kalkylator (2026) | ByggExp';
  const description =
    'Räkna ut vad en anställd verkligen kostar: bruttolön + arbetsgivaravgift + semester + omkostnader, plus kostnad per debiterbar timme. Gratis kalkylator för byggföretag.';

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
        title="Vad kostar en anställd? – kalkylator"
        intro="Fyll i månadslönen så räknar kalkylatorn ut den verkliga kostnaden för en anställd: arbetsgivaravgift, semester och omkostnader – och vad den kostar per debiterbar timme. Alla procentsatser går att justera."
        tool={<AnstalldKostnadKalkylatorTool />}
        leadForm={<ToolLeadForm tool="anstalld-kostnad-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/anstalld-kostnad-preview.webp"
            alt="Förhandsvisning av kalkylator för vad en anställd kostar"
            caption="Så ser kalkylatorn ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'sa-mycket-mer-an-lonen',
            heading: 'Kostnaden är mycket mer än lönen',
            body: (
              <ul>
                <li><strong>Arbetsgivaravgift</strong> – 31,42 % av bruttolönen 2026.</li>
                <li><strong>Semesterlön</strong> – ofta 12 % (beror på kollektivavtal).</li>
                <li><strong>Omkostnader</strong> – försäkring, avtalspension, arbetskläder, verktyg och utbildning.</li>
                <li><strong>Ej debiterbar tid</strong> – restid, möten och ställtid som ändå ska betalas.</li>
              </ul>
            ),
          },
          {
            id: 'satt-ratt-timpris',
            heading: 'Använd kostnaden för att sätta rätt timpris',
            body: (
              <p>
                När du vet kostnaden per debiterbar timme kan du lägga på önskad marginal och få ett timpris som faktiskt
                bär företaget. Räknar du bara på lönen blir priset för lågt och marginalen försvinner.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om vad en anställd kostar"
        faq={FAQ}
        cta={{
          heading: 'Håll koll på tid och lönekostnad i ByggExp',
          text: 'Tidrapportering och personal samlat, så att du ser vad varje timme kostar. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/vad-kostar-en-anstalld-byggforetag`, label: 'Guide: vad kostar en anställd' },
          { href: `/${LOCALE}/blog/anstalla-personal-byggforetag`, label: 'Anställa personal' },
          { href: `/${LOCALE}/verktyg/timpris-kalkylator`, label: 'Timpris-kalkylator' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
