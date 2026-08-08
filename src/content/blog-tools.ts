// Maps a blog article slug (shared across locales) to the free tools most
// relevant to it. Rendered as a "Gratis verktyg" block on the article page to
// interlink blog → tools (SEO + funnel). Tools are sv-only, so the block is
// only shown on Swedish articles.

export type ToolLink = { href: string; label: string };

const TOOLS: Record<string, ToolLink> = {
  offert: { href: '/sv/verktyg/offert-mall', label: 'Offertmall – skapa offert (PDF)' },
  faktura: { href: '/sv/verktyg/faktura-mall', label: 'Fakturamall – skapa faktura (PDF)' },
  rot: { href: '/sv/verktyg/rot-avdrag-kalkylator', label: 'ROT-avdrag kalkylator' },
  moms: { href: '/sv/verktyg/moms-kalkylator', label: 'Momskalkylator' },
  tidrapport: { href: '/sv/verktyg/tidrapport-mall', label: 'Tidrapport – gratis mall' },
  timpris: { href: '/sv/verktyg/timpris-kalkylator', label: 'Timpris-kalkylator' },
  paslag: { href: '/sv/verktyg/paslag-marginal-kalkylator', label: 'Påslag & marginal' },
  bildpdf: { href: '/sv/verktyg/bild-till-pdf', label: 'Bild till PDF' },
  byggdagbok: { href: '/sv/verktyg/byggdagbok-mall', label: 'Byggdagbok – gratis mall' },
  egenkontroll: { href: '/sv/verktyg/egenkontroll-mall', label: 'Egenkontroll – gratis mall' },
};

const MAP: Record<string, (keyof typeof TOOLS)[]> = {
  'skapa-offert-i-byggexp': ['offert', 'rot', 'moms'],
  'fakturera-fran-byggexp': ['faktura', 'moms', 'rot'],
  'loneunderlag-for-byggforetag': ['tidrapport', 'timpris'],
  'projektekonomi-och-lonsamhet': ['paslag', 'timpris'],
  'fota-kvitton-och-hantera-utlagg': ['faktura', 'bildpdf'],
  'automatisk-tidrapportering-och-export': ['tidrapport', 'timpris'],
  'narvaro-och-incheckning-pa-bygget': ['tidrapport'],
  'dokumentera-med-foton-pa-bygget': ['bildpdf', 'byggdagbok'],
  'hantera-uppgifter-i-byggprojekt': ['byggdagbok'],
  'dagsplanering-och-planeringsmoten': ['tidrapport'],
  'paminnelser-uppgifter-och-deadlines': ['byggdagbok'],
  'hantera-verktyg-och-utrustning': ['egenkontroll'],
};

const HUB: ToolLink = { href: '/sv/verktyg', label: 'Alla gratis verktyg' };

// Returns the related tools for an article (always includes the hub last).
export function getBlogTools(slug: string): ToolLink[] {
  const keys = MAP[slug] || [];
  return [...keys.map((k) => TOOLS[k]), HUB];
}
