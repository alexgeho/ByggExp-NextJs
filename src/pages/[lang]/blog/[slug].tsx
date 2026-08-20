import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import { fetchPublishedBlogPost, fetchPublishedBlogPosts } from '../../../lib/blog-api';
import { getBlogTools } from '../../../content/blog-tools';
import { FEATURE_ARTICLE_SLUGS } from '../../../content/feature-articles';
import { extractFaqFromHtml } from '../../../lib/faq';
import { getMockBlogPost } from '../../../lib/blog-mock';
import { getCodeArticle, getCodeArticles } from '../../../content/code-articles';
import { categoryForTag } from '../../../lib/blog-categories';
import { isSvOnlyArticle } from '../../../content/sv-only-articles';
import { buildHreflangAlternates, localeOrigin } from '../../../lib/seo';
import { blogPageTranslations } from '../../../locales/blog';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';
import {
  landingLanguageCodes,
  type LandingLanguageCode,
} from '../../../locales/languages';
import type { BlogPost } from '../../../types/blog';

// Feature articles with custom mockups in /public/features-inner:
//   <slug>-laptop.webp -> the hero (computer, full width, on top)
//   <slug>-phone.webp  -> replaces the generic inline phone in the article body
// Add a slug here once both files exist.
const FEATURE_INNER_SLUGS = new Set<string>([
  'automatisk-tidrapportering-och-export',
  'paminnelser-uppgifter-och-deadlines',
]);

type BlogArticlePageProps = {
  lang: LandingLanguageCode;
  post: BlogPost;
  related: BlogPost[];
};

// Best-effort: fetch a few other published posts to suggest at the end of the
// article. Never let this break the page — return [] on any failure.
async function getRelatedPosts(
  lang: LandingLanguageCode,
  currentSlug: string,
): Promise<BlogPost[]> {
  // Pool = code articles + CMS posts, deduped. Prefer same-category articles so
  // "Liknande artiklar" is actually related, then fill up to 8 for the carousel.
  let pool: BlogPost[] = getCodeArticles(lang);
  try {
    const cms = await fetchPublishedBlogPosts(lang);
    const seen = new Set(pool.map((p) => p.slug));
    pool = [...pool, ...cms.filter((p) => !seen.has(p.slug))];
  } catch {
    // CMS unavailable — code articles still fill the carousel.
  }
  const current = pool.find((p) => p.slug === currentSlug);
  const cat = current ? categoryForTag(current.tag) : null;
  const others = pool.filter((p) => p.slug !== currentSlug);
  const same = cat ? others.filter((p) => categoryForTag(p.tag) === cat) : [];
  const sameSlugs = new Set(same.map((p) => p.slug));
  const rest = others.filter((p) => !sameSlugs.has(p.slug));
  return [...same, ...rest].slice(0, 8);
}

export const getServerSideProps: GetServerSideProps<
  BlogArticlePageProps
> = async ({ params }) => {
  const lang = params?.lang as LandingLanguageCode;
  const slug = params?.slug as string;

  if (!landingLanguageCodes.includes(lang) || !slug) {
    return { notFound: true };
  }

  try {
    const post = await fetchPublishedBlogPost(lang, slug);
    const related = await getRelatedPosts(lang, slug);

    return {
      props: {
        lang,
        post,
        related,
      },
    };
  } catch {
    // Not in the CMS: serve a code-published article (real, indexable) if we
    // have one for this slug, otherwise fall back to a placeholder mock.
    const codeArticle = getCodeArticle(lang, slug);
    if (codeArticle) {
      const related = await getRelatedPosts(lang, slug);
      return { props: { lang, post: codeArticle, related } };
    }
    const mock = getMockBlogPost(lang, slug);
    if (mock) {
      return { props: { lang, post: mock, related: [] } };
    }
    return { notFound: true };
  }
};

