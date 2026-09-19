# ByggExp — рабочий лог (продолжать отсюда)

Единый файл «что сделано / что дальше», чтобы не начинать заново. Обновлять сверху.
Деплой: push в `main` → GitHub Actions → VPS (~1–2 мин). Юзать **yarn** (не npm). Node 20 на проде.

---

## 🟢 Сессия 2026-09-17…19 — AI-картинки (Replicate/FLUX) + мультиязычные фичи + фото-обложки всего блога

### KLART (сделано, задеплоено)
- **Генератор картинок заведён:** Replicate + `scripts/gen-image.js` (модель **flux-dev** ~$0.03/шт, schnell/pro тоже; retry на 429 + poll). Токен `REPLICATE_API_TOKEN` в gitignored `.env.admin`. Midjourney API нет — потому FLUX. Кредит $20 (billing на replicate.com/account/billing, цена каждой картинки в Dashboard→predictions).
- **Фикс блога:** фича-страницы убраны из листинга `/sv/blog` (фильтр `FEATURE_ARTICLE_SLUGS` в `blog/index.tsx`) — URL `/blog/<slug>` остался, но в списке блога их нет (`98072fe`).
- **Betong-калькулятор встроен в статью** `berakna-betongatgang-platta` как лид-магнит (`src/content/article-inline-tools.tsx` + рендер в `blog/[slug].tsx`, SSR, sv-only) (`0fa7371`).
- **Фичи на 5 языках:** 12 фича-страниц переведены на en/pl/ru/nb (мульти-агент workflow, DeepL-ключа нет) → `features-{en,pl,ru,nb}.ts`, зарегистрированы в `code-articles.ts`. Линки «Läs mer» с главной теперь на sv/en/pl/ru/nb → `/{lang}/blog/{slug}` (`6636911`). Переводы pl/nb стоит вычитать носителю.
- **Hero-заголовок:** «Automatisk **och manuell** tidsrapportering…» на всех 10 языках (`d90ba0a`, `c41fd57`).
- **🖼️ Фото-обложки всего блога (главное):** ~**220 статей** получили фото вместо текстовых заглушек (`66fdf15`). Пайплайн: мульти-агент пишет промпт под тему+сцену → `gen-image.js` генерит. **Правила (фидбек Марии):** в каждом ряду ленты ≤1 тамбнейл с людьми, люди раскиданы по колонкам (не столбик), ~19% с людьми. Единый список `src/content/photo-covers.ts` → `code-articles` роутит на `/landing/blog/<slug>.webp` независимо от манифеста; `gen-blog-covers.js` их пропускает (guard). Стоило ~$7.4.
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

## 🟢 Сессия 2026-09-12 — egenkontroll-инструмент допилен + YouTube-стратегия

### KLART (сделано)
- **Egenkontroll-инструмент (`src/components/LeadMagnet/EgenkontrollTool.tsx`, общий для всех egenkontroll-*-mall) — серия правок, задеплоено:**
  - PDF теперь **горизонтальный (landscape)** с рамочной таблицей: `Kontrollpunkt | Resultat | Datum | Kommentar`; новый **столбец Datum**; пустые ячейки (Ej besvarad / Datum / Kommentar) печатаются пустыми = **заполнять от руки**.
  - Шапка PDF: пустые meta-поля (Titel/Projekt/Ansvarig/Datum) = **линии для заполнения** вместо «—».
  - Убрано: **AI-блок** «Skapa med AI» + email-gate (скачивание теперь всегда бесплатно), поле **Kategori** (из формы/PDF/Excel), строка **«Skapad med ByggExp»**, все **`Ref: …`** из пресетов (не в Kontrollpunkt, не в Kommentar).
  - Бейдж страницы `egenkontroll-mall.tsx`: `Gratis mall` → **`Gratis egenkontroll-mall`** (ключ в бейдж).
- **Футер (`Footer.tsx`/`Footer.scss`):** добавлена **YouTube-иконка** (youtube.com/@byggexp) на всех 10 языках — серая, красная при hover, target _blank + rel noopener.
- **YouTube growth-стратегия (новый трек):** `docs/marketing/youtube-strategy.md` (полный план + 90-дней) + `docs/marketing/youtube-step1-setup.md` (Шаг 1: setup канала с готовой copy — название, описание, баннер, плейлисты, UTM, закреп-коммент, сценарий трейлера, thumbnail-мал). Ресёрч: шведский bygg-YouTube, B2B SaaS-воронка, construction lead-gen. Инсайт зафиксирован: **позиционировать веб-дашборд как ядро** (шеф работает в нём, app — для стемпинга персонала); демо снимать в дашборде. Память: [[youtube-strategy]].

### 🔜 NÄSTA STEG (продолжить отсюда)
1. **YouTube Шаг 2 — расписать первые 8 видео** под «no-camera» формат (screen-recording дашборда + AI-голос + субтитры): заголовок + 2 текста thumbnail + сценарные пункты + какие экраны дашборда записать + лид-магнит/ссылка к каждому. Брать из существующих статей + GSC-ключей. → отдельный файл `docs/marketing/youtube-step2-videos.md`.
2. Owner-решения по YouTube (в `youtube-strategy.md` §12): кто в кадре/озвучка · SV-only или отдельный NO-канал · бюджет на инструменты (TubeBuddy/vidIQ + Descript) · реальная кадентность на 12 недель.
3. Owner может сам сделать Шаг 1 (setup канала) по `youtube-step1-setup.md` — готовая copy для вставки в YouTube Studio.
4. (Не связано с YT, из GSC-трека) остаётся приоритет: CTR-тайтлы 10 страниц + takstolar-кластер (см. сессию 2026-09-10 ниже).

