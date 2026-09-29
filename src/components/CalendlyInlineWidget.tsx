"use client";

import dynamic from "next/dynamic";

export const CalendlyInlineWidget = dynamic(
  () => import("react-calendly").then((module) => module.InlineWidget),
  { ssr: false },
);

// Calendly som ruta ovanpå sidan (kontaktsidans "Välj en tid direkt").
export const CalendlyPopupModal = dynamic(
  () => import("react-calendly").then((module) => module.PopupModal),
  { ssr: false },
);
