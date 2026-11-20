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
  meta: string[];
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
          "offerter och fakturor, inkommande fakturor via e‑post som läses av automatiskt, betalningspåminnelser, löner, lönespecifikationer och AGI, orderekonomi med budget, kalkyl och lönsamhet",
      },
      {
        price: "+69 kr/arbetare",
        items:
          "tidrapport automatiskt och manuellt, närvaro i realtid, planering av order och personal, egenkontroll, uppgifter med påminnelser, dokument, foton och ritningar, fotorapporter från arbetspasset, kvitton med mobilkameran som bokförs på ordern, verktyg via QR-kod",
      },
    ],
    more: "läs mer",
    less: "visa mindre",
    cta: "Kom igång gratis",
    meta: ["14 dagar gratis", "Ingen bindningstid", "Vi hjälper er flytta data gratis", "Täcker hela verksamheten", "Funktioner anpassas för era arbetssätt", "Personlig uppstart på plats"],
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
          "quotes and invoices, incoming invoices by email read automatically, payment reminders, payroll, payslips and AGI, order finances with budget, estimate and profitability",
      },
      {
        price: "+69 SEK/worker",
        items:
          "automatic and manual time reporting, real-time attendance, order and staff planning, self-inspections, tasks with reminders, documents, photos and drawings, photo reports from the shift, receipts from the phone camera booked to the order, tools via QR code",
      },
    ],
    more: "read more",
    less: "show less",
    cta: "Get started free",
    meta: ["14 days free", "No lock-in", "We help you move your data for free", "Covers your entire operation", "Features adapted to how you work", "Personal on-site onboarding"],
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
        price: "299 NOK/mnd",
        items:
          "tilbud og fakturaer, innkommende fakturaer via e‑post som leses automatisk, lønn, lønnsslipper, ordreøkonomi med budsjett, kalkyle og lønnsomhet",
      },
      {
        price: "+69 NOK/arbeider",
        items:
          "timeføring automatisk og manuelt, tilstedeværelse i sanntid, planlegging av ordrer og personell, egenkontroll, oppgaver med påminnelser, dokumenter, bilder og tegninger, fotorapporter fra arbeidsøkten, kvitteringer med mobilkameraet ført på ordren, verktøy via QR-kode",
      },
    ],
    more: "les mer",
    less: "vis mindre",
    cta: "Kom i gang gratis",
    meta: ["14 dager gratis", "Ingen bindingstid", "Vi hjelper dere å flytte data gratis", "Dekker hele virksomheten", "Funksjoner tilpasses deres arbeidsmåte", "Personlig oppstart på stedet"],
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
          "коммерческие предложения и счета, входящие счета по e‑mail с автоматическим распознаванием, напоминания об оплате, зарплата, расчётные листы и AGI, экономика заказа с бюджетом, калькуляцией и прибыльностью",
      },
      {
        price: "+69 SEK/работник",
        items:
          "учёт рабочего времени автоматически и вручную, присутствие в реальном времени, планирование заказов и персонала, самоконтроль, задачи с напоминаниями, документы, фото и чертежи, фотоотчёты со смены, чеки камерой телефона с учётом на заказ, инструменты по QR-коду",
      },
    ],
    more: "подробнее",
    less: "свернуть",
    cta: "Начать бесплатно",
    meta: ["14 дней бесплатно", "Без обязательств", "Поможем перенести данные бесплатно", "Покрывает всю работу компании", "Функции подстраиваются под ваши процессы", "Приедем и научим на месте"],
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
          "oferty i faktury, faktury przychodzące e‑mailem odczytywane automatycznie, przypomnienia o płatności, wynagrodzenia, paski płacowe i AGI, finanse zlecenia z budżetem, kosztorysem i rentownością",
      },
      {
        price: "+69 SEK/pracownik",
        items:
          "ewidencja czasu automatycznie i ręcznie, obecność w czasie rzeczywistym, planowanie zleceń i personelu, kontrola własna, zadania z przypomnieniami, dokumenty, zdjęcia i rysunki, raporty zdjęciowe ze zmiany, paragony z aparatu telefonu księgowane na zlecenie, narzędzia przez kod QR",
      },
    ],
    more: "więcej",
    less: "mniej",
    cta: "Zacznij za darmo",
    meta: ["14 dni za darmo", "Bez zobowiązań", "Pomożemy przenieść dane za darmo", "Obejmuje całą działalność", "Funkcje dopasowane do waszych procesów", "Wdrożenie na miejscu u was"],
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
          "комерційні пропозиції та рахунки, вхідні рахунки через e‑mail з автоматичним розпізнаванням, нагадування про оплату, зарплата, розрахункові листи та AGI, економіка замовлення з бюджетом, калькуляцією та прибутковістю",
      },
      {
        price: "+69 SEK/працівник",
        items:
          "облік робочого часу автоматично і вручну, присутність у реальному часі, планування замовлень і персоналу, самоконтроль, завдання з нагадуваннями, документи, фото та креслення, фотозвіти зі зміни, чеки камерою телефона з обліком на замовлення, інструменти за QR-кодом",
      },
    ],
    more: "детальніше",
    less: "згорнути",
    cta: "Почати безкоштовно",
    meta: ["14 днів безкоштовно", "Без зобов’язань", "Допоможемо перенести дані безкоштовно", "Охоплює всю роботу компанії", "Функції підлаштовуються під ваші процеси", "Приїдемо й навчимо на місці"],
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
          "tarjoukset ja laskut, sähköpostilla saapuvat laskut luetaan automaattisesti, maksumuistutukset, palkat, palkkalaskelmat ja AGI, tilauksen talous budjetilla, laskelmalla ja kannattavuudella",
      },
      {
        price: "+69 SEK/työntekijä",
        items:
          "työaikaraportointi automaattisesti ja käsin, läsnäolo reaaliajassa, tilausten ja henkilöstön suunnittelu, omavalvonta, tehtävät muistutuksilla, asiakirjat, valokuvat ja piirustukset, valokuvaraportit työvuorosta, kuitit puhelimen kameralla tilaukselle kirjattuina, työkalut QR-koodilla",
      },
    ],
    more: "lue lisää",
    less: "näytä vähemmän",
    cta: "Aloita ilmaiseksi",
    meta: ["14 päivää ilmaiseksi", "Ei sitoutumista", "Autamme siirtämään tiedot ilmaiseksi", "Kattaa koko toiminnan", "Toiminnot mukautuvat tapaanne toimia", "Käyttöönotto paikan päällä"],
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
          "pakkumised ja arved, e‑postiga saabuvad arved loetakse automaatselt, maksemeeldetuletused, palgad, palgalehed ja AGI, tellimuse majandus eelarve, kalkulatsiooni ja kasumlikkusega",
      },
      {
        price: "+69 SEK/töötaja",
        items:
          "tööaja arvestus automaatselt ja käsitsi, kohalolek reaalajas, tellimuste ja personali planeerimine, omakontroll, meeldetuletustega ülesanded, dokumendid, fotod ja joonised, fotoaruanded vahetusest, tšekid telefoni kaameraga tellimusele kirjendatult, tööriistad QR-koodiga",
      },
    ],
    more: "loe edasi",
    less: "näita vähem",
    cta: "Alusta tasuta",
    meta: ["14 päeva tasuta", "Ilma kohustusteta", "Aitame andmed tasuta üle viia", "Katab kogu tegevuse", "Funktsioonid kohanduvad teie tööviisiga", "Isiklik juurutus kohapeal"],
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
          "pasiūlymai ir sąskaitos, gaunamos sąskaitos el. paštu nuskaitomos automatiškai, mokėjimo priminimai, atlyginimai, algalapiai ir AGI, užsakymo finansai su biudžetu, sąmata ir pelningumu",
      },
      {
        price: "+69 SEK/darbuotojas",
        items:
          "darbo laiko apskaita automatiškai ir rankiniu būdu, buvimas realiu laiku, užsakymų ir personalo planavimas, savikontrolė, užduotys su priminimais, dokumentai, nuotraukos ir brėžiniai, nuotraukų ataskaitos iš pamainos, kvitai telefono kamera, priskirti užsakymui, įrankiai per QR kodą",
      },
    ],
    more: "skaityti daugiau",
    less: "rodyti mažiau",
    cta: "Pradėkite nemokamai",
    meta: ["14 dienų nemokamai", "Jokių įsipareigojimų", "Padėsime nemokamai perkelti duomenis", "Apima visą veiklą", "Funkcijos pritaikomos jūsų darbui", "Asmeninis diegimas vietoje"],
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
          "piedāvājumi un rēķini, pa e‑pastu ienākošie rēķini tiek nolasīti automātiski, maksājumu atgādinājumi, algas, algas lapiņas un AGI, pasūtījuma finanses ar budžetu, tāmi un rentabilitāti",
      },
      {
        price: "+69 SEK/darbinieks",
        items:
          "darba laika uzskaite automātiski un manuāli, klātbūtne reāllaikā, pasūtījumu un personāla plānošana, paškontrole, uzdevumi ar atgādinājumiem, dokumenti, foto un rasējumi, foto atskaites no maiņas, čeki ar tālruņa kameru, piesaistīti pasūtījumam, instrumenti ar QR kodu",
      },
    ],
    more: "lasīt vairāk",
    less: "rādīt mazāk",
    cta: "Sākt bez maksas",
    meta: ["14 dienas bez maksas", "Bez saistībām", "Palīdzēsim bez maksas pārnest datus", "Aptver visu darbību", "Funkcijas pielāgojas jūsu darba veidam", "Personīga ieviešana uz vietas"],
    appStore: "Lejupielādējiet",
    googlePlay: "Iegūstiet",
    altOffice: "Projekta vadītājs birojā redz maiņas ByggExp",
    altSite: "Meistars reģistrējas būvlaukumā ByggExp lietotnē",
  },
};
