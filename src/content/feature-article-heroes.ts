// R33: feature articles (/<lang>/blog/<feature-slug>) whose first screen is the
// shared hero of the commercial feature pages (components/FunktionPage/
// FunktionHero). Rollout = data only: add an entry per slug and language here.
// A slug/language without an entry keeps the old first screen (breadcrumbs,
// H1, date, mockup cover).
//
// Enabled for all 12 feature articles in `sv` (owner 2026-11-15). Other
// languages keep the old first screen until their texts exist.
//
// Each page has its own illustration (no image twice), and none is the hero of
// a /sv/funktioner/<slug> page. `plan` follows the matching feature page
// (lon = komplett) and the backend packages (economy = faktura, the rest =
// projekt).
//
// Every text must be a verified product fact (R24,
// docs/seo/product-facts-verified.md). The <title>, meta and structured data of
// the article do not come from here and stay unchanged.
import type { FunktionImage, FunktionPlan } from './funktion-pages';
import type { LandingLanguageCode } from '../locales/languages';

export type FeatureArticleHero = {
  /** H1, first line (ink). Short: 2-4 words with a full stop. */
  h1: string;
  /** H1, second line (blue accent). */
  h1Accent: string;
  /** Package the feature belongs to (backend src/company/modules.ts) — sets
   *  the price line under the H1 (R20, numbers from PLAN_PRICE). */
  plan: FunktionPlan;
  /** One line under the price. */
  lead: string;
  /** Third check mark under the button. */
  heroCheck: string;
  /** 3D illustration: file name in /public/landing/funktioner without the
   *  size suffix; must have a height in ILLU_HEIGHT (content/funktion-pages). */
  hero: FunktionImage;
};

export const FEATURE_ARTICLE_HEROES: Record<
  string,
  Partial<Record<LandingLanguageCode, FeatureArticleHero>>
