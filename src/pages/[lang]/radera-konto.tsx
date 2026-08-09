import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import LegalDocument from "../../components/Legal/LegalDocument";
import { landingLanguageCodes } from "../../locales/languages";

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: landingLanguageCodes.map((lang) => ({ params: { lang } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ lang: string }> = async ({ params }) => ({
  props: { lang: (params?.lang as string) || "sv" },
});

export default function DeleteAccountPage({
  lang,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // Swedish is the authoritative version; other languages get an English
  // translation for convenience.
  if (lang === "sv") {
    return (
      <LegalDocument title="Radera konto och data" updated="2026-08-09" lang="sv">
        <p>
          Den här sidan beskriver hur du raderar ditt ByggExp-konto och de
          personuppgifter som är kopplade till det. ByggExp tillhandahålls av
          RealMar AB, org.nr 559474-9383.
        </p>

        <h2>Så här begär du radering</h2>
        <ul>
          <li>
            <strong>I appen:</strong> öppna ByggExp och gå till{" "}
            <em>Mitt konto → Radera konto</em>. Ditt konto och tillhörande data
            raderas då enligt beskrivningen nedan.
          </li>
          <li>
            <strong>Via e-post:</strong> om du inte kommer åt appen kan du
            skicka en begäran från din registrerade e-postadress till{" "}
            <a href="mailto:support@byggexp.se">support@byggexp.se</a> med ämnet
            ”Radera konto”. Vi behandlar begäran utan onödigt dröjsmål.
          </li>
        </ul>

        <h2>Vilka uppgifter raderas</h2>
        <p>
          Vid radering tas följande bort: kontouppgifter (namn, e-post, telefon,
          roll, profilbild), meddelanden i appen, foton du laddat upp samt
          platskopplade uppgifter och övrig personlig information som är kopplad
          till ditt konto.
        </p>

        <h2>Uppgifter som kan sparas längre</h2>
        <p>
          Vissa uppgifter måste vi behålla för att uppfylla lagkrav även efter
          att kontot raderats: uppgifter i personalliggaren sparas i minst 2 år
          och bokförings- och fakturaunderlag i 7 år. För anställdas uppgifter
          agerar vi normalt personuppgiftsbiträde åt arbetsgivaren, som är
          personuppgiftsansvarig; delar av datan kan därför tillhöra och
          bevaras av arbetsgivaren.
        </p>

        <h2>Kontakt</h2>
        <p>
          RealMar AB, c/o Alexander Gerhard, Byggmästarvägen 18, 168 32 Bromma,
          Sverige. E-post: <a href="mailto:support@byggexp.se">support@byggexp.se</a>.
        </p>
      </LegalDocument>
    );
  }

  if (lang === "ru") {
    return (
      <LegalDocument title="Удаление аккаунта и данных" updated="2026-08-09" lang="ru">
        <p>
          На этой странице описано, как удалить ваш аккаунт ByggExp и связанные
          с ним персональные данные. ByggExp предоставляется компанией RealMar
          AB (рег. № 559474-9383).
        </p>

        <h2>Как запросить удаление</h2>
        <ul>
          <li>
            <strong>В приложении:</strong> откройте ByggExp и перейдите в{" "}
            <em>Мой аккаунт → Удалить аккаунт</em>. Ваш аккаунт и связанные
            данные будут удалены, как описано ниже.
          </li>
          <li>
            <strong>По e-mail:</strong> если у вас нет доступа к приложению,
            отправьте запрос с вашего зарегистрированного адреса на{" "}
            <a href="mailto:support@byggexp.se">support@byggexp.se</a> с темой
            «Удалить аккаунт». Мы обработаем запрос без необоснованной задержки.
          </li>
        </ul>

        <h2>Какие данные удаляются</h2>
        <p>
          При удалении убираются: данные аккаунта (имя, e-mail, телефон, роль,
          фото профиля), сообщения в приложении, загруженные вами фотографии, а
          также данные о местоположении и прочая личная информация, связанная с
          вашим аккаунтом.
        </p>

        <h2>Данные, которые могут храниться дольше</h2>
        <p>
          Часть данных мы обязаны хранить для соблюдения требований
          законодательства даже после удаления аккаунта: записи журнала
          персонала хранятся не менее 2 лет, а бухгалтерские и учётные документы
          — 7 лет. В отношении данных сотрудников мы обычно выступаем
          обработчиком по поручению работодателя, который является контролёром
          данных; поэтому часть данных может принадлежать работодателю и
          храниться у него.
        </p>

        <h2>Контакты</h2>
        <p>
          RealMar AB, c/o Alexander Gerhard, Byggmästarvägen 18, 168 32 Bromma,
          Швеция. E-mail: <a href="mailto:support@byggexp.se">support@byggexp.se</a>.
        </p>
      </LegalDocument>
    );
  }

  return (
    <LegalDocument title="Delete account and data" updated="2026-08-09" lang={lang}>
      <p>
        This page explains how to delete your ByggExp account and the personal
        data associated with it. ByggExp is provided by RealMar AB
        (company reg. no. 559474-9383).
      </p>

      <h2>How to request deletion</h2>
      <ul>
        <li>
          <strong>In the app:</strong> open ByggExp and go to{" "}
          <em>My account → Delete account</em>. Your account and associated data
          are then deleted as described below.
        </li>
        <li>
          <strong>By email:</strong> if you cannot access the app, send a
          request from your registered email address to{" "}
          <a href="mailto:support@byggexp.se">support@byggexp.se</a> with the
          subject “Delete account”. We handle requests without undue delay.
        </li>
      </ul>

      <h2>What data is deleted</h2>
      <p>
        On deletion we remove: account details (name, email, phone, role,
        profile picture), in-app messages, photos you uploaded, and
        location-related and other personal information linked to your account.
      </p>

      <h2>Data that may be retained</h2>
      <p>
        Some data must be kept to meet legal requirements even after the account
        is deleted: staff-ledger records are kept for at least 2 years and
        accounting/invoice records for 7 years. For employees’ data we normally
        act as processor for the employer, who is the data controller; parts of
        the data may therefore belong to and be retained by the employer.
      </p>

      <h2>Contact</h2>
      <p>
        RealMar AB, c/o Alexander Gerhard, Byggmästarvägen 18, 168 32 Bromma,
        Sweden. Email: <a href="mailto:support@byggexp.se">support@byggexp.se</a>.
      </p>
    </LegalDocument>
  );
}
