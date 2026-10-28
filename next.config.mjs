import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

// The site is kept OUT of search engines by default (pre-launch review).
// Set SITE_ALLOW_INDEX=true at build time to allow indexing.
const allowIndex = process.env.SITE_ALLOW_INDEX === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: dirname,
  },
  // Clean, extensionless URLs for the store-required legal pages that live as
  // static HTML in /public.
  async rewrites() {
    return [
      { source: "/privacy", destination: "/privacy.html" },
      { source: "/terms", destination: "/terms.html" },
    ];
  },
  // Retired calculators merged into a flagship tool. 301 so Google replaces the
  // old (indexed) URL with the target instead of hitting a 404.
  async redirects() {
    return [
      { source: "/sv/verktyg/skruv-kalkylator", destination: "/sv/verktyg/gips-kalkylator", statusCode: 301 },
      { source: "/sv/verktyg/armering-kalkylator", destination: "/sv/verktyg/betong-kalkylator", statusCode: 301 },
      { source: "/sv/verktyg/kakelfix-kalkylator", destination: "/sv/verktyg/golv-kalkylator", statusCode: 301 },
      { source: "/sv/verktyg/murbruk-kalkylator", destination: "/sv/verktyg", statusCode: 301 },

      // Dead/renamed URLs Google crawled (GSC "Not found (404)"). 301 to the
      // closest live page so the old indexed URL is replaced instead of 404-ing.
      { source: "/contacts", destination: "/sv/contact", statusCode: 301 },
      { source: "/sv/blog/byggnads-kollektivavtal-2026", destination: "/sv/blog/maste-ha-kollektivavtal-bygg", statusCode: 301 },
      { source: "/sv/blog/anbudskalkyl-bygg", destination: "/sv/blog/kalkylprogram-bygg", statusCode: 301 },
      { source: "/sv/blog/bygg-appar-i-sverige", destination: "/sv/blog/bygg-app", statusCode: 301 },
      // /blog/tidrapport (old, locale-less URL) was 301-ing onto /sv/blog/tidrapport,
      // which has never existed → the chain still ended in a 404. Point it at the
      // pillar article that covers the term.
      { source: "/sv/blog/tidrapport", destination: "/sv/funktioner/tidrapporteringssystem-bygg", statusCode: 301 },
      // 2026-10-21: thin duplicates merged into the page Google already ranks for the cluster.
      { source: "/sv/blog/tidsregistrering-app-bygg", destination: "/sv/blog/app-for-tidrapportering-bygg", statusCode: 301 },
      { source: "/sv/blog/projekthanteringssystem-bygg", destination: "/sv/funktioner/projekthantering", statusCode: 301 },
      // 2026-10-28 blog cleanup (docs/seo/blog-301-map-2026-10-28.md): weak/duplicate sv
      // articles merged into the page that owns the intent (/sv/funktioner/* or a stronger
      // article). Earlier rules above that pointed at a now-merged article were re-aimed
      // at the final target so there are no 301 chains.
      { source: "/sv/blog/tidrapportering", destination: "/sv/funktioner/tidrapporteringssystem-bygg", statusCode: 301 },
      { source: "/sv/blog/tidrapportering-app-byggforetag", destination: "/sv/funktioner/tidrapporteringssystem-bygg", statusCode: 301 },
      { source: "/sv/blog/projekthantering-byggforetag", destination: "/sv/funktioner/projekthantering", statusCode: 301 },
      { source: "/sv/blog/projektledning-byggforetag", destination: "/sv/funktioner/projekthantering", statusCode: 301 },
      { source: "/sv/blog/app-for-byggprojekt", destination: "/sv/funktioner/projekthantering", statusCode: 301 },
      { source: "/sv/blog/bemanning-och-personalplanering", destination: "/sv/funktioner/resursplanering", statusCode: 301 },
      { source: "/sv/blog/bemanningssystem-bygg", destination: "/sv/funktioner/resursplanering", statusCode: 301 },
      { source: "/sv/blog/byggprogram-for-byggforetag", destination: "/sv/blog/basta-byggprogram-2026", statusCode: 301 },
      { source: "/sv/blog/servicehantering-bygg", destination: "/sv/blog/arbetsorder-app-bygg", statusCode: 301 },
      { source: "/sv/blog/arbetsmiljoplan", destination: "/sv/blog/riskbedomning-byggarbetsplats-mall", statusCode: 301 },
      { source: "/sv/blog/kma-plan-mall", destination: "/sv/blog/kvalitetsplan-bygg", statusCode: 301 },
      { source: "/sv/blog/arbetsmiljoverket-nya-regler-2026-bygg", destination: "/sv/blog/arbetsmiljoverket-inspektion-bygg-2026", statusCode: 301 },
      { source: "/sv/blog/systematiskt-arbetsmiljoarbete-litet-byggforetag", destination: "/sv/blog/riskbedomning-byggarbetsplats-mall", statusCode: 301 },
      { source: "/sv/blog/ansvarsforsakring-byggforetag", destination: "/sv/blog/entreprenadforsakring-allrisk-vad-tacker", statusCode: 301 },
      { source: "/sv/blog/kreditforsakring-byggforetag", destination: "/sv/blog/kreditupplysning-kolla-kund-innan-jobb-bygg", statusCode: 301 },
      { source: "/sv/blog/kollektivavtalade-forsakringar-bygg", destination: "/sv/blog/maste-ha-kollektivavtal-bygg", statusCode: 301 },
      { source: "/sv/blog/byggfelsforsakring", destination: "/sv/blog/fardigstallandeskydd-smahus", statusCode: 301 },
      { source: "/sv/blog/ombilda-enskild-firma-till-ab-bygg", destination: "/sv/blog/enskild-firma-eller-aktiebolag-bygg", statusCode: 301 },
      { source: "/sv/blog/starta-byggforetag-2026", destination: "/sv/blog/enskild-firma-eller-aktiebolag-bygg", statusCode: 301 },
      { source: "/sv/blog/byggfaktura-checklista-rot", destination: "/sv/blog/faktura-med-rotavdrag", statusCode: 301 },
      { source: "/sv/blog/rotavdrag-2026-nya-regler-foretag", destination: "/sv/blog/faktura-med-rotavdrag", statusCode: 301 },
      { source: "/sv/blog/rotavdrag-hur-mycket", destination: "/sv/blog/kontrollera-kundens-rotutrymme", statusCode: 301 },
      { source: "/sv/blog/rot-fordela-makar-tak-2026", destination: "/sv/blog/kontrollera-kundens-rotutrymme", statusCode: 301 },
      { source: "/sv/blog/vad-ska-faktura-innehalla-bygg", destination: "/sv/blog/faktureringsprogram-bygg", statusCode: 301 },
      { source: "/sv/blog/fakturera-som-hantverkare", destination: "/sv/blog/faktureringsprogram-bygg", statusCode: 301 },
      { source: "/sv/blog/paminnelse-inkasso-avgift-bygg", destination: "/sv/blog/faktureringsavgift-hantverkare-tillaten", statusCode: 301 },
      { source: "/sv/blog/kunden-betalar-inte-fakturan", destination: "/sv/blog/faktureringsavgift-hantverkare-tillaten", statusCode: 301 },
      { source: "/sv/blog/efterkalkyl-bygg-kalkyluppfoljning", destination: "/sv/blog/kostnadskontroll-byggprojekt-marginal", statusCode: 301 },
      { source: "/sv/blog/leverantorsfaktura-bygg-projekt", destination: "/sv/blog/kostnadskontroll-byggprojekt-marginal", statusCode: 301 },
      { source: "/sv/blog/forskott-handpenning-bygg", destination: "/sv/blog/betalningsvillkor-faktura-bygg", statusCode: 301 },
      { source: "/sv/blog/korjournal-krav-skatteverket-bygg", destination: "/sv/blog/servicebil-eller-formansbil", statusCode: 301 },
      { source: "/sv/blog/sank-arbetsgivaravgift-unga-vaxa-stod-2026", destination: "/sv/blog/vad-kostar-en-anstalld-byggforetag", statusCode: 301 },
      { source: "/sv/blog/franvaro-i-byggforetag", destination: "/sv/blog/sjuklon-karensavdrag-vab-byggforetag", statusCode: 301 },
      { source: "/sv/blog/garantitid-ansvarstid-ab-04", destination: "/sv/blog/entreprenadgaranti-sakerhet-ab04", statusCode: 301 },
      { source: "/sv/blog/overlamning-relationshandlingar", destination: "/sv/blog/dou-parm-drift-underhall-bygg", statusCode: 301 },
      { source: "/sv/blog/saga-upp-anstalld-personliga-skal-bygg", destination: "/sv/blog/uppsagning-arbetsbrist-bygg", statusCode: 301 },
      { source: "/sv/blog/egenkontroll", destination: "/sv/blog/egenkontroll-entreprenad", statusCode: 301 },
      { source: "/sv/blog/kontrollplan-mall-bygglov", destination: "/sv/blog/boverkets-nya-byggregler-2026-kontrollplan", statusCode: 301 },
      { source: "/sv/blog/vatrumscertifikat-behorighet-gvk", destination: "/sv/blog/bbv-eller-gvk-vatrum", statusCode: 301 },
      { source: "/sv/blog/skaffa-recensioner-omdomen-byggfirma", destination: "/sv/blog/google-foretagsprofil-lokal-seo-byggfirma", statusCode: 301 },
      { source: "/sv/blog/golvmaterial-atgang-spill", destination: "/sv/blog/spillprocent-bygg-material", statusCode: 301 },
      { source: "/sv/blog/materialatgang-innervagg-reglar-gips", destination: "/sv/blog/reglar-dimensioner-c-avstand-vagg", statusCode: 301 },
      { source: "/sv/blog/omvand-byggmoms-underentreprenor", destination: "/sv/blog/omvand-byggmoms-bokfora", statusCode: 301 },
      { source: "/sv/blog/rot-eller-rut", destination: "/sv/blog/faktura-med-rotavdrag", statusCode: 301 },
      { source: "/sv/blog/rot-avdrag", destination: "/sv/blog/faktura-med-rotavdrag", statusCode: 301 },
      { source: "/sv/blog/rotavdrag-pensionar", destination: "/sv/blog/kontrollera-kundens-rotutrymme", statusCode: 301 },
      // Junk URL from an early test post. It has no target, but leaving it 404 would
      // fail the whole "Not found (404)" validation run in GSC — send it to the blog index.
      { source: "/sv/blog/test", destination: "/sv/blog", statusCode: 301 },

      // GSC "Not found (404)" round 2: /en & /ru URLs Google indexed before these
      // pages went sv-only. Removing them from the sitemap wasn't enough — Google
      // keeps re-crawling the already-indexed URLs and hitting 404. 301 to the live
      // Swedish page (all targets verified 200) so the old URL is replaced.
      { source: "/en/verktyg/ackord-kalkylator", destination: "/sv/verktyg/ackord-kalkylator", statusCode: 301 },
      { source: "/en/verktyg/ob-overtid-kalkylator", destination: "/sv/verktyg/ob-overtid-kalkylator", statusCode: 301 },
      { source: "/en/verktyg/restidsersattning-kalkylator", destination: "/sv/verktyg/restidsersattning-kalkylator", statusCode: 301 },
      { source: "/en/blog/tidrapport-app-iphone", destination: "/sv/blog/tidrapport-app-iphone", statusCode: 301 },
      { source: "/ru/blog/tidrapport-app-iphone", destination: "/sv/blog/tidrapport-app-iphone", statusCode: 301 },
      { source: "/en/blog/faktura-med-rotavdrag", destination: "/sv/blog/faktura-med-rotavdrag", statusCode: 301 },
      { source: "/ru/blog/faktura-med-rotavdrag", destination: "/sv/blog/faktura-med-rotavdrag", statusCode: 301 },

      // Round 3: the same two articles were also advertised (via the old
      // denylist-driven hreflang) in the six languages added later. hreflang no
      // longer emits them, but Google keeps re-crawling what it already found —
      // 301 onto the Swedish original so those 404s clear.
      { source: "/:lang(pl|uk|fi|et|lt|lv)/blog/tidrapport-app-iphone", destination: "/sv/blog/tidrapport-app-iphone", statusCode: 301 },
      { source: "/:lang(pl|uk|fi|et|lt|lv)/blog/faktura-med-rotavdrag", destination: "/sv/blog/faktura-med-rotavdrag", statusCode: 301 },

      // Phantom routes Google indexed that have no marketing page (no internal
      // links point here). 301 to the home page to clear the 404.
      { source: "/faq", destination: "/sv", statusCode: 301 },
      { source: "/login", destination: "/sv", statusCode: 301 },

      // Clean vanity short links for marketing (YouTube, ads, print). The user
      // shares the pretty /go/... URL; the redirect appends UTM so GA4 attributes
      // the visit. Temporary (307) so a link can be re-pointed later without a
      // cached 301. Add one row per campaign.
      //
      // One per site feature page (/sv/funktioner). campaign = short feature slug.
      { source: "/go/offert", destination: "/sv/blog/skapa-offert-i-byggexp?utm_source=youtube&utm_medium=video&utm_campaign=offert", permanent: false },
      { source: "/go/faktura", destination: "/sv/blog/fakturera-fran-byggexp?utm_source=youtube&utm_medium=video&utm_campaign=faktura", permanent: false },
      { source: "/go/lon", destination: "/sv/blog/loneunderlag-for-byggforetag?utm_source=youtube&utm_medium=video&utm_campaign=lon", permanent: false },
      { source: "/go/ekonomi", destination: "/sv/blog/projektekonomi-och-lonsamhet?utm_source=youtube&utm_medium=video&utm_campaign=ekonomi", permanent: false },
      { source: "/go/tid", destination: "/sv/blog/automatisk-tidrapportering-och-export?utm_source=youtube&utm_medium=video&utm_campaign=tidrapportering", permanent: false },
      { source: "/go/narvaro", destination: "/sv/blog/narvaro-och-incheckning-pa-bygget?utm_source=youtube&utm_medium=video&utm_campaign=narvaro", permanent: false },
      { source: "/go/uppgifter", destination: "/sv/blog/hantera-uppgifter-i-byggprojekt?utm_source=youtube&utm_medium=video&utm_campaign=uppgifter", permanent: false },
      { source: "/go/paminnelser", destination: "/sv/blog/paminnelser-uppgifter-och-deadlines?utm_source=youtube&utm_medium=video&utm_campaign=paminnelser", permanent: false },
      { source: "/go/planering", destination: "/sv/blog/dagsplanering-och-planeringsmoten?utm_source=youtube&utm_medium=video&utm_campaign=planering", permanent: false },
      { source: "/go/foto", destination: "/sv/blog/dokumentera-med-foton-pa-bygget?utm_source=youtube&utm_medium=video&utm_campaign=foto", permanent: false },
      { source: "/go/kvitton", destination: "/sv/blog/fota-kvitton-och-hantera-utlagg?utm_source=youtube&utm_medium=video&utm_campaign=kvitton", permanent: false },
      { source: "/go/verktyg", destination: "/sv/blog/hantera-verktyg-och-utrustning?utm_source=youtube&utm_medium=video&utm_campaign=verktyg", permanent: false },
      // Video-only links without a dedicated feature page.
      { source: "/go/projekt", destination: "/en?utm_source=youtube&utm_medium=video&utm_campaign=create-project", permanent: false },
      { source: "/go/timmar", destination: "/sv/blog/automatisk-tidrapportering-och-export?utm_source=youtube&utm_medium=video&utm_campaign=manuell-tid", permanent: false },
    ];
  },
  async headers() {
    const rules = [
      // Embeddable calculator widgets must be framable by ANY site. The VPS
      // nginx sends a global `X-Frame-Options: SAMEORIGIN`; CSP frame-ancestors
      // obsoletes and overrides XFO in modern browsers. (If a browser still
      // blocks, drop XFO for `location /sv/embed/` in the nginx config.)
      {
        source: "/:lang/embed/:slug*",
        headers: [
          { key: "Content-Security-Policy", value: "frame-ancestors *" },
        ],
      },
    ];
    if (!allowIndex) {
      rules.push({
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      });
    }
    return rules;
  },
};

export default nextConfig;
