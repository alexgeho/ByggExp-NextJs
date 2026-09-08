# Ретаргетинг / demand capture — план (byggexp.se)

Код-скелет готов (consent-gated, env-gated). Включается переменными окружения на проде — БЕЗ них ничего не грузится.

## Что уже в коде (in-repo, готово)
- `src/lib/analytics.ts`: `loadMetaPixel()` (fbq base + PageView), `loadGtm()`, `loadRetargeting()`.
- Загрузка ТОЛЬКО после согласия (ad_storage granted) и только на хосте `byggexp.se` — как Clarity.
- `gaEvent()` форвардит КАЖДОЕ событие в fbq (`trackCustom`) → аудитории строятся из тех же событий воронки без доп. проводки.
- Consent Mode v2 уже стоит (default denied), баннер вызывает `loadRetargeting()` на accept.

## ⛔ [OWNER] — нужны ID (иначе скелет спит)
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel ID (Meta Events Manager).
- `NEXT_PUBLIC_GTM_ID` — опц. GTM-контейнер (если LinkedIn/др. теги через GTM).
- LinkedIn Insight Tag / Partner ID — если нужен B2B-ретаргетинг (можно через GTM).
- Задать как repo variables → прокинуть в deploy workflow (как `NEXT_PUBLIC_CLARITY_ID`).

## События, которые уже летят (GA + fbq после включения пикселя)
| Событие | Где | Смысл для аудитории |
|---|---|---|
| `tool_view` | любая /verktyg (LeadMagnetPage mount) | смотрел конкретный инструмент |
| `cta_click` {action: trial\|demo} | CTA на tool/pillar | высокий интент |
| `tool_lead_submit` {tool} | ToolLeadForm submit | оставил email (лид) |
| `book_demo` | клик «Boka demo» | BOFU |
| `file_download` | скачал PDF/Excel-шаблон | MOFU-лид |

## Аудитории (Meta Custom Audiences) — дизайн
1. **Все посетители 180 дней** (базовая) → широкий ретаргет бренда.
2. **Смотрел инструмент, но не оставил лид** = `tool_view` БЕЗ `tool_lead_submit` (30–90 дн) → «доведи до шаблона/демо».
3. **Egenkontroll / KMA-сегмент** = `tool_view` где tool ∈ {egenkontroll-*, kvalitetsplan-mall, riskanalys} → офер по качеству/egenkontroll.
4. **AB04 / avtal-сегмент** = просмотр avtal/kontrakt-страниц → офер по контрактам.
5. **Калькулятор-сегмент** = `tool_view` где tool ∈ калькуляторы → «от кальк. к offert/faktura в ByggExp».
6. **Горячие** = `cta_click{trial}` OR `tool_lead_submit` (14–30 дн) → агрессивный клоуз (демо/триал).
7. **Скачавшие шаблон** = `file_download` → nurture-цепочка (email) + ретаргет «сделай это в приложении».

## Lookalike
- Сид = аудитория **6 (горячие)** + **7 (скачавшие)** + (когда будет) список покупателей/лидов из CRM → LAL 1–3 % Швеция.
- Апскейл: как только наберётся ≥100 лидов из `tool_lead_submit`, грузить их как Customer List → LAL.

## Nurture (лид-магнит → письма)
- `ToolLeadForm` уже собирает email (POST `/mail/demo-request`). Для nurture: [OWNER] — подключить список к ESP (Mailchimp/Brevo) или CRM-сегменту.
- Цепочка (дизайн): D0 полезный PDF → D2 кейс/видео → D5 «сделай в приложении» + демо-CTA → D9 ограниченный офер.

## Acceptance (проверяемо)
- ✅ `loadMetaPixel/loadGtm/loadRetargeting` существуют, no-op без env-id и вне хоста (код).
- ✅ Вызываются на consent-grant (оба пути в CookieConsent).
- ✅ `gaEvent` форвардит в fbq.
- ⛔ Реальная загрузка пикселя проверяется на проде ПОСЛЕ установки `NEXT_PUBLIC_META_PIXEL_ID` (owner).
