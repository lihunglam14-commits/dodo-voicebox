import type { Config } from "tailwindcss";

// ─── Design Tokens ────────────────────────────────────────────────────────────
const ACCENT = "#98d8ff";
const WARM   = "#ffc39b";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./store/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      // ── Colors ──────────────────────────────────────────────────────────────
      colors: {
        accent: ACCENT,
        warm:   WARM,
      },

      // ── Typography ──────────────────────────────────────────────────────────
      fontFamily: {
        sans: ["var(--font-manrope)",  "system-ui", "sans-serif"],
        cjk:  ["var(--font-noto-tc)", "var(--font-noto-sc)", "sans-serif"],
      },

      // ── Breakpoints (max-width, mirrors original @media queries) ────────────
      // Usage: mlg:class  →  @media (max-width: 1120px)
      //        msm:class  →  @media (max-width: 680px)
      screens: {
        mlg: { max: "1120px" },
        msm: { max: "680px"  },
      },

      // ── Easing ──────────────────────────────────────────────────────────────
      transitionTimingFunction: {
        apple: "cubic-bezier(0.2,0,0,1)",
      },
      transitionDuration: {
        "160": "160ms",
        "240": "240ms",
        "780": "780ms",
      },

      // ── Border Radius ───────────────────────────────────────────────────────
      borderRadius: {
        section:       "40px",
        card:          "30px",
        "device-box":  "38px",
        "device-inner":"32px",
        "logo-panel":  "40px",
        badge:         "18px",
        chip:          "999px",
        "outfit-art":  "24px",
        "outfit-img":  "14px",
      },

      // ── Box Shadows ─────────────────────────────────────────────────────────
      boxShadow: {
        section:       "0 28px 72px rgba(0,0,0,.14)",
        card:          "0 22px 48px rgba(0,0,0,.18)",
        "card-hover":  "0 30px 60px rgba(0,0,0,.22)",
        btn:           "0 4px 0 rgba(5,11,16,.5), 0 10px 20px rgba(0,0,0,.18)",
        "btn-press":   "0 1px 0 rgba(5,11,16,.6), 0 5px 12px rgba(0,0,0,.12)",
        "device-box":  "0 26px 60px rgba(0,0,0,.2)",
        "logo-panel":  "inset 0 1px 0 rgba(255,255,255,.04), 0 28px 56px rgba(0,0,0,.22)",
        "nav-bar":     "0 22px 56px rgba(0,0,0,.22)",
      },

      // ── Min Heights ─────────────────────────────────────────────────────────
      minHeight: {
        "device":      "520px",
        "device-mlg":  "460px",
        "device-msm":  "400px",
        "outfit-art":  "300px",
        "outfit-msm":  "240px",
      },
    },
  },

  plugins: [],
};

export default config;