### ⚠️ Öppna frågor / väntает
- Для записи демо-футажа дашборда мне нужен доступ/логин (можно записывать GIF/скриншоты через браузерную автоматизацию) — owner решает, давать ли.
- YouTube: старые данные-черновики egenkontroll в localStorage у owner'а показывали Ref до фикса — на live чисто после «Börja om» / повторного клика по пресету.

---

## Сессия 2026-09-10

**✅ Search Console API настроен headless + первый разбор GSC (вечер) — START HERE для GSC-трека:**
- **Инфра (память `gsc-api-setup`):** скрипты в `.gsc/` (gitignored), venv переиспользован из `.googleads/venv` (+`google-api-python-client`).
  - `near_miss.py [prop] [days]` — Search Analytics: запросы поз. 5–20 + CTR-проблемы → `near_miss.csv`.
  - `index_status.py [prop] [max]` — URL Inspection API → coverageState по URL из sitemap → `index_status.csv`.
  - Запуск: `.googleads/venv/bin/python .gsc/near_miss.py sc-domain:byggexp.se 90`.
  - ⚠️ **Важная путаница с аккаунтами (решено):** GSC byggexp.se = аккаунт **aleksandrgerhard@gmail.com** (НЕ 870717ag, НЕ svbyggmaleri). Создан ОТДЕЛЬНЫЙ Cloud-проект `byggexp` под ним (НЕ `776884778897` от Ads/svbyggmaleri) + свой OAuth-app «ByggExp GSC» (Desktop, External/Testing, aleksandrgerhard=test user, client `966076972558-…`). **Токен ~7 дней** (Testing) → при `invalid_grant`: `python .gsc/gen_gsc_token.py`, логин aleksandrgerhard (нужен его passkey). «Навсегда» = Publish app в Production.
- **📊 Разбор (отчёт `docs/seo/gsc-near-miss-2026-09-10.md`):**
  - **Индексация: sv = 95% в индексе** (359/377 Submitted-and-indexed). **Стены НЕТ.** 149 "not-indexed" из Overview = в осн. 9 др. языков (блог пустой). Вывод: **рычаг роста = бэклинки + near-miss on-page, НЕ индексация и не кол-во статей.**
  - **437 near-miss запросов** (поз. 5–20). Топ-кластеры: **takstolar** (~10 запросов поз.15–19, самый жирный), egenkontroll (часть уже стр.1), B2B försäkring/AB-avtal, product-category (projekthantering/arbetsorder/offertprogram bygg), tidrapportering-варианты.
  - ⚡ **CTR-проблемы** (уже стр.1, поз≤10, ~0 кликов = плохой тайтл): `våtrumscertifikat` (8.1/151/0), `ackordslön`, `schemaläggningssystem`, `projektuppföljning bygg`, `traktamente byggnads 2026`, `dröjsmålsränta 2026`, `fotodokumentation`, `läktavstånd plåttak/betongpannor`, `uppgiftshantering bygg`.
