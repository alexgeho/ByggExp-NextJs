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
  {
    id: 'vatrum',
    name: 'Egenkontroll Våtrum / Tätskikt',
    category: 'Kvalitet',
    description: 'Kontroll av tätskikt och våtrum enligt branschregler.',
    items: [
      { point: 'Fuktmätning i underlag utförd före tätskikt' },
      { point: 'Tätskikt applicerat enligt tillverkarens anvisning', reference: 'BBV / GVK' },
      { point: 'Fall mot golvbrunn kontrollerat' },
      { point: 'Golvbrunn rätt monterad och i nivå med tätskikt' },
      { point: 'Genomföringar och rörgenomföringar täta', reference: 'BBR' },
    ],
  },
  {
    id: 'betong',
    name: 'Egenkontroll Betong / Gjutning',
    category: 'Kvalitet',
    description: 'Kontroll av form, armering och gjutning.',
    items: [
      { point: 'Form kontrollerad mot ritning (mått och läge)' },
      { point: 'Armering enligt konstruktionsritning' },
      { point: 'Täckskikt kontrollerat', reference: 'EKS / EN 1992' },
      { point: 'Betongkvalitet och gjutning enligt recept' },
      { point: 'Härdning och uttorkning dokumenterad' },
    ],
  },
  {
    id: 'tak',
    name: 'Egenkontroll Tak',
    category: 'Kvalitet',
    description: 'Kontroll av takarbete och tätning.',
    items: [
      { point: 'Underlagstäckning hel och rätt lagd' },
      { point: 'Infästning enligt vindlastkrav', reference: 'BBR / EKS' },
      { point: 'Genomföringar och anslutningar täta' },
      { point: 'Fall och avvattning kontrollerat' },
      { point: 'Taksäkerhet (snörasskydd, fästen) monterad', reference: 'BBR' },
    ],
  },
  {
    id: 'ventilation',
    name: 'Egenkontroll Ventilation',
    category: 'Kvalitet',
    description: 'Kontroll av ventilationsinstallation.',
    items: [
      { point: 'Kanaler rensade och täta' },
      { point: 'Don injusterade mot projekterade flöden' },
      { point: 'Brandspjäll funktionstestade', reference: 'BBR' },
      { point: 'Isolering av kanaler komplett' },
      { point: 'Injusteringsprotokoll upprättat' },
    ],
  },
];
