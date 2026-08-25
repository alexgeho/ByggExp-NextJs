import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import GipsKalkylatorTool from '../../../components/LeadMagnet/GipsKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { calcLocaleEnabled, type CalcLocale } from '../../../lib/locale';
import { localeOrigin } from '../../../lib/seo';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv served on byggexp.se, nb served on byggexp.no (Norway expansion). Content is
// keyed by locale; the page renders whichever the [lang] segment asks for. nb is
// gated by NB_LIVE (see lib/locale) until byggexp.no goes live.
type Locale = CalcLocale | 'ru';

type ToolContent = {
  metaTitle: string;
  description: string;
  badge: string;
  h1: string;
  intro: string;
  previewAlt: string;
  previewCaption: string;
  sections: { id: string; heading: string; body: ReactNode }[];
  faqHeading: string;
  faq: LeadMagnetFaqItem[];
  ctaHeading: string;
  ctaText: string;
  ctaButton: string;
  relatedHeading: string;
  related: { slug: string; label: string }[];
};

const CONTENT: Record<Locale, ToolContent> = {
  sv: {
    metaTitle: 'Gipskalkylator – antal gipsskivor, reglar & skruv | ByggExp',
    description:
      'Fyll i väggens mått så räknar vi hela materiallistan: antal gipsskivor, reglar (rätt c/c), skruv och isolering – enkel- eller dubbelsidig. Gratis, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Gipskalkylator',
    intro:
      'Ska du bygga en gipsvägg? Ange längd och höjd så räknar kalkylatorn fram exakt hur många skivor, reglar och skruv du behöver – och ser till att skivskarvarna landar mitt på reglarna. Då slipper du både överköp och en extra vända till bygghandeln.',
    previewAlt: 'Förhandsvisning av gipsberäknare',
    previewCaption: 'Så ser gipsberäknare ut',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'Så räknar kalkylatorn',
        body: (
          <ul>
            <li><strong>Gips:</strong> vägglängd × höjd × antal sidor × lager, plus spill, delat på skivans yta.</li>
            <li><strong>Reglar:</strong> vägglängd ÷ c/c + 1. Stommen räknas en gång även när båda sidor kläs.</li>
            <li><strong>Syll + hammarband:</strong> 2 × vägglängd i löpmeter (upp och ned).</li>
            <li><strong>Skruv:</strong> ca 20 st per m² och gipslager.</li>
            <li><strong>Isolering:</strong> väggytan en gång, eftersom den fyller stommen.</li>
          </ul>
        ),
      },
      {
        id: 'skivbredd-cc',
        heading: 'Skivbredd styr regelavståndet (c/c)',
        body: (
          <ul>
            <li>Skiva <strong>1200 mm</strong> bred → reglar <strong>c/c 600 mm</strong>.</li>
            <li>Skiva <strong>900 mm</strong> bred → reglar <strong>c/c 450 mm</strong>.</li>
            <li>Skarven mellan två skivor ska alltid landa mitt på en regel – därför hänger måtten ihop.</li>
          </ul>
        ),
      },
      {
        id: 'lager-skruv',
        heading: 'Lager, skruv och isolering',
        body: (
          <p>
            Ett lager räcker för de flesta innerväggar. Två lager ger bättre ljud-
            och brandmotstånd och krävs ibland enligt konstruktionen. Skruva i kant
            tätare (ca c200 mm) än i fält (ca c300 mm), och skruva det yttre lagret
            tätare än det inre. Ska väggen ljud- eller värmeisoleras fyller du
            stommen med isolering motsvarande väggytan.
          </p>
        ),
      },
      {
        id: 'info',
        heading: 'Tänk på',
        body: (
          <p>
            Lägg på spill för kap runt fönster, dörrar och hörn – köp hellre någon
            skiva extra. Måtten här följer Gyprocs monteringshandbok; kontrollera
            alltid skiv- och regeltyp samt infästning mot leverantörens anvisning
            för just din väggtyp (t.ex. våtrum, brand- eller ljudklassad vägg).
          </p>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor',
    faq: [
      { question: 'Vilket c/c-avstånd ska reglarna ha?', answer: 'Skivbredden avgör: en 1200 mm bred skiva ger c/c 600 mm, en 900 mm bred ger c/c 450 mm. Du behöver inte räkna själv – kalkylatorn sätter rätt c/c så fort du valt skivbredd.' },
      { question: 'Räknas gips på båda sidor av väggen?', answer: 'En regelvägg kläs normalt på båda sidor. Välj "Dubbelsidig" så dubblas gips- och skruvmängden, medan stommen (reglar, syll, hammarband) räknas en gång – den delas ju av båda sidorna.' },
      { question: 'Hur många skruv går det åt?', answer: 'Räkna med ca 20 skruv per m² och gipslager – det är siffran kalkylatorn använder. En dubbelsidig vägg med dubbla lager drar alltså ungefär fyra gånger så mycket som ett enkelt lager på en sida.' },
      { question: 'Ett eller två lager gips?', answer: 'För en vanlig innervägg räcker ett lager. Lägg på ett andra när du vill dämpa ljud eller höja brandklassen, eller när ritningen kräver det. Ställer du in antal lager per sida räknas skivor och skruv om direkt.' },
      { question: 'Hur stor är en gipsskiva?', answer: 'Vanliga mått är 1200 × 2600 mm (ca 3,1 m²) och 900 × 2600 mm (ca 2,3 m²). Välj skivbredd och skivlängd i kalkylatorn.' },
      { question: 'Kostar det något?', answer: 'Nej, kalkylatorn är gratis och kräver inget konto.' },
    ],
    ctaHeading: 'Räkna material och tid i ByggExp',
    ctaText: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler byggkalkylatorer',
    related: [
      { slug: 'reglar-kalkylator', label: 'Reglar & virke' },
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberäknare' },
      { slug: '', label: 'Alla gratis verktyg' },
    ],
  },
  nb: {
    metaTitle: 'Gipskalkulator – gipsplater, stendere & skruer 2026 | ByggExp',
    description:
      'Regn ut hele materiallisten for en gipsvegg: antall gipsplater, stendere (riktig c/c), svill/toppsvill, isolasjon og skruer – ut fra veggens mål. Gratis, uten konto.',
    badge: 'Gratis kalkulator',
    h1: 'Gipskalkulator',
    intro:
      'Angi veggens mål så får du hele materiallisten for et bindingsverk: gipsplater, stendere, svill og toppsvill, isolasjon og skruer. Platebredden styrer stenderavstanden (c/c) etter Gyprocs håndbok.',
    previewAlt: 'Forhåndsvisning av gipsberegner',
    previewCaption: 'Slik ser gipsberegner ut',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'Slik regner kalkulatoren',
        body: (
          <ul>
            <li><strong>Gips:</strong> vegglengde × høyde × antall sider × lag, pluss svinn, delt på platens flate.</li>
            <li><strong>Stendere:</strong> vegglengde ÷ c/c + 1. Reisverket regnes én gang selv når begge sider kles.</li>
            <li><strong>Svill + toppsvill:</strong> 2 × vegglengde i løpemeter (opp og ned).</li>
            <li><strong>Skruer:</strong> ca 20 stk per m² og gipslag.</li>
            <li><strong>Isolasjon:</strong> veggflaten én gang, siden den fyller reisverket.</li>
          </ul>
        ),
      },
      {
        id: 'skivbredd-cc',
        heading: 'Platebredden styrer stenderavstanden (c/c)',
        body: (
          <ul>
            <li>Plate <strong>1200 mm</strong> bred → stendere <strong>c/c 600 mm</strong>.</li>
            <li>Plate <strong>900 mm</strong> bred → stendere <strong>c/c 450 mm</strong>.</li>
            <li>Skjøten mellom to plater skal alltid lande midt på en stender – derfor henger målene sammen.</li>
          </ul>
        ),
      },
      {
        id: 'lager-skruv',
        heading: 'Lag, skruer og isolasjon',
        body: (
          <p>
            Ett lag holder for de fleste innervegger. To lag gir bedre lyd-
            og brannmotstand og kreves noen ganger etter konstruksjonen. Skru tettere i kant
            (ca c200 mm) enn i felt (ca c300 mm), og skru det ytre laget
            tettere enn det indre. Skal veggen lyd- eller varmeisoleres fyller du
            reisverket med isolasjon tilsvarende veggflaten.
          </p>
        ),
      },
      {
        id: 'info',
        heading: 'Tenk på',
        body: (
          <p>
            Legg på svinn for kapp rundt vinduer, dører og hjørner – kjøp heller en
            plate ekstra. Målene her følger Gyprocs monteringshåndbok; kontroller
            alltid plate- og stendertype samt innfesting mot leverandørens anvisning
            for akkurat din veggtype (f.eks. våtrom, brann- eller lydklasset vegg).
          </p>
        ),
      },
    ],
    faqHeading: 'Vanlige spørsmål',
    faq: [
      { question: 'Hvilken c/c-avstand skal stenderne ha?', answer: 'Det styres av platebredden. Er gipsplaten 1200 mm bred settes stenderne c/c 600 mm, er platen 900 mm bred gjelder c/c 450 mm. Kalkulatoren velger riktig c/c automatisk når du angir platebredden.' },
      { question: 'Regnes gips på begge sider av veggen?', answer: 'Et bindingsverk kles normalt på begge sider. Velg "Dobbeltsidig" så dobles gips- og skruemengden, mens reisverket (stendere, svill, toppsvill) regnes én gang – det deles jo av begge sidene.' },
      { question: 'Hvor mange skruer går det med?', answer: 'Regn med ca 20 skruer per m² og gipslag. Gyproc angir tettere innfesting i kanten (ca c200 mm) enn i felt (ca c300 mm), og det ytre laget skrus tettere enn det indre.' },
      { question: 'Ett eller to lag gips?', answer: 'To lag gir bedre lyd- og brannmotstand og kreves noen ganger etter konstruksjonen. Velg antall lag per side i kalkulatoren så regnes plater og skruer om.' },
      { question: 'Hvor stor er en gipsplate?', answer: 'Vanlige mål er 1200 × 2600 mm (ca 3,1 m²) og 900 × 2600 mm (ca 2,3 m²). Velg platebredde og platelengde i kalkulatoren.' },
      { question: 'Koster det noe?', answer: 'Nei, kalkulatoren er gratis og krever ingen konto.' },
    ],
    ctaHeading: 'Regn ut materialer og tid i ByggExp',
    ctaText: 'Hold styr på materialer, tid og kostnader per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere byggkalkulatorer',
    related: [
      { slug: 'reglar-kalkylator', label: 'Stendere & trelast' },
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberegner' },
      { slug: '', label: 'Alle gratis verktøy' },
    ],
  },
  en: {
    metaTitle: 'Plasterboard calculator – boards, studs & screws 2026 | ByggExp',
    description:
      'Work out the full material list for a plasterboard wall: number of boards, studs (correct c/c), plates, insulation and screws – from the wall dimensions. Free, no account.',
    badge: 'Free calculator',
    h1: 'Plasterboard calculator',
    intro:
      'Building a plasterboard wall? Enter the length and height and the calculator works out exactly how many boards, studs and screws you need – and keeps the board joints landing in the middle of a stud. No over-ordering, no second trip to the merchant.',
    previewAlt: 'Preview of the plasterboard calculator',
    previewCaption: 'This is how the plasterboard calculator looks',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'How the calculator works',
        body: (
          <ul>
            <li><strong>Plasterboard:</strong> wall length × height × number of sides × layers, plus waste, divided by the board area.</li>
            <li><strong>Studs:</strong> wall length ÷ c/c + 1. The frame is counted once even when both sides are clad.</li>
            <li><strong>Bottom + top plate:</strong> 2 × wall length in linear metres (top and bottom).</li>
            <li><strong>Screws:</strong> about 20 pcs per m² and board layer.</li>
            <li><strong>Insulation:</strong> the wall area once, since it fills the frame.</li>
          </ul>
        ),
      },
      {
        id: 'skivbredd-cc',
        heading: 'Board width sets the stud spacing (c/c)',
        body: (
          <ul>
            <li>Board <strong>1200 mm</strong> wide → studs <strong>c/c 600 mm</strong>.</li>
            <li>Board <strong>900 mm</strong> wide → studs <strong>c/c 450 mm</strong>.</li>
            <li>The joint between two boards must always land in the middle of a stud – that’s why the dimensions are linked.</li>
          </ul>
        ),
      },
      {
        id: 'lager-skruv',
        heading: 'Layers, screws and insulation',
        body: (
          <p>
            One layer is enough for most interior walls. Two layers give better sound and fire
            resistance and are sometimes required by the design. Screw more closely at the edges
            (about c200 mm) than in the field (about c300 mm), and screw the outer layer more closely
            than the inner. If the wall is to be sound- or heat-insulated, fill the frame with
            insulation equal to the wall area.
          </p>
        ),
      },
      {
        id: 'info',
        heading: 'Keep in mind',
        body: (
          <p>
            Add waste for cuts around windows, doors and corners – better to buy a board or two
            extra. The dimensions here follow Gyproc’s installation manual; always check board and
            stud type and fixings against the supplier’s instructions for your specific wall type
            (e.g. wet room, fire- or sound-rated wall).
          </p>
        ),
      },
    ],
    faqHeading: 'Frequently asked questions',
    faq: [
      { question: 'Which c/c spacing should the studs have?', answer: 'The board width decides it: a 1200 mm board gives c/c 600 mm, a 900 mm board gives c/c 450 mm. You don’t have to work it out – the calculator sets the right c/c as soon as you pick the board width.' },
      { question: 'Is plasterboard counted on both sides of the wall?', answer: 'A stud wall is normally clad on both sides. Choose "Both sides" and the board and screw quantities double, while the frame (studs, plates) is counted once – it is shared by both sides.' },
      { question: 'How many screws are needed?', answer: 'Reckon about 20 screws per m² and board layer – that is the figure the calculator uses. A wall clad on both sides with two layers therefore takes roughly four times as many as a single layer on one side.' },
      { question: 'One or two layers of plasterboard?', answer: 'For a standard interior wall, a single layer does the job. Add a second when you want to dampen sound or raise the fire rating, or when the drawing calls for it. Set the number of layers per side and boards and screws are recalculated.' },
      { question: 'How big is a plasterboard sheet?', answer: 'Common sizes are 1200 × 2600 mm (about 3.1 m²) and 900 × 2600 mm (about 2.3 m²). Choose board width and length in the calculator.' },
      { question: 'Does it cost anything?', answer: 'No, the calculator is free and requires no account.' },
    ],
    ctaHeading: 'Calculate material and time in ByggExp',
    ctaText: 'Keep track of material, time and costs per project. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'More construction calculators',
    related: [
      { slug: 'reglar-kalkylator', label: 'Studs & timber' },
      { slug: 'kvadratmeter-kalkylator', label: 'Square-metre calculator' },
      { slug: '', label: 'All free tools' },
    ],
  },
  ru: {
    metaTitle: 'Калькулятор гипсокартона — листы, стойки и саморезы | ByggExp',
    description:
      'Введите размеры стены — и мы рассчитаем весь список материалов: количество листов ГКЛ, стойки (правильный c/c), саморезы и изоляцию — с одной или двух сторон. Бесплатно, без регистрации.',
    badge: 'Бесплатный калькулятор',
    h1: 'Калькулятор гипсокартона',
    intro:
      'Строите стену из гипсокартона? Укажите длину и высоту — и калькулятор рассчитает, сколько именно листов, стоек и саморезов нужно, и проследит, чтобы стыки листов приходились на середину стоек. Так вы избежите и перезакупки, и лишней поездки в строймагазин.',
    previewAlt: 'Предпросмотр калькулятора гипсокартона',
    previewCaption: 'Так выглядит калькулятор гипсокартона',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'Как считает калькулятор',
        body: (
          <ul>
            <li><strong>Гипсокартон:</strong> длина стены × высота × число сторон × слои, плюс отходы, делить на площадь листа.</li>
            <li><strong>Стойки:</strong> длина стены ÷ c/c + 1. Каркас считается один раз, даже когда обшиваются обе стороны.</li>
            <li><strong>Обвязка (низ + верх):</strong> 2 × длина стены в погонных метрах.</li>
            <li><strong>Саморезы:</strong> ок. 20 шт на м² и слой ГКЛ.</li>
            <li><strong>Изоляция:</strong> площадь стены один раз, так как она заполняет каркас.</li>
          </ul>
        ),
      },
      {
        id: 'skivbredd-cc',
        heading: 'Ширина листа задаёт шаг стоек (c/c)',
        body: (
          <ul>
            <li>Лист шириной <strong>1200 мм</strong> → стойки <strong>c/c 600 мм</strong>.</li>
            <li>Лист шириной <strong>900 мм</strong> → стойки <strong>c/c 450 мм</strong>.</li>
            <li>Стык двух листов всегда должен приходиться на середину стойки — поэтому размеры связаны.</li>
          </ul>
        ),
      },
      {
        id: 'lager-skruv',
        heading: 'Слои, саморезы и изоляция',
        body: (
          <p>
            Для большинства внутренних стен достаточно одного слоя. Два слоя дают лучшую
            звуко- и огнестойкость и иногда требуются по конструкции. По краю крепите
            чаще (ок. c200 мм), чем в поле (ок. c300 мм), и внешний слой — чаще внутреннего.
            Если стену нужно звуко- или теплоизолировать, заполните каркас изоляцией по
            площади стены.
          </p>
        ),
      },
      {
        id: 'info',
        heading: 'Учтите',
        body: (
          <p>
            Заложите отходы на подрезку вокруг окон, дверей и углов — лучше купить пару
            листов про запас. Размеры здесь соответствуют монтажному руководству Gyproc;
            всегда сверяйте тип листа и стоек, а также крепёж с инструкцией поставщика для
            вашего типа стены (например, влажное помещение, огне- или звукоизоляционная стена).
          </p>
        ),
      },
    ],
    faqHeading: 'Частые вопросы',
    faq: [
      { question: 'Какой шаг c/c должен быть у стоек?', answer: 'Определяет ширина листа: лист 1200 мм даёт c/c 600 мм, лист 900 мм — c/c 450 мм. Считать самому не нужно — калькулятор ставит правильный c/c, как только вы выбрали ширину листа.' },
      { question: 'Считается ли гипсокартон с обеих сторон стены?', answer: 'Каркасную стену обычно обшивают с двух сторон. Выберите «С двух сторон» — и количество ГКЛ и саморезов удвоится, а каркас (стойки, обвязка) считается один раз, ведь он общий для обеих сторон.' },
      { question: 'Сколько уходит саморезов?', answer: 'Считайте ок. 20 саморезов на м² и слой ГКЛ — это значение использует калькулятор. Двусторонняя стена в два слоя расходует примерно вчетверо больше, чем один слой с одной стороны.' },
      { question: 'Один или два слоя гипсокартона?', answer: 'Для обычной внутренней стены достаточно одного слоя. Добавьте второй, когда нужно приглушить звук или повысить огнестойкость, или когда этого требует чертёж. При изменении числа слоёв на сторону листы и саморезы пересчитываются сразу.' },
      { question: 'Какого размера лист гипсокартона?', answer: 'Обычные размеры — 1200 × 2600 мм (ок. 3,1 м²) и 900 × 2600 мм (ок. 2,3 м²). Выберите ширину и длину листа в калькуляторе.' },
      { question: 'Это бесплатно?', answer: 'Да, калькулятор бесплатный и не требует регистрации.' },
    ],
    ctaHeading: 'Считайте материалы и время в ByggExp',
    ctaText: 'Контролируйте материалы, время и затраты по проекту. Закажите демо.',
    ctaButton: 'Заказать демо',
    relatedHeading: 'Другие строительные калькуляторы',
    related: [
      { slug: 'reglar-kalkylator', label: 'Стойки и брус' },
      { slug: 'kvadratmeter-kalkylator', label: 'Калькулятор квадратных метров' },
      { slug: '', label: 'Все бесплатные инструменты' },
    ],
  },
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const lang = params?.lang;
  // ru is served for the calculator pages that have Russian content (for review /
  // the Russian-speaking segment); other calculators stay sv/nb/en.
  if (lang === 'ru' || calcLocaleEnabled(lang)) {
    return { props: { lang } };
  }
  return { notFound: true };
};

