import type { BlogLocale, BlogPost } from '../types/blog';

/**
 * Frontend-only placeholder articles for the blog listing.
 * These are shown ONLY when the CMS returns no published posts, so real
 * articles created in the admin always take precedence. Nothing is written
 * to the database.
 */

// Mock demo content exists for sv/en/ru only; nb (byggexp.no) and pl have their
// own real content (or none yet) and never fall back to these placeholders.
type MockLocale = Exclude<BlogLocale, 'nb' | 'pl'>;
type Localized = Record<MockLocale, string>;

type Seed = {
  slug: string;
  cover: string;
  date: string;
  tag: Localized;
  title: Localized;
  excerpt: Localized;
  body: Record<MockLocale, string[]>;
};

const SEEDS: Seed[] = [
  {
    slug: 'tidsrapportering-i-byggbranschen',
    cover: '/landing/features/shiftsExport.webp',
    date: '2026-07-28T09:00:00.000Z',
    tag: { sv: 'Tidrapportering', en: 'Time tracking', ru: 'Учёт времени' },
    title: {
      sv: 'Digital tidsrapportering i byggbranschen',
      en: 'Digital time tracking in construction',
      ru: 'Цифровой учёт рабочего времени в строительстве',
    },
    excerpt: {
      sv: 'Sluta jaga papperslappar. Så får du in korrekta arbetstimmar automatiskt och sparar timmar varje vecka på lönehanteringen.',
      en: 'Stop chasing paper slips. Here is how to capture accurate work hours automatically and save hours every week on payroll.',
      ru: 'Хватит собирать бумажки. Как автоматически фиксировать точные часы работы и экономить часы каждую неделю на зарплате.',
    },
    body: {
      sv: [
        'Manuell tidsrapportering kostar byggföretag både tid och pengar. Timmar noteras på lappar, i sms eller i huvudet — och hamnar sällan rätt i lönesystemet.',
        'Med GPS-baserad in- och utstämpling registreras arbetstiden automatiskt när medarbetaren är på plats. Ingen glömmer, ingen överdriver, och underlaget är alltid spårbart.',
        'Resultatet: snabbare löneunderlag, färre tvister och full koll på var timmarna faktiskt läggs.',
      ],
      en: [
        'Manual time tracking costs construction companies both time and money. Hours end up on notes, in texts, or in someone’s head — and rarely reach payroll correctly.',
        'With GPS-based check-in and check-out, work time is registered automatically when the worker is on site. Nobody forgets, nobody overstates, and the record is always traceable.',
        'The result: faster payroll, fewer disputes, and full visibility into where hours actually go.',
      ],
      ru: [
        'Ручной учёт времени стоит строительным компаниям времени и денег. Часы записываются на бумажках, в сообщениях или «по памяти» — и редко корректно доходят до расчёта зарплаты.',
        'С отметками входа и выхода по GPS рабочее время фиксируется автоматически, когда сотрудник на объекте. Никто не забудет и не припишет лишнего, а данные всегда прослеживаются.',
        'Итог: быстрее расчёт зарплаты, меньше споров и полная прозрачность по часам.',
      ],
    },
  },
  {
    slug: 'digitalisering-av-byggarbetsplatsen',
    cover: '/landing/features/project.webp',
    date: '2026-07-22T09:00:00.000Z',
    tag: { sv: 'Digitalisering', en: 'Digitalization', ru: 'Цифровизация' },
    title: {
      sv: 'Digitalisering av byggarbetsplatsen — var börjar man?',
      en: 'Digitalizing the construction site — where to start',
      ru: 'Цифровизация стройплощадки — с чего начать',
    },
    excerpt: {
      sv: 'Du behöver inte byta ut allt på en gång. Här är de tre stegen som ger störst effekt med minst friktion för teamet.',
      en: 'You don’t need to replace everything at once. Here are the three steps that deliver the most impact with the least friction.',
      ru: 'Не нужно менять всё сразу. Три шага, которые дают наибольший эффект при минимальном сопротивлении команды.',
    },
    body: {
      sv: [
        'Digitalisering handlar inte om att köpa dyra system, utan om att ta bort dubbelarbete. Börja där pappret gör mest ont.',
        'Steg ett: samla projektinformation på ett ställe. Steg två: automatisera tidrapporten. Steg tre: koppla foton och dokument till rätt projekt.',
        'När teamet ser att vardagen blir enklare kommer resten av dig själv.',
      ],
      en: [
        'Digitalization is not about buying expensive systems — it’s about removing double work. Start where paper hurts the most.',
        'Step one: gather project info in one place. Step two: automate the timesheet. Step three: link photos and documents to the right project.',
        'Once the team sees daily work getting easier, the rest follows on its own.',
      ],
      ru: [
        'Цифровизация — это не про дорогие системы, а про устранение двойной работы. Начните там, где бумага мешает больше всего.',
        'Шаг один: собрать информацию по проекту в одном месте. Шаг два: автоматизировать табель. Шаг три: привязать фото и документы к нужному проекту.',
        'Как только команда увидит, что работать стало проще, остальное пойдёт само.',
      ],
    },
  },
  {
    slug: 'avtal-med-hantverkare-tips',
    cover: '/landing/features/offert.webp',
    date: '2026-07-15T09:00:00.000Z',
    tag: { sv: 'Guide', en: 'Guide', ru: 'Гайд' },
    title: {
      sv: 'Avtal med hantverkare — så skriver du ett tydligt kontrakt',
      en: 'Contracts with tradespeople — how to write a clear agreement',
      ru: 'Договор с подрядчиком — как составить понятный контракт',
    },
    excerpt: {
      sv: 'Ett tydligt avtal skyddar både dig och kunden. Vi går igenom vad som alltid bör finnas med och de vanligaste fallgroparna.',
      en: 'A clear contract protects both you and the client. We cover what to always include and the most common pitfalls.',
      ru: 'Понятный договор защищает и вас, и клиента. Разбираем, что всегда включать и какие самые частые ошибки.',
    },
    body: {
      sv: [
        'Att anlita eller vara hantverkare innebär en investering i tid och pengar. Ett tydligt avtal gör förväntningarna gemensamma.',
        'Se till att omfattning, pris, tidsplan och betalningsvillkor står svart på vitt. Reglera även ÄTA-arbeten (ändringar och tillägg) från start.',
        'Dokumentera överenskommelser skriftligt — det sparar dig från de flesta konflikter längre fram.',
      ],
      en: [
        'Hiring or being a tradesperson is an investment of time and money. A clear contract puts everyone’s expectations on the same page.',
        'Make sure scope, price, schedule, and payment terms are in writing. Also handle change orders and add-ons from the start.',
        'Document agreements in writing — it saves you from most conflicts down the line.',
      ],
      ru: [
        'Нанимать подрядчика или быть им — это вложение времени и денег. Понятный договор синхронизирует ожидания сторон.',
        'Пропишите объём, цену, сроки и условия оплаты. Сразу же урегулируйте изменения и дополнительные работы.',
        'Фиксируйте договорённости письменно — это избавит от большинства конфликтов в будущем.',
      ],
    },
  },
  {
    slug: 'projektledning-pa-byggarbetsplatsen',
    cover: '/landing/features/planing.webp',
    date: '2026-07-08T09:00:00.000Z',
    tag: { sv: 'Projektledning', en: 'Project management', ru: 'Управление проектами' },
    title: {
      sv: 'Projektledning på byggarbetsplatsen: 5 rutiner som håller',
      en: 'Site project management: 5 routines that hold up',
      ru: 'Управление проектом на стройке: 5 работающих привычек',
    },
    excerpt: {
      sv: 'Bra projektledning är inte magi utan rutiner. Fem enkla vanor som håller tidsplanen och budgeten på plats.',
      en: 'Good project management isn’t magic — it’s routines. Five simple habits that keep the schedule and budget on track.',
      ru: 'Хорошее управление проектом — не магия, а привычки. Пять простых правил, чтобы держать сроки и бюджет.',
    },
    body: {
      sv: [
        'De projekt som går i mål i tid har sällan de skickligaste hantverkarna — de har de tydligaste rutinerna.',
        'Håll en gemensam plan, en kort daglig avstämning, tydligt ägarskap per uppgift, dokumenterade beslut och ett ställe för alla filer.',
        'Enkelt att säga, men det är just enkelheten som gör att rutinerna faktiskt följs.',
      ],
      en: [
        'Projects that finish on time rarely have the most skilled crew — they have the clearest routines.',
        'Keep one shared plan, a short daily check-in, clear ownership per task, documented decisions, and one place for all files.',
        'Simple to say, but that simplicity is exactly why the routines actually get followed.',
      ],
      ru: [
        'Проекты, которые сдаются вовремя, редко имеют самых сильных мастеров — у них самые чёткие процессы.',
        'Держите единый план, короткую ежедневную сверку, ясную ответственность по задачам, зафиксированные решения и одно место для всех файлов.',
        'Просто на словах, но именно простота заставляет команду реально следовать процессам.',
      ],
    },
  },
  {
    slug: 'arbetsmiljo-och-sakerhet-pa-bygget',
    cover: '/landing/features/photo.webp',
    date: '2026-06-30T09:00:00.000Z',
    tag: { sv: 'Säkerhet', en: 'Safety', ru: 'Безопасность' },
    title: {
      sv: 'Arbetsmiljö och säkerhet på bygget — det praktiska',
      en: 'Health and safety on site — the practical side',
      ru: 'Охрана труда и безопасность на стройке — практика',
    },
    excerpt: {
      sv: 'Säkerhet får inte bli en pärm som samlar damm. Så gör du skyddsrutinerna till en naturlig del av arbetsdagen.',
      en: 'Safety shouldn’t be a binder collecting dust. Here’s how to make safety routines a natural part of the workday.',
      ru: 'Безопасность не должна быть папкой, что пылится на полке. Как встроить правила в обычный рабочий день.',
    },
    body: {
      sv: [
        'Den bästa skyddsronden är den som faktiskt blir gjord. Korta, återkommande kontroller slår tjocka pärmar varje gång.',
        'Fota avvikelser direkt i mobilen, koppla dem till rätt projekt och följ upp att de åtgärdas. Synlighet skapar ansvar.',
        'När rapportering tar tio sekunder blir säkerhet en vana istället för en pålaga.',
      ],
      en: [
        'The best safety round is the one that actually happens. Short, recurring checks beat thick binders every time.',
        'Photograph issues right in the app, link them to the right project, and follow up until they’re fixed. Visibility creates accountability.',
        'When reporting takes ten seconds, safety becomes a habit instead of a burden.',
      ],
      ru: [
        'Лучший обход по технике безопасности — тот, что реально проводится. Короткие регулярные проверки всегда бьют толстые папки.',
        'Фотографируйте нарушения прямо в приложении, привязывайте к нужному проекту и доводите до устранения. Прозрачность рождает ответственность.',
        'Когда отчёт занимает десять секунд, безопасность становится привычкой, а не обузой.',
      ],
    },
  },
  {
    slug: 'fakturering-for-byggforetag',
    cover: '/landing/features/invoice.webp',
    date: '2026-06-20T09:00:00.000Z',
    tag: { sv: 'Ekonomi', en: 'Finance', ru: 'Финансы' },
    title: {
      sv: 'Snabbare fakturering för byggföretag',
      en: 'Faster invoicing for construction companies',
      ru: 'Быстрее выставляйте счета в строительстве',
    },
    excerpt: {
      sv: 'Ju längre en faktura dröjer, desto senare får du betalt. Så kortar du vägen från utfört arbete till skickad faktura.',
      en: 'The longer an invoice waits, the later you get paid. Here’s how to shorten the path from work done to invoice sent.',
      ru: 'Чем дольше тянете со счётом, тем позже получите оплату. Как сократить путь от работы к отправленному счёту.',
    },
    body: {
      sv: [
        'Kassaflödet i ett byggföretag avgörs ofta av hur snabbt fakturan skickas — inte av hur mycket ni jobbar.',
        'När tid, material och ÄTA-arbeten redan är registrerade per projekt blir fakturaunderlaget nästan färdigt av sig självt.',
        'Mindre administration på kvällar och helger, och pengarna in på kontot tidigare.',
      ],
      en: [
        'Cash flow in a construction company is often decided by how fast the invoice goes out — not by how much you work.',
        'When time, materials, and change orders are already logged per project, the invoice basis is almost ready on its own.',
        'Less admin on evenings and weekends, and money in the account sooner.',
      ],
      ru: [
        'Денежный поток стройкомпании часто зависит от того, как быстро выставлен счёт, — а не от объёма работ.',
        'Когда время, материалы и допработы уже учтены по проекту, основа для счёта готова почти сама собой.',
        'Меньше бумажной работы по вечерам и выходным — и деньги на счёте раньше.',
      ],
    },
  },
  {
    slug: 'materialhantering-pa-bygget',
    cover: '/landing/features/tools.webp',
    date: '2026-06-12T09:00:00.000Z',
    tag: { sv: 'Material', en: 'Materials', ru: 'Материалы' },
    title: {
      sv: 'Materialhantering på bygget — spill kostar mer än du tror',
      en: 'Material management on site — waste costs more than you think',
      ru: 'Учёт материалов на стройке — перерасход дороже, чем кажется',
    },
    excerpt: {
      sv: 'Fel material, dubbelbeställningar och svinn äter marginalen. Så får du ordning på inköp och lager utan krångel.',
      en: 'Wrong materials, double orders and shrinkage eat your margin. Here is how to get purchasing and stock under control without hassle.',
      ru: 'Не тот материал, двойные заказы и потери съедают маржу. Как навести порядок в закупках и на складе без лишней возни.',
    },
    body: {
      sv: [
        'Material som beställs två gånger, ligger fel eller försvinner kostar mer än de flesta byggföretag räknar med.',
        'Registrera material per projekt när det tas ut. Då ser du förbrukningen i realtid och kan beställa på rätt underlag istället för på magkänsla.',
        'Bättre koll på materialet ger både lägre spill och ett tryggare kalkylunderlag inför nästa jobb.',
      ],
      en: [
        'Material ordered twice, stored in the wrong place, or lost costs more than most construction firms account for.',
        'Log materials per project as they are used. You see consumption in real time and can order on solid data instead of gut feeling.',
        'Better control over materials means both less waste and a safer basis for your next quote.',
      ],
      ru: [
        'Материал, заказанный дважды, лежащий не там или пропавший, обходится дороже, чем закладывает большинство компаний.',
        'Списывайте материалы по проекту в момент выдачи. Тогда вы видите расход в реальном времени и заказываете по данным, а не по интуиции.',
        'Порядок в материалах — это и меньше потерь, и надёжная основа для сметы следующего объекта.',
      ],
    },
  },
  {
    slug: 'kommunikation-i-byggprojekt',
    cover: '/landing/features/live.webp',
    date: '2026-06-04T09:00:00.000Z',
    tag: { sv: 'Kommunikation', en: 'Communication', ru: 'Коммуникация' },
    title: {
      sv: 'Kommunikation i byggprojekt — mindre sms-kaos, mer koll',
      en: 'Communication in construction projects — less text chaos, more clarity',
      ru: 'Коммуникация в стройпроектах — меньше хаоса в чатах, больше ясности',
    },
    excerpt: {
      sv: 'Viktig information sprids i privata sms och glöms bort. Så samlar du dialogen där den hör hemma — vid rätt projekt.',
      en: 'Key information gets buried in private texts and forgotten. Here is how to keep the conversation where it belongs — on the right project.',
      ru: 'Важное теряется в личных сообщениях и забывается. Как держать переписку там, где ей место — при нужном проекте.',
    },
    body: {
      sv: [
        'När beslut tas i privata sms-trådar hamnar hälften av teamet utanför loopen — och ingen minns vad som sades.',
        'Håll dialogen kopplad till projektet istället för till en person. Nya på jobbet ser historiken direkt och slipper fråga om samma sak igen.',
        'Samlad kommunikation minskar missförstånd och gör att rätt person får rätt information i tid.',
      ],
      en: [
        'When decisions happen in private text threads, half the team falls out of the loop — and nobody remembers what was said.',
        'Keep the conversation tied to the project instead of to a person. New crew members see the history at once and don’t have to ask the same thing again.',
        'Centralized communication cuts misunderstandings and gets the right information to the right person in time.',
      ],
      ru: [
        'Когда решения принимаются в личных чатах, половина команды выпадает из процесса — и никто не помнит, о чём договорились.',
        'Привязывайте переписку к проекту, а не к человеку. Новые сотрудники сразу видят историю и не переспрашивают одно и то же.',
        'Единая коммуникация снижает недопонимание и вовремя доносит нужную информацию до нужного человека.',
      ],
    },
  },
  {
    slug: 'uppgiftshantering-for-byggteam',
    cover: '/landing/features/tasks.webp',
    date: '2026-05-27T09:00:00.000Z',
    tag: { sv: 'Uppgifter', en: 'Tasks', ru: 'Задачи' },
    title: {
      sv: 'Uppgiftshantering för byggteam — vem gör vad, och när',
      en: 'Task management for construction crews — who does what, and when',
      ru: 'Управление задачами в бригаде — кто что делает и когда',
    },
    excerpt: {
      sv: 'Otydliga uppgifter blir försenade uppgifter. Så fördelar du arbetet så att inget faller mellan stolarna.',
      en: 'Vague tasks become late tasks. Here is how to assign work so nothing falls through the cracks.',
      ru: 'Нечёткие задачи становятся просроченными. Как распределить работу, чтобы ничего не потерялось.',
    },
    body: {
      sv: [
        'Det vanligaste skälet till att något inte blir gjort är inte lathet — det är att ingen visste att det var deras uppgift.',
        'Tilldela uppgifter med tydligt ägarskap, deadline och plats. Då ser var och en sin dag och du ser hela projektets status på en skärm.',
        'Enkel uppgiftshantering gör att fler saker blir klara i tid — utan att du behöver ringa runt och stämma av.',
      ],
      en: [
        'The most common reason something doesn’t get done isn’t laziness — it’s that nobody knew it was their task.',
        'Assign tasks with clear ownership, a deadline and a location. Everyone sees their day, and you see the whole project status on one screen.',
        'Simple task management gets more done on time — without you having to call around to check up.',
      ],
      ru: [
        'Чаще всего дело не сделано не из-за лени, а потому что никто не знал, что это его задача.',
        'Назначайте задачи с явным ответственным, сроком и местом. Каждый видит свой день, а вы — статус всего проекта на одном экране.',
        'Простое управление задачами позволяет больше успевать в срок — без обзвона и ручных сверок.',
      ],
    },
  },
  {
    slug: 'onboarding-av-nya-hantverkare',
    cover: '/landing/features/project.webp',
    date: '2026-05-19T09:00:00.000Z',
    tag: { sv: 'Team', en: 'Team', ru: 'Команда' },
    title: {
      sv: 'Onboarding av nya hantverkare — snabbt in i arbetet',
      en: 'Onboarding new tradespeople — up to speed fast',
      ru: 'Онбординг новых рабочих — быстро в дело',
    },
    excerpt: {
      sv: 'De första dagarna avgör hur snabbt en ny medarbetare blir produktiv. Så kortar du upplärningen utan att tappa kvalitet.',
      en: 'The first days decide how fast a new hire becomes productive. Here is how to shorten onboarding without losing quality.',
      ru: 'Первые дни определяют, как быстро новичок станет продуктивным. Как сократить обучение, не теряя качества.',
    },
    body: {
      sv: [
        'En ny hantverkare som inte hittar information stannar upp — och drar dessutom med sig en erfaren kollega som måste förklara.',
        'Ge nya medarbetare tillgång till projektets historik, rutiner och dokument direkt. Då kan de läsa in sig själva istället för att fråga om allt.',
        'Snabb onboarding betyder att teamet klarar toppar och nyanställningar utan att tempot faller.',
      ],
      en: [
        'A new tradesperson who can’t find information stalls — and drags along an experienced colleague who has to explain.',
        'Give new hires access to the project history, routines and documents right away. They can get up to speed on their own instead of asking about everything.',
        'Fast onboarding means the team handles busy periods and new hires without losing pace.',
      ],
      ru: [
        'Новый рабочий, который не находит информацию, простаивает — и отвлекает опытного коллегу, вынужденного всё объяснять.',
        'Дайте новичкам сразу доступ к истории проекта, регламентам и документам. Тогда они разберутся сами, а не будут спрашивать обо всём.',
        'Быстрый онбординг означает, что команда справляется с пиками и наймом, не теряя темпа.',
      ],
    },
  },
];

