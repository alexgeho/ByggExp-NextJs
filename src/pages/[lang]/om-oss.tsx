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
        description="ByggExp byggs av RealMar AB – ett svenskt team som gör vardagens administration enklare för byggföretag: tidrapportering, planering, personalliggare, offert och faktura i en tjänst."
      >
        <h2>Vilka vi är</h2>
        <p>
          ByggExp utvecklas och drivs av <strong>RealMar AB</strong> (org.nr
          559474-9383), ett svenskt bolag med säte i Stockholm. Vi bygger
          programvara för bygg- och hantverksföretag – från enmansfirman till det
          växande företaget med flera arbetslag ute på fält.
        </p>

        <h2>Vad vi gör</h2>
        <p>
          Vi samlar det som annars sköts i Excel, papper och spridda appar i{" "}
          <strong>en enda tjänst</strong>: tidrapportering och stämpelklocka med
          GPS, digital personalliggare, schemaläggning och resursplanering,
          projekt- och uppgiftshantering, egenkontroller samt offert och faktura.
          Allt fungerar både i webben och i mobilappen, så att kontoret och de
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
          det snabbt och med kvalitet. Era idéer blir en del av nya funktioner
          och uppdateringar i ByggExp.
        </p>

        <h2>Kontakt och företagsuppgifter</h2>
        <p>
          RealMar AB, c/o Alexander Gerhard, Byggmästarvägen 18, 168 32 Bromma.
          <br />
          Org.nr: 559474-9383
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

  return (
    <LegalDocument
      title="About us"
      lang="en"
      contentLocales={svEnLocales}
      description="ByggExp is built by RealMar AB – a Swedish team making everyday admin easier for construction firms: time tracking, planning, staff ledger, quotes and invoicing in one service."
    >
      <h2>Who we are</h2>
      <p>
        ByggExp is developed and operated by <strong>RealMar AB</strong>{" "}
        (company reg. no. 559474-9383), a Swedish company based in Stockholm. We
        build software for construction and trade companies – from the
        one-person firm to the growing business running several crews in the
        field.
      </p>

      <h2>What we do</h2>
      <p>
        We bring together what is otherwise handled in Excel, on paper and
        across scattered apps into <strong>a single service</strong>: time
        tracking and a GPS time clock, a digital staff ledger, scheduling and
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
        Every company has its own way of working. ByggExp isn't just an
        off-the-shelf solution – it's a platform we're happy to extend to fit
        your needs. Tell us about your challenges and wishes, and we'll build it
        fast and with quality. Your ideas become part of new features and
        updates in ByggExp.
      </p>

      <h2>Contact and company details</h2>
      <p>
        RealMar AB, c/o Alexander Gerhard, Byggmästarvägen 18, 168 32 Bromma,
        Sweden.
        <br />
        Company reg. no.: 559474-9383
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
