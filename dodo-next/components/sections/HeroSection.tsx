"use client";

import { METRICS, ACCENT, tr } from "@/constants/data";
import type { LangKey } from "@/types";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Device } from "@/components/Device";

interface Props {
  lang: LangKey;
  jump: (id: string) => void;
}

export function HeroSection({ lang, jump }: Props) {
  return (
    <section id="hero" className="section-wrap">
      <div className="grid grid-cols-[minmax(0,1.22fr)_minmax(420px,.78fr)] mlg:grid-cols-1 gap-10 items-start">
        <div>
          <div className="eyebrow">
            {tr("DoDo VoiceBox / Social Innovation Launch", "DoDo VoiceBox / 社會創新發佈", "DoDo VoiceBox / 社会创新发布")[lang]}
          </div>

          <h1
            className="m-0 leading-[.95] tracking-[-0.04em] max-w-[11ch] msm:max-w-none"
            style={{ fontSize: "clamp(40px,6vw,84px)" }}
          >
            {tr("From social isolation to proactive connectivity.", "從孤獨生活，走向主動連結。", "从孤独生活，走向主动连接。")[lang]}
          </h1>

          <p className="lead">
            {tr(
              "DoDo VoiceBox is a voice-only companion for older adults living alone. It starts greetings on its own, sustains natural companionship, and turns silence or routine change into early signals for families, volunteers, and community teams.",
              "DoDo VoiceBox 係一部純語音陪伴裝置，專為獨居長者而設。它會主動開口問候、自然陪伴，亦會將長時間沉默、作息改變同重複困惑，轉化成家屬、義工同社區團隊可以及早跟進嘅訊號。",
              "DoDo VoiceBox 是一部纯语音陪伴装置，专为独居长者而设。它会主动开口问候、自然陪伴，也会把长时间沉默、作息改变和重复困惑，转化成家属、义工和社区团队可以及早跟进的讯号。",
            )[lang]}
          </p>

          <div className="mt-6 inline-flex flex-wrap gap-x-4 gap-y-1.5 px-4 py-2.5 rounded-chip border border-[rgba(173,214,232,.14)] bg-[rgba(255,255,255,.04)] text-[rgba(232,243,248,.62)] text-[12px] tracking-[.02em]">
            <span>ESP32-S3-DevKitC-1-N16R8</span>
            <span>INMP441</span>
            <span>MAX98357A</span>
            <span>8 ohm 3W speaker</span>
          </div>

          <div className="flex flex-wrap gap-[10px] mt-7">
            <Button variant="primary" onClick={() => jump("systems")}>
              <span>{tr("View System Architecture", "查看系統架構", "查看系统架构")[lang]}</span>
              <Icon name="arrow" size={16} color="currentColor" />
            </Button>
            <Button variant="ghost" onClick={() => jump("care")}>
              {tr("See Care Flow", "查看照護流程", "查看照护流程")[lang]}
            </Button>
          </div>

          <div className="grid grid-cols-4 mlg:grid-cols-2 msm:grid-cols-1 gap-4 mt-10">
            {METRICS.map((m, i) => (
              <Reveal key={m.id} delay={80 + i * 70}>
                <div className="card p-6 min-h-0">
                  <div
                    className="text-[clamp(24px,3vw,34px)] leading-[1] font-extrabold tracking-[-0.04em]"
                    style={{ color: ACCENT }}
                  >
                    {typeof m.v === "string" ? m.v : m.v[lang]}
                  </div>
                  <div className="mt-2.5 text-[12px] font-bold tracking-[.1em] uppercase text-[rgba(232,243,248,.6)]">
                    {m.l[lang]}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Device lang={lang} />
      </div>
    </section>
  );
}
