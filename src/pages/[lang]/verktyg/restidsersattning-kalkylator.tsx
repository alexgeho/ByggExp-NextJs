import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import RestidsersattningKalkylatorTool from '../../../components/LeadMagnet/RestidsersattningKalkylatorTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv-only — Byggavtalet-specific. Serves "restidsersättning byggnads",
// "reseersättning bygg", "milersättning byggnads".
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Är restidsersättning och reskostnadsersättning samma sak?',
    answer:
      'Nej. Restidsersättning betalar för den tid resan tar, reskostnadsersättning betalar för resvägen/kostnaden (bil, samåkning eller kollektivtrafik). De kan utgå samtidigt för samma resa – den ena för timmarna, den andra för kilometrarna – och redovisas på egna rader.',
  },
  {
    question: 'Hur mycket är reskostnadsersättningen för egen bil?',
    answer:
      'Enligt Byggavtalet 2025/26 är den 2,50 kr/km (25 kr/mil) för egen bil, och ersättning utgår när enkel resväg överstiger 2 km. Vid samåkning får föraren 2,50 kr/km plus 0,85 kr/km per passagerare, och passageraren 0,85 kr/km. Satserna revideras 1 maj – kontrollera aktuellt belopp mot avtalet.',
  },
  {
    question: 'Vilken restidssats gäller?',
    answer:
      'Restidssatsen (kr/tim) är avtalsberoende och revideras, därför är den inte förifylld här – hämta gällande sats ur Byggavtalets egen text och fyll i den. Undvik siffror i kr/mil som egentligen hör hemma i plåt-, ventilations- eller VVS-avtalen.',
  },
  {
    question: 'Är reseersättningen skattefri?',
    answer:
      'Milersättning är skattefri upp till 25 kr/mil (2,50 kr/km) enligt Skatteverket 2026 – belopp däröver blir skattepliktig lön. Restidsersättning är ersättning för tid och beskattas som lön. Kollektivavtalet styr vad du betalar ut, Skatteverket styr vad som är skattefritt.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function RestidsersattningKalkylatorPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/restidsersattning-kalkylator`;
  const metaTitle = 'Restids- & reseersättning kalkylator (Byggavtalet) | ByggExp';
  const description =
    'Räkna ut reskostnadsersättning och restidsersättning enligt Byggavtalet gratis: egen bil 2,50 kr/km, samåkning, restimmar × avtalssats. Håll posterna på egna rader.';

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
        title="Restids- och reseersättning – räkna enligt Byggavtalet"
        intro="Fyll i resväg, resdagar och färdsätt så räknar kalkylatorn ut reskostnadsersättningen – och lägg till restimmar och restidssats för restidsersättningen. Två poster, egna rader. Gratis och utan konto."
        tool={<RestidsersattningKalkylatorTool />}
        leadForm={<ToolLeadForm tool="restidsersattning-kalkylator" />}
        sections={[
          {
            id: 'reskostnad',
            heading: 'Reskostnadsersättning – betalning för resvägen',
            body: (
              <ul>
                <li>Utgår när <strong>enkel resväg överstiger 2 km</strong>.</li>
                <li><strong>Egen bil:</strong> 2,50 kr/km (25 kr/mil).</li>
                <li><strong>Samåkning:</strong> föraren får 2,50 kr/km plus 0,85 kr/km per passagerare; passageraren 0,85 kr/km.</li>
                <li><strong>Kollektivtrafik:</strong> mot uppvisat kvitto.</li>
                <li>Capad vid avtalets traktamentesnivå per dag. Satserna revideras 1 maj.</li>
              </ul>
            ),
          },
          {
            id: 'restid',
            heading: 'Restidsersättning – betalning för tiden',
            body: (
              <p>
                Restidsersättning träder in när resan går utanför den fria zonen eller till en
                förrättning, och ersätter <strong>tiden</strong> – inte kilometrarna. Reskostnad och
                restid kan utgå samtidigt för samma resa. Restidssatsen är avtalsberoende och revideras,
                så hämta den ur gällande Byggavtal. Läs hela genomgången i guiden om{' '}
                <a href={`/${LOCALE}/blog/restidsersattning-byggavtalet`}>restidsersättning och reseersättning i Byggavtalet</a>.
              </p>
            ),
          },
          {
            id: 'skatt',
            heading: 'Kollektivavtalet betalar – Skatteverket beskattar',
            body: (
              <p>
                Kollektivavtalet styr vad du betalar ut, Skatteverket styr vad som är skattefritt.
                Skattefri milersättning är 25 kr/mil (2,50 kr/km) 2026 – allt avtalet betalar däröver
                blir skattepliktig lön med arbetsgivaravgifter. Restidsersättning beskattas som lön.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om restids- och reseersättning"
        faq={FAQ}
        cta={{
          heading: 'Rätt reseunderlag – automatiskt i ByggExp',
          text: 'Låt tidrapporteringen fånga restid, resväg och timmar per projekt, så blir reseräkningen och lönen korrekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/restidsersattning-byggavtalet`, label: 'Guide: restids- och reseersättning' },
          { href: `/${LOCALE}/verktyg/ob-overtid-kalkylator`, label: 'OB & övertid kalkylator' },
          { href: `/${LOCALE}/verktyg/tidrapport-mall`, label: 'Tidrapport-mall (PDF)' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
