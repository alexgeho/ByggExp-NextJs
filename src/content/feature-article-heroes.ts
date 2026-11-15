// R33: feature articles (/<lang>/blog/<feature-slug>) whose first screen is the
// shared hero of the commercial feature pages (components/FunktionPage/
// FunktionHero). Rollout = data only: add an entry per slug and language here.
// A slug/language without an entry keeps the old first screen (breadcrumbs,
// H1, date, mockup cover).
//
// PILOT: only `skapa-offert-i-byggexp` in `sv` is enabled until the owner
// approves the design.
//
// Every text must be a verified product fact (R24,
// docs/seo/product-facts-verified.md). The <title>, meta and structured data of
// the article do not come from here and stay unchanged.
import type { FunktionImage, FunktionPlan } from './funktion-pages';
import type { LandingLanguageCode } from '../locales/languages';

export type FeatureArticleHero = {
  /** H1, first line (ink). Short: 2-4 words with a full stop. */
  h1: string;
  /** H1, second line (blue accent). */
  h1Accent: string;
  /** Package the feature belongs to (backend src/company/modules.ts) — sets
   *  the price line under the H1 (R20, numbers from PLAN_PRICE). */
  plan: FunktionPlan;
  /** One line under the price. */
  lead: string;
  /** Third check mark under the button. */
  heroCheck: string;
  /** 3D illustration: file name in /public/landing/funktioner without the
   *  size suffix; must have a height in ILLU_HEIGHT (content/funktion-pages). */
  hero: FunktionImage;
};

export const FEATURE_ARTICLE_HEROES: Record<
  string,
  Partial<Record<LandingLanguageCode, FeatureArticleHero>>
> = {
  'skapa-offert-i-byggexp': {
    sv: {
      h1: 'Skapa offert.',
      h1Accent: 'Från rader till skickad offert.',
      plan: 'faktura',
      lead: 'Lägg till rader, skicka offerten som PDF och gör faktura av den.',
      heroCheck: 'Offert som PDF med logotyp',
      hero: {
        name: 'offert-kalkyl-hero',
        alt: 'Hantverkare i keps sitter vid en laptop och skriver, bredvid ett papper med en bild av ett hus bakom en byggställning och en penna',
      },
    },
  },
};

export function getFeatureArticleHero(
  lang: LandingLanguageCode,
  slug: string,
): FeatureArticleHero | null {
  return FEATURE_ARTICLE_HEROES[slug]?.[lang] ?? null;
}
