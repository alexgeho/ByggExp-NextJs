# ByggExp — рабочий лог (продолжать отсюда)

Единый файл «что сделано / что дальше», чтобы не начинать заново. Обновлять сверху.
Деплой: push в `main` → GitHub Actions → VPS (~1–2 мин). Юзать **yarn** (не npm). Node 20 на проде.

---

## 🟢 2026-09-26 — страница цен: новые пакеты live
- Пакеты Faktura/Projekt/Komplett (299 / 690 вкл. 10 + 69 / 990 вкл. 10 + 119), год −15%, пробный 2 недели, карусель на мобиле. Пилюли — вариант B «Koll på pengarna / Koll på jobbet / Full koll».
- Варианты для A/B-теста сохранены в `docs/marketing/pricing-ab-tests.md` (вариант A — следующий кандидат).

## 🟡 2026-09-26 — пробный период = 2 недели
- Владелец: пробный период **2 недели со всеми функциями**. «Первый месяц бесплатно» заменён на «2 недели» в hero (10 языков), сноске цен (10 языков), FAQ (sv/en) и AI-чате. Ветка `claude/zealous-bohr-6rhqv5`, не main.

## 📍 СТАТУС (кратко)
Последняя сессия: **26.09 — новые цены** (ветка `claude/zealous-bohr-6rhqv5`, ждёт merge), до неё 24–25.09. Работа переезжает в **облачную сессию «Карта проектов»** на claude.ai/code
(10 репо, работает при выключенном компе, с телефона — приложение Claude → Code). **Продолжать с «🔜 NÄSTA STEG» ниже.**
История сессий до 2026-09-12 → `docs/worklog-archive.md`. Индекс всех доков → `docs/README.md`. Норвегия (byggexp.no) — память [[norway-expansion]] + архив.

## 🟢 Сессия 2026-09-26 — новая модель цен (ветка `claude/zealous-bohr-6rhqv5`, НЕ в main)

### KLART
- **Блок цен на главной переделан по одобренному макету:** 3 пакета — **Faktura** 299 SEK/мес фикс (1–2 польз.),
  **Projekt** 690 (вкл. 10 польз., +69 за доп.), **Komplett** 990 (вкл. 10, +119, «Mest valt»). Переключатель
  «Per månad / Per år – 2 mån gratis» (год = 10×мес/12) + степпер «Antal användare» 1–40 (по умолч. 10), цены считаются вживую.
  Ниже: «Specialerbjudande» (40+ → Boka demo, `#cta`), «Tillägg: Integrationer» 199 SEK/företag/mån, сноска (моms, 30 дней).
  Старые 499/899/1799, слайдер со стрелками/точками и «−10 %» удалены. Мобайл: карточки в колонку, контролы переносятся (проверено 375px).
- Файлы: `src/components/Pricing/Pricing.tsx` + `.scss`, `src/locales/pricing.ts` (все 10 языков, sv = мастер, плюрализация
  через `Intl.PluralRules`), `src/types/pricing.ts`. Валюта везде SEK (как и раньше, в т.ч. nb). Названия пакетов не переводятся.
- **AI-чат** (`src/pages/api/chat.ts`): факты о ценах/пакетах обновлены, «не считать суммы» → ссылка на `/{lang}#pricing`.
- `yarn build` ок, `yarn lint` — те же 6 старых ошибок, новых нет.

### 🔜 NÄSTA STEG
1. Owner: просмотреть ветку (превью/локально) → смержить в main.
2. Проверить совпадение с биллингом (Stripe в byggexp-admin/BackEnd: планы, цена доп. польз., годовая оплата, правило «30 дней»).
3. Устаревшие внутренние доки со старыми ценами: `docs/seo/video-paid-overview-script.md`, `docs/seo/inbound-demo-call-script.md` — переписать.
4. Переводы fi/et/lt/lv — машинного уровня, вычитать перед рекламой.

## 🟢 Сессия 2026-09-24…25 — нормы Boverket, облако для всех проектов, byggtorg

