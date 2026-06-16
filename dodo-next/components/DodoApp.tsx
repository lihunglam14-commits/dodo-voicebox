"use client";

// ─── DodoApp.tsx — Root client boundary ───────────────────────────────────────
// Owns scroll tracking, section spy, and lang→<html lang> sync.
// All sections are rendered as children; state flows via Zustand (no prop drilling).

import { useEffect } from "react";
import { useAppStore, useLang } from "@/store/langStore";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { LOGO } from "@/constants/data";
import { NavBar } from "@/components/NavBar";
import { HeroSection }     from "@/components/sections/HeroSection";
import { MissionSection }  from "@/components/sections/MissionSection";
import { SystemsSection }  from "@/components/sections/SystemsSection";
import { CareSection }     from "@/components/sections/CareSection";
import { OutfitSection }   from "@/components/sections/OutfitSection";
import { HardwareSection } from "@/components/sections/HardwareSection";

const DATA_SECTION_IDS = ["mission", "systems", "care", "hardware"] as const;

export function DodoApp() {
  const lang    = useLang();
  const reduced = useReducedMotion();
  const { setActiveSection, setScrolled } = useAppStore();

  // ── Lang → <html lang> ──────────────────────────────────────────────────────
  const htmlLang = lang === "EN" ? "en" : lang === "TC" ? "zh-Hant" : "zh-Hans";
  useEffect(() => {
    document.documentElement.lang = htmlLang;
  }, [htmlLang]);

  // ── Scroll → nav transparency ───────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [setScrolled]);

  // ── Section spy → active nav item ───────────────────────────────────────────
  useEffect(() => {
    const sections = DATA_SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit?.target.id) setActiveSection(hit.target.id);
      },
      { threshold: [0.25, 0.5, 0.7], rootMargin: "-18% 0px -48% 0px" },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [setActiveSection]);

  // ── Smooth-scroll helper (passed down to buttons) ───────────────────────────
  const jump = (id: string) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block:    "start",
    });

  // ── Font family mirrors original CJK vs Latin split ─────────────────────────
  const fontFamily =
    lang === "EN"
      ? "'Manrope', system-ui, sans-serif"
      : "'Noto Sans TC', 'Noto Sans SC', sans-serif";

  return (
    <div style={{ fontFamily }} className="text-[#f3fbff]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-[12px] focus:bg-accent focus:text-[#041018] focus:font-semibold"
      >
        Skip to content
      </a>
      <NavBar jump={jump} />

      <main id="main" className="pt-[100px] pb-[120px] mlg:pt-[96px] mlg:pb-[100px] msm:pt-[112px] msm:pb-[80px] flex flex-col gap-5">
        <HeroSection    lang={lang} jump={jump} />
        <MissionSection lang={lang} />
        <SystemsSection lang={lang} />
        <CareSection    lang={lang} />
        <OutfitSection  lang={lang} />
        <HardwareSection lang={lang} />
      </main>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="w-[calc(100%_-_24px)] max-w-[1320px] msm:w-[calc(100%_-_12px)] mx-auto pt-[110px] pb-[64px] mlg:pt-[88px] mlg:pb-[56px] msm:pt-16 msm:pb-12 text-center">
        <div className="relative overflow-hidden mx-auto mb-10 w-[min(420px,72vw)] h-[min(220px,34vw)] msm:h-[150px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO}
            alt="DoDo VoiceBox"
            loading="lazy"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block max-w-none h-auto w-[300%]"
          />
        </div>
        <p className="m-0 text-[clamp(22px,3vw,38px)] leading-[1.22] tracking-[-0.025em]">
          For the ones who raised us.
        </p>
      </footer>
    </div>
  );
}
