// Server-safe — pure data rendering, no hooks.

import type { LangKey, Translation } from "@/types";

// Unified row type — avoids TypeScript narrowing issues with the HW/SW union.
// Both hardware (string value) and software (Translation value) collapse to this.
type SpecRow = readonly [label: string, value: string | Translation];

interface SpecsProps {
  title: Translation;
  rows:  readonly SpecRow[];
  lang:  LangKey;
}

export function Specs({ title, rows, lang }: SpecsProps) {
  return (
    <div className="card spec">
      <div className="eyebrow">{title[lang]}</div>
      {rows.map(([label, value]) => (
        <div key={label} className="spec-row">
          <div className="spec-label">{label}</div>
          <p className="spec-value">
            {typeof value === "string" ? value : value[lang]}
          </p>
        </div>
      ))}
    </div>
  );
}
