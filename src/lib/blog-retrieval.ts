import { getCodeArticles } from '../content/code-articles';
import { fetchPublishedBlogPosts } from './blog-api';
import type { BlogLocale, BlogPost } from '../types/blog';

// Lightweight retrieval over the blog corpus for the AI assistant. Keyword
// scoring (title/tag/excerpt weighted over body) — no vector store needed for a
// few hundred articles. Good enough to ground answers and cite the right pages.

export type RetrievedArticle = {
  title: string;
  url: string;
  tag: string;
  text: string;
};

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

type Doc = {
  title: string;
  tag: string;
  slug: string;
  excerpt: string;
  body: string;
  bodyLower: string;
  titleLower: string;
};

// Per-locale corpus cache (module-level; rebuilt on cold start).
const corpusCache = new Map<string, Doc[]>();

async function getCorpus(lang: BlogLocale): Promise<Doc[]> {
  const cached = corpusCache.get(lang);
  if (cached) return cached;

  const toDoc = (post: BlogPost): Doc => {
    const body = stripHtml(post.contentHtml || '');
    return {
      title: post.title,
      tag: post.tag || '',
      slug: post.slug,
      excerpt: post.excerpt || '',
      body,
      bodyLower: body.toLowerCase(),
      titleLower: post.title.toLowerCase(),
    };
  };

  const seen = new Set<string>();
  const docs: Doc[] = [];
  try {
    const posts = await fetchPublishedBlogPosts(lang);
    posts.forEach((p) => {
      if (seen.has(p.slug)) return;
      seen.add(p.slug);
      docs.push(toDoc(p));
    });
  } catch {
    // CMS unavailable — code articles cover the bulk.
  }
  getCodeArticles(lang).forEach((p) => {
    if (seen.has(p.slug)) return;
    seen.add(p.slug);
    docs.push(toDoc(p));
  });

  corpusCache.set(lang, docs);
  return docs;
}

function terms(query: string): string[] {
  return Array.from(
    new Set(
      query
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s]/gu, ' ')
        .split(/\s+/)
        .filter((w) => w.length >= 3),
    ),
  );
}

function countOccurrences(haystack: string, needle: string): number {
  if (!needle) return 0;
  let count = 0;
  let i = haystack.indexOf(needle);
  while (i !== -1) {
    count++;
    i = haystack.indexOf(needle, i + needle.length);
  }
  return count;
}

export async function retrieveArticles(
  lang: BlogLocale,
  query: string,
  limit = 4,
): Promise<RetrievedArticle[]> {
  const words = terms(query);
  if (words.length === 0) return [];
  const corpus = await getCorpus(lang);

  const scored = corpus
    .map((doc) => {
      const tagLower = doc.tag.toLowerCase();
      const excerptLower = doc.excerpt.toLowerCase();
      let score = 0;
      for (const w of words) {
        if (doc.titleLower.includes(w)) score += 6;
        if (tagLower.includes(w)) score += 3;
        if (excerptLower.includes(w)) score += 3;
        score += Math.min(countOccurrences(doc.bodyLower, w), 5);
      }
      return { doc, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return scored.map(({ doc }) => ({
    title: doc.title,
    url: `/${lang}/blog/${doc.slug}`,
    tag: doc.tag,
    // Cap each article's context so the prompt stays lean.
    text: doc.body.slice(0, 1400),
  }));
}
