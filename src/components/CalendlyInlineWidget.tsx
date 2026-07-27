"use client";

import dynamic from "next/dynamic";

export const CalendlyInlineWidget = dynamic(
  () => import("react-calendly").then((module) => module.InlineWidget),
  { ssr: false },
);
