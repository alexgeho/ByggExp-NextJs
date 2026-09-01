# Cold Email Outreach — Setup & Runbook

Рабочий документ по холодной email-рассылке от ByggExp. Обновляется по ходу.
Последнее обновление: 2026-09-01 (вечер).

**Связанные доки:**
- Шаблоны писем (тема/тело/фолоуапы, RU+SV, Вариант A/B) — `docs/seo/outreach-mail-templates.md`
- GTM-карточка (гео/база/хук/оффер) — `docs/seo/gtm-card-byggexp.md`

## Цель

B2C/B2B аутрич по шведским строительным/эл-фирмам → показать ByggExp
(tidrapportering, digital personalliggare/ID06, offert & faktura) → демо → продажа.

Методология взята из шпаргалки по email outreach (`~/Downloads/Outreach.pdf`),
структура письма: **Хук → Выгоды → Про нас → Оффер и CTA**, писать на триггер,
ссылку в первом письме не прикладывать (спам-риск).

## Ресурсы

- **База лидов (Google Sheet):** `byggexp-leads-1646`
  https://docs.google.com/spreadsheets/d/1FL5vEARm8GHHM5Yc0_cZqudw7VjZ2Kg89MyWSzgV2vA/edit?gid=1766802001
  Колонки: namn, kategori, ort, adress, telefon, webbplats, email, betyg, antal_omdomen, sokstad, kalla.
  Сейчас: электрики (kategori=El) Stockholm, источник google_places.
- **Шпаргалка:** `~/Downloads/Outreach.pdf` (этапы + инструменты по каждому шагу).
- **Почта для отправки:** Roundcube (Inleed) — https://prime6.inleed.net/webmail/
  Ящик `alexander@byggexp.se`.

## Что уже сделано ✅

### Почтовый ящик / подпись (Roundcube, alexander@byggexp.se)
- Identity id = **3311**, `Sätt som förval` = вкл.
  - Namn: `Alexander Gerhard`
  - Organisation: `ByggExp`
- **Убрана авто-черта `--`** перед подписью:
  Inställningar → Meddelandehantering → «Använd alltid avdelare enligt standard i signaturer» = ВЫКЛ.
- **Формат писем = HTML всегда:** «Skriv meddelanden i HTML-format» = `Alltid`.
  (Иначе HTML-подпись показывалась бы сырым кодом.)
- **HTML-подпись с логотипом**, порядок:
  1) Med vänliga hälsningar,
  2) **Alexander Gerhard**
  3) Rådgivare, ByggExp
  4) +46 70-757 75 75  (кликабельный tel:)
  5) логотип BYGGEXP (в самом низу)
  Цвета: navy `#0f2350`, приглушённый `#5b6b86`. Флаг `_html_signature=1`.

### Второй ящик — outreach-домен (2026-09-01)
- **alexander@tidrapportapp.se** — отдельный домен под рассылку (защищает byggexp.se).
  Roundcube identity id = **3314**. Та же HTML-подпись (логотип внизу), HTML=Alltid, `--` убрана.
  Логин в Roundcube — отдельный (prime6.inleed.net/webmail, логин = alexander@tidrapportapp.se).
- **Email-аутентификация домена (DNS в панели Inleed, login.inleed.net/domain/169915):**
  - SPF ✅ (Inleed авто, `v=spf1 ...inleed... ~all`)
  - DKIM ✅ (Inleed авто, `default._domainkey`)
  - DMARC ✅ добавил вручную: TXT `_dmarc` = `v=DMARC1; p=none; rua=mailto:alexander@byggexp.se`
    (режим мониторинга; позже ужесточить до `p=quarantine`)
  - A-запись домена → 188.66.60.20 (сервер Inleed, парковка). Веб-хостинга нет.
