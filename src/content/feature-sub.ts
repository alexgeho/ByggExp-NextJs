import type { LandingLanguageCode } from '../locales/languages';

// R28/R31/R52: one short line under the feature card title, in every language.
// One source for the /funktioner carousel and the home page feature cards.
export const FEATURE_SUB: Record<string, Partial<Record<LandingLanguageCode, string>>> = {
  'skapa-offert-i-byggexp': { sv: 'Rader, pris, ROT och moms', en: 'Lines, price and VAT', nb: 'Linjer, pris og mva.', pl: 'Pozycje, cena i VAT', ru: 'Строки, цена и НДС' },
  'fakturera-fran-byggexp': { sv: 'Från timmar till faktura', en: 'From hours to invoice', nb: 'Fra timer til faktura', pl: 'Od godzin do faktury', ru: 'От часов до счёта' },
  'projektekonomi-och-lonsamhet': { sv: 'Marginal per projekt', en: 'Margin per project', nb: 'Margin per prosjekt', pl: 'Marża na projekt', ru: 'Маржа по каждому проекту' },
  'loneunderlag-for-byggforetag': { sv: 'Attesterade timmar blir löneunderlag', en: 'Approved hours become payroll data', nb: 'Attesterte timer blir lønnsgrunnlag', pl: 'Zatwierdzone godziny do wypłaty', ru: 'Утверждённые часы — в зарплату' },
  'automatisk-tidrapportering-och-export': { sv: 'GPS eller manuellt', en: 'GPS or manual', nb: 'GPS eller manuelt', pl: 'GPS lub ręcznie', ru: 'По GPS или вручную' },
  'narvaro-och-incheckning-pa-bygget': { sv: 'Se vem som är på plats', en: 'See who is on site', nb: 'Se hvem som er på plass', pl: 'Zobacz, kto jest na budowie', ru: 'Кто сейчас на объекте' },
  'hantera-uppgifter-i-byggprojekt': { sv: 'Rätt person, rätt deadline', en: 'Right person, right deadline', nb: 'Riktig person, riktig frist', pl: 'Właściwa osoba i termin', ru: 'Нужный человек и срок' },
  'dagsplanering-och-planeringsmoten': { sv: 'Personal och projekt', en: 'Staff and projects', nb: 'Personal og prosjekter', pl: 'Ludzie i projekty', ru: 'Люди и проекты' },
  arbetsorder: { sv: 'Kund, underlag, tid och personal' },
  'dokumentera-med-foton-pa-bygget': { sv: 'Sparade per projekt', en: 'Saved per project', nb: 'Lagret per prosjekt', pl: 'Zapisane w projekcie', ru: 'Сохраняются в проекте' },
  'fota-kvitton-och-hantera-utlagg': { sv: 'Fota kvittot i appen', en: 'Snap the receipt in the app', nb: 'Ta bilde av kvitteringen', pl: 'Zrób zdjęcie paragonu', ru: 'Сфотографируйте чек' },
  'hantera-verktyg-och-utrustning': { sv: 'Se vem som har vad', en: 'See who has what', nb: 'Se hvem som har hva', pl: 'Kto ma jakie narzędzie', ru: 'Кто что взял' },
};
