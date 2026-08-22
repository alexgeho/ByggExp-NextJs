import { fetchPublishedBlogPosts } from './blog-api';
import type { BlogLocale, BlogPost } from '../types/blog';

// The blog article page (getServerSideProps) fetches the CMS post list on every
// request to build "Liknande artiklar". That network round-trip to the CMS was a
// large part of TTFB (~1s). Cache it in-process with a short TTL so the CMS is
// hit at most once per TTL per locale, not once per request. Falls back to the
// last good value (or []) if the CMS is briefly unavailable.
const TTL_MS = 120_000; // 2 minutes

type Entry = { at: number; posts: BlogPost[] };
const cache = new Map<BlogLocale, Entry>();

export async function fetchPublishedBlogPostsCached(
  locale: BlogLocale,
): Promise<BlogPost[]> {
  const now = Date.now();
  const hit = cache.get(locale);
  if (hit && now - hit.at < TTL_MS) {
    return hit.posts;
  }
  try {
    const posts = await fetchPublishedBlogPosts(locale);
    cache.set(locale, { at: now, posts });
    return posts;
  } catch {
    // Serve the last known value if we have one; otherwise empty.
    return hit ? hit.posts : [];
  }
}
