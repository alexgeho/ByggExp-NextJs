# ByggExp — рабочий лог (продолжать отсюда)

Единый файл «что сделано / что дальше», чтобы не начинать заново. Обновлять сверху.
Деплой: push в `main` → GitHub Actions → VPS (~1–2 мин). Юзать **yarn** (не npm). Node 20 на проде.

---

## Сессия 2026-09-10

**✅ 3 новые SEO-статьи из KP+GSC gap-анализа (задеплоены, sv-only):** прогнал Keyword Planner (SE, топ-10 сидов) + сверил с `docs/seo/gsc-near-miss.md`, вычел 296 существующих slug'ов → реальные пробелы. Важно: **bemanning/schemaläggning/avvikelsehantering УЖЕ построены** (не дублировал; `bemanningsplanering` поз.53 в GSC = бэклинки/авторитет, не отсутствие страницы). Построено (каждая: глубокая фактура с §-ссылками через веб-агента → 2 редакторских агента язык+факты → брендовая диаграмма → tsc+build):
  - `kvalitetsplan-bygg` (kvalitet.ts) — krav AB04/ABT06 kap 2 §2, AMA AF 21 AFC/AFD.224, ISO 9001; ключевой угол = разделение **kontrollplan(PBL) ≠ kvalitetsplan ≠ egenkontroll**. Диаграмма `kvalitetsplan`.
  - `e-signering-avtal` (juridik.ts) — avtalslagen 1915:218 formfrihet, eIDAS 910/2014 art.25, **BankID=AdES**, формкрав-исключения (JB4:1/ÄB10:1/ÄktB7:3), ÄTA-skriftlighet, bokföringslag 7 år. Диаграмма `e-signering-avtal` (3 eIDAS-уровня).
  - `offert-vvs-elektriker-rormokare` (ekonomi.ts) — offert per yrke; **EL=lagkrav** (elsäkerhetslag 2016:732, registrering/egenkontroll), **VVS=branschkrav** (Säker Vatten, BBV/GVK); konsumenttjänstlag 36§ +15%, ROT 30% 2026. Диаграмма `offert-vvs-elektriker-rormokare`.
- ⏭️ **Проверить live 200** (деплой ~1-2 мин): `/sv/blog/kvalitetsplan-bygg`, `/sv/blog/e-signering-avtal`, `/sv/blog/offert-vvs-elektriker-rormokare` + диаграммы + наличие в sitemap.
- ✅ **Заход 2 сидов (16:00) → +1 статья:** `anbud-bygg` (ekonomi.ts) — B2B-anbud, дифференцирован от skriva-offert (konsument) и offentlig-upphandling-lou (LOU). Фактура: avtalslagen 1915:218 §§1-7 (löftesprincipen/acceptfrist/oren accept 6§), anbudskalkyl självkostnad→påslag→risk→vinst (без фикс.%), förbehåll, ÄTA AB04/ABT06 kap2. Диаграмма `anbud-bygg`. Прошёл 2 агента (0 фактических замечаний). Live проверяется.
- **Из захода 2 остальное = 0 объёма → skip** (verktyg qr / maskinpark / byggavfall / serviceorder / självkostnad); offentlig upphandling уже покрыта (`offentlig-upphandling-bygg-lou`).
- ⏭️ **Следующее:** свежий GSC-экспорт (Performance→Queries 3 мес) — owner выгружает, я наложу near-miss. construction-жила из текущих CSV **отработана** (все реальные пробелы построены). Для новых нужен свежий GSC или новые сиды в браузерном KP.
- ⚠️ **Утренние 6 CSV (10:00) = НЕ ByggExp** — ключи веббюро (nordkod.se/RealMar): hemnet kundportal 5000, headless cms, core web vitals, react utvecklare, wordpress underhåll, saas utveckling. Другой сайт, репо тут нет — под него контент отсюда не строю (owner: подключать ли тот проект?).

**📈 Итого за 2026-09-10: 4 новые sv-only статьи** (kvalitetsplan-bygg, e-signering-avtal, offert-vvs-elektriker-rormokare, anbud-bygg) — каждая: веб-фактура с §-ссылками → 2 редакторских агента (язык+факты) → брендовая диаграмма → tsc+build → деплой → live 200.

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
