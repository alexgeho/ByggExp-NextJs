// Ready-made egenkontroll checklists — the "pick a trade and the checklist
// fills itself" feature. Content mirrors the ByggExp KMA starter templates
// (starterTemplates.js) so the free tool offers the same professional,
// standard-referenced control points the product ships with. sv-only.

export type PresetItem = { point: string; reference?: string };

export type EgenkontrollPreset = {
  id: string;
  name: string;
  category: string; // matches EgenkontrollTool CATEGORIES
  description: string;
  items: PresetItem[];
};

export const EGENKONTROLL_PRESETS: EgenkontrollPreset[] = [
  {
    id: 'el',
    name: 'Egenkontroll El',
    category: 'Kvalitet',
    description: 'Kontroll av elinstallation enligt gällande normer.',
    items: [
      { point: 'Jordfelsbrytare testad och fungerar' },
      { point: 'Märkning av gruppcentral komplett' },
      { point: 'Isolationsmätning utförd', reference: 'SS 436 40 00' },
      { point: 'Skyddsledare anslutna' },
      { point: 'Dosor och uttag täta och fastsatta' },
    ],
  },
  {
    id: 'vvs',
    name: 'Egenkontroll VVS',
    category: 'Kvalitet',
    description: 'Kontroll av VVS-installation.',
    items: [
      { point: 'Täthetsprovning av rör utförd' },
      { point: 'Avstängningsventiler monterade och märkta' },
      { point: 'Isolering av rör komplett' },
      { point: 'Fall på avloppsledningar kontrollerat' },
      { point: 'Vattentryck kontrollerat' },
    ],
  },
  {
    id: 'bygg',
    name: 'Egenkontroll Bygg / Stomme',
    category: 'Kvalitet',
    description: 'Kontroll av byggkonstruktion.',
    items: [
      { point: 'Måttkontroll mot ritning' },
      { point: 'Infästningar och förankringar kontrollerade' },
      { point: 'Fuktkontroll utförd' },
      { point: 'Brandtätning genomförd', reference: 'BBR' },
      { point: 'Avvikelser dokumenterade' },
    ],
  },
  {
    id: 'skyddsrond',
    name: 'Skyddsrond (Arbetsmiljö)',
    category: 'Arbetsmiljö',
    description: 'Kontroll av arbetsmiljön på arbetsplatsen.',
    items: [
      { point: 'Fallskydd på plats där det behövs' },
      { point: 'Ordning och reda på arbetsplatsen' },
      { point: 'Personlig skyddsutrustning används' },
      { point: 'Ställningar besiktigade och märkta' },
      { point: 'Första hjälpen och brandsläckare tillgängliga' },
    ],
  },
];
