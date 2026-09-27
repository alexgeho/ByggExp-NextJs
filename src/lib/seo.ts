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
      'Allt-i-ett för byggföretag: tidrapport, personalliggare, planering, offerter och fakturor, löner och projektekonomi – i mobilen och på webben. Prova gratis.',
  },
  en: {
    title: 'ByggExp – time tracking, planning & project management for builders',
    description:
      'All-in-one for construction firms: time tracking, staff ledger, planning, quotes and invoices, payroll and project finances – on mobile and web. Try it free.',
  },
  ru: {
    title: 'ByggExp — учёт времени, планирование и управление стройпроектами',
    description:
      'Всё-в-одном для строительных компаний: учёт времени, журнал персонала, планирование, коммерческие предложения и выставление счетов, зарплаты и экономика проектов — в телефоне и в вебе. Попробуйте бесплатно.',
  },
  nb: {
    title:
      'ByggExp – timeføring, planlegging og prosjektstyring for byggefirma',
    description:
      'Alt-i-ett for byggefirma: timeføring, mannskapsliste, planlegging, tilbud og fakturaer, lønn og prosjektøkonomi – på mobil og web. Prøv gratis.',
  },
  pl: {
    title:
      'ByggExp – ewidencja czasu, planowanie i zarządzanie budową dla firm budowlanych',
    description:
      'Wszystko w jednym dla firm budowlanych: ewidencja czasu, rejestr pracowników, planowanie, oferty i wystawianie faktur, wynagrodzenia i finanse projektów – w telefonie i przeglądarce. Wypróbuj za darmo.',
  },
  uk: {
    title:
      'ByggExp — облік часу, планування та управління будівництвом для будівельних компаній',
    description:
      'Усе в одному для будівельних компаній: облік часу, журнал персоналу, планування, комерційні пропозиції та виставлення рахунків, зарплати й економіка проєктів — у телефоні та вебі. Спробуйте безкоштовно.',
  },
  fi: {
    title:
      'ByggExp – työajanseuranta, suunnittelu ja projektinhallinta rakentajille',
    description:
      'Kaikki yhdessä rakennusyrityksille: työajanseuranta, henkilöstörekisteri, suunnittelu, tarjoukset ja laskutus, palkat ja projektien talous – mobiilissa ja webissä. Kokeile ilmaiseksi.',
  },
  et: {
    title:
      'ByggExp – tööaja arvestus, planeerimine ja projektijuhtimine ehitajatele',
    description:
      'Kõik ühes ehitusettevõtetele: tööaja arvestus, personaliregister, planeerimine, pakkumised ja arved, palgad ja projektide eelarve – mobiilis ja veebis. Proovi tasuta.',
  },
  lt: {
    title:
      'ByggExp – laiko apskaita, planavimas ir projektų valdymas statybininkams',
    description:
      'Viskas viename statybos įmonėms: laiko apskaita, personalo žurnalas, planavimas, pasiūlymai ir sąskaitos, atlyginimai ir projektų finansai – telefone ir naršyklėje. Išbandykite nemokamai.',
  },
  lv: {
    title:
      'ByggExp – laika uzskaite, plānošana un projektu vadība būvniekiem',
    description:
      'Viss vienā būvuzņēmumiem: laika uzskaite, personāla reģistrs, plānošana, piedāvājumi un rēķini, algas un projektu finanses – telefonā un tīmeklī. Izmēģiniet bez maksas.',
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
