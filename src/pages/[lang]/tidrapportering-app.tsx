import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, type MouseEvent } from "react";

import CTA from "../../components/CTA/CTA";
import FaqList from "../../components/FaqList/FaqList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Lightbox from "../../components/Lightbox/Lightbox";
import PlanPriceSection from "../../components/Pricing/PlanPriceSection";
import { PROJEKT_PRICE } from "../../components/Pricing/Pricing";
import StepsCarousel from "../../components/StepsCarousel/StepsCarousel";
import { localeOrigin } from "../../lib/seo";
import { ctaTranslations } from "../../locales/CTA";
import { footerTranslations } from "../../locales/footer";
import { headerTranslations } from "../../locales/header";
import { pricingTranslations } from "../../locales/pricing";
import type { LandingLanguageCode } from "../../locales/languages";

// Landing page for trying the app for free ("tidrapportering app gratis",
// "testa tidrapport-app"). The head queries "tidrapportering bygg /
// tidrapporteringssystem bygg / tidrapportering app" belong to
// /sv/funktioner/tidrapporteringssystem-bygg (SEO 2026-11-19); this page links
// there in the lead and keeps its own angle: download the app, 14 days free.
// Same template as /sv/enmansforetag.
// Every claim comes from docs/seo/product-facts-verified.md — "gratis" means the
// 14-day trial only (there is no free plan). Swedish only.

type Props = { lang: LandingLanguageCode };

