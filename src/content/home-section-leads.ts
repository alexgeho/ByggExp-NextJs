import type { LandingLanguageCode } from '../locales/languages';

// R53: one short muted line under every section heading of the home page
// (3–5 words, does not repeat the heading). One place for all languages.
export type HomeSection = 'features' | 'pricing' | 'pain' | 'benefits' | 'cta';

export const HOME_SECTION_LEADS: Record<LandingLanguageCode, Record<HomeSection, string>> = {
  sv: { features: 'Från offert till lön', pricing: 'Inga dolda avgifter', pain: 'Känner ni igen er?', benefits: 'För kontoret och bygget', cta: 'Vi visar hur det fungerar' },
  en: { features: 'From quote to payroll', pricing: 'No hidden fees', pain: 'Sound familiar?', benefits: 'For the office and the site', cta: 'We show you how it works' },
  nb: { features: 'Fra tilbud til lønn', pricing: 'Ingen skjulte avgifter', pain: 'Kjenner dere dere igjen?', benefits: 'For kontoret og byggeplassen', cta: 'Vi viser hvordan det fungerer' },
  ru: { features: 'От предложения до зарплаты', pricing: 'Без скрытых платежей', pain: 'Знакомая ситуация?', benefits: 'Для офиса и для объекта', cta: 'Покажем, как это работает' },
  pl: { features: 'Od oferty do wypłaty', pricing: 'Bez ukrytych opłat', pain: 'Brzmi znajomo?', benefits: 'Dla biura i budowy', cta: 'Pokażemy, jak to działa' },
  uk: { features: 'Від пропозиції до зарплати', pricing: 'Без прихованих платежів', pain: 'Знайома ситуація?', benefits: 'Для офісу та об’єкта', cta: 'Покажемо, як це працює' },
  fi: { features: 'Tarjouksesta palkkaan', pricing: 'Ei piilokuluja', pain: 'Kuulostaako tutulta?', benefits: 'Toimistolle ja työmaalle', cta: 'Näytämme, miten se toimii' },
  et: { features: 'Pakkumisest palgani', pricing: 'Varjatud tasusid pole', pain: 'Kas tuleb tuttav ette?', benefits: 'Kontorile ja objektile', cta: 'Näitame, kuidas see töötab' },
  lt: { features: 'Nuo pasiūlymo iki atlyginimo', pricing: 'Jokių paslėptų mokesčių', pain: 'Skamba pažįstamai?', benefits: 'Biurui ir statybvietei', cta: 'Parodysime, kaip tai veikia' },
  lv: { features: 'No piedāvājuma līdz algai', pricing: 'Bez slēptām maksām', pain: 'Izklausās pazīstami?', benefits: 'Birojam un objektam', cta: 'Parādīsim, kā tas darbojas' },
};

export function homeSectionLead(lang: string, section: HomeSection): string | undefined {
  return HOME_SECTION_LEADS[lang as LandingLanguageCode]?.[section];
}
