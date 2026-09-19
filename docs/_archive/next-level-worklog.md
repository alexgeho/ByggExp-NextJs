# Next-level SEO/growth — worklog (byggexp.se)

Автономный прогон «рычаги следующего уровня». Статусы: ☐ не начато · 🔄 в работе · ✅ сделано · ⛔ [OWNER]-блокер.
Build/lint зелёные после каждого куска. Коммиты — логическими частями.

---

## ▶️ START HERE — состояние + СЛЕДУЮЩИЕ ШАГИ (обновлено 2026-09-08)

**Проверка перед стартом:** `npx eslint src --ext .ts,.tsx` (должно быть 0) · `npx tsc --noEmit` · `SITE_ALLOW_INDEX=true npx next build`. Все три сейчас зелёные.

**Модель продукта (ВАЖНО, не путать):** self-serve триала НЕТ. Единственный primary CTA = **«Boka demo» → `APP_CTA` (/sv/contact)**. «14 dagar gratis» — только текст-крючок. `TRIAL_CTA`/`NEXT_PUBLIC_TRIAL_URL` удалены — НЕ возвращать.

**Ключевые механизмы (переиспользуемые):**
- `src/components/LeadMagnet/ProductBanner.tsx` — контекстный dark-баннер (headline по embedSlug), рендерится на всех tool/mall через `LeadMagnetPage`. Маппинг тем — в `productBannerHeadline()`.
- `LeadMagnetPage` prop **`howTo={{steps}}`** → HowTo JSON-LD (калькуляторы). BlogPost prop **`howTo`** → HowTo в blog-шаблоне (`[lang]/blog/[slug].tsx`).
- GA-события: `tool_view`, `cta_click{action:demo,placement}`, `tool_lead_submit`. Форвардятся в fbq (ретаргет-скелет, ждёт pixel-id [OWNER]).
- Схемы глобально: Organization+WebSite в `_document`; FAQ/Breadcrumb/HowTo/SoftwareApplication per-page.

**⏭️ СЛЕДУЮЩИЕ ШАГИ (по приоритету):**
1. **P1 — раскатать HowTo** на остальные пошаговые калькуляторы (grus, tapet, trall, staket, golv, gips, tak, fall, golvvärme, trappa) — паттерн: `howTo={{steps: lang==='en'?[…]:[…]}}` после `faq={c.faq}`. AC: `curl|grep '"HowTo"'`=1.
2. **P1 — A/B ProductBanner**: contextual vs generic headline (событие уже шлётся, нужен только эксперимент/GA-сегмент).
3. **P2 — GSC near-miss (recurring)**: свежий GSC → pos 8–15 → усилить in-repo (tool/code-страницы). Текущие остатки: egenkontroll mall excel (100 показов, поз.23 — глубоко), abt 06 kontrakt mall (10.5). Данные: `gsc-near-miss.md`.
4. **P2 — entreprenadförsäkring** (244 показа, поз.13.2) — CMS-правка exact-ключа (не в репо, admin/CMS).
5. **P3 — SearchAction**: сделать `/sv/sok?q={term}` results-page → добавить SearchAction в WebSite schema (`_document`).
6. **P3 — HowTo/direct-answer на CMS-pillar'ах** (список в `aeo-report.md`).

**🔴 [OWNER] (вне репо, блокеры роста):**
- **Бэклинки** — #1 рычаг для head-near-miss (page 2–3): tidrapporteringssystem-bygg, affärssystem-byggforetag, entreprenadforsakring, projekthanteringssystem-bygg. On-page исчерпан.
- **`NEXT_PUBLIC_META_PIXEL_ID`** (+ опц. GTM/LinkedIn) → включить ретаргет (скелет готов). См. `retargeting-plan.md`.
- ESP-подключение лид-магнита (nurture); CMS-правки pillar'ов.

**Доки-навигация (`docs/seo/`):** `next-level-worklog.md` (этот, START HERE) · `gsc-near-miss.md` · `aeo-report.md` · `retargeting-plan.md` · `pseo-template.md` · `no-innholdsarkitektur.md` (Норвегия).

---

## 🟢 СЕССИЯ 2 (2026-09-08) — конверсия + добивки. ВСЁ live, AC проверены curl'ом.

