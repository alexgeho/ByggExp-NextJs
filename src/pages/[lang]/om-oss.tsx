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

export default function AboutPage({
  lang,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (lang === "sv") {
    return (
      <LegalDocument
        title="Om oss"
        lang="sv"
        contentLocales={svEnLocales}
        description="ByggExp byggs av Real Marketing s. r. o. – ett team i Stockholm som gör vardagens administration enklare för byggföretag: tidrapportering, planering, personalliggare, offert och faktura i en tjänst."
      >
        <h2>Vilka vi är</h2>
        <p>
          ByggExp utvecklas och drivs av <strong>Real Marketing s. r. o.</strong> (IČO 53551958), ett EU-bolag registrerat i Slovakien som drivs från Stockholm. Vi bygger
          programvara för bygg- och hantverksföretag – från enmansfirman till det
          växande företaget med flera arbetslag ute i fält.
        </p>

        <h2>Vad vi gör</h2>
        <p>
          Vi samlar det som annars sköts i Excel, på papper och i spridda appar i{" "}
          <strong>en enda tjänst</strong>: tidrapportering och stämpelklocka med
          GPS eller manuell tidrapportering, digital personalliggare, schemaläggning och resursplanering,
          projekt- och uppgiftshantering, egenkontroller samt offert och faktura.
          Allt fungerar både på webben och i mobilappen, så att kontoret och de
          som är ute på bygget arbetar mot samma information.
        </p>

        <h2>Varför vi finns</h2>
        <p>
          Byggbranschen tappar orimligt mycket tid på manuell administration –
          tid som borde gå till själva jobbet. Vår idé är enkel: gör de tråkiga
          pappersmomenten snabba och begripliga, och ge små och medelstora
          byggföretag samma digitala verktyg som de stora aktörerna, utan
          krångel och till ett rimligt pris.
        </p>

        <h2>Så arbetar vi</h2>
        <p>
          Vi är ett litet, produktdrivet team som utvecklar tjänsten nära våra
          användare. Vi lyssnar på hantverkare och arbetsledare, släpper
          förbättringar löpande och håller tjänsten enkel att komma igång med –
          du kan testa allt gratis innan du bestämmer dig.
        </p>

        <h2>Vi bygger funktioner efter era behov</h2>
        <p>
          Varje företag har sina egna arbetssätt. ByggExp är inte bara en färdig
          standardlösning – det är en plattform som vi gärna vidareutvecklar
          efter era behov. Berätta om era utmaningar och önskemål, så bygger vi
          lösningen snabbt och ordentligt. Era idéer blir en del av nya funktioner
          och uppdateringar i ByggExp.
        </p>

        <h2>Kontakt och företagsuppgifter</h2>
        <p>
          Real Marketing s. r. o., Gessayova 2616/14, 851 03 Bratislava, Slovakien. Kontaktadress i Sverige: c/o Alexander Gerhard, Ekbacksvägen 32, 168 69 Bromma.
          <br />
          IČO: 53551958 · Momsreg.nr: SK2121411820
          <br />
          E-post: <a href="mailto:support@byggexp.se">support@byggexp.se</a>
        </p>
        <p>
          Vill du nå oss? Gå till <Link href="/sv/contact">kontaktsidan</Link>.
          Läs även våra <Link href="/sv/villkor">användarvillkor</Link> och vår{" "}
          <Link href="/sv/integritetspolicy">integritetspolicy</Link>.
        </p>
      </LegalDocument>
    );
  }

  if (lang === "nb") {
    return (
      <LegalDocument
        title="Om oss"
        lang="nb"
        contentLocales={svEnLocales}
        description="ByggExp utvikles av Real Marketing s. r. o. – et team i Stockholm som gjør hverdagsadministrasjonen enklere for byggefirma: timeregistrering, planlegging, tilbud og faktura i én tjeneste."
      >
        <h2>Hvem vi er</h2>
        <p>
          ByggExp utvikles og drives av <strong>Real Marketing s. r. o.</strong> (IČO 53551958), et EU-selskap registrert i Slovakia som drives fra Stockholm. Vi lager
          programvare for bygg- og håndverksbedrifter – fra enkeltpersonforetaket
          til den voksende bedriften med flere arbeidslag ute i felt.
        </p>

        <h2>Hva vi gjør</h2>
        <p>
          Vi samler det som ellers håndteres i Excel, på papir og i spredte apper, i{" "}
          <strong>én tjeneste</strong>: timeregistrering og stemplingsur med
          GPS eller manuell timeføring, timeplaner og ressursplanlegging,
          prosjekt- og oppgavestyring, egenkontroller samt tilbud og faktura.
          Alt fungerer både på nett og i mobilappen, slik at kontoret og de
          som er ute på byggeplassen jobber med den samme informasjonen.
        </p>

        <h2>Hvorfor vi finnes</h2>
        <p>
          Byggebransjen taper urimelig mye tid på manuell administrasjon –
          tid som burde gått til selve jobben. Ideen vår er enkel: gjør det
          kjedelige papirarbeidet raskt og forståelig, og gi små og mellomstore
          byggefirma de samme digitale verktøyene som de store aktørene, uten
          styr og til en rimelig pris.
        </p>

        <h2>Slik jobber vi</h2>
        <p>
          Vi er et lite, produktdrevet team som utvikler tjenesten tett på
          brukerne. Vi lytter til håndverkere og arbeidsledere, slipper
          forbedringer fortløpende og gjør tjenesten enkel å komme i gang med –
          du kan teste alt gratis før du bestemmer deg.
        </p>

        <h2>Vi bygger funksjoner etter deres behov</h2>
        <p>
          Hver bedrift har sine egne arbeidsmåter. ByggExp er ikke bare en ferdig
          standardløsning – det er en plattform vi gjerne videreutvikler etter
          deres behov. Fortell oss om utfordringene og ønskene deres, så bygger
          vi løsningen raskt og grundig. Ideene deres blir en del av nye
          funksjoner og oppdateringer i ByggExp.
        </p>

        <h2>Kontakt og firmaopplysninger</h2>
        <p>
          Real Marketing s. r. o., Gessayova 2616/14, 851 03 Bratislava, Slovakia. Kontaktadresse i Sverige: c/o Alexander Gerhard, Ekbacksvägen 32, 168 69 Bromma, Sverige.
          <br />
          IČO: 53551958 · Mva-nr.: SK2121411820
          <br />
          E-post: <a href="mailto:support@byggexp.se">support@byggexp.se</a>
        </p>
        <p>
          Vil du nå oss? Gå til <Link href="/nb/contact">kontaktsiden</Link>.
          Les også <Link href="/nb/villkor">brukervilkårene</Link> og{" "}
          <Link href="/nb/integritetspolicy">personvernerklæringen</Link> vår.
        </p>
      </LegalDocument>
    );
  }

  return (
    <LegalDocument
      title="About us"
      lang="en"
      contentLocales={svEnLocales}
      description="ByggExp is built by Real Marketing s. r. o. – a Stockholm-based team making everyday admin easier for construction firms: time tracking, planning, staff ledger, quotes and invoicing in one service."
    >
      <h2>Who we are</h2>
      <p>
        ByggExp is developed and operated by <strong>Real Marketing s. r. o.</strong>{" "}
        (company ID 53551958), an EU company registered in Slovakia and run from Stockholm. We
        build software for construction and trade companies – from the
        one-person firm to the growing business running several crews in the
        field.
      </p>

      <h2>What we do</h2>
      <p>
        We bring together what is otherwise handled in Excel, on paper and
        across scattered apps into <strong>a single service</strong>: time
        tracking with a GPS time clock or manual hours, a digital staff ledger, scheduling and
        resource planning, project and task management, self-inspections, and
        quotes and invoicing. Everything works both on the web and in the mobile
        app, so the office and the people on site work from the same
        information.
      </p>

      <h2>Why we exist</h2>
      <p>
        The construction industry loses an unreasonable amount of time on manual
        admin – time that should go into the actual work. Our idea is simple:
        make the tedious paperwork fast and clear, and give small and
        medium-sized construction firms the same digital tools as the big
        players, without the hassle and at a fair price.
      </p>

      <h2>How we work</h2>
      <p>
        We are a small, product-driven team building the service close to our
        users. We listen to tradespeople and site managers, ship improvements
        continuously, and keep the product easy to get started with – you can
        try everything for free before you decide.
      </p>

      <h2>We build features around your needs</h2>
      <p>
        Every company has its own way of working. ByggExp isn&apos;t just an
        off-the-shelf solution – it&apos;s a platform we&apos;re happy to extend to fit
        your needs. Tell us about your challenges and wishes, and we&apos;ll build it
        fast and with quality. Your ideas become part of new features and
        updates in ByggExp.
      </p>

      <h2>Contact and company details</h2>
      <p>
        Real Marketing s. r. o., Gessayova 2616/14, 851 03 Bratislava, Slovakia. Contact address in Sweden: c/o Alexander Gerhard, Ekbacksvägen 32, 168 69 Bromma, Sweden.
        <br />
        Company ID (IČO): 53551958 · VAT no.: SK2121411820
        <br />
        Email: <a href="mailto:support@byggexp.se">support@byggexp.se</a>
      </p>
      <p>
        Want to reach us? Visit the <Link href="/en/contact">contact page</Link>.
        See also our <Link href="/en/villkor">terms of service</Link> and our{" "}
        <Link href="/en/integritetspolicy">privacy policy</Link>.
      </p>
    </LegalDocument>
  );
}
