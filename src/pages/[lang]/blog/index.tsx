import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { useRouter } from 'next/router';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import { fetchPublishedBlogPosts } from '../../../lib/blog-api';
import { getMockBlogPosts } from '../../../lib/blog-mock';
import { getCodeArticles } from '../../../content/code-articles';
import { VERKTYG_GROUPS } from '../../../content/verktyg-list';
import {
  BLOG_CATEGORIES,
  categoryForTag,
  type BlogCategoryKey,
} from '../../../lib/blog-categories';
import { buildHreflangAlternates, localeOrigin } from '../../../lib/seo';
import { blogPageTranslations } from '../../../locales/blog';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';
import {
  landingLanguageCodes,
  type LandingLanguageCode,
} from '../../../locales/languages';
import type { BlogPost } from '../../../types/blog';

type BlogIndexPageProps = {
  lang: LandingLanguageCode;
  posts: BlogPost[];
};

export const getServerSideProps: GetServerSideProps<
  BlogIndexPageProps
> = async ({ params }) => {
  const lang = params?.lang as LandingLanguageCode;

  if (!landingLanguageCodes.includes(lang)) {
    return { notFound: true };
  }

  // Code-published articles (real, indexable) always lead the list; CMS wins
  // on slug collisions.
  const codeArticles = getCodeArticles(lang);
  const withCodeArticles = (base: BlogPost[]) => {
    const slugs = new Set(base.map((post) => post.slug));
    return [...codeArticles.filter((post) => !slugs.has(post.slug)), ...base];
  };

  try {
    const posts = await fetchPublishedBlogPosts(lang);
    return {
      props: {
        lang,
        // Show placeholder articles only while the CMS has no published posts.
        posts: withCodeArticles(posts.length > 0 ? posts : getMockBlogPosts(lang)),
      },
    };
  } catch {
    return {
      props: {
        lang,
        posts: withCodeArticles(getMockBlogPosts(lang)),
      },
    };
  }
};

export default function BlogIndexPage({
  lang,
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const copy = blogPageTranslations[lang];
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/blog`;
  const hreflangAlternates = buildHreflangAlternates((code) => `${localeOrigin(code)}/${code}/blog`);

  const [activeCategory, setActiveCategory] = useState<BlogCategoryKey | 'alla'>('alla');
  const [query, setQuery] = useState('');

  // Pre-select a category when arriving via a header link (/blog?kategori=kalkyl).
  const router = useRouter();
  useEffect(() => {
    const k = router.query.kategori;
    if (typeof k === 'string' && BLOG_CATEGORIES.some((c) => c.key === k)) {
      setActiveCategory(k as BlogCategoryKey);
    }
  }, [router.query.kategori]);

  // Only offer categories that actually have articles in the current list.
  const presentCategories = useMemo(() => {
    const present = new Set(posts.map((post) => categoryForTag(post.tag)));
    return BLOG_CATEGORIES.filter((cat) => present.has(cat.key));
  }, [posts]);

  // Split the query into words and require ALL of them to match (AND), so a
  // multi-word query like "betong kalkylator" works instead of being matched as
  // one literal substring.
  const words = useMemo(
    () => query.trim().toLowerCase().split(/\s+/).filter(Boolean),
    [query],
  );
  const matchAll = (text: string) => words.every((w) => text.includes(w));

  // Client-side filtering only: every post is still server-rendered in the HTML
  // (crawlable) and no URL params are created, so no thin/duplicate filter URLs
  // for Google to waste crawl budget on.
  const visiblePosts = useMemo(() => {
    return posts.filter((post) => {
      if (activeCategory !== 'alla' && categoryForTag(post.tag) !== activeCategory) {
        return false;
      }
      if (words.length === 0) return true;
      const hay = `${post.title} ${post.excerpt || ''} ${post.tag || ''}`.toLowerCase();
      return matchAll(hay);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts, activeCategory, words]);

  // Also surface matching free tools (calculators/templates) so a search like
  // "betong kalkylator" finds the tool, not just articles. sv/nb markets only.
  const matchedTools = useMemo(() => {
    if (words.length === 0 || (lang !== 'sv' && lang !== 'nb')) return [];
    const out: { slug: string; label: string }[] = [];
    VERKTYG_GROUPS.forEach((group) => {
      group.items.forEach((tool) => {
        const hay = `${tool.label} ${group.title} verktyg kalkylator`.toLowerCase();
        if (matchAll(hay)) out.push({ slug: tool.slug, label: tool.label });
      });
    });
    return out.slice(0, 8);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words, lang]);
  const toolsHeading =
    { sv: 'Verktyg', nb: 'Verktøy', en: 'Tools', ru: 'Инструменты' }[lang] || 'Verktyg';

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
          <div className="blog-toolbar">
            <div className="blog-search">
              <svg
                className="blog-search-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                className="blog-search-input"
                placeholder={copy.searchPlaceholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label={copy.searchPlaceholder}
              />
            </div>
          </div>
          {presentCategories.length > 1 ? (
            <div className="blog-filter" role="tablist" aria-label="Kategorier">
              <button
                type="button"
                className={`blog-filter-chip${activeCategory === 'alla' ? ' is-active' : ''}`}
                aria-pressed={activeCategory === 'alla'}
                onClick={() => setActiveCategory('alla')}
              >
                Alla
              </button>
              {presentCategories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  className={`blog-filter-chip${activeCategory === cat.key ? ' is-active' : ''}`}
                  aria-pressed={activeCategory === cat.key}
                  style={{ '--chip-color': cat.color } as CSSProperties}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          ) : null}
          {matchedTools.length > 0 ? (
            <div className="blog-tools-hits">
              <h2 className="blog-tools-hits-heading">{toolsHeading}</h2>
              <div className="blog-tools-hits-list">
                {matchedTools.map((tool) => (
                  <Link key={tool.slug} href={`/${lang}/verktyg/${tool.slug}`} className="blog-tool-hit">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 2 2 6-6a4 4 0 0 0 5.4-5.4l-2.3 2.3-1.7-.3-.3-1.7 2.3-2.3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    </svg>
                    {tool.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
          {visiblePosts.length === 0 ? (
            matchedTools.length === 0 ? (
              <div className="blog-empty-state">
                {posts.length === 0 ? copy.empty : copy.noResults}
              </div>
            ) : null
          ) : (
            <div className="blog-grid">
              {visiblePosts.map((post) => (
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
