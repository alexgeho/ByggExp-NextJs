import { landingLanguageCodes, type LandingLanguageCode } from '../locales/languages';

// Locale Google expects x-default to point at. Swedish is the primary market.
const X_DEFAULT_LANG: LandingLanguageCode = 'sv';

// Each locale lives on its own ccTLD: Norwegian (nb) on byggexp.no, everything
// else on byggexp.se. Used to build canonical + hreflang URLs so every locale
// points at the right domain (Google's recommended ccTLD + hreflang setup).
export function localeOrigin(lang: string): string {
  const seOrigin = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  return lang === 'nb' ? 'https://byggexp.no' : seOrigin;
}

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
  locales: readonly LandingLanguageCode[] = landingLanguageCodes,
): HreflangAlternate[] {
  const alternates: HreflangAlternate[] = locales.map((lang) => ({
    hrefLang: lang,
    href: buildHref(lang),
  }));
  const xDefault = locales.includes(X_DEFAULT_LANG) ? X_DEFAULT_LANG : locales[0];
  alternates.push({ hrefLang: 'x-default', href: buildHref(xDefault) });
  return alternates;
}
