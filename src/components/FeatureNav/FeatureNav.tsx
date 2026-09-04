import Link from 'next/link';
import { useEffect, useRef } from 'react';

import type { LandingLanguageCode } from '../../locales/languages';

// The 12 feature pages in a fixed, product-logical order, with a short pill
// label per language. Single source of truth for the feature pills that appear
// both on /funktioner and on each feature article page, so they always match.
export const FEATURE_NAV: {
  slug: string;
  label: Record<LandingLanguageCode, string>;
}[] = [
  {
    slug: 'skapa-offert-i-byggexp',
    label: { sv: 'Offert', en: 'Quotes', ru: 'Сметы', nb: 'Tilbud' },
  },
  {
    slug: 'fakturera-fran-byggexp',
    label: { sv: 'Fakturering', en: 'Invoicing', ru: 'Счета', nb: 'Fakturering' },
  },
  {
    slug: 'projektekonomi-och-lonsamhet',
    label: {
      sv: 'Projektekonomi',
      en: 'Project economy',
      ru: 'Экономика проекта',
      nb: 'Prosjektøkonomi',
    },
  },
  {
    slug: 'loneunderlag-for-byggforetag',
    label: { sv: 'Lön', en: 'Payroll', ru: 'Зарплата', nb: 'Lønn' },
  },
  {
    slug: 'automatisk-tidrapportering-och-export',
    label: {
      sv: 'Tidrapportering',
      en: 'Time tracking',
      ru: 'Учёт времени',
      nb: 'Tidsregistrering',
    },
  },
  {
    slug: 'narvaro-och-incheckning-pa-bygget',
    label: { sv: 'Närvaro', en: 'Attendance', ru: 'Присутствие', nb: 'Oppmøte' },
  },
  {
    slug: 'hantera-uppgifter-i-byggprojekt',
    label: { sv: 'Uppgifter', en: 'Tasks', ru: 'Задачи', nb: 'Oppgaver' },
  },
  {
    slug: 'paminnelser-uppgifter-och-deadlines',
    label: {
      sv: 'Auto-påminnelser för uppgifter',
      en: 'Auto-reminders for tasks',
      ru: 'Автонапоминания по задачам',
      nb: 'Auto-påminnelser for oppgaver',
    },
  },
  {
    slug: 'dagsplanering-och-planeringsmoten',
    label: {
      sv: 'Dagsplanering',
      en: 'Day planning',
      ru: 'Планирование дня',
      nb: 'Dagsplanlegging',
    },
  },
  {
    slug: 'dokumentera-med-foton-pa-bygget',
    label: {
      sv: 'Fotodokumentation',
      en: 'Photo documentation',
      ru: 'Фотодокументация',
      nb: 'Fotodokumentasjon',
    },
  },
  {
    slug: 'fota-kvitton-och-hantera-utlagg',
    label: {
      sv: 'Kvitton & utlägg',
      en: 'Receipts & expenses',
      ru: 'Чеки и расходы',
      nb: 'Kvitteringer & utlegg',
    },
  },
  {
    slug: 'hantera-verktyg-och-utrustning',
    label: {
      sv: 'Verktygshantering',
      en: 'Tool management',
      ru: 'Учёт инструментов',
      nb: 'Verktøyhåndtering',
    },
  },
];

export function featureNavLabel(slug: string, lang: LandingLanguageCode): string {
  const item = FEATURE_NAV.find((f) => f.slug === slug);
  return item?.label[lang] ?? item?.label.sv ?? '';
}

/**
 * Horizontal, scrollable pill nav linking to every feature article. Rendered at
 * the top of a feature page so visitors can jump between features without going
 * back. The active feature is highlighted and scrolled into view.
 */
export default function FeatureNav({
  lang,
  activeSlug,
}: {
  lang: LandingLanguageCode;
  activeSlug: string;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const el = activeRef.current;
    const track = trackRef.current;
    if (!el || !track) return;
    // Center the active pill within the scroller without scrolling the page.
    track.scrollLeft = el.offsetLeft - track.clientWidth / 2 + el.clientWidth / 2;
  }, [activeSlug]);

  return (
    <nav className="feature-nav" aria-label="Funktioner">
      <div className="feature-nav-track" ref={trackRef}>
        {FEATURE_NAV.map((f) => {
          const isActive = f.slug === activeSlug;
          return (
            <Link
              key={f.slug}
              href={`/${lang}/blog/${f.slug}`}
              ref={isActive ? activeRef : undefined}
              className={`feature-nav-chip${isActive ? ' is-active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {f.label[lang] ?? f.label.sv}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
