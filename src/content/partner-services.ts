// Related services shown on high-intent B2B tool pages (contracts, offert). The
// slot is monetisable: once real affiliate/partner deals exist (försäkring,
// juristtjänst), add them here with `external: true` — the component renders them
// with rel="sponsored nofollow" and a visible "Partner" label, per honest
// disclosure. Until then it links to our own relevant guides, which is useful and
// keeps the block warm.
export type PartnerService = {
  label: string;
  href: string;
  description: string;
  /** External commercial partner / affiliate link → rel=sponsored nofollow + "Partner" tag. */
  external?: boolean;
};

// Entreprenadkontrakt / avtal context: what a contractor about to sign a B2B
// contract also cares about — insurance, guarantees, dispute avoidance.
export const CONTRACT_PARTNER_SERVICES: PartnerService[] = [
  {
    label: 'Vilka försäkringar behöver ett byggföretag?',
    href: '/sv/blog/vilka-forsakringar-behover-byggforetag',
    description: 'Ansvars-, entreprenad- och allriskförsäkring – vad som gäller innan du skriver på.',
  },
  {
    label: 'Entreprenadförsäkring (allrisk) – vad täcker den?',
    href: '/sv/blog/entreprenadforsakring-allrisk-vad-tacker',
    description: 'Vad allriskförsäkringen faktiskt täcker på entreprenaden – och vad den inte gör.',
  },
  {
    label: 'Undvik entreprenadtvist med rätt dokumentation',
    href: '/sv/blog/entreprenadtvist-undvika-dokumentation',
    description: 'Så säkrar du bevis kring kontrakt, ÄTA och besiktning innan en tvist uppstår.',
  },
  {
    label: 'Entreprenadgaranti och säkerhet i AB 04',
    href: '/sv/blog/entreprenadgaranti-sakerhet-ab04',
    description: 'Säkerhet, garantitid och vad beställaren kan kräva enligt AB 04.',
  },
  // Affiliate/partner slot — add real deals here, e.g.:
  // { label: 'Teckna entreprenadförsäkring hos <partner>', href: 'https://…', description: '…', external: true },
];

// Faktura context: what a contractor sending an invoice cares about — getting
// paid, credit risk, reminders and late interest.
export const INVOICE_PARTNER_SERVICES: PartnerService[] = [
  {
    label: 'Kunden betalar inte fakturan – vad gör du?',
    href: '/sv/blog/kunden-betalar-inte-fakturan',
    description: 'Steg för steg från påminnelse till inkasso och betalningsföreläggande.',
  },
  {
    label: 'Påminnelse, inkasso och avgifter',
    href: '/sv/blog/paminnelse-inkasso-avgift-bygg',
    description: 'Vilka avgifter du får ta ut och i vilken ordning – utan att göra fel.',
  },
  {
    label: 'Dröjsmålsränta 2026',
    href: '/sv/blog/drojsmalsranta-2026',
    description: 'Aktuell räntesats och hur du räknar rätt på en sen betalning.',
  },
  {
    label: 'Kreditförsäkring för byggföretag',
    href: '/sv/blog/kreditforsakring-byggforetag',
    description: 'Skydda dig mot kundförluster när fakturan inte betalas.',
  },
  // Affiliate/partner slot (t.ex. factoring / kreditförsäkring), external: true.
];

// Offert context: winning the job and securing that it gets paid (ROT, credit).
export const QUOTE_PARTNER_SERVICES: PartnerService[] = [
  {
    label: 'Från offert till betald faktura',
    href: '/sv/blog/offert-till-betald-faktura-flode',
    description: 'Så håller du ihop flödet så att det du offererar faktiskt blir betalt.',
  },
  {
    label: 'Kontrollera kundens ROT-utrymme',
    href: '/sv/blog/kontrollera-kundens-rotutrymme',
    description: 'Undvik att fastna med ROT-avdraget – kontrollera utrymmet innan du lovar priset.',
  },
  {
    label: 'ROT-avdrag 2026 – nya regler',
    href: '/sv/blog/rotavdrag-2026-nya-regler-foretag',
    description: 'Vad som gäller för ROT 2026 och hur du fakturerar rätt.',
  },
  {
    label: 'Kreditförsäkring för byggföretag',
    href: '/sv/blog/kreditforsakring-byggforetag',
    description: 'Skydda marginalen mot kundförluster på större jobb.',
  },
  // Affiliate/partner slot, external: true.
];