**ВАЖНО (модель):** self-serve триала НЕТ (триал даётся вручную после демо-звонка, 14 дней). Убран мёртвый концепт «Testa gratis»/`TRIAL_CTA`/`NEXT_PUBLIC_TRIAL_URL`. Единственный primary CTA = **«Boka demo» → APP_CTA (/sv/contact)**. «14 dagar gratis» — только текст-крючок.

| # | Задача | Статус | Acceptance (проверено live) |
|---|---|---|---|
| 4 | **ESLint честный зелёный** | ✅ | `npx eslint src` = **0 problems** (было 10 err+1 warn). Real-fix (om-oss escape, seo redundant setState, ChatAssistant мёртвый disable) + justified-disable с причинами для легитимных mount/event-эффектов. `tsc` чист. |
| 1 | **Контекстный продукт-баннер** | ✅ | `ProductBanner` (dark navy) на всех 61 tool + 6 mall через `LeadMagnetPage`. Headline контекстный по embedSlug: egenkontroll-mall→«Egenkontroller ingår i ByggExp», faktura-mall→«Offert & fakturering», rot→«Ekonomi & kalkyl», schema-mall→«Planering & bemanning» (curl-подтверждено). «Boka demo» + «14 dagar gratis efteråt». `cta_click{action:demo,source,placement:product_banner}`. **«Testa gratis» = 0** на tool-страницах. ⚠️ отклонение: `.container-narrow`=980px → настоящий right-rail без наложения невозможен без переписи лейаута → сделан in-flow dark-баннер под intro (desktop-горизонт / mobile-стек), не ломает layout. |
| 2 | **HowTo на 8 калькуляторов** | ✅ | `curl … \| grep -o '"HowTo"'` = **1** на kvadratmeter/betong/takstolar/reglar/isolering/farg/moms/u-varde (было только rot). Локализовано sv/en. |
| 3 | **bemanning-pillar** | ✅ | Новый `bemanningssystem-bygg`: 200, **title+H1 содержат «bemanningsplanering»**, HowTo+FAQPage schema, залинкован из **2** страниц (bemanning-och-personalplanering + franvaro-i-byggforetag). Анти-каннибализация: убрал дубль-таргетинг из старой bemanning-статьи. +`howTo` в BlogPost + эмиссия HowTo в blog-шаблоне (переиспользуемо). |
| 5 | **GSC near-miss** | ✅ | Свежий GSC. In-repo фикс: `restidsersattning-kalkylator` таргетил Byggavtalet, но не «Byggnads» (0) под запрос «restidsersättning byggnads» (поз.8.9) → добавил факт-корректный FAQ про Byggnads. egenkontroll-mall уже оптимизирован под «gratis» (H1+16×, поз.16.3 = авторитет, не on-page). Глубокие near-miss (entreprenadförsäkring 13.2 CMS, head-термины page 2–3) = бэклинки [OWNER]. |

**Бэклог (impact×effort):** P0 [OWNER] дать реальный demo-flow метрики; P1 раскатать HowTo на остальные пошаговые калькуляторы + ProductBanner A/B (headline generic vs contextual); P2 entreprenadförsäkring CMS-правка; P3 SearchAction results-page.
**[OWNER] сессии 2:** ничего не блокировало (триал-модель уточнена → мёртвый концепт удалён). Бэклинки остаются #1 вне-репо рычагом для head-near-miss.

---

## (Сессия 1 — 2026-09-08, ранее)

---

## 🔴🔴 [OWNER] — БЛОКЕРЫ (без них часть роста не поедет)
- ⛔ **Публичный register/trial-URL НЕ существует:** `app.byggexp.se` = **NXDOMAIN** (не резолвится). Task 1 требует «Testa gratis»→register. Инфра построена и готова (env `NEXT_PUBLIC_TRIAL_URL` → один флаг включает primary-CTA сайтово, fallback на /sv/contact, без битых ссылок). **Нужно:** живой публичный URL регистрации/триала (НЕ admin.byggexp.se — его нельзя светить публично).
- ⛔ **Ad-аккаунты/пиксель-ID (Task 2):** Meta Pixel ID, опц. GTM ID, LinkedIn Partner ID. Код-скелет готов (consent-gated, default denied), включается env-переменными.
- ⛔ **GSC доступ для near-miss (Task 7):** нужен свежий GSC Performance export (pos 8–15) — либо владелец, либо интерактивный вход. Без данных near-miss не вытащить.