> = {
  'skapa-offert-i-byggexp': {
    sv: {
      h1: 'Skapa offert.',
      h1Accent: 'Från rader till skickad offert.',
      plan: 'faktura',
      lead: 'Lägg till rader, skicka offerten som PDF och gör faktura av den.',
      heroCheck: 'Offert som PDF',
      hero: {
        name: 'feat-offert-uppfoljning',
        alt: 'Hantverkare i hjälm pratar i mobilen med ett hoprullat papper i handen, framför ett kök under renovering',
      },
    },
  },
  'fakturera-fran-byggexp': {
    sv: {
      h1: 'Fakturering.',
      h1Accent: 'Från offert till skickad faktura.',
      plan: 'faktura',
      lead: 'Gör faktura av offerten, lägg till ROT-avdrag och skicka den som PDF.',
      heroCheck: 'Faktura som PDF',
      hero: {
        name: 'fakturering-rot',
        alt: 'Hantverkare i hjälm står med ett papper bredvid en familj framför ett hus med byggställning',
      },
    },
  },
  'loneunderlag-for-byggforetag': {
    sv: {
      h1: 'Löneunderlag.',
      h1Accent: 'Från timmar till lön.',
      plan: 'komplett',
      lead: 'Lönekörning per period med timmar per medarbetare och timtyp.',
      heroCheck: 'Lönefil i CSV',
      hero: {
        name: 'lon-timlon',
        alt: 'Kvinna sitter vid ett skrivbord och arbetar vid en datorskärm med rader av uppgifter',
      },
    },
  },
  'projektekonomi-och-lonsamhet': {
    sv: {
      h1: 'Projektekonomi.',
      h1Accent: 'Marginalen per projekt.',
      plan: 'faktura',
      lead: 'Se kostnad, fakturerat och marginal i procent för varje projekt.',
      heroCheck: 'Marginal i procent',
      hero: {
        name: 'feat-ekonomi-veckoavstamning',
        alt: 'Byggledare i hjälm håller en surfplatta framför en husstomme, med en stapel guldmynt bredvid',
      },
    },
  },
  'automatisk-tidrapportering-och-export': {
    sv: {
      h1: 'Tidrapportering online.',
      h1Accent: 'Attesterad tid per projekt.',
      plan: 'projekt',
      lead: 'Laget stämplar in i appen med GPS, du attesterar och exporterar timmarna till Excel eller PDF.',
      heroCheck: 'iPhone och Android',
      hero: {
        name: 'feat-tid-restid',
        alt: 'Hantverkare går från en skåpbil mot ett hus med byggställning, med en platsmarkör ovanför bygget',
      },
    },
  },
  'narvaro-och-incheckning-pa-bygget': {
    sv: {
      h1: 'Närvaro.',
      h1Accent: 'Incheckning med GPS.',
      plan: 'projekt',
      lead: 'Medarbetaren checkar in och ut i appen, och tiden hamnar på projektet.',
      heroCheck: 'Personalliggare som PDF',
      hero: {
        name: 'feat-narvaro-oversikt',
        alt: 'Kvinna sitter vid en dator, bredvid en lista med porträtt av medarbetare och platsmarkörer',
      },
    },
  },
  'hantera-uppgifter-i-byggprojekt': {
    sv: {
      h1: 'Uppgifter.',
      h1Accent: 'Ansvarig, deadline och status.',
      plan: 'projekt',
      lead: 'Skapa uppgiften, välj vem som gör den och se när den är klar.',
      heroCheck: 'Uppgifter i appen',
      hero: {
        name: 'feat-uppgifter-morgonmote',
        alt: 'Arbetsledare pekar på en stor checklista inför tre hantverkare i hjälm',
      },
    },
  },
  'paminnelser-uppgifter-och-deadlines': {
    sv: {
      h1: 'Påminnelser.',
      h1Accent: 'Tills jobbet är klart.',
      plan: 'projekt',
      lead: 'Välj hur ofta appen påminner efter deadline och när chefen får besked.',
      heroCheck: 'Notis i mobilen',
      hero: {
        name: 'projekthantering-uppgifter',
        alt: 'Hantverkare i hjälm bockar av en punkt på en stor checklista, med en klocka och en ringklocka ovanför',
      },
    },
  },
  'dagsplanering-och-planeringsmoten': {
    sv: {
      h1: 'Dagsplanering.',
      h1Accent: 'Bemanna dag för dag.',
      plan: 'projekt',
      lead: 'Sätt personer på projekt per dag och se frånvaro och överbokning.',
      heroCheck: 'Gantt-schema',
      hero: {
        name: 'feat-planering-vecka',
        alt: 'Man i kavaj pekar på en stor väggkalender med personer inlagda på dagarna, med en klocka bredvid',
      },
    },
  },
  'dokumentera-med-foton-pa-bygget': {
    sv: {
      h1: 'Fotodokumentation.',
      h1Accent: 'Foton direkt på projektet.',
      plan: 'projekt',
      lead: 'Fota i appen under arbetspasset – bilden sparas på projektet med datum och person.',
      heroCheck: 'Foton per projekt',
      hero: {
        name: 'feat-foto-ror-i-vagg',
        alt: 'Hantverkare i hjälm fotar rör i en öppen vägg med mobilen',
      },
    },
  },
  'fota-kvitton-och-hantera-utlagg': {
    sv: {
      h1: 'Kvitton och utlägg.',
      h1Accent: 'Fota kvittot i appen.',
      plan: 'faktura',
      lead: 'Fota kvittot med mobilkameran och koppla utlägget till rätt projekt.',
      heroCheck: 'iPhone och Android',
      hero: {
        name: 'feat-kvitto-material',
        alt: 'Kvinna i hjälm står på knä och fotar ett kvitto med mobilen, bredvid en hink och en säck med material',
      },
    },
  },
  'hantera-verktyg-och-utrustning': {
    sv: {
      h1: 'Verktygshantering.',
      h1Accent: 'Ett register för alla verktyg.',
      plan: 'projekt',
      lead: 'Registrera verktyg och maskiner och se vem som har dem och var de finns.',
      heroCheck: 'Verktyg i appen',
      hero: {
        name: 'feat-verktyg-forrad',
        alt: 'Hantverkare i hjälm står med mobilen vid en förrådshylla med skruvdragare, verktygslådor och en laser på stativ',
      },
    },
  },
};

export function getFeatureArticleHero(
  lang: LandingLanguageCode,
  slug: string,
): FeatureArticleHero | null {
  return FEATURE_ARTICLE_HEROES[slug]?.[lang] ?? null;
}
