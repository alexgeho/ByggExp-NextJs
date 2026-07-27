import { useCallback, useEffect, useMemo, useState, type FormEvent } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { RichTextEditor } from '../../components/blog-admin/RichTextEditor';
import {
  clearPersistedBlogAdminSession,
  createAdminBlogPost,
  deleteAdminBlogPost,
  fetchAdminBlogPosts,
  loginBlogAdmin,
  persistBlogAdminSession,
  readPersistedBlogAdminSession,
  updateAdminBlogPost,
} from '../../lib/blog-api';
import type {
  BlogAdminSession,
  BlogLocale,
  BlogPost,
  BlogPostInput,
} from '../../types/blog';

const ALLOWED_ROLES = new Set(['superadmin', 'companyAdmin']);

const EMPTY_POST: BlogPostInput = {
  title: '',
  slug: '',
  locale: 'sv',
  excerpt: '',
  tag: '',
  coverImageUrl: '',
  contentHtml: '',
  isPublished: false,
};

function mapPostToForm(post: BlogPost): BlogPostInput {
  return {
    title: post.title,
    slug: post.slug,
    locale: post.locale,
    excerpt: post.excerpt,
    tag: post.tag,
    coverImageUrl: post.coverImageUrl,
    contentHtml: post.contentHtml,
    isPublished: post.isPublished,
  };
}

