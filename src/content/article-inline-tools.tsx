import type { ReactNode } from 'react';

import BetongKalkylatorTool from '../components/LeadMagnet/BetongKalkylatorTool';

// Interactive lead-magnet tools embedded directly inside a blog article (not
// just linked). Keyed by the shared article slug. sv-only — the tools carry
// Swedish copy and the block is only rendered on /sv. Server-rendered like the
// standalone /verktyg pages so the calculator is present on first paint.
//
// Add a new entry as more articles get an inline calculator/generator.

type InlineTool = {
  heading: string;
  intro?: string;
  render: () => ReactNode;
};

export const ARTICLE_INLINE_TOOLS: Record<string, InlineTool> = {
  'berakna-betongatgang-platta': {
    heading: 'Räkna ut din betongåtgång – gratis kalkylator',
    intro:
      'Fyll i måtten så får du kubik betong, antal säckar, armering och en kostnadsuppskattning – ladda ner allt som PDF.',
    render: () => <BetongKalkylatorTool locale="sv" />,
  },
};

export function getArticleInlineTool(slug: string): InlineTool | null {
  return ARTICLE_INLINE_TOOLS[slug] ?? null;
}
