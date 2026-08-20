import type { BlogLocale } from '../types/blog';

export const blogPageTranslations: Record<
  BlogLocale | 'nb',
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
};
