"use client";

import { PILLARS, ACCENT, tr } from "@/constants/data";
import type { LangKey } from "@/types";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

interface Props {
  lang: LangKey;
}

export function SystemsSection({ lang }: Props) {
  return (
    <section id="systems" data-section className="section-wrap">
      <Reveal delay={30}>
        <div className="eyebrow">{tr("Architectural Pillars", "架構層級", "架构层级")[lang]}</div>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="section-h2">
          {tr("Four layers move from listening to accountable action.", "四個層級，由收聽一路走到可追責嘅行動。", "四个层级，从收听一路走到可追责的行动。")[lang]}
        </h2>
      </Reveal>
      <Reveal delay={170}>
        <p className="lead">
          {tr("Each pillar owns a separate responsibility.", "每一層都各自負責一件事。", "每一层都各自负责一件事。")[lang]}
        </p>
      </Reveal>

      <div className="grid grid-cols-2 mlg:grid-cols-2 msm:grid-cols-1 gap-7 mt-[34px]">
        {PILLARS.map((pillar, i) => (
          <Reveal key={pillar.n} delay={120 + i * 85}>
            <div className="card">
              <div className="flex gap-3 items-start">
                <div className="icon-badge">
                  <Icon name={pillar.i} size={18} color={ACCENT} />
                </div>
                <div>
                  <div
                    className="m-0 mb-1.5 text-[12px] font-bold tracking-[.16em] uppercase"
                    style={{ color: "rgba(152,216,255,.78)" }}
                  >
                    {pillar.k[lang]}
                  </div>
                  <h3
                    className="m-0 leading-[1.12]"
                    style={{ fontSize: "clamp(22px,2vw,30px)" }}
                  >
                    {pillar.n}
                  </h3>
                </div>
              </div>
              <p className="copy mt-4">
                {pillar.d[lang]}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
