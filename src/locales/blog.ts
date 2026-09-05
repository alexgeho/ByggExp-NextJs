import type { BlogLocale } from '../types/blog';

export const blogPageTranslations: Record<
  BlogLocale,
  {
    badge: string;
    title: string;
    subtitle: string;
    empty: string;
    searchPlaceholder: string;
    noResults: string;
    home: string;
    back: string;
    related: string;
  }
> = {
  sv: {
    badge: 'Blogg',
    title: 'Artiklar och guider',
    subtitle:
      'Praktiska tips, insikter och arbetsfloden för byggföretag som vill arbeta smartare.',
    empty: 'Inga artiklar publicerade än.',
    searchPlaceholder: 'Sök artiklar …',
    noResults: 'Inga artiklar matchar din sökning.',
    home: 'Hem',
    back: 'Tillbaka till bloggen',
    related: 'Liknande artiklar',
  },
  nb: {
    badge: 'Blogg',
    title: 'Artikler og guider',
    subtitle:
      'Praktiske tips, innsikt og arbeidsflyter for byggefirmaer som vil jobbe smartere.',
    empty: 'Ingen artikler publisert ennå.',
    searchPlaceholder: 'Søk artikler …',
    noResults: 'Ingen artikler matcher søket ditt.',
    home: 'Hjem',
    back: 'Tilbake til bloggen',
    related: 'Lignende artikler',
  },
  en: {
    badge: 'Blog',
    title: 'Articles and guides',
    subtitle:
      'Practical tips, insights, and workflows for construction teams that want to work smarter.',
    empty: 'No published articles yet.',
    searchPlaceholder: 'Search articles …',
    noResults: 'No articles match your search.',
    home: 'Home',
    back: 'Back to blog',
    related: 'Related articles',
  },
  ru: {
    badge: 'Блог',
    title: 'Статьи и материалы',
    subtitle:
      'Практические советы, разборы и рабочие сценарии для строительных компаний, которые хотят работать эффективнее.',
    empty: 'Пока нет опубликованных статей.',
    searchPlaceholder: 'Поиск статей …',
    noResults: 'Ничего не найдено по вашему запросу.',
    home: 'Главная',
    back: 'Назад к блогу',
    related: 'Похожие статьи',
  },
  pl: {
    badge: 'Blog',
    title: 'Artykuły i poradniki',
    subtitle:
      'Praktyczne porady, analizy i procesy dla firm budowlanych, które chcą pracować mądrzej.',
    empty: 'Nie opublikowano jeszcze żadnych artykułów.',
    searchPlaceholder: 'Szukaj artykułów …',
    noResults: 'Brak artykułów pasujących do wyszukiwania.',
    home: 'Strona główna',
    back: 'Powrót do bloga',
    related: 'Podobne artykuły',
  },
  uk: {
    badge: 'Блог',
    title: 'Статті та посібники',
    subtitle:
      'Практичні поради, розбори та робочі сценарії для будівельних компаній, які хочуть працювати ефективніше.',
    empty: 'Поки немає опублікованих статей.',
    searchPlaceholder: 'Пошук статей …',
    noResults: 'Немає статей за вашим запитом.',
    home: 'Головна',
    back: 'Назад до блогу',
    related: 'Схожі статті',
  },
  fi: {
    badge: 'Blogi',
    title: 'Artikkelit ja oppaat',
    subtitle:
      'Käytännön vinkkejä, oivalluksia ja työnkulkuja rakennusyrityksille, jotka haluavat työskennellä fiksummin.',
    empty: 'Ei julkaistuja artikkeleita vielä.',
    searchPlaceholder: 'Hae artikkeleita …',
    noResults: 'Ei hakua vastaavia artikkeleita.',
    home: 'Etusivu',
    back: 'Takaisin blogiin',
    related: 'Aiheeseen liittyvät artikkelit',
  },
  et: {
    badge: 'Blogi',
    title: 'Artiklid ja juhendid',
    subtitle:
      'Praktilised nõuanded, ülevaated ja töövood ehitusettevõtetele, kes soovivad töötada targemalt.',
    empty: 'Avaldatud artikleid veel pole.',
    searchPlaceholder: 'Otsi artikleid …',
    noResults: 'Otsingule vastavaid artikleid ei leitud.',
    home: 'Avaleht',
    back: 'Tagasi blogisse',
    related: 'Seotud artiklid',
  },
  lt: {
    badge: 'Tinklaraštis',
    title: 'Straipsniai ir vadovai',
    subtitle:
      'Praktiniai patarimai, įžvalgos ir darbo eiga statybos įmonėms, norinčioms dirbti sumaniau.',
    empty: 'Kol kas nėra paskelbtų straipsnių.',
    searchPlaceholder: 'Ieškoti straipsnių …',
    noResults: 'Pagal jūsų užklausą straipsnių nerasta.',
    home: 'Pagrindinis',
    back: 'Atgal į tinklaraštį',
    related: 'Susiję straipsniai',
  },
  lv: {
    badge: 'Blogs',
    title: 'Raksti un ceļveži',
    subtitle:
      'Praktiski padomi, ieskati un darbplūsmas būvuzņēmumiem, kas vēlas strādāt gudrāk.',
    empty: 'Vēl nav publicētu rakstu.',
    searchPlaceholder: 'Meklēt rakstus …',
    noResults: 'Nav atrasts neviens jūsu meklējumam atbilstošs raksts.',
    home: 'Sākums',
    back: 'Atpakaļ uz blogu',
    related: 'Saistītie raksti',
  },
};
