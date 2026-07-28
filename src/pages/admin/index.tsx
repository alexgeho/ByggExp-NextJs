import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { AdminLayout } from '../../components/blog-admin/AdminLayout';
import {
  deleteAdminBlogPost,
  fetchAdminBlogPosts,
  readPersistedBlogAdminSession,
} from '../../lib/blog-api';
import type { BlogPost, PaginatedBlogPosts } from '../../types/blog';

const PAGE_SIZE = 10;

export default function AdminArticlesPage() {
  const [result, setResult] = useState<PaginatedBlogPosts | null>(null);
  const [page, setPage] = useState(1);
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
      setResult(await fetchAdminBlogPosts(session, page, PAGE_SIZE));
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Failed to load articles');
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    void loadPosts();
  }, [loadPosts]);

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
      if (result?.items.length === 1 && page > 1) {
        setPage((current) => current - 1);
      } else {
        await loadPosts();
      }
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
              <p>{result ? `${result.total} article${result.total === 1 ? '' : 's'}` : 'Manage blog articles'}</p>
            </div>
            <Link href="/admin/articles/new" className="blog-admin-primary">
              New article
            </Link>
          </div>

          {error ? <p className="blog-admin-error">{error}</p> : null}
          {isLoading ? <p className="blog-admin-empty">Loading articles...</p> : null}
          {!isLoading && result?.items.length === 0 ? (
            <p className="blog-admin-empty">No articles yet.</p>
          ) : null}

          {result?.items.length ? (
            <>
              <div className="blog-admin-articles">
                {result.items.map((post) => (
                  <article key={post._id} className="blog-admin-article">
                    <div>
                      <Link href={`/admin/articles/${post._id}`} className="blog-admin-article-title">
                        {post.title}
                      </Link>
                      <p>{post.excerpt || 'No excerpt yet.'}</p>
                    </div>
                    <div className="blog-admin-article-actions">
                      <div className="blog-admin-article-meta">
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
              <nav className="blog-admin-pagination" aria-label="Article pages">
                <button
                  type="button"
                  className="blog-admin-secondary"
                  disabled={page === 1}
                  onClick={() => setPage((current) => current - 1)}
                >
                  Previous
                </button>
                <span>Page {result.page} of {result.totalPages}</span>
                <button
                  type="button"
                  className="blog-admin-secondary"
                  disabled={page >= result.totalPages}
                  onClick={() => setPage((current) => current + 1)}
                >
                  Next
                </button>
              </nav>
            </>
          ) : null}
        </main>
      </AdminLayout>
    </>
  );
}
