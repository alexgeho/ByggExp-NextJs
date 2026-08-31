# OWNER-ACTIONS — что нужно от владельца для роста трафика

> Всё on-site (контент, перелинковка, CTR-титулы, техника, аналитика) уже сделано ассистентом.
> Рост дальше упирается в вещи, которые может сделать только владелец. Приоритет сверху вниз.
> Обновлено: 2026-08-31.

---

## 🔴 1. Бэклинки — главный рычаг (пример: ~1 час, каталоги)
Домен молодой → страницы висят на 2–5 странице Google несмотря на хороший контент.
Внешние ссылки поднимут всё сразу. Полный план + шаблоны: `docs/seo/backlinks-plan.md`.

**Tier 1 — каталоги (сделать первыми, низкий риск).** Одинаковые Название/Адрес/Телефон (NAP), ссылка на сайт:
- [ ] **Google Företagsprofil** — дозаполнить (категория, услуги, ссылка, фото). Важнейшее.
- [ ] **allabolag.se** — профиль AB + ссылка на сайт
- [ ] **hitta.se** — профиль + ссылка
- [ ] **eniro.se** — профиль + ссылка
- [ ] **ratsit.se** — данные компании
- [ ] **byggkatalogen.byggtjanst.se** — отраслевой авторитет
- [ ] **kompass.se** (se.kompass.com) — B2B-каталог
- [ ] **Bing Places**, **Apple Business Connect**

**Tier 2 — питчить бесплатные инструменты** (форумы/FB-группы bygg) — естественные ссылки на:
- `/sv/verktyg/tidrapport-mall`, `/sv/verktyg/schema-mall`, `/sv/verktyg/egenkontroll-mall`, калькуляторы.

**Куда целить ссылки (топ-спрос по GSC):**
`tidrapporteringssystem-bygg`, `personalplanering-bygg`, `entreprenadforsakring-allrisk-vad-tacker`, `egenkontroll-mall`.

---

## 🟡 2. Данные для контента по спросу
- [ ] **Объёмы** («Avg monthly searches») из Keyword Planner по вкладкам **bemanning** и **Excel/mall** → строю страницы по цифрам.
- [ ] **youtu.be ссылки** на отснятые видео → встрою в целевые страницы (как сделано с видео экспорта).

---

## 🟢 3. Мелочь в GA4 UI (по желанию)
- [ ] Отметить события **`book_demo`** и **`file_download`** как key events (GA4 → Admin → Events).
- [ ] Опубликовать **Search Console-отчёты** в GA4 → Reports → Library.

---

## ✅ Уже готово (не требует действий)
- **Аналитика поведения — Microsoft Clarity**: проект `byggexp` (ID `y4geza5kxs`) подключён end-to-end
  (GitHub repo variable + deploy-workflow + consent-gated загрузка на проде). Данные копятся в «Записи»/«Панель мониторинга».
  ⚠️ Пишет только на хосте `byggexp.se` (проверь, что `www` редиректит на apex) и после принятия cookie.
- **GA4** (`G-551T40R4WV`) + Consent Mode v2 + cookie-баннер + события — подключены.
- **admin.byggexp.se → noindex** — исправлено.
- **On-site SEO**: pillar-страницы (schemaläggningssystem/projekthanteringssystem/projektledning-пачка/byggdagbok),
  редактура всех статей, внутренняя перелинковка near-miss/орфанов (31 ссылка по GSC), CTR-титулы калькуляторов,
  инструмент schema-mall, sitemap. См. `docs/seo/keywords-master.md`, `docs/seo/backlinks-plan.md`.

---

**TL;DR:** реально нужен только **пункт 1 (бэклинки, Tier 1 каталоги)** — ~час работы, прямой рост авторитета
→ поднимет все уже оптимизированные страницы. Пункты 2–3 — по возможности.