function buildHtml(paras: string[]): string {
  return paras
    .map((p, i) => (i === 1 ? `<h2>${p.split('. ')[0]}.</h2><p>${p}</p>` : `<p>${p}</p>`))
    .join('');
}

function toPost(seed: Seed, locale: MockLocale): BlogPost {
  const title = seed.title[locale];
  const excerpt = seed.excerpt[locale];
  return {
    _id: `mock-${seed.slug}`,
    title,
    slug: seed.slug,
    locale,
    excerpt,
    tag: seed.tag[locale],
    coverImageUrl: seed.cover,
    contentHtml: buildHtml(seed.body[locale]),
    seoTitle: `${title} | ByggExp`,
    seoDescription: excerpt,
    seoImageUrl: seed.cover,
    canonicalUrl: '',
    // Placeholder articles must never be indexed — they are demo content only.
    noIndex: true,
    isPublished: true,
    publishedAt: seed.date,
    createdAt: seed.date,
    updatedAt: seed.date,
  };
}

export function getMockBlogPosts(locale: BlogLocale): BlogPost[] {
  if (locale === 'nb' || locale === 'pl') return [];
  return SEEDS.map((seed) => toPost(seed, locale));
}

export function getMockBlogPost(
  locale: BlogLocale,
  slug: string,
): BlogPost | null {
  if (locale === 'nb' || locale === 'pl') return null;
  const seed = SEEDS.find((s) => s.slug === slug);
  return seed ? toPost(seed, locale) : null;
}
