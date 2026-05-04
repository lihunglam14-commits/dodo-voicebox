import type {
  Translation,
  LangOption,
  NavItem,
  MetricItem,
  StepItem,
  PillarItem,
  CareItem,
  OutfitItem,
  HardwareRow,
  SoftwareRow,
} from "@/types";

export const LOGO = "/logo.png";
export const ACCENT = "#98d8ff";
export const WARM = "#ffc39b";

export const tr = (EN: string, TC: string, SC: string): Translation => ({
  EN,
  TC,
  SC,
});

export const LANGS: LangOption[] = [
  { key: "TC", label: "廣東話", aria: "Cantonese Traditional Chinese" },
  { key: "SC", label: "简体", aria: "Simplified Chinese" },
  { key: "EN", label: "EN", aria: "English" },
];

export const NAV: NavItem[] = [
  { id: "mission", label: tr("Mission", "系統任務", "系统任务") },
  { id: "systems", label: tr("Systems", "四個層級", "四个层级") },
  { id: "care", label: tr("Care Flow", "照護流程", "照护流程") },
  { id: "hardware", label: tr("Hardware Truth", "硬件基礎", "硬件基础") },
];

export const METRICS: MetricItem[] = [
  {
    id: "voice",
    v: tr("Voice-only", "純語音", "纯语音"),
    l: tr("no screen, no buttons, no typing", "無需屏幕、按鈕或打字", "无需屏幕、按钮或打字"),
  },
  {
    id: "active",
    v: tr("Proactive", "主動式", "主动式"),
    l: tr("starts companionship first", "會先開口陪伴", "会先开口陪伴"),
  },
  {
    id: "fast",
    v: "Sub-2s",
    l: tr("elder Cantonese response", "長者廣東話回應", "长者粤语回应"),
  },
  {
    id: "watch",
    v: "24/7",
    l: tr("silence and routine watch", "沉默與作息監察", "沉默与作息监测"),
  },
];

export const HIGHLIGHTS: Translation[] = [
  tr(
    "Voice-only operation removes the need for screens, buttons, or typing.",
    "純語音操作，毋須屏幕、毋須按鈕、毋須打字。",
    "纯语音操作，不用屏幕、不用按钮、不用打字。",
  ),
  tr(
    "Proactive companionship means the device speaks first instead of waiting silently.",
    "主動式陪伴代表裝置會先開口，而不是被動等待。",
    "主动式陪伴代表装置会先开口，而不是被动等待。",
  ),
  tr(
    "Daily check-ins turn silence and routine drift into earlier warning signals.",
    "每日主動問候，將沉默同作息偏移提早變成警示訊號。",
    "每日主动问候，把沉默和作息偏移提早变成警示讯号。",
  ),
  tr(
    "Community follow-up connects family, NGO partners, volunteers, and support.",
    "後續跟進連接家屬、NGO 夥伴、義工同支援服務。",
    "后续跟进连接家属、NGO 伙伴、义工和支援服务。",
  ),
];

export const STEPS: StepItem[] = [
  {
    n: "01",
    t: tr("Routine Contact", "日常接觸", "日常接触"),
    d: tr(
      "Scheduled greetings build a baseline over time.",
      "由主動問候開始，透過時間建立基線。",
      "由主动问候开始，通过时间建立基线。",
    ),
  },
  {
    n: "02",
    t: tr("Acoustic Capture", "聲學收聽", "声学收听"),
    d: tr(
      "INMP441 and HyperListen separate elder speech from household noise.",
      "INMP441 配合 HyperListen，將長者聲音同家居噪音分開。",
      "INMP441 配合 HyperListen，把长者声音与家居噪音分开。",
    ),
  },
  {
    n: "03",
    t: tr("Clinical Framing", "臨床整理", "临床整理"),
    d: tr(
      "CareCore converts dialogue into SOAP-ready summaries with clear uncertainty.",
      "CareCore 將對話整理成 SOAP-ready 摘要，並清楚標示不確定性。",
      "CareCore 将对话整理成 SOAP-ready 摘要，并清楚标示不确定性。",
    ),
  },
  {
    n: "04",
    t: tr("Community Response", "社區接力", "社区接力"),
    d: tr(
      "BridgeLink connects reminders, follow-up, NGO coordination, and visits.",
      "BridgeLink 將提醒、跟進、NGO 協調同家訪連成同一條流程。",
      "BridgeLink 将提醒、跟进、NGO 协调和家访连成同一条流程。",
    ),
  },
];