### KLART
- **EKS → BFS 2024:6** по всему сайту (`a14eee0`) и **BBR → новые BFS** (`3fe602f`): пожар 2024:7, влага/гигиена 2024:8,
  лестницы/кровля 2024:9, доступность 2024:12. Переход: старые правила можно, если ansökan/anmälan до **1.7.2026** (BFS 2024:14 p.3).
  Энергетика остаётся в BBR 31 до **1.10.2026**, потом **BFS 2026:9**.
- **Routine на 1.10.2026 09:00** (облачный агент): обновит энергетику (п. 1c ниже), пушит ветку `claude/energiregler-bfs-2026-9`,
  не в main → https://claude.ai/code/routines/trig_01PAiKVR3EBedFTLHFwVzJc3
- **Облачная сессия «Карта проектов»** (claude.ai/code): ArmeringProffs, agry.se, byggexp-app, byggexp-admin, ByggExp-BackEnd,
  ByggExp-NextJs, gealab.nu, Gjutabetongplatta, Nordkod, villatakservice.se. Она уже составила карту всех проектов.
  Вводный промпт с правилами (язык, коротко, yarn, commit→main, факты, секреты) дан owner'у — вставить первым сообщением.
- **Новый приватный репо `alexgeho/byggtorg`** (SEO-клиент Nordkod, WordPress): CLAUDE.md с правилами (только черновики),
  seo-plan, status, `scripts/wp.sh` (креды только из env `WP_USER`/`WP_APP_PASSWORD`, публикацию блокирует).
- ByggExp 1.1.2 одобрен: iOS «Ready for Distribution», Android в проде 100 %. Play-верификация разработчика — все Play-приложения уже зарегистрированы.
- Анонс 1.1.2 (пост LinkedIn + сценарий YouTube Short) — тексты даны owner'у, публикует сам.
- Практика/LIA: исследование IT-компаний на госконтрактах + 5 черновиков писем + карта-артефакт — **локально в `internship/`**
  (gitignored, репо публичный). Память [[job-hunt-praktik]].

### 🔜 NÄSTA STEG (по порядку)
1. ⚠️ **Безопасность WP (срочно, owner):** в репо gealab.nu лежит `create-admin.php` (создаёт admin/123456) — удалить с сервера и из репо;
   проверить подозрительный `wp-loada.php` → `wp-loadb.php` (agry.se и gealab.nu); `wp-config.php` в git — вынести/сменить ключи БД.
2. **Облако:** дать Claude GitHub App доступ к `byggtorg`, `shop.agry.se`, `gealab.se` (github.com/settings/installations → Claude →
   Configure) и добавить их в облачную сессию (или новую сессию со всеми 13). Для byggtorg — добавить `WP_USER` + app-password как
   API credential для `byggtorg.se` в окружении Default. Пароль byggtorg потом заменить (однажды попал в чат).
3. **LIA-письма:** `/mcp` → войти в Gmail → Claude кладёт 4 черновика (Iteam, Regent, Nexer, CGI) из `internship/utkast-lia-offentlig.md`;
   Sopra Steria — LinkedIn вручную. Потом Redmind, Hotmat, Simon Frisk, Avantime.
4. **≈4–5 окт — GSC:** валидация 404 + `.googleads/venv/bin/python .gsc/index_status.py` (токен обновить через браузер, [[gsc-api-setup]]).
5. **≈7–14 окт — takstolar:** позиции по `takstol` в GSC — ушла ли каннибализация (калькулятор vs статья).
6. **1 окт** — проверить результат routine (энергетика BFS 2026:9), смержить ветку после просмотра.
7. Счётчик скачиваний через 2–4 нед (`/api/download-stats`); диаграммы для топ-40 статей; тех-долг slug `byggdagbok`.

### ⚠️ На стороне owner'а
- VPS root: 138k попыток подбора пароля — только SSH-ключ + fail2ban.
- Anthropic Console: auto-reload (чат на Sonnet 5, ~$0.9/100 сообщений).
- Stripe — ведётся в byggexp-admin/BackEnd (по карте: подписки LIVE, checkout ещё не проверен; лимит Tillväxt 20 vs 25).

## 🟢 Сессия 2026-09-22…24 — mallar по нормам, AI-чат, контакты, карусели, takstolar

