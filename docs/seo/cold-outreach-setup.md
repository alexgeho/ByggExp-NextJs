# Cold Email Outreach — Setup & Runbook

Рабочий документ по холодной email-рассылке от ByggExp. Обновляется по ходу.
Последнее обновление: 2026-09-01.

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

## Шаблон письма (готов к использованию)

**Тема (выбрать одну, короткую и «скучную»):**
- `tidrapportering på jobben`
- `personalliggare + tid`
- `fråga om era elektrikerjobb`

**Тело** (`{{namn}}` → имя фирмы):

```
Hej {{namn}}!

Såg att ni jobbar som elektriker runt Stockholm och verkar ha bra fart just nu. Sköter ni tidrapporteringen och personalliggaren för hand / i Excel idag?

Frågar för att det brukar vara där timmar försvinner — man glömmer fakturera allt, och personalliggaren blir en stress när Skatteverket dyker upp på bygget.

Vi bygger ByggExp, ett svenskt verktyg för hantverkare: tidrapportering, digital personalliggare (ID06), offert och faktura i samma app. Byggt för el- och byggföretag, inte ett stort dyrt affärssystem.

Vill du att jag visar det på 10 min nästa vecka? Jag sätter gärna upp det åt er så ni bara kan testa.
```

(Подпись подставляется автоматически.)

**Фолоуапы (через день каждый):**
1. Hej igen! För ni tidrapporteringen digitalt redan, eller fortfarande papper/Excel?
2. Har ni testat att digitalisera personalliggaren någon gång, eller känns det som overkill?
3. Hur många är ni på bygget som mest? Kanske är det för tidigt — säg bara till så släpper jag det.

## ⚠️ Открытый риск / решение отложено

- Рассылка идёт с **корпоративного домена** byggexp.se + письма стали **HTML с картинкой**
  → повышенный шанс спама/промо-вкладки при массовой холодной рассылке.
- Выбор пользователя: «логотип во всё» (осознанно).
- **Если доходимость упадёт** — план: отдельная **plain-text identity** без логотипа
  специально под холодную рассылку, а красивую HTML-подпись оставить для тёплой переписки.
  Ещё лучше — отдельный домен для рассылки + прогрев (Instantly/Smartlead/Coldy.ai).

## Следующие шаги ⏭️

1. [ ] **Экспорт базы** из Google Sheet → CSV `namn,email` (только строки с валидным email).
2. [ ] **Валидация почт** (ZeroBounce / Millionverifier) — часть google_places email мусорные.
3. [ ] Решить канал отправки:
   - вручную по 20–30/день с alexander@byggexp.se (для старта ок), ИЛИ
   - Instantly.ai / Smartlead (Pro) с отдельным доменом + прогрев (для объёма).
4. [ ] Настроить **3 фолоуапа** в инструменте (или вести вручную).
5. [ ] Определиться с plain-text vs HTML identity (см. риск выше) — как пойдёт доходимость.
6. [ ] Расширить базу за пределы «электрики Stockholm»: другие kategori/город (Göteborg, Malmö).
7. [ ] Персонализация {{namn}} + возможный триггер (много вакансий / отзывы на картах).
8. [ ] Трекинг: open rate (цель 60–70%), reply (≥10%), бенчмарки из шпаргалки.

## Технические заметки (чтобы не искать заново)

- Roundcube identity сохраняется надёжно POST-запросом (UI-клики залипали):
  `POST ?_task=settings&_action=save-identity&_remote=1` с полями
  `_token, _iid=3311, _name, _email, _organization, _signature, _html_signature=1, _standard=1`
  (`_token` = `rcmail.env.request_token` на любой странице Roundcube).
- Клик по иконке-картинке в редакторе подписи запускает TinyMCE и подвешивает вкладку
  на несколько секунд — это не баг, просто инициализация; не паниковать.
- Проверка результата: открыть `?_task=mail&_action=compose` — подпись должна
  рендериться картинкой, а не HTML-кодом.
