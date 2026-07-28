import { useEffect, useState } from 'react';
import Head from 'next/head';

import { AdminLayout } from '../../components/blog-admin/AdminLayout';
import {
  fetchAdminSiteSeo,
  readPersistedBlogAdminSession,
  updateAdminSiteSeo,
} from '../../lib/blog-api';
import type { BlogLocale, SiteSeo } from '../../types/blog';

const emptySeo = (locale: BlogLocale): SiteSeo => ({
  locale,
  title: '',
  description: '',
  canonicalUrl: '',
  imageUrl: '',
  noIndex: false,
});

export default function SeoPage() {
  const [locale, setLocale] = useState<BlogLocale>('sv');
  const [seo, setSeo] = useState<SiteSeo>(emptySeo('sv'));
  const [message, setMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const session = readPersistedBlogAdminSession();
    if (!session) return;
    setMessage('');
    void fetchAdminSiteSeo(session, locale)
      .then((data) => setSeo(data || emptySeo(locale)))
      .catch(() => setMessage('Failed to load SEO settings'));
  }, [locale]);

  async function handleSave() {
    const session = readPersistedBlogAdminSession();
    if (!session) return;
    setIsSaving(true);
    setMessage('');
    try {
      const saved = await updateAdminSiteSeo(session, locale, {
        title: seo.title,
        description: seo.description,
        canonicalUrl: seo.canonicalUrl,
        imageUrl: seo.imageUrl,
        noIndex: seo.noIndex,
      });
      setSeo(saved);
      setMessage('SEO settings saved.');
    } catch {
      setMessage('Failed to save SEO settings');
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <>
      <Head><title>SEO | ByggExp Admin</title></Head>
      <AdminLayout>
        <main className="blog-admin-main">
          <div className="blog-admin-toolbar">
            <div><h1>SEO settings</h1><p>Homepage metadata is managed separately for each language.</p></div>
            <button type="button" className="blog-admin-primary" disabled={isSaving} onClick={handleSave}>
              {isSaving ? 'Saving...' : 'Save settings'}
            </button>
          </div>
          {message ? <p className={message.includes('saved') ? 'blog-admin-success' : 'blog-admin-error'}>{message}</p> : null}
          <div className="blog-admin-grid">
            <label>
              Language
              <select value={locale} onChange={(event) => setLocale(event.currentTarget.value as BlogLocale)}>
                <option value="sv">Swedish</option><option value="en">English</option><option value="ru">Russian</option>
              </select>
            </label>
            <label>
              Canonical URL
              <input type="url" value={seo.canonicalUrl} onChange={(event) => setSeo({ ...seo, canonicalUrl: event.currentTarget.value })} placeholder="https://..." />
            </label>
            <label className="blog-admin-grid-wide">
              Title
              <input type="text" maxLength={180} value={seo.title} onChange={(event) => setSeo({ ...seo, title: event.currentTarget.value })} />
            </label>
            <label className="blog-admin-grid-wide">
              Description
              <textarea rows={3} maxLength={320} value={seo.description} onChange={(event) => setSeo({ ...seo, description: event.currentTarget.value })} />
            </label>
            <label className="blog-admin-grid-wide">
              Social share image URL
              <input type="url" value={seo.imageUrl} onChange={(event) => setSeo({ ...seo, imageUrl: event.currentTarget.value })} placeholder="https://..." />
            </label>
            <label className="blog-admin-checkbox">
              <input type="checkbox" checked={seo.noIndex} onChange={(event) => setSeo({ ...seo, noIndex: event.currentTarget.checked })} />
              Prevent search engines from indexing this homepage
            </label>
          </div>
        </main>
      </AdminLayout>
    </>
  );
}
