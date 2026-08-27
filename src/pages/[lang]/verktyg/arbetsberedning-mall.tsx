import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import ArbetsberedningMallTool from '../../../components/LeadMagnet/ArbetsberedningMallTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv-only lead magnet — see content-value-strategy. Serves the query
// "arbetsberedning mall": fill in a work-preparation online and download as PDF.
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad är en arbetsberedning?',
    answer:
      'En arbetsberedning är en planering av ett enskilt arbetsmoment innan det utförs. Man går igenom arbetsgången steg för steg, vilka risker som finns och vilka skyddsåtgärder som krävs, samt kvalitetskrav, resurser (material, maskiner, verktyg) och miljöhänsyn. Syftet är att momentet blir säkert, rätt utfört och effektivt.',
  },
  {
    question: 'När ska en arbetsberedning göras?',
    answer:
      'Inför kritiska, riskfyllda eller komplicerade arbetsmoment – till exempel elementmontage, lyft, arbete på hög höjd, schakt eller rivning. Den görs innan momentet startar och gås igenom med hela laget vid till exempel morgonmötet. Uppdatera den om förhållandena ändras.',
  },
  {
    question: 'Vad är skillnaden på arbetsberedning och riskbedömning?',
    answer:
      'En riskbedömning fokuserar på arbetsmiljörisker och skyddsåtgärder. En arbetsberedning är bredare: den planerar hela momentet – arbetsgång, kvalitet, resurser och miljö – och innehåller riskbedömningen som en del. Har du redan en riskbedömning kan den vävas in i beredningen.',
  },
  {
    question: 'Vem ansvarar för arbetsberedningen?',
    answer:
      'Oftast arbetsledaren eller platschefen tillsammans med de som ska utföra arbetet. Att laget är med och tar fram beredningen gör att riskerna fångas bättre och att alla vet hur momentet ska göras.',
  },
  {
    question: 'Kostar mallen något?',
    answer: 'Nej, den är gratis och kräver inget konto. Fyll i online och ladda ner som PDF eller Excel.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function ArbetsberedningMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/arbetsberedning-mall`;
  const title = 'Arbetsberedning mall – gratis (PDF & Excel) | ByggExp';
  const description =
    'Gratis arbetsberedning-mall för bygget. Planera arbetsmomentet steg för steg – arbetsgång, risker och skyddsåtgärder, kvalitet och resurser – och ladda ner som PDF. Utan konto.';

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
        title="Arbetsberedning – gratis mall att fylla i online"
        intro="Planera ett arbetsmoment innan det utförs – arbetsgång steg för steg, risker och skyddsåtgärder, kvalitetskrav, resurser och miljö. Fyll i online och ladda ner en färdig arbetsberedning som PDF eller Excel. Gratis och utan konto."
        tool={<ArbetsberedningMallTool />}
        leadForm={<ToolLeadForm tool="arbetsberedning-mall" />}
        preview={
          <PreviewImage
            src="/landing/blog/arbetsberedning-mall-bygg.webp"
            alt="Förhandsvisning av en ifylld arbetsberedning för bygget"
            caption="Så ser en ifylld arbetsberedning ut"
            width={1000}
            height={548}
          />
        }
        sections={[
          {
            id: 'vad-ar-arbetsberedning',
            heading: 'Vad är en arbetsberedning?',
            body: (
              <>
                <p>
                  En arbetsberedning är en genomtänkt planering av ett enskilt arbetsmoment innan det
                  utförs. I stället för att «lösa det på plats» går laget igenom hur momentet ska göras,
                  vilka risker som finns och hur de byggs bort, samt vad som krävs för att det ska bli
                  rätt utfört första gången.
                </p>
                <p>
                  Den används framför allt inför kritiska, riskfyllda eller komplicerade moment –
                  elementmontage, tunga lyft, arbete på hög höjd, schakt och rivning – men är lika
                  användbar för alla moment där kvalitet, säkerhet och tidsplan hänger ihop.
                </p>
              </>
            ),
          },
          {
            id: 'vad-ska-arbetsberedning-innehalla',
            heading: 'Vad ska en arbetsberedning innehålla?',
            body: (
              <ul>
                <li>
                  <strong>Arbetsmoment och plats</strong> – vad ska utföras, var och när.
                </li>
                <li>
                  <strong>Deltagare</strong> – vilka utför momentet och vilka behörigheter som krävs.
                </li>
                <li>
                  <strong>Arbetsgång steg för steg</strong> – förberedelser, utförande och avslut i rätt
                  ordning.
                </li>
                <li>
                  <strong>Risker och skyddsåtgärder</strong> – identifierade risker och hur de hanteras.
                </li>
                <li>
                  <strong>Kvalitet och kontroll</strong> – krav, toleranser och egenkontroll.
                </li>
                <li>
                  <strong>Resurser</strong> – material, maskiner, lyftutrustning och verktyg som behövs.
                </li>
                <li>
                  <strong>Miljö</strong> – avfall, farliga ämnen, buller och damm.
                </li>
                <li>
                  <strong>Genomgång och uppföljning</strong> – när beredningen gås igenom med laget.
                </li>
              </ul>
            ),
          },
          {
            id: 'sa-gor-du-arbetsberedning',
            heading: 'Så gör du arbetsberedningen steg för steg',
            body: (
              <ol>
                <li>Beskriv arbetsmomentet och var det ska utföras.</li>
                <li>Bryt ner arbetsgången i steg – förberedelser, utförande och avslut.</li>
                <li>Identifiera riskerna i varje steg och bestäm skyddsåtgärder.</li>
                <li>Ange kvalitetskrav och hur utförandet egenkontrolleras.</li>
                <li>Lista resurser: material, maskiner, verktyg och behörigheter.</li>
                <li>Ladda ner arbetsberedningen som PDF och gå igenom den med laget före start.</li>
              </ol>
            ),
          },
          {
            id: 'arbetsberedning-vs-riskbedomning',
            heading: 'Arbetsberedning eller riskbedömning?',
            body: (
              <p>
                De två hänger ihop men är inte samma sak. En{' '}
                <a href={`/${LOCALE}/verktyg/riskbedomning-mall`}>riskbedömning</a> fokuserar på
                arbetsmiljöriskerna och vilka skyddsåtgärder som krävs. Arbetsberedningen är bredare –
                den planerar hela momentet: arbetsgång, kvalitet, resurser och miljö, med
                riskbedömningen som en integrerad del. I praktiken gör en bra arbetsberedning att
                riskbedömningen inte blir en isolerad pappersövning utan en naturlig del av hur jobbet
                ska utföras.
              </p>
            ),
          },
          {
            id: 'vanliga-misstag-arbetsberedning',
            heading: 'Vanliga misstag att undvika',
            body: (
              <ul>
                <li>
                  <strong>Görs för sent.</strong> En arbetsberedning som tas fram när momentet redan
                  pågår fyller ingen funktion – gör den innan start.
                </li>
                <li>
                  <strong>Laget är inte med.</strong> De som utför arbetet ser riskerna bäst. Ta fram
                  och gå igenom beredningen tillsammans.
                </li>
                <li>
                  <strong>Bara risker, ingen arbetsgång.</strong> Utan en tydlig ordning på momenten
                  missas både kvalitet och effektivitet.
                </li>
                <li>
                  <strong>Ingen uppföljning.</strong> Ändras förhållandena ska beredningen uppdateras,
                  inte ligga kvar i pärmen.
                </li>
              </ul>
            ),
          },
          {
            id: 'arbetsberedning-i-byggexp',
            heading: 'Så samlar du arbetsberedningar i ByggExp',
            body: (
              <p>
                Mallen ovan är gratis att använda. I ByggExp kan du samla arbetsberedningar,
                riskbedömningar och egenkontroller per projekt – ifyllda på plats och kopplade till rätt
                moment. Du gör beredningen tillgänglig för laget, följer upp att skyddsåtgärderna är på
                plats och har dokumentationen redo när skyddsombud eller beställare frågar. Eftersom allt
                ligger tillsammans med byggdagbok, foton och tid får du en samlad bild av både säkerhet
                och kvalitet i projektet.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om arbetsberedning"
        faq={FAQ}
        cta={{
          heading: 'Arbetsmiljö och egenkontroll i ByggExp',
          text: 'Samla arbetsberedningar, riskbedömningar och egenkontroller per projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/verktyg/riskbedomning-mall`, label: 'Riskbedömning – gratis mall' },
          { href: `/${LOCALE}/verktyg/skyddsrond-mall`, label: 'Skyddsrond-mall' },
          { href: `/${LOCALE}/verktyg/egenkontroll-mall`, label: 'Egenkontroll – gratis mall' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