### KLART (всё задеплоено на прод)
**Скачиваемые шаблоны (ревизия `docs/seo/mallar-revision.md` — все 5 пунктов ✅):**
- **egenkontroll — все 8 пресетов = протоколы** (`59c4c8d`, `ef80e05`, `94f0af4`): у каждого пункта Metod + колонка
  «Krav / underlag», Mätvärde где есть единица, 2 подписи, сноска с нормой. el 22 п. (ELSÄK-FS 2017:3), VVS 16 п.
  (Säker Vatten 2026:1), bygg 13, vatrum 10, betong 12, tak 11, ventilation 12 (OVK), skyddsrond 15. Граничные значения
  НЕ выдумываем — пустые поля «enligt tillverkare/provningsmetod».
- **kontrollplan-mall = таблица по PBL** (`e993a77`, свой компонент `KontrollplanMallTool`): vad / hur / mot vilket
  underlag / vem / egenkontroll-sakkunnig-KA + datum/sign, блоки anmälningar till nämnden, arbetsplatsbesök, avfall, slutbesked.
- **Новый инструмент `/sv/verktyg/byggmotesprotokoll-mall`** (`e03a15b`) — дагордning из статьи, статья ссылается на него.
- Статья arbetsberedning → свой инструмент; пример entreprenadkontrakt = чистый AB 04 (без «Commode»).
- **Факт-чек договоров/AFS** (`4c6e94b`): HF 17 = ремонт/ombyggnad, ABS 18 = ny-/tillbyggnad småhus; Bas-U обязателен
  для всех проектов; кнопка «Word / Excel» → «Excel» (это CSV). AB 04/ABT 06 действуют (AB 25 не раньше 2027).
- **Счётчик скачиваний на весь сайт** (`59c4c8d`): `<a download>` → `/api/track-download` + GA4 `file_download`;
  дашборд `/api/download-stats`.

**AI-чат (память [[ai-assistant]]):**
- LIVE с ключом на VPS (`/opt/byggexp-next/shared/.env` + `pm2 restart byggexp-next --update-env`).
  `SiteChat` → `GET /api/chat` решает AI или WhatsApp-фолбэк; нет на `/admin` и `/[lang]/embed/*`.
- Модель **`claude-sonnet-5`** (`b9c6c48`, ~$0.9/100 сообщений; Haiku выдумывал факты, Opus ~$2.3). Промпт: факты
  о продукте (функции, цены 499/899/1799, демо), язык посетителя, не считать суммы, не добавлять деталей сверх статей.

**Сайт/UX:**
- **Контакты** `/[lang]/contact` (стиль nordkod.se): section-head шапка, форма → `f-message`, Ring/Mejla, реквизиты
  RealMar AB, FAQ, «Så går det till»; 10 языков. WhatsApp-карточка и галочки в шапке убраны по просьбе owner'а.
- **Главная:** блоки преимуществ → карусели (общий `Benefits/BenefitSlider.tsx`, стрелки по кругу, точки):
  Benefits = 8 карточек с пометкой аудитории, FinalBenefits = 4. (Owner отверг: 3D-барабан, 16 карточек.)

**SEO takstolar (`c2b839b`, `9f6bf13`):**
- GSC: калькулятор и статья каннибализировали одни запросы (поз. 12–25). Калькулятор → tool-интент (+ nockhöjd,
  överram, takyta + SVG W-takstol); статья → guide (типы W/WW/A/ramverk/sax/pulpet/mansard, spännvidd, lutning).
- Исправлены ошибки: **«600 mm vid tegel» — неверно** (1200 mm и для tungt tak); **EKS → BFS 2024:6** (с 1.7.2025).

### 🔜 NÄSTA STEG (продолжать отсюда, по порядку)
1. **EKS → BFS 2024:6 по всему сайту.** 38 упоминаний в 6 файлах (`grep -rnE "\bEKS\b" src`). EKS отменён 1.7.2025
   (BFS 2024:6); старые правила можно применять только если ansökan/anmälan до 1.7.2026, смешивать нельзя. Заменить
   аккуратно, с этой оговоркой; источник: rinfo.boverket.se/BFS2024-6/dok/BFS2024-6_Konsekvensutredning.pdf.
   ✅ Сделано `a14eee0`: 6 файлов, EKS→BFS 2024:6 + оговорка о переходе; устаревшие BBR-фразы — на решение owner.
