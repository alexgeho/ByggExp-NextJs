import Link from 'next/link';
import { useEffect, useRef } from 'react';

import type { LandingLanguageCode } from '../../locales/languages';

// The 12 feature pages in a fixed, product-logical order, with a short pill
// label per language. Single source of truth for the feature pills that appear
// both on /funktioner and on each feature article page, so they always match.
export const FEATURE_NAV: {
  slug: string;
  // sv/en/ru/nb/pl are provided; the newer worker locales (uk/fi/et/lt/lv) fall
  // back to sv via featureNavLabel / the render below (feature articles aren't
  // translated for those yet), so the map is Partial.
  label: Partial<Record<LandingLanguageCode, string>>;
}[] = [
  {
    slug: 'skapa-offert-i-byggexp',
    label: { sv: 'Offert', en: 'Quotes', ru: 'Сметы', nb: 'Tilbud', pl: 'Oferty' },
  },
  {
    slug: 'fakturera-fran-byggexp',
    label: { sv: 'Fakturering', en: 'Invoicing', ru: 'Счета', nb: 'Fakturering', pl: 'Faktury' },
  },
  {
    slug: 'projektekonomi-och-lonsamhet',
    label: {
      sv: 'Projektekonomi',
      en: 'Project economy',
      ru: 'Экономика проекта',
      nb: 'Prosjektøkonomi',
      pl: 'Ekonomia projektu',
    },
  },
  {
    slug: 'loneunderlag-for-byggforetag',
    label: { sv: 'Lön', en: 'Payroll', ru: 'Зарплата', nb: 'Lønn', pl: 'Wypłaty' },
  },
  {
    slug: 'automatisk-tidrapportering-och-export',
    label: {
      sv: 'Tidrapportering',
      en: 'Time tracking',
      ru: 'Учёт времени',
      nb: 'Tidsregistrering',
      pl: 'Ewidencja czasu',
    },
  },
  {
    slug: 'narvaro-och-incheckning-pa-bygget',
    label: { sv: 'Närvaro', en: 'Attendance', ru: 'Присутствие', nb: 'Oppmøte', pl: 'Obecność' },
  },
  {
    slug: 'hantera-uppgifter-i-byggprojekt',
    label: { sv: 'Uppgifter', en: 'Tasks', ru: 'Задачи', nb: 'Oppgaver', pl: 'Zadania' },
  },
  {
    slug: 'paminnelser-uppgifter-och-deadlines',
    label: {
      sv: 'Auto-påminnelser för uppgifter',
      en: 'Auto-reminders for tasks',
      ru: 'Автонапоминания по задачам',
      nb: 'Auto-påminnelser for oppgaver',
      pl: 'Auto-przypomnienia o zadaniach',
    },
  },
  {
    slug: 'dagsplanering-och-planeringsmoten',
    label: {
      sv: 'Dagsplanering',
      en: 'Day planning',
      ru: 'Планирование дня',
      nb: 'Dagsplanlegging',
      pl: 'Planowanie dnia',
    },
  },
  {
    slug: 'dokumentera-med-foton-pa-bygget',
    label: {
      sv: 'Fotodokumentation',
      en: 'Photo documentation',
      ru: 'Фотодокументация',
      nb: 'Fotodokumentasjon',
      pl: 'Dokumentacja zdjęciowa',
    },
  },
  {
    slug: 'fota-kvitton-och-hantera-utlagg',
    label: {
      sv: 'Kvitton & utlägg',
      en: 'Receipts & expenses',
      ru: 'Чеки и расходы',
      nb: 'Kvitteringer & utlegg',
      pl: 'Paragony i wydatki',
    },
  },
  {
    slug: 'hantera-verktyg-och-utrustning',
    label: {
      sv: 'Verktygshantering',
      en: 'Tool management',
      ru: 'Учёт инструментов',
      nb: 'Verktøyhåndtering',
      pl: 'Zarządzanie narzędziami',
    },
  },
];

export function featureNavLabel(slug: string, lang: LandingLanguageCode): string {
  const item = FEATURE_NAV.find((f) => f.slug === slug);
  return item?.label[lang] ?? item?.label.sv ?? '';
}

export type PillNavItem = { key: string; label: string; href?: string };

/**
 * The one pill row of the site's feature pages (R37): a white bar under the
 * header with one scrollable line of pills. An item with `href` is a link
 * (feature articles); without it the pill is a button and `onSelect` is called
 * (the carousel on /funktioner). The active pill is highlighted and kept
 * centred; chips fade at an edge only while there is more to scroll.
 */
export function PillNav({
  items,
  activeKey,
  onSelect,
  ariaLabel = 'Funktioner',
}: {
  items: PillNavItem[];
  activeKey: string;
  onSelect?: (key: string, index: number) => void;
  ariaLabel?: string;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const el = track?.querySelector<HTMLElement>('.is-active');
    if (!el || !track) return;
    // Center the active pill within the scroller without scrolling the page.
    track.scrollLeft = el.offsetLeft - track.clientWidth / 2 + el.clientWidth / 2;
  }, [activeKey]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Mark which edges still hide chips so the CSS mask fades only those.
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      track.toggleAttribute('data-more-left', track.scrollLeft > 1);
      track.toggleAttribute('data-more-right', track.scrollLeft < max - 1);
    };
    update();
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      track.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [activeKey, items.length]);

  return (
    <nav className="feature-nav" aria-label={ariaLabel}>
      <div className="feature-nav-inner">
        <div className="feature-nav-track" ref={trackRef}>
          {items.map((item, i) => {
            const isActive = item.key === activeKey;
            const className = `feature-nav-chip${isActive ? ' is-active' : ''}`;
            return item.href ? (
              <Link
                key={item.key}
                href={item.href}
                className={className}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.key}
                type="button"
                className={className}
                aria-pressed={isActive}
                onClick={() => onSelect?.(item.key, i)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

/** Pill nav linking to every feature article, shown at the top of each one. */
export default function FeatureNav({
  lang,
  activeSlug,
}: {
  lang: LandingLanguageCode;
  activeSlug: string;
}) {
  const items = FEATURE_NAV.map((f) => ({
    key: f.slug,
    label: f.label[lang] ?? f.label.sv ?? '',
    href: `/${lang}/blog/${f.slug}`,
  }));
  return <PillNav items={items} activeKey={activeSlug} />;
}
