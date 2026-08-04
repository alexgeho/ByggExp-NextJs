import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import LegalDocument from "../../components/Legal/LegalDocument";
import { landingLanguageCodes } from "../../locales/languages";

const ROWS_SV: [string, string, string, string][] = [
  ["MongoDB Atlas", "Databas / hosting", "EU – AWS Stockholm", "Inom EES"],
  ["Yelles AB", "App-drift (VPS)", "Sverige (EU)", "Inom EES"],
  ["Inleed", "Utgående e-post", "Sverige (EU)", "Inom EES"],
  ["Anthropic", "AI – kvitto-/certifikatskanning", "USA", "DPA + SCC"],
  ["DeepL", "Maskinöversättning", "Tyskland (EU)", "Inom EES"],
  ["Stripe", "Betalning / abonnemang", "EU + USA", "DPA + SCC + EU-US DPF"],
  ["Expo", "Push-notiser", "USA", "DPA / SCC"],
  ["Apple APNs / Google FCM", "Leverans av push", "USA", "SCC / EU-US DPF"],
];

const ROWS_EN: [string, string, string, string][] = [
  ["MongoDB Atlas", "Database / hosting", "EU – AWS Stockholm", "Within EEA"],
  ["Yelles AB", "App hosting (VPS)", "Sweden (EU)", "Within EEA"],
  ["Inleed", "Outgoing email", "Sweden (EU)", "Within EEA"],
  ["Anthropic", "AI – receipt/certificate scanning", "USA", "DPA + SCC"],
  ["DeepL", "Machine translation", "Germany (EU)", "Within EEA"],
  ["Stripe", "Payment / subscription", "EU + USA", "DPA + SCC + EU-US DPF"],
  ["Expo", "Push notifications", "USA", "DPA / SCC"],
  ["Apple APNs / Google FCM", "Push delivery", "USA", "SCC / EU-US DPF"],
];

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: landingLanguageCodes.map((lang) => ({ params: { lang } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ lang: string }> = async ({ params }) => ({
  props: { lang: (params?.lang as string) || "sv" },
});

export default function SubprocessorsPage({
  lang,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (lang === "sv") {
    return (
      <LegalDocument title="Underbiträden" updated="2026-07-30" lang="sv">
        <p>
          RealMar AB (org.nr 559474-9383) anlitar följande underbiträden för att
          tillhandahålla ByggExp. Överföring till tredje land sker endast med
          giltig mekanism (EU:s standardavtalsklausuler och/eller EU-US Data
          Privacy Framework).
        </p>
        <table>
          <thead>
            <tr>
              <th>Underbiträde</th>
              <th>Tjänst</th>
              <th>Plats</th>
              <th>Överföringsmekanism</th>
            </tr>
          </thead>
          <tbody>
            {ROWS_SV.map((r) => (
              <tr key={r[0]}>
                <td>{r[0]}</td>
                <td>{r[1]}</td>
                <td>{r[2]}</td>
                <td>{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          Vissa tjänster (t.ex. betalning och AI) aktiveras först vid behov. Vi
          uppdaterar listan när underbiträden tillkommer eller tas bort och
          informerar personuppgiftsansvariga kunder enligt
          personuppgiftsbiträdesavtalet.
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
    <LegalDocument title="Sub-processors" updated="2026-07-30" lang="en">
      <p>
        RealMar AB (company reg. no. 559474-9383) uses the following
        sub-processors to provide ByggExp. Transfers to third countries take
        place only under a valid mechanism (EU Standard Contractual Clauses
        and/or the EU-US Data Privacy Framework).
      </p>
      <table>
        <thead>
          <tr>
            <th>Sub-processor</th>
            <th>Service</th>
            <th>Location</th>
            <th>Transfer mechanism</th>
          </tr>
        </thead>
        <tbody>
          {ROWS_EN.map((r) => (
            <tr key={r[0]}>
              <td>{r[0]}</td>
              <td>{r[1]}</td>
              <td>{r[2]}</td>
              <td>{r[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Some services (e.g. payment and AI) are activated only when needed. We
        update the list when sub-processors are added or removed and inform
        controller customers under the data processing agreement.
      </p>
      <h2>Contact</h2>
      <p>
        RealMar AB, c/o Alexander Gerhard, Byggmästarvägen 18, 168 32 Bromma,
        Sweden. Email: support@byggexp.se.
      </p>
    </LegalDocument>
  );
}
