export type BlogLocale = 'sv' | 'en' | 'ru';

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  locale: BlogLocale;
  excerpt: string;
  tag: string;
  coverImageUrl: string;
  contentHtml: string;
  isPublished: boolean;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type BlogAdminUser = {
  id: string;
  email: string;
  name: string;
  role: 'superadmin' | 'companyAdmin' | 'projectAdmin' | 'worker';
  companyId: string | null;
};

export type BlogAdminSession = {
  user: BlogAdminUser;
  access_token: string;
  refresh_token: string;
};

export type BlogPostInput = {
  title: string;
  slug?: string;
  locale: BlogLocale;
  excerpt?: string;
  tag?: string;
  coverImageUrl?: string;
  contentHtml: string;
  isPublished: boolean;
};

export type PaginatedBlogPosts = {
  items: BlogPost[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};
