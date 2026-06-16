"use client";

import { HIGHLIGHTS, STEPS, ACCENT, tr } from "@/constants/data";
import type { LangKey } from "@/types";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

interface Props {
  lang: LangKey;
}

export function MissionSection({ lang }: Props) {
  return (
    <section id="mission" data-section className="section-wrap">
      <div className="grid grid-cols-[minmax(0,1.22fr)_minmax(360px,.78fr)] mlg:grid-cols-1 gap-10">
        <div>
          <Reveal delay={40}>
            <div className="eyebrow">{tr("System Mandate", "系統任務", "系统任务")[lang]}</div>
          </Reveal>
          <Reveal delay={110}>
            <h2 className="section-h2">
              {tr("The first responsibility is to notice when the everyday changes.", "第一項責任，係及早察覺日常改變。", "第一项责任，是及早察觉日常改变。")[lang]}
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="lead">
              {tr("Loneliness, missed medication, repeated confusion, and prolonged silence are not edge cases.", "孤獨、漏食藥、重複混亂、長時間沉默，全部都唔係邊緣情況。", "孤独、漏服药、重复混乱、长时间沉默，都不是边缘情况。")[lang]}
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="card h-full">
            <div className="eyebrow">{tr("Key Selling Points", "核心賣點", "核心卖点")[lang]}</div>
            <div className="grid grid-cols-2 msm:grid-cols-1 gap-5">
              {HIGHLIGHTS.map((item, i) => (
                <Reveal key={i} delay={220 + i * 80}>
                  <div className="flex gap-3 items-start">
                    <div className="icon-badge">
                      <Icon name="check" size={18} color={ACCENT} />
                    </div>
                    <p className="copy">{item[lang]}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 mlg:grid-cols-2 msm:grid-cols-1 gap-7 mt-[34px]">
        {STEPS.map((step, i) => (
          <Reveal key={step.n} delay={120 + i * 90}>
            <div className="card">
              <div className="step-n">{step.n}</div>
              <h3 className="m-0 text-[20px] leading-[1.2] tracking-[-0.02em]">
                {step.t[lang]}
              </h3>
              <p className="copy mt-2.5">{step.d[lang]}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
