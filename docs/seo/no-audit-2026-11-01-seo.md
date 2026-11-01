# byggexp.no — SEO audit 2026-11-01 (read-only)

Sources: GSC (sc-domain:byggexp.no) read in Chrome. The API token in `.gsc/gsc_token.json` is **expired/revoked** (`invalid_grant`, expiry 2026-10-14). Also used: a live curl crawl of all 56 sitemap URLs plus nav pages, and the repo (`src/middleware.ts`, `src/pages/sitemap.xml.ts`, `src/components/LeadMagnet/*`, `src/content/articles/nb-timeregistrering.ts`, `src/locales/*`).

## 1. GSC — last 28 days vs previous 28 days

| | Last 28d | Prev 28d |
|---|---|---|
| Clicks | **62** | 63 |
| Impressions | **9.71K** | 8.78K |
| CTR | 0.6 % | 0.7 % |
| Avg position | **26.6** | 21.2 (worse) |

Index: **67 indexed / 105 not indexed**. Not-indexed reasons: 75 redirects (fine, old sv URLs), 13 alternate canonical (category filters, om-oss, faq, legal), 10 × 404 (old Swedish tools/articles on /nb, Sept), 2 noindex (`/nb/maler/*.html`), 2 crawled-not-indexed (`/nb/maler/*.csv`), 2 discovered-not-indexed (`/nb/blog/gratis-timeregistrering-app`, `/nb/fa-offert`), **1 "Duplicate, Google chose different canonical": `https://byggexp.no/nb` (the homepage)**.

Almost all clicks come from one page: `/nb/verktyg/takstolar-kalkylator` (47 of 62 clicks; 888 impressions; pos 11.5).

### Top pages by impressions (last 28d, prev in brackets)
| Page | Clicks | Impr | Pos |
|---|---|---|---|
| /nb/blog/hms-kort-gyldighet | 1 | 983 (795) | 11.6 (8.9) |
| /nb/blog/byggherreforskriften | 1 | 949 (476) | 49.6 |
| /nb/verktyg/takstolar-kalkylator | 47 | 888 (682) | 11.5 |
| /nb/blog/sha-plan | 1 | 847 (430) | 56.6 |
| /nb/blog/sjekke-hms-kort | 3 | 736 (483) | 16.8 (10.4) |
| /nb/blog/mistet-hms-kort | 0 | 510 | 31.9 (20.9) |
| /nb/verktyg/tak-kalkylator | 1 | 484 | 7.7 |
| /nb/verktyg/gips-kalkylator | 1 | 397 | 7.3 |
| /nb/blog/bestille-hms-kort | 0 | 348 | 56 |
| /nb/blog/mannskapsliste-byggeplass | 0 | **303 (595)** | 24 (19.3) |
| /nb/blog/hms-kort-pris | 0 | 293 | 58 |
| /nb/blog/timeregistreringssystem-bygg | 0 | 244 | 35 |
| /nb/blog/prosjektstyring-bygg | 0 | 231 | 21.5 |
| /nb/blog/timeliste-mal | 0 | 194 | 36.7 |
| /nb/blog/timeregistrering-app-bygg | 0 | **28 (209)** | 47 — collapsed |
| /nb/funktioner, /nb, / | 0 | ~3 total | — homepage effectively invisible |

### Product-intent queries (the ones that sell)
fakturaprogram bygg 49 impr / pos 33 · prosjektstyring system 45 / 19.3 · mal for tidsrapportering 43 / 46 · lønnssystem bygg og anlegg 41 / 62 · timeregistrering system **31 (78)** / 28 · elektronisk mannskapsliste **21 (57)** / 24.7 · verktøy for prosjektstyring 24 / 11.2 · prosjektstyring bygg 23 / 14.1 · timeregistrering bygg 19 / 12.7 · timeregistreringssystem **17 (49)** / 23. The product cluster is losing impressions while the regulatory (B) cluster grows.

