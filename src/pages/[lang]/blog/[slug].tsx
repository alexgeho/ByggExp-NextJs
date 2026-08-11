import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import { fetchPublishedBlogPost, fetchPublishedBlogPosts } from '../../../lib/blog-api';
import { getBlogTools } from '../../../content/blog-tools';
import { extractFaqFromHtml } from '../../../lib/faq';
import { getMockBlogPost } from '../../../lib/blog-mock';
import { isSvOnlyArticle } from '../../../content/sv-only-articles';
import { buildHreflangAlternates } from '../../../lib/seo';
import { blogPageTranslations } from '../../../locales/blog';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';
import {
  landingLanguageCodes,
  type LandingLanguageCode,
} from '../../../locales/languages';
import type { BlogPost } from '../../../types/blog';

// Two ways to give a feature article a custom hero from /public/features-inner:
//  1. DEVICE_HERO_SLUGS — two separate mockups: <slug>-laptop.webp on top with
//     <slug>-phone.webp overlapping the bottom-right (composed here in CSS).
//  2. SINGLE_HERO_SLUGS — one already-composed image at <slug>.webp, rendered
//     full width as-is (use this when the mockup already contains the phone).
const DEVICE_HERO_SLUGS = new Set<string>([
  'automatisk-tidrapportering-och-export',
]);
const SINGLE_HERO_SLUGS = new Set<string>([
  'paminnelser-uppgifter-och-deadlines',
]);

// Slugs whose hero comes from /public/features/<slug>.webp (one file per
// feature, no shared-cover reuse). Keep in sync with the files in that folder.
const FEATURE_ARTICLE_SLUGS = new Set<string>([
  'skapa-offert-i-byggexp',
  'fakturera-fran-byggexp',
  'loneunderlag-for-byggforetag',
  'projektekonomi-och-lonsamhet',
  'automatisk-tidrapportering-och-export',
  'narvaro-och-incheckning-pa-bygget',
  'hantera-uppgifter-i-byggprojekt',
  'paminnelser-uppgifter-och-deadlines',
  'dagsplanering-och-planeringsmoten',
  'dokumentera-med-foton-pa-bygget',
  'fota-kvitton-och-hantera-utlagg',
  'hantera-verktyg-och-utrustning',
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
  try {
    const posts = await fetchPublishedBlogPosts(lang);
    return posts.filter((p) => p.slug !== currentSlug).slice(0, 3);
  } catch {
    return [];
  }
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
    // Fall back to a placeholder article if it matches a mock slug.
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
  const canonicalUrl = post.canonicalUrl || `${siteUrl}/${lang}/blog/${encodeURIComponent(post.slug)}`;
  // Most slugs are shared across locales, so the same article path exists per
  // language. Market-specific articles are Swedish-only, though — for those we
  // must not emit en/ru alternates (those URLs don't exist → hreflang-to-404).
  const svOnly = isSvOnlyArticle(post.slug);
  const hreflangAlternates = svOnly
    ? []
    : buildHreflangAlternates(
        (code) => `${siteUrl}/${code}/blog/${encodeURIComponent(post.slug)}`,
      );
  const title = post.seoTitle || `${post.title} | ByggExp`;
  const description = post.seoDescription || post.excerpt;
  // Feature articles get a dedicated, per-slug hero under /public/features so
  // each one shows the mockup that matches its feature (no shared-file reuse
  // like the CMS /landing/features covers). Falls back to the CMS cover for
  // any non-feature post.
  const deviceHero = DEVICE_HERO_SLUGS.has(post.slug)
    ? {
        laptop: `/features-inner/${post.slug}-laptop.webp`,
        phone: `/features-inner/${post.slug}-phone.webp`,
      }
    : null;
  const singleHero = SINGLE_HERO_SLUGS.has(post.slug)
    ? `/features-inner/${post.slug}.webp`
    : null;
  const featureCover = FEATURE_ARTICLE_SLUGS.has(post.slug)
    ? `/features/${post.slug}.webp`
    : null;
  const coverImageUrl = singleHero || featureCover || post.coverImageUrl;
  const image = deviceHero
    ? `${siteUrl}${deviceHero.laptop}`
    : singleHero
      ? `${siteUrl}${singleHero}`
      : featureCover
        ? `${siteUrl}${featureCover}`
        : post.seoImageUrl || post.coverImageUrl;
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

          {deviceHero ? (
            <div className="blog-article-hero">
              <img
                src={deviceHero.laptop}
                alt={post.title}
                className="blog-article-hero-laptop"
              />
              <img
                src={deviceHero.phone}
                alt=""
                aria-hidden="true"
                className="blog-article-hero-phone"
              />
            </div>
          ) : coverImageUrl ? (
            <img src={coverImageUrl} alt={post.title} className="blog-article-cover" />
          ) : null}

          <div
            className="blog-article-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
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
