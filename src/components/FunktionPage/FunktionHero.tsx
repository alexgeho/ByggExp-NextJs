import type { CSSProperties } from "react";

import {
  illuSrc,
  illuSrcSet,
  ILLU_HEIGHT,
  PLAN_PRICE,
  type FunktionImage,
  type FunktionPlan,
} from "../../content/funktion-pages";
import type { LandingLanguageCode } from "../../locales/languages";

// The first screen of a feature page — ONE component for every page type:
//   /sv/funktioner/<slug>, /nb/funksjoner/<slug>  (FunktionPageView)
//   /<lang>/blog/<feature-slug>                   (feature articles, R33)
//   /sv/priser, /sv/byt-system                    (InfoPage: no price line,
//                                                  first crumb "Hem")
// crumbs → H1 (ink + blue accent line) → package price (R20) → lead →
// consultation button → checks; 3D illustration on the right (R26, R27, R32).
// Styles: `.em-hero*` / `.fn-*` in styles/enmansforetag.scss and
// styles/design-system.scss — they need an ancestor with classes "em fn".

// UI strings of the hero. A language without an entry cannot render the hero
// (see hasFunktionHeroUi) — add the strings here to roll a language out.
export const FUNKTION_HERO_UI = {
  sv: {
    crumbs: "Brödsmulor",
    hub: "Funktioner",
    cta: "Boka gratis konsultation",
    trial: "14 dagar gratis",
    noLockIn: "Ingen bindningstid",
    usersFaktura: "max 2 användare",
    usersIncluded: "inkl. 10 användare",
    perMonth: "kr/mån",
    exVat: "exkl. moms",
  },
  nb: {
    crumbs: "Brødsmuler",
    hub: "Funksjoner",
    cta: "Bestill gratis konsultasjon",
    trial: "14 dager gratis",
    noLockIn: "Ingen bindingstid",
    usersFaktura: "maks 2 brukere",
    usersIncluded: "inkl. 10 brukere",
    perMonth: "NOK/mnd",
    exVat: "eks. mva.",
  },
} as const;

export type FunktionHeroLang = keyof typeof FUNKTION_HERO_UI;

export const hasFunktionHeroUi = (
  lang: LandingLanguageCode,
): lang is FunktionHeroLang => lang in FUNKTION_HERO_UI;

export type FunktionHeroProps = {
  lang: FunktionHeroLang;
  /** Last breadcrumb: short name of the feature. */
  name: string;
  h1: string;
  h1Accent: string;
  /** Package the feature belongs to — the price line comes from PLAN_PRICE.
   *  Omitted: no price line (pages that are not about one package). */
  plan?: FunktionPlan;
  /** First breadcrumb. Default: the features hub of the language. */
  crumb?: { href: string; label: string };
  lead: string;
  /** Third check mark (the first two are shared per language). */
  heroCheck: string;
  /** 3D illustration from /public/landing/funktioner (key of ILLU_HEIGHT). */
  hero: FunktionImage;
  /** Target of the consultation button. Default: the request form on the same
   *  page (`#cta`); a page without that block links to the form elsewhere. */
  ctaHref?: string;
};

export default function FunktionHero({
  lang,
  name,
  h1,
  h1Accent,
  plan,
  crumb,
  lead,
  heroCheck,
  hero,
  ctaHref = "#cta",
}: FunktionHeroProps) {
  const ui = FUNKTION_HERO_UI[lang];
  const usersText = plan === "faktura" ? ui.usersFaktura : ui.usersIncluded;

  return (
    <section className="em-hero">
      {/* R32: the text indent is computed in CSS from the figure's aspect ratio. */}
      <div
        className="container em-hero-inner"
        style={{ "--fn-hero-ar": 1200 / ILLU_HEIGHT[hero.name] } as CSSProperties}
      >
        <div className="em-hero-content">
          <nav className="fn-crumbs" aria-label={ui.crumbs}>
            <a href={crumb?.href ?? `/${lang}/funktioner`}>
              {crumb?.label ?? ui.hub}
            </a>
            <span aria-hidden="true">/</span>
            <span>{name}</span>
          </nav>
          <h1>
            {h1} <span>{h1Accent}</span>
          </h1>
          {/* R20: package price right under the H1 (numbers: Pricing.tsx). */}
          {plan ? (
            <p className="fn-hero-price">
              <strong>
                {PLAN_PRICE[plan].price} {ui.perMonth}
              </strong>{" "}
              {ui.exVat} · {usersText}
            </p>
          ) : null}
          <p className="em-lead">{lead}</p>
          <a href={ctaHref} className="btn-primary">
            {ui.cta}
          </a>
          <ul className="em-checks">
            <li>{ui.trial}</li>
            <li>{ui.noLockIn}</li>
            <li>{heroCheck}</li>
          </ul>
        </div>
        <div className="em-hero-visual fn-hero-visual">
          <img
            src={illuSrc(hero.name)}
            srcSet={illuSrcSet(hero.name)}
            sizes="(max-width: 900px) 100vw, 560px"
            width={1200}
            height={ILLU_HEIGHT[hero.name]}
            fetchPriority="high"
            decoding="async"
            alt={hero.alt}
          />
        </div>
      </div>
    </section>
  );
}