### Near-miss queries (pos 5–20, ≥12 impressions, 0 clicks unless noted)
| Query | Impr | Pos | Page | Action |
|---|---|---|---|---|
| hvor lenge er (et) hms kort gyldig / varer (et) / fornyes / varighet (8 variants) | ~520 | 7–10 | hms-kort-gyldighet | Put the answer in the first sentence + FAQPage (see P1-1) |
| hms kort gyldighet | 97 | 19.2 | split between gyldighet and sjekke → cannibalisation | P1-1 |
| kvitteringshåndtering | 89 | 6.9 | fota-kvitton-och-hantera-utlagg | P1-4 |
| takstol kalkulator (9 clicks) / takstoler pris | 58 / 13 | 9.6 / 14.2 | takstolar-kalkylator | Translate the widget (P0-1); add "pris" to the title |
| sjekk / sjekke / hms kort sjekk | 130 | 9–10 | sjekke-hms-kort | Answer-first lead; link to gyldighet |
| prosjektstyring system / verktøy for prosjektstyring / prosjektstyring bygg | 92 | 11–19 | prosjektstyring-bygg | P1-5 |
| framdriftsplan | 29 | 8.6 | framdriftsplan | P2: add a downloadable example plan |
| mistet hms kort | 27 | 6 | mistet-hms-kort | OK; page average fell to 31.9, so tighten intro |
| mannskap registrering byggeplass / er elektronisk mannskapsliste påbudt / elektronisk oversiktsliste | 48 | 16–19 | mannskapsliste-byggeplass | P1-6 FAQ |
| timeregistrering bygg | 19 | 12.7 | timeregistrering pillar | P1-3 |
| enkel timeliste | 13 | 18.4 | timeliste-app-bygg / mal | P1-6 |

## 2. Indexing and technical findings

What is OK:
- The sitemap (`src/pages/sitemap.xml.ts`) lists only nb URLs on byggexp.no: 56 URLs (1 home, blog hub, funktioner, contact, verktyg hub, 15 calculators, 38 articles). byggexp.se's sitemap contains 0 nb/.no URLs.
- Canonicals are self-referencing on all 54 nb sitemap pages. No .no page is canonicalised to .se, and no .se page to .no.
- hreflang: all 119 non-.no targets return 200. sv↔nb is reciprocal on every checked pair. x-default points to the .se/sv page. nb-only articles (HMS, SHA, timepris…) have no hreflang, which is correct.
- `byggexp.se/nb/*` and `byggexp.no/sv|en` both 301 to the right domain. www 301s to apex. Trailing slash returns 308. robots.txt is clean. No noindex on sitemap URLs.
- Titles are unique (no duplicates). Meta descriptions are present everywhere. One H1 per page. Every article is 600–1,100 words.

