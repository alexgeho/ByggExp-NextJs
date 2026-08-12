import { type FormEvent, type ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  clearPersistedBlogAdminSession,
  loginBlogAdmin,
  persistBlogAdminSession,
  readPersistedBlogAdminSession,
} from '../../lib/blog-api';
import type { BlogAdminSession } from '../../types/blog';

const ALLOWED_ROLES = new Set(['superadmin', 'companyAdmin']);

type AdminLayoutProps = {
  children: ReactNode;
};

export function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);
  const [session, setSession] = useState<BlogAdminSession | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setSession(readPersistedBlogAdminSession());
    setHydrated(true);
  }, []);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const nextSession = await loginBlogAdmin(email, password);
      if (!ALLOWED_ROLES.has(nextSession.user.role)) {
        throw new Error('Your account does not have access to the admin panel.');
      }

      persistBlogAdminSession(nextSession);
      setSession(nextSession);
      setPassword('');
      setEmail('');
      window.location.assign('/admin');
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  }

  function handleLogout() {
    clearPersistedBlogAdminSession();
    setSession(null);
    void router.push('/admin');
  }

  if (!hydrated) {
    return null;
  }

  if (!session) {
    return (
      <div className="blog-admin-page blog-admin-page--login">
        <div className="blog-admin-login">
          <div className="blog-admin-login-card">
            <h1>Login</h1>
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
    );
  }

  if (!ALLOWED_ROLES.has(session.user.role)) {
    return (
      <div className="blog-admin-page blog-admin-page--login">
        <div className="blog-admin-login">
          <div className="blog-admin-login-card">
            <h1>Access denied</h1>
            <button type="button" className="blog-admin-primary" onClick={handleLogout}>
              Log out
            </button>
          </div>
        </div>
      </div>
    );
  }

  const activeType = typeof router.query.type === 'string' ? router.query.type : '';
  const activeLang = typeof router.query.lang === 'string' ? router.query.lang : 'all';
  const onArticles = router.pathname === '/admin';

  // Keep the chosen language when navigating between content categories.
  function articlesHref(type?: 'feature' | 'blog') {
    const query: Record<string, string> = {};
    if (type) query.type = type;
    if (activeLang !== 'all') query.lang = activeLang;
    return { pathname: '/admin', query };
  }

  function setLang(lang: string) {
    const query: Record<string, string> = {};
    if (activeType) query.type = activeType;
    if (lang !== 'all') query.lang = lang;
    void router.push({ pathname: '/admin', query });
  }

  const langTabs = [
    { key: 'all', label: 'Alla språk' },
    { key: 'sv', label: 'SV' },
    { key: 'en', label: 'EN' },
    { key: 'ru', label: 'RU' },
  ];

  return (
    <div className="blog-admin-page">
      <aside className="blog-admin-sidebar">
        <div>
          <span className="blog-admin-eyebrow">Admin</span>
          <nav className="blog-admin-nav" aria-label="Admin navigation">
            <span className="blog-admin-nav-section">Innehåll</span>
            <Link
              href={articlesHref()}
              className={onArticles && !activeType ? 'blog-admin-nav-link active' : 'blog-admin-nav-link'}
            >
              Alla artiklar
            </Link>
            <Link
              href={articlesHref('feature')}
              className={onArticles && activeType === 'feature' ? 'blog-admin-nav-link active' : 'blog-admin-nav-link'}
            >
              Funktioner
            </Link>
            <Link
              href={articlesHref('blog')}
              className={onArticles && activeType === 'blog' ? 'blog-admin-nav-link active' : 'blog-admin-nav-link'}
            >
              Blogg
            </Link>

            <span className="blog-admin-nav-section">Verktyg</span>
            <Link
              href="/admin/verktyg"
              className={router.pathname === '/admin/verktyg' ? 'blog-admin-nav-link active' : 'blog-admin-nav-link'}
            >
              Verktyg
            </Link>

            <span className="blog-admin-nav-section">Övrigt</span>
            <Link
              href="/admin/seo"
              className={router.pathname === '/admin/seo' ? 'blog-admin-nav-link active' : 'blog-admin-nav-link'}
            >
              SEO
            </Link>
          </nav>
        </div>
        <div className="blog-admin-sidebar-footer">
          <div className="blog-admin-user">
            <strong>{session.user.name || session.user.email}</strong>
            <span>{session.user.role}</span>
          </div>
          <button type="button" className="blog-admin-logout" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </aside>
      <div className="blog-admin-body">
        {onArticles ? (
          <header className="blog-admin-topbar-lang">
            <span className="blog-admin-topbar-label">Språk</span>
            <div className="blog-admin-tabs" role="group" aria-label="Filter by language">
              {langTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  className={`blog-admin-tab${activeLang === tab.key ? ' is-active' : ''}`}
                  onClick={() => setLang(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </header>
        ) : null}
        {children}
      </div>
    </div>
  );
}
