# byggexp.no — critic audit 2026-11-01 (report only, no code changed)

Method: headless Chromium (Playwright, 1440×900 + 390×844 @2x), curl crawl of all 92 internal links found on 15 audited pages, Lighthouse 12 mobile, code lookup in repo + ByggExp-BackEnd.
Screenshots: `docs/seo/no-audit-2026-11-01-shots/` (`<page>-d.png` desktop full, `<page>-m.png` mobile full, `*-firstscreen.png` viewport).
Pages: /nb, /nb/funktioner, /nb/priser, /nb/contact, /nb/blog, 3 articles (timeregistrering-app-bygg, hms-kort-bygg, skapa-offert-i-byggexp), /nb/villkor, /nb/integritetspolicy, /nb/om-oss, /nb/faq, /nb/dpa, /nb/verktyg, 404.

## P0

1. **Lead forms cannot submit from byggexp.no (CORS).** Contact form + home CTA form POST to `https://api.byggexp.se/mail/demo-request` with JSON → browser preflight. `OPTIONS` with `Origin: https://byggexp.no` (and www) → **404, no Access-Control-Allow-Origin**; same request with `Origin: https://byggexp.se` → 204 OK. Every Norwegian lead gets the error state.
   - URL: /nb/contact, /nb (#cta). Shot: contact-m-firstscreen.png, contact-d-validation.png
   - Fix: add `https://byggexp.no`, `https://www.byggexp.no` to the allowed-origins list in `ByggExp-BackEnd/src/main.ts` (~line 115) or the `extraOrigins` env, redeploy API. Then one test submit from .no. (Form not submitted during audit.)

2. **Cookie banner is Swedish on every .no page** ("Vi använder cookies… Neka / Acceptera", link "Integritetspolicy" → `/sv/integritetspolicy` → 301 to byggexp.se). Also names Microsoft Clarity, which is not loaded on .no.
   - URL: all pages. Shot: home-m-firstscreen.png, home-d-firstscreen.png, p404-m-firstscreen.png
   - Fix: `src/components/CookieConsent/CookieConsent.tsx` — `Lang` only sv/en/ru, everything else falls back to sv. Add `nb` copy (Avslå / Godta / Personvernerklæring) and keep link `/${lang}/integritetspolicy`; text for .no should mention only Google Analytics.

3. **Legal + trust pages are English on nb**, including header/nav chrome (Product / Pricing / Resources / About us…) while switcher says "Norsk"; canonical points to `byggexp.se/en/...`.
   - URLs: /nb/villkor, /nb/integritetspolicy, /nb/om-oss, /nb/faq, /nb/dpa. Shots: villkor-d/m.png, integritet-*.png, om-*.png, faq-*.png, dpa-*.png, villkor-m-firstscreen.png
   - Footer labels them "Personvernerklæring / Brukervilkår / Vanlige spørsmål" → the click lands on English. E-E-A-T: no Norwegian privacy policy/about at all.
   - In-page links on these pages go to `/en`, `/en/contact`, `/en/villkor` → 301 to byggexp.se (user leaves the .no site).
   - Fix: nb copy for `src/pages/[lang]/{villkor,integritetspolicy,om-oss,faq,dpa}.tsx` (+ header strings for those pages); canonical to `byggexp.no/nb/...`. Note `om-oss.tsx:81` hardcodes `/sv/integritetspolicy`.

## P1

4. **Swedish blog categories in nb header menu "Ressurser" and blog filter**: "Ekonomi & skatt, Kalkyl & material, Juridik & avtal, Arbetsmiljö, Regelverk, Personal & lön, Kvalitet & projekt, Marknad & tillväxt", chip "Alla". Mixed with Norwegian tags on cards ("Økonomi", "Prosjekt").
   - URL: all pages (header), /nb/blog. Shot: blog-d.png, blog-m.png, home-m-menu.png
   - Fix: `src/lib/blog-categories.ts` labels are sv-only → add per-lang labels (nb: Økonomi og skatt, Kalkyle og materialer, Juss og kontrakter, Arbeidsmiljø, Regelverk, Personal og lønn, Kvalitet og prosjekt, Marked og vekst; "Alle"); "Alla" in `src/pages/[lang]/blog/index.tsx`.

5. **Prices in SEK on the Norwegian site** (hero "299 SEK/mnd", "+69 SEK/arbeider", pricing "SEK / bedrift / måned"). worklog-archive says SEK on nb was a deliberate choice; product-facts-verified.md gives only "kr". Not wrong per facts, but a Norwegian buyer sees a foreign currency, and Stripe checkout currency must match. → **Owner decision**: keep SEK (then fine) or show NOK. Files: `src/locales/pricing.ts`, `src/locales/heroV2.ts`, `src/components/Pricing/Pricing.tsx`. Shot: home-d.png.

6. **Swedish-market facts on nb pages**: home lists "Lønn, lønnsslipper og AGI" and "SIE4-eksport til Fortnox, Visma og BL" (AGI/SIE4/Fortnox/BL are Swedish; Norway = a-melding, SAF-T, Tripletex/Fiken). Article /nb/blog/skapa-offert-i-byggexp sells "ROT-fradrag" 4× (Swedish tax deduction; does not exist in Norway). Contact: "+46 8 446 821 58", "Kontor i Sverige", e-mails @byggexp.se.
   - Shots: home-d.png, a3-d.png, contact-d.png
   - Fix: nb strings — drop ROT lines in `src/content/articles/features-nb.ts`; for AGI/SIE4 keep only what product-facts-verified.md confirms for Norway (ask owner — don't invent a-melding support). Phone/address: real data only, just flag.

7. **No branded 404**: Next default "404 | This page could not be found.", `lang="sv"`, no header/footer/link home. Shot: p404-d.png, p404-m-firstscreen.png. Fix: add `src/pages/404.tsx` (host-aware nb/sv, header + one link to home).

8. **Homepage LCP 8.6 s on mobile** (Lighthouse perf 68; CLS 0, TBT 260 ms, 1.47 MB). LCP element = `/landing/hero/bg-bygge.webp` (decorative background). Oversized images ≈731 KB savings: `landing/hero/kontor.webp` (331 KB), `hero/bygget.webp` (139 KB), `features/4foto-1200.webp`. Fix: preload/`fetchpriority=high` + mobile-size variant for hero bg, responsive `srcset` for hero photos (hero-v2 component). Article /nb/blog/timeregistrering-app-bygg: perf 89, LCP 2.1 s, CLS 0, TBT 390 ms; `features/1arbetspass.webp` 138 KB used as small card thumb.

9. **/nb/priser = 404** (`priser.tsx` getStaticPaths only `sv`). Nav "Priser" correctly goes to `/nb#pricing`, no internal links to /nb/priser found → OK for users; just don't link it from nb content/ads.

## P2

10. "demo" vs "gratis konsultasjon": site CTAs say "Gratis konsultasjon", but /nb/blog/timeregistrering-app-bygg + gratis-timeregistrering-app teaser say "bestille en gratis demo". Fix: replace with "gratis konsultasjon" in `src/content/articles/nb-timeregistrering.ts` (and the gratis-timeregistrering-app article).
11. Contact form: "Navn / firma" is required (error "Oppgi navnet ditt" on empty submit) but label has no "*", while "Telefon / e-post *" does. Make consistent (`src/locales/CTA.ts` / contact.ts). Shot: contact-d-validation.png.
12. Article diagrams `landing/diagrams/nb-*.webp` are 720 px wide, shown at 914 px on desktop → soft. Export at 1440 px. Shot: a1-d.png, a2-d.png.
13. Hero product screenshot shows Swedish UI ("SV", SEK). Fine if app has no nb screenshot; flag only.
14. Swedish URL slugs on nb (`/nb/funktioner`, `/nb/verktyg/*-kalkylator`, `/nb/blog/skapa-offert-i-byggexp`, `loneunderlag-for-byggforetag`…). Titles/H1 are Norwegian. Changing slugs = 301 work; only if SEO plan wants it.
15. Two gtag loaders on .no (G-551T40R4WV + G-GGT1EWGRCR) ≈170 KB unused JS (documented as intentional shared loader).
16. Language switcher lists "Norsk" both as current and inside the list (harmless); Svenska → byggexp.se/sv?lang=sv works.

## Checked OK
- No console errors / failed requests on 200 pages; no horizontal scroll at 390 (chip rows scroll inside container); CLS 0.
- 92 internal links: all 200 except the cross-domain 301s listed above (no hard 404s).
- Home section rhythm equal: all sections padding 60/60. One main CTA per hero; header CTA consistent.
- Footer © 2026; privacy line under forms; no fake reviews/testimonials found.
- No cropped heads in hero photos (desktop + mobile).
