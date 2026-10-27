import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import { useEffect, useRef, useState, type MouseEvent } from "react";

import CTA from "../../../components/CTA/CTA";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import {
  FUNKTION_PAGE_SLUGS,
  getFunktionPage,
  illuSrc,
  illuSrcSet,
  ILLU_HEIGHT,
  PLAN_PRICE,
} from "../../../content/funktion-pages";
import { localeOrigin } from "../../../lib/seo";
import { ctaTranslations } from "../../../locales/CTA";
import { footerTranslations } from "../../../locales/footer";
import { headerTranslations } from "../../../locales/header";
import { pricingTranslations } from "../../../locales/pricing";
import type { LandingLanguageCode } from "../../../locales/languages";

// Commercial feature pages /sv/funktioner/<slug> (Swedish only). Same template
// as /sv/tidrapportering-app: hero → feature steps (real screenshots) → long
// content → FAQ → price → CTA. Content + claims live in content/funktion-pages.ts.

type Props = { lang: LandingLanguageCode; slug: string };

export const getStaticPaths: GetStaticPaths<Props> = async () => ({
  paths: FUNKTION_PAGE_SLUGS.map((slug) => ({ params: { lang: "sv", slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => ({
  props: {
    lang: params?.lang as LandingLanguageCode,
    slug: params?.slug as string,
  },
});

const ZOOMABLE = ".features .step-visual img";

export default function FunktionPage({
  lang,
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const page = getFunktionPage(slug)!;
  const headerT = headerTranslations[lang];
  const ctaT = ctaTranslations[lang];
  const footerT = footerTranslations[lang];
  const pricingT = pricingTranslations[lang];
  const origin = localeOrigin(lang);
  const canonicalUrl = `${origin}/${lang}/funktioner/${page.slug}`;
  const heroImage = `${origin}${illuSrc(page.hero.name)}`;
  const isKomplett = page.plan === "komplett";
  const isFaktura = page.plan === "faktura";
  const planName = isKomplett
    ? pricingT.planKomplett
    : isFaktura
      ? pricingT.planFaktura
      : pricingT.planProjekt;
  const planSub = isKomplett
    ? pricingT.planKomplettSub
    : isFaktura
      ? pricingT.planFakturaSub
      : pricingT.planProjektSub;
  const planItems = isKomplett
    ? pricingT.komplettItems
        .slice(0, -1)
        .map((item) =>
          item
            .replace("{projekt}", pricingT.planProjekt)
            .replace("{faktura}", pricingT.planFaktura),
        )
    : isFaktura
      ? pricingT.financeItems
          .filter((item) => !item.includes("(kommer snart)"))
          .map((item) => item.replace(/\*$/, ""))
      : pricingT.projectItems;
  const accent = isKomplett ? "green" : isFaktura ? "blue" : "purple";
  const usersText = isFaktura ? "max 2 användare" : "inkl. 10 användare";
  const { price } = PLAN_PRICE[page.plan];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "ByggExp",
      applicationCategory: "BusinessApplication",
      operatingSystem: "iOS, Android, Web",
      description: page.description,
      url: canonicalUrl,
      offers: {
        "@type": "Offer",
        price,
        priceCurrency: "SEK",
        description: `${planName}, per företag och månad exkl. moms, ${usersText}`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((item) => ({
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
        { "@type": "ListItem", position: 3, name: page.name, item: canonicalUrl },
      ],
    },
  ];

  // Screenshots open full-size on click (same lightbox as /sv/tidrapportering-app).
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
    if (!step || n < 0 || n >= page.steps.length) return;
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

  const multiStep = page.steps.length > 1;

  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={heroImage} />
        {schema.map((s) => (
          <script
            key={s["@type"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
      </Head>
      <Header headerT={headerT} />

      <main className="em fn" onClick={openImage}>
        {/* HERO — white, 3D illustration on the right */}
        <section className="em-hero">
          <div className="container em-hero-inner">
            <div className="em-hero-content">
              <nav className="fn-crumbs" aria-label="Brödsmulor">
                <a href={`/${lang}/funktioner`}>Funktioner</a>
                <span aria-hidden="true">/</span>
                <span>{page.name}</span>
              </nav>
              <h1>
                {page.h1} <span>{page.h1Accent}</span>
              </h1>
              <p className="em-lead">{page.lead}</p>
              <a href="#cta" className="btn-primary">
                Boka gratis konsultation
              </a>
              <ul className="em-checks">
                <li>14 dagar gratis</li>
                <li>Ingen bindningstid</li>
                <li>{page.heroCheck}</li>
              </ul>
            </div>
            <div className="em-hero-visual fn-hero-visual">
              <img
                src={illuSrc(page.hero.name)}
                srcSet={illuSrcSet(page.hero.name)}
                sizes="(max-width: 900px) 100vw, 560px"
                width={1200}
                height={ILLU_HEIGHT[page.hero.name]}
                fetchPriority="high"
                decoding="async"
                alt={page.hero.alt}
              />
            </div>
          </div>
        </section>

        {/* FEATURE STEPS — same carousel as the home page "features" block */}
        <section className="features">
          <div className="container">
            <div className="section-head">
              <h2>
                {page.stepsHeading[0]} <em>{page.stepsHeading[1]}</em>
              </h2>
            </div>
            <div className="features-slider">
              {multiStep && (
                <button
                  type="button"
                  className="features-arrow features-arrow-left"
                  onClick={() => scrollToSlide(activeSlide - 1)}
                  disabled={activeSlide === 0}
                  aria-label="Föregående"
                >
                  ‹
                </button>
              )}
              <div
                className="featuresOptions"
                ref={sliderRef}
                onScroll={handleSliderScroll}
              >
                {page.steps.map((f) => (
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
              {multiStep && (
                <button
                  type="button"
                  className="features-arrow features-arrow-right"
                  onClick={() => scrollToSlide(activeSlide + 1)}
                  disabled={activeSlide === page.steps.length - 1}
                  aria-label="Nästa"
                >
                  ›
                </button>
              )}
            </div>
            {multiStep && (
              <div className="features-controls">
                <div className="features-dots">
                  {page.steps.map((f, n) => (
                    <span
                      key={f.title}
                      className={activeSlide === n ? "active" : ""}
                      onClick={() => scrollToSlide(n)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* LONG CONTENT — white, blog article typography */}
        <section className="fn-article">
          <div className="container container-narrow">
            <div
              className="blog-article-content"
              dangerouslySetInnerHTML={{ __html: page.body }}
            />
          </div>
        </section>

        {/* FAQ + GUIDES — verktyg-page blocks (lead-magnet.scss) */}
        <section className="lead-magnet tr-app-more">
          <div className="container container-narrow">
            <section
              className="lead-magnet-faq"
              aria-labelledby="fn-faq-heading"
            >
              <h2 id="fn-faq-heading" className="lead-magnet-section-heading">
                Vanliga frågor
              </h2>
              <dl className="lead-magnet-faq-list">
                {page.faq.map((item) => (
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
                {page.related.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {/* PRICE — the page's package card from the pricing block (page.plan) */}
        <section className="em-price">
          <div className="container em-price-inner">
            <div className="em-price-head">
              <h2>Paketet {planName}</h2>
              <p className="em-lead">{page.priceIncluded}</p>
            </div>
            <div className="em-price-card">
              <div className="pricing-card">
                <div className="pricing-card-top">
                  <span className={`pricing-tag pricing-tag-${accent}`}>
                    {planName}
                  </span>
                </div>
                <div className="pricing-price">
                  <span className="num">{price}</span>
                  <span className="per">{pricingT.pricingPer}</span>
                </div>
                <div className="pricing-groups">
                  <div className="pricing-group">
                    <h3 className="pricing-group-title">
                      {planSub}
                    </h3>
                    <ul className="pricing-list">
                      {planItems.map((item) => (
                        <li key={item}>
                          <span className={`check check-${accent}`}>
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
              </div>
              <p className="pricing-limit-note">
                14 dagar gratis · Ingen bindningstid · exkl. moms
              </p>
            </div>
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
