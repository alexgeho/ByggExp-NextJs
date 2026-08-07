import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import EgenkontrollTool from '../../../components/LeadMagnet/EgenkontrollTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv-only lead magnet — see content-value-strategy. Served on /sv, 404 elsewhere.
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad är skillnaden på byggherrens och entreprenörens egenkontroll?',
    answer:
      'I plan- och bygglagen (PBL) avses byggherrens egenkontroll, som dokumenteras i en kontrollplan. Inom entreprenadjuridiken menar man entreprenörens egenkontroll av kvalitet, miljö och arbetsmiljö. Den här mallen gäller entreprenörens egenkontroll.',
  },
  {
    question: 'Vad ska en egenkontroll innehålla?',
    answer:
      'Titel, projekt, ansvarig och datum samt kontrollpunkter med resultat (godkänd, anmärkning eller ej aktuellt) och eventuell kommentar. Kontrollerna görs ofta mot BBR och projektets krav.',
  },
  {
    question: 'Måste egenkontroll vara digital?',
    answer:
      'Nej, men det underlättar. Du kan fylla i mallen ovan och spara som PDF, eller göra egenkontroller löpande i ByggExp med färdiga mallar för el, VVS, bygg och skyddsrond.',
  },
  {
    question: 'Vem ansvarar för att egenkontrollen görs?',
    answer:
      'Den som utför arbetet ansvarar för sin egenkontroll, och en ansvarig person signerar. I byggherrens kontrollplan enligt PBL pekas kontrollansvarig (KA) ut för de kontroller som krävs där.',
  },
  {
    question: 'Vad menas med "Anmärkning" i en egenkontroll?',
    answer:
      'Anmärkning betyder att kontrollpunkten inte är godkänd och behöver åtgärdas. Notera avvikelsen i kommentaren, åtgärda och följ upp – dokumentationen visar att felet hanterats.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) {
    return { notFound: true };
  }
  return { props: {} };
};

export default function EgenkontrollMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/egenkontroll-mall`;

  const title = 'Egenkontroll mall – gratis mall & guide | ByggExp';
  const description =
    'Ladda ner en gratis egenkontroll-mall för kvalitet, miljö och arbetsmiljö – eller fyll i online och spara som PDF. Guide till egenkontroll enligt PBL och BBR.';

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
        title="Egenkontroll – gratis mall att fylla i online"
        intro="Med den här gratis egenkontroll-mallen dokumenterar du kontrollpunkter för kvalitet, miljö och arbetsmiljö och laddar ner en färdig PDF att signera. Fyll i online – eller gör egenkontroller löpande i ByggExp."
        tool={<EgenkontrollTool />}
        sections={[
          {
            id: 'vad-ar-egenkontroll',
            heading: 'Vad är en egenkontroll?',
            body: (
              <p>
                En egenkontroll är entreprenörens egen dokumenterade kontroll av att arbetet uppfyller
                kraven – inom kvalitet, miljö och arbetsmiljö. Den visar vad som kontrollerats, av vem
                och med vilket resultat, och blir ett bevis på utfört och godkänt arbete.
              </p>
            ),
          },
          {
            id: 'vad-ska-egenkontroll-innehalla',
            heading: 'Vad ska en egenkontroll innehålla?',
            body: (
              <ul>
                <li>Titel och kategori (kvalitet, miljö eller arbetsmiljö)</li>
                <li>Projekt, ansvarig och datum</li>
                <li>Kontrollpunkter – vad som ska kontrolleras</li>
                <li>Resultat: godkänd, anmärkning eller ej aktuellt</li>
                <li>Kommentar och underskrift av ansvarig</li>
              </ul>
            ),
          },
          {
            id: 'sa-fyller-du-i-egenkontroll',
            heading: 'Så fyller du i egenkontrollen steg för steg',
            body: (
              <ol>
                <li>
                  Välj en färdig mall ovan (el, VVS, bygg/stomme eller skyddsrond) så fylls
                  kontrollpunkterna i automatiskt – eller skriv egna punkter.
                </li>
                <li>Fyll i titel, projekt, ansvarig och datum.</li>
                <li>Gå igenom varje kontrollpunkt och sätt resultat: godkänd, anmärkning eller ej aktuellt.</li>
                <li>Skriv en kommentar där det behövs – särskilt vid anmärkningar och avvikelser.</li>
                <li>Ladda ner egenkontrollen som PDF och signera.</li>
                <li>Åtgärda eventuella anmärkningar och följ upp att de är avklarade.</li>
              </ol>
            ),
          },
          {
            id: 'vanliga-misstag-egenkontroll',
            heading: 'Vanliga misstag att undvika',
            body: (
              <ul>
                <li>
                  <strong>För generella punkter.</strong> Anpassa kontrollpunkterna efter projektets
                  risker – fokusera på de kritiska momenten, inte en lång lista onödiga kontroller.
                </li>
                <li>
                  <strong>Ingen koppling till norm.</strong> Ange referens (t.ex. BBR eller en
                  SS-standard) där kontrollen görs mot ett krav.
                </li>
                <li>
                  <strong>Anmärkningar utan uppföljning.</strong> En anmärkning som inte åtgärdas och
                  följs upp är värdelös som bevis.
                </li>
                <li>
                  <strong>Egenkontrollen görs i efterhand.</strong> Fyll i löpande medan arbetet pågår,
                  inte veckor senare.
                </li>
              </ul>
            ),
          },
          {
            id: 'egenkontroll-pbl-bbr',
            heading: 'Egenkontroll och lagen – PBL och BBR',
            body: (
              <p>
                Begreppet egenkontroll finns i <strong>plan- och bygglagen (PBL)</strong>, men avser då
                byggherrens egenkontroll som dokumenteras i en <strong>kontrollplan</strong> – den
                beskriver vad som ska kontrolleras, av vem och mot vad, ofta med{' '}
                <strong>BBR (Boverkets byggregler)</strong> som referens. Entreprenörens egenkontroll,
                som den här mallen gäller, är det praktiska sättet att visa att arbetet uppfyller de
                kraven moment för moment.
              </p>
            ),
          },
          {
            id: 'egenkontroll-i-byggexp',
            heading: 'Så gör du egenkontroller i ByggExp',
            body: (
              <p>
                Mallen ovan är gratis att använda. I ByggExp finns färdiga egenkontroll-mallar för el,
                VVS, bygg/stomme och skyddsrond – du fyller i på plats, markerar resultat och samlar
                alla kontroller per projekt.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om egenkontroll"
        faq={FAQ}
        cta={{
          heading: 'Gör egenkontroller i ByggExp',
          text: 'Färdiga mallar för el, VVS, bygg och skyddsrond – ifyllda på plats och samlade per projekt. Boka en demo och se hur det fungerar.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler guider och mallar"
        related={[
          { href: `/${LOCALE}/verktyg/byggdagbok-mall`, label: 'Byggdagbok – gratis mall' },
          { href: `/${LOCALE}/verktyg/tidrapport-mall`, label: 'Tidrapport – gratis mall' },
          { href: `/${LOCALE}/blog/dokumentera-med-foton-pa-bygget`, label: 'Dokumentera med foton på bygget' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
