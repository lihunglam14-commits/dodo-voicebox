import { createElement as h, Fragment, useEffect, useRef, useState } from "react";
import logoUrl from "./api/files/logo_dodo_20260412.png";

const LOGO = logoUrl;
const PRESENTATION_URL = "https://youtu.be/pOwHZXA-oeY";
const PHONE = "64104866";
const TEL = `tel:${PHONE}`;
const WHATSAPP = "https://wa.me/85264104866";
const EMAIL = "dodoaivoicebox@gmail.com";
const PILOT_EMAIL = `mailto:${EMAIL}?subject=${encodeURIComponent("DoDo Pilot Collaboration")}`;

const tr = (EN, TC, SC) => ({ EN, TC, SC });
const text = (value, lang) => (typeof value === "string" ? value : value[lang]);

const LANGS = [
  { key: "TC", label: "廣東話", aria: "Cantonese Traditional Chinese" },
  { key: "SC", label: "简体", aria: "Simplified Chinese" },
  { key: "EN", label: "EN", aria: "English" },
];

const NAV = [
  { id: "how", label: tr("How it works", "運作方式", "运作方式") },
  { id: "difference", label: tr("Why DoDo", "DoDo 特點", "DoDo 特点") },
  { id: "pilot", label: tr("Pilot", "試點合作", "试点合作") },
  { id: "progress", label: tr("Progress", "研發進度", "研发进度") },
  { id: "trust", label: tr("Trust", "私隱與限制", "隐私与限制") },
];

