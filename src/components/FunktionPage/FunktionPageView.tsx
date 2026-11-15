import { useState, type MouseEvent } from "react";
import Head from "next/head";

import CTA from "../CTA/CTA";
import FaqList from "../FaqList/FaqList";
import Footer from "../Footer/Footer";
import FunktionHero, { FUNKTION_HERO_UI } from "./FunktionHero";
import Header from "../Header/Header";
import Lightbox from "../Lightbox/Lightbox";
import PlanPriceSection from "../Pricing/PlanPriceSection";
import StepsCarousel from "../StepsCarousel/StepsCarousel";
import {
  getFunktionPage,
  illuSrc,
  PLAN_PRICE,
} from "../../content/funktion-pages";
import { funksjonHreflang, getFunksjonPageNb } from "../../content/funksjon-pages-nb";
import { illuRows } from "../../lib/illu-rows";
import { inlineCtas } from "../../lib/inline-cta";
import { localeOrigin } from "../../lib/seo";
import { shotRows } from "../../lib/shot-rows";
import { ctaTranslations } from "../../locales/CTA";
import { footerTranslations } from "../../locales/footer";
import { headerTranslations } from "../../locales/header";
import { pricingTranslations } from "../../locales/pricing";
import type { LandingLanguageCode } from "../../locales/languages";

// Commercial feature page template, shared by /sv/funktioner/<slug> and
// /nb/funksjoner/<slug> (byggexp.no). Same layout as /sv/tidrapportering-app:
// hero → feature steps (real screenshots) → long content → FAQ → price → CTA.
// The hero is the shared FunktionHero (its UI strings: FUNKTION_HERO_UI).
// Content + claims live in content/funktion-pages*.ts (sv) and
// content/funksjon-pages-nb.ts (nb). UI strings per language below; sv output
// is unchanged by the nb support.

const UI = {
  sv: {
    folder: "funktioner",
    ...FUNKTION_HERO_UI.sv,
    home: "Hem",
    prev: "Föregående",
    next: "Nästa",
    faq: "Vanliga frågor",
    faqSub: "Det byggföretag brukar fråga.",
    guides: "Guider",
    guidesSub: "Mer om samma ämne.",
    priceNote: "14 dagar gratis · Ingen bindningstid · exkl. moms",
    close: "Stäng",
    offerPer: "per företag och månad exkl. moms",
  },
  nb: {
    folder: "funksjoner",
    ...FUNKTION_HERO_UI.nb,
    home: "Hjem",
    prev: "Forrige",
    next: "Neste",
    faq: "Vanlige spørsmål",
    faqSub: "Det byggefirmaer pleier å spørre om.",
    guides: "Guider",
    guidesSub: "Mer om samme tema.",
    priceNote: "14 dager gratis · Ingen bindingstid · eks. mva.",
    close: "Lukk",
    offerPer: "per bedrift og måned eks. mva.",
  },
} as const;

type Props = { lang: LandingLanguageCode; slug: string };

const ZOOMABLE = ".features .step-visual img";

