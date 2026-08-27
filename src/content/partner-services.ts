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
