# ByggExp — рабочий лог (продолжать отсюда)

## 2026-10-08 — Landningssida: faktakorrigeringar (live, f009685)
- «12 verktyg … 60 %» → «11 verktyg som förenklar administrationen» (antalet räknas från kortlistan), i alla 10 språk.
- Okällade 80 % (Grundproblemet) och 60 % borttagna — inte i product-facts-verified.md. Pain-blocket nu en kolumn.
- Benefits-slidern: SSR renderar en kopia, loop-kloner läggs till i klienten (aria-hidden) — texten dupliceras inte längre för sökmotorer.
- Pris: «SEK / företag / månad» (paket per företag, 10 användare ingår, 299 upp till 2).
- Kvar: Fiverr-portföljens skärmdump visar fortfarande gamla «12 verktyg / 60 %» → ny skärmdump (se sites-hub HANDOFF 2026-10-08).

## 2026-10-08 — PBL 1 dec 2025: attefall/friggebod/bygglov-texter uppdaterade (live)
- regelverk.ts: behover-jag-bygglov, attefallshus-regler, friggebod-regler, uterum-bygglov, staket-bygglov omskrivna efter nya 9 kap. PBL (komplementbyggnad 30 m²/4,0 m/45 m² inom DP, 50/4,5/65 utanför, ingen anmälan utom VA/ventilation/eldstad/bärande/brand enl. PBF 6:1; tillbyggnad 30 m² under nock; plank 1,8/1,2 m; 4,5 m gräns; 37 § kulturvärden). KA-avsnitt (kontrollansvarig, kontrollplan, behörigheter) efter PBF 7 kap. 5 §. kalkyl.ts (betong per plint) rättad. Källa: riksdagen PBL/PBF + Boverket. updatedAt 2026-10-08.

## 2026-10-08 — SEO-genomgång (GSC) + snabba CTR-/länkfixar (live, af6779f)
- GSC 28 дн (по 05.10) vs пред. 28: клики ~1,1K vs 713, показы 109K vs 77,7K, CTR 1 % vs 0,9 %, поз. 11,7 vs 16. Индекс 438 / не 193 (redirect 64, alt canonical 40, noindex 25, Discovered 34, 404 23, dup 4, crawled 2, robots 1).
- Высокие показы / низкий CTR на поз. 7–12: ab-04-och-abt-06 (5 575 / 0,2 % / 11,6), berakna-betongatgang-platta (4 720 / 0,4 % / 7,4), reglar-dimensioner (3 260 / 0,4 % / 7,0), gipsskivor (1 478 / 0,1 % / 8,9) → новые title/description под реальные запросы (garantitid; vikt/säckar per kubik; reglar mått/cc-mått; gipsskiva mått/tjocklek/vikt).
- «Discovered – not indexed» 34 (17 sv): добавлены строки «Relaterat» в 6 сильных статей → egenkontrollprogram, kvalitetsplan-bygg, egenkontroll vatrum/tak/ventilation-mall, bemanningssystem-bygg, byggmotesprotokoll-mall, e-signering-avtal, signera-pdf, anbud-bygg, byggfelsforsakring, offert-vvs-elektriker-rormokare.
- Request Indexing не сделан: дневная квота GSC исчерпана → сделать 09.10 (ab-04, betong, reglar, gips + egenkontrollprogram, bemanningssystem-bygg, kvalitetsplan-bygg, anbud-bygg, e-signering-avtal, entreprenadkontrakt-mall).
- Ещё видно: 3 «app»-гайда tidrapport (app-for-tidrapportering-bygg 3 852 показа поз. 18, tidrapportering-app-byggforetag 1 127 поз. 43) — каннибализация, решать ~20.10 по связке запрос×страница. Kvadratmeter/grus-kalkylator: CTR 0,1 % на поз. 9 — запросы анонимны.
NÄSTA: 09.10 Request Indexing (10 URL); ~20.10 сверка CTR этих 4 страниц и Discovered.

## 2026-10-07 — рассылки (маркетинг, без изменений кода)
- Мейлер: 4 черновика не отправлены — El A2 (396) / B2 (397) / Uppföljning A+B (561) / VVS – Stockholm (690). Ждут подтверждения «бесплатно без тарифа» и запуска. Подробно — ~/sites-hub/worklog.md HANDOFF 2026-10-07 (рассылки). Файлы лидов — OneDrive/byggexp-outreach (не в репо: персональные данные).

