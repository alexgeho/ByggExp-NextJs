import { useState } from "react";

import Lightbox from "../Lightbox/Lightbox";
import StepsCarousel, { type CarouselStep } from "../StepsCarousel/StepsCarousel";
const shiftsExport = "/landing/features/1arbetspass.webp";
const tasks = "/landing/features/2uppgift.webp";
const live = "/landing/features/3personal.webp";
const photo = "/landing/features/4foto.webp";
const planing = "/landing/features/5planering.webp";
const tools = "/landing/features/6verktyg.webp";
const offert = "/landing/features/7offerter.webp";
const invoice = "/landing/features/8fakturor.webp";
const project = "/landing/features/9ekonomi.webp";
const costs = "/landing/features/11costs.webp";
const salary = "/landing/features/12salary.webp";

import type { FeaturesProps } from "../../types/features";
import { FEATURE_SUB } from "../../content/feature-sub";
import type { LandingLanguageCode } from "../../locales/languages";

// Each homepage feature card links to its dedicated feature landing page.
// Order matches featureCards below. The feature pages exist in the main
// languages (sv/en/pl/ru/nb), so the link renders on those homepages and points
// to /<lang>/blog/<slug>. See LEARN_MORE_LABEL for the localized link text.
const FEATURE_LINK_LANGS = ["sv", "en", "pl", "ru", "nb"] as const;

const LEARN_MORE_LABEL: Record<string, string> = {
  sv: "Läs mer om funktionen →",
  en: "Learn more about the feature →",
  pl: "Dowiedz się więcej o funkcji →",
  ru: "Подробнее о функции →",
  nb: "Les mer om funksjonen →",
};

const FEATURE_LINKS = [
  "automatisk-tidrapportering-och-export", // 1 Automatisk insamling av arbetstid
  "hantera-uppgifter-i-byggprojekt", // 2 Uppgifter med automatisk uppföljning
  "narvaro-och-incheckning-pa-bygget", // 3 Live-översikt över arbetslagen
  "dokumentera-med-foton-pa-bygget", // 4 Fotodokumentation
  "dagsplanering-och-planeringsmoten", // 5 Projekt- och personalplanering
  "hantera-verktyg-och-utrustning", // 6 Hantering av verktyg och utrustning
  "skapa-offert-i-byggexp", // 7 Skapa offerter
  "fakturera-fran-byggexp", // 8 Skapa fakturor
  "projektekonomi-och-lonsamhet", // 9 Projektöversikt / ekonomi
  "fota-kvitton-och-hantera-utlagg", // 10 Utlägg och kostnader
  "loneunderlag-for-byggforetag", // 11 Löner från samma timmar
];

// byggexp.no: cards with a commercial feature page link there instead of the
// feature article (index → /nb/funksjoner/<slug>).
const NB_FUNKSJON_LINKS: Record<number, string> = {
  0: "timeregistrering-app", // 1 Automatisk timeføring
  3: "ks-system", // 4 Fotodokumentasjon (egenkontroll med bilder)
  4: "bemanningsplan", // 5 Planlegging av prosjekter og ansatte
  6: "tilbudsprogram", // 7 Tilbud
  7: "tilbudsprogram", // 8 Fakturaer
  8: "prosjektstyringsverktoy", // 9 Prosjektoversikt / økonomi
};

// byggexp.se: same rule for sv — the home page is the strongest internal donor,
// so cards with a commercial feature page link to /sv/funktioner/<slug>
// (docs/seo/seo-arkitektura-byggexp-2026-10-27.md, linking rules 1 and 5).
// Cards without a matching feature page keep their feature article.
const SV_FUNKTION_LINKS: Record<number, string> = {
  0: "tidrapporteringssystem-bygg", // 1 Automatisk och manuell tidrapportering
  1: "projekthantering", // 2 Uppgifter med automatisk uppföljning
  2: "stampelklocka", // 3 Live-översikt över arbetslagen
  4: "resursplanering", // 5 Projekt- och personalplanering
  5: "verktygshantering", // 6 Hantering av verktyg och utrustning
  6: "offert-kalkyl", // 7 Skapa offerter
  7: "fakturering", // 8 Skapa fakturor
  9: "utlagg", // 10 Utlägg och kostnader
  10: "lon", // 11 Löner från samma timmar
};

