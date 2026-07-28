import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { RichTextEditor } from './RichTextEditor';
import {
  createAdminBlogPost,
  deleteAdminBlogPost,
  readPersistedBlogAdminSession,
  updateAdminBlogPost,
} from '../../lib/blog-api';
import type { BlogLocale, BlogPost, BlogPostInput } from '../../types/blog';

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

type ArticleEditorFormProps = {
  post?: BlogPost | null;
};

export function ArticleEditorForm({ post }: ArticleEditorFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<BlogPostInput>(
    post
      ? {
          title: post.title,
          slug: post.slug,
          locale: post.locale,
          excerpt: post.excerpt,
          tag: post.tag,
          coverImageUrl: post.coverImageUrl,
          contentHtml: post.contentHtml,
          isPublished: post.isPublished,
        }
      : EMPTY_POST,
  );
  const [error, setError] = useState('');
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

  function setField<K extends keyof BlogPostInput>(key: K, value: BlogPostInput[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSave() {
    const session = readPersistedBlogAdminSession();
    if (!session) {
      return;
    }

    setIsSaving(true);
    setError('');
    try {
      const payload = { ...form, slug: form.slug?.trim() || undefined };
      if (post) {
        await updateAdminBlogPost(session, post._id, payload);
      } else {
        await createAdminBlogPost(session, payload);
      }
      await router.push('/admin');
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : 'Failed to save article');
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete() {
    const session = readPersistedBlogAdminSession();
    if (!session || !post || !window.confirm('Delete this article?')) {
      return;
    }

    setIsSaving(true);
    setError('');
    try {
      await deleteAdminBlogPost(session, post._id);
      await router.push('/admin');
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : 'Failed to delete article');
    } finally {
      setIsSaving(false);
    }
  }

  const previewHref = post
    ? `/${post.locale}/blog/${encodeURIComponent(post.slug)}`
    : null;

  return (
    <main className="blog-admin-main">
      <div className="blog-admin-toolbar">
        <div>
          <h1>{post ? 'Edit article' : 'New article'}</h1>
          <p>Drafts stay private until you publish them.</p>
        </div>
        <div className="blog-admin-toolbar-actions">
          {previewHref ? (
            <Link href={previewHref} target="_blank" className="blog-admin-secondary">
              Open article
            </Link>
          ) : null}
          {post ? (
            <button type="button" className="blog-admin-danger" onClick={handleDelete} disabled={isSaving}>
              Delete
            </button>
          ) : null}
          <button type="button" className="blog-admin-primary" onClick={handleSave} disabled={isSaving}>
            {isSaving ? 'Saving...' : post ? 'Update article' : 'Create article'}
          </button>
        </div>
      </div>

      {error ? <p className="blog-admin-error">{error}</p> : null}
      <div className="blog-admin-grid">
        <label>
          Title
          <input type="text" value={form.title} onChange={(event) => setField('title', event.currentTarget.value)} />
        </label>
        <label>
          Slug
          <input type="text" value={form.slug} onChange={(event) => setField('slug', event.currentTarget.value)} />
        </label>
        <label>
          Locale
          <select value={form.locale} onChange={(event) => setField('locale', event.currentTarget.value as BlogLocale)}>
            <option value="sv">Swedish</option>
            <option value="en">English</option>
            <option value="ru">Russian</option>
          </select>
        </label>
        <label>
          Tag
          <input type="text" value={form.tag} onChange={(event) => setField('tag', event.currentTarget.value)} />
        </label>
        <label className="blog-admin-grid-wide">
          Excerpt
          <textarea rows={3} value={form.excerpt} onChange={(event) => setField('excerpt', event.currentTarget.value)} />
        </label>
        <label className="blog-admin-grid-wide">
          Cover image URL
          <input type="text" value={form.coverImageUrl} onChange={(event) => setField('coverImageUrl', event.currentTarget.value)} />
        </label>
        <label className="blog-admin-checkbox">
          <input type="checkbox" checked={form.isPublished} onChange={(event) => setField('isPublished', event.currentTarget.checked)} />
          Publish article
        </label>
      </div>
      <div className="blog-admin-editor">
        <span>Content</span>
        <RichTextEditor
          value={form.contentHtml}
          onChange={(value) => setField('contentHtml', value)}
          modules={editorModules}
          placeholder="Write the article here..."
        />
      </div>
    </main>
  );
}