## 2026-10-06 (вечер) — проверка intent-фиксов + доработки (сессия alexandergerhard-61)
- Живой аудит 30 страниц intent-audit: 17 PASS / 12 PARTIAL / 1 FAIL → исправлено двумя партиями (строитель → критик → проверка):
  - A (e5682fb, 9d99b84): egenkontroll-mall открывается на «Bygg / Stomme» (PDF не пустой); общий ChipRow (10 инструментов, без 3-копийной карусели); betong без overflow на 390, пример 10×8×0,1 → 11,24 m³ «inkl. kantbalk och spill»; trappa 2700 мм → 16 steg (Math.ceil); примеры в OB/ackord/vite/reglar; ToolDownloads + StickyDownloadBar у MallToPdfTool (skyddsrond, byggdagbok…), дата = сегодня; вступления в 1 строку (текст перенесён ниже); чат-кнопка прячется на телефоне, пока инструмент на экране.
  - B (3ab39b3, 0ea6436): калькуляторы под быстрым ответом в OB/restid/ackord/vite/reglar; hydration #418 (formatDate без timeZone → Europe/Stockholm); мобильные крошки без последнего пункта; titles OB/semesterlön; факты: trappa (округлять вверх, 150–200 мм Byggtjänst), garantitid AB 04 vs ABT 06, ackord (Byggnads), traktamente 435 «vid övernattning»; с ab-u убран вводящий в заблуждение шаблон.
- Тарифные карточки (d129fc8, fcc2b03): строки → страницы функций, «*» раскрывает лимиты (против dead clicks Clarity 21%).
- Новая статья /sv/blog/basta-tidrapporteringssystem-bygg (54691b7, f851cc9): 8 систем, цены с сайтов вендоров (okt 2026), пример на 10 чел.
- Возврат посетителей (3d107e1, 10115da): 28 калькуляторов хранят значения в URL (useUrlState, валидация параметров, canonical без параметров) + кнопка «Kopiera länk»; 23 шаблона — черновики в localStorage (useDraft, ключи bx-draft:v1:*, сохраняется только после правки, Rensa чистит); фикс падения u-värde.
NÄSTA: через 1–2 нед. Clarity — dead clicks/quick backs; GSC ~20.10 — клики по статье-сравнению и OB/restid; идеи «чтобы возвращались»: значения калькуляторов в URL, черновики шаблонов, «Gör det i appen» после скачивания.

## 🟢 2026-10-06 (день) — «человек получает то, за чем пришёл» (live)
- Аудит топ-30 страниц GSC → `docs/seo/intent-audit-2026-10.md` (7 ок, 23 нет).
- Механизмы: `src/content/article-inline-tools.tsx` (`position: 'top'` = инструмент под H1) и `src/content/article-quick-answers.ts` (короткий ответ под H1 + источник). Обложка статьи ≤340px / 220px.
- Инструмент наверху: 11 статей (бетон, такстолы, лестница, golvvärme, армирование, tak, skyddsrond, entreprenadkontrakt, byggdagbok, kalkylprogram, hindersanmälan, arbetsberedning). Короткие ответы: 12 статей (OB, restid, AB-U, AB04, semesterlön, ackord, trappa, reglar, vite, hinder, moms lastbil, Boverket) — факты сверены, ошибки в статьях исправлены (OB-часы, traktamente 435, …).
- /verktyg: калькуляторы с примером и результатом сразу; дисклеймер только у калькуляторов и под инструментом; новый шаблон hindersanmalan-mall; arbetsberedning = полноценный шаблон (Byggföretagen Mall 2, 7 моментов).
- Инструменты: кнопки Excel/PDF сверху + снизу + полоска вместо шапки при прокрутке вниз (`StickyDownloadBar`); egenkontroll: Resultat dropdown Godkänd по умолчанию / Anmärkning / Tomt, Kommentar и Mätvärde в «⋯».
NÄSTA: проверить через 2–3 недели CTR/позиции этих страниц в GSC; GSC-токен обновить; byggdagbok-статья (CMS) H1 длинный; ab-04 и прочие B-статьи — можно добавить инструмент-сравнение.

