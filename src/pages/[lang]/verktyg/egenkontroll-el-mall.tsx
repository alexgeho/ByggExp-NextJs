import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import EgenkontrollTool from '../../../components/LeadMagnet/EgenkontrollTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv-only lead magnet — see content-value-strategy. Dedicated el-page so the
// query "egenkontroll el mall gratis" (top impression driver) lands on a page
// that is 110% about elinstallation: the tool opens pre-filled with the el
// preset and every section talks el, not generic egenkontroll.
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad ska en egenkontroll för el innehålla?',
    answer:
      'Företag, ansvarig elinstallatör, vilken anläggning som kontrolleras och vilket mätinstrument som använts. Därefter kontrollpunkter i två steg: före ibruktagning (skyddsjord ansluten, kapslingar och beröringsskydd på plats, inga oisolerade ledare åtkomliga) och när anläggningen är klar att överlämnas (kontinuitet, isolationsresistans, polaritet och fasföljd, spänning, jordfelsbrytare och överströmsskydd). Mätvärden skrivs in med enhet, och varje steg signeras och dateras.',
  },
  {
    question: 'Vilka regler styr egenkontrollen för el?',
    answer:
      'Elinstallationsföretag ska ha ett egenkontrollprogram enligt elsäkerhetslagen och Elsäkerhetsverkets föreskrift ELSÄK-FS 2017:3 (3 kap. 10–13 §§): bestämma kontrollens omfattning inför varje arbete, kontrollera det utförda arbetet och hantera fel och brister. Hur mätningarna görs anges inte av Elsäkerhetsverket – exempel på metoder finns i SS 436 40 00 utg. 4, del 6.',
  },
  {
    question: 'Vilka mätvärden gäller för isolationsresistans och jordfelsbrytare?',
    answer:
      'För en vanlig lågspänningsinstallation mäts isolationsresistansen med 500 V likspänning och ska vara minst 1 MΩ. En 30 mA jordfelsbrytare ska normalt lösa ut inom 300 ms vid märkutlösningsström (IΔn) och inom 40 ms vid 5 × IΔn. Kontrollera alltid mot standarden och skyddsanordningens data för just din installation.',
  },
  {
    question: 'Vem ansvarar för och signerar egenkontrollen?',
    answer:
      'Den som utför arbetet kontrollerar det enligt företagets egenkontrollprogram innan anläggningen tas i bruk. Elinstallatören ansvarar för att programmet följs. Mallen har därför två signaturer: en för kontrollen före ibruktagning och en för kontrollen vid överlämning.',
  },
  {
    question: 'Hur länge ska en egenkontroll för el sparas?',
    answer:
      'Spara egenkontrollen minst lika länge som ansvaret för arbetet löper – enligt AB 04 är garantitiden normalt fem år och ansvarstiden tio år. Vid en tvist eller skada är mätprotokollet det som visar att installationen var kontrollerad och fackmässigt utförd.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) {
    return { notFound: true };
  }
  return { props: {} };
};

