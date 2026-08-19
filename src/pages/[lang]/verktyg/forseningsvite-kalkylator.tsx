import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import ForseningsviteKalkylatorTool from '../../../components/LeadMagnet/ForseningsviteKalkylatorTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Hur mycket är förseningsvite?',
    answer:
      'Vitet är det som avtalats – ofta en procentsats av kontraktssumman per påbörjad förseningsvecka, vanligen mellan 0,5 och 2 %. Är inget vite avtalat utgår i stället ersättning för styrkt skada.',
  },
  {
    question: 'Räknas påbörjad vecka som hel vecka?',
    answer:
      'Ja, vite beräknas normalt per påbörjad vecka. En försening på nio dagar räknas alltså som två veckor. Kalkylatorn rundar upp till hel vecka automatiskt.',
  },
  {
    question: 'Finns det ett tak för vitet?',
    answer:
      'Parterna kan avtala om ett takbelopp, ofta en procentandel av kontraktssumman. Fyll i takbeloppet i kalkylatorn så begränsas summan automatiskt.',
  },
  {
    question: 'Måste vitet skrivas in i avtalet?',
    answer:
      'Ja. Vite gäller bara om det uttryckligen avtalats. Saknas en vitesklausul måste beställaren styrka sin faktiska skada för att få ersättning för förseningen.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function ForseningsviteKalkylatorPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/forseningsvite-kalkylator`;
  const title = 'Förseningsvite kalkylator – räkna ut vitet gratis | ByggExp';
  const description =
    'Räkna ut förseningsvite i en entreprenad gratis: procent av kontraktssumman per påbörjad vecka, med valfritt takbelopp. Se vitet direkt enligt AB 04/ABT 06.';

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
        title="Förseningsvite – räkna ut vitet i entreprenaden"
        intro="Ange kontraktssumman, den avtalade vitessatsen per vecka och antal veckors försening. Kalkylatorn räknar ut förseningsvitet enligt AB 04/ABT 06 och tar hänsyn till ett eventuellt takbelopp."
        tool={<ForseningsviteKalkylatorTool />}
        leadForm={<ToolLeadForm tool="forseningsvite-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/forseningsvite-preview.webp"
            alt="Förhandsvisning av förseningsvite-kalkylatorn"
            caption="Så ser förseningsvite-kalkylatorn ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'sa-fungerar-forseningsvite',
            heading: 'Så fungerar förseningsvite',
            body: (
              <>
                <p>
                  Förseningsvite är ett i förväg bestämt belopp som utgår när entreprenaden blir försenad. I
                  AB 04 och ABT 06 anges vitet som en procentsats av kontraktssumman per påbörjad vecka.
                  Fördelen är att beställaren slipper bevisa sin faktiska skada – vitet ersätter skadeståndet.
                </p>
                <p>
                  Exempel: en kontraktssumma på 1&nbsp;000&nbsp;000 kr, 1 % per vecka och 4 veckors försening ger
                  1&nbsp;000&nbsp;000 × 0,01 × 4 = <strong>40&nbsp;000 kr</strong> i vite.
                </p>
              </>
            ),
          },
          {
            id: 'fallan',
            heading: 'Vanliga fällor',
            body: (
              <ul>
                <li>Vite måste vara <strong>skriftligt avtalat</strong> för att gälla.</li>
                <li>Kontrollera från vilken tidpunkt förseningen räknas (kontraktstid + eventuell tidsförlängning för ÄTA och hinder).</li>
                <li>Har ni avtalat ett takbelopp begränsas vitet – fyll i det i kalkylatorn.</li>
              </ul>
            ),
          },
        ]}
        embedSlug="forseningsvite-kalkylator"
        embedTitle="Förseningsvite-kalkylator"
        faqHeading="Vanliga frågor om förseningsvite"
        faq={FAQ}
        cta={{
          heading: 'Håll koll på tider och ÄTA i ByggExp',
          text: 'Dokumentera tidsförlängning, hinder och ÄTA så att vitesdiskussionen blir enkel. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/forseningsvite-entreprenad`, label: 'Guide: förseningsvite' },
          { href: `/${LOCALE}/blog/ab-04-och-abt-06`, label: 'AB 04 och ABT 06' },
          { href: `/${LOCALE}/verktyg/ata-mall`, label: 'ÄTA-mall (PDF)' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
