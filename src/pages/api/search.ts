import type { NextApiRequest, NextApiResponse } from 'next';

import { getCodeArticles } from '../../content/code-articles';
import { VERKTYG_GROUPS } from '../../content/verktyg-list';
import { fetchPublishedBlogPosts } from '../../lib/blog-api';
import { landingLanguageCodes, type LandingLanguageCode } from '../../locales/languages';

export type SearchItem = {
  type: 'article' | 'tool';
  title: string;
  excerpt: string;
  tag: string;
  url: string;
};

// Site-wide search index for the header search. Merges code articles, CMS posts
// and the free tools so a visitor can jump to anything from any page. Cached at
// the edge for an hour — the index changes rarely.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ items: SearchItem[] }>,
) {
  const langParam = (req.query.lang as string) || 'sv';
  const lang = (landingLanguageCodes.includes(langParam as LandingLanguageCode)
    ? langParam
    : 'sv') as LandingLanguageCode;

  const items: SearchItem[] = [];
  const seen = new Set<string>();

  const pushArticle = (post: {
    title: string;
    slug: string;
    tag?: string;
    excerpt?: string;
  }) => {
    if (seen.has(post.slug)) return;
    seen.add(post.slug);
    items.push({
      type: 'article',
      title: post.title,
      excerpt: post.excerpt || '',
      tag: post.tag || '',
      url: `/${lang}/blog/${post.slug}`,
    });
  };

  // CMS posts win on slug collisions with code articles.
  try {
    const posts = await fetchPublishedBlogPosts(lang);
    posts.forEach(pushArticle);
  } catch {
    // CMS unavailable — code articles still cover the bulk of the content.
  }
  getCodeArticles(lang).forEach(pushArticle);

  // Free tools (sv/nb markets only).
  if (lang === 'sv' || lang === 'nb') {
    VERKTYG_GROUPS.forEach((group) => {
      group.items.forEach((tool) => {
        items.push({
          type: 'tool',
          title: tool.label,
          excerpt: group.title,
          tag: group.title,
          url: `/${lang}/verktyg/${tool.slug}`,
        });
      });
    });
  }

  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
  res.status(200).json({ items });
}
