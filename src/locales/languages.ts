const ruFlag = "/landing/flags/ru.svg";
const svFlag = "/landing/flags/sv.svg";
const enFlag = "/landing/flags/en.svg";
const nbFlag = "/landing/flags/no.svg";
const plFlag = "/landing/flags/pl.svg";
const ukFlag = "/landing/flags/uk.svg";
const fiFlag = "/landing/flags/fi.svg";
const etFlag = "/landing/flags/et.svg";
const ltFlag = "/landing/flags/lt.svg";
const lvFlag = "/landing/flags/lv.svg";

// Full list, includes languages reachable only by direct URL (e.g. /ru)
export const languages = {
  ru: {
    label: "Русский",
    flag: ruFlag,
  },
  sv: {
    label: "Svenska",
    flag: svFlag,
  },
  en: {
    label: "English",
    flag: enFlag,
  },
  nb: {
    label: "Norsk",
    flag: nbFlag,
  },
  pl: {
    label: "Polski",
    flag: plFlag,
  },
  uk: {
    label: "Українська",
    flag: ukFlag,
  },
  fi: {
    label: "Suomi",
    flag: fiFlag,
  },
  et: {
    label: "Eesti",
    flag: etFlag,
  },
  lt: {
    label: "Lietuvių",
    flag: ltFlag,
  },
  lv: {
    label: "Latviešu",
    flag: lvFlag,
  },
};

// NOTE: `nb` (Norwegian, for byggexp.no) is registered in `languages` above but
// intentionally NOT yet in landingLanguageCodes — this array drives
// getStaticPaths across the landing/legal pages and the sitemap, so adding `nb`
// here before every locale file has an `nb` key would break the build. Add "nb"
// here once the translations below are complete (Norway expansion, phase 1).
export const landingLanguageCodes = ["ru", "sv", "en", "nb", "pl", "uk", "fi", "et", "lt", "lv"] as const;
export type LandingLanguageCode = (typeof landingLanguageCodes)[number];

// Locales that actually have hand-written content on the sv/en-only legal pages.
// The /ru URL for those pages serves the en copy and canonicalises to it.
export const svEnLocales = ["sv", "en"] as const satisfies readonly LandingLanguageCode[];

// Shown in the language switcher dropdown. `nb` jumps to byggexp.no (handled by
// the Host→locale middleware); sv/en stay on byggexp.se.
export const selectableLanguages = {
  sv: languages.sv,
  en: languages.en,
  nb: languages.nb,
  ru: languages.ru,
  pl: languages.pl,
  uk: languages.uk,
  fi: languages.fi,
  et: languages.et,
  lt: languages.lt,
  lv: languages.lv,
};
