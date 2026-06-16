"use client";

import { CARE, ACCENT, tr } from "@/constants/data";
import type { LangKey } from "@/types";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

interface Props {
  lang: LangKey;
}

export function CareSection({ lang }: Props) {
  return (
    <section id="care" data-section className="section-wrap">
      <Reveal delay={30}>
        <div className="eyebrow">{tr("Care Operations", "照護流程", "照护流程")[lang]}</div>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="section-h2">
          {tr("This is a service model, not a speaker with a chatbot.", "呢個係服務模型，唔係一個加咗 chatbot 嘅喇叭。", "这是服务模型，不是一部加了 chatbot 的音箱。")[lang]}
        </h2>
      </Reveal>
      <Reveal delay={170}>
        <p className="lead">
          {tr(
            "DoDo VoiceBox links household hardware, caregiver dashboards, local knowledge, emotional first aid, and volunteer routing.",
            "DoDo VoiceBox 會將屋企入面嘅硬件、照顧者介面、本地知識庫、情緒急救同義工支援路由連接起來。",
            "DoDo VoiceBox 会把家中的硬件、照顾者界面、本地知识库、情绪急救和义工支援路由连接起来。",
          )[lang]}
        </p>
      </Reveal>

      <div className="grid grid-cols-2 mlg:grid-cols-2 msm:grid-cols-1 gap-7 mt-[34px]">
        {CARE.map((card, i) => (
          <Reveal key={card.t.EN} delay={120 + i * 85}>
            <div className="card">
              <div className="flex gap-3 items-center">
                <div className="icon-badge">
                  <Icon name={card.i} size={18} color={ACCENT} />
                </div>
                <h3
                  className="m-0 leading-[1.15]"
                  style={{ fontSize: "clamp(20px,1.8vw,26px)" }}
                >
                  {card.t[lang]}
                </h3>
              </div>
              <p className="copy mt-4">
                {card.d[lang]}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
