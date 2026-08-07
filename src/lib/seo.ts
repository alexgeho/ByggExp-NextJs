import { landingLanguageCodes, type LandingLanguageCode } from '../locales/languages';

// Locale Google expects x-default to point at. Swedish is the primary market.
const X_DEFAULT_LANG: LandingLanguageCode = 'sv';

export type HreflangAlternate = {
  hrefLang: string;
  href: string;
};

/**
 * Build reciprocal hreflang alternates for a page that exists in every landing
 * locale under the same path shape. `buildHref` receives a locale and returns
 * the absolute URL for that locale's version.
 */
export function buildHreflangAlternates(
  buildHref: (lang: LandingLanguageCode) => string,
): HreflangAlternate[] {
  const alternates: HreflangAlternate[] = landingLanguageCodes.map((lang) => ({
    hrefLang: lang,
    href: buildHref(lang),
  }));
  alternates.push({ hrefLang: 'x-default', href: buildHref(X_DEFAULT_LANG) });
  return alternates;
}
