"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface RevealProps {
  children:  React.ReactNode;
  /** Delay in milliseconds — matches the original revealStyle(delay) convention. */
  delay?:    number;
  className?: string;
  style?:    React.CSSProperties;
  /** Forwarded to framer-motion viewport.amount (0–1). */
  amount?:   number;
}

export function Reveal({
  children,
  delay    = 0,
  className,
  style,
  amount   = 0.16,
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{
        opacity: 0,
        y:       34,
        scale:   0.985,
        filter:  "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y:       0,
        scale:   1,
        filter:  "blur(0px)",
      }}
      transition={{
        duration: 0.78,
        delay:    delay / 1000,   // convert ms → s
        ease:     [0.2, 0, 0, 1],
      }}
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}