## 🟢 2026-10-06 — 5 коммерческих запросов → топ-3 (P0 live)
- Deep research (живой google.se, AIO, PAA, аудит) → `docs/seo/commercial-top3-plan-2026-10.md`. Вывод: в топе продуктовые страницы, у нас блог; AIO цитирует нас 4/5, ссылок 0.
- Переписаны: byggdagbok, tidrapportering-entreprenad, mobil-tidrapportering, schemalaggningssystem-bygg, resursplanering-bygg (title/H1/meta, PAA-FAQ, цены, первоисточники). Удалён дубль byggdagbok (kvalitet.ts). Внутренние ссылки, диаграмма byggdagbok-krav (AFC.38). LCP: preload обложки. Индексация запрошена 06.10.
- Проверено по коду: НЕТ offline, Fortnox/Visma API (только SIE4/CSV), авто-OB по Byggavtalet, подписи/PDF/app у Dagbok, машин/UE/drag-n-drop в Planering. Ложные обещания убраны из статей. В бэкенде newsletter-template.ts всё ещё обещает «OB enligt byggavtalet automatiskt».
- Egenkontroll-инструмент: пилюли в 1 строку по кругу, пункты шаблона = плейсхолдеры, плейсхолдер пропадает при фокусе.
NÄSTA: P1 продуктовые страницы /sv/funktioner/resursplanering и /mobil-tidrapportering (новый шаблон); листинги BusinessWith/Programguiden/Systemkompassen (владелец); обновить GSC-токен (.gsc/gen_gsc_token.py); через 3–4 недели сверить позиции.

## 🟢 2026-10-05 — egenkontroll-страницы: форма сверху, баннер → консультация (live)
- 7 страниц egenkontroll: шаблон сразу под H1, после него `AiEgenkontrollBanner` (Avtal + Foton i appen = Egenkontroll, 3 шага, 2 строки «как работает»), кнопка **Boka demo** → `/sv/contact?amne=egenkontroll` (GA4 `egenkontroll_boka_demo`; в заявке «Ämne: egenkontroll»). Убраны «Slipp börja om», дисклеймер калькулятора и форма «hjälp vidare» (только на этих страницах).
- `EgenkontrollTool`: Titel никогда не префиллится (старые черновики с названием шаблона чистятся), Datum = сегодня, черновик только при реальном вводе, смена шаблона спрашивает; чипы без «Egenkontroll»; PDF/Excel/+punkt синие с иконками; Metod/Krav скрыты на экране (есть в PDF); бледные плейсхолдеры, больше воздуха.
- Контакт: sales@ → **kontakt@byggexp.se** (страница и чат-бот). Цветные Google Play / Mastercard. Поиск блога: при вводе чипы категорий скрыты — выдача сразу под полем.
- Рецепт картинок: Recraft `recraftv4_1_raster`, точный шведский текст в кавычках, «isolated on plain pure white background, no shadow» → removeBackground → обрезка по альфе (порог >40) → WebP; скриншот приложения — настоящий.
NÄSTA: не возвращать self-serve («Prova gratis») до решения владельца; превью PDF «El» на VVS-странице поправить; идея — короткий GIF процесса в баннере.

## 🟢 2026-10-04 — баннер AI-egenkontroll на 7 страницах egenkontroll (live)
- `AiEgenkontrollBanner.tsx` вместо общего ProductBanner (проп `productBanner` в LeadMagnetPage): «Egenkontrollen fyller i sig själv», визуальное уравнение Avtal + Foton i appen = Egenkontroll, кнопки «Prova gratis» (admin.byggexp.se/register?plan=egenkontroll) и «Boka demo».
- Картинки `public/landing/egenkontroll-ai/`: Recraft `recraftv4_1_raster`, фотореалистичные документы с точным шведским текстом в кавычках в промпте («Entreprenadavtal», «Egenkontroll» + строки), «isolated on plain pure white background, no shadow» → removeBackground → обрезка по альфе с порогом >40 (getbbox на RGBA не режет) → WebP. Скриншот приложения — настоящий (симулятор), фото объекта — Recraft.
- Владелец: минимум текста; 3D-иконки и телефон в перчатке НЕ подошли — нужен реализм «как фото».

## 🟢 2026-10-05 — /sv/enmansforetag переделана (live)
### KLART
- `src/pages/[lang]/enmansforetag.tsx` + `src/styles/enmansforetag.scss`: hero (картинка `public/landing/enmansforetag/hero-projekt-kvitton.webp`, типографика/отступы 1:1 с `components/Hero`), карусель benefits (`BenefitSlider`, иконки `public/landing/enmansforetag/benefits/*.webp` — перекраска card5–8 в зелёный), карусель функций на классах `components/Features` (`.features/.step/...`), lightbox по клику на скрины, карточка цены = разметка `components/Pricing` + `pricingTranslations` (`FAKTURA_PRICE`), колонка по центру.
- Ритм отступов: `--em-gap` 96px (≤900px 64px) — над/под каждой секцией одинаково.
- Админка: `SupplierInvoiceListPage.jsx` — колонки Totalt и Förfaller 2-я и 3-я.
### 🔜 NÄSTA STEG
1. Проверить enmansforetag на телефоне (390px).
2. Скрин hero: телефон на английском → заменить шведским.
3. Если нужны новые 3D-иконки (заметки, задачи) — Recraft из сессии nordkod/Armeringproffs.

