import { useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { AdminLayout } from '../../components/blog-admin/AdminLayout';
import {
  deleteAdminBlogPost,
  fetchAdminBlogPosts,
  readPersistedBlogAdminSession,
} from '../../lib/blog-api';
import { isFeatureArticle } from '../../content/feature-articles';
import type { BlogPost } from '../../types/blog';

// Small enough dataset (~tens of articles) to fetch once and filter/group in
// the browser — no server-side locale/type params needed.
const FETCH_LIMIT = 500;

type LocaleFilter = 'all' | 'sv' | 'en' | 'ru';
type TypeFilter = 'all' | 'feature' | 'blog';

const LOCALE_TABS: { key: LocaleFilter; label: string }[] = [
  { key: 'all', label: 'Alla språk' },
  { key: 'sv', label: 'SV' },
  { key: 'en', label: 'EN' },
  { key: 'ru', label: 'RU' },
];

const TYPE_TABS: { key: TypeFilter; label: string }[] = [
  { key: 'all', label: 'Alla' },
  { key: 'feature', label: 'Funktioner' },
  { key: 'blog', label: 'Blogg' },
];

export default function AdminArticlesPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [localeFilter, setLocaleFilter] = useState<LocaleFilter>('all');
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const loadPosts = useCallback(async () => {
    const session = readPersistedBlogAdminSession();
    if (!session) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError('');
    try {
      const result = await fetchAdminBlogPosts(session, 1, FETCH_LIMIT);
      setPosts(result.items);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Failed to load articles');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadPosts();
  }, [loadPosts]);

  const matchesType = useCallback(
    (post: BlogPost) => {
      if (typeFilter === 'all') return true;
      const isFeature = isFeatureArticle(post.slug);
      return typeFilter === 'feature' ? isFeature : !isFeature;
    },
    [typeFilter],
  );

  const matchesLocale = useCallback(
    (post: BlogPost) =>
      localeFilter === 'all' ? true : post.locale === localeFilter,
    [localeFilter],
  );

  // Counts respect the *other* active filter so each tab shows how many rows
  // it would reveal given the current selection.
  const localeCounts = useMemo(() => {
    const counts: Record<LocaleFilter, number> = { all: 0, sv: 0, en: 0, ru: 0 };
    for (const post of posts) {
      if (!matchesType(post)) continue;
      counts.all += 1;
      if (post.locale === 'sv' || post.locale === 'en' || post.locale === 'ru') {
        counts[post.locale] += 1;
      }
    }
    return counts;
  }, [posts, matchesType]);

  const typeCounts = useMemo(() => {
    const counts: Record<TypeFilter, number> = { all: 0, feature: 0, blog: 0 };
    for (const post of posts) {
      if (!matchesLocale(post)) continue;
      counts.all += 1;
      counts[isFeatureArticle(post.slug) ? 'feature' : 'blog'] += 1;
    }
    return counts;
  }, [posts, matchesLocale]);

  const visiblePosts = useMemo(
    () => posts.filter((post) => matchesLocale(post) && matchesType(post)),
    [posts, matchesLocale, matchesType],
  );

  function formatDate(post: BlogPost) {
    return new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(
      new Date(post.updatedAt),
    );
  }

  async function handleDelete(post: BlogPost) {
    const session = readPersistedBlogAdminSession();
    if (!session || !window.confirm(`Delete "${post.title}"?`)) {
      return;
    }

    setDeletingId(post._id);
    setError('');
    try {
      await deleteAdminBlogPost(session, post._id);
      await loadPosts();
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : 'Failed to delete article');
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <>
      <Head>
        <title>Articles | ByggExp Admin</title>
      </Head>
      <AdminLayout>
        <main className="blog-admin-main">
          <div className="blog-admin-toolbar">
            <div>
              <h1>Articles</h1>
              <p>
                {isLoading
                  ? 'Manage blog articles'
                  : `${visiblePosts.length} of ${posts.length} article${posts.length === 1 ? '' : 's'}`}
              </p>
            </div>
            <Link href="/admin/articles/new" className="blog-admin-primary">
              New article
            </Link>
          </div>

          <div className="blog-admin-filters">
            <div className="blog-admin-tabs" role="group" aria-label="Filter by type">
              {TYPE_TABS.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  className={`blog-admin-tab${typeFilter === tab.key ? ' is-active' : ''}`}
                  onClick={() => setTypeFilter(tab.key)}
                >
                  {tab.label}
                  <span className="blog-admin-tab-count">{typeCounts[tab.key]}</span>
                </button>
              ))}
            </div>
            <div className="blog-admin-tabs" role="group" aria-label="Filter by language">
              {LOCALE_TABS.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  className={`blog-admin-tab${localeFilter === tab.key ? ' is-active' : ''}`}
                  onClick={() => setLocaleFilter(tab.key)}
                >
                  {tab.label}
                  <span className="blog-admin-tab-count">{localeCounts[tab.key]}</span>
                </button>
              ))}
            </div>
          </div>

          {error ? <p className="blog-admin-error">{error}</p> : null}
          {isLoading ? <p className="blog-admin-empty">Loading articles...</p> : null}
          {!isLoading && posts.length === 0 ? (
            <p className="blog-admin-empty">No articles yet.</p>
          ) : null}
          {!isLoading && posts.length > 0 && visiblePosts.length === 0 ? (
            <p className="blog-admin-empty">No articles match this filter.</p>
          ) : null}

          {visiblePosts.length ? (
            <div className="blog-admin-articles">
              {visiblePosts.map((post) => (
                <article key={post._id} className="blog-admin-article">
                  <div>
                    <Link href={`/admin/articles/${post._id}`} className="blog-admin-article-title">
                      {post.title}
                    </Link>
                    <p>{post.excerpt || 'No excerpt yet.'}</p>
                  </div>
                  <div className="blog-admin-article-actions">
                    <div className="blog-admin-article-meta">
                      <span>{isFeatureArticle(post.slug) ? 'Funktion' : 'Blogg'}</span>
                      <span>{post.locale.toUpperCase()}</span>
                      <span>{post.isPublished ? 'Published' : 'Draft'}</span>
                      <time dateTime={post.updatedAt}>{formatDate(post)}</time>
                    </div>
                    <button
                      type="button"
                      className="blog-admin-article-delete"
                      disabled={deletingId === post._id}
                      onClick={() => void handleDelete(post)}
                    >
                      {deletingId === post._id ? 'Deleting...' : 'Delete'}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </main>
      </AdminLayout>
    </>
  );
}