export default function Page({ lang }: { lang: Locale }) {
  const c = CONTENT[lang];
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/gips-kalkylator`;

  return (
    <>
      <Head>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={c.metaTitle} />
        <meta property="og:description" content={c.description} />
        <meta property="og:url" content={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: c.faq.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: { '@type': 'Answer', text: item.answer },
              })),
            }),
          }}
        />
      </Head>

      <Header headerT={headerT} />

      <LeadMagnetPage
        badge={c.badge}
        title={c.h1}
        intro={c.intro}
        locale={lang}
        tool={<GipsKalkylatorTool locale={lang} />}
        leadForm={<ToolLeadForm tool="gips-kalkylator" locale={lang} />}
        preview={
          <PreviewImage
            src="/landing/verktyg/gips-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={474}
          />
        }
        sections={c.sections}
        embedSlug={lang === 'ru' ? undefined : 'gips-kalkylator'}
        embedTitle={c.h1}
        faqHeading={c.faqHeading}
        faq={c.faq}
        cta={{
          heading: c.ctaHeading,
          text: c.ctaText,
          buttonLabel: c.ctaButton,
          href: `/${lang}/contact`,
        }}
        relatedHeading={c.relatedHeading}
        related={c.related.map((r) => ({
          href: `/${lang}/verktyg${r.slug ? `/${r.slug}` : ''}`,
          label: r.label,
        }))}
      />

      <Footer footerT={footerT} />
    </>
  );
}
