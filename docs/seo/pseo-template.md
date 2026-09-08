# pSEO — шаблон «услуга/тулза × город» + смежные ниши (byggexp.se)

Задача 6. **Только дизайн шаблона + пилот 2–3, не 500 сразу.** Жёсткий гард от тонких страниц и каннибализации.

## Контекст и риск
byggexp.se — SaaS, продаётся по всей Швеции (не локальный подрядчик). Значит «×город» работает только для запросов с
**локальным интентом** («tidrapporteringssystem stockholm», «byggprogram göteborg») и ТОЛЬКО если страница даёт
уникальную локальную ценность. Иначе 20 клонов = thin-content → каннибализация pillar'а. Поэтому гарды ниже — обязательны.

## Шаблон страницы (услуга × город)
URL: `/sv/[tjanst]/[stad]` (напр. `/sv/tidrapporteringssystem/stockholm`). Canonical — на себя.
Блоки:
1. **H1**: «{Tjänst} för byggföretag i {Stad}» + intro с прямым ответом (первые 100 слов).
2. **Локальный уникальный абзац** (обязателен, генерится из данных города): население/кол-во byggföretag в регионе,
   локальные регуляции/klimat (снеговые нагрузки для tak-калькуляторов), крупные byggprojekt в городе. Мин. 60 уникальных слов.
3. **Vad är {tjänst}** — общий, но 1 ссылка ВВЕРХ на национальный pillar (`/sv/blog/{pillar}`) = anti-cannibalization (город-страница → pillar как канонический авторитет темы).
4. Таблица/скрин продукта (общие).
5. **FAQ** — 2 вопроса локализованы («Fungerar {tjänst} för byggföretag i {Stad}?»), 2 общих. FAQPage schema.
6. **register-CTA** (Testa gratis) + Boka demo.
7. **Relaterade**: соседние города (3–4) + национальный pillar.

## Уникализация (алгоритм, не просто {Stad}-замена)
Каждая страница тянет из `cities.ts` объект: `{ namn, region, lan, invanare, byggforetag_est, storsta_projekt[], klimatnot }`.
- Intro и локальный абзац собираются из ≥3 разных полей → у каждого города разный текст.
- Заголовки FAQ используют {Stad}, ответы — {region}/{lan}.
- Мин. порог: если у города нет ≥3 заполненных полей — страница НЕ генерится (гард).

## 🛡️ Гарды (обязательные)
1. **Anti-thin:** страница рендерится только если ≥120 слов уникального (город-специфичного) текста. Иначе `notFound`.
2. **Anti-cannibalization:** город-страницы НЕ таргетят голый head-ключ (его держит национальный pillar). Таргет = «{ключ} {stad}». Каждая линкует вверх на pillar; pillar НЕ линкует вниз на все города (только хаб).
3. **Хаб вместо 20 ссылок:** `/sv/[tjanst]/stader` — индекс городов; pillar → хаб (1 ссылка), не 20.
4. **Sitemap-гард:** в sitemap попадают только прошедшие anti-thin.
5. **Пилот сперва:** выкатываем 2–3, смотрим GSC 4–6 недель (индексируются? не каннибализируют?), потом масштаб.

## Top-20 городов (по населению)
Stockholm, Göteborg, Malmö, Uppsala, Linköping, Örebro, Västerås, Helsingborg, Norrköping, Jönköping,
Umeå, Lund, Borås, Sundsvall, Gävle, Eskilstuna, Halmstad, Växjö, Karlstad, Södertälje.

## Пилот (2–3 страницы) — под какой tjänst
Брать tjänst с **подтверждённым локальным спросом** (проверить в Planner: «tidrapporteringssystem stockholm» и т.п.).
Пилот-кандидаты: `tidrapporteringssystem × {stockholm, göteborg, malmö}` (3 крупнейших). Контент-спеки — в `cities.ts` (owner-данные по byggföretag/проектам).

## 3 смежные ниши по паттерну тулзов (не города — новые тул-кластеры)
1. **Verktyg/utrustning-QR** (уже есть pillar `verktygshantering-app`) → тул `verktygslista-mall` (QR-инвентарь Excel→app).
2. **Frånvaro/ledighet** (модуль Frånvaro есть, страницы нет) → `franvaro-mall` + pillar `franvarohantering-bygg`. [OWNER: объём]
3. **Utlägg/kvitto** (модуль Utlägg) → `utlagg-mall` (kvitto-redovisning) + калькулятор moms på utlägg.

## ⛔ [OWNER] для пилота
- Данные `cities.ts`: оценка кол-ва byggföretag/крупных проектов на город (или разрешение брать из открытых источников SCB/Bolagsverket).
- Объёмы Keyword Planner по «{tjänst} {stad}» — подтвердить локальный спрос перед выкаткой.

## Acceptance (проверяемо)
- ✅ Дизайн-шаблон + алгоритм уникализации + 5 гардов задокументированы (этот файл).
- ✅ Top-20 городов + 3 смежные ниши перечислены.
- 🔶 Пилот 2–3 страницы — реализуется ПОСЛЕ подтверждения локального объёма (гард «пилот сперва»); спека готова.
- ⛔ cities.ts данные + объёмы — [OWNER].
