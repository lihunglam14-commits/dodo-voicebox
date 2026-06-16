"use client";

import type { ButtonVariant } from "@/types";

interface ButtonProps {
  children:    React.ReactNode;
  onClick?:    () => void;
  variant?:    ButtonVariant;
  active?:     boolean;
  ariaLabel?:  string;
  ariaCurrent?: "page" | undefined;
  className?:  string;
}

// ─── Per-variant styles ───────────────────────────────────────────────────────

const variantStyles: Record<ButtonVariant, (active: boolean) => string> = {
  ghost: (active) =>
    active
      ? "border-[rgba(152,216,255,.34)] bg-[linear-gradient(180deg,rgba(152,216,255,.22),rgba(152,216,255,.1))]"
      : "border-[rgba(173,214,232,.1)] bg-[linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02))]",
  primary: () =>
    "text-[#041018] bg-[linear-gradient(180deg,#b6e5ff,#8cd0fb)] border-[rgba(152,216,255,.54)]",
};

// ─── Component ────────────────────────────────────────────────────────────────

export function Button({
  children,
  onClick,
  variant    = "ghost",
  active     = false,
  ariaLabel,
  ariaCurrent,
  className  = "",
}: ButtonProps) {
  return (
    <button
      type="button"
      className={[
        // Base
        "inline-flex items-center justify-center gap-2 cursor-pointer",
        "min-h-[46px] px-[18px] rounded-[14px]",
        "text-[15px] font-semibold text-[#f3fbff]",
        "border",
        "shadow-btn",
        "transition-[transform,box-shadow,background,border-color] duration-160 ease-apple",
        "active:translate-y-[2px] active:scale-[.98] active:shadow-btn-press",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#071017]",
        // Variant
        variantStyles[variant](active),
        // Caller overrides
        className,
      ].join(" ")}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
    >
      {children}
    </button>
  );
}