function Features({
  lang,
  featuresT1_3,
  featuresT4_6,
  featuresT7_9,
  featuresT10_11,
}: FeaturesProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // The 9 cards live as flat keys across three translation objects; normalize
  // them into a single array so the carousel can map over them.
  const featureCards = [
    {
      title: featuresT1_3.featuresCard1Title,
      text: featuresT1_3.featuresCard1Text,
      steps: [
        featuresT1_3.featuresCard1Step1,
        featuresT1_3.featuresCard1Step2,
        featuresT1_3.featuresCard1Step3,
      ],
      image: shiftsExport,
    },
    {
      title: featuresT1_3.featuresCard2Title,
      text: featuresT1_3.featuresCard2Text,
      steps: [
        featuresT1_3.featuresCard2Step1,
        featuresT1_3.featuresCard2Step2,
        featuresT1_3.featuresCard2Step3,
      ],
      image: tasks,
    },
    {
      title: featuresT1_3.featuresCard3Title,
      text: featuresT1_3.featuresCard3Text,
      steps: [
        featuresT1_3.featuresCard3Step1,
        featuresT1_3.featuresCard3Step2,
        featuresT1_3.featuresCard3Step3,
      ],
      image: live,
    },
    {
      title: featuresT4_6.featuresCard4Title,
      text: featuresT4_6.featuresCard4Text,
      steps: [
        featuresT4_6.featuresCard4Step1,
        featuresT4_6.featuresCard4Step2,
        featuresT4_6.featuresCard4Step3,
      ],
      image: photo,
    },
    {
      title: featuresT4_6.featuresCard5Title,
      text: featuresT4_6.featuresCard5Text,
      steps: [
        featuresT4_6.featuresCard5Step1,
        featuresT4_6.featuresCard5Step2,
        featuresT4_6.featuresCard5Step3,
      ],
      image: planing,
    },
    {
      title: featuresT4_6.featuresCard6Title,
      text: featuresT4_6.featuresCard6Text,
      steps: [
        featuresT4_6.featuresCard6Step1,
        featuresT4_6.featuresCard6Step2,
        featuresT4_6.featuresCard6Step3,
      ],
      image: tools,
    },
    {
      title: featuresT7_9.featuresCard7Title,
      text: featuresT7_9.featuresCard7Text,
      steps: [
        featuresT7_9.featuresCard7Step1,
        featuresT7_9.featuresCard7Step2,
        featuresT7_9.featuresCard7Step3,
      ],
      image: offert,
    },
    {
      title: featuresT7_9.featuresCard8Title,
      text: featuresT7_9.featuresCard8Text,
      steps: [
        featuresT7_9.featuresCard8Step1,
        featuresT7_9.featuresCard8Step2,
        featuresT7_9.featuresCard8Step3,
      ],
      image: invoice,
    },
    {
      title: featuresT7_9.featuresCard9Title,
      text: featuresT7_9.featuresCard9Text,
      steps: [
        featuresT7_9.featuresCard9Step1,
        featuresT7_9.featuresCard9Step2,
        featuresT7_9.featuresCard9Step3,
      ],
      image: project,
    },
    {
      title: featuresT10_11.featuresCard10Title,
      text: featuresT10_11.featuresCard10Text,
      steps: [
        featuresT10_11.featuresCard10Step1,
        featuresT10_11.featuresCard10Step2,
        featuresT10_11.featuresCard10Step3,
      ],
      image: costs,
    },
    {
      title: featuresT10_11.featuresCard11Title,
      text: featuresT10_11.featuresCard11Text,
      steps: [
        featuresT10_11.featuresCard11Step1,
        featuresT10_11.featuresCard11Step2,
        featuresT10_11.featuresCard11Step3,
      ],
      image: salary,
    },
  ];

  const linked =
    FEATURE_LINK_LANGS.includes(lang as (typeof FEATURE_LINK_LANGS)[number]);

  const steps: CarouselStep[] = featureCards.map((card, index) => ({
    title: card.title,
    // R52: the same short line as on the /funktioner card of this feature.
    sub: FEATURE_SUB[FEATURE_LINKS[index]]?.[lang as LandingLanguageCode],
    text: card.text,
    bullets: card.steps,
    link:
      linked && FEATURE_LINKS[index]
        ? {
            href:
              lang === "nb" && NB_FUNKSJON_LINKS[index]
                ? `/nb/funksjoner/${NB_FUNKSJON_LINKS[index]}`
                : lang === "sv" && SV_FUNKTION_LINKS[index]
                  ? `/sv/funktioner/${SV_FUNKTION_LINKS[index]}`
                  : `/${lang}/blog/${FEATURE_LINKS[index]}`,
            label: LEARN_MORE_LABEL[lang] ?? LEARN_MORE_LABEL.en,
          }
        : undefined,
    // 1200w copy for the card; the 2400w original opens in the lightbox.
    img: card.image.replace(/\.webp$/, "-1200.webp"),
    alt: card.title,
    width: 1200,
    height: 656,
    zoomSrc: card.image,
  }));

  return (
    <StepsCarousel
      id="features"
      eyebrow={featuresT1_3.featuresTitle}
      heading={
        <>
          {featuresT1_3.featuresHeading1.replace("{n}", String(featureCards.length))}{" "}
          <em>{featuresT1_3.featuresHeadingAccent}</em>{" "}
          {featuresT1_3.featuresHeading2}
        </>
      }
      sub={featuresT1_3.featuresSub}
      subClassName="section-sub"
      steps={steps}
      prevLabel="Previous"
      nextLabel="Next"
      onZoom={setLightboxImage}
    >
      <Lightbox src={lightboxImage} onClose={() => setLightboxImage(null)} />
    </StepsCarousel>
  );
}

export default Features;
