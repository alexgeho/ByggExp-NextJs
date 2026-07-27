import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import { fetchPublishedBlogPost } from '../../../lib/blog-api';
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

  return (
    <>
      <Head>
        <title>{post.title} | ByggExp</title>
        <meta name="description" content={post.excerpt} />
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
