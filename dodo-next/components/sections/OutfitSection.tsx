"use client";

import { OUTFITS, tr } from "@/constants/data";
import type { LangKey } from "@/types";
import { Reveal } from "@/components/ui/Reveal";

interface Props {
  lang: LangKey;
}

export function OutfitSection({ lang }: Props) {
  return (
    <section className="section-wrap">
      <Reveal delay={30}>
        <div className="eyebrow">
          {tr("Product Outfit Collection", "產品外衣系列", "产品外衣系列")[lang]}
        </div>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="section-h2">
          {tr("DoDo dresses up. Pick the companion that feels right.", "DoDo 可以換上外衣，揀一個感覺合適嘅陪伴。", "DoDo 可以换上外衣，选一个感觉合适的陪伴。")[lang]}
        </h2>
      </Reveal>
      <Reveal delay={170}>
        <p className="lead">
          {tr(
            "Each outfit gives DoDo a distinct character: soft, upright, and made to stand on its own.",
            "每款外衣都賦予 DoDo 不同個性：柔軟、站得穩，而且可以自然企立。",
            "每款外衣都赋予 DoDo 不同个性：柔软、站得稳，而且可以自然站立。",
          )[lang]}
        </p>
      </Reveal>

      <div className="grid grid-cols-4 mlg:grid-cols-2 msm:grid-cols-1 gap-7 mt-[34px]">
        {OUTFITS.map((outfit, i) => (
          <Reveal key={outfit.name.EN} delay={120 + i * 70}>
            <div className="card flex flex-col justify-between p-5">
              <div
                className={[
                  "min-h-outfit-art msm:min-h-outfit-msm",
                  "rounded-outfit-art border border-[rgba(173,214,232,.22)]",
                  "flex items-center justify-center overflow-hidden p-3",
                ].join(" ")}
                style={{
                  background:
                    "linear-gradient(180deg,rgba(152,216,255,.06),rgba(152,216,255,.01))," +
                    "radial-gradient(circle at top left,rgba(255,195,155,.1),transparent 48%)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={outfit.img}
                  alt={outfit.name[lang]}
                  loading="lazy"
                  className="max-w-full max-h-[260px] msm:max-h-[220px] object-contain block rounded-outfit-img"
                />
              </div>

              <div>
                <p className="m-0 mt-4 text-[18px] leading-[1.2] tracking-[-0.02em] font-semibold">
                  {outfit.name[lang]}
                </p>
                <p className="m-0 mt-1.5 text-[14px] leading-[1.6] text-[rgba(232,243,248,.66)]">
                  {outfit.desc[lang]}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
