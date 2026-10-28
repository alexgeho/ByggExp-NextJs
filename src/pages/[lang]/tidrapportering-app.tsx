import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import { useEffect, useRef, useState, type MouseEvent } from "react";

import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { PROJEKT_PRICE, PlanUsers } from "../../components/Pricing/Pricing";
import { localeOrigin } from "../../lib/seo";
import { ctaTranslations } from "../../locales/CTA";
import { footerTranslations } from "../../locales/footer";
import { headerTranslations } from "../../locales/header";
import { pricingTranslations } from "../../locales/pricing";
import type { LandingLanguageCode } from "../../locales/languages";

// Product landing page for "tidrapportering app" / "tidrapportering app gratis".
// Commercial intent; the blog cluster (tidrapportering, app-for-tidrapportering-bygg …)
// stays informational and links here. Same template as /sv/enmansforetag.
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
      "Löneunderlag och AGI-underlag som CSV",
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
  ["Export", "PDF, Excel, löne-CSV och AGI-underlag"],
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
    answer: `Ja, som PDF, Excel, löne-CSV och AGI-underlag. Till Fortnox, Visma och BL exporterar du en SIE4-fil med tillägget Integrationer (${ADDON_PRICE} kr/mån).`,
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
  { href: "/sv/funktioner/tidrapporteringssystem-bygg", label: "Tidrapporteringssystem för bygg" },
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
  const title = "Tidrapportering app för bygg – 14 dagar gratis | ByggExp";
  const description = `Tidrapportering i mobilen: stämpla in med GPS, timmar per projekt, attest och export till lön. iPhone och Android. 14 dagar gratis, sedan ${PROJEKT_PRICE} kr/mån.`;
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
        { "@type": "ListItem", position: 3, name: "Tidrapportering app", item: canonicalUrl },
      ],
    },
  ];

  // Screenshots open full-size on click (same lightbox as /sv/enmansforetag).
  const [lightbox, setLightbox] = useState<string | null>(null);

  // Features carousel — same scrolling as components/Features (gap 24px there).
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const cardStep = () => {
    const card = sliderRef.current?.querySelector<HTMLElement>(".step");
    return card ? card.offsetWidth + 24 : 0;
  };
  const scrollToSlide = (n: number) => {
    const step = cardStep();
    if (!step || n < 0 || n >= FEATURES.length) return;
    sliderRef.current?.scrollTo({ left: n * step, behavior: "smooth" });
    setActiveSlide(n);
  };
  const handleSliderScroll = () => {
    const step = cardStep();
    if (step && sliderRef.current)
      setActiveSlide(Math.round(sliderRef.current.scrollLeft / step));
  };
  const openImage = (e: MouseEvent<HTMLElement>) => {
    const img = (e.target as HTMLElement).closest<HTMLImageElement>(ZOOMABLE);
    if (img) setLightbox(img.currentSrc || img.src);
  };
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

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
                Tidrapportering app för bygget. <span>Testa 14 dagar gratis.</span>
              </h1>
              <p className="em-lead">
                Medarbetarna stämplar in med GPS och timmarna hamnar på rätt
                projekt – klara för attest och lön.
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
        <section className="features">
          <div className="container">
            <div className="section-head">
              <h2>
                Från stämpling <em>till lön</em>
              </h2>
            </div>
            <div className="features-slider">
              <button
                type="button"
                className="features-arrow features-arrow-left"
                onClick={() => scrollToSlide(activeSlide - 1)}
                disabled={activeSlide === 0}
                aria-label="Föregående"
              >
                ‹
              </button>
              <div
                className="featuresOptions"
                ref={sliderRef}
                onScroll={handleSliderScroll}
              >
                {FEATURES.map((f) => (
                  <div className="step" key={f.title}>
                    <div className="step-text-block">
                      <h3>{f.title}</h3>
                      <p className="step-text">{f.text}</p>
                      {f.bullets ? (
                        <ul className="step-bullets">
                          {f.bullets.map((b, n) => (
                            <li key={b}>
                              <span className="number">{n + 1}</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                    <div className="step-visual">
                      <div className="phone-shell">
                        <img
                          src={f.img}
                          alt={f.alt}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="features-arrow features-arrow-right"
                onClick={() => scrollToSlide(activeSlide + 1)}
                disabled={activeSlide === FEATURES.length - 1}
                aria-label="Nästa"
              >
                ›
              </button>
            </div>
            <div className="features-controls">
              <div className="features-dots">
                {FEATURES.map((f, n) => (
                  <span
                    key={f.title}
                    className={activeSlide === n ? "active" : ""}
                    onClick={() => scrollToSlide(n)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRICE — the "Koll på jobbet" card from the pricing block, as is */}
        <section className="em-price">
          <div className="container em-price-inner">
            <div className="em-price-head">
              <h2>Paketet {pricingT.planProjekt}</h2>
              <p className="em-lead">15 % rabatt vid årsbetalning</p>
            </div>
            <div className="em-price-card">
              <div className="pricing-card">
                <div className="pricing-card-top">
                  <span className="pricing-tag pricing-tag-purple">
                    {pricingT.planProjekt}
                  </span>
                </div>
                <div className="pricing-price">
                  <span className="num">{PROJEKT_PRICE}</span>
                  <span className="per">{pricingT.pricingPer}</span>
                </div>
                <PlanUsers pricingT={pricingT} plan="projekt" lang={lang} />
                <div className="pricing-groups">
                  <div className="pricing-group">
                    <h3 className="pricing-group-title">
                      {pricingT.planProjektSub}
                    </h3>
                    <ul className="pricing-list">
                      {pricingT.projectItems.map((item) => (
                        <li key={item}>
                          <span className="check check-purple">
                            <svg
                              viewBox="0 0 14 10"
                              fill="none"
                              aria-hidden="true"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m1 5 4 4 8-8"
                              />
                            </svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a href="#cta" className="btn-primary">
                  {pricingT.pricingButton}
                </a>
                <span className="pricing-trial">{pricingT.pricingTrial}</span>
              </div>
              <ul className="em-checks">
                <li>Ingen startavgift</li>
                <li>Ingen bindningstid</li>
              </ul>
              <p className="pricing-limit-note">
                Alla priser exkl. moms.
              </p>
            </div>
          </div>
        </section>

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

            <section
              className="lead-magnet-faq"
              aria-labelledby="tr-app-faq-heading"
            >
              <h2
                id="tr-app-faq-heading"
                className="lead-magnet-section-heading"
              >
                Vanliga frågor
              </h2>
              <dl className="lead-magnet-faq-list">
                {FAQ.map((item) => (
                  <div key={item.question} className="lead-magnet-faq-item">
                    <dt>{item.question}</dt>
                    <dd>{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>

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

      {lightbox && (
        <div className="image-lightbox" onClick={() => setLightbox(null)}>
          <button
            type="button"
            className="image-lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Stäng"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="m5 5 14 14M19 5 5 19"
              />
            </svg>
          </button>
          <img
            src={lightbox}
            alt=""
            className="image-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <CTA ctaT={ctaT} />
      <Footer footerT={footerT} />
    </>
  );
}