- **Редирект tidrapportapp.se → byggexp.se — НАСТРОЕН (2026-09-01).**
  Домен оказался на веб-хостинге Inleed (DirectAdmin, prime6.inleed.net:2222/evo).
  - Site Redirects: `tidrapportapp.se/` → **301** → `https://byggexp.se` (создан ✅).
  - Для HTTPS нужен SSL на apex (был только на mail./smtp.). Включил ACME
    (SSL/TLS Certificates → ACME settings → Enable ACME, Let's Encrypt, wildcard),
    запустил **PROVISION NOW** для `tidrapportapp.se` + `*.tidrapportapp.se`.
  - ✅ Сертификат ВЫПУЩЕН (покрывает tidrapportapp.se + *.tidrapportapp.se, auto-renew).
  - ✅ ПРОВЕРЕНО: https://tidrapportapp.se → 301 → https://byggexp.se/sv, сайт открывается
    без ошибок сертификата. Редирект работает.

### Логотип для писем
- Исходный `public/landing/header/logo.svg` — БЕЛЫЙ, + SVG не рендерится в почте.
- Сгенерирована тёмная PNG-версия (navy `#0f2350`, прозрачный фон, 360×46) →
  `public/byggexp-logo-email.png` → задеплоена, живёт на
  **https://byggexp.se/byggexp-logo-email.png** (в подписи width=150).
- Ре-генерация: sharp-скрипт берёт path из logo.svg, заливает `#0f2350`.
  (см. коммит "assets: add dark PNG wordmark for email signatures".)

## Разбор базы лидов (2026-09-01) — ВАЖНО

Проанализировал весь Google Sheet (gviz HTML-экспорт). **База НЕ готова к рассылке как есть.**
- **Всего: 1646 компаний.** Источник: `google_places` (100%).
- **Категории:** El — 853, Snickeri — 793 (электрики + столяры, ~50/50). Не только электрики.
- **География: ВСЯ Швеция** (не Стокгольм): Stockholm 118, Uppsala 108, Örebro 103, Göteborg 99,
  Norrköping 99, Linköping 98, Malmö 97, Gävle 93, Helsingborg 88… (20+ городов).
- **Контакты:** телефон 1482 (90%), сайт 1344 (82%), **email 0 (0%!)**, рейтинг 1350.
- **Фильтра по качеству не было** (рейтинги любые, вкл. пустые/<4; отзывы любые, вкл. 0).
- **⚠️ Есть банкроты/неактивные** — пример: Schibler Elservice AB = «Konkurs inledd 2026-05-11»
  (виден на allabolag.se). Google Places про банкротства не знает.

**Вывод — база требует обработки ПЕРЕД рассылкой:**
1. Отфильтровать активные (проверка org.nr / статуса на allabolag.se; allabolag заодно = источник org.nr + «похожие»).
2. Обогатить email по сайтам (Hunter / Prospeo / Findymail / FullEnrich — из шпаргалки).
3. Валидировать почты (ZeroBounce / Millionverifier).

## Шаблон письма

Актуальные тема/тело/фолоуапы (RU+SV, Вариант A/B) — в **`docs/seo/outreach-mail-templates.md`**.
Текущий рабочий: Вариант B (короткий), тема `fråga om era elektrikerjobb` (A/B с `IT-tjänst för elföretag`),
demo 20 min i Teams, «allt i samma tjänst, webb + app». Подпись подставляется автоматически.

## ⚠️ Открытый риск / решение отложено

- Рассылка идёт с **корпоративного домена** byggexp.se + письма стали **HTML с картинкой**
  → повышенный шанс спама/промо-вкладки при массовой холодной рассылке.
- Выбор пользователя: «логотип во всё» (осознанно).
- **Если доходимость упадёт** — план: отдельная **plain-text identity** без логотипа
  специально под холодную рассылку, а красивую HTML-подпись оставить для тёплой переписки.
  Ещё лучше — отдельный домен для рассылки + прогрев (Instantly/Smartlead/Coldy.ai).

## Следующие шаги ⏭️

**Блок «база» (обязательно ДО рассылки — почт сейчас нет):**
1. [ ] Отфильтровать активные компании (org.nr / статус на allabolag.se; выкинуть банкротов).
2. [ ] Обогатить email по сайтам (Hunter / Prospeo / Findymail / FullEnrich).
3. [ ] Валидировать почты (ZeroBounce / Millionverifier).
4. [ ] Экспорт финального CSV `namn,email` (только валидные).

**Блок «отправка»:**
5. [ ] Канал: вручную 20–30/день с `alexander@tidrapportapp.se` (домен готов, SPF/DKIM/DMARC ✅),
   либо Instantly/Smartlead с прогревом для объёма.
6. [ ] 3 фолоуапа (см. outreach-mail-templates.md).
7. [ ] A/B тем: `fråga om era elektrikerjobb` vs `IT-tjänst för elföretag`.
8. [ ] Сегментация El vs Snickeri (разные хук-строки), город — для персонализации.
9. [ ] Трекинг: open 60–70%, reply ≥10%.

**Отдельная задача (SEO, не outreach):** починить 404/индексацию GSC — план в
`docs/seo/gsc-404-cleanup.md` (корень: литеральные `[lang]` в sitemap + en/ru локали).

## Прочее сделано в этой сессии (вне outreach)
- **Главная, карточка #9:** была подписана «документы», хотя картинка/ссылка про экономику →
  переписал на «Projektekonomi och lönsamhet» (sv/en/ru/nb), задеплоено.
- **GSC 404 разбор** (26 URL) — задокументирован в `gsc-404-cleanup.md`.

## Технические заметки (чтобы не искать заново)

- Roundcube identity сохраняется надёжно POST-запросом (UI-клики залипали):
  `POST ?_task=settings&_action=save-identity&_remote=1` с полями
  `_token, _iid=3311, _name, _email, _organization, _signature, _html_signature=1, _standard=1`
  (`_token` = `rcmail.env.request_token` на любой странице Roundcube).
- Клик по иконке-картинке в редакторе подписи запускает TinyMCE и подвешивает вкладку
  на несколько секунд — это не баг, просто инициализация; не паниковать.
- Проверка результата: открыть `?_task=mail&_action=compose` — подпись должна
  рендериться картинкой, а не HTML-кодом.
