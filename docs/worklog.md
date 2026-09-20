# ByggExp — рабочий лог (продолжать отсюда)

Единый файл «что сделано / что дальше», чтобы не начинать заново. Обновлять сверху.
Деплой: push в `main` → GitHub Actions → VPS (~1–2 мин). Юзать **yarn** (не npm). Node 20 на проде.

---

## 📍 СТАТУС (кратко)
Активно: SEO-контент + визуалы блога; тех-SEO: 20.09 починен корень GSC-404 (hreflang-to-404) (фото-обложки готовы, диаграммы в топ-статьях, факт-чек 2026 пройден). Инструменты и NÄSTA STEG — в свежей сессии ниже.
История сессий до 2026-09-12 → `docs/worklog-archive.md`. Индекс всех доков → `docs/README.md`. Норвегия (byggexp.no) — память [[norway-expansion]] + архив.

## 🟢 Сессия 2026-09-20 — GSC: «Blocked by robots.txt» + корневой фикс 404 (hreflang)

### KLART (сделано, задеплоено `61b193d`)
- **Письмо GSC «Blocked by robots.txt» = ложная тревога.** Единственный заблокированный URL —
  `https://admin.byggexp.se/` (наш же `Disallow: /`; domain-property покрывает поддомены).
  robots.txt на byggexp.se/www/byggexp.no = `Allow: /` + Sitemap.
- **Разобрал весь Page indexing** (430 indexed / 196 not): `noindex` (25) = только `/sv/embed/*`
  (намеренно), `Alternate page w/ canonical` (37) = www-дубли (норма), `Duplicate without canonical` (4)
  = `/ru/{dpa,villkor,integritetspolicy}` с каноникалом на `/en` (норма) + admin/login.
  **Sitemap чист: все 495 URL = 200** (полный прогон curl).
- **🔑 Корневая причина 404 (26, Validation Failed):** hreflang в `[lang]/blog/[slug].tsx` строился по
  ручному denylist `sv-only-articles.ts` → после добавления 6 новых языков две статьи не попали в
  список и стали рекламировать `/fi|/et|/pl/...`, которых нет. Теперь **hreflang выводится из реестра**
  (`getCodeArticleLocales`) — только локали, где статья реально есть; denylist удалён.
- **middleware `[lang]`:** краулер шлёт скобки percent-encoded (`/%5Blang%5D/…`), старая проверка не
  срабатывала → 404 (а `/[lang]/underbitraden` отдавал 500). Теперь декодируем путь и отбрасываем
  нерезолвленные `[slug]`-сегменты (`/[lang]/blog/[slug]` → `/sv/blog`, `embed` → `/sv/verktyg`).
- **Легаси `/blog` и `/blog/<slug>`:** 307 → 301. **`/sv/blog/tidrapport`** → `/sv/blog/tidrapportering`
  (старая цепочка `/blog/tidrapport` упиралась в 404).
- Разбор и метод → `docs/seo/gsc-404-cleanup.md` (РАУНД 3).

### 🔜 NÄSTA STEG
1. **Валидация в GSC запущена мной 20.09** («Not found (404)»: Validation started, pending 26,
   failed 0). Через 1–2 недели проверить, что счётчик 26 падает — ре-валидация Google идёт днями.
   Все 26 URL проверены live: 25 отдают 200 через 301, `/blog/test` → `/sv/blog`.
2. «Discovered – currently not indexed» (42) — рычаг прежний: бэклинки + Request indexing, НЕ доп.
   внутренняя перелинковка (проверено в сентябре).

## 🟢 Сессия 2026-09-17…19 — AI-картинки (Replicate/FLUX) + мультиязычные фичи + фото-обложки всего блога