## 🟢 2026-10-04 (вечер) — источник регистраций, GA4 sign_up, тёмная тема писем (live)
### KLART
- **Källa:** admin.byggexp.se (boot-скрипт в `app/layout.jsx`, `src/shared/signupSource.js`) запоминает UTM/referrer/landing в sessionStorage + читает `_ga`/`_ga_551T40R4WV`; форма регистрации шлёт `source`. API (`src/auth/signup-source.ts`) → `pendingRegistration.source` → `company.signupSource` + последняя кампания рассыльщика по email. Колонка «Källa» в Företag. Коммиты: backend 1fe946f, 434963f, admin 71d8402, b085e34.
- **GA4 `sign_up`:** `src/analytics/ga-measurement.ts` (Measurement Protocol, G-551T40R4WV), секрет `GA_API_SECRET` (GitHub secrets backend → .env при деплое).
- **Письма:** тёмная тема в `brandedHtml` (color-scheme, prefers-color-scheme + Outlook data-ogsc), белый лого `assets/email-logo-white.png`, текст кнопок по центру (78491f1).
- Сайт не ведёт на самостоятельную регистрацию (CTA = «Boka demo»); регистрации идут прямо на admin.byggexp.se/register (из писем, баннера egenkontroll, приложения).
### 🔜 NÄSTA STEG
1. Завершить тестовую регистрацию «Test Källa AB» (ждёт пароля владельца) → проверить Källa + GA sign_up → отметить sign_up ключевым событием в GA → удалить тестовую компанию.
2. Компании до 04.10 в «Källa» пустые — при желании бэкфилл совпадений с рассыльщиком по email.
3. Рассыльщик: снимок письма фиксируется при старте кампании; правки шаблона в идущую кампанию не попадают (можно обновлять снимок при «Продолжить»).

## 📍 СТАТУС (кратко)
Сайт в main/live (цены 26.09 уже на проде). Последняя сессия: **29.09 вечер — /contact, одно правило форм, Calendly, письма-лиды (бэкенд)**.
Продолжать с «🔜 NÄSTA STEG» верхних сессий. Архив до 24.09 → `docs/worklog-archive.md`. Индекс доков → `docs/README.md`.

## 🟢 2026-09-29 (вечер) — страница контактов, одно правило форм, Calendly, письма-лиды (live)
### KLART
- **/contact переделан** (последний коммит `7d670d3`): заголовок просто «Kontakt» (без маркетинга); слева форма, справа
  «Ring oss» (Kontor **+46 8 446 821 58** / Mobil +46 70 757 75 75, часы) + «Mejla oss» (sales@, support@; press@ убран);
  ниже «Betalning & abonnemang» (3 шага: Prenumeration в админке → карта через Stripe → «Hantera prenumeration»,
  без bindningstid — всё сверено с админкой/pricing.ts) + отдельные карточки «Mobilappen» (App Store/Google Play) и
  «Videor» (YouTube). Реквизиты внизу 2×2 без повторов: «Kontor i Sverige» / «Bolagets registrerade adress».
  Порядок: форма+контакты → оплата/приложение/видео → тёмный «Så går det till» (3D-иконки как на главной) → FAQ → реквизиты.
- **Одно правило для ВСЕХ лид-форм** (`src/lib/leadForm.ts`: `isValidContact`, `validateContactLeadForm`,
  `buildContactLeadPayload`): 2 поля «Namn / företag» + «Telefon / e-post» (почта или ≥7 цифр), разделитель «/» везде.
  Главная CTA и Kontakt. Только телефон → в API уходит f-email `ej-angiven@byggexp.se`.
- **Calendly сразу:** кнопка «Välj tid för demo» в карточке «Ring oss» + строка «Hellre boka direkt? Välj en tid i
  kalendern →» под формой — popup (`CalendlyPopupModal` в `CalendlyInlineWidget.tsx`). После отправки формы — как раньше.
- **Бэкенд `ba8b11a`** (ByggExp-BackEnd, live): письмо о заявке больше не пишет «byggexp.se/ru» — берёт `f-source`
  (реальная страница) и добавляет `f-message` (раньше текст «Berätta mer» терялся из-за whitelist DTO).
