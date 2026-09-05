import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import { fetchPublishedBlogPosts } from '../../../lib/blog-api';
import { FEATURE_ARTICLE_SLUGS } from '../../../content/feature-articles';
import { buildHreflangAlternates, localeOrigin } from '../../../lib/seo';
import { featuresTranslations1_3 } from '../../../locales/features1-3';
import { featuresTranslations4_6 } from '../../../locales/features4-6';
import { featuresTranslations7_9 } from '../../../locales/features7-9';
import { featuresTranslations10_11 } from '../../../locales/features10-11';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';
import {
  landingLanguageCodes,
  type LandingLanguageCode,
} from '../../../locales/languages';
import type { BlogPost } from '../../../types/blog';

type FunktionerPageProps = {
  lang: LandingLanguageCode;
  posts: BlogPost[];
};

// Per-feature label overrides, when the CMS tag isn't the wording we want on
// this page. Keyed by slug then language; used for both the pill and the card
// badge so they always match.
const FEATURE_TAG_OVERRIDE: Record<
  string,
  Partial<Record<LandingLanguageCode, string>>
> = {
  'paminnelser-uppgifter-och-deadlines': {
    sv: 'Auto-påminnelser för uppgifter',
    en: 'Auto-reminders for tasks',
    ru: 'Автонапоминания по задачам',
    nb: 'Auto-påminnelser for oppgaver',
  },
};

// Display tag for a feature. Prefers an explicit override, then the CMS tag
// (already a concise feature name, e.g. "Närvaro"), then the title so a
// tag-less post still gets a readable label.
function featureTag(
  post: BlogPost,
  lang: LandingLanguageCode,
  fallback: string,
): string {
  return FEATURE_TAG_OVERRIDE[post.slug]?.[lang] || post.tag || post.title || fallback;
}

// Per-feature title/excerpt overrides for the card, when the CMS copy needs
// updating faster than the CMS can be edited. Keyed by slug then language.
const FEATURE_CONTENT_OVERRIDE: Record<
  string,
  Partial<Record<LandingLanguageCode, { title?: string; excerpt?: string }>>
> = {
  'automatisk-tidrapportering-och-export': {
    sv: {
      title: 'Automatisk och manuell tidrapportering',
      excerpt:
        'Låt GPS-incheckningen samla arbetstimmar per projekt automatiskt – eller låt teamet stämpla in tid manuellt i appen. Exportera en färdig tidsredovisning till lönen direkt från webben.',
    },
    en: {
      title: 'Automatic and manual time tracking',
      excerpt:
        'Let GPS check-in collect hours per project automatically – or let the team log time manually in the app. Export a ready payroll report straight from the web.',
    },
    ru: {
      title: 'Автоматический и ручной учёт времени',
      excerpt:
        'GPS-отметки собирают часы по проектам автоматически — или команда вводит время вручную в приложении. Готовый табель выгружается в зарплату прямо из веба.',
    },
    nb: {
      title: 'Automatisk og manuell tidsregistrering',
      excerpt:
        'La GPS-innsjekk samle timer per prosjekt automatisk – eller la teamet stemple inn tid manuelt i appen. Eksporter en ferdig timeliste til lønn rett fra nettet.',
    },
  },
};

function featureTitle(post: BlogPost, lang: LandingLanguageCode): string {
  return FEATURE_CONTENT_OVERRIDE[post.slug]?.[lang]?.title || post.title;
}

function featureExcerpt(post: BlogPost, lang: LandingLanguageCode): string {
  return FEATURE_CONTENT_OVERRIDE[post.slug]?.[lang]?.excerpt || post.excerpt || '';
}

