import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

import LegalDocument from "../../components/Legal/LegalDocument";
import { landingLanguageCodes, svEnLocales } from "../../locales/languages";

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: landingLanguageCodes.map((lang) => ({ params: { lang } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ lang: string }> = async ({ params }) => ({
  props: { lang: (params?.lang as string) || "sv" },
});

export default function DpaPage({
  lang,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (lang === "sv") {
    return (
      <LegalDocument
        title="Personuppgiftsbiträdesavtal (DPA)"
        updated="2026-09-26"
        lang="sv"
        contentLocales={svEnLocales}
      >
        <p className="legal-page__note">
          Detta biträdesavtal gäller mellan Real Marketing s. r. o. och det kundföretag som
          tecknar ett konto. Det utgör bilaga till abonnemanget/huvudavtalet.
          Granskas av jurist innan undertecknande.
        </p>

        <p>
          Real Marketing s. r. o. (IČO 53551958), ”Biträdet”, behandlar personuppgifter
          för kundföretagets (”Ansvarig”) räkning enligt art. 28 GDPR.
        </p>

        <h2>1. Föremål och varaktighet</h2>
        <p>
          Biträdet behandlar uppgifter endast för att tillhandahålla plattformen,
          så länge huvudavtalet gäller. Vid upphörande raderas eller återlämnas
          uppgifter enligt punkt 8.
        </p>

        <h2>2. Behandlingens art och ändamål</h2>
        <p>
          Drift av bygg-/projekthanteringsplattform: konton, projekt, uppgifter,
          tid- och närvaroregistrering, GPS vid arbetspass, fakturering, lön och
          dokumenthantering.
        </p>

        <h2>3. Registrerade och uppgifter</h2>
        <p>
          Ansvarigs anställda, underentreprenörer, kontaktpersoner och kunder.
          Identitet/kontakt, anställningsdata, personnummer (ROT/lön),
          tid/närvaro, platsdata (GPS), ekonomi och projektdata.
        </p>

        <h2>4. Biträdets skyldigheter</h2>
        <p>
          Behandla endast enligt Ansvarigs dokumenterade instruktioner;
          säkerställa tystnadsplikt; vidta säkerhetsåtgärder enligt art. 32;
          bistå med registrerades rättigheter, säkerhet, incidentanmälan och
          DPIA; radera/återlämna vid avslut; möjliggöra granskning.
        </p>

        <h2>5. Underbiträden</h2>
        <p>
          Ansvarig ger generellt förhandsgodkännande till de underbiträden som
          anges på sidan{" "}
          <Link href={`/${lang}/underbitraden`}>Underbiträden</Link>. Biträdet
          informerar om planerade byten och Ansvarig kan invända. Underbiträden
          binds av motsvarande skyldigheter.
        </p>

        <h2>6. Tredjelandsöverföring</h2>
        <p>
          Sker endast med giltig mekanism (SCC / EU-US DPF). Se
          underbiträdeslistan.
        </p>

        <h2>7. Personuppgiftsincident</h2>
        <p>
          Biträdet underrättar Ansvarig utan onödigt dröjsmål med information för
          anmälan till IMY (inom 72 timmar).
        </p>

        <h2>8. Radering/återlämning</h2>
        <p>
          Vid avslut raderas eller exporteras uppgifter enligt Ansvarigs val, med
          undantag för vad lag kräver att spara (t.ex. bokföring 7 år).
        </p>

        <h2>Kontakt</h2>
        <p>
          Real Marketing s. r. o., Gessayova 2616/14, 851 03 Bratislava, Slovakien. Kontaktadress i Sverige: c/o Alexander Gerhard, Ekbacksvägen 32, 168 69 Bromma.
          E-post: support@byggexp.se.
        </p>
      </LegalDocument>
    );
  }

  if (lang === "nb") {
    return (
      <LegalDocument
        title="Databehandleravtale (DPA)"
        updated="2026-09-26"
        lang="nb"
        contentLocales={svEnLocales}
      >
        <p className="legal-page__note">
          Denne databehandleravtalen gjelder mellom Real Marketing s. r. o. og det
          kundeforetaket som oppretter en konto. Den er et vedlegg til
          abonnementet/hovedavtalen. Gjennomgås av jurist før signering.
        </p>

        <p>
          Real Marketing s. r. o. (IČO 53551958), «Databehandleren», behandler
          personopplysninger på vegne av kundeforetaket («den
          Behandlingsansvarlige») i henhold til art. 28 GDPR.
        </p>

        <h2>1. Formål og varighet</h2>
        <p>
          Databehandleren behandler opplysninger bare for å levere plattformen,
          så lenge hovedavtalen gjelder. Ved opphør slettes eller tilbakeleveres
          opplysningene i henhold til punkt 8.
        </p>

        <h2>2. Behandlingens art og formål</h2>
        <p>
          Drift av en plattform for bygg- og prosjektstyring: kontoer, prosjekter,
          oppgaver, registrering av tid og oppmøte, GPS ved arbeidsøkter,
          fakturering, lønn og dokumenthåndtering.
        </p>

        <h2>3. Registrerte og opplysninger</h2>
        <p>
          Den Behandlingsansvarliges ansatte, underentreprenører,
          kontaktpersoner og kunder. Identitet/kontakt, ansettelsesdata,
          fødselsnummer (fakturering/lønn), tid/oppmøte, posisjonsdata (GPS),
          økonomi- og prosjektdata.
        </p>

        <h2>4. Databehandlerens plikter</h2>
        <p>
          Behandle bare etter den Behandlingsansvarliges dokumenterte
          instrukser; sikre taushetsplikt; iverksette sikkerhetstiltak etter
          art. 32; bistå med de registrertes rettigheter, sikkerhet,
          avviksmelding og DPIA; slette/tilbakelevere ved avslutning; muliggjøre
          revisjon.
        </p>

        <h2>5. Underdatabehandlere</h2>
        <p>
          Den Behandlingsansvarlige gir generell forhåndsgodkjenning til
          underdatabehandlerne som er oppført på siden{" "}
          <Link href="/nb/underbitraden">Underdatabehandlere</Link>.
          Databehandleren informerer om planlagte bytter, og den
          Behandlingsansvarlige kan protestere. Underdatabehandlere er bundet av
          tilsvarende plikter.
        </p>

        <h2>6. Overføring til tredjeland</h2>
        <p>
          Skjer bare med et gyldig overføringsgrunnlag (SCC / EU-US DPF). Se
          listen over underdatabehandlere.
        </p>

        <h2>7. Brudd på personopplysningssikkerheten</h2>
        <p>
          Databehandleren varsler den Behandlingsansvarlige uten ugrunnet
          opphold med informasjon til melding til tilsynsmyndigheten (i Norge:
          Datatilsynet) innen 72 timer.
        </p>

        <h2>8. Sletting/tilbakelevering</h2>
        {/* Norway: bokføringsloven § 13 annet ledd – regnskapsmateriale nr. 1–4 oppbevares i fem år
              etter regnskapsårets slutt. https://lovdata.no/dokument/NL/lov/2004-11-19-73/§13 */}
        <p>
          Ved avslutning slettes eller eksporteres opplysningene etter den
          Behandlingsansvarliges valg, med unntak av det loven krever at vi
          oppbevarer (f.eks. regnskap i fem år etter regnskapsårets slutt).
        </p>

        <h2>Kontakt</h2>
        <p>
          Real Marketing s. r. o., Gessayova 2616/14, 851 03 Bratislava, Slovakia. Kontaktadresse i Sverige: c/o Alexander Gerhard, Ekbacksvägen 32, 168 69 Bromma, Sverige.
          E-post: support@byggexp.se.
        </p>
      </LegalDocument>
    );
  }

  return (
    <LegalDocument
      title="Data Processing Agreement (DPA)"
      updated="2026-09-26"
      lang="en"
      contentLocales={svEnLocales}
    >
      <p className="legal-page__note">
        This data processing agreement applies between Real Marketing s. r. o. and the
        customer company that opens an account. It forms an appendix to the
        subscription/main agreement. Have it reviewed by a lawyer before signing.
      </p>

      <p>
        Real Marketing s. r. o. (company ID 53551958), the “Processor”, processes
        personal data on behalf of the customer company (the “Controller”) under
        Art. 28 GDPR.
      </p>

      <h2>1. Subject matter and duration</h2>
      <p>
        The Processor processes data only to provide the platform, for as long as
        the main agreement is in force. On termination, data is erased or
        returned per section 8.
      </p>

      <h2>2. Nature and purpose of processing</h2>
      <p>
        Operation of a construction/project management platform: accounts,
        projects, tasks, time and attendance registration, GPS during shifts,
        invoicing, payroll and document handling.
      </p>

      <h2>3. Data subjects and data</h2>
      <p>
        The Controller’s employees, subcontractors, contacts and customers.
        Identity/contact details, employment data, personal identity number
        (ROT/payroll), time/attendance, location data (GPS), finance and project
        data.
      </p>

      <h2>4. The Processor’s obligations</h2>
      <p>
        Process only on the Controller’s documented instructions; ensure
        confidentiality; take security measures under Art. 32; assist with data
        subject rights, security, breach notification and DPIA; erase/return on
        termination; enable audits.
      </p>

      <h2>5. Sub-processors</h2>
      <p>
        The Controller gives general prior authorisation to the sub-processors
        listed on the{" "}
        <Link href={`/${lang}/underbitraden`}>Sub-processors</Link> page. The
        Processor informs of planned changes and the Controller may object.
        Sub-processors are bound by equivalent obligations.
      </p>

      <h2>6. Third-country transfers</h2>
      <p>
        Take place only under a valid mechanism (SCC / EU-US DPF). See the
        sub-processor list.
      </p>

      <h2>7. Personal data breach</h2>
      <p>
        The Processor notifies the Controller without undue delay with the
        information needed to report to the IMY (within 72 hours).
      </p>

      <h2>8. Erasure/return</h2>
      <p>
        On termination, data is erased or exported at the Controller’s choice,
        except for what the law requires us to keep (e.g. accounting for 7 years).
      </p>

      <h2>Contact</h2>
      <p>
        Real Marketing s. r. o., Gessayova 2616/14, 851 03 Bratislava, Slovakia. Contact address in Sweden: c/o Alexander Gerhard, Ekbacksvägen 32, 168 69 Bromma, Sweden. Email: support@byggexp.se.
      </p>
    </LegalDocument>
  );
}