### KLART (сделано, задеплоено)
- **Генератор картинок заведён:** Replicate + `scripts/gen-image.js` (модель **flux-dev** ~$0.03/шт, schnell/pro тоже; retry на 429 + poll). Токен `REPLICATE_API_TOKEN` в gitignored `.env.admin`. Midjourney API нет — потому FLUX. Кредит $20 (billing на replicate.com/account/billing, цена каждой картинки в Dashboard→predictions).
- **Фикс блога:** фича-страницы убраны из листинга `/sv/blog` (фильтр `FEATURE_ARTICLE_SLUGS` в `blog/index.tsx`) — URL `/blog/<slug>` остался, но в списке блога их нет (`98072fe`).
- **Betong-калькулятор встроен в статью** `berakna-betongatgang-platta` как лид-магнит (`src/content/article-inline-tools.tsx` + рендер в `blog/[slug].tsx`, SSR, sv-only) (`0fa7371`).
- **Фичи на 5 языках:** 12 фича-страниц переведены на en/pl/ru/nb (мульти-агент workflow, DeepL-ключа нет) → `features-{en,pl,ru,nb}.ts`, зарегистрированы в `code-articles.ts`. Линки «Läs mer» с главной теперь на sv/en/pl/ru/nb → `/{lang}/blog/{slug}` (`6636911`). Переводы pl/nb стоит вычитать носителю.
- **Hero-заголовок:** «Automatisk **och manuell** tidsrapportering…» на всех 10 языках (`d90ba0a`, `c41fd57`).
- **🖼️ Фото-обложки всего блога (главное):** ~**220 статей** получили фото вместо текстовых заглушек (`66fdf15`). Пайплайн: мульти-агент пишет промпт под тему+сцену → `gen-image.js` генерит. **Правила (фидбек Марии):** в каждом ряду ленты ≤1 тамбнейл с людьми, люди раскиданы по колонкам (не столбик), ~19% с людьми. Единый список `src/content/photo-covers.ts` → `code-articles` роутит на `/landing/blog/<slug>.webp` независимо от манифеста; `gen-blog-covers.js` их пропускает (guard). Стоило ~$7.4.
- **🔍 Диаграммы крупнее (`bcbd1be`):** перерендер 13 диаграмм в **2× (1440×760)** для чёткости; `.article-diagram img` max-width 560→**960px** по центру. Лайтбокс теперь почти во весь экран, текст резкий и в тексте, и при зуме. (density:144 в sharp для 2×.)
- **✅ Факт-чек всего блога (2026):** извлёк из 138 статей все изменчивые статутные факты → 11 кластеров на веб-проверку (Skatteverket/Riksbank/Boverket/Byggnads). **Все CONFIRMED на 2026** (ROT 30%/tak 50k/75k, prisbasbelopp 59200, arbetsgivaravgift 31,42% + компоненты, moms, referens/dröjsmålsränta, bolagsskatt 20,6%, skiktgräns, 3:12=322400, personalliggare 12500/2500/236800, förseningsavgift 450/60). Исправлено в прошлом проходе (`da5c2c3`): OB-tider (было 18–22 → 19–22 + 17–19@20%) и traktamente 435→450 kr (höjt 1 jan 2026). Метод факт-чека — в [[image-generation]]-соседнем плейбуке (мульти-агент extract→dedup→verify).
- **📊 Ценные диаграммы в 13 топ-статей по кликам (`65ea7c2`):** GSC-токен обновил сам через браузер (claude-in-chrome, память [[gsc-api-setup]] обновлена + новый `.gsc/top_pages.py`). Взял топ-20 по кликам → 13 blog без визуала. Мульти-агент спроектировал брендовые SVG→webp инфографики с ТОЧНЫМИ данными ИЗ статей (ставки OB/övertid, restid/traktamente 2026, garantitid AB04, вес арматуры+расчёт, betongvolym, golvvärme W/m², semesterlön%, структуры arbetsberedning/skyddsrond/byggdagbok, AB-U, boverket-2026). Рендер + вставка после интро (`article-diagram`), факты сверены. ⚠️ byggdagbok — коллизия слага (отдаётся tillvaxt.ts, диаграмма `byggdagbok-krav.webp`).
- **🔎 Аудит релевантности + улучшение 133 обложек (`daf8774`):** vision-мульти-агент (226 агентов) прочитал каждую картинку + текст статьи → score 1–5, метки клише/артефактов, `suggestedScene`. Нашёл 65 клише «каска+планшет на столе», 21 слабую (score≤2), ~63 общих-размытых. Перегенерил **133** с конкретными сценами (трейд-экшн, материалы, интерьеры, договоры-в-контексте, ID06), сохранив «≤1 человек в ряд». Экраны/документы — только где тема требует. Остаётся предел FLUX: кривой текст на части документов (на тамбнейле ок).