// The paminnelser feature has no homepage card, so its 3 steps live here.
const PAMINNELSER_STEPS: Record<LandingLanguageCode, string[]> = {
  sv: ['Skapa uppgift med deadline', 'Sätt påminnelseintervall', 'Appen påminner tills det är klart'],
  en: ['Create a task with a deadline', 'Set a reminder interval', 'The app reminds until it’s done'],
  ru: ['Создайте задачу со сроком', 'Задайте интервал напоминаний', 'Приложение напоминает, пока не выполнено'],
  nb: ['Opprett oppgave med frist', 'Sett påminnelsesintervall', 'Appen minner til det er gjort'],
};

const READ_MORE: Record<LandingLanguageCode, string> = {
  sv: 'Läs mer om funktionen →',
  en: 'Read more about the feature →',
  ru: 'Подробнее о функции →',
  nb: 'Les mer om funksjonen →',
};

// The three numbered steps shown on a feature card, reused from the homepage
// feature copy so we don't duplicate content. Keyed by feature slug.
function featureSteps(slug: string, lang: LandingLanguageCode): string[] {
  const t1 = featuresTranslations1_3[lang];
  const t2 = featuresTranslations4_6[lang];
  const t3 = featuresTranslations7_9[lang];
  const t4 = featuresTranslations10_11[lang];
  const map: Record<string, string[]> = {
    'automatisk-tidrapportering-och-export': [t1.featuresCard1Step1, t1.featuresCard1Step2, t1.featuresCard1Step3],
    'hantera-uppgifter-i-byggprojekt': [t1.featuresCard2Step1, t1.featuresCard2Step2, t1.featuresCard2Step3],
    'narvaro-och-incheckning-pa-bygget': [t1.featuresCard3Step1, t1.featuresCard3Step2, t1.featuresCard3Step3],
    'dokumentera-med-foton-pa-bygget': [t2.featuresCard4Step1, t2.featuresCard4Step2, t2.featuresCard4Step3],
    'dagsplanering-och-planeringsmoten': [t2.featuresCard5Step1, t2.featuresCard5Step2, t2.featuresCard5Step3],
    'hantera-verktyg-och-utrustning': [t2.featuresCard6Step1, t2.featuresCard6Step2, t2.featuresCard6Step3],
    'skapa-offert-i-byggexp': [t3.featuresCard7Step1, t3.featuresCard7Step2, t3.featuresCard7Step3],
    'fakturera-fran-byggexp': [t3.featuresCard8Step1, t3.featuresCard8Step2, t3.featuresCard8Step3],
    'projektekonomi-och-lonsamhet': [t3.featuresCard9Step1, t3.featuresCard9Step2, t3.featuresCard9Step3],
    'fota-kvitton-och-hantera-utlagg': [t4.featuresCard10Step1, t4.featuresCard10Step2, t4.featuresCard10Step3],
    'loneunderlag-for-byggforetag': [t4.featuresCard11Step1, t4.featuresCard11Step2, t4.featuresCard11Step3],
    'paminnelser-uppgifter-och-deadlines': PAMINNELSER_STEPS[lang],
  };
  return map[slug] ?? [];
}

