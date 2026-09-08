# Next-level SEO/growth — worklog (byggexp.se)

Автономный прогон «рычаги следующего уровня». Статусы: ☐ не начато · 🔄 в работе · ✅ сделано · ⛔ [OWNER]-блокер.
Build/lint зелёные после каждого куска. Коммиты — логическими частями.

---

## 🔴🔴 [OWNER] — БЛОКЕРЫ (без них часть роста не поедет)
- ⛔ **Публичный register/trial-URL НЕ существует:** `app.byggexp.se` = **NXDOMAIN** (не резолвится). Task 1 требует «Testa gratis»→register. Инфра построена и готова (env `NEXT_PUBLIC_TRIAL_URL` → один флаг включает primary-CTA сайтово, fallback на /sv/contact, без битых ссылок). **Нужно:** живой публичный URL регистрации/триала (НЕ admin.byggexp.se — его нельзя светить публично).
- ⛔ **Ad-аккаунты/пиксель-ID (Task 2):** Meta Pixel ID, опц. GTM ID, LinkedIn Partner ID. Код-скелет готов (consent-gated, default denied), включается env-переменными.
- ⛔ **GSC доступ для near-miss (Task 7):** нужен свежий GSC Performance export (pos 8–15) — либо владелец, либо интерактивный вход. Без данных near-miss не вытащить.

---

## Задача 0 — ИНДЕКСАЦИЯ (критично) — ✅ ПРОВЕРЕНО: ВКЛЮЧЕНА
| Элемент | Есть/нет | Качество | Действие |
|---|---|---|---|
| robots.txt byggexp.se | ✅ `Allow: /` + Sitemap | OK (не Disallow) | — |
| robots.txt byggexp.no | ✅ `Allow: /` + свой sitemap | OK (host-aware фикс ранее) | — |
| noindex на money-страницах | ✅ нет | `/sv/verktyg` = 200, без X-Robots noindex | — |
| SITE_ALLOW_INDEX (env) | ✅ включён на проде | robots отдаёт Allow → env=true | — |
| sitemap.se доступен | ✅ 449 URL (82 verktyg, 320 blog) | полный | — |
| sitemap локали | 🔄 sv/en/ru + nb(.no) | pl/uk/fi/et/lt/lv в свитчере, но контент пуст | зафиксировать решение (ниже) |

**Вывод:** сайт индексируется, money-страницы открыты, sitemap полный. Красного флага НЕТ.
**Решение по локалям:** pl/uk/fi/et/lt/lv имеют только UI-перевод лендинга, без blog/tool-контента → в sitemap НЕ эмитим (иначе тонкие/дубль-страницы). Зафиксировано как намеренное. sv/en/ru — полный контент, nb — на .no.

---

## Чек-лист задач
- [x] 0. Индексация — проверено, включена ✅
- [ ] 1. CRO / self-serve funnel 🔄
- [ ] 2. Ретаргетинг-скелет (consent-gated)
- [ ] 3. GEO/AEO (15 страниц: direct-answer + HowTo/FAQ)
- [ ] 4. Тех-SEO (hreflang /verktyg+/funktioner, WebSite+SearchAction, HowTo+og:image на калькуляторах)
- [ ] 5. Недостающие pillar-ы (Planering, Projektledning, Byggdagbok, Verktyg/QR)
- [ ] 6. pSEO шаблон (услуга×город) + пилот 2–3
- [ ] 7. GSC near-miss (recurring) — ⛔ нужен GSC-доступ

_(Детали и acceptance-критерии — по мере выполнения ниже.)_
