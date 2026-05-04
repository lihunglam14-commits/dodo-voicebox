// ─── app/page.tsx — Server Component entry point ──────────────────────────────
//
// This file intentionally has zero logic.  All interactivity lives in
// DodoApp (Client Component), keeping the server/client boundary explicit
// and the top-level route tree readable at a glance.

import type { Metadata } from "next";
import { DodoApp } from "@/components/DodoApp";

export const metadata: Metadata = {
  title:       "DoDo VoiceBox",
  description: "Voice-first care companion for older adults living alone.",
  openGraph: {
    title:       "DoDo VoiceBox",
    description: "From social isolation to proactive connectivity.",
    type:        "website",
  },
};

export default function Page() {
  return <DodoApp />;
}
