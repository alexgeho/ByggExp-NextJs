# Site languages (byggexp.se) — status & quality notes

Updated 2026-09-05. The marketing site now mirrors the app's language set.

## Languages live on the site
| Code | Language   | In switcher | Quality of site copy |
|------|------------|-------------|----------------------|
| sv   | Svenska    | ✅          | native (source)      |
| en   | English    | ✅          | native               |
| nb   | Norsk      | ✅ (→ byggexp.no) | good            |
| ru   | Русский    | ✅          | good (pre-existing)  |
| pl   | Polski     | ✅          | good (Claude)        |
| uk   | Українська | ✅          | good (Claude)        |
| fi   | Suomi      | ✅          | ⚠️ machine-grade (Claude) — review |
| et   | Eesti      | ✅          | ⚠️ machine-grade (Claude) — review |
| lt   | Lietuvių   | ✅          | ⚠️ machine-grade (Claude) — review |
| lv   | Latviešu   | ✅          | ⚠️ machine-grade (Claude) — review |

## ⚠️ Action item — BEFORE any paid/FB campaign in et / lt / lv (and fi)
The Baltic + Finnish site copy was translated by Claude to a working (DeepL-comparable)
standard, but **not** by a native speaker. Since these pages will be the landing/first
impression for Facebook-group outreach to Baltic/Finnish workers, run them through
**DeepL (the same engine the app uses) and/or a native reviewer before pushing traffic**.
Focus on: pricing, CTA/form copy, hero, and any legal wording.

Source strings to review live in `src/locales/*.ts` (blocks keyed `fi` / `et` / `lt` / `lv`)
plus the funktioner page copy in `src/pages/[lang]/funktioner/index.tsx`.

## Scope of translation
- **Translated:** the full sales/marketing UI (header, hero, pricing, benefits, pain, CTA,
  finalBenefits, footer, contact, all 12 feature cards, /funktioner page, feature nav, default
  home SEO meta, blog listing chrome).
- **NOT translated (fallback):** blog articles (`/xx/blog` is empty for the new locales — sv/en/ru
  only), legal pages (villkor / integritetspolicy etc. fall back to en/sv). Blog content is "later".

## Consistency with the app
The app translates via **DeepL** (DeepL API / "Talking" is wired for in-app chat). For 1:1
terminology consistency, the site strings can later be regenerated/checked through the same DeepL
account. Keeping product terms aligned (e.g. tidrapportering, arbetspass, personalliggare) matters.
