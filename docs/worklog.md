# ByggExp — рабочий лог (продолжать отсюда)

Единый файл «что сделано / что дальше», чтобы не начинать заново. Обновлять сверху.
Деплой: push в `main` → GitHub Actions → VPS (~1–2 мин). Юзать **yarn** (не npm). Node 20 на проде.

---

## Сессия 2026-09-05

### ✅ Сделано (в проде)

**Страница /funktioner (редизайн-итерация)** — детали в `docs/funktioner-page-redesign.md`
- Бесконечная peek-карусель (3 копии списка, мгновенный телепорт — нет «отмотки»; в CSS `scroll-behavior:smooth` пришлось гасить inline при телепорте).
- Заголовок карточки над картинкой; картинка крупнее; клик по картинке → lightbox (доступен с клавиатуры, focus-trap, Esc).
- Каждой из 12 фич — своя картинка с главной (`/landing/features/*`), а не общий CMS-баннер.
- Зелёные буллиты шагов (как на главной). Единый вертикальный ритм 64px.
- Дубль по задачам скрыт (`paminnelser-uppgifter-och-deadlines` → `HIDDEN_FEATURE_SLUGS`); слит в «Arbetsuppgifter…».
- Короткие заголовки карточек (sv/en/ru/nb). Порядок карточек зафиксирован по `FEATURE_NAV`.
- a11y/perf: rAF-throttle scroll, reduced-motion, убран `will-change` с 33 слайдов, роли (group), lazy-load неактивных, OOB-safe стрелки.
- CSS вынесен из styled-jsx в `src/styles/funktioner.scss`.

**Контент-QA (3 агента: feature-статьи, код funktioner, широкий свип)**
- Факт: 2 устаревших порога personalliggare в `ekonomi.ts` (235 000 → **236 800 kr**, prisbasbelopp 2026 = 59 200).
- SEO: подрезаны 3 длинных seoTitle + 6 самых длинных seoDescription (>170 симв.).
- Внутренние ссылки (`.eco-note`) добавлены в 7 feature-статей, где их не было.
- UI-лейблы в статьях выровнены под реальный продукт: **Tider→Arbetspass**, **fliken Faktura→модуль Fakturor**, **Löneunderlag→Löner**, **fliken Uppgifter→модуль Uppgifter**.
- Повторяющиеся задачи: подтвердил по скрину формы «Skapa uppgift» (есть `Påminnelser` интервал + эскалация + `Upprepa`) → вернул точную формулировку в статью paminnelser.
- `PRODUCT-FEATURES.md` дополнен: Uppgifter (напоминания/эскалация/повторяемость) + EKONOMI-модули **Utlägg / Löner / Lönsamhet** (были пропущены).
- Проверено: все 2026-цифры (ROT 30%/tak, moms, prisbasbelopp, 3:12, arbetsgivaravgift) верны; 0 битых внутр. ссылок.

**SEO-тайтлы (CTR, принцип «точный ключ вперёд + крючок», ≤60 симв.)**
- tidrapporteringssystem-bygg → «…– från tid till lön».
- egenkontroll → «…– gratis mall, exempel & PDF».
- personalliggare-bygg-app → «Personalliggare för bygg – utan ID06 & kontrollavgift» (вернул «bygg»).
- app-for-tidrapportering-bygg (чемпион app-кластера) → «App för tidrapportering i bygg – testa gratis & GPS» (сохранил ключ 1900, не перевернул на низкочастотный).
- Урок: не менять более объёмный точный ключ ради красоты — играть только хвостом.

**i18n — сайт теперь на 10 языках приложения** — детали в `docs/i18n-languages.md`
- Было sv/en/nb/ru. Добавлено: **pl, uk, fi, et, lt, lv**. `ru` добавлен в переключатель (был URL-only) — оставлен по решению владельца.
- Переведена вся продающая часть: 16 файлов локалей + `/funktioner` (FUNKTIONER_COPY и мапы) + FeatureNav + defaultHomeMeta + FAQ-заголовки + blog-хром.
- Инфра: флаги, `landingLanguageCodes`, `BlogLocale`, `CODE_ARTICLES` (пусто для новых), `MockLocale` (только sv/en/ru), hreflang, sitemap.
- Блог-статьи и карусель funktioner для новых языков ПУСТЫ (контент «потом»); юр-страницы → en/sv-fallback.
- tsc 0, build зелёный. `/pl` проверен вживую — ок. `/uk /et /lt /lv` собираются локально (подтверждено), в проде после деплоя.

