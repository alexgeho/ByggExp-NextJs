import { API_URL } from '../config/api';
import type {
  BlogAdminSession,
  BlogLocale,
  BlogPost,
  BlogPostInput,
  PaginatedBlogPosts,
} from '../types/blog';

const BLOG_API_BASE = API_URL.replace(/\/$/, '');
const BLOG_ADMIN_SESSION_KEY = 'byggexp-blog-admin-session';

export function getBlogAdminSessionKey() {
  return BLOG_ADMIN_SESSION_KEY;
}

export async function fetchPublishedBlogPosts(
  locale: BlogLocale,
): Promise<BlogPost[]> {
  const response = await fetch(
    `${BLOG_API_BASE}/blog-posts/public?locale=${encodeURIComponent(locale)}`,
  );

  if (!response.ok) {
    throw new Error('Failed to load blog posts');
  }

  return response.json();
}

export async function fetchPublishedBlogPost(
  locale: BlogLocale,
  slug: string,
): Promise<BlogPost> {
  const response = await fetch(
    `${BLOG_API_BASE}/blog-posts/public/${encodeURIComponent(slug)}?locale=${encodeURIComponent(locale)}`,
  );

  if (!response.ok) {
    throw new Error('Failed to load blog post');
  }

  return response.json();
}

export async function loginBlogAdmin(
  email: string,
  password: string,
): Promise<BlogAdminSession> {
  const response = await fetch(`${BLOG_API_BASE}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Invalid credentials');
  }

  return response.json();
}

export async function fetchAdminBlogPosts(
  session: BlogAdminSession,
  page = 1,
  limit = 10,
): Promise<PaginatedBlogPosts> {
  const response = await authorizedRequest(
    `/blog-posts?page=${page}&limit=${limit}`,
    session,
    {
      method: 'GET',
    },
  );

  const payload = await response.json();

  if (Array.isArray(payload)) {
    const start = (page - 1) * limit;
    return {
      items: payload.slice(start, start + limit),
      total: payload.length,
      page,
      limit,
      totalPages: Math.max(1, Math.ceil(payload.length / limit)),
    };
  }

  return payload;
}

export async function fetchAdminBlogPost(
  session: BlogAdminSession,
  id: string,
): Promise<BlogPost> {
  const response = await authorizedRequest(`/blog-posts/${id}`, session, {
    method: 'GET',
  });

  return response.json();
}

export async function createAdminBlogPost(
  session: BlogAdminSession,
  payload: BlogPostInput,
): Promise<BlogPost> {
  const response = await authorizedRequest('/blog-posts', session, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return response.json();
}

export async function updateAdminBlogPost(
  session: BlogAdminSession,
  id: string,
  payload: BlogPostInput,
): Promise<BlogPost> {
  const response = await authorizedRequest(`/blog-posts/${id}`, session, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return response.json();
}

export async function deleteAdminBlogPost(
  session: BlogAdminSession,
  id: string,
): Promise<void> {
  await authorizedRequest(`/blog-posts/${id}`, session, {
    method: 'DELETE',
  });
}

async function authorizedRequest(
  path: string,
  session: BlogAdminSession,
  init: RequestInit,
): Promise<Response> {
  const firstResponse = await fetch(`${BLOG_API_BASE}${path}`, {
    ...init,
    headers: {
      ...(init.headers || {}),
      Authorization: `Bearer ${session.access_token}`,
    },
  });

  if (firstResponse.status !== 401) {
    if (!firstResponse.ok) {
      throw new Error(await extractErrorMessage(firstResponse));
    }

    return firstResponse;
  }

  const refreshed = await refreshBlogAdminSession(session.refresh_token);
  persistBlogAdminSession(refreshed);

  const secondResponse = await fetch(`${BLOG_API_BASE}${path}`, {
    ...init,
    headers: {
      ...(init.headers || {}),
      Authorization: `Bearer ${refreshed.access_token}`,
    },
  });

  if (!secondResponse.ok) {
    throw new Error(await extractErrorMessage(secondResponse));
  }

  return secondResponse;
}

async function refreshBlogAdminSession(
  refreshToken: string,
): Promise<BlogAdminSession> {
  const response = await fetch(`${BLOG_API_BASE}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    throw new Error('Session expired');
  }

  const refreshed = await response.json();
  const current = readPersistedBlogAdminSession();

  if (!current) {
    throw new Error('Session expired');
  }

  return {
    ...refreshed,
    user: current.user,
  };
}

async function extractErrorMessage(response: Response): Promise<string> {
  try {
    const data = await response.json();
    return data?.message || 'Request failed';
  } catch {
    return 'Request failed';
  }
}

export function persistBlogAdminSession(session: BlogAdminSession) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(BLOG_ADMIN_SESSION_KEY, JSON.stringify(session));
}

export function readPersistedBlogAdminSession(): BlogAdminSession | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const raw = window.localStorage.getItem(BLOG_ADMIN_SESSION_KEY);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as BlogAdminSession;
  } catch {
    return null;
  }
}

export function clearPersistedBlogAdminSession() {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.removeItem(BLOG_ADMIN_SESSION_KEY);
}