export default function BlogAdminPage() {
  const [hydrated, setHydrated] = useState(false);
  const [session, setSession] = useState<BlogAdminSession | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [form, setForm] = useState<BlogPostInput>(EMPTY_POST);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const editorModules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: [] }],
        ['blockquote', 'link', 'image'],
        ['clean'],
      ],
    }),
    [],
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSession(readPersistedBlogAdminSession());
    setHydrated(true);
  }, []);

  const loadPosts = useCallback(async (activeSession: BlogAdminSession) => {
    setIsLoading(true);
    setError('');

    try {
      const nextPosts = await fetchAdminBlogPosts(activeSession);
      setPosts(nextPosts);

      if (selectedId) {
        const selectedPost = nextPosts.find((post) => post._id === selectedId);
        if (selectedPost) {
          setForm(mapPostToForm(selectedPost));
          setSelectedId(selectedPost._id);
        }
      }
    } catch (loadError) {
      setError(getErrorMessage(loadError));
    } finally {
      setIsLoading(false);
    }
  }, [selectedId]);

  useEffect(() => {
    if (!session || !ALLOWED_ROLES.has(session.user.role)) {
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    void loadPosts(session);
  }, [loadPosts, session]);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const nextSession = await loginBlogAdmin(email, password);
      if (!ALLOWED_ROLES.has(nextSession.user.role)) {
        throw new Error('Your account does not have blog publishing access.');
      }

      persistBlogAdminSession(nextSession);
      setSession(nextSession);
      setPassword('');
      setEmail('');
    } catch (loginError) {
      setError(getErrorMessage(loginError));
    } finally {
      setIsLoading(false);
    }
  }

  function handleLogout() {
    clearPersistedBlogAdminSession();
    setSession(null);
    setPosts([]);
    setSelectedId(null);
    setForm(EMPTY_POST);
  }

  function handleFieldChange<K extends keyof BlogPostInput>(
    key: K,
    value: BlogPostInput[K],
  ) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function handleSelectPost(post: BlogPost) {
    setSelectedId(post._id);
    setForm(mapPostToForm(post));
    setError('');
  }

  function handleCreateNew() {
    setSelectedId(null);
    setForm(EMPTY_POST);
    setError('');
  }

  async function handleSave() {
    if (!session) {
      return;
    }

    setIsSaving(true);
    setError('');

    try {
      const payload = {
        ...form,
        slug: form.slug?.trim() || undefined,
      };

      const saved = selectedId
        ? await updateAdminBlogPost(session, selectedId, payload)
        : await createAdminBlogPost(session, payload);

      const nextSession = readPersistedBlogAdminSession() || session;
      setSession(nextSession);
      await loadPosts(nextSession);
      setSelectedId(saved._id);
      setForm(mapPostToForm(saved));
    } catch (saveError) {
      setError(getErrorMessage(saveError));
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete() {
    if (!session || !selectedId) {
      return;
    }

    if (!window.confirm('Delete this article?')) {
      return;
    }

    setIsSaving(true);
    setError('');

    try {
      await deleteAdminBlogPost(session, selectedId);
      const nextSession = readPersistedBlogAdminSession() || session;
      setSession(nextSession);
      await loadPosts(nextSession);
      setSelectedId(null);
      setForm(EMPTY_POST);
    } catch (deleteError) {
      setError(getErrorMessage(deleteError));
    } finally {
      setIsSaving(false);
    }
  }

  const selectedPost = posts.find((post) => post._id === selectedId) || null;
  const previewHref = selectedPost
    ? `/${selectedPost.locale}/blog/${encodeURIComponent(selectedPost.slug)}`
    : null;

  if (!hydrated) {
    return null;
  }

  if (!session) {
    return (
      <>
        <Head>
          <title>Blog Admin | ByggExp</title>
        </Head>

        <div className="blog-admin-page">
          <div className="blog-admin-login">
            <div className="blog-admin-login-card">
              <span className="blog-admin-eyebrow">ByggExp Blog CMS</span>
              <h1>Log in to publish articles</h1>
              <p>
                Use a superadmin or company admin account from the existing
                ByggExp backend.
              </p>

              <form className="blog-admin-form" onSubmit={handleLogin}>
                <label>
                  Email
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.currentTarget.value)}
                    autoComplete="username"
                    required
                  />
                </label>

                <label>
                  Password
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.currentTarget.value)}
                    autoComplete="current-password"
                    required
                  />
                </label>

                {error ? <p className="blog-admin-error">{error}</p> : null}

                <button type="submit" className="blog-admin-primary" disabled={isLoading}>
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!ALLOWED_ROLES.has(session.user.role)) {
    return (
      <div className="blog-admin-page">
        <div className="blog-admin-login">
          <div className="blog-admin-login-card">
            <h1>Access denied</h1>
            <p>Your account does not have permission to publish blog posts.</p>
            <button type="button" className="blog-admin-primary" onClick={handleLogout}>
              Log out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Blog Admin | ByggExp</title>
      </Head>

      <div className="blog-admin-page">
        <aside className="blog-admin-sidebar">
          <div className="blog-admin-sidebar-top">
            <div>
              <span className="blog-admin-eyebrow">Blog CMS</span>
              <h1>Articles</h1>
            </div>

            <button type="button" className="blog-admin-primary" onClick={handleCreateNew}>
              New article
            </button>
          </div>

          <div className="blog-admin-user">
            <div>
              <strong>{session.user.name || session.user.email}</strong>
              <span>{session.user.role}</span>
            </div>
            <button type="button" onClick={handleLogout}>
              Log out
            </button>
          </div>

          {isLoading ? <p className="blog-admin-empty">Loading articles...</p> : null}
          {!isLoading && posts.length === 0 ? (
            <p className="blog-admin-empty">No articles yet.</p>
          ) : null}

          <div className="blog-admin-list">
            {posts.map((post) => (
              <button
                key={post._id}
                type="button"
                className={
                  selectedId === post._id
                    ? 'blog-admin-list-item active'
                    : 'blog-admin-list-item'
                }
                onClick={() => handleSelectPost(post)}
              >
                <span className="blog-admin-list-meta">
                  <span>{post.locale.toUpperCase()}</span>
                  <span>{post.isPublished ? 'Published' : 'Draft'}</span>
                </span>
                <strong>{post.title}</strong>
                <p>{post.excerpt || 'No excerpt yet.'}</p>
              </button>
            ))}
          </div>
        </aside>

        <main className="blog-admin-main">
          <div className="blog-admin-toolbar">
            <div>
              <h2>{selectedId ? 'Edit article' : 'Create article'}</h2>
              <p>Drafts stay private until you toggle publish.</p>
            </div>

            <div className="blog-admin-toolbar-actions">
              {previewHref ? (
                <Link href={previewHref} target="_blank" className="blog-admin-secondary">
                  Open article
                </Link>
              ) : null}
              {selectedId ? (
                <button
                  type="button"
                  className="blog-admin-danger"
                  onClick={handleDelete}
                  disabled={isSaving}
                >
                  Delete
                </button>
              ) : null}
              <button
                type="button"
                className="blog-admin-primary"
                onClick={handleSave}
                disabled={isSaving}
              >
                {isSaving ? 'Saving...' : selectedId ? 'Update article' : 'Create article'}
              </button>
            </div>
          </div>

          {error ? <p className="blog-admin-error">{error}</p> : null}

          <div className="blog-admin-grid">
            <label>
              Title
              <input
                type="text"
                value={form.title}
                onChange={(event) => handleFieldChange('title', event.currentTarget.value)}
                placeholder="How ByggExp helps on site"
              />
            </label>

            <label>
              Slug
              <input
                type="text"
                value={form.slug}
                onChange={(event) => handleFieldChange('slug', event.currentTarget.value)}
                placeholder="auto-generated-from-title"
              />
            </label>

            <label>
              Locale
              <select
                value={form.locale}
                onChange={(event) =>
                  handleFieldChange('locale', event.currentTarget.value as BlogLocale)
                }
              >
                <option value="sv">Swedish</option>
                <option value="en">English</option>
                <option value="ru">Russian</option>
              </select>
            </label>

            <label>
              Tag
              <input
                type="text"
                value={form.tag}
                onChange={(event) => handleFieldChange('tag', event.currentTarget.value)}
                placeholder="Operations"
              />
            </label>

            <label className="blog-admin-grid-wide">
              Excerpt
              <textarea
                rows={3}
                value={form.excerpt}
                onChange={(event) => handleFieldChange('excerpt', event.currentTarget.value)}
                placeholder="Short summary used on the blog listing page."
              />
            </label>

            <label className="blog-admin-grid-wide">
              Cover image URL
              <input
                type="text"
                value={form.coverImageUrl}
                onChange={(event) =>
                  handleFieldChange('coverImageUrl', event.currentTarget.value)
                }
                placeholder="https://..."
              />
            </label>

            <label className="blog-admin-checkbox">
              <input
                type="checkbox"
                checked={form.isPublished}
                onChange={(event) =>
                  handleFieldChange('isPublished', event.currentTarget.checked)
                }
              />
              Publish article
            </label>
          </div>

          <div className="blog-admin-editor">
            <span>Content</span>
            <RichTextEditor
              value={form.contentHtml}
              onChange={(value) => handleFieldChange('contentHtml', value)}
              modules={editorModules}
              placeholder="Write the article here..."
            />
          </div>
        </main>
      </div>
    </>
  );
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return 'Something went wrong.';
}