- **✅ Страница-инструмент `egenkontroll-mall` (#1 органика + AI-översikt по «egenkontroll bygg mall pdf») — UX для «сохранить/вернуться» (задеплоено `f1cbf7d`):** убрал дубль-заголовок «Fyll i och ladda ner…»; добавил **авто-сохранение черновика в localStorage** + баннер восстановления + «Börja om»; **сводку прогресса** (X punkter · godkända · anmärkningar · kvar); хинт об авто-сейве. Файл `src/components/LeadMagnet/EgenkontrollTool.tsx` (shared, влияет на все egenkontroll-*-mall). tsc+build зелёные.
- ⏭️ **NEXT STEPS (GSC-трек, по приоритету):**
  1. ⚡ **CTR-тайтлы** (30 мин, эффект сразу): править seoTitle 10 страниц из CTR-списка выше (найти статьи по slug в `src/content/articles/*.ts`, ключ вперёд + крючок ≤60 симв, НЕ переворачивать объёмный ключ — см. урок в сессии 09-05).
  2. 🎯 **Takstolar-кластер** (самый большой near-miss): калькулятор/pillar `beräkna takstolar` + перелинковка → вытащить весь кластер поз.15–19 на стр.1. Свериться с сущест. takstolar-статьями (`grep -ri takstol src/content/articles/`), не дублировать.
  3. 🔵 **4 discovered-not-indexed** (внутр. перелинковка + Request indexing в GSC): `egenkontroll-ventilation-mall`, `egenkontroll-vatrum-mall`, `app-for-byggprojekt`, `projektledning-byggforetag`.
  4. Периодически: `near_miss.py` заново (данные копятся) → новые поз.8–15 → усиливать on-page. Свежий экспорт от owner больше НЕ нужен — тяну сам через API.
- 💡 Мета-инсайт: egenkontroll-tool-подход (localStorage-персист + прогресс = «сохраняемый» инструмент) масштабировать на др. verktyg-инструменты (tidrapport-mall, byggdagbok-mall и т.д.) для поведенческого SEO.

**✅ 3 новые SEO-статьи из KP+GSC gap-анализа (задеплоены, sv-only):** прогнал Keyword Planner (SE, топ-10 сидов) + сверил с `docs/seo/gsc-near-miss.md`, вычел 296 существующих slug'ов → реальные пробелы. Важно: **bemanning/schemaläggning/avvikelsehantering УЖЕ построены** (не дублировал; `bemanningsplanering` поз.53 в GSC = бэклинки/авторитет, не отсутствие страницы). Построено (каждая: глубокая фактура с §-ссылками через веб-агента → 2 редакторских агента язык+факты → брендовая диаграмма → tsc+build):
  - `kvalitetsplan-bygg` (kvalitet.ts) — krav AB04/ABT06 kap 2 §2, AMA AF 21 AFC/AFD.224, ISO 9001; ключевой угол = разделение **kontrollplan(PBL) ≠ kvalitetsplan ≠ egenkontroll**. Диаграмма `kvalitetsplan`.
  - `e-signering-avtal` (juridik.ts) — avtalslagen 1915:218 formfrihet, eIDAS 910/2014 art.25, **BankID=AdES**, формкрав-исключения (JB4:1/ÄB10:1/ÄktB7:3), ÄTA-skriftlighet, bokföringslag 7 år. Диаграмма `e-signering-avtal` (3 eIDAS-уровня).
  - `offert-vvs-elektriker-rormokare` (ekonomi.ts) — offert per yrke; **EL=lagkrav** (elsäkerhetslag 2016:732, registrering/egenkontroll), **VVS=branschkrav** (Säker Vatten, BBV/GVK); konsumenttjänstlag 36§ +15%, ROT 30% 2026. Диаграмма `offert-vvs-elektriker-rormokare`.
- ⏭️ **Проверить live 200** (деплой ~1-2 мин): `/sv/blog/kvalitetsplan-bygg`, `/sv/blog/e-signering-avtal`, `/sv/blog/offert-vvs-elektriker-rormokare` + диаграммы + наличие в sitemap.
- ✅ **Заход 2 сидов (16:00) → +1 статья:** `anbud-bygg` (ekonomi.ts) — B2B-anbud, дифференцирован от skriva-offert (konsument) и offentlig-upphandling-lou (LOU). Фактура: avtalslagen 1915:218 §§1-7 (löftesprincipen/acceptfrist/oren accept 6§), anbudskalkyl självkostnad→påslag→risk→vinst (без фикс.%), förbehåll, ÄTA AB04/ABT06 kap2. Диаграмма `anbud-bygg`. Прошёл 2 агента (0 фактических замечаний). Live проверяется.
- **Из захода 2 остальное = 0 объёма → skip** (verktyg qr / maskinpark / byggavfall / serviceorder / självkostnad); offentlig upphandling уже покрыта (`offentlig-upphandling-bygg-lou`).
- ⏭️ **Следующее:** свежий GSC-экспорт (Performance→Queries 3 мес) — owner выгружает, я наложу near-miss. construction-жила из текущих CSV **отработана** (все реальные пробелы построены). Для новых нужен свежий GSC или новые сиды в браузерном KP.
- ⚠️ **Утренние 6 CSV (10:00) = НЕ ByggExp** — ключи веббюро (nordkod.se/RealMar): hemnet kundportal 5000, headless cms, core web vitals, react utvecklare, wordpress underhåll, saas utveckling. Другой сайт, репо тут нет — под него контент отсюда не строю (owner: подключать ли тот проект?).

**✅ Заход 3 сидов (grön teknik/энергия) → +2 статьи (жирная жила):**
- `gron-teknik-avdrag` (ekonomi.ts) — **якорь большого кластера** (grön teknik avdrag/grönt avdrag/laddbox/solceller ~500+). Факты vs Skatteverket: solceller **15%** (сниж. с 20, по slutbetalning), batteri/laddbox **50%**, на **arbete+material**, tak 50 000 eget; 67 kap. IL + lag 2020:1066; тех-требования laddbox (Typ 2, jordfelsbrytare typ B); fakturamodell; vs ROT 30%. Диаграмма (3 категории). 0 фактических замечаний.
- `byggfelsforsakring` (ekonomi.ts) — myth-buster (500, Low comp): обязательная **отменена 1 июня 2014** (lag 1993:320 → lag 2014:227 färdigställandeskydd, prop 2013/14:125). Разведены färdigställandeskydd (lagkrav, до startbesked) / nybyggnadsförsäkring (frivillig) / dolda fel (säljarens) / entreprenadförsäkring (allrisk). Только Gar-Bo назван. Диаграмма. 0 фактических замечаний.
- **NB (важный инсайт):** laddbox-кластер = **5000** (installera laddbox), но интент потребительский → не наш SaaS-покупатель; взял installatör-угол через grön teknik-avdrag. Остаток захода 3 (milersättning enskild firma ~50, lärlingslön byggnads ~50) = спок-кандидаты низкого приоритета.

**📈 Итого за 2026-09-10: 6 новых sv-only статей** (kvalitetsplan-bygg, e-signering-avtal, offert-vvs-elektriker-rormokare, anbud-bygg, gron-teknik-avdrag, byggfelsforsakring) — каждая: веб-фактура с §-ссылками → 2 редакторских агента (язык+факты) → брендовая диаграмма → tsc+build → деплой → live 200. Метод: диаграммы в `scripts/gen-article-diagrams.js` (⚠️ экранировать `&` → `och`/`&amp;`), регистрация slug в `sv-only-articles.ts`, массив в соответствующем `*_ARTICLES`.
- ⏭️ **Дальше:** свежий GSC-экспорт (owner) для near-miss; опц. спокы milersättning/lärlingslön (низкий объём). Construction KP-жила отработана в 3 захода.

**⚙️ Google Ads API — статус (для headless keyword-pull):** авторизация ДОБИТА (перевыпущен refresh_token под aleksandrgerhard, OAuth-приложение под svbyggmaleri/Denis Hok — консистентно; конфиг `.googleads/google-ads.yaml`, venv поставлен, `test_api.py` коннектится). **Блокер:** Cloud-проект `776884778897` на уровне **Test** → `CLOUD_PROJECT_NOT_APPROVED_FOR_PRODUCTION` (реальные объёмы не отдаёт). Нужен production/Basic-доступ = ревью Google. Заявка от 8 авг в треде compliance [0-5473000040709] — **owner отправил короткий ответ-подтверждение Advertiser** 2026-09-10; ждём одобрения (дни). До тех пор ключи берём через **браузерный Keyword Planner + CSV** (у меня парсер готов). ⚠️ Под aleksandrgerhard нет активного Ads-аккаунта — KP гонять под Geal AB (svbyggmaleri) или достроить ByggExp-аккаунт.

**🧭 LIA/работа (отдельный трек, вне репо-контента):** разобран слайд Medieinstitutet (146 компаний) → `internship/lia-foretag.xlsx` + `internship/lia-medieinstitutet-list.md` + Artifact (claude.ai/code/artifact/e0f4df78...). Топ-цели с live-ссылками: Redmind (Talent Accelerator — открыт), Avantime, Knowit/ex-Creuna, Viaplay, Blocket, Star Stable, CharpstAR. Письма Redmind+Avantime написаны (в чате). Детали: память [[job-hunt-praktik]].

---

## Сессия 2026-09-09

**✅ GA4 разделён по рынкам (задеплоено):** byggexp.no РАНЬШЕ не трекался — `gtag('config')` был захардкожен на `byggexp.se`. Создан отдельный GA4-property «ByggExp NO» (`G-GGT1EWGRCR`, stream ID 15748039148, URL https://byggexp.no, Norway/NOK, Enhanced measurement on). `src/pages/_document.tsx` теперь host-aware: `GA_SE_ID`=`G-551T40R4WV` для se, `GA_NO_ID`=`G-GGT1EWGRCR` для no; лоадер (`GA_LOADER_ID`) + Consent Mode общие, каждый хит роутится по hostname. Данные в GA идут только ПОСЛЕ accept в cookie-баннере (GDPR ок; до этого cookieless-пинги). Clarity/Meta Pixel/GTM всё ещё only-`.se` (`CLARITY_HOST`/`AD_HOST` в `src/lib/analytics.ts`) — на .no пока молчат.
- ⏭️ **Проверить:** GA4 property «ByggExp NO» → Reports → Realtime после захода на byggexp.no + accept баннера (предупреждение «Data collection isn't active» уйдёт само после 1-го хита).
- ⏭️ **Опц.:** если нужна запись сессий/ретаргетинг на .no — сделать Clarity/Meta host-aware так же (сейчас гейт на .se).

**📋 Онбординг приложения — спека (обсуждение с партнёром-разработчиком, admin-репо НЕ трогаю):** договорились НЕ делать «гигантский мануал», а вести к одному killer-loop **«время с объекта (GPS-стемпинг) → часы в проект → lön/faktura»**. Онбординг делить ПО РОЛИ:
  - **Админ (web):** 3 экрана — Företag (назв.+лого опц.) → Skapa projekt → Bjud in personal (тел/email+роль) → финальный экран-активация (что дальше: ребята стемпят → tid→lön/faktura). Тот список «1.Создание проекта…» = чисто админский.
  - **Работник (mobile):** 2–3 экрана — Stämpla in/ut med GPS (=«журнал смен» = модуль **Arbetspass**, killer) → Dina pass & uppgifter → разрешения (геолокация+push, обязательны для стемпинга).
  - Killer-фичи вокруг которых строить: Arbetspass/GPS (№1), Planering(Gantt)+Bemanning, Egenkontroll/KMA — но в онбординг их НЕ пихать, только упомянуть на финале.
  - ⏭️ **Следующий шаг (если попросят):** расписать текст каждого экрана (заголовок+подпись+CTA) на sv/en/nb как спеку для передачи разработчику. Метрика активации: админ = 1 проект + ≥1 приглашённый; работник = 1 check-in.

**🖼️ Hero-картинка главной — выданы стоковые запросы (owner подбирает):** ориентир = «реальная скандинавская стройка + телефон/планшет в руках» (продукт=учёт с объекта), горизонт с воздухом под текст, 1 визуал на все 10 языков. Запросы под Adobe/Shutterstock/iStock: `scandinavian construction worker using smartphone on building site`, `norwegian builder tablet construction site sunlight`, `carpenter checking phone timesheet building site` и т.д. ⏭️ owner выбирает фото; при желании подобрать отдельный визуал под byggexp.no.

---

## Сессия 2026-09-07

## 🇳🇴 НОРВЕГИЯ — СТАТУС + СЛЕДУЮЩИЕ ШАГИ (START HERE для NO)

**⚠️ Главный вывод (2026-09-08):** бриф `growth-brief-universal.md` написан под ЛОКАЛЬНЫЙ бизнес услуг (villatakservice.se). byggexp.no = НАЦИОНАЛЬНЫЙ SaaS → location-матрица `услуга×район`, LocalBusiness-схема, GBP/map-pack — **НЕ применимы** (и правильно пропущены). Применимая часть брифа (тех-фундамент + topical authority + on-page) — **выполнена**. Бутылочное горлышко трафика сейчас = **бэклинки + возраст домена**, НЕ количество статей. Статьи добиваем, но рычаг №1 — ссылки (owner).

**✅ D-хаб + HMS/планирование добиты (2026-09-08):** прогнал Planner (Norway/Norwegian, 10 сидов→120 идей). Реальный спрос 100–1K: timepris rørlegger/elektriker, **sikker jobb analyse (SJA)**, framdriftsplan, byggeledelse. Построил 4 статьи: `timepris-rorlegger`, `timepris-elektriker`, `sikker-jobb-analyse` (+SJA-skjema лид-магнит, +диаграмма nb-sja, HowTo/FAQ), `framdriftsplan` (+диаграмма nb-framdriftsplan, HowTo/FAQ). byggeledelse (100-1K) вплёл секцией в prosjektstyring-bygg (анти-каннибализация). Кросс-линки: snekker↔rørlegger↔elektriker, sha-plan/byggherreforskriften→SJA+framdriftsplan. **prosjektledelse/prosjekt leder (100-1K) НЕ строим — интент образовательный** (utdanning/ntnu/prince2/kristiania/karlsen), не наш покупатель. nb-блог = **25 статей**. tsc/lint/build зелёные.

**Где всё лежит:**
- Статьи: `src/content/articles/nb-timeregistrering.ts` (**25 nb-статей**), диаграммы: `scripts/gen-article-diagrams.js` (nb-*).
- SEO-доки (`docs/seo/`): `no-innholdsarkitektur.md` (архитектура, ГЛАВНОЕ), `no-nokkelord-kjerner.md` (63 ключа→7 ядер), `seo-kjerner-norge.md` (9 ядер обзор), `se-to-no-keywords.md` (перевод SE-списка + Keyword Ideas объёмы), `keywords-norway.md` (сырьё Planner), `leadmagnets-norway.md` (план магнитов). Сырые CSV Planner: `docs/seo/AlexSeoNor/*.csv`.
- Копии на рабочем столе владельца: `no-seo-kjerner.md`, `no-innholdsarkitektur.md`, `norske-nokkelord-mal.txt`.

**✅ Сделано (всё live на byggexp.no, в sitemap):**
- **20 статей, 7 SEO-ядер**, все 63 целевых NO-ключа разложены по ядрам, каждое ядро = своя страница.
- Ядра: A-продукт (timeregistrering-app-bygg⭐, gratis, timeliste-app, timeregistreringssystem-bygg, stemplingsur, faktureringsprogram) · B-регуляторика (**hms-kort 1K-10K — 7 стр.**, mannskapsliste, sha-plan) · C-магниты (timeliste-mal, fakturamal, sha-plan-sjekkliste) · D-pris (timepris-snekker) · Прод (prosjektstyring, byggekontrakt).
- **byggexp.no в GSC** (Domain-property, owner верифицировал) + sitemap сабмитнут + robots.txt host-aware фикс.
- 3 лид-магнита (Excel `.csv` + печатаемый HTML) в `/public/nb/maler/`, product-led (без gate).
- Ключевые факты рынка: HMS-kort = **1K-10K** (крупнейший); timeregistrering 500; timeliste 100-1K; sha-plan/timepris/faktura/ns8405 = 100-1K; **stemplingsur 0-10 (мёртвый)**; бренды конкурентов (visma/tripletex/smartdok…) — не таргетим.

**⏭️ ПРОДОЛЖИТЬ ОТСЮДА — открытые шаги (по приоритету):**
1. 🔴 **Бэклинки на byggexp.no = рычаг №1** (owner-действие, вне репо). Домен молодой + 0 внешнего веса → статьи висят «Discovered/Crawled – not indexed» (как GSC-скрин nordkod.se). Пока нет 5–10 качественных ссылок, новые статьи НЕ ранжируются, сколько ни пиши. Стартовый список площадок: proff.no, gulesider, 1881, mittanbud, byggstart, norskbyggebransje, Google Business Profile (NAP-консистентность!). Инсайт: 1 ссылка отраслевого СМИ/ассоциации > 100 каталожных. **→ TODO: оформить backlink-план отдельным md (owner проставляет сам).**
2. **C-хаб `tilbudsmal`** (Planner: 50, tilbudsmal/word/excel) — лёгкий product-led лид-магнит (Excel/Word) + статья, линк к byggekontrakt/fakturamal. Низкий спрос, но дешёвый магнит.
3. **Магнит:** HMS-kort sjekkliste на кластер 1K-10K (самый большой трафик). timepris-калькулятор НЕ делать (owner: «timepris дерьмо»).
4. **timepris-maler** (50) — добить D-хаб третьей профессией, когда дойдут руки.
5. Через ~неделю после накопления данных: **GSC Performance byggexp.no** → near-miss (поз. 8-15) → усилить on-page.

**НЕ строить (проверено Planner 2026-09-08):** `prosjektledelse`/`prosjekt leder` (100-1K, но интент образовательный — utdanning/ntnu/prince2/kristiania/karlsen, не наш покупатель); `stemplingsur` (0-10, мёртвый); бренды конкурентов (visma/tripletex/smartdok…).

**Как прогнать новые ключи в Planner:** Chrome-таб Google Ads Keyword Planner → сменить локацию на Norway + язык Norwegian → «Start with keywords», до 10 сидов → Get results → Download .csv → распарсить `iconv -f UTF-16` (bucket «100-1K» экспортится как 500).

**Owner-решения (ждут):** бэклинки (см. п.1); модель магнита (email-gate vs product-led signup); юр-проверка шаблонов контрактов/tilbud.

**Как продолжить:** прочитать эту шапку + `docs/seo/no-innholdsarkitektur.md` §6. Каждую новую статью прогонять через 5 вопросов (сегмент/хаб/ключ/ссылки/CTA). Деплой: push main → GHA → VPS (~1-2 мин), проверять live 200 + наличие в sitemap.

---

### ✅ Сделано (в проде)
**Норвегия: HMS-kort кластер (byggexp.no)** — `nb-timeregistrering.ts`
- Keyword Planner (гео Norway) показал: **hms kort = 1K–10K** — крупнейший NO-запрос (детали: `docs/seo/keywords-norway.md`).
- Pillar `hms-kort-bygg` (был) + 3 спока: `bestille-hms-kort` (+диаграмма nb-bestille-hms-kort), `hms-kort-pris`, `sjekke-hms-kort`.
- Честно, по Arbeidstilsynet/hmskort.no; ByggExp карты НЕ выдаёт (явно), мягкая воронка на mannskapsliste. Все 200, в sitemap.
- Прочее из Planner: timeregistrering 500 / timeliste 100-1K (покрыто); **stemplingsur 0-10 (мёртвый)**.
- ✅ `timeliste-mal` (100-1K) — статья с инлайн-шаблоном (копировать в Excel/распечатать) + воронка на timeliste-app. Live, в sitemap.
- ✅ `prosjektstyring-bygg` (до 100-1K) — pillar по модулю Prosjekt (Gantt/oppgaver/timer→margin) +диаграмма. Live, в sitemap.
- ✅ HMS-kort кластер дожат: +`mistet-hms-kort`, `hms-kort-gyldighet`, `byggekort` (синоним). Кластер = **7 страниц** (pillar + bestille/pris/sjekke/mistet/gyldighet/byggekort).
- ✅ Раунд 2 Keyword Planner → 4 новых кластера (все 100-1K, подтверждено): `timepris-snekker`, `fakturamal` (тренд +900%), `sha-plan` (byggherreforskriften), `byggekontrakt` (NS 8405/8406/8407). +2 диаграммы. Регуляторику фактчекнул вебом.
- ✅ Лид-магниты (ресёрч `docs/seo/leadmagnets-norway.md`): вывод — mal/kalkulator-ключи 10-100, вешать магниты на трафиковые pillar-страницы. Отгружено (product-led, без gate): timeliste-mal.csv, fakturamal.csv (Excel, `/public/nb/maler/`), SHA-plan sjekkliste (печатаемая HTML) на `sha-plan`. Дальше-кандидаты: timepris-калькулятор, HMS-kort sjekkliste. Owner-решения: email-gate vs signup, byggexp.no в GSC.
- nb-блог теперь: **19 статей** + 3 лид-магнита.
- ✅ **byggexp.no в GSC** (owner верифицировал Domain-property) → сабмитнул sitemap `byggexp.no/sitemap.xml` (25 URL; статус «Couldn't fetch» сразу после сабмита = норма, Google перекачает). Починил баг: `robots.txt` на .no указывал на .se-sitemap → сделал host-aware (`src/pages/robots.txt.ts`). Теперь NO-трафик виден в GSC. Все NO-ключи 100-1K+ из Planner покрыты (кроме мёртвого stemplingsur 0-10). Мелочь 10-100 на потом: byggeledelse, timeregistreringssystem, faktura app.

**SE-статья `enkelt-tidrapporteringssystem`** (KW 880/mo, был 404) — `src/content/articles/kvalitet.ts`
- Спок к pillar `tidrapporteringssystem-bygg` под точный запрос «enkelt tidrapporteringssystem». Угол = enkelhet
  как критерий выбора (adoption / checklista / krångligt-vs-enkelt), чтобы НЕ каннибализировать pillar (у него
  уже есть H2 про «enkelt»). Self-canonical, sv-only зарегистрирован, перелинковка с pillar+спокы.
- Фичи сверены с PRODUCT-FEATURES; прошёл 2 редакторских агента (язык+факты) — смягчил 2 переобещания
  («automatiskt» привязка к проекту, «igång på en dag») + мелкая тавтология. Новая диаграмма
  `enkelt-tidrapporteringssystem`. tsc+build зелёные, live 200, в sitemap.
- Урок: проверять CMS-страницы, а не только code-статьи — `tidrapportering-hantverkare` (2400) УЖЕ был в CMS
  (не писал дубль). Реальные оставшиеся 404-пробелы: `tidsrapportering-app` (390), `tidrapportering-i-mobilen` (90).
- **NO-ключи:** `docs/seo/keywords-norway.md` — 5 копипаст-блоков по 10 (полный SE→NO маппинг) для Keyword Planner.

**Норвегия byggexp.no — 2-й nb-кластер (3 статьи)** — `src/content/articles/nb-timeregistrering.ts`
- Было 4 nb-статьи (timeregistrering pillar + gratis + stemplingsur + faktureringsprogram). Добавил кластер
  вокруг присутствия на площадке = норв. аналог personalliggare, написан по норв. источнику (byggherreforskriften
  § 15 / Arbeidstilsynet), НЕ перевод:
  - `mannskapsliste-byggeplass` (pillar): elektronisk oversiktsliste, § 15, что регистрируется
    (navn/fødselsdato/arbeidsgiver/HMS-kort-nr), byggherrens ansvar, когда действует. Честный фрейминг:
    ByggExp = GPS-oppmøte/timer, НЕ сертиф. HMS-kort-ридер → ссылка на Arbeidstilsynet.
  - `hms-kort-bygg` (spoke): что такое HMS-kort, как выдаётся, связь с oversiktslisten.
  - `timeliste-app-bygg` (commercial): «timeliste» = обиходное норв. слово; мост к timeregistrering pillar; app vs mal.
- 2 новые брендовые nb-диаграммы (`nb-mannskapsliste-krav`, `nb-hms-kort`) через `gen-article-diagrams.js`.
- Перелинковка с pillar. tsc + next build зелёные; live проверено (3×200, диаграммы 200, все в sitemap byggexp.no).
- Итого nb-блог: **7 статей, 2 кластера**. NO-рынок узкий — дальше добивать точечно (prosjektstyring? anbud/tilbud?).

**GSC «Not found (404)» — раунд 2** (`docs/seo/gsc-404-cleanup.md`)
- Validation была **Failed** (25 URL). Прогнал все 25 live-fetch'ем: часть уже 200 (фикс раунда 1),
  литеральные `[lang]` из sitemap убраны, но `/en /ru`-URL (проиндексированы до перехода на sv-only)
  продолжали краулиться и 404-ить.
- Добавил 301 в `next.config.mjs`: `/en/verktyg/{ackord,ob-overtid,restidsersattning}-kalkylator`,
  `/en|/ru/blog/{tidrapport-app-iphone,faktura-med-rotavdrag}` → sv; фантомы `/faq`,`/login` → `/sv`.
  Задеплоено, live отдаёт **301** (проверено). `/blog/test` оставлен 404 (мусор).
- В GSC нажал **START NEW VALIDATION** → идёт (Pending 25, Failed 0). Google перепроверит за дни-недели.

---

## Сессия 2026-09-06

### ✅ Сделано
**Универсальный SEO-бриф для автономного агента** → `docs/seo/seo-agent-brief-universal.md`
- Для запуска SEO-агентов в терминале в ДРУГИХ проектах (не ByggExp) — локальные сервисные сайты.
- Собран из 3 блоков: (1) автономный режим «делай все шаги подряд сам, не спрашивай, обходи блокеры заглушками»; (2) core-SEO (локальное SEO, матрица услуга×район, money-страницы, on-page, тех-чеклист, owner-задачи); (3) topical authority (pillar→cluster, смежные кластеры, антиканнибализация).
- Есть блок `⚙️ ПАРАМЕТРЫ` — заполнить под каждый сайт (компания/услуги/районы/конкуренты/NAP).
- Агент первым делом сам сохраняет бриф в `docs/seo-agent-brief.md` целевого проекта + ведёт `docs/seo-worklog.md` (чек-лист ☐/🔄/✅) для продолжения между прогонами.
- Контекст-повод: **villatakservice.se** (= Geal Entreprenad AB, кровля, Sundbyberg/Stockholm). GSC: ~194 показа, **0 кликов**, ср. позиция **44.4** — новый, не ранжируется. Плацдарм-запросы: `takläggare/takrenovering/takbyte sundbyberg`, `besikta tak`, `villatak`. Конкурент takrenoveringistockholm.se — service-only, без блога, ~4 района (дыры: location-страницы, блог, «villa»-угол).

### ⏭️ Следующие шаги (этот трек)
- [ ] Заполнить блок ПАРАМЕТРЫ под каждый сайт из списка владельца (villatakservice.se + остальные, которые скинет) → отдать агентам.
- [ ] (villatakservice.se) запустить агента по брифу; приоритет: GBP (owner) + location-матрица по районам + money-страницы + блог-кластер.
- [ ] Опц.: вынести шаблон в `~/seo-agent-brief.md` (вне репо), чтобы копировать в любой проект.

---

## Сессия 2026-09-05

### ✅ Сделано (в проде)

**Страница /funktioner (редизайн-итерация)** — детали в `docs/funktioner-page-redesign.md`
- Бесконечная peek-карусель (3 копии списка, мгновенный телепорт — нет «отмотки»; в CSS `scroll-behavior:smooth` пришлось гасить inline при телепорте).
- Заголовок карточки над картинкой; картинка крупнее; клик по картинке → lightbox (доступен с клавиатуры, focus-trap, Esc).
- Каждой из 12 фич — своя картинка с главной (`/landing/features/*`), а не общий CMS-баннер.
- Зелёные буллиты шагов (как на главной). Единый вертикальный ритм 64px.
- Дубль по задачам скрыт (`paminnelser-uppgifter-och-deadlines` → `HIDDEN_FEATURE_SLUGS`); слит в «Arbetsuppgifter…».
- Короткие заголовки карточек (sv/en/ru/nb). Порядок карточек зафиксирован по `FEATURE_NAV`.
- a11y/perf: rAF-throttle scroll, reduced-motion, убран `will-change` с 33 слайдов, роли (group), lazy-load неактивных, OOB-safe стрелки.
- CSS вынесен из styled-jsx в `src/styles/funktioner.scss`.

**Контент-QA (3 агента: feature-статьи, код funktioner, широкий свип)**
- Факт: 2 устаревших порога personalliggare в `ekonomi.ts` (235 000 → **236 800 kr**, prisbasbelopp 2026 = 59 200).
- SEO: подрезаны 3 длинных seoTitle + 6 самых длинных seoDescription (>170 симв.).
- Внутренние ссылки (`.eco-note`) добавлены в 7 feature-статей, где их не было.
- UI-лейблы в статьях выровнены под реальный продукт: **Tider→Arbetspass**, **fliken Faktura→модуль Fakturor**, **Löneunderlag→Löner**, **fliken Uppgifter→модуль Uppgifter**.
- Повторяющиеся задачи: подтвердил по скрину формы «Skapa uppgift» (есть `Påminnelser` интервал + эскалация + `Upprepa`) → вернул точную формулировку в статью paminnelser.
- `PRODUCT-FEATURES.md` дополнен: Uppgifter (напоминания/эскалация/повторяемость) + EKONOMI-модули **Utlägg / Löner / Lönsamhet** (были пропущены).
- Проверено: все 2026-цифры (ROT 30%/tak, moms, prisbasbelopp, 3:12, arbetsgivaravgift) верны; 0 битых внутр. ссылок.

**SEO-тайтлы (CTR, принцип «точный ключ вперёд + крючок», ≤60 симв.)**
- tidrapporteringssystem-bygg → «…– från tid till lön».
- egenkontroll → «…– gratis mall, exempel & PDF».
- personalliggare-bygg-app → «Personalliggare för bygg – utan ID06 & kontrollavgift» (вернул «bygg»).
- app-for-tidrapportering-bygg (чемпион app-кластера) → «App för tidrapportering i bygg – testa gratis & GPS» (сохранил ключ 1900, не перевернул на низкочастотный).
- Урок: не менять более объёмный точный ключ ради красоты — играть только хвостом.

**i18n — сайт теперь на 10 языках приложения** — детали в `docs/i18n-languages.md`
- Было sv/en/nb/ru. Добавлено: **pl, uk, fi, et, lt, lv**. `ru` добавлен в переключатель (был URL-only) — оставлен по решению владельца.
- Переведена вся продающая часть: 16 файлов локалей + `/funktioner` (FUNKTIONER_COPY и мапы) + FeatureNav + defaultHomeMeta + FAQ-заголовки + blog-хром.
- Инфра: флаги, `landingLanguageCodes`, `BlogLocale`, `CODE_ARTICLES` (пусто для новых), `MockLocale` (только sv/en/ru), hreflang, sitemap.
- Блог-статьи и карусель funktioner для новых языков ПУСТЫ (контент «потом»); юр-страницы → en/sv-fallback.
- tsc 0, build зелёный. `/pl` проверен вживую — ок. `/uk /et /lt /lv` собираются локально (подтверждено), в проде после деплоя.

---

## ⏭️ Следующие шаги (долги)

### 🟢 Можно закрыть автономно (in-repo, без владельца)
- [ ] **DeepL/native-вычитка fi/et/lt/lv** перед платным трафиком/FB — если дадут DeepL-ключ, прогнать авто (1:1 с приложением). Строки: `src/locales/*.ts` блоки `fi/et/lt/lv` + funktioner.
- [ ] **`setLightboxImage` lint** в `src/pages/[lang]/blog/[slug].tsx` (pre-existing, `react-hooks/immutability`) — почистить.
- [ ] **faktura/offert-кластер** (`docs/seo/faktura-offert-lon-cluster.md`): усилить `kalkylprogram-bygg`; добавить «bygg» в h1 инструмента `offert-mall`; собрать pillar `faktura-med-rotavdrag`.
- [ ] **avtal/kontrakt-кластер** (`docs/seo/avtal-kontrakt-cluster.md`): pillar + spokes с диаграммами (там, где не нужен owner-CSV).
- [ ] **funktioner-полировка**: сверить pill-этикетки en/ru/nb; проверить sticky `top:61px` на проде.

### 🔴 Требуют владельца (главный рост, вне репо)
- [ ] **Бэклинки** — #1 рычаг (`docs/seo/backlinks-plan.md`).
- [ ] **Outreach** — 924 email, проверить тест-мейл → запуск (`docs/seo/cold-outreach-setup.md`).
- [ ] **Видео** — снять 6 роликов → эмбед (`docs/seo/video-plan.md`, сценарии готовы).
- [ ] **GSC CSV** (Performance → Queries, ~28 дней) → near-miss статьи (поз. 8–15).
- [ ] **Google Ads** на «tidrapport app» + вариации + **ASO/отзывы** в App Store (единственный быстрый способ обогнать Spiris/Blikk/Trinax + попасть в App-pack).
- [ ] **Volym** для Excel/mall + bemanning из Keyword Planner (`docs/seo/keywords-master.md`).
- [ ] **löneunderlag инлайн-скрин** (demo-данные) — если нужен плоский webadmin-снимок вместо лаптоп-мокапа.
- [ ] **Контент блога/карусели funktioner для новых языков** (pl/uk/fi/et/lt/lv) — сейчас пусто.

### ⚪ Опционально / низкий приоритет
- [ ] Рефактор funktioner: единый `FEATURES[slug]`-конфиг (осторожно: `featureSteps` языко-динамичны).
- [ ] Норвегия (byggexp.no): регуляторный контент требует переписи (memory `norway-expansion`).

---

## Заметки для продолжения
- **Как добавить язык на сайт:** флаг в `public/landing/flags/`, код в `src/locales/languages.ts` (`languages`, `landingLanguageCodes`, `selectableLanguages`), затем блок во ВСЕХ 16 файлах `src/locales/*.ts` + funktioner (FUNKTIONER_COPY, READ_MORE, CLOSE_LABEL, ZOOM_LABEL, PAMINNELSER_STEPS) + `lib/seo.ts` defaultHomeMeta + `lib/faq.ts` + `locales/blog.ts` + `blog/[slug].tsx` FEATURE_CRUMB + `types/blog.ts` BlogLocale + `code-articles.ts` (`pl:[]`) + `blog-mock.ts` MockLocale. Язык — «всё или ничего»: неполный блок ломает build. tsc даёт чек-лист недостающих ключей.
- **Деплой-лаг:** новые /xx-страницы 404-ят ~1–2 мин после push, пока VPS не пересоберётся — это нормально, не баг.
- **Переводчик проекта = DeepL** (в приложении подключён DeepL API «Talking» для чатов). Для 1:1 сверять сайт с ним.