- Контакты: 8 иконок карусели главной (зелёные/синие, «Кто сегодня на объекте» вместо «контроль»), OG-обложка
  `og-cover.jpg`, мета-описания 10 языков — см. записи 27.09.
- Подпись kontakt@byggexp.se (Roundcube): лого + имя + тёмно-синие ссылки; новый номер 08-446 821 58 в подпись ЕЩЁ НЕ добавлен.

### 🔜 NÄSTA STEG
1. Calendly: встреча «30 Minute Meeting», а на сайте «демо 15 минут» → либо поменять событие в Calendly на 15 мин, либо тексты на 30.
2. «2 veckor gratis» (в оплате на /contact и в pricing): проверить, что клиент реально может сам запустить триал в админке; если нет — убрать в обоих местах.
3. Подпись kontakt@byggexp.se: добавить 08-446 821 58 (нужно войти в Roundcube под kontakt@).
4. API: сделать `f-email`/`f-phone` необязательными (одно из двух) и убрать заглушки `ej-angiven@byggexp.se` / «Ej angivet».
5. Кнопка «Boka demo» в шапке → сразу Calendly-popup (обсуждали, не сделано).
6. Команда на /contact: только реальные люди с фото (владелец против выдуманных людей НЕ решил окончательно; блок с «Grundare» убран — основатель не «ресепшен»).
7. Правила из сессии: никаких слоганов на /contact; одно правило для форм; превью (скриншот) перед выкладкой крупных дизайн-правок.

## 🟢 2026-09-29 (день) — контакты, hero ноутбук+телефон, мокап для объявлений (live)
### KLART
- `afc6e65` /contact: блок «Företagsuppgifter» — заголовок/лого/текст по центру, таблица реквизитов в 2 колонки (≤900px — одна).
- `d8ac4a1` Hero главной: ноутбук `landing/features/9ekonomi-1200.webp` (+2400w srcset) + телефон `phone-3d.webp` поверх левого нижнего угла, как на OG-картинке. Мобайл: ноутбук 100% ширины. Файлы `Hero.tsx`, `Hero.scss`.
- Мокапы для объявлений (локально на Desktop, не в репо): `byggexp-mockup-laptop-phone.png` (прозрачный), `-dark.png`, `byggexp-mockup-white-HD.jpg` (2705×1528), `byggexp-mockup-white-590/1180.jpg`, `byggexp-annons-590.jpg` (с текстом RU — владелец не просил, не использовать без спроса).
- sweden4rus.nu ужимает картинку объявления до **590×338** → мелкий текст дашборда там не читается при любом исходнике.
### 🔜 NÄSTA STEG
1. Проверить hero на проде (десктоп + телефон), что ноутбук не режется справа на ~1280px.
2. Аутрич: CSV реестров → xlsx (см. сессию «аутрич: реестры собраны» ниже) → волна после SV-1; SV-текст ждёт «ок».
3. GA4-конверсия заявки; решение по ревизии /sv/verktyg (16 на удаление).
### ⚠️ Ждёт
- Владелец: какую картинку оставить в объявлении sweden4rus (HD-мокап vs вариант с текстом).

## 🟢 SESSION 2026-09-29 — SEO egenkontroll (GSC)
### KLART
- ✅ `af61885` egenkontroll-artiklar länkar till specifika mallar (el → egenkontroll-el-mall, entreprenad → egenkontroll-bygg-mall).
- ✅ `9b73572` ny artikel /sv/blog/egenkontrollprogram (hub för "egenkontrollprogram (mall/bygg/el)").
### 🔜 NÄSTA STEG
1. ~13.10: GSC egenkontroll-klustret mot `~/sites-hub/audits/2026-09-29/gsc-snapshot.md`.
2. GSC-token: `cd .gsc && ~/.gsc-venv/bin/python gen_gsc_token.py` (ägaren, Terminal.app) + OAuth-app → In production.

Единый файл «что сделано / что дальше», чтобы не начинать заново. Обновлять сверху.
Деплой: push в `main` → GitHub Actions → VPS (~1–2 мин). Юзать **yarn** (не npm). Node 20 на проде.

---

## 🟡 2026-09-29 — аутрич: реестры собраны (следующая волна после SV-1)
- Собраны реестры: GVK 775 фирм · Säker Vatten 2246 · Elsäkerhetsverket 15 140 (8269 с email). BKR — нет (robots.txt запрещает ботов Anthropic; запрос выгрузки `~/Desktop/byggexp-outreach/BKR-forfragan.txt`). Черновик SCB — `SCB-forfragan.txt`.
- CSV пока во временной папке сессии Claude — путь и команда переноса в `~/sites-hub/worklog.md` HANDOFF 2026-09-29. В репо НЕ класть (персональные данные).
NÄSTA: перенести CSV → свести в xlsx (Тип / дубли с Platsbanken / убрать .no) → волна после SV-1.