Problems:
- **P0 — the homepage is a duplicate.** `byggexp.no/` returns 200 through a rewrite in middleware (`src/middleware.ts` ~l.90–93: `pathname === '/' ? '/nb'` → `NextResponse.rewrite`). `/nb` also returns 200 with the same content and a canonical of `/nb`. Google rejected that canonical ("Duplicate, Google chose different canonical than user" for /nb), so the homepage has no rankings. The same rewrite gives 200 duplicates for every locale-less path (`/blog/sha-plan`, `/verktyg`), although their canonical is correct.
- **P0 — calculators are in Swedish on nb.** The H1 and intro are Norwegian, but the widget (inputs "Takets längd", "Spännvidd", results), the lead form ("Vill du ha hjälp vidare? … Beskriv kort vad du behöver"), the "Bädda in kalkylatorn" embed block and the HowTo schema steps are all Swedish. This affects all 15 calculators in the sitemap, with 25–48 Swedish words per page, including the #1 traffic page. Cause: components use `en ? … : sv` with no nb branch (`src/components/LeadMagnet/*Tool.tsx`, `ToolLeadForm.tsx`, the embed block in `LeadMagnetPage.tsx`, and the `howTo.steps` ternaries in `src/pages/[lang]/verktyg/*.tsx`). The timepris calculator also pre-fills **Swedish arbetsgivaravgift 31.42 % and semesterlön 12 %**. Norway's figures are arbeidsgiveravgift 14.1 % (zone 1) and feriepenger 10.2 %/12 %.
- **P0 — /nb/funktioner is empty** ("Ingen funksjoner ennå."; 250 words). It is in the sitemap and linked 3× from the homepage. Cause: `funktioner/[slug].tsx` getStaticPaths only builds `lang: "sv"`.
- **P0 — Swedish-market facts on nb pages:**
  - ROT-fradrag (does not exist in Norway) on 12 guide pages. It is in the "Lag tilbud…" related card and 4× in `/nb/blog/skapa-offert-i-byggexp`.
  - Prices are in **SEK** on the nb homepage (`src/locales/heroV2.ts` l.73/78, `src/locales/pricing.ts`).
  - "Lønn, lønnsslipper og **AGI**" and "SIE4-eksport til Fortnox, Visma og BL" in nb pricing (`pricing.ts`). AGI is Swedish; Norway uses a-melding.
  - Blog category labels are Swedish ("Arbetsmiljö", "Personal & lön", "Marknad & tillväxt") in `src/lib/blog-categories.ts`.
- **Risky claim:** the homepage meta description lists "mannskapsliste" as a feature. product-facts-verified.md says personalliggare is "not fully shipped" (PDF only). Reword to "innsjekking med GPS".
- /nb/om-oss and /nb/faq (linked from every page) serve **English** content with a canonical to byggexp.se/en. There are no nb versions.
- Literal route URLs were picked up by Google: `/[lang]/faq` (impressions) and `/[lang]/blog/[slug]` (404). Some template emits unresolved hrefs.
- /nb/verktyg/farg-kalkylator returns 200 with nb content but is missing from the sitemap and hub. Its impressions went from 195 to 0.
- `/nb/priser` returns 404. The nb pricing is only the `/nb#pricing` section.
- Nav links point to `/nb/blog?kategori=*` (canonical → /nb/blog). That is fine, but it is crawl waste.
- Swedish slugs on nb (`verktyg`, `funktioner`, `contact`, 12 guide slugs like `fota-kvitton-och-hantera-utlagg`). Not urgent; renaming means 301s and these URLs already have impressions. Use Norwegian slugs for new pages only.
- Swedish-sounding Norwegian: "underlag/underlaget" ×25 (→ "grunnlag/dokumentasjon"), "byggkalkulatorer" (→ "byggekalkulatorer"), "Äta" (→ "tilleggsarbeid/endring"), "attesterte" ×17 (acceptable; "godkjente" is more natural). Guide pages are clearly translated from sv; HMS/SHA articles read naturally.
- About 20 titles are 61–65 characters (minor truncation risk).

## 3. Content architecture vs no-innholdsarkitektur.md

| Hub | Plan | Live | Status |
|---|---|---|---|
| A Produkt | timeregistrering-app-bygg ⭐, gratis-timeregistrering-app, timeliste-app-bygg, timeregistreringssystem-bygg, stemplingsur-app, faktureringsprogram-bygg | all 6 live as /nb/blog articles; no product landing pages; /nb/funktioner empty | Weakest hub. The pillar fell 209→28 impressions; gratis-… is not indexed; stemplingsur has 0 impressions (keyword 0–10). Guide translations (automatisk-tidrapportering-och-export, 109 impressions) cannibalise the pillar |
| B Regulatory | hms-kort-bygg ⭐ + 6 spokes, mannskapsliste ⭐, sha-plan, byggherreforskriften | all live (byggherreforskriften done) | Biggest traffic, 0 clicks. Pillar hms-kort-bygg is at pos 37.7; spokes pris/bestille/byggekort at pos 52–58 are thin duplicates of each other. Missing: oversiktsliste spoke (fold into mannskapsliste instead) |
| C Maler | timeliste-mal, fakturamal, sha-plan-sjekkliste | timeliste-mal and fakturamal are articles; the "maler" are CSV/HTML files under /nb/maler (noindex / not indexed); no real .xlsx | Lead magnets are not built |
| D Pris | timepris-snekker (+rørlegger/elektriker) | all 3 live | Pos 27–40 |
| P Økonomi | prosjektstyring-bygg, byggekontrakt | live | prosjektstyring is close (pos 11–19) |
| Missing per plan | tilbudsmal (10–100), timeregistrering for små bedrifter (50) | — | Low volume; do not build now |

