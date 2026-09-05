# Funktioner-sidan + fiche-navigering — arbetslogg

Senast uppdaterad: 2026-09-04. Ägare: Alex. Allt nedan är **live på prod** (byggexp.se), deploy via GitHub Actions → VPS (~1–2 min). Hård refresh (Cmd+Shift+R) för att se ändringar.

## Vad sidan gör nu

`/[lang]/funktioner` (sv/en/ru/nb) visar de 12 feature-artiklarna som en **peek-karusell** + pill-navigering. Feature-artiklarna hämtas från CMS per språk och filtreras på `FEATURE_ARTICLE_SLUGS`.

### Klart (2026-09-04)

1. **Pills = en per feature.** Byggs från posten, etikett = feature-namnet (CMS-tag, med override för påminnelser). "Alla"-pillen borttagen. Pill-klick centrerar karusellen på den featuren (ingen filtrering längre).
2. **Peek-karusell.** Aktiv feature centrerad (~68% bredd, skarp), grannkorten "peekar" in dimmade + blurrade. Byts via pills, sidopilar och dots — tvåvägssynkat (scroll → aktiv pill, pill → centrerar kort). Klick på ett dimmat grannkort centrerar det.
3. **Kortinnehåll = som startsidan.** Titel + beskrivning + numrerade steg (1-2-3) + "Läs mer om funktionen →" + mockup-bild. Stegen återanvänds från startsidans feature-copy (`featuresTranslations1_3/4_6/7_9/10_11`) via `featureSteps()`. Påminnelser saknar startsidekort → egna steg i `PAMINNELSER_STEPS`.
4. **Badge i kortet borttagen** (bara på funktioner, blog behåller sin) — pills namnger redan featuren.
5. **Feature-namn override:** `paminnelser-uppgifter-och-deadlines` → "Auto-påminnelser för uppgifter" (sv/en/ru/nb), på både pill och kortets titel-tag (`FEATURE_TAG_OVERRIDE`).
6. **Tidrapportering-kortet:** titel/excerpt override till "Automatisk och manuell tidrapportering" (`FEATURE_CONTENT_OVERRIDE`), betonar GPS **och** manuell instämpling i appen.
7. **Startsidan (feature-kort #1):** samma manuell/auto-budskap i `src/locales/features1-3.ts` (card1 title/text/step2, alla språk).
8. **Feature-artikelsidan (`/blog/[slug]` för feature-slugs):**
   - **Sticky pill-nav** överst (`FeatureNav`) — alltid synlig, hela bredden, under headern (`position: sticky; top: 61px`).
   - **Breadcrumb = Hem / Funktioner / <feature>** (inte "Blogg"), även i JSON-LD. Så det tillhör produkten, inte bloggen.

## Var koden bor

- `src/pages/[lang]/funktioner/index.tsx` — `FeatureCarousel` (peek-logik: `activeIndex`, `centerCard`, `handleScroll`, `goTo`), hjälpare `featureTag` / `featureTitle` / `featureExcerpt` / `featureSteps`, overrides, styled-jsx för `.funktioner-slide` / `.fk-*` / `.fc-*`.
- `src/components/FeatureNav/FeatureNav.tsx` — **enda källan** för de 12 featurens ordning + pill-etiketter (`FEATURE_NAV`, 4 språk) + `featureNavLabel()`. Sticky nav-komponenten.
- `src/pages/[lang]/blog/[slug].tsx` — renderar `<FeatureNav>` + `FEATURE_CRUMB`-breadcrumb för feature-slugs.
- `src/styles/blog.scss` — `.feature-nav*` (sticky bar).

## Uppdatering 2026-09-05

Karusellen byggdes om från peek-versionen ovan. Allt i `src/pages/[lang]/funktioner/index.tsx`, live på prod.

- **Oändlig loop:** tre kopior av feature-listan renderas (`slides = [...posts, ...posts, ...posts]`), användaren hålls i mittkopian. Varje kort har alltid riktiga grannar på båda sidor och wrap är en tyst en-kopia-teleport → snurrar runt åt båda håll utan "hopp tillbaka". `activeExt` = index i trippel-listan, `extToReal` mappar till riktig feature.
  - **Viktigt:** teleporten måste vara *direkt* — tracken har CSS `scroll-behavior: smooth`, som annars animerar teleporten till en synlig återspolning. `centerExt(_, false)` sätter `el.style.scrollBehavior='auto'` runt `scrollLeft`-tilldelningen.
- **Kort-layout:** kolumn — **titel överst**, sedan bild (full kortbredd, `max-height 400px`, `object-fit: contain`), sedan beskrivning + steg + "Läs mer". Klick på bilden → **lightbox** (Esc/klick/× för att stänga; fokusfälla + återför fokus; lokaliserad `aria-label`). "Läs mer" navigerar in i artikeln.
- **Bilder:** varje feature får sin egen bild från startsidan (`/landing/features/1arbetspass…12salary.webp`) via `FEATURE_IMAGE_OVERRIDE` — CMS återanvände samma Arbetspass-banner på flera kort. Lokala webp = snabbare, inga dubbletter.
- **Steg-bullets** är gröna (`#45b36b` på `rgba(69,179,107,.14)`) som startsidan.
- **Kortare titlar** (alla språk) via `FEATURE_CONTENT_OVERRIDE`: Projektekonomi/Fakturera/Närvaro/Löneunderlag + task-kortet.
- **Task-dubbletten borttagen:** `paminnelser-uppgifter-och-deadlines` döljs (`HIDDEN_FEATURE_SLUGS`); slås ihop i kortet "Arbetsuppgifter med autopåminnelser" (`hantera-uppgifter-i-byggprojekt`).
- **nb-copy tillagd** i `FUNKTIONER_COPY` — `/nb/funktioner` kraschade tidigare (500, saknad nyckel).
- **Kanonisk ordning:** korten sorteras efter `FEATURE_NAV`-ordningen i `getServerSideProps` (CMS-ordningen var inte stabil).
- **Scroll** coalescas till en körning per frame (`requestAnimationFrame`).

Kvar (valfritt): ev. samla per-slug-config (`FEATURE_TAG_OVERRIDE`/`FEATURE_CONTENT_OVERRIDE`/`FEATURE_IMAGE_OVERRIDE`/`HIDDEN_FEATURE_SLUGS`) till ett objekt — men `featureSteps` är språk-dynamisk så full unifiering lönar sig inte; flytta ev. styled-jsx (~300 rader) till `blog.scss`.

## Nästa steg (att fortsätta med)

- [ ] **Header-höjd:** `.feature-nav` sticky `top: 61px` är hårdkodat. Verifiera på prod att det inte blir hårstrå-glapp/overlap mot headern; justera annars (ev. gör headerhöjden till en CSS-var).
- [ ] **Karusell-mobil:** testa peek/kort på riktig mobil (kort stackar image-över-text < 900px, blur av < 620px). Finslipa vid behov.
- [ ] **Pill-etiketter samstämmiga:** funktioner-pills använder CMS-tag via `featureTag`, artikelsidans `FeatureNav` använder `FEATURE_NAV`. På sv matchar de; dubbelkolla en/ru/nb och överväg att låta funktioner-pills också använda `featureNavLabel()` för en enda källa.
- [ ] **Steg-innehåll:** `featureSteps` mappar funktioner-slug → startsidans card-steg. Om startsidans copy ändras, följer stegen med (bra). Verifiera att alla 12 har rimliga steg (särskilt de som mappats).
- [ ] **Manuell tidrapportering — bredare:** budskapet finns nu på startsidans kort #1, funktioner-kortet Tidrapportering och `/blog/automatisk-tidrapportering-och-export`. Överväg samma i hero-subtexten om ägaren vill ha det "above the fold".
- [ ] **Pre-existing lint:** `setLightboxImage` i `blog/[slug].tsx` flaggas av `react-hooks/immutability` (ej infört av oss, bygget bryts inte). Städa vid tillfälle.
- [ ] **Ev. sticky pill-nav även utanför feature-artiklar?** Idag bara på feature-slugs — troligen rätt, men bekräfta med ägaren.