---

## Задача 0 — ИНДЕКСАЦИЯ (критично) — ✅ ПРОВЕРЕНО: ВКЛЮЧЕНА
| Элемент | Есть/нет | Качество | Действие |
|---|---|---|---|
| robots.txt byggexp.se | ✅ `Allow: /` + Sitemap | OK (не Disallow) | — |
| robots.txt byggexp.no | ✅ `Allow: /` + свой sitemap | OK (host-aware фикс ранее) | — |
| noindex на money-страницах | ✅ нет | `/sv/verktyg` = 200, без X-Robots noindex | — |
| SITE_ALLOW_INDEX (env) | ✅ включён на проде | robots отдаёт Allow → env=true | — |
| sitemap.se доступен | ✅ 449 URL (82 verktyg, 320 blog) | полный | — |
| sitemap локали | 🔄 sv/en/ru + nb(.no) | pl/uk/fi/et/lt/lv в свитчере, но контент пуст | зафиксировать решение (ниже) |

**Вывод:** сайт индексируется, money-страницы открыты, sitemap полный. Красного флага НЕТ.
**Решение по локалям:** pl/uk/fi/et/lt/lv имеют только UI-перевод лендинга, без blog/tool-контента → в sitemap НЕ эмитим (иначе тонкие/дубль-страницы). Зафиксировано как намеренное. sv/en/ru — полный контент, nb — на .no.

---

## Чек-лист задач
- [x] 0. Индексация — проверено, включена ✅
- [x] 1. CRO / self-serve funnel ✅ (register-URL = [OWNER])
- [x] 2. Ретаргетинг-скелет (consent-gated) ✅ (pixel-id = [OWNER])
- [x] 3. GEO/AEO — HowTo-механизм + пилот + отчёт ✅ (pillar-CMS-правки = [OWNER])
- [x] 4. Тех-SEO — WebSite schema, og:image, hreflang /verktyg ✅ (/funktioner уже был)
- [x] 5. Pillar-ы — проверено: все названные УЖЕ есть; реальный пробел = Bemanning (объём [OWNER])
- [x] 6. pSEO шаблон + дизайн ✅ (`pseo-template.md`); пилот — после подтверждения объёма
- [x] 7. GSC near-miss — ✅ данные сняты (`gsc-near-miss.md`); in-repo фикс: bemanning-статья +exact-ключи «bemanningsplanering/bemanningssystem» (было 0, поз.53). Глубокие near-miss (page 2–3) = бэклинки [OWNER].

---

## Gap-таблицы + действия по задачам

### 1. CRO / self-serve funnel
| Элемент | Было | Действие | Статус |
|---|---|---|---|
| primary «Testa gratis»→register | ❌ только «Boka demo» | dual-CTA в LeadMagnetPage+ToolAppCta (все 61 tool + 6 mall в 1 месте) | ✅ |
| register-URL | ❌ app.byggexp.se = NXDOMAIN | env `NEXT_PUBLIC_TRIAL_URL`, fallback на demo (нет битых) | ⛔ [OWNER] URL |
| funnel-события | частично | +`tool_view`, +`cta_click{action}`; `tool_lead_submit` уже был | ✅ |
| gated лид-магнит | ✅ `ToolLeadForm` (email→/mail/demo-request, GA) | уже есть; nurture-подключение | ⛔ [OWNER] ESP |
**A/B-гипотезы:** (1) «Testa gratis» primary vs «Boka demo» primary — CTR→register; (2) CTA после результата тула vs в конце статьи; (3) lead-form inline vs за кнопкой «Ladda ner».
**Acceptance:** на любой /verktyg в HTML есть 2 CTA (Testa gratis + Boka demo); клик шлёт `cta_click`; смена `NEXT_PUBLIC_TRIAL_URL` меняет href primary сайтово.

