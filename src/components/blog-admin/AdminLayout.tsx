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

  return (
    <div className="blog-admin-page">
      <aside className="blog-admin-sidebar">
        <div>
          <span className="blog-admin-eyebrow">Admin</span>
          <nav className="blog-admin-nav" aria-label="Admin navigation">
            <Link
              href="/admin"
              className={router.pathname.startsWith('/admin/articles') || router.pathname === '/admin'
                ? 'blog-admin-nav-link active'
                : 'blog-admin-nav-link'}
            >
              Articles
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
      {children}
    </div>
  );
}
