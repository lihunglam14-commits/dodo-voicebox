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
      <NavBar jump={jump} />

      <main className="pt-[148px] pb-[190px] mlg:pt-[144px] mlg:pb-[130px] msm:pt-[168px] msm:pb-[96px] flex flex-col gap-4">
        <HeroSection    lang={lang} jump={jump} />
        <MissionSection lang={lang} />
        <SystemsSection lang={lang} />
        <CareSection    lang={lang} />
        <OutfitSection  lang={lang} />
        <HardwareSection lang={lang} />
      </main>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="w-[calc(100%_-_20px)] msm:w-[calc(100%_-_12px)] mx-auto pt-[170px] pb-[80px] mlg:pt-[138px] mlg:pb-[72px] msm:pt-[112px] msm:pb-[64px] text-center">
        <div className="relative overflow-hidden mx-auto mb-14 w-[min(760px,92vw)] h-[min(420px,52vw)] mlg:h-[min(320px,58vw)] msm:w-full msm:h-[210px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO}
            alt="DoDo VoiceBox"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block max-w-none h-auto w-[320%]"
          />
        </div>
        <p className="m-0 text-[clamp(28px,4vw,46px)] leading-[1.22] tracking-[-0.03em]">
          For the ones who raised us.
        </p>
      </footer>
    </div>
  );
}
