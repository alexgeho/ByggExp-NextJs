import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import RestlistaMallTool from '../../../components/LeadMagnet/RestlistaMallTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad är en restlista?',
    answer:
      'En restlista (punchlista) är en lista över kvarstående punkter som ska åtgärdas innan ett projekt är helt klart – ofta fel och brister som noteras vid slutbesiktning. Varje punkt har plats, anmärkning, ansvarig och en åtgärdstidpunkt.',
  },
  {
    question: 'Skillnaden på restlista och besiktningsutlåtande?',
    answer:
      'Besiktningsmannens utlåtande fastställer om entreprenaden är godkänd och listar noterade fel. Restlistan är entreprenörens arbetsverktyg för att fördela och bocka av åtgärderna fram till efterbesiktning.',
  },
  {
    question: 'När används en restlista?',
    answer:
      'I slutskedet – från slutbesiktning fram till överlämning. Den säkerställer att inga punkter glöms bort och att ansvaret för varje åtgärd är tydligt.',
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

export default function RestlistaMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/restlista-mall`;
  const title = 'Restlista / punchlista mall gratis (PDF & Excel) | ByggExp';
  const description =
    'Ladda ner en gratis restlista/punchlista-mall för byggprojekt. Fyll i kvarstående punkter med plats, ansvarig och åtgärdsdatum och få en färdig lista som PDF eller Excel.';

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
        title="Restlista / punchlista – gratis mall"
        intro="Fyll i projektuppgifter och kvarstående punkter och ladda ner en färdig restlista som PDF eller Excel att dela och bocka av. Ett enkelt sätt att stänga alla punkter mellan slutbesiktning och överlämning."
        tool={<RestlistaMallTool />}
        leadForm={<ToolLeadForm tool="restlista-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/restlista-preview.webp"
            alt="Förhandsvisning av restlista-mallen"
            caption="Så ser restlista-mallen ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'vad-ska-med',
            heading: 'Vad ska en restlista innehålla?',
            body: (
              <ul>
                <li>Projekt, datum och vem som upprättat listan.</li>
                <li>Varje punkt: plats/utrymme, anmärkning, ansvarig och när den ska vara klar.</li>
                <li>Status så att åtgärdade punkter kan bockas av.</li>
              </ul>
            ),
          },
          {
            id: 'sa-stanger-du-punkterna',
            heading: 'Så stänger du punkterna i tid',
            body: (
              <p>
                Fördela ansvaret direkt, sätt realistiska datum och dokumentera åtgärderna – gärna med foto. En tydlig
                restlista gör efterbesiktningen enkel och minskar risken för tvist om vad som återstod.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om restlista"
        faq={FAQ}
        cta={{
          heading: 'Följ upp punkter som uppgifter i ByggExp',
          text: 'Restpunkter blir uppgifter med ansvarig och påminnelse, och projektets etapper visar procent klart. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/slutbesiktning`, label: 'Guide: slutbesiktning' },
          { href: `/${LOCALE}/blog/overlamning-relationshandlingar`, label: 'Överlämning och relationshandlingar' },
          { href: `/${LOCALE}/verktyg/egenkontroll-mall`, label: 'Egenkontroll-mall (PDF)' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
