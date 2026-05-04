"use client";

import { create } from "zustand";
import type { LangKey } from "@/types";

interface AppState {
  lang:          LangKey;
  activeSection: string;
  scrolled:      boolean;

  setLang:           (lang: LangKey)      => void;
  setActiveSection:  (section: string)    => void;
  setScrolled:       (scrolled: boolean)  => void;
}

export const useAppStore = create<AppState>()((set) => ({
  lang:          "TC",
  activeSection: "mission",
  scrolled:      false,

  setLang:          (lang)          => set({ lang }),
  setActiveSection: (activeSection) => set({ activeSection }),
  setScrolled:      (scrolled)      => set({ scrolled }),
}));

// Selector hooks — prevent re-renders when unrelated slices change
export const useLang          = () => useAppStore((s) => s.lang);
export const useActiveSection = () => useAppStore((s) => s.activeSection);
export const useScrolled      = () => useAppStore((s) => s.scrolled);