### 2. Ретаргетинг
| Элемент | Действие | Статус |
|---|---|---|
| Meta pixel loader | `loadMetaPixel()` consent+env-gated | ✅ |
| GTM loader | `loadGtm()` | ✅ |
| события→fbq | `gaEvent` форвардит trackCustom | ✅ |
| подключение на consent | CookieConsent оба пути | ✅ |
| аудитории/lookalike/nurture | дизайн в `retargeting-plan.md` | ✅ |
| pixel/GTM/LinkedIn id | env | ⛔ [OWNER] |
**Acceptance:** loaders no-op без env-id и вне byggexp.se; вызываются на grant; `gaEvent`→fbq. Реальная загрузка — после установки id (owner).

### 3. GEO/AEO
| Элемент | Действие | Статус |
|---|---|---|
| HowTo schema | `howTo`-prop в LeadMagnetPage → JSON-LD | ✅ |
| пилот | rot-avdrag-kalkylator (4 шага sv+en) | ✅ |
| FAQPage | уже 100% money-страниц | ✅ |
| отчёт 15 страниц | `aeo-report.md` | ✅ |
| HowTo/direct-answer на pillar'ах (CMS) | список в отчёте | ⛔ [OWNER/CMS] |
**Acceptance:** `curl rot-avdrag-kalkylator | grep '"HowTo"'` = 1 после деплоя; отчёт покрывает 15 страниц.

### 4. Тех-SEO
| Элемент | Было | Действие | Статус |
|---|---|---|---|
| WebSite schema | ❌ | добавлен в _document | ✅ |
| SearchAction | ❌ (нет ?q= results) | не эмитим (честно), нужен results-page | 🔶 design |
| глоб. og:image/twitter | ❌ (калькуляторы только og:title) | дефолты в _document | ✅ |
| hreflang /funktioner | ✅ уже был | — | ✅ |
| hreflang /verktyg hub | ❌ | добавлен (sv/en/nb-only) | ✅ |
| HowTo на калькуляторах | ❌ | механизм + пилот | ✅ (раскатка incremental) |
| каннибализация/битые/canonical | 0 битых, canonical ок (прошлые аудиты) | — | ✅ |
**Acceptance:** `curl / | grep '"WebSite"'`=1; `/sv/verktyg` HTML содержит `rel=alternate hreflang`; og:image присутствует на калькуляторе.

### 5. Pillar-ы (проверка перед постройкой)
| Модуль | Страница | Статус |
|---|---|---|
| Planering | schemalaggningssystem-bygg / resursplanering-bygg / personalplanering-bygg | ✅ есть |
| Projektledning/projekthantering | projektledning-byggforetag / projekthanteringssystem-bygg | ✅ есть |
| Byggdagbok | byggdagbok | ✅ есть |
| Verktyg/QR | verktygshantering-**app** (200) | ✅ есть |
| **Bemanning** | bemanning-bygg = 404 | ⛔ реальный пробел, объём [OWNER] (outline готов в `pseo-template.md` §ниши) |
**Acceptance:** все 4 названных модуля имеют live-pillar (curl 200) — подтверждено. Bemanning — единственный gap, gated на объём.

### 6. pSEO
Дизайн-шаблон + алгоритм уникализации + 5 гардов + top-20 городов + 3 ниши + пилот-спека → `pseo-template.md`.
**Acceptance:** документ содержит шаблон, anti-thin+anti-cannibalization гарды, пилот-спеку. Реализация пилота — после объёма (гард «пилот сперва»).

---

## Бэклог impact × effort (что дальше)
| Приоритет | Задача | Impact | Effort |
|---|---|---|---|
| P0 | [OWNER] выдать `NEXT_PUBLIC_TRIAL_URL` → включить «Testa gratis» | 🔥🔥🔥 | XS |
| P0 | [OWNER] `NEXT_PUBLIC_META_PIXEL_ID` → ретаргет живой | 🔥🔥 | XS |
| P1 | GSC near-miss (pos 8–15) → усилить (Task 7) | 🔥🔥 | S |
| P1 | Раскатка HowTo на 8 калькуляторов | 🔥 | S |
| P2 | Bemanning pillar (после объёма) | 🔥 | M |
| P2 | pSEO пилот 3 города (после объёма + cities.ts) | 🔥🔥 | M |
| P3 | SearchAction: сделать `/sv/sok?q=` results-page + schema | 🔶 | M |
| P3 | HowTo/direct-answer на pillar'ах (CMS) | 🔥 | M |

_(Полный [OWNER]-список — вверху файла.)_
