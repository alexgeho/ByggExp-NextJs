import type { GetStaticPaths, GetStaticProps } from "next";

import InfoPage from "../../components/InfoPage/InfoPage";
import Pricing, { FAKTURA_PRICE, PROJEKT_PRICE } from "../../components/Pricing/Pricing";
import { illuC } from "../../content/funktion-pages-c";
import { pricingTranslations } from "../../locales/pricing";
import type { LandingLanguageCode } from "../../locales/languages";

// /sv/priser — dedicated pricing page (Swedish only). Price cards = the home
// page Pricing component; package contents = ByggExp-BackEnd/src/company/
// modules.ts (faktura / projekt / komplett presets). Numbers must match
// components/Pricing/Pricing.tsx.

type Props = { lang: LandingLanguageCode };

export const getStaticPaths: GetStaticPaths<Props> = async () => ({
  paths: [{ params: { lang: "sv" } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => ({
  props: { lang: params?.lang as LandingLanguageCode },
});

const PROJEKT_EXTRA = 69;
const KOMPLETT_PRICE = 990;
const KOMPLETT_EXTRA = 119;
const ADDON_PRICE = 199;
const yearly = (n: number) => Math.round(n * 0.85);

const yes = "Ja";
const no = "–";
const row = (name: string, a: string, b: string, c: string) =>
  `<tr><td><strong>${name}</strong></td><td data-label="Koll på pengarna">${a}</td><td data-label="Koll på jobbet">${b}</td><td data-label="Full koll">${c}</td></tr>`;

const BODY = `
<p>ByggExp har tre paket med fast månadspris per företag. Du väljer efter vad ni behöver mest: koll på pengarna, koll på jobbet eller båda. Alla priser är exklusive moms, det finns ingen startavgift och ingen bindningstid, och de första 14 dagarna är gratis med alla funktioner. Här ser du vad som ingår i varje paket, hur användarna räknas och vad ett byggsystem kostar för ett lag av er storlek.</p>

<h2>Vad ingår i paketen</h2>
<div class="article-table"><table>
<thead><tr><th>Funktion</th><th>Koll på pengarna</th><th>Koll på jobbet</th><th>Full koll</th></tr></thead>
<tbody>
${row("Pris per månad", `${FAKTURA_PRICE} kr`, `${PROJEKT_PRICE} kr`, `${KOMPLETT_PRICE} kr`)}
${row("Användare", "Max 2", `10 ingår, +${PROJEKT_EXTRA} kr`, `10 ingår, +${KOMPLETT_EXTRA} kr`)}
${row("Mobilapp och adminpanel", yes, yes, yes)}
${row("Tidrapportering med GPS och attest", no, yes, yes)}
${row("Uppgifter med påminnelser", no, yes, yes)}
${row("Byggdagbok och egenkontroller", no, yes, yes)}
${row("Planering, bemanning och frånvaro", no, yes, yes)}
${row("Verktyg med QR-kod", no, yes, yes)}
${row("Offerter och fakturor med ROT", yes, no, yes)}
${row("Inköpsfakturor och utlägg med skanning", yes, no, yes)}
${row("Löner och lönespecifikationer", yes, no, yes)}
${row("Projektekonomi: budget, kalkyl och lönsamhet", yes, no, yes)}
</tbody>
</table></div>
<p>I Koll på pengarna ingår upp till 30 utgående och 30 inkommande fakturor samt 100 skannade kvitton per månad. Behöver ni mer hittar vi en lösning.</p>

${illuC("priser-tid", "Person vid en dator, bredvid en rad klockor, tidkort med bockar och ett dokument")}

<h2>Vilket paket passar er?</h2>
<h3>Koll på pengarna – för den som mest fakturerar</h3>
<p>Passar enmansföretaget eller den lilla firman där en eller två personer skriver offerter, fakturerar med ROT, skannar kvitton och betalar lön. Läs mer om ByggExp för <a href="/sv/enmansforetag">enmansföretag</a> och om <a href="/sv/funktioner/utlagg">utlägg och kvitton</a>.</p>
<h3>Koll på jobbet – för laget ute på bygget</h3>
<p>Passar företaget med anställda som ska stämpla in, få sina uppgifter och planeras på rätt projekt, där faktureringen redan sköts någon annanstans. Här ingår <a href="/sv/funktioner/tidrapporteringssystem-bygg">tidrapporteringssystemet</a>, <a href="/sv/funktioner/byggdagbok">byggdagboken</a>, <a href="/sv/funktioner/resursplanering">resursplaneringen</a> och <a href="/sv/funktioner/verktygshantering">verktygshanteringen</a>.</p>
<h3>Full koll – när timmarna ska bli faktura och lön</h3>
<p>Passar när samma timmar ska bli faktura, lön och projektekonomi utan att någon för över dem för hand. Fotade kvitton, tidrapporter och in- och utgående fakturor räknas in i projektets ekonomi, så att du ser marginalen medan projektet pågår.</p>

<h2>Så räknas användarna</h2>
<p>I Koll på jobbet och Full koll ingår 10 användare i grundpriset. Därefter kostar varje extra användare ${PROJEKT_EXTRA} kr respektive ${KOMPLETT_EXTRA} kr i månaden. Koll på pengarna har ett fast pris för upp till 2 användare.</p>
<p>Medarbetare som bara använder mobilappen räknas bara när de har stämplat in de senaste 30 dagarna. Har ni säsongsanställda eller timanställda som bara jobbar vissa perioder betalar ni alltså inte för dem de månader de inte arbetar.</p>
<div class="article-table"><table>
<thead><tr><th>Lagets storlek</th><th>Koll på jobbet</th><th>Full koll</th></tr></thead>
<tbody>
<tr><td><strong>5 personer</strong></td><td data-label="Koll på jobbet">${PROJEKT_PRICE} kr/mån</td><td data-label="Full koll">${KOMPLETT_PRICE} kr/mån</td></tr>
<tr><td><strong>10 personer</strong></td><td data-label="Koll på jobbet">${PROJEKT_PRICE} kr/mån</td><td data-label="Full koll">${KOMPLETT_PRICE} kr/mån</td></tr>
<tr><td><strong>15 personer</strong></td><td data-label="Koll på jobbet">${PROJEKT_PRICE + 5 * PROJEKT_EXTRA} kr/mån</td><td data-label="Full koll">${KOMPLETT_PRICE + 5 * KOMPLETT_EXTRA} kr/mån</td></tr>
<tr><td><strong>25 personer</strong></td><td data-label="Koll på jobbet">${PROJEKT_PRICE + 15 * PROJEKT_EXTRA} kr/mån</td><td data-label="Full koll">${KOMPLETT_PRICE + 15 * KOMPLETT_EXTRA} kr/mån</td></tr>
</tbody>
</table></div>
<p>Alla belopp är per företag och månad exklusive moms. Är ni fler än 40 användare tar vi fram ett anpassat pris för hela företaget.</p>

<h2>Årsbetalning ger 15 % rabatt</h2>
<p>Betalar ni för ett år i taget blir priset 15 % lägre. Räknat per månad blir det cirka ${yearly(FAKTURA_PRICE)} kr för Koll på pengarna, ${yearly(PROJEKT_PRICE)} kr för Koll på jobbet och ${yearly(KOMPLETT_PRICE)} kr för Full koll, med samma tillägg för extra användare. Månadsbetalning har ingen bindningstid, så börja gärna med den och gå över till årsbetalning när ni vet att systemet sitter.</p>

${illuC("priser-lonsamhet", "Person vid en dator med ett diagram och en stigande pil")}

<h2>Tillägget Integrationer</h2>
<p>För ${ADDON_PRICE} kr i månaden kan du lägga till Integrationer i vilket paket som helst. Då kan du exportera en SIE4-fil till Fortnox, Visma eller BL, ta emot inköpsfakturor direkt via e-post och beställa anpassade integrationer mot tilläggsavgift.</p>

<h2>Vad kostar ett byggsystem egentligen?</h2>
<p>Månadspriset är bara en del av kalkylen. Jämför det med tiden som går åt i dag:</p>
<ul>
<li><strong>Tidrapporter.</strong> Hur lång tid tar det att samla in, renskriva och kontrollera timmarna varje månad?</li>
<li><strong>Lön.</strong> Hur mycket tid går åt till att räkna fram timmar, OB och övertid per person innan lönen kan betalas och arbetsgivardeklarationen lämnas?</li>
<li><strong>Fakturering.</strong> Hur många timmar och kvitton glöms bort i slutfakturan?</li>
<li><strong>Uppföljning.</strong> När får ni veta att ett projekt går med förlust, under projektet eller efteråt?</li>
</ul>
<p>Räkna med er egen timkostnad. Med <a href="/sv/verktyg/anstalld-kostnad-kalkylator">kalkylatorn för vad en anställd kostar</a> och <a href="/sv/verktyg/timpris-kalkylator">timpriskalkylatorn</a> ser du vad en sparad timme är värd. Mer om hur du jämför system finns i guiden <a href="/sv/blog/byggprogram-pris">vad kostar ett byggprogram</a>.</p>

<h2>Prova och byt utan kostnad</h2>
<p>De första 14 dagarna är gratis med alla funktioner, så ni kan testa med era egna projekt innan ni väljer paket. Det finns ingen startavgift. Använder ni ett annat system i dag hjälper vi er att flytta över datan gratis. Läs hur det går till på sidan <a href="/sv/byt-system">byt system</a>.</p>
`.trim();

const FAQ = [
  {
    question: "Vad kostar ett tidrapporteringssystem för bygg?",
    answer: `Tidrapportering ingår i Koll på jobbet för ${PROJEKT_PRICE} kr/mån och i Full koll för ${KOMPLETT_PRICE} kr/mån exkl. moms. Båda inkluderar 10 användare, därefter ${PROJEKT_EXTRA} kr respektive ${KOMPLETT_EXTRA} kr per extra användare och månad.`,
  },
  {
    question: "Finns det någon bindningstid?",
    answer:
      "Nej. Vid månadsbetalning kan ni avsluta när ni vill. Ingen startavgift tillkommer.",
  },
  {
    question: "Hur fungerar provperioden?",
    answer:
      "De första 14 dagarna är gratis med alla funktioner. Ni testar med era egna projekt och medarbetare och väljer paket när ni vet vad ni behöver.",
  },
  {
    question: "Vad kostar extra användare?",
    answer: `I Koll på jobbet kostar varje användare utöver de 10 som ingår ${PROJEKT_EXTRA} kr/mån, i Full koll ${KOMPLETT_EXTRA} kr/mån. Koll på pengarna har max 2 användare. Medarbetare som bara använder appen räknas bara om de har stämplat in de senaste 30 dagarna.`,
  },
  {
    question: "Hur mycket sparar jag med årsbetalning?",
    answer: `Årsbetalning ger 15 % rabatt. Koll på jobbet blir då cirka ${yearly(PROJEKT_PRICE)} kr/mån och Full koll cirka ${yearly(KOMPLETT_PRICE)} kr/mån exkl. moms.`,
  },
  {
    question: "Kan jag byta paket senare?",
    answer:
      "Ja. Börjar ni med ett paket och behöver mer, till exempel fakturering när laget redan stämplar i appen, går det att byta till Full koll. Kontakta oss så hjälper vi till.",
  },
  {
    question: "Kan underlaget föras över till bokföringsprogrammet?",
    answer: `Ja, som SIE4-fil för Fortnox, Visma eller BL. Exporten ingår i tillägget Integrationer för ${ADDON_PRICE} kr/mån, som kan läggas till i alla paket.`,
  },
  {
    question: "Vad händer om vi är fler än 40?",
    answer:
      "Då tar vi fram ett anpassat pris för hela företaget. Boka en konsultation så går vi igenom ert behov.",
  },
];

const RELATED = [
  { href: "/sv/blog/byggprogram-pris", label: "Vad kostar ett byggprogram?" },
  { href: "/sv/blog/basta-byggprogram-2026", label: "Välj byggprogram: checklista" },
  { href: "/sv/byt-system", label: "Byt system med gratis flytt" },
  { href: "/sv/funktioner", label: "Alla funktioner" },
  { href: "/sv/enmansforetag", label: "ByggExp för enmansföretag" },
  { href: "/sv/verktyg/anstalld-kostnad-kalkylator", label: "Vad kostar en anställd?" },
];

export default function PriserPage({ lang }: Props) {
  return (
    <InfoPage
      path="priser"
      title="Pris tidrapporteringssystem och byggsystem | ByggExp"
      description={`Vad kostar ByggExp? Tre paket från ${FAKTURA_PRICE} kr/mån exkl. moms, 10 användare ingår i två av dem. Ingen startavgift, ingen bindningstid. 14 dagar gratis.`}
      name="Priser för ByggExp"
      h1="Priser för ByggExp."
      h1Accent="Tre paket för byggföretag."
      lead={`Från ${FAKTURA_PRICE} kr i månaden per företag, exkl. moms.`}
      hero={{
        name: "priser-ekonomi",
        alt: "Person lägger guldmynt i en glasburk full med mynt bredvid ett hus med byggställning",
      }}
      heroCheck="Ingen startavgift"
      body={BODY}
      faq={FAQ}
      related={RELATED}
    >
      <Pricing pricingT={pricingTranslations[lang]} lang={lang} />
    </InfoPage>
  );
}