---

## ⏭️ Следующие шаги (долги)

### 🟢 Можно закрыть автономно (in-repo, без владельца)
- [ ] **DeepL/native-вычитка fi/et/lt/lv** перед платным трафиком/FB — если дадут DeepL-ключ, прогнать авто (1:1 с приложением). Строки: `src/locales/*.ts` блоки `fi/et/lt/lv` + funktioner.
- [ ] **`setLightboxImage` lint** в `src/pages/[lang]/blog/[slug].tsx` (pre-existing, `react-hooks/immutability`) — почистить.
- [ ] **faktura/offert-кластер** (`docs/seo/faktura-offert-lon-cluster.md`): усилить `kalkylprogram-bygg`; добавить «bygg» в h1 инструмента `offert-mall`; собрать pillar `faktura-med-rotavdrag`.
- [ ] **avtal/kontrakt-кластер** (`docs/seo/avtal-kontrakt-cluster.md`): pillar + spokes с диаграммами (там, где не нужен owner-CSV).
- [ ] **funktioner-полировка**: сверить pill-этикетки en/ru/nb; проверить sticky `top:61px` на проде.

### 🔴 Требуют владельца (главный рост, вне репо)
- [ ] **Бэклинки** — #1 рычаг (`docs/seo/backlinks-plan.md`).
- [ ] **Outreach** — 924 email, проверить тест-мейл → запуск (`docs/seo/cold-outreach-setup.md`).
- [ ] **Видео** — снять 6 роликов → эмбед (`docs/seo/video-plan.md`, сценарии готовы).
- [ ] **GSC CSV** (Performance → Queries, ~28 дней) → near-miss статьи (поз. 8–15).
- [ ] **Google Ads** на «tidrapport app» + вариации + **ASO/отзывы** в App Store (единственный быстрый способ обогнать Spiris/Blikk/Trinax + попасть в App-pack).
- [ ] **Volym** для Excel/mall + bemanning из Keyword Planner (`docs/seo/keywords-master.md`).
- [ ] **löneunderlag инлайн-скрин** (demo-данные) — если нужен плоский webadmin-снимок вместо лаптоп-мокапа.
- [ ] **Контент блога/карусели funktioner для новых языков** (pl/uk/fi/et/lt/lv) — сейчас пусто.

### ⚪ Опционально / низкий приоритет
- [ ] Рефактор funktioner: единый `FEATURES[slug]`-конфиг (осторожно: `featureSteps` языко-динамичны).
- [ ] Норвегия (byggexp.no): регуляторный контент требует переписи (memory `norway-expansion`).

---

## Заметки для продолжения
- **Как добавить язык на сайт:** флаг в `public/landing/flags/`, код в `src/locales/languages.ts` (`languages`, `landingLanguageCodes`, `selectableLanguages`), затем блок во ВСЕХ 16 файлах `src/locales/*.ts` + funktioner (FUNKTIONER_COPY, READ_MORE, CLOSE_LABEL, ZOOM_LABEL, PAMINNELSER_STEPS) + `lib/seo.ts` defaultHomeMeta + `lib/faq.ts` + `locales/blog.ts` + `blog/[slug].tsx` FEATURE_CRUMB + `types/blog.ts` BlogLocale + `code-articles.ts` (`pl:[]`) + `blog-mock.ts` MockLocale. Язык — «всё или ничего»: неполный блок ломает build. tsc даёт чек-лист недостающих ключей.
- **Деплой-лаг:** новые /xx-страницы 404-ят ~1–2 мин после push, пока VPS не пересоберётся — это нормально, не баг.
- **Переводчик проекта = DeepL** (в приложении подключён DeepL API «Talking» для чатов). Для 1:1 сверять сайт с ним.
