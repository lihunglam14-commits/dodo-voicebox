"use client";

import { LOGO, ACCENT, WARM, tr } from "@/constants/data";
import { Icon } from "@/components/ui/Icon";
import type { LangKey } from "@/types";

type ChipPos = "lt" | "rt" | "lb" | "rb";

const CHIP_CLASSES: Record<ChipPos, string> = {
  lt: "top-6 left-6",
  rt: "top-6 right-6",
  lb: "bottom-[92px] left-6",
  rb: "bottom-[92px] right-6",
};

function Chip({ pos, children }: { pos: ChipPos; children: React.ReactNode }) {
  return (
    <div
      className={[
        "absolute",
        CHIP_CLASSES[pos],
        "px-[22px] py-4 msm:px-[14px] msm:py-3",
        "text-[24px] mlg:text-[20px] msm:text-[18px]",
        "rounded-chip border border-[rgba(173,214,232,.14)] bg-[rgba(10,18,25,.82)]",
        "text-[rgba(232,243,248,.82)]",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function CapabilityPill({
  icon,
  color,
  label,
  warm = false,
}: {
  icon: "wave" | "bridge";
  color: string;
  label: string;
  warm?: boolean;
}) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 px-[22px] py-4",
        "rounded-chip border text-[22px] font-bold text-[rgba(232,243,248,.82)]",
        warm
          ? "border-[rgba(255,195,155,.22)] bg-[rgba(255,195,155,.08)]"
          : "border-[rgba(152,216,255,.18)] bg-[rgba(152,216,255,.08)]",
      ].join(" ")}
    >
      <Icon name={icon} size={15} color={color} />
      {label}
    </span>
  );
}

interface DeviceProps {
  lang: LangKey;
}

export function Device({ lang }: DeviceProps) {
  return (
    <div
      className="p-[34px] rounded-device-box border border-[rgba(173,214,232,.14)] shadow-device-box"
      style={{
        background:
          "radial-gradient(circle at top right, rgba(255,195,155,.18), transparent 35%)," +
          "linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02))",
      }}
    >
      <div
        className={[
          "relative flex items-center justify-center overflow-hidden",
          "p-8 rounded-device-inner border border-[rgba(173,214,232,.12)]",
          "min-h-device mlg:min-h-device-mlg msm:min-h-device-msm",
        ].join(" ")}
        style={{
          background: "linear-gradient(180deg, rgba(8,15,21,.76), rgba(10,18,24,.94))",
        }}
      >
        <Chip pos="lt">{tr("INMP441 intake", "INMP441 收音", "INMP441 收音")[lang]}</Chip>
        <Chip pos="rt">{tr("ESP32-S3 control", "ESP32-S3 控制", "ESP32-S3 控制")[lang]}</Chip>
        <Chip pos="lb">{tr("MAX98357A output", "MAX98357A 輸出", "MAX98357A 输出")[lang]}</Chip>
        <Chip pos="rb">{tr("8 ohm 3W speaker", "8 ohm 3W 喇叭", "8 ohm 3W 扬声器")[lang]}</Chip>

        <div
          className="absolute inset-[14%_16%] rounded-[30px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(152,216,255,.2), rgba(152,216,255,0) 62%)",
          }}
          aria-hidden="true"
        />

        <div
          className={[
            "relative z-10 grid place-items-center overflow-hidden",
            "aspect-square rounded-logo-panel border border-[rgba(173,214,232,.12)]",
            "w-[min(76%,620px)] mlg:w-[min(68%,520px)] msm:w-[min(82%,420px)]",
          ].join(" ")}
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.018))",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,.04), 0 28px 56px rgba(0,0,0,.22)",
          }}
        >
          <div className="relative w-full h-full overflow-hidden rounded-logo-panel">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO}
              alt="DoDo VoiceBox"
              className={[
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                "block max-w-none h-auto",
                "w-[320%] mlg:w-[300%] msm:w-[340%]",
              ].join(" ")}
              style={{ filter: "drop-shadow(0 26px 42px rgba(0,0,0,.28))" }}
            />
          </div>
        </div>

        <p className="absolute left-7 right-7 bottom-[26px] z-10 m-0 text-center text-[26px] msm:text-[22px] leading-[1.72] text-[rgba(232,243,248,.72)]">
          {tr(
            "Voice-first care that speaks first, listens first, and stays with the elder.",
            "主動開口，先聽、先陪、先察覺。",
            "主动开口，先听、先陪、先察觉。",
          )[lang]}
        </p>
      </div>

      <div className="flex flex-wrap gap-[10px] mt-[10px]">
        <CapabilityPill
          icon="wave"
          color={ACCENT}
          label={tr("Acoustic Precision", "聲學精準", "声学精准")[lang]}
        />
        <CapabilityPill
          icon="bridge"
          color={WARM}
          label={tr("Biometric Bridge", "生物訊號橋樑", "生物讯号桥梁")[lang]}
          warm
        />
      </div>
    </div>
  );
}
