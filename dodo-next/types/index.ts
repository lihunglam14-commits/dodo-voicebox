// ─── Language ─────────────────────────────────────────────────────────────────

export type LangKey = "EN" | "TC" | "SC";

/** A string available in all three languages. */
export interface Translation {
  EN: string;
  TC: string;
  SC: string;
}

export interface LangOption {
  key:   LangKey;
  label: string;
  aria:  string;
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavItem {
  id:    string;
  label: Translation;
}

// ─── Hero metrics ─────────────────────────────────────────────────────────────

export interface MetricItem {
  id: string;
  /** Either a translated string or a language-agnostic value like "24/7". */
  v:  Translation | string;
  l:  Translation;
}

// ─── Mission section ──────────────────────────────────────────────────────────

export interface StepItem {
  n: string;      // e.g. "01"
  t: Translation;
  d: Translation;
}

// ─── Systems section ──────────────────────────────────────────────────────────

export type IconName =
  | "arrow"
  | "wave"
  | "shield"
  | "bridge"
  | "panel"
  | "heart"
  | "hand"
  | "book"
  | "check";

export interface PillarItem {
  i: IconName;
  n: string;      // product name, e.g. "HyperListen™"
  k: Translation; // keyword label
  d: Translation;
}

// ─── Care section ─────────────────────────────────────────────────────────────

export interface CareItem {
  i: IconName;
  t: Translation;
  d: Translation;
}

// ─── Outfit section ───────────────────────────────────────────────────────────

export interface OutfitItem {
  name: Translation;
  img:  string;       // path relative to /public
  desc: Translation;
}

// ─── Hardware section ─────────────────────────────────────────────────────────

export type HardwareRow = readonly [label: string, value: string];
export type SoftwareRow = readonly [label: string, value: Translation];

// ─── UI primitives ────────────────────────────────────────────────────────────

export type ButtonVariant = "ghost" | "primary";
