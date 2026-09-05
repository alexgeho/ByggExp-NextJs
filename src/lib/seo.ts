import { landingLanguageCodes, type LandingLanguageCode } from '../locales/languages';
import { NO_DOMAIN_LIVE } from './locale';

// Locale Google expects x-default to point at. Swedish is the primary market.
const X_DEFAULT_LANG: LandingLanguageCode = 'sv';

// Locales safe to emit as hreflang/canonical alternates. `nb` lives on the
// separate ccTLD byggexp.no, which only resolves once its DNS is delegated —
// until then, emitting an nb alternate would point Google at a dead host, so we
// exclude it. Flip NO_DOMAIN_LIVE once byggexp.no serves.
export const hreflangLocales: readonly LandingLanguageCode[] =
  landingLanguageCodes.filter((lang) => lang !== 'nb' || NO_DOMAIN_LIVE);

// Each locale lives on its own ccTLD: Norwegian (nb) on byggexp.no, everything
// else on byggexp.se. Used to build canonical + hreflang URLs so every locale
// points at the right domain (Google's recommended ccTLD + hreflang setup).
export function localeOrigin(lang: string): string {
  const seOrigin = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  return lang === 'nb' ? 'https://byggexp.no' : seOrigin;
}

// Keyword-rich fallback title/description for the home page, per locale. Used
// when the CMS SiteSeo is empty so the landing page never ships a bare
// "<title>ByggExp</title>" with no description (weak for relevance + CTR).
export const defaultHomeMeta: Record<
  LandingLanguageCode,
  { title: string; description: string }
> = {
  sv: {
    title:
      'ByggExp – tidrapportering, planering & projektledning för byggföretag',
    description:
      'Allt-i-ett-app för byggföretag: tidrapportering, digital personalliggare, schemaläggning, offert och faktura – på webben och i mobilen. Prova gratis.',
  },
  en: {
    title: 'ByggExp – time tracking, planning & project management for builders',
    description:
      'All-in-one app for construction firms: time tracking, digital staff ledger, scheduling, quotes and invoicing – on web and mobile. Try it free.',
  },
  ru: {
    title: 'ByggExp — учёт времени, планирование и управление стройпроектами',
    description:
      'Приложение всё-в-одном для строительных компаний: учёт рабочего времени, электронный журнал персонала, графики, сметы и счета — в вебе и мобильном. Попробуйте бесплатно.',
  },
  nb: {
    title:
      'ByggExp – timeføring, planlegging og prosjektstyring for byggefirma',
    description:
      'Alt-i-ett-app for byggefirma: timeføring, digitalt mannskapsregister, vaktplan, tilbud og faktura – på web og mobil. Prøv gratis.',
  },
  pl: {
    title:
      'ByggExp – ewidencja czasu, planowanie i zarządzanie budową dla firm budowlanych',
    description:
      'Aplikacja all-in-one dla firm budowlanych: ewidencja czasu, cyfrowy rejestr pracowników, grafik, oferty i faktury – w przeglądarce i w telefonie. Wypróbuj za darmo.',
  },
  uk: {
    title:
      'ByggExp — облік часу, планування та управління будівництвом для будівельних компаній',
    description:
      'Застосунок «усе в одному» для будівельних компаній: облік часу, електронний журнал персоналу, графіки, пропозиції та рахунки — у вебі й мобільному. Спробуйте безкоштовно.',
  },
  fi: {
    title:
      'ByggExp – työajanseuranta, suunnittelu ja projektinhallinta rakentajille',
    description:
      'All-in-one-sovellus rakennusyrityksille: työajanseuranta, digitaalinen henkilöstörekisteri, aikataulutus, tarjoukset ja laskutus – webissä ja mobiilissa. Kokeile ilmaiseksi.',
  },
  et: {
    title:
      'ByggExp – tööaja arvestus, planeerimine ja projektijuhtimine ehitajatele',
    description:
      'Kõik-ühes rakendus ehitusettevõtetele: tööaja arvestus, digitaalne personaliregister, ajakava, pakkumised ja arveldamine – veebis ja mobiilis. Proovi tasuta.',
  },
  lt: {
    title:
      'ByggExp – laiko apskaita, planavimas ir projektų valdymas statybininkams',
    description:
      'Viskas viename programėlė statybos įmonėms: laiko apskaita, skaitmeninis personalo žurnalas, grafikai, pasiūlymai ir sąskaitos – žiniatinklyje ir telefone. Išbandykite nemokamai.',
  },
  lv: {
    title:
      'ByggExp – laika uzskaite, plānošana un projektu vadība būvniekiem',
    description:
      'Viss vienā lietotne būvuzņēmumiem: laika uzskaite, digitāls personāla reģistrs, grafiki, piedāvājumi un rēķini – tīmeklī un mobilajā. Izmēģiniet bez maksas.',
  },
};

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
  locales: readonly LandingLanguageCode[] = hreflangLocales,
): HreflangAlternate[] {
  const alternates: HreflangAlternate[] = locales.map((lang) => ({
    hrefLang: lang,
    href: buildHref(lang),
  }));
  const xDefault = locales.includes(X_DEFAULT_LANG) ? X_DEFAULT_LANG : locales[0];
  alternates.push({ hrefLang: 'x-default', href: buildHref(xDefault) });
  return alternates;
}