const ICONS = {
  arrow: h(Fragment, null,
    h("path", { d: "M5 12h14" }),
    h("path", { d: "m13 6 6 6-6 6" }),
  ),
  play: h(Fragment, null,
    h("circle", { cx: "12", cy: "12", r: "10" }),
    h("path", { d: "m10 8 6 4-6 4Z" }),
  ),
  phone: h("path", { d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z" }),
  mail: h(Fragment, null,
    h("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }),
    h("path", { d: "m3 7 9 6 9-6" }),
  ),
  message: h(Fragment, null,
    h("path", { d: "M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" }),
    h("path", { d: "M8 9h8" }),
    h("path", { d: "M8 13h5" }),
  ),
  heart: h(Fragment, null,
    h("path", { d: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" }),
    h("path", { d: "M8.5 12h2l1.1-2.2L13 15l1.2-3H16" }),
  ),
  users: h(Fragment, null,
    h("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
    h("circle", { cx: "9", cy: "7", r: "4" }),
    h("path", { d: "M22 21v-2a4 4 0 0 0-3-3.9" }),
    h("path", { d: "M16 3.1a4 4 0 0 1 0 7.8" }),
  ),
  shield: h(Fragment, null,
    h("path", { d: "M12 3 5 6.2v5.4c0 4.1 2.7 7.8 7 9.4 4.3-1.6 7-5.3 7-9.4V6.2L12 3Z" }),
    h("path", { d: "m9 12 2 2 4-4" }),
  ),
  check: h("path", { d: "m5.5 12.5 4 4 9-9" }),
  wave: h(Fragment, null,
    h("path", { d: "M4 10v4" }),
    h("path", { d: "M8 7v10" }),
    h("path", { d: "M12 4v16" }),
    h("path", { d: "M16 7v10" }),
    h("path", { d: "M20 10v4" }),
  ),
  home: h(Fragment, null,
    h("path", { d: "m3 11 9-8 9 8" }),
    h("path", { d: "M5 10v10h14V10" }),
    h("path", { d: "M9 20v-6h6v6" }),
  ),
  clock: h(Fragment, null,
    h("circle", { cx: "12", cy: "12", r: "9" }),
    h("path", { d: "M12 7v5l3 2" }),
  ),
};

const NEEDS = [
  tr(
    "Children can't visit every day, and a few minutes on the phone can't fill a whole quiet day.",
    "仔女未必日日得閒嚟探，傾幾句電話，都填唔滿成日嘅冷清。",
    "子女未必天天有空来探，聊几句电话，也填不满整天的冷清。",
  ),
  tr(
    "Many older adults living alone go all day without anyone to talk to.",
    "好多獨居長者，成日都冇人同佢哋傾過半句。",
    "很多独居长者，整天都没人和他们说上半句。",
  ),
  tr(
    "With no one to check in, a low mood or a change in daily routine simply goes unnoticed.",
    "冇人主動關心一句，唔開心、又或者作息亂咗，都冇人為意。",
    "没人主动关心一句，不开心、或者作息乱了，也没人留意。",
  ),
];

const HOW_STEPS = [
  {
    icon: "wave",
    title: tr(
      "Speak",
      "開口講",
      "开口说",
    ),
    body: tr(
      "Just speak to DoDo in Cantonese. No app, no touchscreen, no buttons — if you can talk, you can use it.",
      "用廣東話直接同 DoDo 講就得，唔使 app、唔使屏幕、唔使㩒掣。識講嘢，就用得到。",
      "用粤语直接和 DoDo 说就行，不用 app、不用屏幕、不用按钮。会说话，就能用。",
    ),
  },
  {
    icon: "heart",
    title: tr(
      "It greets first",
      "主動問候",
      "主动问候",
    ),
    body: tr(
      "DoDo doesn't wait to be asked. It says hello first, chats through the day, and gently reminds you of small things.",
      "DoDo 唔會等你開口。佢會主動講聲早晨、成日陪你傾，亦會輕輕提你啲日常小事。",
      "DoDo 不会等你开口。它会主动说声早安、整天陪你聊，也会轻轻提醒你日常小事。",
    ),
  },
  {
    icon: "users",
    title: tr(
      "Understand needs",
      "了解需要",
      "了解需要",
    ),
    body: tr(
      "Just by chatting, DoDo helps older adults put their needs, moods, and worries into clearer words.",
      "傾傾下偈，DoDo 可以幫長者講清楚佢哋有咩需要、心情點，或者擔心緊啲乜。",
      "聊着聊着，DoDo 可以帮长者讲清楚他们有什么需要、心情怎样，或者担心着什么。",
    ),
  },
  {
    icon: "home",
    title: tr(
      "Connect",
      "連結",
      "连接",
    ),
    body: tr(
      "With consent, family and carers can quietly see how things are going — and decide if a check-in would help.",
      "喺同意安排下，家人同照顧者可以靜靜咁知道近況，再決定使唔使主動關心多一句。",
      "在同意安排下，家人和照顾者可以静静地了解近况，再决定要不要主动关心多一句。",
    ),
  },
];

const AUDIENCES = [
  {
    icon: "heart",
    title: tr("Older adults", "長者", "长者"),
    points: [
      tr("Talk naturally in Cantonese", "自然咁用廣東話傾偈", "自然地用粤语聊天"),
      tr("No app or touchscreen", "毋須 app 或觸控屏幕", "无需 app 或触控屏幕"),
      tr("Daily companionship and simple reminders", "日常陪伴同簡單提醒", "日常陪伴和简单提醒"),
      tr("An easier way to speak up about small needs", "更易講出自己嘅小需要", "更容易讲出自己的小需要"),
    ],
  },
  {
    icon: "users",
    title: tr("NGO and elderly service teams", "社福機構與長者服務團隊", "社福机构与长者服务团队"),
    points: [
      tr("Try a light, low-effort voice tool", "試一件輕巧、唔花功夫嘅語音工具", "试一件轻巧、不费功夫的语音工具"),
      tr("See what comes up between visits", "了解兩次探訪之間，長者有咩需要", "了解两次探访之间，长者有什么需要"),
      tr("Connect elders to the right community resources", "幫長者搭通合適嘅社區資源", "帮长者接上合适的社区资源"),
    ],
  },
  {
    icon: "home",
    title: tr("Caregivers and families", "照顧者與家人", "照顾者与家人"),
    points: [
      tr("Share simple updates with trusted people", "同可信任嘅人分享簡單近況", "与可信任的人分享简单近况"),
      tr("Do not rely only on occasional phone calls", "唔使只依靠間中一次電話", "不用只依靠偶尔一次电话"),
      tr("Know when a check-in would help", "知道幾時主動關心一下會更好", "知道什么时候主动关心一下会更好"),
    ],
  },
];

const MARKET_ROLES = [
  {
    icon: "shield",
    title: tr(
      "Emergency alarm services",
      "平安鐘／緊急支援服務",
      "平安钟／紧急支持服务",
    ),
    role: tr(
      "Urgent help and safety support",
      "突發求助與安全支援",
      "紧急求助与安全支持",
    ),
    body: tr(
      "Built for urgent help and safety — mainly so a person can call for help when something unexpected happens.",
      "專門應付突發情況，重點係安全，喺有需要嗰陣幫長者快啲求助。",
      "专门应付突发情况，重点是安全，在有需要的时候帮长者尽快求助。",
    ),
  },
  {
    icon: "message",
    title: tr(
      "General AI companions",
      "一般 AI 陪伴產品",
      "一般 AI 陪伴产品",
    ),
    role: tr(
      "Conversation and interaction",
      "聊天與互動體驗",
      "聊天与互动体验",
    ),
    body: tr(
      "Usually built around chat or brain games — a different role, not necessarily made for Cantonese-speaking elders' daily needs or local service links.",
      "多數係用嚟傾偈或者玩吓腦力遊戲，同 DoDo 嘅角色唔同，未必專為廣東話長者嘅日常需要、又或者連結本地服務而設。",
      "多数用来聊天或者玩玩脑力游戏，和 DoDo 的角色不同，未必专为粤语长者的日常需要、或者连接本地服务而设。",
    ),
  },
  {
    icon: "heart",
    title: tr("DoDo", "DoDo", "DoDo"),
    role: tr(
      "Proactive companionship, linked to caregivers",
      "主動陪伴，連住照顧者",
      "主动陪伴，连着照顾者",
    ),
    body: tr(
      "More than a chatbot. DoDo greets older adults first and chats in Cantonese — and behind it, a caregiver side adds real tools: reminders, proactive check-ins, and a simple view of moods and daily updates. An early prototype, meant to complement rather than replace urgent help or professional care.",
      "唔止係識傾偈咁簡單。DoDo 會主動用廣東話陪長者傾計，背後仲有畀照顧者用嘅實用功能：提醒、主動關心，以及一個睇到情緒同日常近況嘅簡單介面。現為早期原型，定位係補足，而唔係取代緊急支援或專業照護。",
      "不止是会聊天那么简单。DoDo 会主动用粤语陪长者聊天，背后还有给照顾者用的实用功能：提醒、主动关心，以及一个看到情绪和日常近况的简单界面。现为早期原型，定位是补足，而不是取代紧急支持或专业照护。",
    ),
  },
];

const PILOT_COLUMNS = [
  {
    title: tr("Who the pilot is for", "試點適合邊類夥伴", "试点适合哪些伙伴"),
    points: [
      tr("Hong Kong NGOs and elderly centres", "香港社福機構同長者中心", "香港社福机构和长者中心"),
      tr("Community, volunteer, and home-care teams", "社區、義工同家居照護團隊", "社区、志愿者和居家照护团队"),
      tr("Teams able to support a small, controlled prototype test", "能夠支援小型、受控原型測試嘅團隊", "能够支持小型、受控原型测试的团队"),
    ],
  },
  {
    title: tr("What the pilot evaluates", "試點會評估啲乜", "试点会评估什么"),
    points: [
      tr("Whether older adults will actually talk to DoDo", "長者係咪願意實際同 DoDo 傾偈", "长者是否愿意实际和 DoDo 聊天"),
      tr("What daily needs, reminders, or concerns they share", "佢哋會分享咩日常需要、提醒或擔心", "他们会分享什么日常需要、提醒或担心"),
      tr("Whether simple updates help trusted people respond", "簡單近況係咪幫到可信任嘅人回應", "简单近况是否帮助可信任的人回应"),
      tr("Whether voice-based support can fit between visits", "語音支援係咪適合放喺探訪之間", "语音支持是否适合放在探访之间"),
    ],
  },
  {
    title: tr("What DoDo provides", "DoDo 可提供", "DoDo 可提供"),
    points: [
      tr("Physical VoiceBox prototype setup", "實體 VoiceBox 原型設定", "实体 VoiceBox 原型设置"),
      tr("Product demonstration and simple staff guidance", "產品示範同簡單員工指引", "产品演示和简单员工指引"),
      tr("Draft consent, feedback, and evaluation materials", "同意、意見收集同評估材料初稿", "同意、意见收集和评估材料初稿"),
      tr("Technical support and collaborative refinement", "技術支援同協作改良", "技术支持和协作改进"),
    ],
  },
  {
    title: tr("What a partner contributes", "合作夥伴可提供", "合作伙伴可提供"),
    points: [
      tr("A clear use case and staff contact", "清晰使用情境同員工聯絡人", "清晰使用场景和员工联系人"),
      tr("Suitable participants with informed consent", "合適並知情同意嘅參與者", "合适并知情同意的参与者"),
      tr("Safeguarding, trusted-contact, and support guidance", "保障、可信任聯絡人同支援指引", "保障、可信任联系人和支持指引"),
      tr("Practical feedback from participants and staff", "參與者同員工嘅實務意見", "参与者和员工的实务意见"),
    ],
  },
];

const WHAT_EXISTS_NOW = [
  tr("Early working prototype", "早期可運作原型", "早期可运行原型"),
  tr("Cantonese-oriented voice interaction flow", "以廣東話為主嘅語音互動流程", "以粤语为主的语音互动流程"),
  tr("Simple voice conversation and response", "簡單語音對話同回應", "简单语音对话和回应"),
  tr("Reminder and daily support concepts", "提醒同日常支援概念", "提醒和日常支持概念"),
  tr("Care Console / simple update concept", "Care Console／簡單近況概念", "Care Console／简单近况概念"),
  tr("Hardware VoiceBox direction", "VoiceBox 硬件方向", "VoiceBox 硬件方向"),
  tr("Prototype workflow display for partners", "供合作方參考嘅原型流程展示", "供合作方参考的原型流程展示"),
];

const WHAT_COMES_NEXT = [
  tr("Real product photography", "真實產品相片", "真实产品照片"),
  tr("Short 90-second product demo", "90 秒產品示範短片", "90 秒产品示范短片"),
  tr("Confirmed pilot scope", "確認試點範圍", "确认试点范围"),
  tr("User testing with older adults", "與長者進行使用者測試", "与长者进行用户测试"),
  tr("Partner / advisor / institutional proof", "合作夥伴／顧問／院校證明材料", "合作伙伴／顾问／院校证明材料"),
  tr("Clear privacy and consent process", "清晰嘅私隱同同意流程", "清晰的隐私和同意流程"),
];

const PRODUCT_DEMO_PLACEHOLDER = {
  title: tr(
    "90-second product demo coming next",
    "90 秒產品示範短片即將補上",
    "90 秒产品示范短片即将补上",
  ),
  body: tr(
    "A short product demo will show how an older adult talks to DoDo, how simple reminders work, and how trusted people may receive basic updates.",
    "這段短片將展示長者如何與 DoDo 對話、簡單提醒如何運作，以及可信任的人如何接收基本更新。",
    "这段短片将展示长者如何与 DoDo 对话、简单提醒如何运作，以及可信任的人如何接收基本更新。",
  ),
};

const EVIDENCE_TRANSPARENCY = {
  body: tr(
    "We are keeping the product stage transparent. The following materials will be added as they become verified.",
    "我們會保持產品階段透明。以下材料會在確認後逐步補上。",
    "我们会保持产品阶段透明。以下材料会在确认后逐步补上。",
  ),
  status: tr(
    "Product photography, pilot scope, and partner proof are to be verified. User feedback is to be collected.",
    "產品相片、試點範圍同合作夥伴證明仍待確認；使用者意見仍待收集。",
    "产品照片、试点范围和合作伙伴证明仍待确认；用户反馈仍待收集。",
  ),
};

const PROOF_IMAGES = [
  {
    src: `${import.meta.env.BASE_URL}assets/dodo-workflow-display-image-01.png`,
    label: tr(
      "Prototype workflow display",
      "原型流程展示畫面",
      "原型流程展示画面",
    ),
    caption: tr(
      "This screen is used to visualise the DoDo interaction flow for partners. Older adults would mainly use the VoiceBox through speech, without needing to operate this interface.",
      "此畫面用作向合作方展示 DoDo 的互動流程。長者主要透過語音使用 VoiceBox，毋須操作這個介面。",
      "此画面用作向合作方展示 DoDo 的互动流程。长者主要通过语音使用 VoiceBox，无需操作这个界面。",
    ),
    alt: tr(
      "Prototype workflow display showing how DoDo voice interaction, reminders, simple updates, and community support connect together.",
      "DoDo 原型流程展示畫面，顯示語音互動、提醒、簡單近況與社區支援之間的連結。",
      "DoDo 原型流程展示画面，显示语音互动、提醒、简单近况与社区支持之间的连接。",
    ),
  },
];

const CARE_CONSOLE_INTRO = {
  eyebrow: tr("Care Console preview", "照護主控台示範", "照护主控台示范"),
  body: tr(
    "These prototype screens show the partner-facing Care Console. Older adults mainly use DoDo through speech and would not operate these interfaces. Every screen keeps a person in control: DoDo does not contact anyone, dispatch help, or make care decisions.",
    "以下原型畫面展示供合作方使用嘅照護主控台。長者主要透過語音使用 DoDo，毋須操作呢啲介面。每個畫面都保持由人主導：DoDo 唔會聯絡任何人、唔會派人，亦唔會自動作出照護決定。",
    "以下原型画面展示供合作方使用的照护主控台。长者主要通过语音使用 DoDo，无需操作这些界面。每个画面都保持由人主导：DoDo 不会联络任何人、不会派人，也不会自动作出照护决定。",
  ),
};

const CARE_CONSOLE_IMAGES = [
  {
    src: `${import.meta.env.BASE_URL}assets/dodo-care-console-overview.png`,
    label: tr("Care Console · Overview", "照護主控台 · 總覽", "照护主控台 · 总览"),
    caption: tr(
      "The dashboard brings together a plain-language daily summary, an at-a-glance view of what DoDo did and did not do, a human-review follow-up queue, a five-part status view (reminders, follow-up, social connection, and emotional cues), and a recent 7-day trend. A person reviews everything before any decision.",
      "主控台將每日摘要、DoDo 做咗同未做到嘅「一眼睇」、需人手檢視嘅跟進佇列、五個面向嘅狀態（提醒、跟進、社交連結同情緒線索），以及最近 7 日趨勢集合喺一頁。所有資訊都先由人檢視，先至會有任何決定。",
      "主控台将每日摘要、DoDo 做了与未做到的「一眼睇」、需人工查看的跟进队列、五个面向的状态（提醒、跟进、社交连接和情绪线索），以及最近 7 日趋势集合在一页。所有信息都先由人查看，才会有任何决定。",
    ),
    alt: tr(
      "DoDo Care Console overview screen showing a daily summary, an at-a-glance panel, a follow-up queue, a five-point status diagram, and a 7-day trend.",
      "DoDo 照護主控台總覽畫面，顯示每日摘要、一眼睇面板、跟進佇列、五點狀態圖同 7 日趨勢。",
      "DoDo 照护主控台总览画面，显示每日摘要、一眼睇面板、跟进队列、五点状态图和 7 日趋势。",
    ),
  },
  {
    src: `${import.meta.env.BASE_URL}assets/dodo-care-console-reminders.png`,
    label: tr("Care Console · Reminders", "照護主控台 · 提醒", "照护主控台 · 提醒"),
    caption: tr(
      "A caregiver can set simple spoken reminders for DoDo — choosing a type (medicine, appointment, a task, or a check-in), a one-time, daily, or weekly schedule, a time, and an optional note. In this prototype, reminders play on the local demo page only; no phone, SMS, email, push, or caregiver dispatch is sent.",
      "照顧者可以為 DoDo 設定簡單語音提醒——揀類型（食藥、預約、要做嘅事或報平安）、一次／每日／每週、時間，亦可加備註。喺呢個原型，提醒只會喺本機示範頁面播放，唔會經電話、SMS、email、push 或照護者通知派送。",
      "照顾者可以为 DoDo 设定简单语音提醒——选类型（食药、预约、要做的事或报平安）、一次／每日／每周、时间，也可加备注。在这个原型，提醒只会在本机示范页面播放，不会经电话、SMS、email、push 或照护者通知派送。",
    ),
    alt: tr(
      "DoDo Care Console add-reminder form with fields for what to remind, reminder type, schedule, time, and an optional note.",
      "DoDo 照護主控台新增提醒表單，包含提醒內容、提醒類型、頻率、時間同選填備註。",
      "DoDo 照护主控台新增提醒表单，包含提醒内容、提醒类型、频率、时间和选填备注。",
    ),
  },
  {
    src: `${import.meta.env.BASE_URL}assets/dodo-care-console-proactive.png`,
    label: tr("Care Console · Proactive check-ins", "照護主控台 · 主動關心", "照护主控台 · 主动关心"),
    caption: tr(
      "Proactive companionship can be tuned: a daily window (for example 07:00–22:00), how often DoDo speaks first, and a warm Cantonese tone. A caregiver can pause or adjust it at any time. It only appears when the DoDo page is open and idle — there is no background monitoring, and DoDo does not contact anyone.",
      "主動陪伴可以調校：每日時段（例如 07:00–22:00）、DoDo 主動開口嘅頻率，同溫暖嘅廣東話語氣。照顧者可以隨時暫停或調整。只會喺 DoDo 頁面開住而且閒置時出現——冇背景監察，DoDo 亦唔會聯絡任何人。",
      "主动陪伴可以调校：每日时段（例如 07:00–22:00）、DoDo 主动开口的频率，和温暖的粤语语气。照顾者可以随时暂停或调整。只会在 DoDo 页面开着而且闲置时出现——没有背景监察，DoDo 也不会联络任何人。",
    ),
    alt: tr(
      "DoDo Care Console proactive check-in settings showing the active time window, frequency, and tone, with pause and adjust controls.",
      "DoDo 照護主控台主動關心設定，顯示啟用時段、頻率同語氣，並有暫停同調整按鈕。",
      "DoDo 照护主控台主动关心设定，显示启用时段、频率和语气，并有暂停和调整按钮。",
    ),
  },
];

const DESIGN_PHILOSOPHY = {
  eyebrow: tr("Design philosophy", "設計理念", "设计理念"),
  title: tr(
    "Why a friendly companion, not a gadget",
    "點解係一隻親切公仔，而唔係一部冷冰冰嘅裝置",
    "为什么是一只亲切公仔，而不是一部冷冰冰的装置",
  ),
  body: tr(
    "From the start, we wanted the most natural, simple thing an older adult could use: open your mouth and talk, nothing to learn. The look matters as much as what it does — it should feel like a companion someone actually wants at home, not a machine.",
    "由一開始，我哋想做嘅，就係一件最自然、最簡單、長者一用就識嘅嘢：開口就同佢傾，唔使學任何嘢。外形同功能一樣咁緊要——佢要似一個長者真係想擺喺屋企嘅陪伴，而唔係一部機器。",
    "从一开始，我们想做的，就是一件最自然、最简单、长者一用就会的东西：开口就和它聊，不用学任何东西。外形和功能一样重要——它要像一个长者真的想放在家里的陪伴，而不是一部机器。",
  ),
  note: tr(
    "This direction draws on research into elderly-care technology and on early conversations with older adults. It reflects our design intent, not a finished user study.",
    "呢個方向，參考咗一啲長者科技嘅研究，同我哋同長者傾開嘅心得。佢代表我哋嘅設計初衷，唔係一個已經做完嘅用戶研究。",
    "这个方向，参考了一些长者科技的研究，和我们和长者聊过的心得。它代表我们的设计初衷，不是一个已经做完的用户研究。",
  ),
};

const DESIGN_POINTS = [
  {
    icon: "wave",
    title: tr("Natural and simple", "自然又簡單", "自然又简单"),
    body: tr(
      "You just talk. Nothing to learn — no apps, screens, buttons, or menus — the most direct way to ask, be reminded, or chat.",
      "開口就用得到。冇 app、冇屏幕、冇按鈕、冇選單要學，想講就講，提需要、收提醒、傾偈都得。",
      "开口就能用。没有 app、屏幕、按钮、菜单要学，想说就说，提需要、收提醒、聊天都行。",
    ),
  },
  {
    icon: "heart",
    title: tr("Familiar, not clinical", "親切，而唔係臨床感", "亲切，而不是临床感"),
    body: tr(
      "Many older adults dislike high-tech or hospital-like devices — they feel cold, even like a label that says “I'm old.” Research found most people don't wear medical alert pendants for exactly that reason. A friendly character doesn't carry that feeling.",
      "好多長者唔鍾意太有科技感、又或者似醫院嗰啲裝置，覺得冷冰冰，甚至好似貼咗個「我老喇」嘅標籤。有研究發現，多數人都唔戴平安鐘，正正係因為唔想「睇落好老」。一隻得意嘅公仔，就唔會畀人呢種感覺。",
      "很多长者不喜欢太有科技感、或者像医院那种装置，觉得冷冰冰，甚至好像贴了个「我老了」的标签。有研究发现，多数人都不戴平安钟，正是因为不想「看起来很老」。一只可爱的公仔，就不会给人这种感觉。",
    ),
  },
  {
    icon: "home",
    title: tr("A companion to keep close", "想擺喺身邊嘅陪伴", "想放在身边的陪伴"),
    body: tr(
      "Warm, pet-like characters make people want them around every day, and feel a bit more at ease. DoDo comes as four — pick the one that feels right at home.",
      "暖笠笠、似隻小寵物嘅造型，會令人更想日日擺喺身邊，亦多份安心。DoDo 有四款公仔，揀一隻最啱屋企嘅就得。",
      "暖暖的、像只小宠物的造型，会让人更想天天放在身边，也多份安心。DoDo 有四款公仔，选一只最适合家里的就行。",
    ),
  },
];

const CHARACTERS = [
  {
    img: `${import.meta.env.BASE_URL}assets/character-panda.png`,
    name: tr("Cute Panda", "可愛熊貓", "可爱熊猫"),
    desc: tr(
      "Cuddly and gentle — familiar, soft, and always present.",
      "親切柔軟嘅熊貓，熟悉、溫柔、一直喺身邊。",
      "亲切柔软的熊猫，熟悉、温柔、一直在身边。",
    ),
    alt: tr("DoDo Cute Panda companion design", "DoDo 可愛熊貓造型", "DoDo 可爱熊猫造型"),
  },
  {
    img: `${import.meta.env.BASE_URL}assets/character-capybara.png`,
    name: tr("Cute Capybara", "可愛水豚", "可爱水豚"),
    desc: tr(
      "The world's most relaxed animal — calm, warm, at ease anywhere.",
      "世界上最放鬆嘅動物，安定、溫暖，放喺邊都自然。",
      "世界上最放松的动物，安定、温暖，放在哪都自然。",
    ),
    alt: tr("DoDo Cute Capybara companion design", "DoDo 可愛水豚造型", "DoDo 可爱水豚造型"),
  },
  {
    img: `${import.meta.env.BASE_URL}assets/character-penguin.png`,
    name: tr("Cute Penguin", "可愛企鵝", "可爱企鹅"),
    desc: tr(
      "Upright and cheerful — ready to greet the day, every day.",
      "企得挺直又開朗，日日準備好打招呼。",
      "站得挺直又开朗，天天准备好打招呼。",
    ),
    alt: tr("DoDo Cute Penguin companion design", "DoDo 可愛企鵝造型", "DoDo 可爱企鹅造型"),
  },
  {
    img: `${import.meta.env.BASE_URL}assets/character-sloth.png`,
    name: tr("Cute Sloth", "可愛樹懶", "可爱树懒"),
    desc: tr(
      "Slow, gentle, endlessly patient — for a quieter pace of life.",
      "慢慢嚟、好溫柔、好有耐性，適合鍾意安靜節奏嘅長者。",
      "慢慢来、很温柔、很有耐性，适合喜欢安静节奏的长者。",
    ),
    alt: tr("DoDo Cute Sloth companion design", "DoDo 可愛樹懶造型", "DoDo 可爱树懒造型"),
  },
];

const TRUST_ITEMS = [
  tr(
    "DoDo is not an emergency service, a medical device, or a replacement for professional care.",
    "DoDo 唔係緊急服務、醫療裝置，亦唔會取代專業照護。",
    "DoDo 不是紧急服务、医疗设备，也不会取代专业照护。",
  ),
  tr(
    "Taking part must be voluntary, with clear consent and an easy way to pause or stop anytime.",
    "參與一定要出於自願，要有清晰嘅同意，亦可以隨時暫停或者退出。",
    "参与一定要出于自愿，要有清晰的同意，也可以随时暂停或者退出。",
  ),
  tr(
    "Only the trusted contacts agreed in advance, or an authorised care team, can see the information — and only by the pilot's rules.",
    "只有事先講好嘅可信任聯絡人，或者獲授權嘅照護團隊，先可以睇到啲資料，而且要跟返試點嘅規則。",
    "只有事先讲好的可信任联系人，或者获授权的照护团队，才可以看到资料，而且要按试点的规则。",
  ),
  tr(
    "Share privacy-minded summaries first; sharing whole conversations should never be the default.",
    "盡量只分享重視私隱嘅摘要；唔應該一開始就預設分享成段對話。",
    "尽量只分享注重隐私的摘要；不应该一开始就默认分享整段对话。",
  ),
  tr(
    "A person should look at the full picture before any follow-up; DoDo should never make care decisions on its own.",
    "任何跟進，都應該由人睇清楚情況先決定；DoDo 唔應該自己作照護決定。",
    "任何跟进，都应该由人看清楚情况后再决定；DoDo 不应该自己作照护决定。",
  ),
  tr(
    "Before a pilot starts, partners should settle how data is handled, how long it's kept, who can see it, and how follow-up works.",
    "試點開始之前，合作夥伴要先傾掂啲資料點處理、保存幾耐、邊個可以睇，同埋點樣跟進。",
    "试点开始之前，合作伙伴要先谈好资料怎样处理、保存多久、谁可以看，以及怎样跟进。",
  ),
];

function Icon({ name, size = 19 }) {
  return h("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  }, ICONS[name]);
}

function CTA({ href, children, variant = "primary", icon, external = false }) {
  return h("a", {
    className: `btn ${variant}`,
    href,
    target: external ? "_blank" : undefined,
    rel: external ? "noreferrer" : undefined,
  }, children, icon ? h(Icon, { name: icon, size: 17 }) : null);
}

function SectionIntro({ eyebrow, title, body, lang, centered = false, light = false }) {
  return h("div", { className: `sectionIntro ${centered ? "centered" : ""} ${light ? "light" : ""}` },
    h("p", { className: "eyebrow" }, text(eyebrow, lang)),
    h("h2", null, text(title, lang)),
    body ? h("p", { className: "intro" }, text(body, lang)) : null,
  );
}

function ContactLinks({ lang }) {
  return h("div", { className: "contactLinks" },
    h(CTA, { href: WHATSAPP, variant: "primary", icon: "message", external: true },
      tr("WhatsApp: 64104866", "WhatsApp：64104866", "WhatsApp：64104866")[lang],
    ),
    h(CTA, { href: TEL, variant: "secondary", icon: "phone" },
      tr("Call: 64104866", "電話：64104866", "电话：64104866")[lang],
    ),
    h(CTA, { href: `mailto:${EMAIL}`, variant: "secondary", icon: "mail" }, EMAIL),
  );
}

function ProductVisual({ lang }) {
  return h("div", { className: "prototypeVisual" },
    h("div", { className: "visualHeader" },
      h("span", { className: "liveDot", "aria-hidden": "true" }),
      h("span", null, tr(
        "A friendly voice companion for everyday life",
        "陪伴日常生活嘅廣東話智能公仔",
        "陪伴日常生活的粤语智能公仔",
      )[lang]),
    ),
    h("div", { className: "visualStage" },
      h("div", { className: "productFlow" },
        h("div", { className: "devicePanel" },
          h("span", { className: "panelLabel" },
            tr("Talk to DoDo", "同 DoDo 傾偈", "和 DoDo 聊天")[lang],
          ),
          h("div", { className: "voiceDevice" },
            h("div", { className: "deviceGlow", "aria-hidden": "true" }),
            h("div", {
              className: "deviceLogo",
              role: "img",
              "aria-label": "DoDo VoiceBox",
              style: { "--logo-image": `url("${LOGO}")` },
            }),
            h("div", { className: "voiceBars", "aria-hidden": "true" },
              [12, 24, 36, 20, 30, 16, 26].map((height, index) =>
                h("span", { key: height + index, style: { height: `${height}px`, "--delay": `${index * 90}ms` } }),
              ),
            ),
          ),
          h("div", { className: "speechBubble" },
            tr(
              "Good morning, Mrs. Chan. How are you feeling today?",
              "早晨，陳婆婆。今日感覺點呀？",
              "早上好，陈婆婆。今天感觉怎么样？",
            )[lang],
          ),
          h("p", { className: "deviceCaption" },
            tr(
              "Cantonese · No apps or touchscreens",
              "廣東話 · 毋須 app 或觸控屏幕",
              "粤语 · 无需 app 或触控屏幕",
            )[lang],
          ),
        ),
        h("div", { className: "flowConnector", "aria-hidden": "true" },
          h("span", null, "→"),
          h("small", null, tr("Simple update", "簡單近況", "简单近况")[lang]),
        ),
        h("div", { className: "consolePanel" },
          h("span", { className: "panelLabel" }, "Care Console"),
          h("div", { className: "summaryPreview" },
            h("span", { className: "summaryLabel" },
              tr("Trusted people", "可信任嘅人", "可信任的人")[lang],
            ),
            h("strong", null,
              tr("Simple daily updates", "簡單日常近況", "简单日常近况")[lang],
            ),
            h("ul", { className: "consoleRows" },
              [
                tr("Had a morning chat", "朝早傾過偈", "早上聊过天"),
                tr("Reminder received", "已收到提醒", "已收到提醒"),
                tr("Asked about collecting medicine", "提到攞藥有困難", "提到取药有困难"),
              ].map((item) => h("li", { key: item.EN },
                h(Icon, { name: "check", size: 14 }),
                h("span", null, item[lang]),
              )),
            ),
          ),
        ),
      ),
      h("div", { className: "serviceFlow" },
        h("span", null, tr("Elderly", "長者", "长者")[lang]),
        h("strong", null, "→"),
        h("span", null, "DoDo"),
        h("strong", null, "→"),
        h("span", null, tr("Community", "社區", "社区")[lang]),
        h("small", null, "Elderly → DoDo → Community"),
      ),
    ),
  );
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (!window.matchMedia) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);
    onChange();
    media.addEventListener ? media.addEventListener("change", onChange) : media.addListener(onChange);
    return () => media.removeEventListener ? media.removeEventListener("change", onChange) : media.removeListener(onChange);
  }, []);

  return reduced;
}

function DodoFinal() {
  const [lang, setLang] = useState("TC");
  const [active, setActive] = useState("how");
  const rootRef = useRef(null);
  const reduced = useReducedMotion();
  const code = lang === "EN" ? "en" : lang === "TC" ? "zh-Hant" : "zh-Hans";
  const canReveal = !reduced && typeof IntersectionObserver !== "undefined";
  const jump = (id) => document.getElementById(id)?.scrollIntoView({
    behavior: reduced ? "auto" : "smooth",
    block: "start",
  });

  useEffect(() => {
    document.documentElement.lang = code;
  }, [code]);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const sections = [...node.querySelectorAll("[data-section]")];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target?.id) setActive(visible.target.id);
    }, { root: node, threshold: [0.2, 0.45], rootMargin: "-18% 0px -58% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!canReveal) return;
    const node = rootRef.current;
    if (!node) return;
    const targets = [...node.querySelectorAll("[data-reveal]")];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("inview");
          io.unobserve(entry.target);
        }
      });
    }, { root: node, rootMargin: "0px 0px -12% 0px", threshold: 0.12 });
    targets.forEach((target) => io.observe(target));
    return () => io.disconnect();
  }, [canReveal]);

  return h("div", { ref: rootRef, className: `page${canReveal ? " reveal-ready" : ""}`, lang: code },
    h("style", null, `
      * { box-sizing: border-box; }
      html, body, #root { margin: 0; min-height: 100%; }
      body { background: #f5faf7; color: #17383b; }
      button { font: inherit; }
      a { color: inherit; text-decoration: none; }
      h1, h2, h3, p { letter-spacing: 0; }
      :focus-visible {
        outline: 2px solid #12877b;
        outline-offset: 3px;
      }
      .btn:focus-visible {
        outline: 2px solid #0d5f57;
        outline-offset: 3px;
      }
      .page {
        height: 100vh;
        height: 100dvh;
        overflow: auto;
        overflow-x: hidden;
        background:
          radial-gradient(circle at 82% 8%, rgba(159, 225, 208, .23), transparent 30%),
          linear-gradient(180deg, #f8fcf9 0%, #eef8f3 48%, #fff8ef 100%);
        font-family: ${lang === "EN" ? "'Manrope', system-ui, sans-serif" : "'Noto Sans TC', 'Noto Sans SC', system-ui, sans-serif"};
      }
      .wrap {
        width: min(1320px, calc(100% - 56px));
        margin: 0 auto;
      }
      .topbar {
        position: sticky;
        top: 0;
        z-index: 30;
        background: rgba(248, 252, 249, .92);
        border-bottom: 1px solid rgba(31, 89, 83, .1);
        backdrop-filter: blur(18px);
      }
      .topbarInner {
        min-height: 76px;
        display: flex;
        align-items: center;
        gap: 18px;
        justify-content: space-between;
      }
      .brand {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 0;
        border: 0;
        background: transparent;
        color: #17383b;
        font-size: 19px;
        font-weight: 800;
        cursor: pointer;
        white-space: nowrap;
      }
      .brandMark {
        width: 48px;
        height: 30px;
        flex: 0 0 auto;
        border-radius: 8px;
        background-color: #fff;
        background-image: var(--logo-image);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 350% auto;
        border: 1px solid rgba(31, 89, 83, .12);
      }
      .nav, .langs, .ctaRow, .contactLinks, .heroProofs {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
      }
      .nav {
        flex: 1 1 auto;
        justify-content: center;
      }
      .navBtn, .langBtn {
        border: 0;
        border-radius: 999px;
        padding: 10px 13px;
        background: transparent;
        color: #4d6667;
        font-size: 16px;
        font-weight: 800;
        cursor: pointer;
        transition: color .18s ease, background .18s ease, transform .18s ease;
      }
      .navBtn:hover, .langBtn:hover {
        transform: translateY(-1px);
        background: rgba(229, 245, 239, .78);
      }
      .navBtn.active, .langBtn.active {
        color: #0f7b70;
        background: #e5f5ef;
      }
      .btn {
        min-height: 48px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border-radius: 999px;
        padding: 0 20px;
        border: 1px solid transparent;
        font-size: 17px;
        font-weight: 800;
        line-height: 1.15;
        box-shadow: 0 8px 20px rgba(20, 95, 87, .09);
        transition: transform .18s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease;
      }
      .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 14px 30px rgba(20, 95, 87, .15);
      }
      .btn.primary {
        color: #fff;
        background: #12877b;
        border-color: #12877b;
      }
      .btn.secondary {
        color: #174d4c;
        background: #fff;
        border-color: rgba(23, 77, 76, .18);
      }
      .btn.text {
        min-height: auto;
        padding: 8px 0;
        color: #0f766d;
        background: transparent;
        border: 0;
        box-shadow: none;
      }
      .hero {
        padding: 68px 0 76px;
      }
      .heroGrid {
        display: grid;
        grid-template-columns: minmax(0, 1.02fr) minmax(430px, .98fr);
        gap: 64px;
        align-items: center;
      }
      .heroCopy, .prototypeVisual {
        animation: riseIn .68s cubic-bezier(.2, .8, .2, 1) both;
      }
      .prototypeVisual { animation-delay: .1s; }
      .statusBadge {
        display: inline-flex;
        align-items: center;
        gap: 9px;
        margin-bottom: 18px;
        padding: 9px 13px;
        border-radius: 999px;
        color: #0d6d65;
        background: #dff4ec;
        border: 1px solid rgba(18, 135, 123, .18);
        font-size: 14px;
        line-height: 1.2;
        font-weight: 800;
      }
      .statusBadge::before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #20a68f;
        box-shadow: 0 0 0 5px rgba(32, 166, 143, .12);
      }
      h1 {
        max-width: 12ch;
        margin: 0;
        color: #15393b;
        font-size: clamp(46px, 5.4vw, 70px);
        line-height: 1.04;
        letter-spacing: -0.015em;
      }
      .heroLead {
        max-width: 760px;
        margin: 22px 0 0;
        color: #506c6d;
        font-size: clamp(19px, 2vw, 24px);
        line-height: 1.65;
        font-weight: 600;
      }
      .ctaRow { margin-top: 28px; }
      .heroProofs { margin-top: 28px; gap: 10px; }
      .heroProof {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 9px 12px;
        border-radius: 999px;
        color: #31595a;
        background: rgba(255, 255, 255, .78);
        border: 1px solid rgba(31, 89, 83, .11);
        font-size: 14px;
        font-weight: 800;
      }
      .heroProof svg { color: #12877b; }
      .prototypeVisual {
        padding: 20px;
        border-radius: 30px;
        background: rgba(255, 255, 255, .9);
        border: 1px solid rgba(31, 89, 83, .12);
        box-shadow: 0 26px 70px rgba(21, 83, 78, .14);
      }
      .visualHeader, .visualFooter {
        display: flex;
        align-items: center;
        gap: 9px;
        color: #3f5d5e;
        font-size: 15px;
        line-height: 1.4;
        font-weight: 800;
      }
      .liveDot {
        flex: 0 0 auto;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #1da990;
        box-shadow: 0 0 0 5px rgba(29, 169, 144, .12);
      }
      .visualStage {
        position: relative;
        margin: 18px 0;
        padding: 22px;
        overflow: hidden;
        border-radius: 22px;
        background:
          linear-gradient(rgba(18, 135, 123, .06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(18, 135, 123, .06) 1px, transparent 1px),
          linear-gradient(145deg, #eff9f5, #fff8ef);
        background-size: 32px 32px, 32px 32px, auto;
        border: 1px solid rgba(31, 89, 83, .08);
      }
      .productFlow {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 58px minmax(0, 1fr);
        gap: 12px;
        align-items: center;
      }
      .devicePanel, .consolePanel {
        min-width: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .panelLabel {
        align-self: flex-start;
        margin-bottom: 13px;
        color: #166d66;
        font-size: 14px;
        font-weight: 800;
        letter-spacing: .04em;
        text-transform: uppercase;
      }
      .voiceDevice {
        position: relative;
        z-index: 2;
        width: 154px;
        height: 170px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 14px;
        border-radius: 45% 45% 32% 32%;
        background: linear-gradient(180deg, #ffffff, #e8f5f1);
        border: 1px solid rgba(18, 135, 123, .18);
        box-shadow: 0 24px 60px rgba(21, 83, 78, .18);
      }
      .deviceGlow {
        position: absolute;
        inset: -24px;
        z-index: -1;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(73, 187, 164, .22), transparent 66%);
        animation: signalBreath 4.6s ease-in-out infinite;
      }
      .deviceLogo {
        width: 110px;
        height: 66px;
        background-image: var(--logo-image);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 350% auto;
      }
      .voiceBars {
        height: 34px;
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .voiceBars span {
        width: 4px;
        border-radius: 999px;
        background: #12877b;
        animation: voicePulse 1.8s ease-in-out infinite;
        animation-delay: var(--delay);
      }
      .speechBubble {
        position: relative;
        z-index: 3;
        width: 100%;
        margin-top: -8px;
        padding: 11px 12px;
        border-radius: 16px;
        background: rgba(255, 255, 255, .96);
        border: 1px solid rgba(31, 89, 83, .12);
        box-shadow: 0 16px 34px rgba(21, 83, 78, .12);
        color: #1d4f50;
        font-size: 16px;
        line-height: 1.45;
        font-weight: 800;
        text-align: center;
      }
      .deviceCaption {
        margin: 9px 0 0;
        color: #51696a;
        font-size: 14px;
        line-height: 1.4;
        font-weight: 800;
        text-align: center;
      }
      .flowConnector {
        display: grid;
        justify-items: center;
        gap: 5px;
        color: #12877b;
      }
      .flowConnector span {
        font-size: 34px;
        line-height: 1;
      }
      .flowConnector small {
        color: #4e6867;
        font-size: 13px;
        line-height: 1.2;
        font-weight: 800;
        text-align: center;
      }
      .summaryPreview {
        width: 100%;
        padding: 18px;
        border-radius: 18px;
        background: rgba(255, 255, 255, .96);
        border: 1px solid rgba(31, 89, 83, .12);
        box-shadow: 0 16px 34px rgba(21, 83, 78, .12);
      }
      .summaryLabel {
        display: block;
        margin-bottom: 7px;
        color: #12877b;
        font-size: 13px;
        font-weight: 800;
        letter-spacing: .06em;
        text-transform: uppercase;
      }
      .summaryPreview strong {
        color: #17383b;
        font-size: 20px;
      }
      .summaryPreview p {
        margin: 7px 0 0;
        color: #637a7b;
        font-size: 13px;
        line-height: 1.45;
        font-weight: 600;
      }
      .consoleRows {
        display: grid;
        gap: 8px;
        margin: 14px 0 0;
        padding: 0;
        list-style: none;
      }
      .consoleRows li {
        display: flex;
        align-items: flex-start;
        gap: 7px;
        padding: 8px 9px;
        border-radius: 9px;
        color: #335456;
        background: #eff8f4;
        font-size: 15px;
        line-height: 1.4;
        font-weight: 700;
      }
      .consoleRows svg {
        flex: 0 0 auto;
        margin-top: 1px;
        color: #12877b;
      }
      .serviceFlow {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin-top: 18px;
        padding: 10px 12px;
        border-radius: 13px;
        color: #215a58;
        background: rgba(255, 255, 255, .75);
        border: 1px solid rgba(31, 89, 83, .1);
        font-size: 15px;
        font-weight: 800;
      }
      .serviceFlow strong { color: #12877b; }
      .serviceFlow small { display: none; }
      .visualFooter {
        justify-content: space-between;
        gap: 8px;
      }
      .visualFooter span {
        padding: 7px 9px;
        border-radius: 999px;
        background: #eef8f4;
      }
      .section {
        padding: 86px 0;
        scroll-margin-top: 82px;
      }
      .sectionIntro {
        max-width: 880px;
        margin-bottom: 40px;
      }
      .sectionIntro.centered {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }
      .eyebrow {
        margin: 0 0 11px;
        color: #12877b;
        font-size: 14px;
        line-height: 1.4;
        font-weight: 800;
        letter-spacing: .08em;
        text-transform: uppercase;
      }
      .sectionIntro h2 {
        margin: 0;
        color: #16383a;
        font-size: clamp(32px, 4vw, 52px);
        line-height: 1.12;
        letter-spacing: -0.012em;
      }
      .intro {
        margin: 16px 0 0;
        color: #50696a;
        font-size: 21px;
        line-height: 1.72;
        font-weight: 600;
      }
      .sectionIntro.light h2, .sectionIntro.light .intro { color: #fff; }
      .sectionIntro.light .intro { color: rgba(255, 255, 255, .76); }
      .sectionIntro.light .eyebrow { color: #8ce3d2; }
      .needPanel {
        display: grid;
        grid-template-columns: .85fr 1.15fr;
        gap: 48px;
        padding: clamp(30px, 5vw, 58px);
        border-radius: 28px;
        background: #173f40;
        color: #fff;
      }
      .needStatement {
        margin: 0;
        font-size: clamp(28px, 3.6vw, 44px);
        line-height: 1.2;
        font-weight: 800;
      }
      .needStatement span { color: #9ee7d8; }
      .needList {
        display: grid;
        gap: 12px;
        margin: 0;
        padding: 0;
        list-style: none;
      }
      .needList li {
        display: flex;
        gap: 12px;
        align-items: flex-start;
        padding: 17px 18px;
        border-radius: 15px;
        background: rgba(255, 255, 255, .08);
        border: 1px solid rgba(255, 255, 255, .1);
        color: rgba(255, 255, 255, .88);
        font-size: 18px;
        line-height: 1.55;
        font-weight: 650;
      }
      .needList svg {
        flex: 0 0 auto;
        margin-top: 3px;
        color: #8ce3d2;
      }
      .productModelBar {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin: -10px 0 26px;
        padding: 14px 18px;
        border-radius: 16px;
        color: #31595a;
        background: rgba(229, 245, 239, .72);
        border: 1px solid rgba(18, 135, 123, .12);
        font-size: 14px;
        line-height: 1.4;
        font-weight: 800;
        text-align: center;
      }
      .productModelBar strong {
        color: #12877b;
        font-size: 18px;
      }
      .stepsGrid, .audienceGrid, .trustGrid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
      }
      .stepsGrid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
      .stepCard, .audienceCard, .trustCard {
        padding: 26px;
        border-radius: 18px;
        background: rgba(255, 255, 255, .88);
        border: 1px solid rgba(31, 89, 83, .12);
        box-shadow: 0 12px 30px rgba(21, 83, 78, .07);
      }
      .stepNumber {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
        color: #12877b;
        font-size: 13px;
        font-weight: 800;
      }
      .iconBox {
        width: 44px;
        height: 44px;
        display: grid;
        place-items: center;
        border-radius: 13px;
        color: #12877b;
        background: #e5f5ef;
      }
      .stepCard h3, .audienceCard h3, .trustCard h3 {
        margin: 0;
        color: #17383b;
        font-size: 23px;
        line-height: 1.3;
      }
      .stepCard p {
        margin: 11px 0 0;
        color: #5e7576;
        font-size: 17px;
        line-height: 1.65;
        font-weight: 600;
      }
      .journeyPanel {
        display: grid;
        grid-template-columns: 1.08fr .92fr;
        gap: 34px;
        padding: clamp(28px, 5vw, 52px);
        border-radius: 28px;
        background: #fff5e9;
        border: 1px solid rgba(184, 111, 43, .14);
      }
      .journeyQuote {
        margin: 0;
        color: #563d2d;
        font-size: clamp(25px, 3.3vw, 39px);
        line-height: 1.36;
        font-weight: 750;
      }
      .journeyNote {
        margin: 18px 0 0;
        color: #745e50;
        font-size: 16px;
        line-height: 1.65;
        font-weight: 600;
      }
      .journeyFlow {
        display: grid;
        gap: 12px;
        align-content: center;
      }
      .journeyStep {
        display: grid;
        grid-template-columns: 40px 1fr;
        gap: 12px;
        align-items: start;
        padding: 15px;
        border-radius: 14px;
        background: rgba(255, 255, 255, .82);
        border: 1px solid rgba(111, 76, 50, .12);
      }
      .journeyStep strong {
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border-radius: 50%;
        color: #fff;
        background: #b36f3c;
      }
      .journeyStep p {
        margin: 0;
        color: #624d40;
        font-size: 16px;
        line-height: 1.55;
        font-weight: 650;
      }
      .audienceCard {
        position: relative;
        overflow: hidden;
      }
      .audienceCard::after {
        content: "";
        position: absolute;
        right: -28px;
        bottom: -28px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: rgba(18, 135, 123, .06);
      }
      .audienceCard .iconBox { margin-bottom: 18px; }
      .checkList {
        display: grid;
        gap: 11px;
        margin: 18px 0 0;
        padding: 0;
        list-style: none;
      }
      .checkList li {
        display: flex;
        align-items: flex-start;
        gap: 9px;
        color: #557071;
        font-size: 16px;
        line-height: 1.5;
        font-weight: 650;
      }
      .checkList svg {
        flex: 0 0 auto;
        margin-top: 2px;
        color: #12877b;
      }
      .designPoints {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
      }
      .designPoint {
        padding: 26px;
        border-radius: 18px;
        background: rgba(255, 255, 255, .88);
        border: 1px solid rgba(31, 89, 83, .12);
        box-shadow: 0 12px 30px rgba(21, 83, 78, .07);
      }
      .designPoint .iconBox { margin-bottom: 16px; }
      .designPoint h3 {
        margin: 0;
        color: #17383b;
        font-size: 21px;
        line-height: 1.3;
      }
      .designPoint p {
        margin: 10px 0 0;
        color: #5e7576;
        font-size: 16px;
        line-height: 1.65;
        font-weight: 600;
      }
      .characterGrid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 16px;
        margin-top: 16px;
      }
      .characterCard {
        padding: 16px;
        border-radius: 18px;
        background: rgba(255, 255, 255, .88);
        border: 1px solid rgba(31, 89, 83, .12);
        box-shadow: 0 12px 30px rgba(21, 83, 78, .07);
        text-align: center;
      }
      .characterArt {
        aspect-ratio: 1 / 1;
        display: grid;
        place-items: center;
        margin-bottom: 14px;
        overflow: hidden;
        border-radius: 14px;
        background: #1b1c1e;
        border: 1px solid rgba(31, 89, 83, .12);
      }
      .characterArt img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
      }
      .characterCard h4 {
        margin: 0;
        color: #17383b;
        font-size: 18px;
        line-height: 1.3;
      }
      .characterCard p {
        margin: 7px 0 0;
        color: #5b7273;
        font-size: 15px;
        line-height: 1.55;
        font-weight: 600;
      }
      .designNote {
        max-width: 780px;
        margin: 26px auto 0;
        color: #687f80;
        font-size: 15px;
        line-height: 1.6;
        font-weight: 600;
        text-align: center;
      }
      .marketComparison {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
      }
      .marketRoleCard {
        min-width: 0;
        padding: 26px;
        border-radius: 20px;
        background: rgba(255, 255, 255, .86);
        border: 1px solid rgba(31, 89, 83, .12);
        box-shadow: 0 12px 30px rgba(21, 83, 78, .06);
      }
      .marketRoleCard.dodo {
        background: #eaf7f2;
        border-color: rgba(18, 135, 123, .2);
      }
      .marketRoleHeader {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .marketRoleIcon {
        width: 42px;
        height: 42px;
        display: grid;
        flex: 0 0 auto;
        place-items: center;
        border-radius: 13px;
        color: #12877b;
        background: #e5f5ef;
      }
      .marketRoleCard.dodo .marketRoleIcon {
        color: #fff;
        background: #12877b;
      }
      .marketRoleCard h3 {
        margin: 0;
        color: #17383b;
        font-size: 21px;
        line-height: 1.3;
      }
      .marketRoleLabel {
        display: block;
        margin-top: 20px;
        color: #12877b;
        font-size: 12px;
        line-height: 1.4;
        font-weight: 800;
        letter-spacing: .05em;
        text-transform: uppercase;
      }
      .marketRoleCard p {
        margin: 8px 0 0;
        color: #5b7475;
        font-size: 16px;
        line-height: 1.65;
        font-weight: 600;
      }
      .pilotSection {
        padding: 88px 0;
        background: #173f40;
      }
      .pilotGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
      }
      .pilotCard {
        padding: 22px;
        border-radius: 16px;
        background: rgba(255, 255, 255, .08);
        border: 1px solid rgba(255, 255, 255, .11);
      }
      .pilotCard h3 {
        margin: 0;
        color: #fff;
        font-size: 20px;
      }
      .pilotCard p {
        margin: 10px 0 0;
        color: rgba(255, 255, 255, .72);
        font-size: 16px;
        line-height: 1.6;
        font-weight: 600;
      }
      .pilotList {
        display: grid;
        gap: 9px;
        margin: 14px 0 0;
        padding: 0;
        list-style: none;
      }
      .pilotList li {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        color: rgba(255, 255, 255, .8);
        font-size: 16px;
        line-height: 1.55;
        font-weight: 600;
      }
      .pilotList svg {
        flex: 0 0 auto;
        margin-top: 3px;
        color: #8ce3d2;
      }
      .pilotActions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        margin-top: 28px;
        padding-top: 24px;
        border-top: 1px solid rgba(255, 255, 255, .12);
      }
      .pilotMeasure {
        max-width: 700px;
        margin: 0;
        color: rgba(255, 255, 255, .72);
        font-size: 15px;
        line-height: 1.6;
        font-weight: 600;
      }
      .pilotSection .btn.primary {
        color: #153d3e;
        background: #9ee7d8;
        border-color: #9ee7d8;
      }
      .progressGrid {
        display: grid;
        grid-template-columns: .8fr 1.2fr;
        gap: 40px;
        align-items: start;
      }
      .stageCard {
        position: sticky;
        top: 108px;
        padding: 28px;
        border-radius: 22px;
        background: #e8f6f1;
        border: 1px solid rgba(18, 135, 123, .17);
      }
      .stageCard strong {
        display: block;
        color: #153d3e;
        font-size: 28px;
        line-height: 1.25;
      }
      .stageCard p {
        margin: 14px 0 0;
        color: #557071;
        font-size: 16px;
        line-height: 1.65;
        font-weight: 600;
      }
      .stageCard .btn { margin-top: 18px; }
      .progressList {
        display: grid;
        gap: 12px;
      }
      .progressGroups {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
      }
      .progressGroup {
        padding: 22px;
        border-radius: 18px;
        border: 1px solid rgba(31, 89, 83, .11);
      }
      .progressGroup.current {
        background: #edf8f4;
      }
      .progressGroup.refining {
        background: #fff7ed;
        border-color: rgba(184, 111, 43, .15);
      }
      .progressGroup h3 {
        margin: 0;
        color: #17383b;
        font-size: 21px;
      }
      .progressGroup ul {
        display: grid;
        gap: 10px;
        margin: 17px 0 0;
        padding: 0;
        list-style: none;
      }
      .progressGroup li {
        display: flex;
        align-items: flex-start;
        gap: 9px;
        color: #4c6869;
        font-size: 15px;
        line-height: 1.55;
        font-weight: 650;
      }
      .progressGroup li svg {
        flex: 0 0 auto;
        margin-top: 2px;
        color: #12877b;
      }
      .progressGroup.refining li svg {
        color: #b36f3c;
      }
      .proofFigure {
        display: grid;
        grid-template-columns: minmax(250px, .58fr) minmax(0, 1.42fr);
        gap: 30px;
        align-items: start;
        margin: 32px 0 0;
        padding: 28px;
        border-radius: 24px;
        background: #fff;
        border: 1px solid rgba(31, 89, 83, .12);
        box-shadow: 0 18px 44px rgba(21, 83, 78, .08);
      }
      .proofCopy {
        position: sticky;
        top: 108px;
      }
      .proofLabel {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 11px;
        border-radius: 999px;
        color: #0f766d;
        background: #e5f5ef;
        font-size: 13px;
        line-height: 1.3;
        font-weight: 800;
      }
      .proofLabel::before {
        content: "";
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #20a68f;
      }
      .proofCopy > p {
        margin: 18px 0 0;
        color: #587273;
        font-size: 17px;
        line-height: 1.72;
        font-weight: 600;
      }
      .proofNotes {
        display: grid;
        gap: 12px;
        margin-top: 24px;
      }
      .proofNote {
        padding: 16px;
        border-radius: 16px;
        border: 1px solid rgba(31, 89, 83, .11);
      }
      .proofNote.demo {
        background: #edf8f4;
      }
      .proofNote.evidence {
        background: #fff8ef;
        border-color: rgba(184, 111, 43, .15);
      }
      .proofNote strong {
        display: block;
        color: #17383b;
        font-size: 16px;
        line-height: 1.45;
      }
      .proofNote p {
        margin: 8px 0 0;
        color: #587273;
        font-size: 14px;
        line-height: 1.6;
        font-weight: 600;
      }
      .proofNote small {
        display: block;
        margin-top: 9px;
        color: #7a684f;
        font-size: 12px;
        line-height: 1.55;
        font-weight: 700;
      }
      .proofMedia {
        display: grid;
        place-items: center;
        min-width: 0;
        padding: 14px;
        overflow: hidden;
        border-radius: 18px;
        background: #edf1f5;
        border: 1px solid rgba(31, 89, 83, .1);
      }
      .proofMedia img {
        display: block;
        width: 100%;
        height: auto;
        max-width: 760px;
        object-fit: contain;
        border-radius: 12px;
        box-shadow: 0 12px 28px rgba(24, 47, 61, .12);
      }
      .progressItem {
        display: grid;
        grid-template-columns: 34px 1fr;
        gap: 14px;
        padding: 20px;
        border-radius: 16px;
        background: rgba(255, 255, 255, .86);
        border: 1px solid rgba(31, 89, 83, .11);
      }
      .progressItem > span {
        width: 34px;
        height: 34px;
        display: grid;
        place-items: center;
        border-radius: 50%;
        color: #12877b;
        background: #e5f5ef;
        font-weight: 800;
      }
      .progressItem h3 {
        margin: 0;
        color: #17383b;
        font-size: 19px;
      }
      .progressItem p {
        margin: 7px 0 0;
        color: #5d7677;
        font-size: 15px;
        line-height: 1.6;
        font-weight: 600;
      }
      .trustPanel {
        padding: clamp(28px, 5vw, 52px);
        border-radius: 28px;
        background: #fff;
        border: 1px solid rgba(31, 89, 83, .12);
        box-shadow: 0 18px 44px rgba(21, 83, 78, .07);
      }
      .trustGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .trustCard {
        display: grid;
        grid-template-columns: 44px 1fr;
        gap: 14px;
        box-shadow: none;
        background: #f7fbf8;
      }
      .trustCard p {
        margin: 0;
        color: #496667;
        font-size: 16px;
        line-height: 1.6;
        font-weight: 650;
      }
      .teamPanel {
        display: grid;
        grid-template-columns: .85fr 1.15fr;
        gap: 40px;
        padding: clamp(28px, 5vw, 50px);
        border-radius: 24px;
        background: #eaf7f2;
        border: 1px solid rgba(18, 135, 123, .14);
      }
      .teamPanel h2 {
        margin: 0;
        color: #16383a;
        font-size: clamp(30px, 4vw, 45px);
        line-height: 1.15;
      }
      .teamPanel p {
        margin: 0;
        color: #526f70;
        font-size: 18px;
        line-height: 1.72;
        font-weight: 600;
      }
      .teamPanel p + p { margin-top: 14px; }
      .footer {
        padding: 42px 0 70px;
      }
      .contactPanel {
        padding: clamp(34px, 6vw, 64px);
        border-radius: 28px;
        color: #fff;
        background:
          radial-gradient(circle at 86% 16%, rgba(93, 203, 181, .22), transparent 28%),
          #17383b;
        text-align: center;
      }
      .contactPanel h2 {
        max-width: 900px;
        margin: 0 auto;
        font-size: clamp(32px, 5vw, 54px);
        line-height: 1.12;
      }
      .contactPanel > p {
        max-width: 760px;
        margin: 16px auto 0;
        color: rgba(255, 255, 255, .76);
        font-size: 19px;
        line-height: 1.65;
        font-weight: 600;
      }
      .contactPanel .ctaRow, .contactPanel .contactLinks { justify-content: center; }
      .contactPanel .contactLinks { margin-top: 14px; }
      .contactPanel .btn.secondary {
        color: #174d4c;
        background: #fff;
      }
      .tagline {
        display: block;
        margin-top: 24px;
        color: rgba(255, 255, 255, .62);
        font-weight: 800;
      }
      @media (max-width: 1040px) {
        .nav { display: none; }
        .heroGrid { grid-template-columns: 1fr 1fr; gap: 32px; }
        .stepsGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .audienceGrid { grid-template-columns: 1fr; }
        .audienceCard { display: grid; grid-template-columns: 56px 1fr 1.2fr; gap: 16px; align-items: start; }
        .audienceCard .iconBox { margin: 0; }
        .audienceCard .checkList { margin: 0; }
        .characterGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }
      @media (max-width: 780px) {
        .hero { padding: 46px 0 58px; }
        .heroGrid, .needPanel, .journeyPanel, .progressGrid, .teamPanel {
          grid-template-columns: 1fr;
        }
        .prototypeVisual { max-width: 620px; }
        .stageCard { position: static; }
        .marketComparison { grid-template-columns: 1fr; }
        .designPoints { grid-template-columns: 1fr; }
        .pilotActions {
          align-items: flex-start;
          flex-direction: column;
        }
        .trustGrid { grid-template-columns: 1fr; }
        .progressGroups { grid-template-columns: 1fr; }
        .proofFigure { grid-template-columns: 1fr; }
        .proofCopy { position: static; }
      }
      @media (max-width: 620px) {
        .wrap { width: min(100% - 22px, 1080px); }
        .topbarInner { min-height: 60px; gap: 7px; }
        .brandMark { width: 36px; height: 22px; }
        .brand { font-size: 16px; }
        .langs { gap: 2px; margin-left: auto; flex-wrap: nowrap; }
        .langBtn { padding: 8px; font-size: 14px; }
        .topbar .btn { display: none; }
        .hero { padding: 30px 0 42px; }
        .statusBadge { margin-bottom: 14px; font-size: 12px; }
        h1 { max-width: 11ch; font-size: clamp(36px, 11.4vw, 46px); }
        .heroLead { margin-top: 17px; font-size: 17px; line-height: 1.58; }
        .ctaRow, .contactLinks { width: 100%; align-items: stretch; }
        .ctaRow .btn, .contactLinks .btn { flex: 1 1 100%; }
        .heroProofs { margin-top: 20px; }
        .heroProof { font-size: 12px; }
        .prototypeVisual { padding: 12px; border-radius: 22px; }
        .visualStage { margin: 12px 0; padding: 16px; }
        .productFlow { grid-template-columns: 1fr; gap: 14px; }
        .devicePanel, .consolePanel { width: min(100%, 290px); margin: 0 auto; }
        .panelLabel { align-self: center; }
        .voiceDevice { width: 148px; height: 164px; }
        .deviceLogo { width: 104px; height: 62px; }
        .speechBubble { max-width: 260px; padding: 10px 12px; font-size: 13px; }
        .flowConnector span { transform: rotate(90deg); font-size: 28px; }
        .summaryPreview { min-height: 0; padding: 15px; }
        .summaryPreview strong { font-size: 14px; }
        .serviceFlow { flex-wrap: wrap; }
        .visualFooter { flex-wrap: wrap; justify-content: flex-start; font-size: 11px; }
        .section { padding: 52px 0; scroll-margin-top: 68px; }
        .sectionIntro { margin-bottom: 24px; }
        .sectionIntro h2 { font-size: clamp(29px, 9vw, 39px); }
        .intro { font-size: 17px; line-height: 1.62; }
        .needPanel, .journeyPanel, .trustPanel, .teamPanel { padding: 24px 16px; border-radius: 20px; gap: 24px; }
        .needList li { font-size: 16px; }
        .productModelBar {
          align-items: stretch;
          flex-direction: column;
          gap: 5px;
          margin-top: 0;
        }
        .productModelBar strong { line-height: 1; }
        .stepCard, .audienceCard { padding: 21px 18px; }
        .marketRoleCard { padding: 21px 18px; }
        .stepsGrid { grid-template-columns: 1fr; }
        .audienceCard { display: block; }
        .audienceCard .iconBox { margin-bottom: 16px; }
        .audienceCard .checkList { margin-top: 16px; }
        .pilotSection { padding: 58px 0; }
        .pilotGrid { grid-template-columns: 1fr; }
        .progressGrid { gap: 20px; }
        .proofFigure { gap: 20px; padding: 18px 14px; border-radius: 20px; }
        .proofMedia { padding: 8px; border-radius: 14px; }
        .proofMedia img { border-radius: 9px; }
        .trustCard { grid-template-columns: 38px 1fr; padding: 16px; }
        .iconBox { width: 38px; height: 38px; }
        .footer { padding-bottom: 44px; }
        .contactPanel { padding: 34px 18px; border-radius: 20px; }
      }
      .reveal-ready [data-reveal] {
        opacity: 0;
        transform: translateY(24px);
        transition: opacity .7s cubic-bezier(.2, .8, .2, 1), transform .7s cubic-bezier(.2, .8, .2, 1);
      }
      .reveal-ready [data-reveal].inview {
        opacity: 1;
        transform: none;
      }
      @keyframes riseIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes signalBreath {
        0%, 100% { opacity: .68; transform: scale(.97); }
        50% { opacity: 1; transform: scale(1.04); }
      }
      @keyframes voicePulse {
        0%, 100% { transform: scaleY(.55); opacity: .62; }
        50% { transform: scaleY(1); opacity: 1; }
      }
      @media (prefers-reduced-motion: reduce) {
        * {
          scroll-behavior: auto !important;
          transition-duration: .01ms !important;
          animation-duration: .01ms !important;
          animation-iteration-count: 1 !important;
        }
        .reveal-ready [data-reveal] {
          opacity: 1 !important;
          transform: none !important;
        }
      }
    `),

    h("header", { className: "topbar" },
      h("div", { className: "wrap topbarInner" },
        h("button", {
          type: "button",
          className: "brand",
          onClick: () => jump("hero"),
          "aria-label": "DoDo VoiceBox",
        },
          h("span", {
            className: "brandMark",
            "aria-hidden": "true",
            style: { "--logo-image": `url("${LOGO}")` },
          }),
          h("span", null, "DoDo VoiceBox"),
        ),
        h("nav", { className: "nav", "aria-label": "Main navigation" },
          NAV.map((item) => h("button", {
            key: item.id,
            type: "button",
            className: `navBtn ${active === item.id ? "active" : ""}`,
            onClick: () => jump(item.id),
          }, item.label[lang])),
        ),
        h("div", { className: "langs" },
          LANGS.map((item) => h("button", {
            key: item.key,
            type: "button",
            className: `langBtn ${lang === item.key ? "active" : ""}`,
            onClick: () => setLang(item.key),
            "aria-label": item.aria,
          }, item.label)),
          h(CTA, { href: "#pilot", variant: "primary", icon: "arrow" },
            tr("Explore a Pilot Collaboration", "探索試點合作", "探索试点合作")[lang],
          ),
        ),
      ),
    ),

    h("main", null,
      h("section", { id: "hero", className: "hero wrap" },
        h("div", { className: "heroGrid" },
          h("div", { className: "heroCopy" },
            h("div", { className: "statusBadge" },
              tr(
                "Working prototype · Exploring Hong Kong pilot partners",
                "研發中原型 · 探索香港試點合作",
                "研发中原型 · 探索香港试点合作",
              )[lang],
            ),
            h("h1", null,
              tr(
                "A Cantonese companion that speaks first — keeping older adults who live alone company through the day.",
                "一個會主動開口嘅廣東話陪伴公仔，陪獨居長者過每一日。",
                "一个会主动开口的粤语陪伴公仔，陪独居长者过好每一天。",
              )[lang],
            ),
            h("p", { className: "heroLead" },
              tr(
                "Many older adults living alone go all day with no one to talk to. DoDo says hello first, keeps them company in Cantonese, reminds them of small daily things, and quietly lets family know how they're doing. No apps, no touchscreens: if they can speak, they can use it.",
                "好多獨居長者，成日都冇人傾偈。DoDo 會主動問候，用廣東話陪佢哋傾下計、提下日常嘅小事；亦會靜靜咁俾屋企人知道佢哋近況。無需 App、無需觸控屏幕，識講嘢就用得到。",
                "很多独居长者，整天都没人聊天。DoDo 会主动问候，用粤语陪他们聊聊天、提一提日常小事；也会静静地让家人知道近况。无需 App、无需触控屏幕，会说话就能用。",
              )[lang],
            ),
            h("div", { className: "ctaRow" },
              h(CTA, { href: "#pilot", variant: "primary", icon: "arrow" },
                tr("Explore a Pilot Collaboration", "探索試點合作", "探索试点合作")[lang],
              ),
              h(CTA, { href: PRESENTATION_URL, variant: "secondary", icon: "play", external: true },
                tr("View Product Demo", "觀看產品示範", "观看产品演示")[lang],
              ),
            ),
            h("div", { className: "heroProofs" },
              [
                ["wave", tr("Just speak to use it", "開口就用到", "开口就能用")],
                ["heart", tr("It greets first", "會主動問候", "会主动问候")],
                ["users", tr("Family stays in the loop", "家人知近況", "家人知近况")],
              ].map(([icon, label]) => h("span", { className: "heroProof", key: label.EN },
                h(Icon, { name: icon, size: 15 }),
                label[lang],
              )),
            ),
          ),
          h(ProductVisual, { lang }),
        ),
      ),

      h("section", { id: "need", "data-reveal": true, className: "section wrap" },
        h("div", { className: "needPanel" },
          h("div", null,
            h("p", { className: "eyebrow", style: { color: "#8ce3d2" } },
              tr("The real need", "真正嘅需要", "真正的需要")[lang],
            ),
            h("p", { className: "needStatement" },
              tr(
                "For many older adults living alone, the hardest part is getting through a long day with no one around.",
                "對好多獨居長者嚟講，最難捱嘅，係一個人點樣捱過漫長嘅一日。",
                "对很多独居长者来说，最难熬的，是一个人怎样度过漫长的一天。",
              )[lang],
            ),
          ),
          h("ul", { className: "needList" },
            NEEDS.map((item) => h("li", { key: item.EN },
              h(Icon, { name: "check", size: 19 }),
              h("span", null, item[lang]),
            )),
          ),
        ),
      ),

      h("section", { id: "design", "data-reveal": true, className: "section wrap" },
        h(SectionIntro, {
          lang,
          centered: true,
          eyebrow: DESIGN_PHILOSOPHY.eyebrow,
          title: DESIGN_PHILOSOPHY.title,
          body: DESIGN_PHILOSOPHY.body,
        }),
        h("div", { className: "designPoints" },
          DESIGN_POINTS.map((item) => h("article", { className: "designPoint", key: item.title.EN },
            h("span", { className: "iconBox" }, h(Icon, { name: item.icon })),
            h("h3", null, item.title[lang]),
            h("p", null, item.body[lang]),
          )),
        ),
        h("div", { className: "characterGrid" },
          CHARACTERS.map((item) => h("article", { className: "characterCard", key: item.img },
            h("div", { className: "characterArt" },
              h("img", {
                src: item.img,
                alt: item.alt[lang],
                loading: "lazy",
                decoding: "async",
              }),
            ),
            h("h4", null, item.name[lang]),
            h("p", null, item.desc[lang]),
          )),
        ),
        h("p", { className: "designNote" }, DESIGN_PHILOSOPHY.note[lang]),
      ),

      h("section", { id: "how", "data-section": true, "data-reveal": true, className: "section wrap" },
        h(SectionIntro, {
          lang,
          centered: true,
          eyebrow: tr("How DoDo works", "DoDo 點樣運作", "DoDo 怎样运作"),
          title: tr(
            "It reaches out to you first",
            "佢會主動嚟陪你傾",
            "它会主动来陪你聊",
          ),
          body: tr(
            "Made for older adults who don't use apps or touchscreens. They only need to speak — the greeting and the company are up to DoDo.",
            "專為一啲唔用 app、唔用觸控屏幕嘅長者而設。佢哋只要識講嘢就得，主動問候同陪伴，就交畀 DoDo。",
            "专为一些不用 app、不用触控屏幕的长者而设。他们只要会说话就行，主动问候和陪伴，就交给 DoDo。",
          ),
        }),
        h("div", { className: "productModelBar" },
          [
            tr("Physical VoiceBox", "實體 VoiceBox", "实体 VoiceBox"),
            tr("Daily conversation", "日常傾談", "日常聊天"),
            tr("Simple updates", "簡單近況", "简单近况"),
            tr("Community support", "社區支援", "社区支持"),
          ].map((item, index) => h(Fragment, { key: item.EN },
            index > 0 ? h("strong", null, "+") : null,
            h("span", null, item[lang]),
          )),
        ),
        h("div", { className: "stepsGrid" },
          HOW_STEPS.map((item, index) => h("article", { className: "stepCard", key: item.title.EN },
            h("div", { className: "stepNumber" },
              h("span", null, `0${index + 1}`),
              h("span", { className: "iconBox" }, h(Icon, { name: item.icon })),
            ),
            h("h3", null, item.title[lang]),
            h("p", null, item.body[lang]),
          )),
        ),
      ),

      h("section", { id: "journey", "data-reveal": true, className: "section wrap" },
        h(SectionIntro, {
          lang,
          eyebrow: tr("An illustrative journey", "一個示意使用情境", "一个示意使用情境"),
          title: tr(
            "A small daily need, shared more clearly",
            "一個日常小需要，可以講得更清楚",
            "一个日常小需要，可以说得更清楚",
          ),
        }),
        h("div", { className: "journeyPanel" },
          h("div", null,
            h("p", { className: "journeyQuote" },
              tr(
                "Mrs. Chan lives alone and dislikes smartphone apps. She talks to DoDo in Cantonese, gets a reminder, and mentions collecting her medicine is hard this week.",
                "陳婆婆獨居，唔鍾意用手機 app。佢用廣東話同 DoDo 傾偈、收到提醒，提到今個星期攞藥有困難。",
                "陈婆婆独居，不喜欢用手机 app。她用粤语和 DoDo 聊天、收到提醒，提到这个星期取药有困难。",
              )[lang],
            ),
            h("p", { className: "journeyNote" },
              tr(
                "An illustrative scenario — not evidence of a care outcome or validated monitoring.",
                "只係示意情境，唔代表照護成效或已驗證嘅監察能力。",
                "只是示意情境，不代表照护成效或已验证的监测能力。",
              )[lang],
            ),
          ),
          h("div", { className: "journeyFlow" },
            [
              tr("Mrs. Chan talks to DoDo naturally in Cantonese.", "陳婆婆自然咁用廣東話同 DoDo 傾偈。", "陈婆婆自然地用粤语和 DoDo 聊天。"),
              tr("DoDo gives a simple appointment or medicine reminder.", "DoDo 提供簡單覆診或食藥提醒。", "DoDo 提供简单复诊或用药提醒。"),
              tr("She says that buying something or collecting medicine is difficult.", "佢提到買日用品或攞藥有困難。", "她提到购买日用品或取药有困难。"),
              tr("With consent, a trusted family member or service team can see a short update and decide whether someone should help.", "在同意安排下，可信任嘅家人或服務團隊可以睇到簡短近況，再決定係咪需要有人幫手。", "在同意安排下，可信任的家人或服务团队可以看到简短近况，再决定是否需要有人帮忙。"),
            ].map((item, index) => h("div", { className: "journeyStep", key: item.EN },
              h("strong", null, index + 1),
              h("p", null, item[lang]),
            )),
          ),
        ),
      ),

      h("section", { id: "benefits", "data-reveal": true, className: "section wrap" },
        h(SectionIntro, {
          lang,
          centered: true,
          eyebrow: tr("What it means for each person", "對唔同人嘅幫助", "对不同人的帮助"),
          title: tr(
            "Practical value for older adults and the people around them",
            "為長者同身邊人帶來實際幫助",
            "为长者和身边的人带来实际帮助",
          ),
        }),
        h("div", { className: "audienceGrid" },
          AUDIENCES.map((item) => h("article", { className: "audienceCard", key: item.title.EN },
            h("span", { className: "iconBox" }, h(Icon, { name: item.icon })),
            h("h3", null, item.title[lang]),
            h("ul", { className: "checkList" },
              item.points.map((point) => h("li", { key: point.EN },
                h(Icon, { name: "check", size: 17 }),
                h("span", null, point[lang]),
              )),
            ),
          )),
        ),
      ),

      h("section", { id: "difference", "data-section": true, "data-reveal": true, className: "section wrap" },
        h(SectionIntro, {
          lang,
          eyebrow: tr("Why DoDo is different", "DoDo 有咩唔同", "DoDo 有什么不同"),
          title: tr(
            "Different roles in the elderly-care technology market",
            "長者科技市場中的不同角色",
            "长者科技市场中的不同角色",
          ),
          body: tr(
            "Today's elderly-care tools each do a different job: medical alarms for emergencies, some AI toys mainly for chat. DoDo sits in between — proactive Cantonese company, gentle reminders, updates families can trust, and a link to community support. Different roles that work together, not replace one another.",
            "而家嘅長者科技各有分工：平安鐘負責突發求助，有啲 AI 產品主打聊天。DoDo 就企喺中間，做主動嘅廣東話陪伴、貼心提醒、家人信得過嘅近況，仲會連結社區支援。大家係唔同角色，互相補足，唔係要取代對方。",
            "现在的长者科技各有分工：平安钟负责突发求助，有些 AI 产品主打聊天。DoDo 就站在中间，做主动的粤语陪伴、贴心提醒、家人信得过的近况，还会连接社区支援。大家是不同角色，互相补足，不是要取代对方。",
          ),
        }),
        h("div", { className: "marketComparison" },
          MARKET_ROLES.map((item) => h("article", {
            className: `marketRoleCard ${item.title.EN === "DoDo" ? "dodo" : ""}`,
            key: item.title.EN,
          },
            h("div", { className: "marketRoleHeader" },
              h("span", { className: "marketRoleIcon" }, h(Icon, { name: item.icon, size: 21 })),
              h("h3", null, item.title[lang]),
            ),
            h("span", { className: "marketRoleLabel" }, item.role[lang]),
            h("p", null, item.body[lang]),
          )),
        ),
      ),

      h("section", { id: "pilot", "data-section": true, "data-reveal": true, className: "pilotSection" },
        h("div", { className: "wrap" },
          h(SectionIntro, {
            lang,
            light: true,
            eyebrow: tr("Explore a planned pilot", "探索一個有規劃嘅試點", "探索一个有规划的试点"),
            title: tr(
              "Pilot collaboration for NGOs and elderly service providers",
              "為社福機構與長者服務提供者而設嘅試點合作",
              "为社福机构与长者服务提供者而设的试点合作",
            ),
            body: tr(
              "A pilot looks at whether older adults really talk to DoDo, what daily needs they voice, and whether teams can use simple updates to support them better.",
              "試點想睇下長者會唔會真係同 DoDo 傾偈、會講出咩日常需要，以及團隊可唔可以靠簡單近況，提供更好嘅支援。",
              "试点想看看长者会不会真的和 DoDo 聊天、会讲出什么日常需要，以及团队能不能靠简单近况，提供更好的支援。",
            ),
          }),
          h("div", { className: "pilotGrid" },
            PILOT_COLUMNS.map((item) => h("article", { className: "pilotCard", key: item.title.EN },
              h("h3", null, item.title[lang]),
              h("ul", { className: "pilotList" },
                item.points.map((point) => h("li", { key: point.EN },
                  h(Icon, { name: "check", size: 16 }),
                  h("span", null, point[lang]),
                )),
              ),
            )),
          ),
          h("div", { className: "pilotActions" },
            h("p", { className: "pilotMeasure" },
              tr(
                "The point is to explore, test, and learn together — not to claim proven results. Before each test, we agree with the partner on who joins, how consent works, the trusted contacts, who can see data, and who supports what.",
                "目的係一齊探索、測試同學習，唔係話我哋已經有乜成效。每次測試之前，都會同夥伴傾掂邊個參加、點樣攞同意、邊個係可信任聯絡人、邊個可以睇資料，同埋支援嘅分工。",
                "目的是一起探索、测试和学习，不是说我们已经有什么成效。每次测试之前，都会和伙伴谈好谁参加、怎样取得同意、谁是可信任联系人、谁可以看资料，以及支援的分工。",
              )[lang],
            ),
            h(CTA, { href: PILOT_EMAIL, variant: "primary", icon: "arrow" },
              tr("Explore a Pilot Collaboration", "探索試點合作", "探索试点合作")[lang],
            ),
          ),
        ),
      ),

      h("section", { id: "progress", "data-section": true, className: "section wrap" },
        h(SectionIntro, {
          lang,
          eyebrow: tr("Progress and evidence", "進度同證據", "进度和证据"),
          title: tr(
            "Current stage: working prototype",
            "目前階段：研發中原型",
            "目前阶段：研发中原型",
          ),
          body: tr(
            "We're still at an early stage. What we have now shows the experience we're aiming for, and helps us see what to improve before a proper pilot.",
            "我哋仲喺好早期嘅階段。而家做嘅嘢，係想展示我哋預期嘅體驗，亦睇清楚喺正式試點之前，仲有邊度要改善。",
            "我们还在很早期的阶段。现在做的，是想展示我们预期的体验，也看清楚在正式试点之前，还有哪里要改善。",
          ),
        }),
        h("div", { className: "progressGrid" },
          h("aside", { className: "stageCard" },
            h("strong", null,
              tr("Working prototype, not a deployed service", "研發中原型，並非已投入服務", "研发中原型，并非已投入服务")[lang],
            ),
            h("p", null,
              tr(
                "The current build mainly shows the product direction — good for controlled demos and finding partners, while the technical, privacy, and service details are still being worked out.",
                "而家嘅版本主要展示產品方向，適合做受控示範同搵合作夥伴；技術、私隱同服務細節都仲改緊。",
                "现在的版本主要展示产品方向，适合做受控演示和找合作伙伴；技术、隐私和服务细节都还在改。",
              )[lang],
            ),
            h(CTA, { href: PRESENTATION_URL, variant: "text", icon: "play", external: true },
              tr("Full Project Presentation", "完整項目簡報", "完整项目简报")[lang],
            ),
          ),
          h("div", { className: "progressGroups" },
            [
              {
                className: "current",
                title: tr("What exists now", "目前已有", "目前已有"),
                items: WHAT_EXISTS_NOW,
              },
              {
                className: "refining",
                title: tr("What comes next", "下一步", "下一步"),
                items: WHAT_COMES_NEXT,
              },
            ].map((group) => h("article", {
              className: `progressGroup ${group.className}`,
              key: group.title.EN,
            },
              h("h3", null, group.title[lang]),
              h("ul", null,
                group.items.map((item) => h("li", { key: item.EN },
                  h(Icon, { name: group.className === "current" ? "check" : "clock", size: 16 }),
                  h("span", null, item[lang]),
                )),
              ),
            )),
          ),
        ),
        PROOF_IMAGES.map((item) => h("figure", { className: "proofFigure", key: item.src },
          h("figcaption", { className: "proofCopy" },
            h("span", { className: "proofLabel" }, item.label[lang]),
            h("p", null, item.caption[lang]),
            h("div", { className: "proofNotes" },
              h("article", { className: "proofNote demo" },
                h("strong", null, PRODUCT_DEMO_PLACEHOLDER.title[lang]),
                h("p", null, PRODUCT_DEMO_PLACEHOLDER.body[lang]),
              ),
              h("aside", { className: "proofNote evidence" },
                h("p", null, EVIDENCE_TRANSPARENCY.body[lang]),
                h("small", null, EVIDENCE_TRANSPARENCY.status[lang]),
              ),
            ),
          ),
          h("div", { className: "proofMedia" },
            h("img", {
              src: item.src,
              alt: item.alt[lang],
              loading: "lazy",
              decoding: "async",
            }),
          ),
        )),

        h("div", { className: "sectionIntro", style: { maxWidth: "850px", marginTop: "44px" } },
          h("p", { className: "eyebrow" }, CARE_CONSOLE_INTRO.eyebrow[lang]),
          h("p", { className: "intro" }, CARE_CONSOLE_INTRO.body[lang]),
        ),
        CARE_CONSOLE_IMAGES.map((item) => h("figure", { className: "proofFigure", key: item.src },
          h("figcaption", { className: "proofCopy" },
            h("span", { className: "proofLabel" }, item.label[lang]),
            h("p", null, item.caption[lang]),
          ),
          h("div", { className: "proofMedia" },
            h("img", {
              src: item.src,
              alt: item.alt[lang],
              loading: "lazy",
              decoding: "async",
            }),
          ),
        )),
      ),

      h("section", { id: "trust", "data-section": true, "data-reveal": true, className: "section wrap" },
        h("div", { className: "trustPanel" },
          h(SectionIntro, {
            lang,
            eyebrow: tr("Privacy and limitations", "私隱與產品限制", "隐私与产品限制"),
            title: tr(
              "Technology should support care, not make care decisions",
              "科技應該支援照護，而唔係代替人作決定",
              "科技应该支持照护，而不是代替人作决定",
            ),
            body: tr(
              "A responsible pilot sorts out consent, who can see data, follow-up, and data handling before anything starts.",
              "一個負責任嘅試點，喺開始之前就要講清楚：點樣攞同意、邊個可以睇資料、點樣跟進，同埋啲資料點處理。",
              "一个负责任的试点，在开始之前就要讲清楚：怎样取得同意、谁可以看资料、怎样跟进，以及资料怎样处理。",
            ),
          }),
          h("div", { className: "trustGrid" },
            TRUST_ITEMS.map((item) => h("article", { className: "trustCard", key: item.EN },
              h("span", { className: "iconBox" }, h(Icon, { name: "shield" })),
              h("p", null, item[lang]),
            )),
          ),
        ),
      ),

      h("section", { id: "team", "data-reveal": true, className: "section wrap" },
        h("div", { className: "teamPanel" },
          h("div", null,
            h("p", { className: "eyebrow" },
              tr("About the project team", "關於項目團隊", "关于项目团队")[lang],
            ),
            h("h2", null,
              tr(
                "A Hong Kong early-stage product project",
                "一個香港早期產品項目",
                "一个香港早期产品项目",
              )[lang],
            ),
          ),
          h("div", null,
            h("p", null,
              tr(
                "DoDo is built by an early-stage team working across voice interaction, hardware prototyping, and elderly-care service design.",
                "DoDo 由早期項目團隊開發，涵蓋語音互動、硬件原型同長者服務設計。",
                "DoDo 由早期项目团队开发，涵盖语音互动、硬件原型和长者服务设计。",
              )[lang],
            ),
            h("p", null,
              tr(
                "Right now we're focused on making the companion easy to use, helpful day to day, and responsible whenever updates are shared with trusted people. Team members, advisors, institutional support, and funding will only be announced once they're formally confirmed.",
                "我哋而家集中做緊：令個陪伴體驗更易用、更貼近日常，亦確保同可信任嘅人分享近況時有負責任嘅安排。至於團隊成員、顧問、院校支援同資助，要正式落實咗先會公布。",
                "我们现在集中在做：让陪伴体验更易用、更贴近日常，也确保和可信任的人分享近况时有负责任的安排。至于团队成员、顾问、院校支持和资助，要正式落实了才会公布。",
              )[lang],
            ),
          ),
        ),
      ),
    ),

    h("footer", { id: "contact", "data-reveal": true, className: "footer wrap" },
      h("div", { className: "contactPanel" },
        h("h2", null,
          tr(
            "When no one's around, could DoDo keep an older adult company?",
            "喺冇人喺身邊嘅時候，DoDo 可唔可以陪一陪長者？",
            "在没人在身边的时候，DoDo 能不能陪一陪长者？",
          )[lang],
        ),
        h("p", null,
          tr(
            "Tell us about the older adults you support, and what a small, responsible prototype test could teach us together.",
            "同我哋傾下你哋服務緊嘅長者，睇下一個小規模、負責任嘅原型測試，可以一齊學到啲乜。",
            "和我们聊聊你们服务的长者，看看一个小规模、负责任的原型测试，可以一起学到什么。",
          )[lang],
        ),
        h("div", { className: "ctaRow" },
          h(CTA, { href: "#pilot", variant: "primary", icon: "arrow" },
            tr("Explore a Pilot Collaboration", "探索試點合作", "探索试点合作")[lang],
          ),
        ),
        h(ContactLinks, { lang }),
        h("span", { className: "tagline" },
          tr("For the ones who raised us.", "獻畀曾經照顧我哋嘅人。", "献给曾经照顾我们的人。")[lang],
        ),
      ),
    ),
  );
}

export default DodoFinal;
