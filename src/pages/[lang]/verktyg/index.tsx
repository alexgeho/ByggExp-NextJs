import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

type Tool = { slug: string; title: string; description: string };
type Group = { heading: string; tools: Tool[] };

const GROUPS: Group[] = [
  {
    heading: 'Kalkylatorer',
    tools: [
      { slug: 'rot-avdrag-kalkylator', title: 'ROT-avdrag kalkylator', description: 'Räkna ut ROT-avdraget och vad kunden betalar (2026).' },
      { slug: 'moms-kalkylator', title: 'Momskalkylator', description: 'Lägg på eller räkna baklänges från moms (25/12/6 %).' },
    ],
  },
  {
    heading: 'Mallar',
    tools: [
      { slug: 'byggdagbok-mall', title: 'Byggdagbok', description: 'Fyll i dagens arbete och ladda ner som PDF.' },
      { slug: 'tidrapport-mall', title: 'Tidrapport', description: 'Timmar per dag, vecka eller månad – PDF eller Excel.' },
      { slug: 'egenkontroll-mall', title: 'Egenkontroll', description: 'Färdiga checklistor för el, VVS, bygg och skyddsrond.' },
    ],
  },
  {
    heading: 'PDF-verktyg',
    tools: [
      { slug: 'sla-ihop-pdf', title: 'Slå ihop PDF', description: 'Kombinera flera PDF:er och bilder till en fil.' },
      { slug: 'dela-pdf', title: 'Dela PDF', description: 'Plocka ut valfria sidor till en ny PDF.' },
      { slug: 'bild-till-pdf', title: 'Bild till PDF', description: 'Gör en PDF av JPG- och PNG-bilder.' },
      { slug: 'pdf-till-jpg', title: 'PDF till JPG', description: 'Konvertera varje sida till en bild.' },
      { slug: 'rotera-pdf', title: 'Rotera PDF', description: 'Vrid sidorna 90, 180 eller 270 grader.' },
      { slug: 'ta-bort-sidor-pdf', title: 'Ta bort sidor', description: 'Ta bort sidor och behåll resten.' },
      { slug: 'vattenstampel-pdf', title: 'Vattenstämpel', description: 'Lägg UTKAST, KOPIA m.m. på alla sidor.' },
      { slug: 'signera-pdf', title: 'Signera PDF', description: 'Rita din signatur och placera den i PDF:en.' },
    ],
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function VerktygHubPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg`;
  const title = 'Gratis verktyg för byggföretag – mallar, PDF & kalkylatorer | ByggExp';
  const description =
    'Gratis verktyg för byggföretag: ROT- och momskalkylator, mallar (byggdagbok, tidrapport, egenkontroll) och PDF-verktyg (slå ihop, dela, signera m.m.). Utan konto.';

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
      </Head>

      <Header headerT={headerT} />

      <main className="verktyg-hub">
        <div className="container container-narrow">
          <header className="verktyg-hub-hero">
            <span className="lead-magnet-badge">Gratis verktyg</span>
            <h1>Gratis verktyg för byggföretag</h1>
            <p>
              Mallar och PDF-verktyg som gör vardagen enklare – gratis och utan konto. PDF-verktygen
              körs i din webbläsare, filerna laddas aldrig upp.
            </p>
          </header>

          {GROUPS.map((group) => (
            <section key={group.heading} className="verktyg-hub-group">
              <h2>{group.heading}</h2>
              <div className="verktyg-hub-grid">
                {group.tools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/${LOCALE}/verktyg/${tool.slug}`}
                    className="verktyg-hub-card"
                  >
                    <h3>{tool.title}</h3>
                    <p>{tool.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer footerT={footerT} />
    </>
  );
}
