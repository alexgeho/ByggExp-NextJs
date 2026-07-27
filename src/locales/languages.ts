const ruFlag = "/landing/flags/ru.svg";
const svFlag = "/landing/flags/sv.svg";
const enFlag = "/landing/flags/en.svg";

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
};

export const landingLanguageCodes = ["ru", "sv", "en"] as const;
export type LandingLanguageCode = (typeof landingLanguageCodes)[number];

// Shown in the language switcher dropdown
export const selectableLanguages = {
  sv: languages.sv,
  en: languages.en,
};
