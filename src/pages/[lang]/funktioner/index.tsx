import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import { fetchPublishedBlogPosts } from '../../../lib/blog-api';
import { FEATURE_ARTICLE_SLUGS } from '../../../content/feature-articles';
import { buildHreflangAlternates, localeOrigin } from '../../../lib/seo';
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

      <section className="blog-list-section">
        <div className="container">
          {posts.length === 0 ? (
            <div className="blog-empty-state">{copy.empty}</div>
          ) : (
            <div className="blog-grid funktioner-grid">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/${lang}/blog/${encodeURIComponent(post.slug)}`}
                  className="blog-card"
                >
                  {post.coverImageUrl ? (
                    <img
                      src={post.coverImageUrl}
                      alt={post.title}
                      className="blog-card-image"
                    />
                  ) : null}
                  <div className="blog-card-body">
                    <span className="blog-tag">{post.tag || copy.badge}</span>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
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

      <Footer footerT={footerT} />

      <style jsx global>{`
        .funktioner-why {
          padding: 56px 20px 8px;
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
          padding: 40px 20px 72px;
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
