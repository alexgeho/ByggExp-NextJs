# ByggExp — рабочий лог (продолжать отсюда)

## 2026-10-20 — Ny startsida: hero, block och avstånd (live, sv)
- Hero (HeroV2, sv): mörk foto-hero; bild kontor (kvinna bakifrån, skärm = projektekonomi) + bygget (arbetare med app, kant 1px). Badge «Byggledning», rubrik «Hela byggföretaget på ett ställe».
- Prisrader: «299 kr/mån – …» och «+69 kr/arbetare – …», hela listan bakom «läs mer» (en rad var; «visa mindre» tätt mot sin lista). Lagt till: skanning av kvitton och fakturor (299) och skanning av kvitton med mobilkameran (69) — ägaren bekräftat, i product-facts-verified.md.
- EN blå knapp «Kom igång gratis» (Boka demo borttagen ur hero). Trust: «14 dagar gratis · Ingen startavgift · Gratis flytt av data» (flytt = ägaren bekräftat).
- App Store + Google Play-märken: mobil i kollaget (40px från kontorsfoto och arbetarfoto, nederkant = arbetarfotots), desktop under trust-raden.
- Block: «Full kontroll» flyttad in i karusellen «Spara tid» (12 kort, alla: ikon vänster, eyebrow + rubrik + underrubrik höger; 4 nya underrubriker på 10 språk, fi/et/lt/lv bör granskas). Priser: hela blocket mörkt (glaskort), rubrik «Tre paket – ingen bindningstid» (accent efter tankstreck, alla språk). Boka demo-blocket ljust.
- Designregler: R7 (hero mobil topp 42px), R8 (sektion 60px överallt, token --ds-section-pad; rubrikens bokstäver på 60px via text-box-trim), R9 (hela hero-mobilschemat). R4: bakgrunder hero → ljus → navy (priser) → ljus → navy → ljus.
- Gjutabetongplatta.se: steg-bilder cache-busting ?v=3 (gammal bild 3 låg i webbläsarens cache).
NÄSTA:
1. Kolla startsidan på riktig iPhone + Firefox (text-box-trim saknas i Firefox → rubriker ~6px lägre).
2. Infografik för trust-raden (förslag: 3 «stat-plattor» ikon + stor siffra) — ägaren har inte sagt ja än; variant till Desktop först.
3. Låta svensk (Johan) granska nya texter: underrubriker i karusellen, «Gratis flytt av data», «skanning av kvitton med mobilkameran».
4. Jämför före/efter (GA4/Clarity) för nya startsidan — gamla finns på tag startsida-v1 och /sv?v=old.
5. Kvar från tidigare: YouTube-paketering (kräver «да»), admin-trailer (ren demo-företag behövs), EN faktura-tutorial, 9:16-reklam, musik.
Skärmdumpar/varianter: ~/Desktop/ByggExp-startsida-varianter.

## 2026-10-19 — Рассылки: итерация 1 закрыта, итерация 2 через цену
- Электрики Стокгольма: 1 391 фирма / 1 951 письмо, 55% открытий, 26 ответов, 2 интереса, 0 регистраций; 9 из 26 уже с другой системой (Bygglet, Mowin, Softone, своя).
- Отчёт GTM-трекинга + карточка «Итерация 2» готовы (Desktop).
- Новый посыл: «у вас уже есть система, но платите за пользователя — ByggExp 690 kr/мес до 10 польз.»; без имён конкурентов в массовой рассылке.
NÄSTA: «ок» владельца → текст в кампании VVS (690, пауза) → запуск; фоллоуап A2/B2 (670); затем El/VVS вне Стокгольма.

## 2026-10-19 — SMM-старт, видео-пайплайн, дизайн-система (HANDOFF)
- Соцсети: FB-страница (id 61595288321379), LinkedIn company/byggexp, YouTube — обложки (design-assets/social/covers), ссылки, описание; футер сайта: YouTube/FB/LinkedIn (4dfa8ca). Посты: 3 вышли, 6 отложены (FB ср/пт 07:00, LinkedIn вт–пт 07:30). 10 FB-групп.
- Дизайн-система сайта: DESIGN-SYSTEM.md + src/styles/design-system.scss (R1 равные панели, R2 отступ 20px) — на все калькуляторы.
- Видео: design-assets/social/shorts/faktura/ — analyze.py (паузы+тапы) → script_sv.json → TTS Malin → make_video.py (туториал) / make_ad.py (15 с). Готово: ~/Desktop/SMM/onboarding/faktura-sv.mp4, ad-faktura-15s.mp4. Правило S12: не ускорять видео.
- iOS-симулятор: Xcode 27.1 → Device Hub, сборка через xcodebuild (команда в docs/marketing/smm-status.md).
NÄSTA: EN-туториал (script_en.json), 9:16 реклама, музыка (Music-доступ ключа ElevenLabs), Instagram (владелец), LinkedIn-инвайты (владелец). Полный статус: docs/marketing/smm-status.md.