export default function BlogArticlePage({
  lang,
  post,
  related,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const copy = blogPageTranslations[lang];
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = post.canonicalUrl || `${localeOrigin(lang)}/${lang}/blog/${encodeURIComponent(post.slug)}`;
  // Most slugs are shared across locales, so the same article path exists per
  // language. Market-specific articles are Swedish-only, though — for those we
  // must not emit en/ru alternates (those URLs don't exist → hreflang-to-404).
  const svOnly = isSvOnlyArticle(post.slug);
  const hreflangAlternates = svOnly
    ? []
    : buildHreflangAlternates(
        (code) => `${localeOrigin(code)}/${code}/blog/${encodeURIComponent(post.slug)}`,
      );
  const title = post.seoTitle || `${post.title} | ByggExp`;
  const description = post.seoDescription || post.excerpt;
  // Feature articles get a dedicated, per-slug hero under /public/features so
  // each one shows the mockup that matches its feature (no shared-file reuse
  // like the CMS /landing/features covers). Falls back to the CMS cover for
  // any non-feature post.
  const hasInner = FEATURE_INNER_SLUGS.has(post.slug);
  const heroLaptop = hasInner
    ? `/features-inner/${post.slug}-laptop.webp`
    : null;
  const bodyPhone = hasInner
    ? `/features-inner/${post.slug}-phone.webp`
    : null;
  const featureCover = FEATURE_ARTICLE_SLUGS.has(post.slug)
    ? `/features/${post.slug}.webp`
    : null;
  const coverImageUrl = heroLaptop || featureCover || post.coverImageUrl;
  const image = heroLaptop
    ? `${siteUrl}${heroLaptop}`
    : featureCover
      ? `${siteUrl}${featureCover}`
      : post.seoImageUrl || post.coverImageUrl;
  // Swap the generic inline phone mockup (/landing/screen-*.png) in the body
  // for this feature's own phone, so the in-article screenshot is relevant.
  // Body phone handling for feature articles:
  //  - has a custom phone  -> swap the generic /landing/screen-*.png for it
  //  - feature but no phone -> drop the generic (irrelevant) phone entirely
  //  - other posts          -> leave untouched
  let contentHtml = post.contentHtml;
  if (bodyPhone) {
    contentHtml = contentHtml.replace(/\/landing\/screen-[a-z]+\.png/g, bodyPhone);
  } else if (FEATURE_ARTICLE_SLUGS.has(post.slug)) {
    contentHtml = contentHtml.replace(
      /<img[^>]*\/landing\/screen-[a-z]+\.png[^>]*>/g,
      '',
    );
  }

  // Click the hero to open it in a full-screen lightbox (Esc or click to close).
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  useEffect(() => {
    if (!lightboxImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxImage]);
  const faq = extractFaqFromHtml(post.contentHtml, lang);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        {post.noIndex
          ? null
          : hreflangAlternates.map((alt) => (
              <link key={alt.hrefLang} rel="alternate" hrefLang={alt.hrefLang} href={alt.href} />
            ))}
        {post.noIndex ? <meta name="robots" content="noindex, nofollow" /> : null}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        {image ? <meta property="og:image" content={image} /> : null}
        <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image ? <meta name="twitter:image" content={image} /> : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description,
              image: image || undefined,
              datePublished: post.publishedAt || post.createdAt,
              dateModified: post.updatedAt,
              mainEntityOfPage: canonicalUrl,
            }),
          }}
        />
        {!post.noIndex && faq.length > 0 ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faq.map((item) => ({
                  '@type': 'Question',
                  name: item.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.answer,
                  },
                })),
              }),
            }}
          />
        ) : null}
      </Head>

      <Header headerT={headerT} />

      <article className="blog-article">
        <div className="container container-narrow">
          <nav className="blog-breadcrumbs" aria-label="Breadcrumb">
            <Link href={`/${lang}`}>{copy.home}</Link>
            <span>/</span>
            <Link href={`/${lang}/blog`}>{copy.badge}</Link>
            <span>/</span>
            <span className="blog-breadcrumbs-current">{post.title}</span>
          </nav>

          <div className="blog-article-head">
            <h1>{post.title}</h1>
            <p className="blog-article-date">
              {formatDate(post.publishedAt || post.createdAt, lang)}
            </p>
          </div>

          {coverImageUrl ? (
            <img
              src={coverImageUrl}
              alt={post.title}
              className="blog-article-cover"
              onClick={() => setLightboxImage(coverImageUrl)}
            />
          ) : null}

          <div
            className="blog-article-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {lang === 'sv' ? (
            <aside className="blog-tools" aria-label="Gratis verktyg">
              <h2>Gratis verktyg</h2>
              <ul>
                {getBlogTools(post.slug).map((tool) => (
                  <li key={tool.href}>
                    <Link href={tool.href}>{tool.label}</Link>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </div>
      </article>

      {related.length > 0 ? (
        <section className="blog-related">
          <div className="container container-narrow">
            <h2 className="blog-related-title">{copy.related}</h2>
            <div className="blog-related-grid">
              {related.map((item) => (
                <Link
                  key={item._id || item.slug}
                  href={`/${lang}/blog/${encodeURIComponent(item.slug)}`}
                  className="blog-card"
                >
                  {item.coverImageUrl ? (
                    <img
                      src={item.coverImageUrl}
                      alt={item.title}
                      className="blog-card-image"
                    />
                  ) : null}
                  <div className="blog-card-body">
                    <span className="blog-tag">{item.tag || copy.badge}</span>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Footer footerT={footerT} />

      {lightboxImage && (
        <div className="image-lightbox" onClick={() => setLightboxImage(null)}>
          <button
            type="button"
            className="image-lightbox-close"
            onClick={() => setLightboxImage(null)}
            aria-label="Stäng"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="m5 5 14 14M19 5 5 19"
              />
            </svg>
          </button>
          <img
            src={lightboxImage}
            alt=""
            className="image-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

function formatDate(value: string, lang: LandingLanguageCode) {
  const locale = lang === 'sv' ? 'sv-SE' : lang === 'ru' ? 'ru-RU' : 'en-US';
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(value));
}