Owner rule (seo-arkitektura.md): few strong pages. The .no site has 38 articles and 67 indexed URLs earning 62 clicks. **The next wave should consolidate and fix, not add pages.**

## 4. Prioritised actions

### P0 — technical blockers (one deploy)
1. **Homepage duplicate.** In `src/middleware.ts`, on the NO host, 301-redirect `/` → `/nb` instead of rewriting. Do the same for locale-less paths (`/x` → `/nb/x`), matching the .se behaviour (`/` → `/sv`). Then request indexing for `https://byggexp.no/nb` (owner or GSC session).
2. **nb strings for calculators.** Add an `nb` branch to every `*Tool.tsx` in `src/components/LeadMagnet/`, plus `ToolLeadForm.tsx`, the embed block in `LeadMagnetPage.tsx` and the `howTo.steps` in all 15 `src/pages/[lang]/verktyg/*.tsx`. Start with takstolar, tak, gips, isolering and betong (most impressions). In `timpris-kalkylator`, change the nb defaults to arbeidsgiveravgift 14.1 % and feriepenger 10.2 %, with "mva" instead of "moms".
3. **/nb/funktioner.** Either (a) remove it from the nb sitemap, add noindex and replace the 3 homepage links with `/nb#pricing` or the A-hub pillar, or (b) build nb slugs. (a) is the fix now; (b) belongs in wave 2.
4. **Strip Swedish-market facts from nb:**
   - Remove ROT from the nb guide translations (the `skapa-offert-i-byggexp` text and the related card).
   - In `pricing.ts` nb: replace "AGI" with "a-melding-grunnlag" only if the product supports it. Otherwise say "lønnsgrunnlag (CSV)". Drop "Fortnox/BL", or say "SIE4-/CSV-eksport".
   - Translate the nb labels in `blog-categories.ts`.
   - SEK prices are an **owner decision** (NOK price list or "pris i SEK eks. mva"). NOK prices are not in product-facts, so do not invent them.
5. Reword the homepage meta description: replace "mannskapsliste" with "innsjekking med GPS" (product-facts).
6. Find and fix the unresolved `/[lang]/…` hrefs (grep templates for `"/[lang]"` in Link `href`).