## 🟢 2026-09-28 (ночь) — почта на Brevo, аутрич SV-1, отчёт по работнику
- Системная почта (API) не уходила (535) → переведена на Brevo SMTP, byggexp.se аутентифицирован (DKIM/brevo-code, одна DMARC). Детали и дата истечения ключа (28.09.2027) — RUNBOOK бэкенда «Outgoing mail (Brevo)».
- Аутрич: `docs/seo/outreach-mail-templates.md` — актуальные RU v1 + SV v1 (Platsbanken, UTM outreach-sv-1), старые шаблоны = архив. База: лист «Platsbanken SV-1» в xlsx на Desktop.
- Бэкенд `03d38b6`: Dagens rapport снова возвращается в приложение; экспорт смен с листом «Per project». Админка: Часы → Экспорт → «Excel per employee (all projects)».
NÄSTA: «ок» на SV-текст → отправка; монитор на сервер; см. `~/sites-hub/worklog.md` 2026-09-28 (ночь).

## 🟢 2026-09-28 — ручной ввод часов на сайте, контакты, инструменты, OG v4 (live)
- «Автоматически по GPS ИЛИ вручную в приложении» (сверено с кодом: worker ставит manual-hours в приложении, manual перекрывает GPS за день; админ не правит чужие manual): статья automatisk-tidrapportering-och-export (5 яз., блок `eco-note` «GPS eller manuellt» после вступления), 11 sv + 6 nb статей про тид/stämpelklocka, FAQ sv/en, om-oss, tidrapport-mall, промпт чат-бота, карточка Benefits card5 (10 яз., иконка = секундомер). Не трогали: personalliggare/närvaro (там нужна отметка), GPS на фото, юр. страницы.
- FeatureNav: маска-затухание краёв ленты пилюль (`data-more-left/right`).
- Контакты: лого `logo-dark.svg` вместо заголовка, офис Ekbacksvägen 32, 168 69 Bromma (+ 6 юр. страниц, Organization schema), Säte (Братислава) последней строкой.
- Инструменты: убран дубль заголовка/подзаголовка внутри карточки у 27 шаблонов/PDF (16 компонентов LeadMagnet, в т.ч. MallToPdfTool); калькуляторы не затронуты.
- OG: `og-cover-v4.jpg` (синий секундомер card5, зелёный календарь card1, card3 перекрашен в синий по палитре card5); старые имена отдают ту же картинку. Кеш Telegram — @WebpageBot.
NÄSTA: аутрич — см. `~/sites-hub/worklog.md` 2026-09-28 (вечер); GA4-конверсия заявки для атрибуции.

## 🟡 2026-09-27 — аутрич: база строительных и клининговых фирм
Файл (локально, не в репо — репо публичный): `~/Desktop/byggexp-outreach/ByggExp_leads_Sverige.xlsx` — Platsbanken Bygg 797 / Städ 489 фирм (JobTech API, по org.nr), sweden4rus.nu (RU) 76, poloniainfo.se (PL) 77, «Все email» 1398.
NÄSTA: сегментация по SNI/сотрудникам/Stockholm через SCB + Bolagsverket (бесплатно, нужны доступы); шведская/польская версия письма; детали — `~/sites-hub/worklog.md` 2026-09-27.

## 🟢 2026-09-27 (вечер) — иконки v2, карточка «кто на объекте», описания, бейджи (live)
- Все 8 иконок карусели — «композиции» (`cd20939`, `c3950d1`): зелёные 1–4 (календарь+часы, таблица XLS, телефон+колокол,
  список людей с отметками+каска), синие 5–8 (телефон+секундомер, чек-лист без звонков, папка+фото+камера, колокол+аватары).
  Цвет подгоняется ПОСЛЕ генерации под #45B36B / #2394FF по hue+saturation+value (скрипт `match` в scratchpad; Recraft сам уводит в мяту/фиолет).
- Карточка 4 (`d71f120`): НЕ «контроль/где работает» (звучит как слежка, и мы не знаем точку — только чек-ин в радиусе площадки).
  Теперь «Кто сегодня на объекте / Vem är på plats idag» во всех 10 языках, иконка без метки на карте.
