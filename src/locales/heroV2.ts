// HeroV2 copy for all site languages (owner 2026-10-21: new hero on every
// language). Prices are always SEK; sv says "kr" like the rest of the sv site.
// fi/et/lt/lv are machine-grade – review before campaigns.

export type HeroV2Copy = {
  pill: string;
  title: string;
  prices: { price: string; items: string }[];
  more: string;
  less: string;
  cta: string;
  meta: [string, string, string];
  appStore: string;
  googlePlay: string;
  altOffice: string;
  altSite: string;
};

export const heroV2Translations: Record<string, HeroV2Copy> = {
  sv: {
    pill: "Byggledning",
    title: "Hela byggföretaget på ett ställe",
    prices: [
      {
        price: "299 kr/mån",
        items:
          "offerter och fakturor, skanning av kvitton och fakturor, inkommande fakturor via e‑post, betalningspåminnelser, löner, lönespecifikationer och AGI, projektekonomi med budget, kalkyl och lönsamhet, kvitton som bokförs på projektet",
      },
      {
        price: "+69 kr/arbetare",
        items:
          "tidrapport automatiskt och manuellt, närvaro i realtid, planering av projekt och personal, egenkontroll, uppgifter med påminnelser, dokument, foton och ritningar, fotorapporter från arbetspasset, skanning av kvitton med mobilkameran, verktyg via QR-kod",
      },
    ],
    more: "läs mer",
    less: "visa mindre",
    cta: "Kom igång gratis",
    meta: ["14 dagar gratis", "Ingen startavgift", "Gratis flytt av data"],
    appStore: "Hämta i",
    googlePlay: "Ladda ned på",
    altOffice: "Projektledare på kontoret ser arbetspassen i ByggExp",
    altSite: "Hantverkare stämplar in på bygget i ByggExp-appen",
  },
  en: {
    pill: "Construction management",
    title: "Your building company in one place",
    prices: [
      {
        price: "299 SEK/month",
        items:
          "quotes and invoices, scanning of receipts and invoices, incoming invoices by email, payment reminders, payroll, payslips and AGI, project finances with budget, estimate and profitability, receipts booked to the project",
      },
      {
        price: "+69 SEK/worker",
        items:
          "automatic and manual time reporting, real-time attendance, project and staff planning, self-inspections, tasks with reminders, documents, photos and drawings, photo reports from the shift, receipt scanning with the phone camera, tools via QR code",
      },
    ],
    more: "read more",
    less: "show less",
    cta: "Get started free",
    meta: ["14 days free", "No setup fee", "Free data migration"],
    appStore: "Download on the",
    googlePlay: "Get it on",
    altOffice: "Project manager in the office viewing shifts in ByggExp",
    altSite: "Tradesperson clocking in on site in the ByggExp app",
  },
  nb: {
    pill: "Byggledelse",
    title: "Hele byggefirmaet på ett sted",
    prices: [
      {
        price: "299 SEK/mnd",
        items:
          "tilbud og fakturaer, skanning av kvitteringer og fakturaer, innkommende fakturaer via e‑post, betalingspåminnelser, lønn, lønnsslipper, prosjektøkonomi med budsjett, kalkyle og lønnsomhet, kvitteringer ført på prosjektet",
      },
      {
        price: "+69 SEK/arbeider",
        items:
          "timeføring automatisk og manuelt, tilstedeværelse i sanntid, planlegging av prosjekter og personell, egenkontroll, oppgaver med påminnelser, dokumenter, bilder og tegninger, fotorapporter fra arbeidsøkten, skanning av kvitteringer med mobilkameraet, verktøy via QR-kode",
      },
    ],
    more: "les mer",
    less: "vis mindre",
    cta: "Kom i gang gratis",
    meta: ["14 dager gratis", "Ingen etableringsgebyr", "Gratis flytting av data"],
    appStore: "Last ned fra",
    googlePlay: "Last ned på",
    altOffice: "Prosjektleder på kontoret ser arbeidsøktene i ByggExp",
    altSite: "Håndverker stempler inn på byggeplassen i ByggExp-appen",
  },
  ru: {
    pill: "Управление стройкой",
    title: "Вся строительная компания в одном месте",
    prices: [
      {
        price: "299 SEK/мес",
        items:
          "коммерческие предложения и счета, сканирование чеков и счетов, входящие счета по e‑mail, напоминания об оплате, зарплата, расчётные листы и AGI, экономика проекта с бюджетом, калькуляцией и прибыльностью, чеки с учётом на проект",
      },
      {
        price: "+69 SEK/работник",
        items:
          "учёт рабочего времени автоматически и вручную, присутствие в реальном времени, планирование проектов и персонала, самоконтроль, задачи с напоминаниями, документы, фото и чертежи, фотоотчёты со смены, сканирование чеков камерой телефона, инструменты по QR-коду",
      },
    ],
    more: "подробнее",
    less: "свернуть",
    cta: "Начать бесплатно",
    meta: ["14 дней бесплатно", "Без платы за подключение", "Бесплатный перенос данных"],
    appStore: "Загрузите в",
    googlePlay: "Доступно в",
    altOffice: "Руководитель проекта в офисе видит смены в ByggExp",
    altSite: "Мастер отмечается на объекте в приложении ByggExp",
  },
  pl: {
    pill: "Zarządzanie budową",
    title: "Cała firma budowlana w jednym miejscu",
    prices: [
      {
        price: "299 SEK/mies.",
        items:
          "oferty i faktury, skanowanie paragonów i faktur, faktury przychodzące e‑mailem, przypomnienia o płatności, wynagrodzenia, paski płacowe i AGI, finanse projektu z budżetem, kosztorysem i rentownością, paragony księgowane na projekt",
      },
      {
        price: "+69 SEK/pracownik",
        items:
          "ewidencja czasu automatycznie i ręcznie, obecność w czasie rzeczywistym, planowanie projektów i personelu, kontrola własna, zadania z przypomnieniami, dokumenty, zdjęcia i rysunki, raporty zdjęciowe ze zmiany, skanowanie paragonów aparatem telefonu, narzędzia przez kod QR",
      },
    ],
    more: "więcej",
    less: "mniej",
    cta: "Zacznij za darmo",
    meta: ["14 dni za darmo", "Bez opłaty startowej", "Darmowe przeniesienie danych"],
    appStore: "Pobierz w",
    googlePlay: "Pobierz z",
    altOffice: "Kierownik projektu w biurze widzi zmiany w ByggExp",
    altSite: "Fachowiec rejestruje wejście na budowie w aplikacji ByggExp",
  },
  uk: {
    pill: "Управління будівництвом",
    title: "Уся будівельна компанія в одному місці",
    prices: [
      {
        price: "299 SEK/міс",
        items:
          "комерційні пропозиції та рахунки, сканування чеків і рахунків, вхідні рахунки через e‑mail, нагадування про оплату, зарплата, розрахункові листи та AGI, економіка проєкту з бюджетом, калькуляцією та прибутковістю, чеки з обліком на проєкт",
      },
      {
        price: "+69 SEK/працівник",
        items:
          "облік робочого часу автоматично і вручну, присутність у реальному часі, планування проєктів і персоналу, самоконтроль, завдання з нагадуваннями, документи, фото та креслення, фотозвіти зі зміни, сканування чеків камерою телефона, інструменти за QR-кодом",
      },
    ],
    more: "детальніше",
    less: "згорнути",
    cta: "Почати безкоштовно",
    meta: ["14 днів безкоштовно", "Без плати за підключення", "Безкоштовне перенесення даних"],
    appStore: "Завантажте в",
    googlePlay: "Доступно в",
    altOffice: "Керівник проєкту в офісі бачить зміни в ByggExp",
    altSite: "Майстер відмічається на об'єкті в застосунку ByggExp",
  },
  fi: {
    pill: "Rakennustyön johto",
    title: "Koko rakennusyritys yhdessä paikassa",
    prices: [
      {
        price: "299 SEK/kk",
        items:
          "tarjoukset ja laskut, kuittien ja laskujen skannaus, saapuvat laskut sähköpostilla, maksumuistutukset, palkat, palkkalaskelmat ja AGI, projektitalous budjetilla, laskelmalla ja kannattavuudella, projektille kirjatut kuitit",
      },
      {
        price: "+69 SEK/työntekijä",
        items:
          "työaikaraportointi automaattisesti ja käsin, läsnäolo reaaliajassa, projektien ja henkilöstön suunnittelu, omavalvonta, tehtävät muistutuksilla, asiakirjat, valokuvat ja piirustukset, valokuvaraportit työvuorosta, kuittien skannaus puhelimen kameralla, työkalut QR-koodilla",
      },
    ],
    more: "lue lisää",
    less: "näytä vähemmän",
    cta: "Aloita ilmaiseksi",
    meta: ["14 päivää ilmaiseksi", "Ei aloitusmaksua", "Ilmainen tietojen siirto"],
    appStore: "Lataa",
    googlePlay: "Lataa",
    altOffice: "Projektipäällikkö toimistolla näkee työvuorot ByggExpissä",
    altSite: "Ammattilainen leimaa sisään työmaalla ByggExp-sovelluksessa",
  },
  et: {
    pill: "Ehitusjuhtimine",
    title: "Kogu ehitusettevõte ühes kohas",
    prices: [
      {
        price: "299 SEK/kuus",
        items:
          "pakkumised ja arved, tšekkide ja arvete skannimine, sissetulevad arved e‑postiga, maksemeeldetuletused, palgad, palgalehed ja AGI, projekti majandus eelarve, kalkulatsiooni ja kasumlikkusega, projektile kirjendatud tšekid",
      },
      {
        price: "+69 SEK/töötaja",
        items:
          "tööaja arvestus automaatselt ja käsitsi, kohalolek reaalajas, projektide ja personali planeerimine, omakontroll, meeldetuletustega ülesanded, dokumendid, fotod ja joonised, fotoaruanded vahetusest, tšekkide skannimine telefoni kaameraga, tööriistad QR-koodiga",
      },
    ],
    more: "loe edasi",
    less: "näita vähem",
    cta: "Alusta tasuta",
    meta: ["14 päeva tasuta", "Liitumistasu puudub", "Tasuta andmete üleviimine"],
    appStore: "Laadi alla",
    googlePlay: "Hangi",
    altOffice: "Projektijuht kontoris näeb ByggExpis töövahetusi",
    altSite: "Meister registreerib end ehitusplatsil ByggExpi rakenduses",
  },
  lt: {
    pill: "Statybų valdymas",
    title: "Visa statybų įmonė vienoje vietoje",
    prices: [
      {
        price: "299 SEK/mėn.",
        items:
          "pasiūlymai ir sąskaitos, kvitų ir sąskaitų skenavimas, gaunamos sąskaitos el. paštu, mokėjimo priminimai, atlyginimai, algalapiai ir AGI, projekto finansai su biudžetu, sąmata ir pelningumu, kvitai, priskirti projektui",
      },
      {
        price: "+69 SEK/darbuotojas",
        items:
          "darbo laiko apskaita automatiškai ir rankiniu būdu, buvimas realiu laiku, projektų ir personalo planavimas, savikontrolė, užduotys su priminimais, dokumentai, nuotraukos ir brėžiniai, nuotraukų ataskaitos iš pamainos, kvitų skenavimas telefono kamera, įrankiai per QR kodą",
      },
    ],
    more: "skaityti daugiau",
    less: "rodyti mažiau",
    cta: "Pradėkite nemokamai",
    meta: ["14 dienų nemokamai", "Be pradinio mokesčio", "Nemokamas duomenų perkėlimas"],
    appStore: "Atsisiųskite iš",
    googlePlay: "Gaukite",
    altOffice: "Projekto vadovas biure mato pamainas ByggExp",
    altSite: "Meistras registruojasi statybvietėje ByggExp programėlėje",
  },
  lv: {
    pill: "Būvniecības vadība",
    title: "Viss būvniecības uzņēmums vienuviet",
    prices: [
      {
        price: "299 SEK/mēn.",
        items:
          "piedāvājumi un rēķini, čeku un rēķinu skenēšana, ienākošie rēķini pa e‑pastu, maksājumu atgādinājumi, algas, algas lapiņas un AGI, projekta finanses ar budžetu, tāmi un rentabilitāti, projektam piesaistīti čeki",
      },
      {
        price: "+69 SEK/darbinieks",
        items:
          "darba laika uzskaite automātiski un manuāli, klātbūtne reāllaikā, projektu un personāla plānošana, paškontrole, uzdevumi ar atgādinājumiem, dokumenti, foto un rasējumi, foto atskaites no maiņas, čeku skenēšana ar tālruņa kameru, instrumenti ar QR kodu",
      },
    ],
    more: "lasīt vairāk",
    less: "rādīt mazāk",
    cta: "Sākt bez maksas",
    meta: ["14 dienas bez maksas", "Bez pieslēgšanas maksas", "Bezmaksas datu pārnešana"],
    appStore: "Lejupielādējiet",
    googlePlay: "Iegūstiet",
    altOffice: "Projekta vadītājs birojā redz maiņas ByggExp",
    altSite: "Meistars reģistrējas būvlaukumā ByggExp lietotnē",
  },
};