const FUNKTIONER_COPY = {
  sv: {
    badge: 'Funktioner',
    title: 'Alla funktioner i ByggExp',
    subtitle:
      'Utforska vad ByggExp gör – från offert och tidrapportering till fakturor och löner. Klicka på en funktion för att läsa hur den fungerar.',
    empty: 'Inga funktioner ännu.',
    customTitle: 'Vi bygger funktioner efter era behov',
    customBody:
      'Varje företag har sina egna arbetssätt. ByggExp är inte bara en färdig standardlösning – det är en plattform som vi gärna vidareutvecklar efter era behov. Berätta om era utmaningar och önskemål, så bygger vi det snabbt och med kvalitet. Era idéer blir en del av nya funktioner och uppdateringar i ByggExp.',
    customCta: 'Boka en demo',
    whyTitle: 'Fortfarande osäker?',
    why: [
      {
        title: 'Enkel start',
        body: 'Kräver inga särskilda kunskaper. Vi hjälper er att sätta upp och komma igång med teamet.',
      },
      {
        title: 'Säkerhet och kontroll över data',
        body: 'Din information är skyddad – du kan alltid återställa och exportera dina data.',
      },
      {
        title: 'Flexibelt efter era processer',
        body: 'Vi anpassar ByggExp efter era behov – berätta bara vad som är viktigt för er.',
      },
      {
        title: 'Fungerar på alla enheter',
        body: 'Mobil, surfplatta, dator – välj det som passar ert team.',
      },
      {
        title: 'Support alltid nära',
        body: 'Vi finns till hands för alla frågor – snabbt och på ett mänskligt sätt.',
      },
    ],
  },
  en: {
    badge: 'Features',
    title: 'All ByggExp features',
    subtitle:
      'Explore what ByggExp does – from quotes and time tracking to invoices and payroll. Click a feature to read how it works.',
    empty: 'No features yet.',
    customTitle: 'We build features around your needs',
    customBody:
      "Every company has its own way of working. ByggExp isn't just an off-the-shelf solution – it's a platform we're happy to extend to fit your needs. Tell us about your challenges and wishes, and we'll build it fast and with quality. Your ideas become part of new features and updates in ByggExp.",
    customCta: 'Book a demo',
    whyTitle: 'Still not sure?',
    why: [
      {
        title: 'Easy to start',
        body: 'No special skills required. We help you set it up and get your team going.',
      },
      {
        title: 'Security and control of your data',
        body: 'Your information is protected – you can always restore and export your data.',
      },
      {
        title: 'Flexible to your processes',
        body: 'We adapt ByggExp to your needs – just tell us what matters to you.',
      },
      {
        title: 'Works on all devices',
        body: 'Phone, tablet, computer – choose what suits your team.',
      },
      {
        title: 'Support always close by',
        body: "We're here for any questions – fast and in a human way.",
      },
    ],
  },
  ru: {
    badge: 'Функции',
    title: 'Все возможности ByggExp',
    subtitle:
      'Что умеет ByggExp — от смет и учёта времени до счетов и зарплаты. Нажмите на функцию, чтобы узнать, как она работает.',
    empty: 'Пока нет функций.',
    customTitle: 'Разработаем функции под ваши задачи',
    customBody:
      'У каждой компании свои процессы. ByggExp — не просто готовое решение, а платформа, которую мы дорабатываем под ваши нужды. Расскажите о своих задачах и пожеланиях — реализуем быстро и качественно. Ваши идеи становятся частью новых функций и обновлений ByggExp.',
    customCta: 'Записаться на демо',
    whyTitle: 'Всё ещё сомневаетесь?',
    why: [
      {
        title: 'Лёгкий старт',
        body: 'Не требует специальных знаний. Поможем настроить и запустить для вашей команды.',
      },
      {
        title: 'Безопасность и контроль данных',
        body: 'Ваша информация под защитой — всегда можно восстановить и выгрузить данные.',
      },
      {
        title: 'Гибкость под ваши процессы',
        body: 'Адаптируем ByggExp под ваши задачи — просто расскажите, что важно для вас.',
      },
      {
        title: 'Работает на всех устройствах',
        body: 'Смартфон, планшет, компьютер — выбирайте то, что удобно вашей команде.',
      },
      {
        title: 'Поддержка всегда рядом',
        body: 'Мы на связи по любым вопросам — быстро и по-человечески.',
      },
    ],
  },
} as const;

export const getServerSideProps: GetServerSideProps<FunktionerPageProps> = async ({
  params,
}) => {
  const lang = params?.lang as LandingLanguageCode;

  if (!landingLanguageCodes.includes(lang)) {
    return { notFound: true };
  }

  try {
    const posts = await fetchPublishedBlogPosts(lang);
    return {
      props: {
        lang,
        posts: posts.filter((post) => FEATURE_ARTICLE_SLUGS.has(post.slug)),
      },
    };
  } catch {
    return { props: { lang, posts: [] } };
  }
};