1b. ✅ (`3fe602f`) **BBR тоже устарел** (новые правила Boverket с 1.7.2025; энергетика остаётся в BBR 31 до **1.10.2026** → после этой даты обновить U-värden/Um в kalkyl.ts/ekonomi.ts). Кандидаты на правку (от агента, `a14eee0`): regelverk.ts kontrollplan (~285–294), kvalitet.ts:118, :666, :1352 (переход по дате *beslut* vs *ansökan* — сверить), kalkyl.ts:1837, verktyg/trappa-kalkylator.tsx:60/122, egenkontroll-bygg-mall.tsx:30, api/egenkontroll-generate.ts:43.
   → Сделано: ссылки на BFS 2024:7/8/9 (brand/fukt/säkerhet vid användning; trappor — в BFS 2024:9 нет точных мер steghöjd/stegdjup), переход = дата *ansökan/anmälan* до 1.7.2026 (BFS 2024:14 övg. p.3). Энергетика: BBR 31 до **1.10.2026**, затем BFS 2026:9 (energihushållning och värmeisolering). Осталось: egenkontroll-mall.tsx, kvalitetsplan-mall/Tool, u-varde-kalkylator («gällande krav (BBR)»), kvalitet.ts energiartikel (övergång till 30.9.2027 — не проверено).
1c. **1 окт 2026 — энергетика:** BBR 31 → **BFS 2026:9** (energihushållning). Обновить: u-varde-kalkylator.tsx (252/258), U-värden «BBR 30» в kalkyl.ts, energi-статью в kvalitet.ts (~1095–1164, проверить «переход до 30.9.2027»). Ещё BBR как текущие правила: verktyg/egenkontroll-mall.tsx (140,174,239,251,257,310), kvalitetsplan-mall.tsx:103, KvalitetsplanMallTool.tsx (17,27,28). Источник: boverket.se «Om Boverkets nya byggregler».
2. **≈4–5 окт — GSC:** валидация 404 (Pages → Not found, было 26 pending) + `.googleads/venv/bin/python .gsc/index_status.py`.
   Токен GSC ~7 дней — обновить через браузер (память [[gsc-api-setup]]).
3. **≈7–14 окт — эффект takstolar:** запросы `takstol` в GSC (скрипт-шаблон: query+page с фильтром contains) —
   ушла ли каннибализация, поднялись ли позиции с 12–25.
4. **≈через 2–4 нед — счётчик скачиваний:** `/api/download-stats` — какие шаблоны реально качают → куда вкладываться.
5. **Контент:** диаграммы для топ-40 статей (`.gsc/top_pages.py` + пайплайн из сессии 17–19.09); следующие near-miss
   кластеры из `.gsc/near_miss.py`.
6. ⏰ **Осень 2026:** BKK (foreningenbkk.se) обещал апдейт по AB 25/ABPU 25 — перепроверить тексты про AB 04/ABT 06.
7. Тех-долг: коллизия слага `byggdagbok` (2 статьи, отдаётся `tillvaxt.ts`).

### ⚠️ На стороне owner'а
- VPS root: 138k неудачных логинов — закрыть вход по паролю (только SSH-ключ + fail2ban).
- Anthropic Console: включить auto-reload (баланс ~$4, чат встанет при нуле — сайт сам вернёт WhatsApp).
- Вычитка носителем переводов pl/nb/fi/et/lt/lv.
- Stripe/оплата — делается в другом проекте (не наш трек).

### 🛠️ Приёмы этой сессии
- Проверка PDF без скачивания: в странице подменить `URL.createObjectURL` (собрать Blob) +
  `HTMLAnchorElement.prototype.dispatchEvent` → текст PDF читать из Blob.
- Вкладка Chrome у агента в фоне → smooth-scroll не анимируется (это не баг сайта).
- GSC по теме: `searchanalytics.query` с `dimensions:[query,page]` + `dimensionFilterGroups` (query contains X) →
  видно каннибализацию (две наши страницы на один запрос).
- Факты для статей/шаблонов — только после агента-факт-чекера по первоисточникам; статьи — через редакционного агента
  (CONTENT-STYLE.md).

