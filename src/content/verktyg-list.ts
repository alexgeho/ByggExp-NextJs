// Read-only inventory of the public free-tools ("Verktyg") pages. These live in
// code under src/pages/[lang]/verktyg/<slug>.tsx (sv-only), NOT in the CMS — so
// the content admin lists them for visibility only; editing means a code change.
// Keep in sync when tools are added/removed.

export type VerktygItem = { slug: string; label: string };
export type VerktygGroup = { title: string; items: VerktygItem[] };

export const VERKTYG_GROUPS: VerktygGroup[] = [
  {
    title: 'Kalkylatorer – ekonomi',
    items: [
      { slug: 'rot-avdrag-kalkylator', label: 'ROT-avdrag' },
      { slug: 'moms-kalkylator', label: 'Moms' },
      { slug: 'timpris-kalkylator', label: 'Timpris' },
      { slug: 'paslag-marginal-kalkylator', label: 'Påslag & marginal' },
      { slug: 'drojsmalsranta-kalkylator', label: 'Dröjsmålsränta' },
      { slug: 'forseningsvite-kalkylator', label: 'Förseningsvite' },
      { slug: 'anstalld-kostnad-kalkylator', label: 'Vad kostar en anställd' },
    ],
  },
  {
    title: 'Byggkalkylatorer – material',
    items: [
      { slug: 'betong-kalkylator', label: 'Betong' },
      { slug: 'tak-kalkylator', label: 'Tak' },
      { slug: 'farg-kalkylator', label: 'Färg' },
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeter' },
      { slug: 'golv-kalkylator', label: 'Golv' },
      { slug: 'tapet-kalkylator', label: 'Tapet' },
      { slug: 'reglar-kalkylator', label: 'Reglar' },
      { slug: 'grus-kalkylator', label: 'Grus' },
      { slug: 'gips-kalkylator', label: 'Gips' },
      { slug: 'isolering-kalkylator', label: 'Isolering' },
      { slug: 'trappa-kalkylator', label: 'Trappa' },
      { slug: 'fall-kalkylator', label: 'Fall' },
      { slug: 'golvvarme-kalkylator', label: 'Golvvärme' },
      { slug: 'trall-kalkylator', label: 'Trall' },
      { slug: 'staket-kalkylator', label: 'Staket' },
      { slug: 'takstolar-kalkylator', label: 'Takstolar' },
      { slug: 'spillprocent-kalkylator', label: 'Spillprocent' },
      { slug: 'u-varde-kalkylator', label: 'U-värde' },
    ],
  },
  {
    title: 'Mallar → PDF',
    items: [
      { slug: 'offert-mall', label: 'Offert-mall' },
      { slug: 'faktura-mall', label: 'Faktura-mall' },
      { slug: 'byggdagbok-mall', label: 'Byggdagbok-mall' },
      { slug: 'ata-mall', label: 'ÄTA-mall' },
      { slug: 'tidrapport-mall', label: 'Tidrapport-mall' },
      { slug: 'egenkontroll-mall', label: 'Egenkontroll-mall' },
      { slug: 'egenkontroll-el-mall', label: 'Egenkontroll el-mall' },
      { slug: 'egenkontroll-bygg-mall', label: 'Egenkontroll bygg-mall' },
      { slug: 'egenkontroll-vvs-mall', label: 'Egenkontroll VVS-mall' },
      { slug: 'entreprenadkontrakt-mall', label: 'Entreprenadkontrakt-mall' },
      { slug: 'kontrollplan-mall', label: 'Kontrollplan-mall' },
      { slug: 'gantt-schema-mall', label: 'Gantt-schema / tidsplan' },
      { slug: 'anstallningsavtal-mall', label: 'Anställningsavtal-mall' },
      { slug: 'mangdforteckning-mall', label: 'Mängdförteckning-mall' },
      { slug: 'restlista-mall', label: 'Restlista / punchlista' },
      { slug: 'avvikelserapport-mall', label: 'Avvikelserapport-mall' },
      { slug: 'korjournal-mall', label: 'Körjournal-mall' },
      { slug: 'skyddsrond-mall', label: 'Skyddsrond-mall' },
      { slug: 'riskbedomning-mall', label: 'Riskbedömning-mall' },
      { slug: 'arbetsberedning-mall', label: 'Arbetsberedning-mall' },
      { slug: 'efterkalkyl-mall', label: 'Efterkalkyl-mall' },
      { slug: 'betalningspaminnelse-mall', label: 'Betalningspåminnelse-mall' },
      { slug: 'kvalitetsplan-mall', label: 'Kvalitetsplan-mall' },
    ],
  },
  {
    title: 'PDF-verktyg',
    items: [
      { slug: 'sla-ihop-pdf', label: 'Slå ihop PDF' },
      { slug: 'dela-pdf', label: 'Dela PDF' },
      { slug: 'bild-till-pdf', label: 'Bild till PDF' },
      { slug: 'pdf-till-jpg', label: 'PDF till JPG' },
      { slug: 'rotera-pdf', label: 'Rotera PDF' },
      { slug: 'ta-bort-sidor-pdf', label: 'Ta bort sidor' },
      { slug: 'vattenstampel-pdf', label: 'Vattenstämpel' },
      { slug: 'signera-pdf', label: 'Signera PDF' },
    ],
  },
];

export const VERKTYG_TOTAL = VERKTYG_GROUPS.reduce(
  (sum, group) => sum + group.items.length,
  0,
);