export const PILLARS: PillarItem[] = [
  {
    i: "wave",
    n: "HyperListen™",
    k: tr("Acoustic Precision", "聲學精準", "声学精准"),
    d: tr(
      "Low-latency listening tuned for elder Cantonese in noisy homes.",
      "為長者廣東話而調校，低延遲收聽，並過濾家居噪音。",
      "为长者粤语而调校，低延迟收听，并过滤家居噪音。",
    ),
  },
  {
    i: "panel",
    n: "CareCore™",
    k: tr("SOAP Discipline", "SOAP 規範", "SOAP 规范"),
    d: tr(
      "SOAP-standard summaries with visible uncertainty and safety control.",
      "以 SOAP 標準整理摘要，清楚標示不確定性，同時保留安全限制。",
      "以 SOAP 标准整理摘要，清楚标示不确定性，同时保留安全限制。",
    ),
  },
  {
    i: "shield",
    n: "SentinelNet™",
    k: tr("Silent Risk Review", "靜默風險檢視", "静默风险检视"),
    d: tr(
      "Silence-pattern analytics support earlier human escalation.",
      "透過沉默模式分析，幫人工團隊更早介入。",
      "通过沉默模式分析，帮助人工团队更早介入。",
    ),
  },
  {
    i: "bridge",
    n: "BridgeLink™",
    k: tr("EDC Coordination", "EDC 協調", "EDC 协调"),
    d: tr(
      "The Elderly-DoDo-Community layer routes tasks and ownership.",
      "Elderly-DoDo-Community 協調層將提醒、任務同跟進責任連接起來。",
      "Elderly-DoDo-Community 协调层把提醒、任务和跟进责任连接起来。",
    ),
  },
];

export const CARE: CareItem[] = [
  {
    i: "panel",
    t: tr("Caregiver Interface", "照顧者介面", "照顾者界面"),
    d: tr(
      "Each caregiver or partner is paired with one senior.",
      "每位照顧者或夥伴都會同一位長者配對。",
      "每位照顾者或伙伴都会与一位长者配对。",
    ),
  },
  {
    i: "book",
    t: tr("Hong Kong Grounded RAG", "香港在地 RAG", "香港在地 RAG"),
    d: tr(
      "Local culture and policy updates make answers feel relevant.",
      "結合香港文化同政策資訊，令回答更貼地。",
      "结合香港文化和政策资讯，让回答更贴地。",
    ),
  },
  {
    i: "heart",
    t: tr("Emotional First Aid", "情緒急救", "情绪急救"),
    d: tr(
      "Distress signals can trigger breathing guidance before follow-up.",
      "系統聽到高風險訊號時，可以先提供呼吸引導，再交由人手跟進。",
      "系统听到高风险讯号时，可以先提供呼吸引导，再交由人工跟进。",
    ),
  },
  {
    i: "hand",
    t: tr("Monthly Visits And Support", "每月探訪與實務支援", "每月探访与实务支援"),
    d: tr(
      "Monthly visits or practical help keep the service rooted in the community.",
      "每月探訪或者實際生活支援，令服務不只是一部裝置。",
      "每月探访或实际生活支援，让服务不只是一部装置。",
    ),
  },
];

export const OUTFITS: OutfitItem[] = [
  {
    name: tr("Cute Panda", "可愛熊貓", "可爱熊猫"),
    img: "/cute-panda.png",
    desc: tr(
      "A cuddly panda that turns DoDo into a gentle companion: familiar, soft, and always present.",
      "親切的熊貓外衣，讓 DoDo 變成溫柔陪伴，熟悉、柔軟、一直在身邊。",
      "亲切的熊猫外衣，让 DoDo 变成温柔陪伴，熟悉、柔软、一直在身边。",
    ),
  },
  {
    name: tr("Cute Capybara", "可愛水豚", "可爱水豚"),
    img: "/cute-capybara.png",
    desc: tr(
      "The world's most relaxed animal: calm, warm, and at ease wherever it stands.",
      "最放鬆的水豚造型，安定、溫暖，放在家中任何位置都自然。",
      "最放松的水豚造型，安定、温暖，放在家中任何位置都自然。",
    ),
  },
  {
    name: tr("Cute Penguin", "可愛企鵝", "可爱企鹅"),
    img: "/cute-penguin.png",
    desc: tr(
      "Upright and cheerful, this little penguin stands tall and ready to greet every day.",
      "企鵝造型挺直又開朗，日日準備好同長者打招呼。",
      "企鹅造型挺直又开朗，天天准备好和长者打招呼。",
    ),
  },
  {
    name: tr("Cute Sloth", "可愛樹懶", "可爱树懒"),
    img: "/cute-sloth.png",
    desc: tr(
      "Slow, gentle, endlessly patient: perfect for elders who treasure a quieter pace of life.",
      "慢慢來、很溫柔、很有耐性，適合喜歡安靜節奏的長者。",
      "慢慢来、很温柔、很有耐性，适合喜欢安静节奏的长者。",
    ),
  },
];

export const HW: HardwareRow[] = [
  ["Controller", "ESP32-S3-DevKitC-1-N16R8"],
  ["Acoustic intake", "INMP441 I2S MEMS microphone"],
  ["Output stage", "MAX98357A I2S DAC / Class-D"],
  ["Speaker", "8 ohm 3W speaker"],
];

export const SW: SoftwareRow[] = [
  ["Speech", tr("Elder-tuned Cantonese ASR and calm TTS", "長者調校廣東話 ASR 與穩定 TTS", "长者调校粤语 ASR 与稳定 TTS")],
  ["Clinical", tr("SOAP-standard summaries with uncertainty", "SOAP 標準摘要與不確定性標示", "SOAP 标准摘要与不确定性标示")],
  ["Risk", tr("Silence and behaviour drift review", "沉默與行為偏移檢視", "沉默与行为偏移检视")],
  ["Privacy", tr("Masked summaries only. No raw audio export.", "只保留遮罩摘要，不輸出原始音訊。", "只保留遮罩摘要，不输出原始音讯。")],
];