- Бейджи: «Для руководства / Для бригады» (и аналоги во всех языках).
- Мета-описания главной (`77bd268`, все языки): время, журнал персонала, планирование, КП и выставление счетов, зарплаты, экономика проектов.
- `og-default.jpg` возвращён как копия `og-cover.jpg` (кешированные превью /ru показывали пустое поле). Превью обновлять через @WebpageBot.

NÄSTA: при желании перегенерировать card5 (секундомер вышел контуром); обновить превью /ru, /sv через @WebpageBot.

## 🟢 2026-09-27 (день) — логотип, «Priser», превью ссылок (`5e93911`, `35665f1`, `a8e1a45`, live)
- Логотип на главной → плавно наверх и убирает `#pricing` (раньше на `/sv#pricing` ничего не происходило). `Header.tsx` goHomeTop.
- «Priser» на главной: закрывает мобильное меню, скроллит к переключателю Per månad/år и перепроверяет (скриншоты фич догружаются и сдвигают блок ~155px). Десктоп: `#pricing` scroll-margin 92px (шапка 80px).
- OG-картинка: `og-default.jpg` был размытым логотипом → новый `public/og-cover.jpg` (навигация+свечение, лого, дашборд, телефон, 3D-иконки; без текста — для всех 10 языков). Telegram-кеш обновлён через @WebpageBot для /uk.

NÄSTA: при желании обновить превью /sv, /en через @WebpageBot; hero — реальный скриншот (по исследованию).

## 🟢 2026-09-27 — 3D-стеклянные иконки на главной (`50870dc`, `830a047`, `90c9203`, live)
Исследование стиля (deep research): для B2B SaaS главный визуал — реальный UI, Recraft — только иконки/акценты; claymorphism (как nordkod) не для ByggExp.
- Карусель «Vad får ni…» (`Benefits.tsx`): 8 стеклянных 3D-иконок вместо линейных SVG — card1–4 зелёные (руководство), card5–8 синие (бригада). `public/landing/benefits/card*.webp`.
- «Sammanfattningsvis får du» (`FinalBenefits.tsx`): секундомер, молния, команда, щит — `public/landing/final-benefits/*.webp`.
- Цвета строго фирменные: синий `#2394FF`, зелёный `#45B36B`. Recraft даёт фиолетово-синий/мятный → перекрашено сдвигом hue (PIL HSV, без numpy), не перегенерацией.
- Рецепт: Recraft `recraftv4_1_raster`, промпт «Single chunky 3D object: … frosted translucent glass, visible thickness, beveled edges, inner glow, rim light, three-quarter isometric, **no reflection, no floor, no shadow**, solid navy bg, no text» → remove_background → обрезка по alpha → 256px WebP (10–19 КБ), `loading=lazy`. Без «no reflection» остаётся тёмное отражение после удаления фона.
- Потрачено ~64 кредита Recraft. Фоны и схема «Så funkar det» сгенерированы, но владелец их НЕ хочет.

NÄSTA: если владелец пришлёт другие блоки с линейными иконками — тем же рецептом. В hero по исследованию лучше реальный скриншот приложения (не делалось).

## 🟡 2026-09-26 (вечер) — ревизия инструментов /sv/verktyg (ждёт «ок»)
Отчёт: `~/sites-hub/audits/2026-09-26/byggexp-verktyg-research.md` (GSC 90 дн + Keyword Planner + скачивания).
Предложено удалить 16 (8 PDF-утилит, tapet/färg/golv/isolering/spillprocent, moms, förseningsvite, betalningspåminnelse) с 301; усилить egenkontroll, takstolar, CTR betong/grus/kvadratmeter, offert/faktura/tidrapport-mall, schema/gantt.
⚠️ Хаб сейчас показывает все 64 (правка 26.09) — владелец раньше не хотел «беспонтовые»; привести в порядок после решения.

