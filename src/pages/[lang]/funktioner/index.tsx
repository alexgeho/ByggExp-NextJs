import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import { fetchPublishedBlogPosts } from '../../../lib/blog-api';
import { FEATURE_ARTICLE_SLUGS } from '../../../content/feature-articles';
import { buildHreflangAlternates } from '../../../lib/seo';
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
  },
  en: {
    badge: 'Features',
    title: 'All ByggExp features',
    subtitle:
      'Explore what ByggExp does – from quotes and time tracking to invoices and payroll. Click a feature to read how it works.',
    empty: 'No features yet.',
  },
  ru: {
    badge: 'Функции',
    title: 'Все возможности ByggExp',
    subtitle:
      'Что умеет ByggExp — от смет и учёта времени до счетов и зарплаты. Нажмите на функцию, чтобы узнать, как она работает.',
    empty: 'Пока нет функций.',
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${lang}/funktioner`;
  const hreflangAlternates = buildHreflangAlternates(
    (code) => `${siteUrl}/${code}/funktioner`,
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
            <div className="blog-grid">
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

      <Footer footerT={footerT} />
    </>
  );
}
