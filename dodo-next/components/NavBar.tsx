"use client";

import { NAV, LANGS } from "@/constants/data";
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
          "w-[calc(100%_-_20px)] mlg:w-[calc(100%_-_12px)]",
          "mx-auto flex flex-wrap justify-between gap-[18px]",
          "px-4 py-[14px] rounded-[24px]",
          "border backdrop-blur-[24px] saturate-150",
          "transition-[border-color,background,box-shadow] duration-240 ease-apple",
          scrolled
            ? "border-[rgba(173,214,232,.18)] bg-[rgba(7,14,20,.84)] shadow-nav-bar"
            : "border-[rgba(173,214,232,.08)] bg-[rgba(7,14,20,.58)]",
        ].join(" ")}
      >
        {/* Section nav */}
        <div className="flex flex-wrap gap-[10px] flex-[1_1_760px] justify-center mlg:justify-start mlg:flex-[1_1_100%]">
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
        <div className="flex flex-wrap gap-[10px] mlg:justify-start">
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
