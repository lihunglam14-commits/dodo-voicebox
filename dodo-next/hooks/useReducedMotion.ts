"use client";

import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (!window.matchMedia) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);

    sync();

    // EventTarget API (modern) — fall back to deprecated addListener in Safari <14
    if (mq.addEventListener) {
      mq.addEventListener("change", sync);
      return () => mq.removeEventListener("change", sync);
    } else {
      mq.addListener(sync);
      return () => mq.removeListener(sync);
    }
  }, []);

  return reduced;
}