### P1 — wave of 6 (improve and consolidate, no new URLs). Gate: 4 weeks, ≥100 impressions per page.
| # | URL | Target keyword (KP volume) | What to do |
|---|---|---|---|
| 1 | /nb/blog/hms-kort-gyldighet | hvor lenge er hms kort gyldig + hms kort gyldighet (cluster in "hms kort" 1K–10K; ~600 impressions at pos 7–10, 0 clicks) | First sentence: "HMS-kortet gjelder i inntil to år, og bare så lenge du er ansatt hos arbeidsgiveren som bestilte det." Add a fornyelse table (when / who / cost) and FAQPage for the 4 question variants (hvor ofte fornyes, varighet). Remove the "gyldighet" focus from the sjekke-hms-kort title/H2 to end the split |
| 2 | /nb/blog/hms-kort-bygg → pillar "HMS-kort" | hms kort (1K–10K), hms kort pris, bestille hms kort, byggekort (100–1K / 10–100) | 301 `hms-kort-pris`, `bestille-hms-kort` and `byggekort` (pos 52–58, ~680 impressions) into pillar sections "Bestille", "Pris", "Byggekort = HMS-kort". New title: "HMS-kort – bestille, pris, sjekke og gyldighet \| ByggExp". The pillar links to gyldighet, sjekke and mistet. Edit `nb-timeregistrering.ts`, the sitemap and next.config redirects |
| 3 | /nb/blog/timeregistrering-app-bygg | timeregistrering / timeregistrering app (500), timeregistrering bygg (50) | 301 into it: `gratis-timeregistrering-app` (not indexed), `stemplingsur-app` (0 impressions; dead keyword) and `timeregistreringssystem-bygg` (pos 35). Add sections "Gratis i 14 dager", "Timeregistreringssystem", "Stemplingsur i mobilen". Facts only from product-facts: GPS check-in/out, geofence auto-pause, normal/overtid/OB chosen per shift, PDF/Excel export, attest. Retitle the guide `automatisk-tidrapportering-och-export` to "Slik eksporterer du timer fra ByggExp" so it stops competing. Link the pillar from the homepage hero |
| 4 | /nb/blog/fota-kvitton-och-hantera-utlagg | kvitteringshåndtering (89 impressions, pos 6.9; KP n/a, check in KP) | H1 → "Kvitteringshåndtering for byggefirma". Answer-first: the worker scans the receipt with the phone camera, and the office scans receipts and incoming invoices (product-facts: Skanning). Remove ROT from the related cards. Keep the slug |
| 5 | /nb/blog/prosjektstyring-bygg | prosjektstyring (100–1K), prosjektstyring system, verktøy for prosjektstyring (pos 11–19) | Title: "Prosjektstyring bygg – system og verktøy for plan, timer og margin". Add an H2 "Hva bør et prosjektstyringssystem for bygg ha?" with Gantt by person/project, Bemanning, overbooking warning >8 t, and hours per project → margin. Do not claim drag-and-drop or machines |
| 6 | /nb/blog/timeliste-mal | timeliste mal (100–1K), timeliste (100–1K), mal for tidsrapportering (43 impressions, pos 46), timeliste eksempel | Replace the CSV with a real `.xlsx` (formulas for sum, overtid and project) under `/public/nb/maler/`. Add a "Last ned" button above the fold, a filled example row ("eksempel") and a bridge to timeliste-app-bygg. The current .csv is "crawled – not indexed" |

Also in this wave (small): add a FAQ to `mannskapsliste-byggeplass` for "Er elektronisk mannskapsliste påbudt?" (§ 15 byggherreforskriften; keep the existing "not a certified HMS-kort reader" disclaimer) and for "elektronisk oversiktsliste". Add "pris" to the takstolar-kalkylator title ("Takstol kalkulator – antall og pris…" only if the tool shows a price; otherwise keep it).

### P2
- nb versions of /nb/om-oss and /nb/faq (self-canonical), or remove them from nb nav and footer.
- Add `farg-kalkylator` to the nb sitemap and the verktyg hub.
- Language pass: "underlag" → "grunnlag" (×25), "byggkalkulatorer" → "byggekalkulatorer", "Äta". Have a native speaker review the 12 guide translations.
- Shorten titles longer than 60 characters, for example hms-kort-gyldighet, faktureringsprogram-bygg and fota-kvitton.
- framdriftsplan (pos 8.6): add an example plan (table) and a download.
- SHA/byggherreforskriften (1.8K impressions, pos 50–57): this is a link and authority problem, not on-page. Get 2–3 Norwegian links (bransje blogs, directories such as proff.no, gulesider, 1881 with NAP) per seo-arkitektura pillar 3–4.
- New URLs (wave 2, only after the P1 gate): nb product landing pages under Norwegian slugs (`/nb/funksjoner/timeregistrering`, `/nb/funksjoner/fakturering`) replacing the blog pillars. Possibly tilbudsmal (10–100).
- Do not rename the Swedish slugs; use Norwegian slugs for new pages only.
- Renew the GSC API token (owner: `cd .gsc && ~/.gsc-venv/bin/python gen_gsc_token.py`).
