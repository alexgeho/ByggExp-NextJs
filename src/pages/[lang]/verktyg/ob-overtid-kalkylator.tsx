import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import ObOvertidKalkylatorTool from '../../../components/LeadMagnet/ObOvertidKalkylatorTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv-only — Byggavtalet is Swedish-market specific. Serves "räkna ob/övertid",
// "ob tillägg byggnads", "övertidsersättning byggavtalet".
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Hur räknar man ut OB-tillägg enligt Byggavtalet?',
    answer:
      'OB-tillägget är en procentsats på din utgående lön. Byggavtalet har tre nivåer (§ 2 p5): OB 1 = 20 % (morgon kl 05–06), OB 2 = 40 % (kväll kl 18–22) och OB 3 = 70 % (natt kl 22–05 samt hela lördag, söndag och helgdag). Tillägg per timme = timlön × procentsatsen.',
  },
  {
    question: 'Vilka övertidsnivåer gäller i Byggavtalet?',
    answer:
      'Övertid har fyra nivåer (§ 2 p6.1), också i procent på utgående lön: A = 30 % (enkel övertid, vardag ca 06–17), B = 50 % (kl 05–06 och 17–19), C = 70 % (kl 19–22) och D = 100 % (kvalificerad övertid: natt 22–05 samt hela lördag, söndag och helgdag).',
  },
  {
    question: 'Vad menas med utgående lön?',
    answer:
      'Utgående lön är den fastställda tim- eller månadslönen inklusive utfall av rörlig lönedel (prestations- eller tidlön). OB och övertid räknas på utgående lön, inte enbart på grundtimlönen – annars blir underlaget för lågt om den anställde har rörlig lönedel.',
  },
  {
    question: 'Kan man få både OB och övertid samtidigt?',
    answer:
      'Nej. Byggavtalets nyckelregel är att OB och övertid aldrig utges samtidigt för samma timme. När övertidsersättning betalas ska OB inte betalas – arbetar du övertid en lördagkväll är det övertidsprocenten som gäller.',
  },
  {
    question: 'Hur räknar jag om månadslön till timlön för OB och övertid?',
    answer:
      'Byggavtalet anger en specifik formel (inte den generiska 173,3): (månadslönen × 12) / (52 × genomsnittlig veckoarbetstid). Använd den timlönen som underlag i kalkylatorn.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function ObOvertidKalkylatorPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/ob-overtid-kalkylator`;
  const metaTitle = 'OB- och övertidskalkylator (Byggavtalet) – räkna gratis | ByggExp';
  const description =
    'Räkna ut OB-tillägg och övertidsersättning enligt Byggavtalet gratis. Fyll i timlön och timmar, välj nivå (OB 20/40/70 % eller övertid 30/50/70/100 %) och se tillägget direkt.';

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
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
        wide
        badge="Gratis kalkylator"
        title="OB och övertid – räkna ut tillägget enligt Byggavtalet"
        intro="Fyll i din utgående timlön och antal timmar, välj OB- eller övertidsnivå, så räknar kalkylatorn ut tillägget per timme och totalt. Satserna följer Byggavtalet § 2. Gratis och utan konto."
        tool={<ObOvertidKalkylatorTool />}
        leadForm={<ToolLeadForm tool="ob-overtid-kalkylator" />}
        sections={[
          {
            id: 'ob-nivaer',
            heading: 'OB-ersättningens tre nivåer (§ 2 p5)',
            body: (
              <ul>
                <li><strong>OB 1 = 20 %</strong> – tidig morgon kl 05–06.</li>
                <li><strong>OB 2 = 40 %</strong> – kväll kl 18–22.</li>
                <li><strong>OB 3 = 70 %</strong> – natt kl 22–05 samt hela lördag, söndag och helgdag.</li>
                <li>Vardagstid kl 06–18 är ordinarie tid utan OB.</li>
              </ul>
            ),
          },
          {
            id: 'overtid-nivaer',
            heading: 'Övertidens fyra nivåer (§ 2 p6.1)',
            body: (
              <ul>
                <li><strong>Övertid A = 30 %</strong> – enkel övertid, vardag ca kl 06–17.</li>
                <li><strong>Övertid B = 50 %</strong> – kl 05–06 och 17–19.</li>
                <li><strong>Övertid C = 70 %</strong> – kl 19–22.</li>
                <li><strong>Övertid D = 100 %</strong> – kvalificerad övertid: natt kl 22–05 samt hela lördag, söndag och helgdag.</li>
              </ul>
            ),
          },
          {
            id: 'rakna-pa-ratt-underlag',
            heading: 'Räkna på rätt underlag – och aldrig OB och övertid samtidigt',
            body: (
              <>
                <p>
                  Både OB och övertid är procent på <strong>utgående lön</strong> – den fastställda
                  tim- eller månadslönen inklusive rörlig lönedel – inte enbart på grundtimlönen. Räknar
                  du på grundtimlönen när den anställde har rörlig lönedel blir ersättningen för låg.
                </p>
                <p>
                  Nyckelregeln som många missar: OB och övertid utges <strong>aldrig samtidigt</strong> för
                  samma timme. När övertidsersättning betalas ska OB inte betalas. Läs hela genomgången
                  med räkneexempel i guiden om att{' '}
                  <a href={`/${LOCALE}/blog/ob-overtid-byggavtalet-rakna`}>räkna OB och övertid enligt Byggavtalet</a>.
                </p>
              </>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om OB och övertid"
        faq={FAQ}
        cta={{
          heading: 'Rätt OB och övertid – automatiskt i ByggExp',
          text: 'Låt tidrapporteringen i mobilen fånga tiderna och räkna OB och övertid enligt Byggavtalet, som blir löneunderlag direkt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/ob-overtid-byggavtalet-rakna`, label: 'Guide: räkna OB och övertid' },
          { href: `/${LOCALE}/blog/restidsersattning-byggavtalet`, label: 'Restidsersättning i Byggavtalet' },
          { href: `/${LOCALE}/verktyg/tidrapport-mall`, label: 'Tidrapport-mall (PDF)' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