## 🟢 2026-09-26 — SEO-аудит: технические фиксы live (`ba81258`)
Аудит всех сайтов → `~/sites-hub/audits/2026-09-26/` (byggexp-audit.md). Исправлено и проверено на live:
- Пустой SSR `<title>` на /[lang]/blog и /[lang]/funktioner (смешанные JSX-дети) → строка-шаблон.
- /[lang]/contact: title «Kontakta ByggExp – boka gratis demo», description, canonical, hreflang, OG.
- Хаб /sv/verktyg: все 64 инструмента (22 не было; schema-mall была сиротой) + ссылки на schema-mall из schemalaggning-bygg / schemalaggningssystem-bygg.
- /blog и «Liknande artiklar» передают в props только поля карточек: /sv/blog 3 МБ → 292 КБ, статья 109 → 46 КБ.
- Главная: hero `fetchPriority=high` + размеры; скриншоты фич — копии 1200w (`*-1200.webp`, 1,37 МБ → 457 КБ) с alt и lazy; SoftwareApplication (lowPrice = `FAKTURA_PRICE` из Pricing).
- quill CSS только в админ-редакторе; `<html lang>` по локали маршрута; www → apex 301 (middleware); `/` → `/sv` 308.
- Organization: legalName RealMar AB, адрес Bromma, sameAs YouTube, logo = icon-512.png; og:image = `/og-default.jpg` 1200×630 (было logo.png 1 МБ).
- sitemap: дедуп `<loc>` (было 37 дублей); 6 старых ошибок lint исправлены.

NÄSTA (из аудита, не сделано): продуктовые лендинги /sv/funktioner/{tidrapportering,planering,projekthantering} под «system»-ключи (сначала GSC: какой URL ранжируется); перелинковка 50 статей без входящих; длинные description (91 > 160); hreflang калькуляторов sv↔en/nb; неиспользуемые тяжёлые файлы в /public (bg1.jpg, team*.jpg, *.eps) — спросить владельца.

## 🟢 2026-09-26 — страница цен: новые пакеты live
- Пакеты Faktura/Projekt/Komplett (299 / 690 вкл. 10 + 69 / 990 вкл. 10 + 119), год −15%, пробный 2 недели, карусель на мобиле. Пилюли — вариант B «Koll på pengarna / Koll på jobbet / Full koll».
- Варианты для A/B-теста сохранены в `docs/marketing/pricing-ab-tests.md` (вариант A — следующий кандидат).

## 🟡 2026-09-26 — пробный период = 2 недели
- Владелец: пробный период **2 недели со всеми функциями**. «Первый месяц бесплатно» заменён на «2 недели» в hero (10 языков), сноске цен (10 языков), FAQ (sv/en) и AI-чате. Ветка `claude/zealous-bohr-6rhqv5`, не main.

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

---

## 2026-09-26 — Funktioner + pris-pillen
- Priser: "Funktioner anpassade…"-pillen står nu mitt i kortets lediga yta (lika avstånd till listan och knappen).
- Funktionssidor: "Liknande artiklar" visar bara andra funktionssidor.
- Nya offert/faktura-bilder (fakturera-fran-byggexp-doc.webp, skapa-offert-i-byggexp-doc.webp) renderade från backendens PDF-mallar; fakturan = ägarens egen bild (Nordström Bygg AB, Faktura 2041, 594px — byt mot högre upplösning när den finns), offerten med samma logga och sidfot.
- Färger på planerna (variant B): Koll på pengarna blå, Koll på jobbet lila, Full koll grön (mjukgrön ram som taggen, "Mest valt"); pillen "Funktioner anpassade…" blå.
- Nästa: ev. flytt /blog/<slug> → /funktioner/<slug> med 301.

## 2026-09-26 — Slutkarusellen
- "Vad ni får"-karusellen: egen ikon per kort (klocka, blixt, team, sköld med bock) i stället för samma sköld.
- Priser: Koll på pengarna — "*" på fakturor och skanning + not "Upp till 30 utgående fakturor och 100 skannade kvitton/fakturor per månad. Behöver ni mer? Vi hittar en lösning." (10 språk). Endast text; ingen spärr i backend ännu (beslut väntar).
- Priser: fotnoten under paketen (användare/moms/provperiod) borttagen på ägarens begäran; texterna ligger kvar i locales.
- Priser: raden under knapparna = "14 dagar gratis med alla funktioner" (10 språk), ersätter "Kom igång på 5 minuter". Moms nämns inte (ägarens beslut).
- Mobil: "Vad får ni…"-slidern var bredare än skärmen (flex align-items:center lät containern växa till hela spåret) – fixat med width:100%/min-width:0. Pilarna i sliders ligger nu under kortet på dot-raden på telefon.
- Favicon: appikonen (byggexp-app/src/assets/icon.png) → favicon.ico (16/32/48, rundade hörn), icon-192/512.png, apple-touch-icon.png; länkar i _document.tsx.
- Priser: Koll på pengarna — ny punkt "E-postadress för skanning av inkommande fakturor*", "Inköpsfakturor och utlägg" borttagen (enligt ägarens tabell). Noten flyttad under korten: 30 utgående + 30 inkommande fakturor + 100 skannade kvitton/mån (10 språk).
