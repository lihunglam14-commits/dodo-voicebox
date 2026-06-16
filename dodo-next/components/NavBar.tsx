"use client";

import { NAV, LANGS, LOGO } from "@/constants/data";
import { useAppStore, useLang, useActiveSection, useScrolled } from "@/store/langStore";
import { Button } from "@/components/ui/Button";

interface NavBarProps {
  jump: (id: string) => void;
}

export function NavBar({ jump }: NavBarProps) {
  const lang          = useLang();
  const activeSection = useActiveSection();
  const scrolled      = useScrolled();
  const setLang       = useAppStore((s) => s.setLang);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-40 px-0 py-4 pointer-events-none"
      aria-label="Main navigation"
    >
      <div
        className={[
          "pointer-events-auto",
          "w-[calc(100%_-_24px)] max-w-[1320px] mlg:w-[calc(100%_-_16px)]",
          "mx-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-3",
          "px-3 py-[10px] rounded-[20px]",
          "border backdrop-blur-[24px] saturate-150",
          "transition-[border-color,background,box-shadow] duration-240 ease-apple",
          scrolled
            ? "border-[rgba(173,214,232,.18)] bg-[rgba(7,14,20,.84)] shadow-nav-bar"
            : "border-[rgba(173,214,232,.08)] bg-[rgba(7,14,20,.58)]",
        ].join(" ")}
      >
        {/* Brand */}
        <button
          type="button"
          onClick={() => jump("hero")}
          aria-label="DoDo VoiceBox — back to top"
          className="flex items-center gap-2 pl-1 pr-2 shrink-0 cursor-pointer rounded-[12px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#071017]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="" aria-hidden="true" className="h-7 w-7 object-contain" />
          <span className="text-[15px] font-bold tracking-[-0.01em] text-[#f3fbff] msm:hidden">
            DoDo <span className="text-accent">VoiceBox</span>
          </span>
        </button>

        {/* Section nav */}
        <div className="flex flex-wrap gap-[8px] justify-center mlg:justify-start mlg:order-3 mlg:flex-[1_1_100%]">
          {NAV.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              active={activeSection === item.id}
              onClick={() => jump(item.id)}
              ariaCurrent={activeSection === item.id ? "page" : undefined}
            >
              {item.label[lang]}
            </Button>
          ))}
        </div>

        {/* Language switcher */}
        <div className="flex flex-wrap gap-[8px] shrink-0 mlg:justify-start">
          {LANGS.map((item) => (
            <Button
              key={item.key}
              variant="ghost"
              active={lang === item.key}
              onClick={() => setLang(item.key)}
              ariaLabel={item.aria}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
