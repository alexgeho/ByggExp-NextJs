import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import EgenkontrollTool from '../../../components/LeadMagnet/EgenkontrollTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv-only lead magnet — dedicated ventilation page so "egenkontroll ventilation"
// lands on a page that is all about ventilation: the tool opens pre-filled with
// the ventilation preset and every section talks ventilation.
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad ska en egenkontroll för ventilation innehålla?',
    answer:
      'Projekt, ansvarig och datum samt kontrollpunkter med resultat. Typiska punkter är rensade och täta kanaler, don injusterade mot projekterade flöden, funktionstestade brandspjäll, komplett kanalisolering och ett upprättat injusteringsprotokoll.',
  },
  {
    question: 'Är egenkontroll för ventilation samma sak som OVK?',
    answer:
      'Nej. OVK (obligatorisk ventilationskontroll) är en återkommande myndighetskontroll som utförs av en certifierad kontrollant. Egenkontrollen är entreprenörens egen dokumenterade kontroll av att installationen är rätt utförd – men en väl ifylld egenkontroll gör en kommande OVK enklare.',
  },
  {
    question: 'Varför är injusteringsprotokoll viktigt?',
    answer:
      'Injusteringen visar att varje don ger rätt luftflöde enligt projekteringen. Utan protokoll går det inte att bevisa att ventilationen fungerar som avsett – ange därför flöden och att injusteringen är utförd i egenkontrollen.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) {
    return { notFound: true };
  }
  return { props: {} };
};

export default function EgenkontrollVentilationMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/egenkontroll-ventilation-mall`;

  const title = 'Egenkontroll ventilation – gratis mall (PDF) | ByggExp';
  const description =
    'Gratis egenkontroll-mall för ventilation. Fyll i täta kanaler, injustering av don, brandspjäll och isolering online och ladda ner som PDF – utan konto.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
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
        title="Egenkontroll ventilation – gratis mall att fylla i online"
        intro="Färdig egenkontroll för ventilation – täta kanaler, injustering av don, brandspjäll och isolering ligger redan ifyllda. Sätt resultat, kommentera anmärkningar och ladda ner som PDF. Gratis och utan konto."
        tool={<EgenkontrollTool defaultPreset="ventilation" />}
        leadForm={<ToolLeadForm tool="egenkontroll-ventilation-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/egenkontroll-preview.webp"
            alt="Förhandsvisning av ifylld egenkontroll för ventilation som PDF"
            caption="Så ser en ifylld egenkontroll för ventilation ut som PDF"
            width={1000}
            height={548}
          />
        }
        sections={[
          {
            id: 'vad-ar-egenkontroll-ventilation',
            heading: 'Vad är en egenkontroll för ventilation?',
            body: (
              <p>
                En egenkontroll för ventilation är installatörens egen dokumenterade kontroll av att
                ventilationsanläggningen är rätt utförd: kanalerna är täta och rensade, donen ger rätt
                flöde och brandspjällen fungerar. Den blir beviset på att anläggningen är kontrollerad
                innan den tas i drift och underlättar en kommande OVK.
              </p>
            ),
          },
          {
            id: 'kontrollpunkter-egenkontroll-ventilation',
            heading: 'Kontrollpunkter i en egenkontroll för ventilation',
            body: (
              <>
                <p>Mallen ovan öppnar redan ifylld med de vanligaste punkterna:</p>
                <ul>
                  <li><strong>Kanaler rensade och täta</strong> – ingen förorening kvar, täthetsklass uppfylld.</li>
                  <li><strong>Don injusterade mot projekterade flöden</strong> – varje don ger rätt luftmängd.</li>
                  <li><strong>Brandspjäll funktionstestade</strong> – stänger och öppnar som de ska.</li>
                  <li><strong>Isolering av kanaler komplett</strong> – där det krävs mot värme/kondens.</li>
                  <li><strong>Injusteringsprotokoll upprättat</strong> – flöden dokumenterade.</li>
                </ul>
                <p>Sätt resultat (godkänd, anmärkning eller ej aktuellt) och lägg till egna punkter för projektets krav.</p>
              </>
            ),
          },
          {
            id: 'sa-fyller-du-i-egenkontroll-ventilation',
            heading: 'Så fyller du i egenkontrollen steg för steg',
            body: (
              <ol>
                <li>Kontrollpunkterna ligger redan i tabellen ovan – lägg till egna vid behov.</li>
                <li>Fyll i projekt, ansvarig och datum.</li>
                <li>Sätt resultat på varje punkt och kommentera anmärkningar.</li>
                <li>Ladda ner egenkontrollen som PDF och signera.</li>
                <li>Åtgärda anmärkningar och följ upp att de är avklarade.</li>
              </ol>
            ),
          },
          {
            id: 'egenkontroll-ventilation-i-byggexp',
            heading: 'Så gör du egenkontroller för ventilation i ByggExp',
            body: (
              <p>
                Mallen ovan är gratis att använda. I ByggExp finns färdiga egenkontroll-mallar för el,
                VVS, ventilation, bygg och skyddsrond – du fyller i på plats, markerar resultat och samlar
                alla kontroller per projekt tillsammans med byggdagbok, foton och tid.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om egenkontroll för ventilation"
        faq={FAQ}
        cta={{
          heading: 'Gör egenkontroller för ventilation i ByggExp',
          text: 'Färdiga mallar för el, VVS, ventilation, bygg och skyddsrond – ifyllda på plats och samlade per projekt. Boka en demo och se hur det fungerar.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler guider och mallar"
        related={[
          { href: `/${LOCALE}/verktyg/egenkontroll-mall`, label: 'Egenkontroll – mall för alla yrken' },
          { href: `/${LOCALE}/verktyg/egenkontroll-vvs-mall`, label: 'Egenkontroll VVS – gratis mall' },
          { href: `/${LOCALE}/verktyg/egenkontroll-el-mall`, label: 'Egenkontroll el – gratis mall' },
          { href: `/${LOCALE}/verktyg/byggdagbok-mall`, label: 'Byggdagbok – gratis mall' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
