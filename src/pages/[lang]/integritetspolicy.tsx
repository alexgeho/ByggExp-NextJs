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

export default function PrivacyPolicyPage({
  lang,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // Swedish is the authoritative version; other languages get an English
  // translation for convenience.
  if (lang === "sv") {
    return (
      <LegalDocument title="Integritetspolicy" updated="2026-07-30" lang="sv" contentLocales={svEnLocales}>
        <p>
          Denna policy beskriver hur RealMar AB (”vi”), org.nr 559474-9383,
          behandlar personuppgifter i ByggExp-plattformen. För anställdas
          uppgifter agerar vi normalt personuppgiftsbiträde åt kundföretaget
          (arbetsgivaren), som är personuppgiftsansvarig.
        </p>

        <h2>Vilka uppgifter vi behandlar</h2>
        <ul>
          <li>Kontouppgifter: namn, e-post, telefon, roll, profilbild.</li>
          <li>
            Anställningsrelaterat: yrke, timpris, personnummer (för ROT/lön),
            certifikat.
          </li>
          <li>
            Tid &amp; närvaro: arbetspass, in-/utcheckning, timmar,
            personalliggare.
          </li>
          <li>
            Platsdata (GPS): din position läses tillfälligt vid start av
            arbetspass för att kontrollera närvaro på arbetsplatsen. Positionen
            sparas inte som koordinater hos oss – endast projektets adress
            sparas.
          </li>
          <li>
            Projekt: uppgifter, dagbok, foton, dokument. Ekonomi: fakturor,
            utlägg, lön.
          </li>
        </ul>

        <h2>Ändamål och rättslig grund</h2>
        <table>
          <thead>
            <tr>
              <th>Ändamål</th>
              <th>Rättslig grund</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tillhandahålla tjänsten</td>
              <td>Avtal</td>
            </tr>
            <tr>
              <td>Tid/närvaro, personalliggare</td>
              <td>Rättslig förpliktelse + berättigat intresse</td>
            </tr>
            <tr>
              <td>GPS vid arbetspass</td>
              <td>Berättigat intresse (efter intresseavvägning)</td>
            </tr>
            <tr>
              <td>Fakturering, ROT, lön, bokföring</td>
              <td>Rättslig förpliktelse</td>
            </tr>
          </tbody>
        </table>

        <h2>Lagringstider</h2>
        <p>
          GPS-position används endast tillfälligt (When-In-Use) vid arbetspass
          för närvarokontroll och sparas inte som koordinater hos oss – endast
          projektets adress sparas. Personalliggare sparas i minst 2 år,
          bokföring/fakturor i 7 år. Övriga uppgifter så länge
          kund-/anställnings­relationen består, därefter gallring.
        </p>

        <h2>Mottagare och överföringar</h2>
        <p>
          Vi anlitar underbiträden för drift, betalning, e-post och
          AI-funktioner. Överföring till tredje land sker endast med giltig
          mekanism (EU:s standardavtalsklausuler / EU-US Data Privacy Framework).
        </p>

        <h2>Dina rättigheter</h2>
        <p>
          Du har rätt till tillgång, rättelse, radering, begränsning,
          dataportabilitet och att invända. I plattformen kan
          personuppgiftsansvarig exportera och radera en användares uppgifter.
          Kontakta support@byggexp.se eller din arbetsgivare. Klagomål kan lämnas
          till Integritetsskyddsmyndigheten (IMY).
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
    <LegalDocument title="Privacy Policy" updated="2026-07-30" lang="en" contentLocales={svEnLocales}>
      <p>
        This policy describes how RealMar AB (“we”), company reg. no.
        559474-9383, processes personal data in the ByggExp platform. For
        employee data we normally act as a data processor on behalf of the
        customer company (the employer), which is the data controller.
      </p>

      <h2>What data we process</h2>
      <ul>
        <li>Account data: name, email, phone, role, profile picture.</li>
        <li>
          Employment-related: profession, hourly rate, personal identity number
          (for ROT/payroll), certificates.
        </li>
        <li>
          Time &amp; attendance: work shifts, check-in/out, hours, staff ledger
          (personalliggare).
        </li>
        <li>
          Location data (GPS): your position is read momentarily when you start
          a shift to verify you are at the job site. It is not stored as
          coordinates on our servers — only the project’s address is saved.
        </li>
        <li>
          Projects: tasks, diary, photos, documents. Finance: invoices,
          expenses, payroll.
        </li>
      </ul>

      <h2>Purposes and legal basis</h2>
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Legal basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Providing the service</td>
            <td>Contract</td>
          </tr>
          <tr>
            <td>Time/attendance, staff ledger</td>
            <td>Legal obligation + legitimate interest</td>
          </tr>
          <tr>
            <td>GPS during a shift</td>
            <td>Legitimate interest (after a balancing test)</td>
          </tr>
          <tr>
            <td>Invoicing, ROT, payroll, accounting</td>
            <td>Legal obligation</td>
          </tr>
        </tbody>
      </table>

      <h2>Retention periods</h2>
      <p>
        GPS position is used only momentarily (When-In-Use) during a shift for
        the on-site check and is not stored as coordinates on our servers — only
        the project’s address is saved. The staff ledger is kept for at least 2
        years and accounting/invoices for 7 years. Other data is kept for as
        long as the customer/employment relationship lasts, and is then erased.
      </p>

      <h2>Recipients and transfers</h2>
      <p>
        We use sub-processors for hosting, payment, email and AI features.
        Transfers to third countries take place only under a valid mechanism
        (EU Standard Contractual Clauses / the EU-US Data Privacy Framework).
      </p>

      <h2>Your rights</h2>
      <p>
        You have the right to access, rectification, erasure, restriction, data
        portability and to object. Within the platform, the data controller can
        export and erase a user’s data. Contact support@byggexp.se or your
        employer. Complaints can be lodged with the Swedish Authority for Privacy
        Protection (IMY).
      </p>

      <h2>Contact</h2>
      <p>
        RealMar AB, c/o Alexander Gerhard, Byggmästarvägen 18, 168 32 Bromma,
        Sweden. Email: support@byggexp.se.
      </p>
    </LegalDocument>
  );
}
