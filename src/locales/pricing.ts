import type { PricingT } from "../types/pricing";

/*
 * Pricing section copy. Swedish (sv) is the master text – translate from it.
 * Plan names (Faktura / Projekt / Komplett) are product names and stay the
 * same in every language. Prices are always SEK (numbers live in
 * components/Pricing/Pricing.tsx).
 */
export const pricingTranslations = {
  ru: {
    pricingTitle: "Сколько это стоит?",
    pricingHeading: "Три пакета – выберите нужный",
    pricingSub:
      "Никаких скрытых платежей. Никаких сюрпризов. Без платы за подключение. Отменить можно в любой момент.",

    periodLabel: "Период оплаты",
    pricingMonthly: "Помесячно",
    pricingYearly: "За год – скидка 15%",

    usersLabel: "Количество пользователей",
    usersDecrease: "Меньше пользователей",
    usersIncrease: "Больше пользователей",
    usersCount: {
      one: "{n} пользователь",
      few: "{n} пользователя",
      many: "{n} пользователей",
      other: "{n} пользователя",
    },

    pricingPer: "SEK / месяц",
    popular: "Чаще всего выбирают",

    planFaktura: "Контроль денег",
    planProjekt: "Контроль работ",
    planKomplett: "Полный контроль",
    planFakturaSub: "Счета и финансы",
    planProjektSub: "Учёт времени и проекты",
    planKomplettSub: "Всё в одном",

    fakturaUsers: "1–2 пользователя",
    fakturaMaxUsers: "Максимум 2 пользователя",
    fixedPrice: "Фиксированная цена",
    includedDetail: "вкл. {included} · +{extra} SEK за доп. пользователя",
    yearlyNote: "при оплате за год",

    groupProject: "Управление проектами или бригадами",
    groupFinance: "Отправить счёт или предложение",
    projectItems: [
      "Мобильное приложение + админ-панель",
      "Автоматический и ручной ввод рабочих часов",
      "Контроль присутствия в режиме реального времени",
      "Задачи с автонапоминаниями",
      "Документы, фото и чертежи в одном месте",
      "Планировщик проектов и сотрудников",
      "Фотоотчёты, привязанные к смене",
      "Выдача инструментов по QR-коду",
    ],
    financeItems: [
      "Мобильное приложение + админ-панель",
      "Коммерческие предложения и счета*",
      "Напоминания о предстоящих платежах",
      "Зарплата, расчётные листки и AGI",
      "Экономика проекта: бюджет, смета и рентабельность",
      "Сканирование чеков и счетов – автоматически проводятся по проекту*",
      "Входящие счета и расходы",
      "Личные финансы (скоро)",
    ],
    fakturaLimitNote:
      "* До 30 исходящих счетов и 100 отсканированных чеков и счетов в месяц. Нужно больше? Договоримся.",

    pricingButton: "Записаться на демо",
    pricingTrial: "Запуск занимает 5 минут.",

    offerBadge: "Спецпредложение",
    offerTitle: "Больше 40 пользователей?",
    offerText: "Свяжитесь с нами – подберём индивидуальную цену для всей компании.",
    offerButton: "Записаться на демо",

    addonBadge: "Дополнение",
    addonTitle: "Интеграции",
    addonPer: "SEK / компания / месяц",
    addonNote: "Можно добавить к любому пакету.",
    addonItems: [
      "Экспорт SIE4 в Fortnox, Visma и BL",
      "Входящие счета напрямую по e-mail",
      "Индивидуальные интеграции за доплату",
    ],

    komplettItems: [

      "Всё из «{projekt}»",

      "Всё из «{faktura}»",

      "Рабочие часы за пару кликов превращаются в счёт или зарплату",

      "Сфотканные чеки, отчёты по часам, выставленные и входящие счета автоматически считаются в экономику проекта",

      "Функции, разработанные под ваш бизнес – по запросу",

    ],

    usersNote: "«{projekt}» и «{komplett}» включают {included} пользователей, дальше {p} и {k} кр за каждого следующего в месяц. «{faktura}»: максимум 2 пользователя.",

    footnote:
      "Все цены без НДС. 2 недели бесплатно со всеми функциями, без платы за подключение, без обязательного срока. Сотрудники, которые пользуются только мобильным приложением, учитываются, только если отмечались за последние 30 дней.",
  },

  en: {
    pricingTitle: "How Much Does It Cost?",
    pricingHeading: "Three Plans – Pick the One You Need",
    pricingSub: "No hidden fees. No surprises. No setup fees. Cancel anytime.",

    periodLabel: "Billing period",
    pricingMonthly: "Monthly",
    pricingYearly: "Yearly – 15% off",

    usersLabel: "Number of users",
    usersDecrease: "Fewer users",
    usersIncrease: "More users",
    usersCount: { one: "{n} user", other: "{n} users" },

    pricingPer: "SEK / month",
    popular: "Most popular",

    planFaktura: "Money in check",
    planProjekt: "Work in check",
    planKomplett: "Everything in check",
    planFakturaSub: "Invoicing & finances",
    planProjektSub: "Time tracking & projects",
    planKomplettSub: "All in one",

    fakturaUsers: "1–2 users",
    fakturaMaxUsers: "Max 2 users",
    fixedPrice: "Fixed price",
    includedDetail: "incl. {included} · +{extra} SEK per extra user",
    yearlyNote: "billed yearly",

    groupProject: "Manage projects or crews",
    groupFinance: "Send an invoice or offer",
    projectItems: [
      "Mobile app + admin panel",
      "Automatic and manual time tracking",
      "Live attendance overview",
      "Tasks with automatic reminders",
      "Documents, photos and drawings in one place",
      "Project and staff planning",
      "Photo reports linked to the shift",
      "Tools assigned via QR code",
    ],
    financeItems: [
      "Mobile app + admin panel",
      "Offers and invoices*",
      "Reminders for upcoming payments",
      "Payroll, payslips and AGI",
      "Project finances: budget, estimate and profitability",
      "Scan receipts and invoices – booked to the project automatically*",
      "Supplier invoices and expenses",
      "Personal finances (coming soon)",
    ],
    fakturaLimitNote:
      "* Up to 30 outgoing invoices and 100 scanned receipts and invoices per month. Need more? Let's talk.",

    pricingButton: "Book a demo",
    pricingTrial: "Setup takes 5 minutes.",

    offerBadge: "Special offer",
    offerTitle: "More than 40 users?",
    offerText: "Contact us for a custom price for the whole company.",
    offerButton: "Book a demo",

    addonBadge: "Add-on",
    addonTitle: "Integrations",
    addonPer: "SEK / company / month",
    addonNote: "Can be added to any plan.",
    addonItems: [
      "SIE4 export to Fortnox, Visma and BL",
      "Supplier invoices straight by email",
      "Custom integrations for an additional fee",
    ],

    komplettItems: [

      "Everything in \"{projekt}\"",

      "Everything in \"{faktura}\"",

      "Worked hours become invoices or payroll in a few clicks",

      "Photographed receipts, timesheets and incoming and outgoing invoices are counted into the project finances automatically",

      "Features built for your business – on request",

    ],

    usersNote: "\"{projekt}\" and \"{komplett}\" include {included} users, then {p} and {k} kr per extra user per month. \"{faktura}\": max 2 users.",

    footnote:
      "All prices excl. VAT. 2 weeks free with all features, no setup fee, no lock-in. Staff who only use the mobile app are only counted if they have clocked in during the last 30 days.",
  },

  sv: {
    pricingTitle: "Vad kostar det?",
    pricingHeading: "Tre paket – välj det ni behöver",
    pricingSub:
      "Inga dolda avgifter. Inga överraskningar. Ingen startavgift. Avsluta när du vill.",

    periodLabel: "Betalningsperiod",
    pricingMonthly: "Per månad",
    pricingYearly: "Per år – 15% rabatt",

    usersLabel: "Antal användare",
    usersDecrease: "Färre användare",
    usersIncrease: "Fler användare",
    usersCount: { other: "{n} användare" },

    pricingPer: "SEK / månad",
    popular: "Mest valt",

    planFaktura: "Koll på pengarna",
    planProjekt: "Koll på jobbet",
    planKomplett: "Full koll",
    planFakturaSub: "Faktura & ekonomikoll",
    planProjektSub: "Tidrapport & projekt",
    planKomplettSub: "Allt i ett",

    fakturaUsers: "1–2 användare",
    fakturaMaxUsers: "Max 2 användare",
    fixedPrice: "Fast pris",
    includedDetail: "inkl. {included} · +{extra} kr per extra användare",
    yearlyNote: "vid årsbetalning",

    groupProject: "Hantera projekt eller arbetslag",
    groupFinance: "Skicka faktura eller offert",
    projectItems: [
      "Mobilapp + adminpanel",
      "Automatisk och manuell tidrapportering",
      "Närvarokoll i realtid",
      "Uppgifter med automatiska påminnelser",
      "Dokument, foton och ritningar på ett ställe",
      "Planering av projekt och personal",
      "Fotorapporter kopplade till arbetspasset",
      "Verktyg tilldelade via QR-kod",
    ],
    financeItems: [
      "Mobilapp + adminpanel",
      "Offerter och fakturor*",
      "Påminnelser om kommande betalningar",
      "Löner, lönespecifikationer och AGI",
      "Projektekonomi: budget, kalkyl och lönsamhet",
      "Skanna kvitton och fakturor – bokförs automatiskt på projektet*",
      "Inköpsfakturor och utlägg",
      "Personlig ekonomi (kommer snart)",
    ],
    fakturaLimitNote:
      "* Upp till 30 utgående fakturor och 100 skannade kvitton och fakturor per månad. Behöver ni mer? Vi hittar en lösning.",

    pricingButton: "Boka demo",
    pricingTrial: "Kom igång på 5 minuter.",

    offerBadge: "Specialerbjudande",
    offerTitle: "Fler än 40 användare?",
    offerText: "Kontakta oss för ett anpassat pris för hela företaget.",
    offerButton: "Boka demo",

    addonBadge: "Tillägg",
    addonTitle: "Integrationer",
    addonPer: "SEK / företag / månad",
    addonNote: "Kan läggas till i alla paket.",
    addonItems: [
      "SIE4-export till Fortnox, Visma och BL",
      "Inköpsfakturor direkt via e-post",
      "Anpassade integrationer mot tilläggsavgift",
    ],

    komplettItems: [

      "Allt i {projekt}",

      "Allt i {faktura}",

      "Arbetade timmar blir faktura eller lön med några klick",

      "Fotade kvitton, tidrapporter och in- och utgående fakturor räknas automatiskt in i projektets ekonomi",

      "Funktioner anpassade för ert företag – på förfrågan",

    ],

    usersNote: "{projekt} och {komplett} inkluderar {included} användare, därefter {p} resp. {k} kr per extra användare och månad. {faktura}: max 2 användare.",

    footnote:
      "Alla priser exkl. moms. 2 veckor gratis med alla funktioner, ingen startavgift, ingen bindningstid. Medarbetare som bara använder mobilappen räknas bara när de har stämplat in de senaste 30 dagarna.",
  },

  nb: {
    pricingTitle: "Hva koster det?",
    pricingHeading: "Tre pakker – velg den dere trenger",
    pricingSub:
      "Ingen skjulte avgifter. Ingen overraskelser. Ingen oppstartsavgift. Avslutt når du vil.",

    periodLabel: "Betalingsperiode",
    pricingMonthly: "Per måned",
    pricingYearly: "Per år – 15% rabatt",

    usersLabel: "Antall brukere",
    usersDecrease: "Færre brukere",
    usersIncrease: "Flere brukere",
    usersCount: { one: "{n} bruker", other: "{n} brukere" },

    pricingPer: "SEK / måned",
    popular: "Mest valgt",

    planFaktura: "Kontroll på pengene",
    planProjekt: "Kontroll på jobben",
    planKomplett: "Full kontroll",
    planFakturaSub: "Faktura og økonomi",
    planProjektSub: "Timeføring og prosjekt",
    planKomplettSub: "Alt i ett",

    fakturaUsers: "1–2 brukere",
    fakturaMaxUsers: "Maks 2 brukere",
    fixedPrice: "Fast pris",
    includedDetail: "inkl. {included} · +{extra} SEK per ekstra bruker",
    yearlyNote: "ved årlig betaling",

    groupProject: "Administrer prosjekter eller arbeidslag",
    groupFinance: "Send faktura eller tilbud",
    projectItems: [
      "Mobilapp + adminpanel",
      "Automatisk og manuell timeføring",
      "Tilstedeværelse i sanntid",
      "Oppgaver med automatiske påminnelser",
      "Dokumenter, bilder og tegninger på ett sted",
      "Planlegging av prosjekter og ansatte",
      "Fotorapporter knyttet til skiftet",
      "Verktøy tildelt via QR-kode",
    ],
    financeItems: [
      "Mobilapp + adminpanel",
      "Tilbud og fakturaer*",
      "Påminnelser om kommende betalinger",
      "Lønn, lønnsslipper og AGI",
      "Prosjektøkonomi: budsjett, kalkyle og lønnsomhet",
      "Skann kvitteringer og fakturaer – føres automatisk på prosjektet*",
      "Inngående fakturaer og utlegg",
      "Personlig økonomi (kommer snart)",
    ],
    fakturaLimitNote:
      "* Opptil 30 utgående fakturaer og 100 skannede kvitteringer og fakturaer per måned. Trenger dere mer? Ta kontakt.",

    pricingButton: "Bestill demo",
    pricingTrial: "Kom i gang på 5 minutter.",

    offerBadge: "Spesialtilbud",
    offerTitle: "Flere enn 40 brukere?",
    offerText: "Kontakt oss for en tilpasset pris for hele bedriften.",
    offerButton: "Bestill demo",

    addonBadge: "Tillegg",
    addonTitle: "Integrasjoner",
    addonPer: "SEK / bedrift / måned",
    addonNote: "Kan legges til i alle pakker.",
    addonItems: [
      "SIE4-eksport til Fortnox, Visma og BL",
      "Inngående fakturaer rett via e-post",
      "Tilpassede integrasjoner mot tilleggsavgift",
    ],

    komplettItems: [

      "Alt i {projekt}",

      "Alt i {faktura}",

      "Arbeidstimer blir faktura eller lønn med noen få klikk",

      "Fotograferte kvitteringer, timelister og inngående og utgående fakturaer regnes automatisk inn i prosjektøkonomien",

      "Funksjoner tilpasset deres bedrift – på forespørsel",

    ],

    usersNote: "{projekt} og {komplett} inkluderer {included} brukere, deretter {p} og {k} kr per ekstra bruker per måned. {faktura}: maks 2 brukere.",

    footnote:
      "Alle priser eks. mva. 2 uker gratis med alle funksjoner, ingen oppstartsavgift, ingen bindingstid. Ansatte som bare bruker mobilappen, telles bare hvis de har stemplet inn de siste 30 dagene.",
  },

  pl: {
    pricingTitle: "Ile to kosztuje?",
    pricingHeading: "Trzy pakiety – wybierz ten, którego potrzebujesz",
    pricingSub:
      "Bez ukrytych opłat. Bez niespodzianek. Bez opłaty wstępnej. Zrezygnuj, kiedy chcesz.",

    periodLabel: "Okres rozliczeniowy",
    pricingMonthly: "Miesięcznie",
    pricingYearly: "Rocznie – 15% taniej",

    usersLabel: "Liczba użytkowników",
    usersDecrease: "Mniej użytkowników",
    usersIncrease: "Więcej użytkowników",
    usersCount: {
      one: "{n} użytkownik",
      few: "{n} użytkowników",
      many: "{n} użytkowników",
      other: "{n} użytkownika",
    },

    pricingPer: "SEK / miesiąc",
    popular: "Najczęściej wybierany",

    planFaktura: "Pieniądze pod kontrolą",
    planProjekt: "Praca pod kontrolą",
    planKomplett: "Pełna kontrola",
    planFakturaSub: "Faktury i finanse",
    planProjektSub: "Ewidencja czasu i projekty",
    planKomplettSub: "Wszystko w jednym",

    fakturaUsers: "1–2 użytkowników",
    fakturaMaxUsers: "Maks. 2 użytkowników",
    fixedPrice: "Stała cena",
    includedDetail: "w cenie {included} · +{extra} SEK za dodatkowego użytkownika",
    yearlyNote: "przy płatności rocznej",

    groupProject: "Zarządzaj projektami lub ekipami",
    groupFinance: "Wyślij fakturę lub ofertę",
    projectItems: [
      "Aplikacja mobilna + panel administracyjny",
      "Automatyczna i ręczna ewidencja czasu pracy",
      "Kontrola obecności na żywo",
      "Zadania z automatycznymi przypomnieniami",
      "Dokumenty, zdjęcia i rysunki w jednym miejscu",
      "Planowanie projektów i pracowników",
      "Raporty zdjęciowe powiązane ze zmianą",
      "Narzędzia przypisywane kodem QR",
    ],
    financeItems: [
      "Aplikacja mobilna + panel administracyjny",
      "Oferty i faktury*",
      "Przypomnienia o nadchodzących płatnościach",
      "Wynagrodzenia, paski płacowe i AGI",
      "Finanse projektu: budżet, kosztorys i rentowność",
      "Skanowanie paragonów i faktur – automatycznie księgowane na projekt*",
      "Faktury zakupowe i wydatki",
      "Finanse osobiste (wkrótce)",
    ],
    fakturaLimitNote:
      "* Do 30 faktur wychodzących i 100 zeskanowanych paragonów i faktur miesięcznie. Potrzebujesz więcej? Porozmawiajmy.",

    pricingButton: "Umów demo",
    pricingTrial: "Uruchomienie zajmuje 5 minut.",

    offerBadge: "Oferta specjalna",
    offerTitle: "Ponad 40 użytkowników?",
    offerText: "Skontaktuj się z nami po indywidualną cenę dla całej firmy.",
    offerButton: "Umów demo",

    addonBadge: "Dodatek",
    addonTitle: "Integracje",
    addonPer: "SEK / firma / miesiąc",
    addonNote: "Można dodać do każdego pakietu.",
    addonItems: [
      "Eksport SIE4 do Fortnox, Visma i BL",
      "Faktury zakupowe prosto przez e-mail",
      "Integracje na zamówienie za dodatkową opłatą",
    ],

    komplettItems: [

      "Wszystko z „{projekt}”",

      "Wszystko z „{faktura}”",

      "Przepracowane godziny w kilka kliknięć zamieniają się w fakturę lub wynagrodzenie",

      "Sfotografowane paragony, raporty godzin oraz faktury wystawione i przychodzące automatycznie trafiają do finansów projektu",

      "Funkcje tworzone dla Twojej firmy – na życzenie",

    ],

    usersNote: "„{projekt}” i „{komplett}” obejmują {included} użytkowników, potem {p} i {k} kr za każdego dodatkowego miesięcznie. „{faktura}”: maks. 2 użytkowników.",

    footnote:
      "Wszystkie ceny bez VAT. 2 tygodnie za darmo ze wszystkimi funkcjami, bez opłaty wstępnej, bez zobowiązań. Pracownicy, którzy korzystają tylko z aplikacji mobilnej, są liczeni tylko wtedy, gdy rejestrowali czas w ciągu ostatnich 30 dni.",
  },

  uk: {
    pricingTitle: "Скільки це коштує?",
    pricingHeading: "Три пакети – оберіть потрібний",
    pricingSub:
      "Жодних прихованих платежів. Жодних сюрпризів. Без плати за підключення. Скасувати можна будь-коли.",

    periodLabel: "Період оплати",
    pricingMonthly: "Щомісяця",
    pricingYearly: "За рік – знижка 15%",

    usersLabel: "Кількість користувачів",
    usersDecrease: "Менше користувачів",
    usersIncrease: "Більше користувачів",
    usersCount: {
      one: "{n} користувач",
      few: "{n} користувачі",
      many: "{n} користувачів",
      other: "{n} користувача",
    },

    pricingPer: "SEK / місяць",
    popular: "Найчастіше обирають",

    planFaktura: "Контроль грошей",
    planProjekt: "Контроль робіт",
    planKomplett: "Повний контроль",
    planFakturaSub: "Рахунки й фінанси",
    planProjektSub: "Облік часу й проєкти",
    planKomplettSub: "Усе в одному",

    fakturaUsers: "1–2 користувачі",
    fakturaMaxUsers: "Максимум 2 користувачі",
    fixedPrice: "Фіксована ціна",
    includedDetail: "вкл. {included} · +{extra} SEK за дод. користувача",
    yearlyNote: "при оплаті за рік",

    groupProject: "Керувати проєктами або бригадами",
    groupFinance: "Надіслати рахунок або пропозицію",
    projectItems: [
      "Мобільний застосунок + адмін-панель",
      "Автоматичний і ручний облік робочих годин",
      "Контроль присутності в реальному часі",
      "Завдання з автонагадуваннями",
      "Документи, фото й креслення в одному місці",
      "Планувальник проєктів і працівників",
      "Фотозвіти, прив’язані до зміни",
      "Видача інструментів за QR-кодом",
    ],
    financeItems: [
      "Мобільний застосунок + адмін-панель",
      "Комерційні пропозиції та рахунки*",
      "Нагадування про майбутні платежі",
      "Зарплата, розрахункові листи та AGI",
      "Економіка проєкту: бюджет, кошторис і рентабельність",
      "Сканування чеків і рахунків – автоматично проводяться по проєкту*",
      "Вхідні рахунки та витрати",
      "Особисті фінанси (скоро)",
    ],
    fakturaLimitNote:
      "* До 30 вихідних рахунків і 100 відсканованих чеків і рахунків на місяць. Потрібно більше? Домовимося.",

    pricingButton: "Замовити демо",
    pricingTrial: "Запуск займає 5 хвилин.",

    offerBadge: "Спецпропозиція",
    offerTitle: "Понад 40 користувачів?",
    offerText: "Зв’яжіться з нами – підберемо індивідуальну ціну для всієї компанії.",
    offerButton: "Замовити демо",

    addonBadge: "Доповнення",
    addonTitle: "Інтеграції",
    addonPer: "SEK / компанія / місяць",
    addonNote: "Можна додати до будь-якого пакета.",
    addonItems: [
      "Експорт SIE4 у Fortnox, Visma та BL",
      "Вхідні рахунки напряму через e-mail",
      "Індивідуальні інтеграції за доплату",
    ],

    komplettItems: [

      "Усе з «{projekt}»",

      "Усе з «{faktura}»",

      "Робочі години за кілька кліків перетворюються на рахунок або зарплату",

      "Сфотографовані чеки, звіти про години, виставлені й вхідні рахунки автоматично враховуються в економіці проєкту",

      "Функції, розроблені під ваш бізнес – на запит",

    ],

    usersNote: "«{projekt}» і «{komplett}» включають {included} користувачів, далі {p} і {k} кр за кожного наступного на місяць. «{faktura}»: максимум 2 користувачі.",

    footnote:
      "Усі ціни без ПДВ. 2 тижні безкоштовно з усіма функціями, без плати за підключення, без зобов’язань. Працівники, які користуються лише мобільним застосунком, враховуються, тільки якщо відмічалися протягом останніх 30 днів.",
  },

  fi: {
    pricingTitle: "Paljonko se maksaa?",
    pricingHeading: "Kolme pakettia – valitse tarpeesi mukaan",
    pricingSub:
      "Ei piilokuluja. Ei yllätyksiä. Ei aloitusmaksua. Peruuta milloin haluat.",

    periodLabel: "Laskutusjakso",
    pricingMonthly: "Kuukausittain",
    pricingYearly: "Vuosittain – 15% alennus",

    usersLabel: "Käyttäjien määrä",
    usersDecrease: "Vähemmän käyttäjiä",
    usersIncrease: "Enemmän käyttäjiä",
    usersCount: { one: "{n} käyttäjä", other: "{n} käyttäjää" },

    pricingPer: "SEK / kk",
    popular: "Suosituin",

    planFaktura: "Rahat hallinnassa",
    planProjekt: "Työt hallinnassa",
    planKomplett: "Kaikki hallinnassa",
    planFakturaSub: "Laskutus ja talous",
    planProjektSub: "Tuntikirjaus ja projektit",
    planKomplettSub: "Kaikki yhdessä",

    fakturaUsers: "1–2 käyttäjää",
    fakturaMaxUsers: "Enintään 2 käyttäjää",
    fixedPrice: "Kiinteä hinta",
    includedDetail: "sis. {included} · +{extra} SEK / lisäkäyttäjä",
    yearlyNote: "vuosilaskutuksella",

    groupProject: "Hallitse projekteja tai työryhmiä",
    groupFinance: "Lähetä lasku tai tarjous",
    projectItems: [
      "Mobiilisovellus + hallintapaneeli",
      "Automaattinen ja manuaalinen tuntikirjaus",
      "Läsnäolo reaaliajassa",
      "Tehtävät automaattisilla muistutuksilla",
      "Dokumentit, kuvat ja piirustukset yhdessä paikassa",
      "Projektien ja henkilöstön suunnittelu",
      "Vuoroon liitetyt kuvaraportit",
      "Työkalut QR-koodilla",
    ],
    financeItems: [
      "Mobiilisovellus + hallintapaneeli",
      "Tarjoukset ja laskut*",
      "Muistutukset tulevista maksuista",
      "Palkat, palkkalaskelmat ja AGI",
      "Projektin talous: budjetti, laskelma ja kannattavuus",
      "Skannaa kuitit ja laskut – kirjataan projektille automaattisesti*",
      "Ostolaskut ja kulut",
      "Henkilökohtainen talous (tulossa)",
    ],
    fakturaLimitNote:
      "* Enintään 30 lähtevää laskua ja 100 skannattua kuittia ja laskua kuukaudessa. Tarvitsetteko enemmän? Sovitaan yhdessä.",

    pricingButton: "Varaa demo",
    pricingTrial: "Käyttöönotto vie 5 minuuttia.",

    offerBadge: "Erikoistarjous",
    offerTitle: "Yli 40 käyttäjää?",
    offerText: "Ota yhteyttä, niin teemme räätälöidyn hinnan koko yritykselle.",
    offerButton: "Varaa demo",

    addonBadge: "Lisäosa",
    addonTitle: "Integraatiot",
    addonPer: "SEK / yritys / kk",
    addonNote: "Voidaan lisätä mihin tahansa pakettiin.",
    addonItems: [
      "SIE4-vienti Fortnoxiin, Vismaan ja BL:ään",
      "Ostolaskut suoraan sähköpostilla",
      "Räätälöidyt integraatiot lisämaksusta",
    ],

    komplettItems: [

      "Kaikki {projekt}-paketista",

      "Kaikki {faktura}-paketista",

      "Tehdyistä tunneista syntyy lasku tai palkka muutamalla klikkauksella",

      "Kuvatut kuitit, tuntiraportit sekä lähtevät ja saapuvat laskut lasketaan automaattisesti projektin talouteen",

      "Yrityksellenne räätälöidyt toiminnot – pyynnöstä",

    ],

    usersNote: "{projekt} ja {komplett} sisältävät {included} käyttäjää, sen jälkeen {p} ja {k} kr lisäkäyttäjältä kuukaudessa. {faktura}: enintään 2 käyttäjää.",

    footnote:
      "Hinnat ilman arvonlisäveroa. 2 viikkoa ilmaiseksi kaikilla toiminnoilla, ei aloitusmaksua, ei sitoutumista. Vain mobiilisovellusta käyttävät työntekijät lasketaan mukaan vain, jos he ovat leimanneet viimeisen 30 päivän aikana.",
  },

  et: {
    pricingTitle: "Kui palju see maksab?",
    pricingHeading: "Kolm paketti – vali see, mida vajad",
    pricingSub:
      "Ei mingeid varjatud tasusid. Ei üllatusi. Ei liitumistasu. Tühista millal soovid.",

    periodLabel: "Arveldusperiood",
    pricingMonthly: "Kuus",
    pricingYearly: "Aastas – 15% soodsam",

    usersLabel: "Kasutajate arv",
    usersDecrease: "Vähem kasutajaid",
    usersIncrease: "Rohkem kasutajaid",
    usersCount: { one: "{n} kasutaja", other: "{n} kasutajat" },

    pricingPer: "SEK / kuus",
    popular: "Enim valitud",

    planFaktura: "Raha kontrolli all",
    planProjekt: "Töö kontrolli all",
    planKomplett: "Täielik kontroll",
    planFakturaSub: "Arved ja rahandus",
    planProjektSub: "Ajaarvestus ja projektid",
    planKomplettSub: "Kõik ühes",

    fakturaUsers: "1–2 kasutajat",
    fakturaMaxUsers: "Kuni 2 kasutajat",
    fixedPrice: "Fikseeritud hind",
    includedDetail: "sh {included} · +{extra} SEK iga lisakasutaja eest",
    yearlyNote: "aastamaksega",

    groupProject: "Halda projekte või meeskondi",
    groupFinance: "Saada arve või pakkumine",
    projectItems: [
      "Mobiilirakendus + halduspaneel",
      "Automaatne ja käsitsi ajaarvestus",
      "Kohalolu jälgimine reaalajas",
      "Ülesanded automaatsete meeldetuletustega",
      "Dokumendid, fotod ja joonised ühes kohas",
      "Projektide ja töötajate planeerimine",
      "Vahetusega seotud fotoaruanded",
      "Tööriistad QR-koodiga",
    ],
    financeItems: [
      "Mobiilirakendus + halduspaneel",
      "Pakkumised ja arved*",
      "Meeldetuletused eelseisvatest maksetest",
      "Palgad, palgalehed ja AGI",
      "Projekti rahandus: eelarve, kalkulatsioon ja kasumlikkus",
      "Skanni tšekke ja arveid – kirjendatakse projektile automaatselt*",
      "Ostuarved ja kulud",
      "Isiklik rahandus (tulekul)",
    ],
    fakturaLimitNote:
      "* Kuni 30 väljaminevat arvet ja 100 skannitud tšekki ja arvet kuus. Vajate rohkem? Räägime.",

    pricingButton: "Broneeri demo",
    pricingTrial: "Käivitamine võtab 5 minutit.",

    offerBadge: "Eripakkumine",
    offerTitle: "Üle 40 kasutaja?",
    offerText: "Võta meiega ühendust, et saada kogu ettevõttele kohandatud hind.",
    offerButton: "Broneeri demo",

    addonBadge: "Lisa",
    addonTitle: "Liidestused",
    addonPer: "SEK / ettevõte / kuus",
    addonNote: "Saab lisada igale paketile.",
    addonItems: [
      "SIE4-eksport Fortnoxi, Vismasse ja BL-i",
      "Ostuarved otse e-postiga",
      "Kohandatud liidestused lisatasu eest",
    ],

    komplettItems: [

      "Kõik paketist „{projekt}“",

      "Kõik paketist „{faktura}“",

      "Töötunnid muutuvad mõne klõpsuga arveks või palgaks",

      "Pildistatud tšekid, tunniaruanded ning väljaminevad ja sissetulevad arved arvestatakse automaatselt projekti rahandusse",

      "Teie ettevõttele loodud funktsioonid – soovi korral",

    ],

    usersNote: "{projekt} ja {komplett} sisaldavad {included} kasutajat, edasi {p} ja {k} kr iga lisakasutaja kohta kuus. {faktura}: kuni 2 kasutajat.",

    footnote:
      "Kõik hinnad ilma käibemaksuta. 2 nädalat tasuta kõigi funktsioonidega, liitumistasu pole, kohustusi pole. Töötajaid, kes kasutavad ainult mobiilirakendust, arvestatakse ainult siis, kui nad on viimase 30 päeva jooksul aega märkinud.",
  },

  lt: {
    pricingTitle: "Kiek tai kainuoja?",
    pricingHeading: "Trys paketai – pasirinkite reikiamą",
    pricingSub:
      "Jokių paslėptų mokesčių. Jokių staigmenų. Be prijungimo mokesčio. Atšaukite bet kada.",

    periodLabel: "Atsiskaitymo laikotarpis",
    pricingMonthly: "Kas mėnesį",
    pricingYearly: "Kas metus – 15% nuolaida",

    usersLabel: "Naudotojų skaičius",
    usersDecrease: "Mažiau naudotojų",
    usersIncrease: "Daugiau naudotojų",
    usersCount: {
      one: "{n} naudotojas",
      few: "{n} naudotojai",
      many: "{n} naudotojo",
      other: "{n} naudotojų",
    },

    pricingPer: "SEK / mėn.",
    popular: "Dažniausiai renkamasi",

    planFaktura: "Pinigai kontroliuojami",
    planProjekt: "Darbai kontroliuojami",
    planKomplett: "Pilna kontrolė",
    planFakturaSub: "Sąskaitos ir finansai",
    planProjektSub: "Laiko apskaita ir projektai",
    planKomplettSub: "Viskas viename",

    fakturaUsers: "1–2 naudotojai",
    fakturaMaxUsers: "Daugiausia 2 naudotojai",
    fixedPrice: "Fiksuota kaina",
    includedDetail: "įsk. {included} · +{extra} SEK už papildomą naudotoją",
    yearlyNote: "mokant už metus",

    groupProject: "Tvarkyti projektus ar brigadas",
    groupFinance: "Siųsti sąskaitą ar pasiūlymą",
    projectItems: [
      "Mobilioji programėlė + administravimo skydelis",
      "Automatinė ir rankinė darbo laiko apskaita",
      "Buvimo kontrolė realiuoju laiku",
      "Užduotys su automatiniais priminimais",
      "Dokumentai, nuotraukos ir brėžiniai vienoje vietoje",
      "Projektų ir darbuotojų planavimas",
      "Su pamaina susietos nuotraukų ataskaitos",
      "Įrankiai priskiriami QR kodu",
    ],
    financeItems: [
      "Mobilioji programėlė + administravimo skydelis",
      "Pasiūlymai ir sąskaitos*",
      "Priminimai apie artėjančius mokėjimus",
      "Atlyginimai, algalapiai ir AGI",
      "Projekto finansai: biudžetas, sąmata ir pelningumas",
      "Kvitų ir sąskaitų skenavimas – automatiškai priskiriama projektui*",
      "Gaunamos sąskaitos ir išlaidos",
      "Asmeniniai finansai (netrukus)",
    ],
    fakturaLimitNote:
      "* Iki 30 išrašytų sąskaitų ir 100 nuskaitytų čekių bei sąskaitų per mėnesį. Reikia daugiau? Susitarsime.",

    pricingButton: "Užsisakyti demo",
    pricingTrial: "Paleidimas užtrunka 5 minutes.",

    offerBadge: "Specialus pasiūlymas",
    offerTitle: "Daugiau nei 40 naudotojų?",
    offerText: "Susisiekite su mumis dėl individualios kainos visai įmonei.",
    offerButton: "Užsisakyti demo",

    addonBadge: "Priedas",
    addonTitle: "Integracijos",
    addonPer: "SEK / įmonė / mėn.",
    addonNote: "Galima pridėti prie bet kurio paketo.",
    addonItems: [
      "SIE4 eksportas į Fortnox, Visma ir BL",
      "Pirkimo sąskaitos tiesiai el. paštu",
      "Individualios integracijos už papildomą mokestį",
    ],

    komplettItems: [

      "Viskas iš „{projekt}“",

      "Viskas iš „{faktura}“",

      "Dirbtos valandos keliais paspaudimais virsta sąskaita arba atlyginimu",

      "Nufotografuoti kvitai, valandų ataskaitos, išrašytos ir gautos sąskaitos automatiškai įtraukiamos į projekto finansus",

      "Funkcijos, sukurtos jūsų verslui – pagal užklausą",

    ],

    usersNote: "„{projekt}“ ir „{komplett}“ apima {included} naudotojų, toliau {p} ir {k} kr už kiekvieną papildomą naudotoją per mėnesį. „{faktura}“: daugiausia 2 naudotojai.",

    footnote:
      "Visos kainos nurodytos be PVM. 2 savaitės nemokamai su visomis funkcijomis, be prijungimo mokesčio, be įsipareigojimų. Darbuotojai, kurie naudoja tik mobiliąją programėlę, skaičiuojami tik tada, jei per paskutines 30 dienų žymėjo laiką.",
  },

  lv: {
    pricingTitle: "Cik tas maksā?",
    pricingHeading: "Trīs paketes – izvēlieties vajadzīgo",
    pricingSub:
      "Nekādu slēptu maksu. Nekādu pārsteigumu. Bez pieslēgšanas maksas. Atceliet, kad vēlaties.",

    periodLabel: "Norēķinu periods",
    pricingMonthly: "Mēnesī",
    pricingYearly: "Gadā – 15% atlaide",

    usersLabel: "Lietotāju skaits",
    usersDecrease: "Mazāk lietotāju",
    usersIncrease: "Vairāk lietotāju",
    usersCount: {
      zero: "{n} lietotāju",
      one: "{n} lietotājs",
      other: "{n} lietotāji",
    },

    pricingPer: "SEK / mēnesī",
    popular: "Visbiežāk izvēlētā",

    planFaktura: "Nauda kontrolē",
    planProjekt: "Darbi kontrolē",
    planKomplett: "Pilnīga kontrole",
    planFakturaSub: "Rēķini un finanses",
    planProjektSub: "Laika uzskaite un projekti",
    planKomplettSub: "Viss vienā",

    fakturaUsers: "1–2 lietotāji",
    fakturaMaxUsers: "Ne vairāk kā 2 lietotāji",
    fixedPrice: "Fiksēta cena",
    includedDetail: "iekļ. {included} · +{extra} SEK par katru papildu lietotāju",
    yearlyNote: "maksājot par gadu",

    groupProject: "Pārvaldīt projektus vai brigādes",
    groupFinance: "Nosūtīt rēķinu vai piedāvājumu",
    projectItems: [
      "Mobilā lietotne + administrācijas panelis",
      "Automātiska un manuāla darba laika uzskaite",
      "Klātbūtnes kontrole reāllaikā",
      "Uzdevumi ar automātiskiem atgādinājumiem",
      "Dokumenti, foto un rasējumi vienuviet",
      "Projektu un darbinieku plānošana",
      "Ar maiņu saistītas foto atskaites",
      "Instrumenti, piešķirti ar QR kodu",
    ],
    financeItems: [
      "Mobilā lietotne + administrācijas panelis",
      "Piedāvājumi un rēķini*",
      "Atgādinājumi par gaidāmajiem maksājumiem",
      "Algas, algas lapiņas un AGI",
      "Projekta finanses: budžets, tāme un rentabilitāte",
      "Čeku un rēķinu skenēšana – automātiski iegrāmatoti projektā*",
      "Ienākošie rēķini un izdevumi",
      "Personīgās finanses (drīzumā)",
    ],
    fakturaLimitNote:
      "* Līdz 30 izrakstītiem rēķiniem un 100 skenētiem čekiem un rēķiniem mēnesī. Vajag vairāk? Sarunāsim.",

    pricingButton: "Pieteikt demo",
    pricingTrial: "Uzsākšana aizņem 5 minūtes.",

    offerBadge: "Īpašais piedāvājums",
    offerTitle: "Vairāk nekā 40 lietotāju?",
    offerText: "Sazinieties ar mums, lai saņemtu pielāgotu cenu visam uzņēmumam.",
    offerButton: "Pieteikt demo",

    addonBadge: "Papildinājums",
    addonTitle: "Integrācijas",
    addonPer: "SEK / uzņēmums / mēnesī",
    addonNote: "Var pievienot jebkurai paketei.",
    addonItems: [
      "SIE4 eksports uz Fortnox, Visma un BL",
      "Ienākošie rēķini tieši pa e-pastu",
      "Pielāgotas integrācijas par papildu maksu",
    ],

    komplettItems: [

      "Viss no “{projekt}”",

      "Viss no “{faktura}”",

      "Nostrādātās stundas ar dažiem klikšķiem kļūst par rēķinu vai algu",

      "Nofotografēti čeki, stundu atskaites, izrakstītie un ienākošie rēķini automātiski tiek ieskaitīti projekta finansēs",

      "Funkcijas, kas izstrādātas jūsu uzņēmumam – pēc pieprasījuma",

    ],

    usersNote: "“{projekt}” un “{komplett}” ietver {included} lietotājus, tālāk {p} un {k} kr par katru papildu lietotāju mēnesī. “{faktura}”: ne vairāk kā 2 lietotāji.",

    footnote:
      "Visas cenas norādītas bez PVN. 2 nedēļas bez maksas ar visām funkcijām, bez pieslēgšanas maksas, bez saistībām. Darbinieki, kuri izmanto tikai mobilo lietotni, tiek skaitīti tikai tad, ja pēdējo 30 dienu laikā ir reģistrējuši laiku.",
  },
} satisfies Record<string, PricingT>;
