import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import LegalDocument from "../../components/Legal/LegalDocument";
import { landingLanguageCodes, svEnLocales } from "../../locales/languages";

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: landingLanguageCodes.map((lang) => ({ params: { lang } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ lang: string }> = async ({ params }) => ({
  props: { lang: (params?.lang as string) || "sv" },
});

export default function TermsPage({
  lang,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (lang === "sv") {
    return (
      <LegalDocument title="Användarvillkor" updated="2026-07-30" lang="sv" contentLocales={svEnLocales}>
        <p className="legal-page__note">
          Standardvillkor — justera pris och villkor efter behov. Granskas av
          jurist innan publicering.
        </p>

        <h2>1. Tjänsten</h2>
        <p>
          ByggExp tillhandahålls av RealMar AB, org.nr 559474-9383 (”vi”).
          Villkoren gäller mellan oss och det företag som tecknar ett konto
          (”Kunden”).
        </p>

        <h2>2. Konton och användning</h2>
        <p>
          Kunden ansvarar för sina användares konton och för att uppgifter som
          läggs in är korrekta och att behandling av anställdas personuppgifter
          (inkl. GPS) har laglig grund och kommuniceras till de anställda. Se
          integritetspolicyn och biträdesavtalet.
        </p>

        <h2>3. Abonnemang och betalning</h2>
        <p>
          Tjänsten tillhandahålls mot löpande abonnemangsavgift enligt gällande
          prislista. Avgiften faktureras i förskott per månad eller år.
          Abonnemanget löper tills vidare och kan sägas upp med en (1) månads
          uppsägningstid till utgången av innevarande betalperiod. Redan betalda
          avgifter återbetalas inte. Prisändringar meddelas minst 30 dagar i
          förväg.
        </p>

        <h2>4. Tillgänglighet och ansvar</h2>
        <p>
          Vi strävar efter hög tillgänglighet men lämnar inga garantier om
          oavbruten drift och kan genomföra planerat underhåll. Vårt sammanlagda
          ansvar är begränsat till de avgifter Kunden betalat för Tjänsten under
          de senaste tolv (12) månaderna. Vi ansvarar inte för indirekta skador
          såsom utebliven vinst eller dataförlust som Kunden själv kunnat undvika.
          Inget i villkoren begränsar ansvar som enligt tvingande lag inte får
          begränsas.
        </p>

        <h2>5. Immateriella rättigheter</h2>
        <p>
          Vi behåller alla rättigheter till plattformen. Kunden får en
          icke-exklusiv, icke överlåtbar rätt att använda Tjänsten under
          avtalstiden.
        </p>

        <h2>6. Kundens data</h2>
        <p>
          Kunden äger sina data. Vi behandlar personuppgifter enligt
          biträdesavtalet. Vid avslut kan data exporteras eller raderas, med
          undantag för vad lag kräver att vi sparar.
        </p>

        <h2>7. Force majeure</h2>
        <p>
          Ingen part ansvarar för dröjsmål eller fel som beror på omständigheter
          utanför partens rimliga kontroll (t.ex. avbrott hos underleverantör,
          elavbrott, myndighetsbeslut).
        </p>

        <h2>8. Ändringar</h2>
        <p>Vi kan uppdatera villkoren; väsentliga ändringar meddelas i förväg.</p>

        <h2>9. Tillämplig lag</h2>
        <p>
          Svensk lag gäller. Tvist avgörs av svensk domstol med Stockholm
          tingsrätt som första instans.
        </p>

        <h2>Kontakt</h2>
        <p>
          RealMar AB, c/o Alexander Gerhard, Byggmästarvägen 18, 168 32 Bromma.
          E-post: support@byggexp.se.
        </p>
      </LegalDocument>
    );
  }

  return (
    <LegalDocument title="Terms of Service" updated="2026-07-30" lang="en" contentLocales={svEnLocales}>
      <p className="legal-page__note">
        Standard terms — adjust pricing and conditions as needed. Have them
        reviewed by a lawyer before publishing.
      </p>

      <h2>1. The service</h2>
      <p>
        ByggExp is provided by RealMar AB, company reg. no. 559474-9383 (“we”).
        These terms apply between us and the company that opens an account (the
        “Customer”).
      </p>

      <h2>2. Accounts and use</h2>
      <p>
        The Customer is responsible for its users’ accounts, for the accuracy of
        the data entered, and for ensuring that the processing of employees’
        personal data (incl. GPS) has a legal basis and is communicated to the
        employees. See the privacy policy and the data processing agreement.
      </p>

      <h2>3. Subscription and payment</h2>
      <p>
        The service is provided against a recurring subscription fee per the
        applicable price list. The fee is invoiced in advance monthly or yearly.
        The subscription runs until further notice and can be terminated with one
        (1) month’s notice to the end of the current billing period. Fees already
        paid are non-refundable. Price changes are announced at least 30 days in
        advance.
      </p>

      <h2>4. Availability and liability</h2>
      <p>
        We aim for high availability but give no guarantee of uninterrupted
        operation and may carry out planned maintenance. Our aggregate liability
        is limited to the fees the Customer has paid for the service during the
        last twelve (12) months. We are not liable for indirect damages such as
        lost profit or data loss that the Customer could have avoided. Nothing in
        these terms limits liability that may not be limited under mandatory law.
      </p>

      <h2>5. Intellectual property</h2>
      <p>
        We retain all rights to the platform. The Customer receives a
        non-exclusive, non-transferable right to use the service during the term.
      </p>

      <h2>6. Customer data</h2>
      <p>
        The Customer owns its data. We process personal data under the data
        processing agreement. On termination, data can be exported or erased,
        except for what the law requires us to keep.
      </p>

      <h2>7. Force majeure</h2>
      <p>
        Neither party is liable for delay or failure caused by circumstances
        beyond its reasonable control (e.g. outage at a subcontractor, power
        failure, government decision).
      </p>

      <h2>8. Changes</h2>
      <p>We may update these terms; material changes are announced in advance.</p>

      <h2>9. Governing law</h2>
      <p>
        Swedish law applies. Disputes are settled by Swedish courts, with
        Stockholm District Court as the court of first instance.
      </p>

      <h2>Contact</h2>
      <p>
        RealMar AB, c/o Alexander Gerhard, Byggmästarvägen 18, 168 32 Bromma,
        Sweden. Email: support@byggexp.se.
      </p>
    </LegalDocument>
  );
}