function FeatureCarousel({
  lang,
  posts,
  badge,
}: {
  lang: LandingLanguageCode;
  posts: BlogPost[];
  badge: string;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const N = posts.length;
  // Loop the carousel by cloning the last feature before the first and the
  // first after the last, so there's always a neighbour peeking on both sides
  // — even on the very first card. Needs at least two real features.
  const loop = N > 1;
  const offset = loop ? 1 : 0;

  // The rendered (extended) slide list: [cloneOfLast, ...posts, cloneOfFirst].
  const slides = useMemo(() => {
    if (!loop) return posts;
    return [posts[N - 1], ...posts, posts[0]];
  }, [posts, loop, N]);

  // activeExt = index into the extended list. Start on the first real card.
  const [activeExt, setActiveExt] = useState(offset);
  const activeExtRef = useRef(offset);
  // Map an extended index back to the real feature index (0..N-1).
  const extToReal = useCallback(
    (e: number) => {
      if (!loop) return e;
      if (e === 0) return N - 1;
      if (e === N + 1) return 0;
      return e - 1;
    },
    [loop, N],
  );
  const activeReal = extToReal(activeExt);

  const [lightbox, setLightbox] = useState<{ url: string; alt: string } | null>(null);

  // One pill per feature, in carousel order.
  const pills = useMemo(
    () => posts.map((post) => ({ slug: post.slug, label: featureTag(post, lang, badge) })),
    [posts, lang, badge],
  );

  // Bring a given extended slide to the centre of the peek carousel.
  const centerExt = useCallback((extIndex: number, smooth = true) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[extIndex] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({
      left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2,
      behavior: smooth ? 'smooth' : 'auto',
    });
  }, []);

  // As the user scrolls, mark whichever slide is closest to the centre active;
  // once scrolling settles on a clone, jump silently to its real twin.
  const handleScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const mid = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const c = child as HTMLElement;
      const dist = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActiveExt(best);

    if (!loop) return;
    if (settleTimer.current) clearTimeout(settleTimer.current);
    settleTimer.current = setTimeout(() => {
      if (best === 0) {
        setActiveExt(N);
        centerExt(N, false); // cloneOfLast -> real last
      } else if (best === N + 1) {
        setActiveExt(1);
        centerExt(1, false); // cloneOfFirst -> real first
      }
    }, 130);
  }, [loop, N, centerExt]);

  useEffect(() => {
    activeExtRef.current = activeExt;
  }, [activeExt]);

  // Centre the first card on mount and keep the active one centred on resize.
  useEffect(() => {
    centerExt(offset, false);
    const onResize = () => centerExt(activeExtRef.current, false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [centerExt, offset]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  // Centre a specific extended slide (clones settle to their twin on scroll).
  const selectExt = (extIndex: number) => {
    setActiveExt(extIndex);
    centerExt(extIndex, true);
  };
  // Centre a real feature by its index (used by pills and dots).
  const goToReal = (realIndex: number) => selectExt(realIndex + offset);

  const goNext = () => {
    if (loop && activeReal === N - 1) selectExt(N + 1); // into cloneOfFirst, then wrap
    else goToReal(Math.min(activeReal + 1, N - 1));
  };
  const goPrev = () => {
    if (loop && activeReal === 0) selectExt(0); // into cloneOfLast, then wrap
    else goToReal(Math.max(activeReal - 1, 0));
  };

  return (
    <>
      {pills.length > 0 ? (
        <div className="blog-filter funktioner-filter" role="tablist" aria-label="Funktioner">
          {pills.map((pill, i) => (
            <button
              key={pill.slug}
              type="button"
              className={`blog-filter-chip${activeReal === i ? ' is-active' : ''}`}
              aria-pressed={activeReal === i}
              onClick={() => goToReal(i)}
            >
              {pill.label}
            </button>
          ))}
        </div>
      ) : null}

      <div className="funktioner-carousel">
        <button
          type="button"
          className="fc-arrow fc-prev"
          aria-label="Föregående"
          onClick={goPrev}
          disabled={!loop && activeReal === 0}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="funktioner-carousel-track" ref={trackRef} onScroll={handleScroll}>
          {slides.map((post, i) => {
            const steps = featureSteps(post.slug, lang);
            const title = featureTitle(post, lang);
            const isActive = i === activeExt;
            return (
              <div
                key={`${post._id}-${i}`}
                className={`funktioner-slide${isActive ? ' is-active' : ''}`}
                onClick={() => selectExt(i)}
              >
                {post.coverImageUrl ? (
                  <div className="fk-visual">
                    <img
                      src={post.coverImageUrl}
                      alt={title}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isActive) setLightbox({ url: post.coverImageUrl!, alt: title });
                        else selectExt(i);
                      }}
                    />
                  </div>
                ) : null}
                <div className="fk-text">
                  <h3>{title}</h3>
                  <p>{featureExcerpt(post, lang)}</p>
                  {steps.length > 0 ? (
                    <ul className="fk-steps">
                      {steps.map((step, si) => (
                        <li key={si}>
                          <span className="fk-step-num">{si + 1}</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <Link
                    className="fk-link"
                    href={`/${lang}/blog/${encodeURIComponent(post.slug)}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {READ_MORE[lang] ?? READ_MORE.sv}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className="fc-arrow fc-next"
          aria-label="Nästa"
          onClick={goNext}
          disabled={!loop && activeReal === N - 1}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {N > 1 ? (
        <div className="fc-dots" aria-label="Funktioner">
          {posts.map((post, i) => (
            <button
              key={post._id}
              type="button"
              className={`fc-dot${activeReal === i ? ' is-active' : ''}`}
              aria-label={pills[i]?.label}
              aria-current={activeReal === i ? 'true' : undefined}
              onClick={() => goToReal(i)}
            />
          ))}
        </div>
      ) : null}

      {lightbox ? (
        <div className="fk-lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}>
          <button type="button" className="fk-lightbox-close" aria-label="Stäng" onClick={() => setLightbox(null)}>
            ×
          </button>
          <img src={lightbox.url} alt={lightbox.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      ) : null}
    </>
  );
}

export default function FunktionerPage({
  lang,
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const copy = FUNKTIONER_COPY[lang];
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/funktioner`;
  const hreflangAlternates = buildHreflangAlternates(
    (code) => `${localeOrigin(code)}/${code}/funktioner`,
  );

  return (
    <>
      <Head>
        <title>{copy.title} | ByggExp</title>
        <meta name="description" content={copy.subtitle} />
        <link rel="canonical" href={canonicalUrl} />
        {hreflangAlternates.map((alt) => (
          <link key={alt.hrefLang} rel="alternate" hrefLang={alt.hrefLang} href={alt.href} />
        ))}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${copy.title} | ByggExp`} />
        <meta property="og:description" content={copy.subtitle} />
        <meta property="og:url" content={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'ByggExp',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'iOS, Android, Web',
              description: copy.subtitle,
              url: canonicalUrl,
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: lang === 'en' ? 'Home' : lang === 'nb' ? 'Hjem' : 'Hem',
                  item: `${localeOrigin(lang)}/${lang}`,
                },
                { '@type': 'ListItem', position: 2, name: copy.title, item: canonicalUrl },
              ],
            }),
          }}
        />
      </Head>
      <Header headerT={headerT} />

      <section className="blog-hero">
        <div className="container container-narrow">
          <span className="blog-badge">{copy.badge}</span>
          <h1>{copy.title}</h1>
          <p className="blog-hero-subtitle">{copy.subtitle}</p>
        </div>
      </section>

      <section className="blog-list-section funktioner-list-section">
        <div className="container">
          {posts.length === 0 ? (
            <div className="blog-empty-state">{copy.empty}</div>
          ) : (
            <FeatureCarousel lang={lang} posts={posts} badge={copy.badge} />
          )}
        </div>
      </section>

      <section className="funktioner-custom">
        <div className="container container-narrow">
          <div className="funktioner-custom-card">
            <h2>{copy.customTitle}</h2>
            <p>{copy.customBody}</p>
            <Link href={`/${lang}#cta`} className="funktioner-custom-cta">
              {copy.customCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="funktioner-why">
        <div className="container container-narrow">
          <h2 className="funktioner-why-title">{copy.whyTitle}</h2>
          <div className="funktioner-why-grid">
            {copy.why.map((item) => (
              <div key={item.title} className="funktioner-why-item">
                <span className="funktioner-why-check" aria-hidden="true">✓</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer footerT={footerT} />

      <style jsx global>{`
        /* Match the hero→pills gap (64px) below the pills too: the track adds
           12px top padding, so 52 + 12 = 64. */
        .funktioner-filter {
          margin-bottom: 52px;
        }
        .funktioner-carousel {
          position: relative;
        }
        /* Peek carousel: the active feature sits centred and sharp, its
           neighbours peek in on both sides, dimmed and blurred. */
        .funktioner-carousel-track {
          display: flex;
          gap: 28px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding: 12px 16% 44px;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .funktioner-carousel-track::-webkit-scrollbar {
          display: none;
        }
        .funktioner-slide {
          scroll-snap-align: center;
          flex: 0 0 68%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 26px;
          padding: 32px 36px 38px;
          background: #fff;
          border-radius: 22px;
          box-shadow: 0 18px 44px rgba(10, 40, 90, 0.08);
          cursor: pointer;
          opacity: 0.4;
          filter: blur(2px);
          transform: scale(0.92);
          transition:
            opacity 0.3s ease,
            filter 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }
        .funktioner-slide.is-active {
          opacity: 1;
          filter: none;
          transform: scale(1);
          cursor: default;
          box-shadow: 0 18px 44px -22px rgba(11, 37, 69, 0.38);
        }
        .fk-text {
          flex: 1;
          min-width: 0;
        }
        .fk-text h3 {
          margin: 0 0 12px;
          font-size: clamp(21px, 2.3vw, 29px);
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #0b2545;
        }
        .fk-text > p {
          margin: 0 0 20px;
          font-size: 16px;
          line-height: 1.6;
          color: #4a5a72;
        }
        .fk-steps {
          list-style: none;
          margin: 0 0 22px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .fk-steps li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: #0b2545;
        }
        .fk-step-num {
          flex: 0 0 auto;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #e3edfd;
          color: #1c6cf3;
          font-size: 13px;
          font-weight: 700;
        }
        .fk-link {
          display: inline-block;
          color: #1c6cf3;
          font-weight: 600;
          text-decoration: none;
        }
        .fk-link:hover {
          text-decoration: underline;
        }
        .fk-visual {
          width: 100%;
        }
        .fk-visual img {
          display: block;
          width: 100%;
          max-height: 400px;
          object-fit: contain;
          border-radius: 14px;
          background: rgba(10, 40, 90, 0.03);
          cursor: zoom-in;
        }
        .fc-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 50%;
          background: #fff;
          color: #0b2545;
          cursor: pointer;
          box-shadow: 0 12px 30px -8px rgba(11, 37, 69, 0.35);
          transition: background 0.15s ease, opacity 0.15s ease;
        }
        .fc-arrow:hover:not(:disabled) {
          background: #1c6cf3;
          color: #fff;
        }
        .fc-arrow:disabled {
          opacity: 0;
          pointer-events: none;
        }
        .fc-prev {
          left: 8px;
        }
        .fc-next {
          right: 8px;
        }
        .fc-dots {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 6px;
        }
        .fc-dot {
          width: 9px;
          height: 9px;
          padding: 0;
          border: none;
          border-radius: 50%;
          background: rgba(11, 37, 69, 0.18);
          cursor: pointer;
          transition: background 0.15s ease, transform 0.15s ease;
        }
        .fc-dot:hover {
          background: rgba(11, 37, 69, 0.4);
        }
        .fc-dot.is-active {
          background: #1c6cf3;
          transform: scale(1.25);
        }
        @media (max-width: 900px) {
          .funktioner-carousel-track {
            padding: 12px 8% 46px;
          }
          .funktioner-slide {
            flex-basis: 84%;
            gap: 20px;
            padding: 22px 22px 26px;
          }
          .fk-visual img {
            max-height: 300px;
          }
        }
        @media (max-width: 620px) {
          .funktioner-slide {
            flex-basis: 88%;
            filter: none;
          }
          .fc-arrow {
            display: none;
          }
        }
        .fk-lightbox {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4vw;
          background: rgba(6, 18, 38, 0.82);
          backdrop-filter: blur(4px);
          cursor: zoom-out;
          animation: fk-lb-fade 0.16s ease;
        }
        @keyframes fk-lb-fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .fk-lightbox img {
          max-width: min(1100px, 96vw);
          max-height: 90vh;
          object-fit: contain;
          border-radius: 14px;
          box-shadow: 0 40px 90px -30px rgba(0, 0, 0, 0.7);
          cursor: default;
        }
        .fk-lightbox-close {
          position: absolute;
          top: 18px;
          right: 22px;
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.14);
          color: #fff;
          font-size: 30px;
          line-height: 1;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        .fk-lightbox-close:hover {
          background: rgba(255, 255, 255, 0.28);
        }
        /* Vertical rhythm: 64px above the carousel and 64px between each of
           the three blocks (split 32/32 across adjacent section paddings). */
        .funktioner-list-section {
          padding: 64px 0 32px;
        }
        .funktioner-why {
          padding: 80px 20px 56px;
          background: #f4f6fa;
        }
        .funktioner-why-title {
          text-align: center;
          font-size: clamp(22px, 3.2vw, 30px);
          letter-spacing: -0.02em;
          color: #0b2545;
          margin: 0 0 32px;
        }
        .funktioner-why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px 32px;
        }
        .funktioner-why-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .funktioner-why-check {
          flex: 0 0 auto;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #e3edfd;
          color: #1c6cf3;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          margin-top: 2px;
        }
        .funktioner-why-item h3 {
          margin: 0 0 4px;
          font-size: 17px;
          color: #0b2545;
          letter-spacing: -0.01em;
        }
        .funktioner-why-item p {
          margin: 0;
          font-size: 15px;
          line-height: 1.6;
          color: #4a5a72;
        }
        .funktioner-custom {
          padding: 32px 20px 32px;
          background: #f4f6fa;
        }
        .funktioner-custom-card {
          background: linear-gradient(135deg, #0b2545 0%, #123a6b 100%);
          color: #fff;
          border-radius: 22px;
          padding: 48px 44px;
          text-align: center;
          box-shadow: 0 30px 70px -34px rgba(11, 37, 69, 0.55);
        }
        .funktioner-custom-card h2 {
          font-size: clamp(22px, 3.2vw, 30px);
          line-height: 1.15;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }
        .funktioner-custom-card p {
          max-width: 640px;
          margin: 0 auto 28px;
          font-size: 16px;
          line-height: 1.7;
          color: #cfdcf2;
        }
        .funktioner-custom-cta {
          display: inline-block;
          background: #1c6cf3;
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          padding: 14px 30px;
          border-radius: 12px;
          transition: background 0.15s ease;
        }
        .funktioner-custom-cta:hover {
          background: #155ad1;
        }
        @media (max-width: 640px) {
          .funktioner-why-grid {
            grid-template-columns: 1fr;
          }
          .funktioner-custom-card {
            padding: 34px 22px;
          }
        }
      `}</style>
    </>
  );
}
