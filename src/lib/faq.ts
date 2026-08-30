import type { BlogFaqItem, BlogLocale, BlogPost } from '../types/blog';

export type FaqItem = BlogFaqItem;

// Single entry point for the FAQ used in FAQPage structured data.
// Prefers the structured `faq` field when the article provides one, and falls
// back to parsing the FAQ section out of the article body otherwise — so every
// existing article keeps working unchanged.
export function resolveFaq(
  post: Pick<BlogPost, 'faq' | 'contentHtml'>,
  locale: BlogLocale,
): FaqItem[] {
  const structured = (post.faq ?? []).filter(
    (item) => item && item.question?.trim() && item.answer?.trim(),
  );
  if (structured.length > 0) {
    return structured.map((item) => ({
      question: item.question.trim(),
      answer: item.answer.trim(),
    }));
  }
  return extractFaqFromHtml(post.contentHtml, locale);
}

// The published articles already contain a FAQ section in their body — an
// <h2> heading (localised) followed by <h3>question</h3><p>answer</p> pairs.
// Google, however, doesn't infer FAQ structure from arbitrary HTML, so we
// parse that existing section here and emit FAQPage structured data from it.
// This keeps the visible FAQ and the schema in sync without duplicating the
// content on the page.
const FAQ_HEADINGS: Record<BlogLocale, string> = {
  sv: 'Vanliga frågor',
  en: 'Frequently asked questions',
  ru: 'Частые вопросы',
  nb: 'Vanlige spørsmål',
};

export function extractFaqFromHtml(html: string, locale: BlogLocale): FaqItem[] {
  const heading = FAQ_HEADINGS[locale];
  if (!html || !heading) {
    return [];
  }

  const headingRegex = new RegExp(
    `<h2[^>]*>\\s*${escapeRegExp(heading)}\\s*</h2>`,
    'i',
  );
  const headingMatch = headingRegex.exec(html);
  if (!headingMatch) {
    return [];
  }

  // Limit to the FAQ section: from just after its heading up to the next <h2>.
  let section = html.slice(headingMatch.index + headingMatch[0].length);
  const nextHeading = section.search(/<h2[\s>]/i);
  if (nextHeading !== -1) {
    section = section.slice(0, nextHeading);
  }

  const items: FaqItem[] = [];
  // Pair each question heading with the paragraph that immediately follows it.
  // A trailing CTA paragraph (not preceded by an <h3>) is ignored by design.
  const pairRegex = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
  let match: RegExpExecArray | null;
  while ((match = pairRegex.exec(section)) !== null) {
    const question = stripHtml(match[1]);
    const answer = stripHtml(match[2]);
    if (question && answer) {
      items.push({ question, answer });
    }
  }

  return items;
}

function stripHtml(value: string): string {
  return decodeEntities(value.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
}

function decodeEntities(value: string): string {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
