# Единая дизайн-система: план рефакторинга (аудит 2026-11-15)

Задача владельца: весь сайт на одних и тех же компонентах. Уже сведено 15.11: hero (`FunktionHero`), ряд пилюль (`PillNav`).
Полный аудит (18 паттернов с файлами и строками) — в переписке сессии 15.11; ниже порядок работ.

## Этапы (каждый выкладывается отдельно, сверка до/после по списку URL)
1. Вынос без изменения вида: `.btn-primary` → design-system.scss; компоненты `StepsCarousel` (4 копии), `Lightbox` (5 копий + fk-lightbox), `FaqList` (4 копии), `PlanCard`/`PlanPriceSection` (3 копии). URL: /sv, /sv/funktioner/arbetsorder, /sv/tidrapportering-app, /sv/enmansforetag, /sv/priser, /sv/blog/fakturera-fran-byggexp, /sv/verktyg/betong-kalkylator.
2. `InfoPage` (/sv/priser, /sv/byt-system) на `FunktionHero`.
3. /sv/tidrapportering-app и /sv/enmansforetag на `FunktionHero` и `PlanPriceSection` (уходят eyebrow, R5).
4. /funktioner: цвета на токены, общий Lightbox, ссылки, стрелки, точки.
5. Фильтр блога на `PillNav`; одни хлебные крошки (вид `fn-crumbs`) на блоге, контакте, legal.
6. `PageHead` (бейдж, h1, вступление) и заголовки секций одного размера: /sv/verktyg, инструменты, /sv/blog.
7. Legal/om-oss/faq: токены, шрифт DM Sans, /faq на `FaqList`.
8. Кнопки (4 радиуса и 4 синих → один), карточки (6 радиусов → токены), отступы секций, формы — по одному семейству за выкладку.

## Мёртвый код (удалять отдельным коммитом после этапа 3)
`em-pain*`, `em-steps*`, `em-feature-*`, `em-mockup`, `em-phone`, `em-price-num/box`; `funktioner-grid`, `blog-card-meta`, `blog-article-excerpt`; `kontakt-team*`, `kontakt-person*`; `benefits-grid`, `finalBenefits-grid` и др.; `components/Hero` доступен только через `/?v=old`, но держит живой `.btn-primary`.
