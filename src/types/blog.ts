export type BlogLocale = 'sv' | 'en' | 'ru' | 'nb' | 'pl' | 'uk' | 'fi' | 'et' | 'lt' | 'lv';

// A single FAQ entry as editable data. When a BlogPost provides a non-empty
// `faq` array it is the source of truth for the FAQPage structured data; when
// absent, the FAQ is parsed from the article body (see src/lib/faq.ts). This
// keeps every existing article working while allowing new ones to supply FAQ
// as data instead of relying on HTML parsing.
export type BlogFaqItem = { question: string; answer: string };

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  locale: BlogLocale;
  excerpt: string;
  tag: string;
  coverImageUrl: string;
  contentHtml: string;
  seoTitle: string;
  seoDescription: string;
  seoImageUrl: string;
  canonicalUrl: string;
  noIndex: boolean;
  isPublished: boolean;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  // Optional structured FAQ. When present and non-empty, it overrides the
  // FAQ parsed from `contentHtml` for FAQPage structured data.
  faq?: BlogFaqItem[];
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
  seoTitle?: string;
  seoDescription?: string;
  seoImageUrl?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  isPublished: boolean;
  faq?: BlogFaqItem[];
};

export type PaginatedBlogPosts = {
  items: BlogPost[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type SiteSeo = {
  locale: BlogLocale;
  title: string;
  description: string;
  canonicalUrl: string;
  imageUrl: string;
  noIndex: boolean;
};
