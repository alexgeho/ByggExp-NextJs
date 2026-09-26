# A/B-тесты страницы цен (byggexp.se#pricing)

Названия пакетов в пилюлях карточек (`planFaktura` / `planProjekt` / `planKomplett` в `src/locales/pricing.ts`).
Внутри биллинга (Stripe, админка, бэкенд) пакеты по-прежнему `faktura` / `projekt` / `komplett`.

| Вариант | Пакет «экономика» | Пакет «проекты» | Всё вместе | Статус |
|---|---|---|---|---|
| **B — через выгоду** | Koll på pengarna | Koll på jobbet | Full koll | ✅ LIVE с 2026-09-26 |
| **A — функция + SEO** | Faktura & ekonomikoll | Tidrapport & projekt | Allt i ett | ⏳ кандидат на A/B (владелец просил сохранить) |
| C — место работы | Kontor & ekonomi | Fält & team | Hela företaget | идея |
| D — коротко | Ekonomi | Tidrapport | Komplett | идея |
| (было 26.09) | Faktura & offert | Projekt & team | Projekt + faktura | заменён на B |

Почему A интересен: «tidrapport» — главный ключ byggexp.se, «ekonomikoll» покрывает счета, входящие счета с напоминаниями, зарплату и планирование.

Как тестировать (идея): делить трафик 50/50 по cookie, в GA4 событие `generate_lead`/клик «Boka demo» с параметром `pricing_variant`, минимум ~2–4 недели или 100+ кликов на вариант.

Ещё не решено: добавить в список «Koll på pengarna» пункты «Påminnelser om fakturor att betala» и «Ekonomisk planering och budget».