### 🔜 NÄSTA STEG
1. **Ценные диаграммы — расширить охват:** сделаны для 13 топ-статей по кликам. Следующая волна — взять `.gsc/top_pages.py` (топ-40+) и добавить инфографику остальным статьям без визуала (тот же пайплайн: агент проектирует SVG с данными ИЗ статьи → рендер sharp → вставка `article-diagram`). Данные ВСЕГДА сверять (см. п.2).
2. **Факт-чек — поставить на автопилот (опц., owner решает):** метод отлажен (extract→dedup→verify по первоисточникам). Можно крон-агентом раз в квартал прогонять и слать, что устарело (referensränta, новые basbelopp/ставки). Спросить owner'а.
3. **Диаграммы для 5 tool-страниц** (egenkontroll-mall, fall/takstolar/tak-kalkylator, egenkontroll-vvs) — опц., поясняющий визуал «как считает».
4. Вычитка носителем переводов фича-страниц (особенно pl/nb) перед платным трафиком.
5. (опц.) Заменить фото 10 карточек-превью калькуляторов + `/[lang]/funktioner` индекс для en/pl/ru/nb (сейчас из CMS, пусто).
6. ⚠️ Тех-долг: коллизия слага `byggdagbok` (2 статьи, отдаётся tillvaxt.ts) — при случае развести слаги.

### 🛠️ Инструменты этой сессии (переиспользовать)
- **Картинки:** `node scripts/gen-image.js "<prompt>" --out public/landing/<name> --ar 16:9 --model dev --width 1000`. Массово — мульти-агент промпты + пул-раннер CONC≤6.
- **GSC:** токен обновляю сам через браузер (память [[gsc-api-setup]]); `.gsc/top_pages.py [prop] [days] [limit]` — топ по кликам.
- **Плейбук фото-обложек:** `docs/playbooks/blog-thumbnails-playbook.md` (переносимый на др. сайты).
- **Диаграммы:** стиль в `scripts/gen-article-diagrams.js` (720×380, палитра INK/BLUE/GREEN/MUT/AMBER); агент пишет SVG → `sharp`→webp → `<figure class="article-diagram">` после интро.

### ⚠️ Öppna frågor / väntar på
- Коллега: решено дать ей отдельный комп и поставить свой Claude Code (не Live Share).
- Rate-limit Replicate при параллелизме >~5 даже с кредитом — массовую генерацию гнать с CONC≤6 + retry, добор упавших последовательно.
- Автопилот факт-чека (п.2 NÄSTA STEG) — ждёт решения owner'а.

---

## 🟢 Сессия 2026-09-16 — LIA/praktik-профиль + GSC index-аудит