export const getStaticPaths: GetStaticPaths<Props> = async () => ({
  paths: [{ params: { lang: "sv" } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => ({
  props: { lang: params?.lang as LandingLanguageCode },
});

const SLUG = "tidrapportering-app";
const EXTRA_USER_PRICE = 69;
const ADDON_PRICE = 199;
const ZOOMABLE = ".em-hero-visual img, .features .step-visual img";

const APP_STORE = "https://apps.apple.com/se/app/id6748280779";
const GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=se.byggexp.app";

type Feature = {
  title: string;
  text: string;
  bullets?: string[];
  img: string;
  alt: string;
};

const FEATURES: Feature[] = [
  {
    title: "Stämpla in med GPS – eller manuellt",
    text: "Medarbetaren checkar in och ut i appen. Lämnar han arbetsplatsen pausas passet automatiskt.",
    bullets: [
      "Timmar per projekt",
      "Timtyp per pass: normal, övertid eller OB",
      "Restid och traktamente på passet",
    ],
    img: "/landing/features/1arbetspass-1200.webp",
    alt: "Arbetspass i ByggExp: timmar per medarbetare och dag i webben och i mobilen",
  },
  {
    title: "Se vilka som är på jobbet",
    text: "Status per medarbetare och projekt – i webben och i appen.",
    bullets: ["ID06 och andra certifikat med utgångsdatum på varje medarbetare"],
    img: "/landing/features/3personal-1200.webp",
    alt: "Personal i ByggExp: vilka som är på jobbet, i webben och i mobilen",
  },
  {
    title: "Attestera och skicka till lön",
    text: "Arbetsledaren eller admin godkänner timmarna – sedan exporterar du underlaget.",
    bullets: [
      "Tidrapport som PDF och Excel",
      "Timmar som CSV, lönekörning och AGI i Full koll",
      "ÄTA-timmar märks separat på passet",
    ],
    img: "/landing/features/12salary-1200.webp",
    alt: "Löner i ByggExp: timmar, timlön och export av CSV och AGI-underlag",
  },
];

const TABLE: [string, string][] = [
  ["In- och utcheckning", "GPS i mobilappen (iPhone och Android)"],
  ["Lämnar arbetsplatsen", "Passet pausas automatiskt"],
  ["Timtyp", "Normal, övertid eller OB – väljs per pass"],
  ["Restid och traktamente", "Km, minuter och hel eller halv traktamente"],
  ["ÄTA", "Timmarna märks med ÄTA på passet"],
  ["Attest", "Arbetsledare eller admin godkänner"],
  ["Export", "PDF, Excel och CSV; lönekörning och AGI-underlag i Full koll"],
  ["Personalliggare", "Per projekt ur in- och utcheckningarna, PDF eller CSV"],
  ["Bokföring", `SIE4-fil till Fortnox, Visma och BL (tillägg ${ADDON_PRICE} kr/mån)`],
  ["Gratis", "14 dagar med alla funktioner"],
];

const FAQ: { question: string; answer: string }[] = [
  {
    question: "Finns det en gratis app för tidrapportering?",
    answer: `ByggExp har ingen gratisversion, men du testar alla funktioner gratis i 14 dagar – utan startavgift och utan bindningstid. Därefter kostar paketet Koll på jobbet ${PROJEKT_PRICE} kr/mån exkl. moms, inklusive 10 användare.`,
  },
  {
    question: "Vad kostar tidrapporteringen i ByggExp?",
    answer: `${PROJEKT_PRICE} kr/mån exkl. moms för upp till 10 användare, därefter ${EXTRA_USER_PRICE} kr per extra användare. Medarbetare som bara använder mobilappen räknas bara när de har stämplat in de senaste 30 dagarna. Vid årsbetalning får du 15 % rabatt.`,
  },
  {
    question: "Fungerar appen på iPhone och Android?",
    answer:
      "Ja. Medarbetarna laddar ner ByggExp från App Store eller Google Play. Attest, löneunderlag och export gör du i webben.",
  },
  {
    question: "Kan jag föra över tidrapporten till lön och Fortnox?",
    answer: `Ja. Timmarna exporteras som PDF, Excel eller CSV, och med Full koll gör du lönekörningen och AGI-underlaget i ByggExp. Till Fortnox, Visma och BL exporterar du en SIE4-fil med tillägget Integrationer (${ADDON_PRICE} kr/mån).`,
  },
  {
    question: "Räknar appen OB och övertid enligt Byggavtalet?",
    answer:
      "Nej, inte automatiskt. Medarbetaren väljer timtyp per pass – normal, övertid eller OB – och i lönekörningen räknas bruttolönen som timmar gånger timlön. OB- och övertidstillägg enligt avtalet räknar ni själva.",
  },
  {
    question: "Hur kommer vi igång?",
    answer:
      "Boka en gratis konsultation. Vi sätter upp kontot, ni får 14 dagar gratis och vi flyttar över data från ert gamla system utan kostnad.",
  },
];

const RELATED: { href: string; label: string }[] = [
  { href: "/sv/funktioner/tidrapporteringssystem-bygg", label: "Tidrapportering bygg: hela systemet" },
  { href: "/sv/blog/app-for-tidrapportering-bygg", label: "Så funkar en tidrapport-app" },
  { href: "/sv/blog/basta-tidrapporteringssystem-bygg", label: "Tidrapporteringssystem jämförda" },
  { href: "/sv/verktyg/tidrapport-mall", label: "Gratis tidrapport-mall" },
  { href: "/sv/verktyg/ob-overtid-kalkylator", label: "OB- och övertidskalkylator" },
];

export default function TidrapporteringAppPage({
  lang,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const headerT = headerTranslations[lang];
  const ctaT = ctaTranslations[lang];
  const footerT = footerTranslations[lang];
  const pricingT = pricingTranslations[lang];
  const title = "Testa tidrapport-appen gratis i 14 dagar | ByggExp";
  const description = `Ladda ner ByggExp till iPhone eller Android och testa tidrapporteringen gratis i 14 dagar. Sedan ${PROJEKT_PRICE} kr/mån för 10 användare, ingen bindningstid.`;
  const origin = localeOrigin(lang);
  const canonicalUrl = `${origin}/${lang}/${SLUG}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "ByggExp",
      applicationCategory: "BusinessApplication",
      operatingSystem: "iOS, Android, Web",
      description,
      url: canonicalUrl,
      offers: {
        "@type": "Offer",
        price: PROJEKT_PRICE,
        priceCurrency: "SEK",
        description: "Koll på jobbet, per företag och månad exkl. moms, inkl. 10 användare",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hem", item: `${origin}/${lang}` },
        { "@type": "ListItem", position: 2, name: "Funktioner", item: `${origin}/${lang}/funktioner` },
        { "@type": "ListItem", position: 3, name: "Testa tidrapport-appen", item: canonicalUrl },
      ],
    },
  ];

  // Screenshots open full-size on click (same lightbox as /sv/enmansforetag).
  const [lightbox, setLightbox] = useState<string | null>(null);

  const openImage = (e: MouseEvent<HTMLElement>) => {
    const img = (e.target as HTMLElement).closest<HTMLImageElement>(ZOOMABLE);
    if (img) setLightbox(img.currentSrc || img.src);
  };

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
        <meta
          property="og:image"
          content={`${origin}/landing/features/shiftsExport.webp`}
        />
        {schema.map((s) => (
          <script
            key={s["@type"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
      </Head>
      <Header headerT={headerT} />

      <main className="em" onClick={openImage}>
        {/* HERO — white */}
        <section className="em-hero">
          <div className="container em-hero-inner">
            <div className="em-hero-content">
              <span className="em-pill">
                <span className="em-pill-dot" />
                För byggföretag
              </span>
              <h1>
                Testa tidrapport-appen. <span>Gratis i 14 dagar.</span>
              </h1>
              <p className="em-lead">
                Ladda ner appen, stämpla in med GPS och se timmarna på rätt
                projekt redan första dagen. Hela flödet från stämpling till lön
                beskriver vi under{" "}
                <Link href="/sv/funktioner/tidrapporteringssystem-bygg">
                  tidrapportering bygg
                </Link>
                .
              </p>
              <a href="#cta" className="btn-primary">
                Boka gratis konsultation
              </a>
              <ul className="em-checks">
                <li>14 dagar gratis</li>
                <li>Ingen bindningstid</li>
                <li>
                  <a href={APP_STORE} rel="noopener" target="_blank">
                    iPhone
                  </a>
                  &nbsp;och&nbsp;
                  <a href={GOOGLE_PLAY} rel="noopener" target="_blank">
                    Android
                  </a>
                </li>
              </ul>
            </div>
            <div className="em-hero-visual">
              <img
                className="em-hero-laptop"
                src="/landing/features/shiftsExport.webp"
                alt="Arbetspass i ByggExp: timmar per medarbetare i webben och i mobilappen"
              />
            </div>
          </div>
        </section>

        {/* FEATURES — same carousel as the home page "features" block */}
        <StepsCarousel
          heading={
            <>
              Från stämpling <em>till lön</em>
            </>
          }
          steps={FEATURES}
          prevLabel="Föregående"
          nextLabel="Nästa"
        />

        {/* PRICE — the "Koll på jobbet" card from the pricing block, as is */}
        <PlanPriceSection
          plan="projekt"
          lang={lang}
          pricingT={pricingT}
          heading={<>Paketet {pricingT.planProjekt}</>}
          lead="15 % rabatt vid årsbetalning"
          price={PROJEKT_PRICE}
          items={pricingT.projectItems}
          trial
          checks={["Ingen startavgift", "Ingen bindningstid"]}
          notes={["Alla priser exkl. moms."]}
        />

        {/* WHAT'S INCLUDED + FAQ — verktyg-page blocks (lead-magnet.scss) */}
        <section className="lead-magnet tr-app-more">
          <div className="container container-narrow">
            <section className="lead-magnet-section">
              <h2 className="lead-magnet-section-heading">
                Vad ingår i tidrapporteringen
              </h2>
              <div className="blog-article-content">
                <div className="article-table article-table--narrow">
                  <table>
                    <tbody>
                      {TABLE.map(([k, v]) => (
                        <tr key={k}>
                          <th scope="row">{k}</th>
                          <td>{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <FaqList
              headingId="tr-app-faq-heading"
              heading="Vanliga frågor"
              items={FAQ}
            />

            <nav className="lead-magnet-related" aria-label="Guider">
              <h2 className="lead-magnet-section-heading">Guider</h2>
              <ul className="lead-magnet-related-list">
                {RELATED.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      </main>

      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />

      <CTA ctaT={ctaT} />
      <Footer footerT={footerT} />
    </>
  );
}
