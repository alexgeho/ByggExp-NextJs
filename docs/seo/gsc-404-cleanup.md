# GSC — Page Indexing 404 Cleanup

Разбор «Not found (404)» из Google Search Console (byggexp.se). Дата: 2026-09-01.
Статус GSC: 421 проиндексировано, 135 не проиндексировано (8 причин).

## ✅ РЕШЕНО (2026-09-01, вечер) — проверено на live + пофикшено в коде

Прогнал все 26 URL по live-сайту (fetch), разделил на баги / историю / корректные 404:

- **Уже работали** (редирект `[lang]`→`/sv`, 200): `/[lang]`, `/[lang]/blog`, `/[lang]/funktioner`,
  `/[lang]/verktyg`, `/[lang]/verktyg/{golv,kvadratmeter,staket,rot-avdrag}-kalkylator`, `/[lang]/underbitraden`.
- **Пофикшено в коде (коммит "fix(seo): stop sitemap advertising /en…"):**
  - Sitemap отдавал `/en/verktyg/<slug>` для ВСЕХ `-kalkylator`, но sv-only калькуляторы
    (ackord, ob-overtid, restidsersattning + rot-avdrag/moms/…) 404-ят на /en. Теперь `/en`
    только для `EN_CALC_SLUGS` (18 калькуляторов с реальным en; `src/lib/locale.ts`).
  - 301: `/contacts`→`/sv/contact`, `/sv/blog/byggnads-kollektivavtal-2026`→`maste-ha-kollektivavtal-bygg`,
    `/sv/blog/anbudskalkyl-bygg`→`kalkylprogram-bygg`, `/sv/blog/bygg-appar-i-sverige`→`bygg-app`
    (цели проверены 200).
- **Уже было починено ранее** (историческое, Google выкинет на рекролле):
  `/en//ru/ blog` для sv-only постов — hreflang уже НЕ отдаёт en/ru (`[lang]/blog/[slug].tsx`),
  sitemap их не эмитит.
- **Корректные 404, не трогаем** (Google исключит сам): `/[lang]/blog/[slug]`, `/[lang]/embed/[slug]`
  (литеральный `[slug]`), `/blog/test` (мусор), `/login`, `/signup`, `/faq` (app/несуществующие роуты).

**Осталось:** после деплоя → в GSC нажать **Validate fix** для причины «Not found (404)»
(и по желанию для «Duplicate without canonical»). Google перекраулит за дни-недели.

---
### Исходный разбор (для истории)

## Оценка 8 причин (что чинить, что норма)

| Причина | Стр. | Вердикт |
|---|---|---|
| **Not found (404)** | 26 | ⚠️ ЧИНИТЬ (Validation Failed) |
| Duplicate without user-selected canonical | 5 | добавить self-canonical |
| Page with redirect | 52 | норма, не трогать |
| Excluded by 'noindex' tag | 25 | проверить, что намеренно |
| Alternate page with proper canonical | 19 | норма |
| Crawled - currently not indexed | 5 | низкий приоритет |
| Discovered - currently not indexed | 2 | низкий приоритет |
| Duplicate, Google chose different canonical | 1 | мелочь |

Реально «горит» только **404 (26)** — с ним и работаем.

## Полный список 26 URL (404), по категориям

### A. БАГ: литеральные `[lang]`/`[slug]` в sitemap (~11)
Нерезолвленные динамические сегменты Next.js попали в карту сайта:
- `/[lang]`
- `/[lang]/blog`
- `/[lang]/blog/[slug]`
- `/[lang]/embed/[slug]`
- `/[lang]/funktioner`
- `/[lang]/underbitraden`
- `/[lang]/verktyg`
- `/[lang]/verktyg/golv-kalkylator`
- `/[lang]/verktyg/kvadratmeter-kalkylator`
- `/[lang]/verktyg/staket-kalkylator`
- `/[lang]/verktyg/rot-avdrag-kalkylator`
→ **Фикс:** найти генерацию sitemap (`app/sitemap.*` / `next-sitemap` / скрипт),
где итерируется по локалям/слагам — сейчас отдаёт шаблон вместо подстановки `sv` + реальный slug.

### B. Локали `/en/` и `/ru/` без контента (сайт sv-only) (~6)
- `/en/verktyg/ackord-kalkylator`
- `/en/verktyg/restidsersattning-kalkylator`
- `/en/verktyg/ob-overtid-kalkylator`
- `/en/blog/faktura-med-rotavdrag`
- `/en/blog/tidrapport-app-iphone`
- `/ru/blog/tidrapport-app-iphone`
- `/ru/blog/faktura-med-rotavdrag`
→ **Фикс:** не анонсировать en/ru (sitemap/hreflang), либо 301 на `/sv/...`.

### C. Прочее (~9)
- `/blog/bygg-appar-i-sverige` — без префикса локали (правильно `/sv/blog/...`)
- `/blog/test` — мусор, убрать
- `/sv/blog/byggnads-kollektivavtal-2026` — sv-статья 404 (переезд слага?)
- `/sv/blog/anbudskalkyl-bygg` — sv-статья 404 (переезд слага?)
- `/contacts`, `/faq` — нет таких роутов (или должны быть `/sv/...`)
- `/login`, `/signup` — app-роуты, Google их индексировать не должен → noindex/redirect

## План фикса (код + деплой)
1. [ ] Найти генерацию sitemap → убрать литеральные `[lang]`/`[slug]`, подставлять реальные значения.
2. [ ] Для `/blog/...` без локали и `/en//ru/` → 301 на `/sv/...` (next.config redirects или middleware).
3. [ ] Проверить `/sv/blog/byggnads-kollektivavtal-2026` и `/sv/blog/anbudskalkyl-bygg` — если слаг сменился, 301 на новый.
4. [ ] `/blog/test` — удалить/не линковать/не в sitemap.
5. [ ] `/login`, `/signup`, `/contacts`, `/faq` — решить: noindex или 301.
6. [ ] Для «Duplicate without canonical» (5) — добавить self-referencing canonical.
7. [ ] После деплоя — в GSC по каждой причине нажать **Validate fix**.

## Заметки
- GSC ресурс: sc-domain:byggexp.se. Причина 404 → drilldown item_key=CAMYDSAC.
- Валидация 404 в GSC уже была и **Failed** — значит прошлый фикс не помог, нужен новый.
