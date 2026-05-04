// Server-safe — no "use client" needed (pure SVG render, no hooks).

import type { IconName } from "@/types";

// ─── Path definitions ─────────────────────────────────────────────────────────

const PATHS: Record<IconName, React.ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  wave: (
    <>
      <path d="M5 12c2-3.2 3.6-4.8 5.4-4.8S14 8.8 16 12s3.8 4.8 5.6 4.8" />
      <path d="M5 16c2-3.2 3.6-4.8 5.4-4.8S14 12.8 16 16s3.8 4.8 5.6 4.8" />
      <path d="M5 8c2-3.2 3.6-4.8 5.4-4.8S14 4.8 16 8s3.8 4.8 5.6 4.8" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6.3v5.3c0 4.1 2.7 7.7 7 9.4 4.3-1.7 7-5.3 7-9.4V6.3L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  bridge: (
    <>
      <path d="M3 15c2.2 0 3.7-1 5-3 1.3 2 2.8 3 5 3s3.7-1 5-3c1.3 2 2.8 3 5 3" />
      <path d="M3 19h18" />
      <path d="M8 12V8.5a4 4 0 0 1 8 0V12" />
    </>
  ),
  panel: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
      <path d="M8 17h3" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
      <path d="M8.5 12h2l1.1-2.2L13 15l1.2-3H16" />
    </>
  ),
  hand: (
    <>
      <path d="M7 12V7.5a1.8 1.8 0 1 1 3.6 0V11" />
      <path d="M10.6 11V6.7a1.8 1.8 0 1 1 3.6 0V11" />
      <path d="M14.2 11V8.1a1.8 1.8 0 1 1 3.6 0V14c0 3.9-3.1 7-7 7S4 17.9 4 14v-1.5a1.8 1.8 0 1 1 3.6 0V14" />
    </>
  ),
  book: (
    <>
      <path d="M5 4.5h11a3 3 0 0 1 3 3v11H8a3 3 0 0 0-3 3Z" />
      <path d="M8 4.5v17" />
    </>
  ),
  check: <path d="m5.5 12.5 4 4 9-9" />,
};

// ─── Component ────────────────────────────────────────────────────────────────

interface IconProps {
  name:   IconName;
  size?:  number;
  color?: string;
}

export function Icon({ name, size = 18, color = "currentColor" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