export default function EgenkontrollElMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/egenkontroll-el-mall`;

  const title = 'Egenkontroll el – gratis mall (PDF) | ByggExp';
  const description =
    'Gratis egenkontroll el med mätprotokoll: 22 kontrollpunkter före ibruktagning och vid överlämning, isolationsresistans, jordfelsbrytare (ms), kontinuitet. PDF/Excel, utan konto.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQ.map((item) => ({
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
        badge="Gratis mall"
        title="Egenkontroll el – gratis mall att fylla i online"
        intro="Färdig egenkontroll med mätprotokoll för elinstallation – 22 kontrollpunkter i fyra steg, från kontroll före ibruktagning till överlämning. Skriv in mätvärden (Ω, MΩ, ms), sätt resultat och ladda ner som PDF eller Excel med två signeringssteg. Gratis och utan konto."
        tool={<EgenkontrollTool defaultPreset="el" />}
        leadForm={<ToolLeadForm tool="egenkontroll-el-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/egenkontroll-preview.webp"
            alt="Förhandsvisning av ifylld egenkontroll för elinstallation som PDF"
            caption="Så ser en ifylld egenkontroll för el ut som PDF"
            width={1000}
            height={548}
          />
        }
        sections={[
          {
            id: 'vad-ar-egenkontroll-el',
            heading: 'Vad är en egenkontroll för el?',
            body: (
              <>
                <p>
                  En egenkontroll för el är elektrikerns egen dokumenterade kontroll av att
                  elinstallationen är rätt och säkert utförd. Den visar vad som kontrollerats, av vem och
                  med vilket resultat – och blir beviset på att installationen är fackmässig och testad
                  innan den tas i drift.
                </p>
                <p>
                  Poängen är enkel: den som drar elen intygar själv, punkt för punkt, att momentet är
                  klart. Jordfelsbrytaren är testad och löser ut, gruppcentralen är märkt,
                  isolationsmätningen är utförd. Blir något inte godkänt – till exempel en skyddsledare
                  som saknas i en dosa – noteras en anmärkning som ska åtgärdas och följas upp.
                </p>
              </>
            ),
          },
          {
            id: 'kontrollpunkter-egenkontroll-el',
            heading: 'Kontrollpunkter i en egenkontroll för el',
            body: (
              <>
                <p>
                  Mallen följer de kontrollmoment Elsäkerhetsverket beskriver för egenkontroll och är
                  uppdelad i fyra steg:
                </p>
                <ul>
                  <li>
                    <strong>A. Före ibruktagning</strong> – skyddsjord ansluten och fungerande,
                    apparatlock, kapslingar och beröringsskydd på plats, inga enkel- eller oisolerade
                    ledare åtkomliga och efterkontroll att utsatta delar inte är spänningsförande.
                  </li>
                  <li>
                    <strong>B. Okulär kontroll</strong> – utfört enligt handling, rätt ledare och
                    förläggning, identifierbara skyddsledare, överströmsskydd enligt gruppförteckning,
                    rätt kapslingsklass, fastsatta dosor och uttag, brandtätade genomföringar och märkt
                    central.
                  </li>
                  <li>
                    <strong>C. Provning och mätning</strong> – skyddsledarens kontinuitet till
                    jordskena (Ω), isolationsresistans vid 500 V DC (MΩ, krav ≥ 1 MΩ), polaritet och
                    fasföljd, spänning (V) och jordfelsbrytarens utlösningstid vid IΔn och 5 × IΔn (ms).
                  </li>
                  <li>
                    <strong>D. Överlämning</strong> – avvikelser åtgärdade och efterkontrollerade,
                    gruppförteckning, mätvärden och skötselinstruktion lämnade till beställaren.
                  </li>
                </ul>
                <p>
                  I huvudet fyller du i företag, ansvarig elinstallatör, vilken anläggning som
                  kontrolleras och vilket mätinstrument som använts – det gör protokollet spårbart.
                  Punkter som inte berör arbetet markerar du som <em>ej aktuellt</em>.
                </p>
              </>
            ),
          },
          {
            id: 'sa-fyller-du-i-egenkontroll-el',
            heading: 'Så fyller du i egenkontrollen för el steg för steg',
            body: (
              <ol>
                <li>Fyll i projekt, företag, ansvarig elinstallatör, anläggning och mätinstrument.</li>
                <li>Gör steg A innan anläggningen spänningssätts och signera kontrollen före ibruktagning.</li>
                <li>Gå igenom steg B och mät i steg C – skriv in det lägsta/högsta uppmätta värdet med enhet.</li>
                <li>Sätt resultat per punkt och skriv en kommentar vid anmärkningar.</li>
                <li>Åtgärda anmärkningar, efterkontrollera och signera kontrollen vid överlämning.</li>
                <li>Ladda ner som PDF eller Excel och lämna över tillsammans med gruppförteckningen.</li>
              </ol>
            ),
          },
          {
            id: 'exempel-egenkontroll-el',
            heading: 'Exempel: mätprotokoll efter elinstallation i lägenhet',
            body: (
              <>
                <p>Du har dragit om grupp 1–8 i en lägenhet. Steg C i protokollet kan då se ut så här:</p>
                <ul>
                  <li>Skyddsledarens kontinuitet till jordskena – <em>0,42 Ω, godkänd</em></li>
                  <li>Isolationsresistans 500 V DC – <em>&gt; 200 MΩ, godkänd (krav ≥ 1 MΩ)</em></li>
                  <li>Polaritet och fasföljd – <em>godkänd</em></li>
                  <li>Jordfelsbrytare vid IΔn – <em>24 ms, godkänd (krav ≤ 300 ms)</em></li>
                  <li>Jordfelsbrytare vid 5 × IΔn – <em>12 ms, godkänd (krav ≤ 40 ms)</em></li>
                  <li>
                    Dosor och uttag fastsatta (steg B) – <em>anmärkning: löst uttag i hall, åtgärdat och
                    efterkontrollerat</em>
                  </li>
                </ul>
                <p>
                  Med mätvärdena inskrivna och båda signeringsstegen ifyllda har du ett protokoll som
                  håller om beställaren, en besiktningsman eller Elsäkerhetsverket frågar.
                </p>
              </>
            ),
          },
          {
            id: 'egenkontroll-el-och-normer',
            heading: 'Egenkontroll el och elinstallationsreglerna',
            body: (
              <p>
                Kontrollerna görs mot gällande normer, framför allt{' '}
                <strong>elinstallationsreglerna SS 436 40 00</strong>. Isolationsmätning och funktionsprov
                av jordfelsbrytare görs med metoderna i standardens del 6. Själva kravet på egenkontroll
                kommer från elsäkerhetslagen och ELSÄK-FS 2017:3: företaget ska ha ett
                egenkontrollprogram, kontrollera varje arbete innan anläggningen tas i bruk och hantera
                fel och brister. Mallen är det praktiska protokollet för den kontrollen – rutinerna i
                själva programmet beskriver du i företagets egenkontrollprogram.
              </p>
            ),
          },
          {
            id: 'vanliga-misstag-egenkontroll-el',
            heading: 'Vanliga misstag att undvika',
            body: (
              <ul>
                <li>
                  <strong>Bara en bock, inget mätvärde.</strong> «Isolationsmätning utförd» utan värde och
                  enhet bevisar ingenting – skriv in uppmätt MΩ och ms.
                </li>
                <li>
                  <strong>Anmärkning utan uppföljning.</strong> En saknad skyddsledare som noteras men
                  aldrig följs upp är värdelös som bevis.
                </li>
                <li>
                  <strong>Ingen kontroll före ibruktagning.</strong> Skyddsjord och beröringsskydd ska
                  vara kontrollerade innan anläggningen spänningssätts – inte först vid överlämning.
                </li>
                <li>
                  <strong>Okänt mätinstrument.</strong> Ange instrument och kalibrering, annars går
                  värdena inte att lita på i efterhand.
                </li>
                <li>
                  <strong>Egenkontrollen görs i efterhand.</strong> Fyll i löpande medan arbetet pågår,
                  inte veckor senare.
                </li>
                <li>
                  <strong>Bristfällig märkning.</strong> Omärkt gruppcentral gör felsökning och framtida
                  arbete onödigt svårt.
                </li>
              </ul>
            ),
          },
          {
            id: 'egenkontroll-el-i-byggexp',
            heading: 'Så gör du egenkontroller för el i ByggExp',
            body: (
              <p>
                Mallen ovan är gratis att använda. I ByggExp finns färdiga egenkontroll-mallar för el,
                VVS, bygg/stomme och skyddsrond – du fyller i på plats, markerar resultat och samlar alla
                kontroller per projekt. Du kan skapa egna el-mallar för återkommande kontroller, se vilka
                installationer som är godkända och vilka som har anmärkning, och ha hela dokumentationen
                redo när beställaren eller besiktningsmannen frågar. Eftersom egenkontrollerna ligger
                tillsammans med byggdagbok, foton och tid får du en samlad bild av kvaliteten i projektet.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om egenkontroll för el"
        faq={FAQ}
        cta={{
          heading: 'Gör egenkontroller för el i ByggExp',
          text: 'Färdiga mallar för el, VVS, bygg och skyddsrond – ifyllda på plats och samlade per projekt. Boka en demo och se hur det fungerar.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler guider och mallar"
        related={[
          { href: `/${LOCALE}/verktyg/egenkontroll-mall`, label: 'Egenkontroll – mall för alla yrken' },
          { href: `/${LOCALE}/verktyg/byggdagbok-mall`, label: 'Byggdagbok – gratis mall' },
          { href: `/${LOCALE}/verktyg/tidrapport-mall`, label: 'Tidrapport – gratis mall' },
          { href: `/${LOCALE}/blog/dokumentera-med-foton-pa-bygget`, label: 'Dokumentera med foton på bygget' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
