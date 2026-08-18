const ruFlag = "/landing/flags/ru.svg";
const svFlag = "/landing/flags/sv.svg";
const enFlag = "/landing/flags/en.svg";
const nbFlag = "/landing/flags/no.svg";

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
};

// NOTE: `nb` (Norwegian, for byggexp.no) is registered in `languages` above but
// intentionally NOT yet in landingLanguageCodes — this array drives
// getStaticPaths across the landing/legal pages and the sitemap, so adding `nb`
// here before every locale file has an `nb` key would break the build. Add "nb"
// here once the translations below are complete (Norway expansion, phase 1).
export const landingLanguageCodes = ["ru", "sv", "en"] as const;
export type LandingLanguageCode = (typeof landingLanguageCodes)[number];

// Locales that actually have hand-written content on the sv/en-only legal pages.
// The /ru URL for those pages serves the en copy and canonicalises to it.
export const svEnLocales = ["sv", "en"] as const satisfies readonly LandingLanguageCode[];

// Shown in the language switcher dropdown
export const selectableLanguages = {
  sv: languages.sv,
  en: languages.en,
};
