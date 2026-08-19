import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import SkyddsrondMallTool from '../../../components/LeadMagnet/SkyddsrondMallTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad är en skyddsrond?',
    answer:
      'En skyddsrond är en systematisk genomgång av arbetsplatsen för att hitta och åtgärda risker i arbetsmiljön. På bygget går man igenom bland annat ordning, fallskydd, ställningar, el, maskiner, skyddsutrustning och brand.',
  },
  {
    question: 'Hur ofta ska man gå skyddsrond?',
    answer:
      'Det finns ingen fast lagstadgad frekvens, men på en byggarbetsplats hålls skyddsrond regelbundet – ofta varje eller varannan vecka – och alltid när förhållandena ändras. Det är en del av det systematiska arbetsmiljöarbetet.',
  },
  {
    question: 'Vem deltar?',
    answer:
      'Vanligtvis skyddsombud och arbetsledning, och på större byggen byggarbetsmiljösamordnaren (Bas-U). Anmärkningar protokollförs med ansvarig och åtgärdsdatum.',
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

export default function SkyddsrondMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/skyddsrond-mall`;
  const title = 'Skyddsrond mall / protokoll gratis (PDF & Excel) | ByggExp';
  const description =
    'Ladda ner en gratis skyddsrond-mall för byggarbetsplatsen. Fyll i deltagare och kontrollpunkter (fallskydd, ställning, el, brand) och få ett färdigt protokoll som PDF.';

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
        title="Skyddsrond – gratis protokollmall"
        intro="Fyll i deltagare och kontrollpunkter och ladda ner ett färdigt skyddsrondsprotokoll som PDF eller Excel. En återkommande skyddsrond är kärnan i det systematiska arbetsmiljöarbetet på bygget."
        tool={<SkyddsrondMallTool />}
        leadForm={<ToolLeadForm tool="skyddsrond-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/skyddsrond-preview.webp"
            alt="Förhandsvisning av skyddsrond-mallen"
            caption="Så ser skyddsrond-mallen ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'vad-gas-igenom',
            heading: 'Vad går ni igenom på skyddsronden?',
            body: (
              <ul>
                <li>Ordning och städning – fria vägar, spill och avfall.</li>
                <li>Fallskydd, räcken, ställningar och stegar.</li>
                <li>El, maskiner, handverktyg och skyddsutrustning.</li>
                <li>Brand, heta arbeten, damm, buller och kemiska produkter.</li>
                <li>Första hjälpen och skyltning.</li>
              </ul>
            ),
          },
          {
            id: 'foljs-upp',
            heading: 'Anmärkning – ansvarig – klar',
            body: (
              <p>
                Poängen med protokollet är uppföljningen. Varje anmärkning ska ha en ansvarig och ett datum för när den
                ska vara åtgärdad, och nästa skyddsrond stämmer av att punkterna är stängda. Så blir arbetsmiljöarbetet
                systematiskt i stället för en engångsgenomgång.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om skyddsrond"
        faq={FAQ}
        cta={{
          heading: 'Egenkontroll och arbetsmiljö i ByggExp',
          text: 'Koppla checklistor och åtgärder till rätt projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/arbetsmiljoplan`, label: 'Arbetsmiljöplan (AMP)' },
          { href: `/${LOCALE}/blog/bas-p-bas-u`, label: 'BAS-P och BAS-U' },
          { href: `/${LOCALE}/blog/fallskydd-krav-bygg`, label: 'Fallskydd på bygget' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
