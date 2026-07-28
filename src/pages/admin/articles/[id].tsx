import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AdminLayout } from '../../../components/blog-admin/AdminLayout';
import { ArticleEditorForm } from '../../../components/blog-admin/ArticleEditorForm';
import { fetchAdminBlogPost, readPersistedBlogAdminSession } from '../../../lib/blog-api';
import type { BlogPost } from '../../../types/blog';

export default function EditArticlePage() {
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!router.isReady || typeof router.query.id !== 'string') {
      return;
    }

    const session = readPersistedBlogAdminSession();
    if (!session) {
      return;
    }

    void fetchAdminBlogPost(session, router.query.id)
      .then(setPost)
      .catch((loadError) => {
        setError(loadError instanceof Error ? loadError.message : 'Failed to load article');
      });
  }, [router.isReady, router.query.id]);

  return (
    <>
      <Head>
        <title>{post ? `Edit ${post.title} | ByggExp Admin` : 'Edit article | ByggExp Admin'}</title>
      </Head>
      <AdminLayout>
        {error ? (
          <main className="blog-admin-main">
            <p className="blog-admin-error">{error}</p>
          </main>
        ) : post ? (
          <ArticleEditorForm post={post} />
        ) : (
          <main className="blog-admin-main">
            <p className="blog-admin-empty">Loading article...</p>
          </main>
        )}
      </AdminLayout>
    </>
  );
}
