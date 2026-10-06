// Direct answer shown right under the H1 of a blog article — the number, rule
// or table the searcher came for, before any guide text (owner rule: every
// visitor gets what they searched for on the first screen). Keyed by slug,
// sv-only (Swedish copy). Keep it to 2–4 lines or one compact table, verified
// against the primary source named in `source`.

export type QuickAnswer = {
  /** Trusted, hand-written HTML (p / ul / table). */
  html: string;
  /** Where the facts come from, shown small under the answer. */
  source?: { label: string; href: string };
};

export const ARTICLE_QUICK_ANSWERS: Record<string, QuickAnswer> = {};

export function getArticleQuickAnswer(slug: string): QuickAnswer | null {
  return ARTICLE_QUICK_ANSWERS[slug] ?? null;
}
