import type { ReactNode } from 'react';

import ArbetsberedningMallTool from '../components/LeadMagnet/ArbetsberedningMallTool';
import BetongKalkylatorTool from '../components/LeadMagnet/BetongKalkylatorTool';
import ByggdagbokTool from '../components/LeadMagnet/ByggdagbokTool';
import EntreprenadkontraktMallTool from '../components/LeadMagnet/EntreprenadkontraktMallTool';
import GolvvarmeKalkylatorTool from '../components/LeadMagnet/GolvvarmeKalkylatorTool';
import OffertGeneratorTool from '../components/LeadMagnet/OffertGeneratorTool';
import SkyddsrondMallTool from '../components/LeadMagnet/SkyddsrondMallTool';
import TakKalkylatorTool from '../components/LeadMagnet/TakKalkylatorTool';
import TakstolarKalkylatorTool from '../components/LeadMagnet/TakstolarKalkylatorTool';
import TrappaKalkylatorTool from '../components/LeadMagnet/TrappaKalkylatorTool';

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
  /** 'top' = the tool IS what the searcher came for (e.g. "… mall"): it
   *  replaces the cover right under the H1, the guide follows below. */
  position?: 'top' | 'bottom';
};

export const ARTICLE_INLINE_TOOLS: Record<string, InlineTool> = {
  'berakna-betongatgang-platta': {
    heading: 'Räkna ut din betongåtgång – gratis kalkylator',
    intro:
      'Fyll i måtten så får du kubik betong, antal säckar, armering och en kostnadsuppskattning – ladda ner allt som PDF.',
    render: () => <BetongKalkylatorTool locale="sv" />,
    position: 'top',
  },
  // Ranks #2 for "arbetsberedning mall": searchers want the template, not an essay.
  'arbetsberedning-mall-bygg': {
    heading: 'Fyll i din arbetsberedning',
    render: () => <ArbetsberedningMallTool />,
    position: 'top',
  },
  // Intent audit 2026-10 (fix A): the searcher wants the tool, so it goes under the H1.
  'entreprenadkontrakt-mall': {
    heading: 'Fyll i ditt entreprenadkontrakt',
    render: () => <EntreprenadkontraktMallTool />,
    position: 'top',
  },
  'berakna-takstolar-dimensionering-c-avstand': {
    heading: 'Beräkna takstolar',
    render: () => <TakstolarKalkylatorTool locale="sv" />,
    position: 'top',
  },
  'bygga-trappa-steghojd-stegdjup-berakning': {
    heading: 'Räkna ut trappan',
    render: () => <TrappaKalkylatorTool locale="sv" />,
    position: 'top',
  },
  'golvvarme-berakning-effekt': {
    heading: 'Beräkna golvvärme',
    render: () => <GolvvarmeKalkylatorTool locale="sv" />,
    position: 'top',
  },
  // Betong tool includes armeringsnät + kantjärn + bindtråd for platta på mark.
  'armering-berakning-platta-grund': {
    heading: 'Räkna ut armering och betong för plattan',
    render: () => <BetongKalkylatorTool locale="sv" />,
    position: 'top',
  },
  // CMS article — matched by slug like code articles.
  byggdagbok: {
    heading: 'Fyll i din byggdagbok',
    render: () => <ByggdagbokTool />,
    position: 'top',
  },
  'berakna-materialatgang-tak': {
    heading: 'Beräkna takyta och material',
    render: () => <TakKalkylatorTool locale="sv" />,
    position: 'top',
  },
  'skyddsrond-bygg-checklista': {
    heading: 'Fyll i skyddsronden',
    render: () => <SkyddsrondMallTool />,
    position: 'top',
  },
  'kalkylprogram-bygg': {
    heading: 'Gör kalkyl och offert gratis',
    render: () => <OffertGeneratorTool />,
    position: 'top',
  },
};

export function getArticleInlineTool(slug: string): InlineTool | null {
  return ARTICLE_INLINE_TOOLS[slug] ?? null;
}
