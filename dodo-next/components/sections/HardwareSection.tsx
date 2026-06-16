"use client";

import { HW, SW, tr } from "@/constants/data";
import type { LangKey } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { Specs } from "@/components/Specs";

interface Props {
  lang: LangKey;
}

function ChainStep({ n, label }: { n: number; label: string }) {
  return (
    <div className="flex gap-[18px] items-start mt-3 first:mt-0">
      <div
        className="w-[60px] h-[60px] rounded-badge grid place-items-center flex-shrink-0 text-[rgba(232,243,248,.8)] text-[22px] font-bold"
        style={{ border: "1px solid rgba(152,216,255,.18)", background: "rgba(152,216,255,.08)" }}
      >
        {n}
      </div>
      <p className="m-0 self-center text-[27px] leading-[1.82] text-[rgba(232,243,248,.8)]">
        {label}
      </p>
    </div>
  );
}

export function HardwareSection({ lang }: Props) {
  return (
    <section id="hardware" data-section className="section-wrap">
      <div className="grid grid-cols-[minmax(0,1.22fr)_minmax(500px,.78fr)] mlg:grid-cols-1 gap-[52px]">
        <div>
          <Reveal delay={30}>
            <div className="eyebrow">{tr("Hardware Truth", "硬件基礎", "硬件基础")[lang]}</div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-h2">
              {tr(
                "Every greeting, silence alert, and follow-up cue must come from a real listening and response chain.",
                "每一次主動問候、沉默監察同異常提醒，都必須建基於真實嘅收音、判讀同回應鏈路。",
                "每一次主动问候、沉默监测和异常提醒，都必须建基于真实的收音、判读与回应链路。",
              )[lang]}
            </h2>
          </Reveal>
          <Reveal delay={170}>
            <p className="lead">
              {tr(
                "DoDo VoiceBox is anchored to ESP32-S3-DevKitC-1-N16R8, INMP441, MAX98357A, and an 8 ohm 3W speaker path.",
                "DoDo VoiceBox 建基於 ESP32-S3-DevKitC-1-N16R8、INMP441、MAX98357A 同 8 ohm 3W speaker path。",
                "DoDo VoiceBox 建基于 ESP32-S3-DevKitC-1-N16R8、INMP441、MAX98357A 和 8 ohm 3W speaker path。",
              )[lang]}
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="card h-full">
            <div className="eyebrow">{tr("Signal Chain", "訊號鏈", "讯号链")[lang]}</div>
            <ChainStep n={1} label="INMP441" />
            <ChainStep n={2} label="ESP32-S3" />
            <ChainStep n={3} label={tr("CareCore + SentinelNet review", "CareCore + SentinelNet 檢視", "CareCore + SentinelNet 检视")[lang]} />
            <ChainStep n={4} label="MAX98357A" />
            <ChainStep n={5} label="8 ohm 3W speaker" />
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 mlg:grid-cols-2 msm:grid-cols-1 gap-7 mt-[34px]">
        <Reveal delay={120}>
          <Specs
            title={tr("Hardware Stack", "硬件堆疊", "硬件堆叠")}
            rows={HW}
            lang={lang}
          />
        </Reveal>
        <Reveal delay={210}>
          <Specs
            title={tr("Software And Safety Stack", "軟件與安全堆疊", "软件与安全堆叠")}
            rows={SW}
            lang={lang}
          />
        </Reveal>
      </div>
    </section>
  );
}
