import { useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

const TYPE_HEADINGS: Record<string, string> = {
  '': 'Alla artiklar',
  feature: 'Funktioner',
  blog: 'Blogg',
};

export default function AdminArticlesPage() {
  const router = useRouter();
  const typeFilter = typeof router.query.type === 'string' ? router.query.type : '';
  const localeFilter = typeof router.query.lang === 'string' ? router.query.lang : 'all';

  const [posts, setPosts] = useState<BlogPost[]>([]);
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

  const visiblePosts = useMemo(
    () =>
      posts.filter((post) => {
        if (localeFilter !== 'all' && post.locale !== localeFilter) return false;
        if (typeFilter === 'feature' && !isFeatureArticle(post.slug)) return false;
        if (typeFilter === 'blog' && isFeatureArticle(post.slug)) return false;
        return true;
      }),
    [posts, localeFilter, typeFilter],
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

  const heading = TYPE_HEADINGS[typeFilter] ?? 'Alla artiklar';

  return (
    <>
      <Head>
        <title>{heading} | ByggExp Admin</title>
      </Head>
      <AdminLayout>
        <main className="blog-admin-main">
          <div className="blog-admin-toolbar">
            <div>
              <h1>{heading}</h1>
              <p>
                {isLoading
                  ? 'Manage articles'
                  : `${visiblePosts.length} article${visiblePosts.length === 1 ? '' : 's'}${
                      localeFilter !== 'all' ? ` · ${localeFilter.toUpperCase()}` : ''
                    }`}
              </p>
            </div>
            <Link href="/admin/articles/new" className="blog-admin-primary">
              New article
            </Link>
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