## 🟢 Сессия 2026-09-20 — GSC: «Blocked by robots.txt» + корневой фикс 404 (hreflang)

### KLART (сделано, задеплоено: `61b193d`, `a168129`, `176037d`, `b97cd87`)
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
- **Добито хвостами:** 301 для `/{pl,uk,fi,et,lt,lv}/blog/{tidrapport-app-iphone,faktura-med-rotavdrag}`
  (Google продолжает краулить уже найденные URL, даже когда hreflang их больше не объявляет) и
  `/sv/blog/test` → `/sv/blog` (один незакрытый 404 завалил бы весь прогон валидации).
- **Итог проверки live:** все 25 проверяемых URL из отчёта отдают **200** (через 301). Sitemap — 495/495 = 200.
- **Валидацию в GSC нажал сам** (Pages → Not found (404) → Start new validation): started 20.09,
  pending 26, failed 0.
- Разбор и метод → `docs/seo/gsc-404-cleanup.md` (РАУНД 3).

### 🛠️ Инструменты/приёмы этой сессии
- **Разбор GSC без экспорта:** claude-in-chrome → `search.google.com/search-console/index?resource_id=sc-domain:byggexp.se`
  → клик по причине → Examples (Rows per page 100) → `find` по таблице. Item_key в URL у каждой причины свой.
- **Проверка всего sitemap одной командой:**
  `curl -s https://byggexp.se/sitemap.xml | grep -o '<loc>[^<]*</loc>' | sed -E 's|</?loc>||g' | xargs -P8 -I{} sh -c 'echo "$(curl -s -o /dev/null -w %{http_code} {}) {}"'`
  (⚠️ BSD sed не понимает `\?` — нужен `sed -E`).
- **Ловушка:** краулер шлёт `[`/`]` percent-encoded → проверять надо `/%5Blang%5D/...`, а не `/[lang]/...`
  (curl нужен `-g --path-as-is`, иначе он сам кодирует).
- **Правило hreflang:** альтернат обязан вести на 200. Любой ручной список «где статья есть» протухает —
  выводить из реестра контента.

### 🔜 NÄSTA STEG (продолжать отсюда)
1. **Через 1–2 недели (≈ 4–5 окт): проверить валидацию GSC.** Pages → «Not found (404)» — счётчик 26
   должен падать, статус стать Passed. Если снова Failed — открыть Examples и прогнать те URL live
   (`curl -sL -o /dev/null -w "%{http_code} %{url_effective}"`), все должны быть 200.
2. **Заодно прогнать `.gsc/index_status.py`** — сравнить «not indexed» с сентябрьскими 17 и увидеть,
   вышли ли сироты из Discovered. Токен GSC ~7 дней (Testing) — обновляю сам через браузер, см. [[gsc-api-setup]].
3. **«Discovered – currently not indexed» (42)** — рычаг прежний: **бэклинки + Request indexing (owner,
   вручную)**, НЕ доп. внутренняя перелинковка (проверено в сентябре, не помогло).
4. **Контент (перенесено из прошлой сессии, приоритет выше тех-SEO — тех-долг закрыт):**
   диаграммы для топ-40 статей (`.gsc/top_pages.py` + пайплайн из сессии 17–19.09) · кластер
   **takstolar** (самый большой near-miss) · вычитка носителем pl/nb фича-страниц · факт-чек на
   автопилот (ждёт решения owner'а).
5. ⚠️ Тех-долг прежний: коллизия слага `byggdagbok` (2 статьи, отдаётся `tillvaxt.ts`).

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

## 2026-09-26 — Funktioner + pris-pillen
- Priser: "Funktioner anpassade…"-pillen står nu mitt i kortets lediga yta (lika avstånd till listan och knappen).
- Funktionssidor: "Liknande artiklar" visar bara andra funktionssidor.
- Nya offert/faktura-bilder (fakturera-fran-byggexp-doc.webp, skapa-offert-i-byggexp-doc.webp) renderade från backendens PDF-mallar; fakturan = ägarens egen bild (Nordström Bygg AB, Faktura 2041, 594px — byt mot högre upplösning när den finns), offerten med samma logga och sidfot.
- Nästa: färger på planerna (orange ersätts), ev. flytt /blog/<slug> → /funktioner/<slug> med 301.
