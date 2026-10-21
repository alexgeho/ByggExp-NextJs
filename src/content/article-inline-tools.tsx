import type { ReactNode } from 'react';

import ArbetsberedningMallTool from '../components/LeadMagnet/ArbetsberedningMallTool';
import HindersanmalanMallTool from '../components/LeadMagnet/HindersanmalanMallTool';
import BetongKalkylatorTool from '../components/LeadMagnet/BetongKalkylatorTool';
import ByggdagbokTool from '../components/LeadMagnet/ByggdagbokTool';
import EntreprenadkontraktMallTool from '../components/LeadMagnet/EntreprenadkontraktMallTool';
import GolvvarmeKalkylatorTool from '../components/LeadMagnet/GolvvarmeKalkylatorTool';
import OffertGeneratorTool from '../components/LeadMagnet/OffertGeneratorTool';
import SkyddsrondMallTool from '../components/LeadMagnet/SkyddsrondMallTool';
import TakKalkylatorTool from '../components/LeadMagnet/TakKalkylatorTool';
import TakstolarKalkylatorTool from '../components/LeadMagnet/TakstolarKalkylatorTool';
import TrappaKalkylatorTool from '../components/LeadMagnet/TrappaKalkylatorTool';
import ObOvertidKalkylatorTool from '../components/LeadMagnet/ObOvertidKalkylatorTool';
import RestidsersattningKalkylatorTool from '../components/LeadMagnet/RestidsersattningKalkylatorTool';
import AckordKalkylatorTool from '../components/LeadMagnet/AckordKalkylatorTool';
import ForseningsviteKalkylatorTool from '../components/LeadMagnet/ForseningsviteKalkylatorTool';
import ReglarKalkylatorTool from '../components/LeadMagnet/ReglarKalkylatorTool';
import UvardeKalkylatorTool from '../components/LeadMagnet/UvardeKalkylatorTool';
import TrallKalkylatorTool from '../components/LeadMagnet/TrallKalkylatorTool';
import TidrapportTool from '../components/LeadMagnet/TidrapportTool';
import TapetKalkylatorTool from '../components/LeadMagnet/TapetKalkylatorTool';
import StaketKalkylatorTool from '../components/LeadMagnet/StaketKalkylatorTool';
import RotKalkylatorTool from '../components/LeadMagnet/RotKalkylatorTool';
import GrusKalkylatorTool from '../components/LeadMagnet/GrusKalkylatorTool';
import GolvKalkylatorTool from '../components/LeadMagnet/GolvKalkylatorTool';
import GipsKalkylatorTool from '../components/LeadMagnet/GipsKalkylatorTool';
import FargKalkylatorTool from '../components/LeadMagnet/FargKalkylatorTool';
import FallKalkylatorTool from '../components/LeadMagnet/FallKalkylatorTool';
import EfterkalkylMallTool from '../components/LeadMagnet/EfterkalkylMallTool';
import EgenkontrollTool from '../components/LeadMagnet/EgenkontrollTool';
import AnstallningsavtalMallTool from '../components/LeadMagnet/AnstallningsavtalMallTool';
import AtaMallTool from '../components/LeadMagnet/AtaMallTool';
import AvvikelserapportMallTool from '../components/LeadMagnet/AvvikelserapportMallTool';
import ByggmotesprotokollMallTool from '../components/LeadMagnet/ByggmotesprotokollMallTool';
import GanttSchemaMallTool from '../components/LeadMagnet/GanttSchemaMallTool';
import KontrollplanMallTool from '../components/LeadMagnet/KontrollplanMallTool';
import KvalitetsplanMallTool from '../components/LeadMagnet/KvalitetsplanMallTool';
import RestlistaMallTool from '../components/LeadMagnet/RestlistaMallTool';
import RiskbedomningMallTool from '../components/LeadMagnet/RiskbedomningMallTool';

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
    heading: 'Räkna antal takstolar',
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
  'hindersanmalan-tidsforlangning-ab04': {
    heading: 'Skriv din hindersanmälan',
    render: () => <HindersanmalanMallTool />,
    position: 'top',
  },
  // Intent verify 2026-10: the calculator right after the quick answer.
  'ob-overtid-byggavtalet-rakna': {
    heading: 'Räkna OB och övertid',
    render: () => <ObOvertidKalkylatorTool />,
    position: 'top',
  },
  'restidsersattning-byggavtalet': {
    heading: 'Räkna restidsersättning',
    render: () => <RestidsersattningKalkylatorTool />,
    position: 'top',
  },
  'ackordslon-bygg': {
    heading: 'Räkna ackordsöverskott',
    render: () => <AckordKalkylatorTool />,
    position: 'top',
  },
  'forseningsvite-entreprenad': {
    heading: 'Räkna förseningsvite',
    render: () => <ForseningsviteKalkylatorTool locale="sv" />,
    position: 'top',
  },
  'reglar-dimensioner-c-avstand-vagg': {
    heading: 'Räkna reglar',
    render: () => <ReglarKalkylatorTool locale="sv" />,
    position: 'top',
  },
  // Owner 2026-10-21: the visitor came for the inspection itself – let them do
  // it first, the article goes below. Same for every "… mall" article.
  egenkontroll: {
    heading: 'Fyll i din egenkontroll',
    render: () => <EgenkontrollTool defaultPreset="bygg" />,
    position: 'top',
  },
  'egenkontroll-entreprenad': {
    heading: 'Fyll i din egenkontroll',
    render: () => <EgenkontrollTool defaultPreset="bygg" />,
    position: 'top',
  },
  egenkontrollprogram: {
    heading: 'Fyll i din egenkontroll',
    render: () => <EgenkontrollTool defaultPreset="bygg" />,
    position: 'top',
  },
  'egenkontroll-el-egenkontrollprogram': {
    heading: 'Fyll i din egenkontroll el',
    render: () => <EgenkontrollTool defaultPreset="el" />,
    position: 'top',
  },
  'kontrollplan-mall-bygglov': {
    heading: 'Fyll i din kontrollplan',
    render: () => <KontrollplanMallTool />,
    position: 'top',
  },
  'kvalitetsplan-bygg': {
    heading: 'Fyll i din kvalitetsplan',
    render: () => <KvalitetsplanMallTool />,
    position: 'top',
  },
  'avvikelsehantering-bygg-mall': {
    heading: 'Fyll i avvikelserapporten',
    render: () => <AvvikelserapportMallTool />,
    position: 'top',
  },
  'byggmotesprotokoll-mall': {
    heading: 'Fyll i byggmötesprotokollet',
    render: () => <ByggmotesprotokollMallTool />,
    position: 'top',
  },
  'ata-hantering-mall': {
    heading: 'Fyll i ÄTA',
    render: () => <AtaMallTool />,
    position: 'top',
  },
  'anstallningsavtal-mall-bygg': {
    heading: 'Fyll i anställningsavtalet',
    render: () => <AnstallningsavtalMallTool />,
    position: 'top',
  },
  'gantt-schema-mall-bygg': {
    heading: 'Gör ditt tidsschema',
    render: () => <GanttSchemaMallTool />,
    position: 'top',
  },
  'restlista-overlamning-bygg-mall': {
    heading: 'Fyll i restlistan',
    render: () => <RestlistaMallTool />,
    position: 'top',
  },
  'riskbedomning-byggarbetsplats-mall': {
    heading: 'Fyll i riskbedömningen',
    render: () => <RiskbedomningMallTool />,
    position: 'top',
  },
  // GSC 2026-10-21: these rank for "räkna/mall/exempel" queries – tool first (R10).
  'offertprogram-byggforetag': {
    heading: 'Gör din offert',
    render: () => <OffertGeneratorTool />,
    position: 'top',
  },
  'skriva-offert': {
    heading: 'Gör din offert',
    render: () => <OffertGeneratorTool />,
    position: 'top',
  },
  'tapet-atgang-rullar': {
    heading: 'Räkna tapetåtgång',
    render: () => <TapetKalkylatorTool locale="sv" />,
    position: 'top',
  },
  'berakna-u-varde-isolering': {
    heading: 'Räkna U-värde',
    render: () => <UvardeKalkylatorTool locale="sv" />,
    position: 'top',
  },
  'rotavdrag-hur-mycket': {
    heading: 'Räkna ROT-avdrag',
    render: () => <RotKalkylatorTool locale="sv" />,
    position: 'top',
  },
  'dranering-grus-material-berakning': {
    heading: 'Räkna grusåtgång',
    render: () => <GrusKalkylatorTool locale="sv" />,
    position: 'top',
  },
  'ata-arbeten': {
    heading: 'Fyll i ÄTA',
    render: () => <AtaMallTool />,
    position: 'top',
  },
  'startmote-byggprojekt-checklista': {
    heading: 'Fyll i mötesprotokollet',
    render: () => <ByggmotesprotokollMallTool />,
    position: 'top',
  },
  'tidredovisning-byggforetag': {
    heading: 'Fyll i tidrapporten',
    render: () => <TidrapportTool />,
    position: 'top',
  },
  'fall-lutning-berakna-avlopp-mark-tak': {
    heading: 'Räkna fall',
    render: () => <FallKalkylatorTool locale="sv" />,
    position: 'top',
  },
  'fargatgang-malning-m2': {
    heading: 'Räkna färgåtgång',
    render: () => <FargKalkylatorTool locale="sv" />,
    position: 'top',
  },
  'golvmaterial-atgang-spill': {
    heading: 'Räkna golvmaterial',
    render: () => <GolvKalkylatorTool locale="sv" />,
    position: 'top',
  },
  'materialatgang-innervagg-reglar-gips': {
    heading: 'Räkna gips',
    render: () => <GipsKalkylatorTool locale="sv" />,
    position: 'top',
  },
  'staket-material-stolpar-atgang': {
    heading: 'Räkna staketmaterial',
    render: () => <StaketKalkylatorTool locale="sv" />,
    position: 'top',
  },
  'virkesatgang-altan-tralldack': {
    heading: 'Räkna trall och virke',
    render: () => <TrallKalkylatorTool locale="sv" />,
    position: 'top',
  },
  'efterkalkyl-bygg-kalkyluppfoljning': {
    heading: 'Gör din efterkalkyl',
    render: () => <EfterkalkylMallTool />,
    position: 'top',
  },
  // ab-u-underentreprenor-avtal: no tool on purpose. Searchers want the AB-U 07 /
  // ABT-U 07 text; our kontrakt mall is AB 04/ABT 06 beställare–entreprenör and
  // would mislead. Quick answer + Byggföretagen link only.
};

export function getArticleInlineTool(slug: string): InlineTool | null {
  return ARTICLE_INLINE_TOOLS[slug] ?? null;
}