export default function FunktionPageView({ lang, slug }: Props) {
  const isNb = lang === "nb";
  const ui = isNb ? UI.nb : UI.sv;
  const page = (isNb ? getFunksjonPageNb(slug) : getFunktionPage(slug))!;
  const headerT = headerTranslations[lang];
  const ctaT = ctaTranslations[lang];
  const footerT = footerTranslations[lang];
  const pricingT = pricingTranslations[lang];
  const origin = localeOrigin(lang);
  const canonicalUrl = `${origin}/${lang}/${ui.folder}/${page.slug}`;
  // hreflang sv ↔ nb only where both markets have a page with the same intent.
  const alternates = funksjonHreflang(lang, page.slug);
  const heroImage = `${origin}${illuSrc(page.hero.name)}`;
  const isKomplett = page.plan === "komplett";
  const isFaktura = page.plan === "faktura";
  const planName = isKomplett
    ? pricingT.planKomplett
    : isFaktura
      ? pricingT.planFaktura
      : pricingT.planProjekt;
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
  const usersText = isFaktura ? ui.usersFaktura : ui.usersIncluded;
  // Fair-use limits of Koll på pengarna, first sentence only (no "*").
  const fakturaLimit = `${pricingT.fakturaLimitNote
    .replace(/^\*\s*/, "")
    .split(". ")[0]
    .replace(/\.$/, "")}.`;
  const { price } = PLAN_PRICE[page.plan];
  // R20: the long text repeats the page's own CTA after every third section.
  const bodyHtml = inlineCtas(
    shotRows(illuRows(page.body)),
    `<div class="fn-inline-cta"><a href="#cta" class="btn-primary">${ui.cta}</a></div>`,
  );

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
        priceCurrency: lang === "nb" ? "NOK" : "SEK",
        description: `${planName}, ${ui.offerPer}, ${usersText}`,
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
        { "@type": "ListItem", position: 1, name: ui.home, item: `${origin}/${lang}` },
        { "@type": "ListItem", position: 2, name: ui.hub, item: `${origin}/${lang}/funktioner` },
        { "@type": "ListItem", position: 3, name: page.name, item: canonicalUrl },
      ],
    },
  ];

  // Screenshots open full-size on click (same lightbox as /sv/tidrapportering-app).
  const [lightbox, setLightbox] = useState<string | null>(null);

  const openImage = (e: MouseEvent<HTMLElement>) => {
    const img = (e.target as HTMLElement).closest<HTMLImageElement>(ZOOMABLE);
    if (img) setLightbox(img.currentSrc || img.src);
  };

  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <link rel="canonical" href={canonicalUrl} />
        {alternates.map((alt) => (
          <link key={alt.hrefLang} rel="alternate" hrefLang={alt.hrefLang} href={alt.href} />
        ))}
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
        {/* HERO — white, 3D illustration on the right (shared with the
            feature articles, R33) */}
        <FunktionHero
          lang={isNb ? "nb" : "sv"}
          name={page.name}
          h1={page.h1}
          h1Accent={page.h1Accent}
          plan={page.plan}
          lead={page.lead}
          heroCheck={page.heroCheck}
          hero={page.hero}
        />

        {/* FEATURE STEPS — same carousel as the home page "features" block */}
        <StepsCarousel
          heading={
            <>
              {page.stepsHeading[0]} <em>{page.stepsHeading[1]}</em>
            </>
          }
          sub={page.stepsLead}
          steps={page.steps}
          prevLabel={ui.prev}
          nextLabel={ui.next}
        />

        {/* LONG CONTENT — white, blog article typography */}
        <section className="fn-article">
          <div className="container container-narrow">
            <div
              className="blog-article-content"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </section>

        {/* FAQ + GUIDES — verktyg-page blocks (lead-magnet.scss) */}
        <section className="lead-magnet tr-app-more">
          <div className="container container-narrow">
            <FaqList
              headingId="fn-faq-heading"
              heading={ui.faq}
              sub={ui.faqSub}
              items={page.faq}
            />

            <nav className="lead-magnet-related" aria-label={ui.guides}>
              <h2 className="lead-magnet-section-heading">{ui.guides}</h2>
              <p className="fn-section-sub">{ui.guidesSub}</p>
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
        <PlanPriceSection
          plan={page.plan}
          lang={lang}
          pricingT={pricingT}
          heading={
            /* Separate literals keep the sv HTML byte-identical. */
            isNb ? <>Pakken {planName}</> : <>Paketet {planName}</>
          }
          lead={page.priceIncluded}
          price={price}
          items={planItems}
          notes={isFaktura ? [ui.priceNote, fakturaLimit] : [ui.priceNote]}
        />
      </main>

      <Lightbox
        src={lightbox}
        onClose={() => setLightbox(null)}
        closeLabel={ui.close}
      />

      <CTA ctaT={ctaT} />
      <Footer footerT={footerT} />
    </>
  );
}