## 2026-10-12 — Svensk språkgranskning (live) + ny mejlsignatur
- Språkgranskning (AI) av startsida, /funktioner, om-oss, faq och 11 funktionsguider: ~60 rättelser (27dfd5e). DeepL Write stöder inte svenska.
- Grundproblemet: eyebrow borttagen, rubriken läses «80 % **av företagen** förlorar pengar …» (bara sv; övriga språk oförändrade).
- Mejlsignatur (Roundcube alexander@byggexp.se): ikon 62px + «Rådgivare, ByggExp.se» + 070-757 75 75 · 08-446 821 58.
- Johan (svensk, svåger) ombedd att granska igen – hans rättelser in när de kommer.
NÄSTA: Auto-påminnelser-sidan + /verktyg språkgranskning; em dash (—) → svenskt tankstreck (–); ny hero (gren ny-startsida) väntar fortfarande på val dark/dark-center.

## 2026-10-11 (kväll) — Ny hero på testsida (gren `ny-startsida`, INTE live)
- Ägaren valde mockup Hero 2 → byggd som `src/components/HeroV2` + testsida `/sv/ny-startsida` (noindex, bara sv). Grenen `ny-startsida` är pushad men INTE mergad – main/live orörd.
- Rubrik «Hela byggföretaget på ett ställe» (inte «i en app» – vi är mer än app). Pris i 2 rader: «299 kr/mån – offerter, fakturor, löner, kvitton, …» / «+ 69 kr per arbetare – tidrapport, planering, närvaro, egenkontroll, …».
- 4 layoutvarianter via `?v=`: center / split / **dark** / **dark-center**. Ägaren behåller **3 (dark)** och **4 (dark-center)** – fortsätter 2026-10-12. Skärmdumpar: ~/Desktop/ByggExp-mockups/Test-varianter.
- Header fortfarande mörk (sajtens globala) – ljus header ej gjord.
NÄSTA (12.10): `git checkout ny-startsida && yarn dev -p 3123` → http://localhost:3123/sv/ny-startsida?v=dark och ?v=dark-center → ägaren väljer 3 eller 4 → ta bort övriga varianter → block under hero → «ok» → merge till main.
OBS före live: prisraden matchar inte /priser (där 69 kr bara i 690-paketet över 10 användare, egenkontroll eget paket 49 kr) – prismodellen/Pricing.tsx måste stämma. «Kom igång gratis» → admin.byggexp.se/register.

## 2026-10-11 — Startsida: mockups (inte byggt)
- 3 helsidor (A foto-hero, B ljus, C pris först med kalkylator) + 4 hero-varianter med dator+mobil+folk. Allt i docs/design/startsida-mockups-2026-10/ (README, HTML, skärmdumpar) + canvas https://claude.ai/artifact/T1i1XP5UuNfLrD8W9nFe8S.
- Ägaren valde **Hero 2** (ljus, centrerad). Prisrad enligt ägaren: «Från 299 kr/mån för hela företaget + 69 kr per arbetare» / «299 = fakturor & ekonomi · 69 = tidrapport i appen» (matchar inte dagens Pricing.tsx: 69 bara i 690-paketet över 10 – stäm av före live). Helsida under hero ej vald.
NÄSTA: ägarens val → bygg på stage → «ok» → live (riktig registrering, generate_lead, en GA-tagg).

## 2026-10-10 — Landningssida: 80 % och 60 % återställda (live)
- «80 %» i Grundproblemet (d835c25) och «eliminerar 60 %» i funktionsrubriken, alla 10 språk (3afc136), återställda — de togs bort 08.10 (1af3bb4) utan ägarens ok. Antal verktyg räknas fortfarande från kortlistan ({n}).
- Öppet: «SEK / företag / månad» (också ändrat 08.10) — ägaren bestämmer.
- Regel: ändra/ta aldrig bort ägarens siffror/texter utan att fråga.
NÄSTA: GSC Request Indexing 10 URL (försenat, se 2026-10-08); ny startsida på stage (se 2026-10-10 Analys).

## 2026-10-10 — Analys av utskicken + sajtens konvertering
- 2 320 mejl → 47 % öppnat → 48 klick → 21 svar → 1 intresserad → 0 registreringar. E-postbesök ~10 s, alla mobil (Clarity).
- Orsaker: ingen registrering på byggexp.se (alla CTA → demoformulär), mejlet lovar «gratis utan tidsgräns» men sajten visar «14 dagar» + priser, ingen länk i mejlets brödtext, demoformulärets success skickar inget GA-event, två GA-taggar (G-551T40R4WV, G-GGT1EWGRCR).
- Plan: ny startsida (stage först): hero med människor + «Kom igång gratis» + «från 299 kr/mån för hela företaget» → priser → kalkylator → 3 funktioner → omdömen → slut-CTA. Inga konkurrentnamn på sajten (ägarens beslut). Full rapport: ~/OneDrive/byggexp-outreach/analys-rassylki_2026-10-10.md.

## 2026-10-08 — Utskick (mailer): ny påminnelse + A2/B2
- «El – Uppföljning A+B» avbruten vid 101/561 (ägaren ville ha annat slut). Ny «El – Påminnelse (samtal)» till 459 som inte fått uppföljningen: ämne «Påminnelse: tidrapporter hos {{företag|er}}», slut = samtal 15 min.
- «El – A2 (kort)» 396 och «El – B2 (lista)» 397 skickas. Avsändare ByggExp (Brevo) 500/dag, 50/h, sändfönster AV. VVS (690) utkast.
- Nästa: följ svar (alexander@tidrapportapp.se), starta VVS efter ägarens ok, överväg sändfönster 08–17.

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