### KLART (сделано)
- **LIA-трек:** заполнил профиль на **praktik.se до 82% («Exceptionell»)** через браузерную автоматизацию — все секции 100%, каждая проверена перезагрузкой (⚠️ **praktik.se флакает при сохранении** — всегда F5 + проверять после save): Om mig (финальный текст), Färdigheter (12 навыков), **Portfolio & Länkar (5 ссылок: GitHub, alexgeho.dev, byggexp.se, App Store, Google Play)**, Utbildning (Medieinstitutet, Yrkeshögskola, 2025-08–2027-06), CV загружен. Приложение ByggExp **live в обоих сторах** (App Store `id6748280779` · Google Play `se.byggexp.app`) — добавил в CV+профиль. Детали и next steps → `internship/applications-tracker.md` (блок SESSION 2026-09-16). Предпочтения (память [[job-hunt-praktik]]): НЕ писать «egenföretagare», НЕ писать «AI-first».
- **Simon Frisk** (FB-группа «Praktikplatser inom IT») — ответил на его вопросы (stack/опыт/учёба). Ждём его предложение по практике.

### 🔜 NÄSTA STEG
- **GSC index-аудит (✅ прогон 16.09 23:06, свежий `.gsc/index_status.csv`):** **360 indexed · 11 «unknown to Google» · 6 «Discovered-not-indexed»** (итого 17 not-indexed — та же цифра, что 15.09). **ВЫВОД: за неделю ни одна из 17 не проиндексировалась**, хотя внутр. ссылки добавляли (15.09); часть откатилась Discovered→unknown. **Код-ошибок НЕТ** — все URL живые (200) и в сайтмапе. Значит **больше внутр. ссылок НЕ помогает** — рычаг: **Request indexing (ручное, owner) + бэклинки + время** (молодой сайт). Не тратить время на доп.линковку.
  - **17 URL для Request Indexing (owner, вручную в GSC):** blog: byggfelsforsakring, gron-teknik-avdrag, anbud-bygg, offert-vvs-elektriker-rormokare, e-signering-avtal, kvalitetsplan-bygg, bemanningssystem-bygg, enkelt-tidrapporteringssystem, app-for-byggprojekt, projektplanering-bygg, projektledning-byggforetag, projekthanteringssystem-bygg. verktyg: egenkontroll-el/ventilation/vatrum/tak-mall, signera-pdf. (полный список всегда в `.gsc/index_status.csv`, фильтр != «Submitted and indexed»)
  - Скорость: `index_status.py` ~20-25 мин (URL Inspection ~3-4с/URL × 377 sv), вывод буферизуется через `| head` → читать итог из CSV, не из stdout. Гонять в фоне.
- **LIA:** дождаться Simon Frisk; топ-8 outreach (Redmind PRIO 1 — письмо переписать заново) — см. `internship/applications-tracker.md`.

---

## 🟢 Сессия 2026-09-15 — GSC CTR-фиксы + онбординг-видео (YouTube)

### KLART (сделано)
- **⚡ CTR-тайтлы починены (8 страниц, задеплоено `f0b001c`)** — прогнал `.gsc/near_miss.py sc-domain:byggexp.se 90` (токен живой), сопоставил CTR-проблемные запросы (поз≤10, показы≥50, CTR<2%) с их страницами через API (`/tmp/gsc_map.py` — page-dimension по каждому запросу). Переписал seoTitle: ключ вперёд + конкретный крючок (цифра/год/вопрос), ≤~50 симв:
  - `vatrumscertifikat-behorighet-gvk` (regelverk.ts): → «Våtrumscertifikat: BKR, GVK eller Säker Vatten?» (153 показа, поз 8.1)
  - `ackordslon-bygg` (ekonomi.ts): → «Ackordslön i bygg 2026 – så räknar du rätt» (140, 9.5)
  - `bygga-trappa-…` (kalkyl.ts): добавил ключ **trappformeln** (128 показов, 0 кликов — его вообще не было в тайтле!) → «Trappformeln & bygga trappa: steghöjd, stegdjup»
  - `traktamente-byggnadsarbetare-2026` (ekonomi.ts): → «…2026 – skattefritt» (89, 7.2)
  - `drojsmalsranta-2026` (ekonomi.ts): → «Dröjsmålsränta 2026: 10,00 % – räkna rätt» (88, 7.5 — вынес ставку-ответ в тайтл)
  - `lakt-avstand-tak-berakning` (kalkyl.ts): → «Läktavstånd takpannor & plåt – så räknar du» (53+51, 8.6)
  - `armering-berakning-platta-grund` (kalkyl.ts): → «Armering betongplatta – så beräknar du åtgången» (63, 9.8)
  - `byggmotesprotokoll-mall` (kvalitet.ts): → «Byggmötesprotokoll – gratis mall & dagordning» (47, «startmöte abt 06 mall»)
  - ⏸️ НЕ трогал: `fotodokumentation` и `AB-U 07` — тайтлы уже норм. Ложные срабатывания (топ-страница на поз.54–103 / 1 показ, не тайтл-проблема): schemaläggningssystem, projektuppföljning bygg, byggdagbok mall, uppgiftshantering bygg, digitalisera byggföretag.
  - tsc+build зелёные. Эффект CTR виден в GSC через ~1–2 недели.
