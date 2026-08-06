import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import { fetchPublishedBlogPost } from '../../../lib/blog-api';
import { getMockBlogPost } from '../../../lib/blog-mock';
import { blogPageTranslations } from '../../../locales/blog';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';
import {
  landingLanguageCodes,
  type LandingLanguageCode,
} from '../../../locales/languages';
import type { BlogPost } from '../../../types/blog';

type BlogArticlePageProps = {
  lang: LandingLanguageCode;
  post: BlogPost;
};

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

    return {
      props: {
        lang,
        post,
      },
    };
  } catch {
    // Fall back to a placeholder article if it matches a mock slug.
    const mock = getMockBlogPost(lang, slug);
    if (mock) {
      return { props: { lang, post: mock } };
    }
    return { notFound: true };
  }
};

export default function BlogArticlePage({
  lang,
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const copy = blogPageTranslations[lang];
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = post.canonicalUrl || `${siteUrl}/${lang}/blog/${encodeURIComponent(post.slug)}`;
  const title = post.seoTitle || `${post.title} | ByggExp`;
  const description = post.seoDescription || post.excerpt;
  const image = post.seoImageUrl || post.coverImageUrl;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
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

          {post.coverImageUrl ? (
            <img src={post.coverImageUrl} alt={post.title} className="blog-article-cover" />
          ) : null}

          <div
            className="blog-article-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </article>

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
