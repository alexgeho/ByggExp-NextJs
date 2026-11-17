import type { LandingLanguageCode } from '../locales/languages';

// R28/R31/R52/R54: one short line under the feature card title, in every language.
// One source for the /funktioner carousel and the home page feature cards.
// R54: the line never repeats the title (home title or short title) — it adds
// the result or the concrete "how". 3–5 words, max 34 characters.
export const FEATURE_SUB: Record<string, Partial<Record<LandingLanguageCode, string>>> = {
  'skapa-offert-i-byggexp': { sv: 'Uppgifterna är redan ifyllda', en: 'Details are already filled in', nb: 'Dataene er allerede fylt inn', pl: 'Dane są już uzupełnione', ru: 'Клиенту за пару кликов' },
  'fakturera-fran-byggexp': { sv: 'Slipp räkna ihop timmarna själv', en: 'Skip adding up the hours', nb: 'Slipp å summere timene selv', pl: 'Bez ręcznego sumowania godzin', ru: 'Не нужно сводить всё вручную' },
  'projektekonomi-och-lonsamhet': { sv: 'Timmar och material mot budgeten', en: 'Hours and materials against budget', nb: 'Timer og materialer mot budsjettet', pl: 'Godziny i materiały kontra budżet', ru: 'Часы и материалы против бюджета' },
  'loneunderlag-for-byggforetag': { sv: 'Exporteras med ett klick', en: 'Exported in one click', nb: 'Eksporteres med ett klikk', pl: 'Eksport jednym kliknięciem', ru: 'Выгрузка в один клик' },
  'automatisk-tidrapportering-och-export': { sv: 'Timmarna loggas direkt på plats', en: 'Hours logged right on site', nb: 'Loggføres rett på byggeplassen', pl: 'Godziny zapisane prosto z budowy', ru: 'Смена отмечается прямо на объекте' },
  'narvaro-och-incheckning-pa-bygget': { sv: 'Se direkt vem som saknas', en: 'See at once who’s missing', nb: 'Se straks hvem som mangler', pl: 'Od razu widać, kogo brakuje', ru: 'Сразу видно, кто не вышел' },
  'hantera-uppgifter-i-byggprojekt': { sv: 'Rätt person, rätt deadline', en: 'Right person, right deadline', nb: 'Riktig person, riktig frist', pl: 'Właściwa osoba i termin', ru: 'Нужный человек и срок' },
  'dagsplanering-och-planeringsmoten': { sv: 'Koll på firmans beläggning', en: 'Know your company’s workload', nb: 'Kontroll på bedriftens belegg', pl: 'Obłożenie firmy pod kontrolą', ru: 'Вся загрузка компании на виду' },
  arbetsorder: { sv: 'Allt underlag på ett ställe' },
  'dokumentera-med-foton-pa-bygget': { sv: 'Vem, när och vilket projekt', en: 'Who, when and which job', nb: 'Hvem, når og hvilket prosjekt', pl: 'Kto, kiedy, który projekt', ru: 'Кто, когда, какой проект' },
  'fota-kvitton-och-hantera-utlagg': { sv: 'Ett foto, rätt projekt', en: 'One photo, right project', nb: 'Ett bilde, riktig prosjekt', pl: 'Jedno zdjęcie, właściwy projekt', ru: 'Одно фото, нужный проект' },
  'hantera-verktyg-och-utrustning': { sv: 'Se vem som har vad', en: 'See who has what', nb: 'Se hvem som har hva', pl: 'Wiadomo, kto co ma', ru: 'Кто что взял' },
};