- **YouTube: онбординг-видео Del 1 (webbpanelen)** — готовы тайтл + описание (в стиле существующих видео) + плейлист-решение: новый шведский плейлист **«Kom igång med ByggExp»** с Del 1 (webb/chef) + Del 2 (app/personal, снять позже). Отдельно от старых английских (Features/Get Started → «Så funkar ByggExp»).
- **🔗 Перелинковка 10 сирот починена (задеплоено `f53b882`)** — `index_status.py` (свежий): **360 в индексе**, 10 «Discovered — not indexed», 7 «unknown to Google». Все 17 — в live-сайтмапе (459 URL), т.е. проблема не sitemap, а **0 внутренних ссылок** (сироты). Добавил контекстные Relaterat-ссылки из проиндексированных тематически близких статей:
  - blog: `anbud-bygg` (← ekonomi offert/LOU), `offert-vvs-elektriker-rormokare` (← ekonomi), `gron-teknik-avdrag` (← ekonomi ROT), `byggfelsforsakring` (← ekonomi försäkring), `kvalitetsplan-bygg` (← kvalitet), `e-signering-avtal` (← juridik avtal), `enkelt-tidrapporteringssystem` (← personal tid).
  - verktyg: `egenkontroll-vatrum/tak/ventilation-mall` добавлены в yrkeslistan статьи egenkontroll (kvalitet.ts).
  - ⏸️ Осталась 1 сирота: `/sv/verktyg/signera-pdf` (мелкая PDF-утилита, 0 ссылок) — низкий приоритет, залинковать из e-signering-avtal при случае.
  - ⚠️ **Request indexing** для этих 17 URL = ручное действие owner в GSC (API не даёт). После деплоя внутр. ссылки помогут краулеру сами через 1–2 недели.
- **План по YouTube для коллеги** — Artifact-страница (RU + SV-тайтлы) для обсуждения: https://claude.ai/code/artifact/cd02aca4-9090-4238-8e17-04ef04255764 (нужно нажать Share).

### 🔜 NÄSTA STEG
1. Через ~1–2 нед: `near_miss.py` + `index_status.py` заново → проверить (а) поднялся ли CTR на 8 починенных тайтлах, (б) вышли ли 10 сирот из not-indexed. Выбрать следующую пачку поз.5–15.
2. 🎯 **Takstolar-кластер** (самый большой near-miss, ~10 запросов поз.15–19: takstolar beräkning 221, beräkna takstolar 210, takstol dimensionering, räkna på takstolar…) — калькулятор/pillar `beräkna takstolar` + перелинковка.
3. (owner) **Request indexing** в GSC для 17 not-indexed URL (список в свежем `.gsc/index_status.csv`, фильтр != "Submitted and indexed").
4. YouTube Шаг 2: записать Del 1 + расписать первые 8 видео (`docs/marketing/youtube-step2-videos.md`).

---
