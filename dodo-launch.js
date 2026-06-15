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
    "Some everyday needs feel too small for an emergency call, but they still matter.",
    "有啲日常需要未至於要緊急求助，但對長者仍然重要。",
    "有些日常需要还不到紧急求助的程度，但对长者仍然重要。",
  ),
  tr(
    "Family calls and service visits leave gaps where small worries or practical difficulties may go unheard.",
    "家人電話同服務探訪之間仍有空檔，一啲小擔心或生活困難未必有人聽到。",
    "家人电话和服务探访之间仍有空档，一些小担心或生活困难未必有人听到。",
  ),
  tr(
    "Many older adults do not want to use apps or touchscreens just to talk, ask a question, or request small help.",
    "好多長者唔想為咗傾偈、問問題或提出小需要而使用 app 或觸控屏幕。",
    "很多长者不想为了聊天、问问题或提出小需要而使用 app 或触控屏幕。",
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
      "Talk to DoDo naturally in Cantonese. No app, touchscreen, password, or settings menu is needed.",
      "長者可以自然咁用廣東話同 DoDo 傾偈，毋須 app、觸控屏幕、密碼或設定。",
      "长者可以自然地用粤语和 DoDo 聊天，无需 app、触控屏幕、密码或设置。",
    ),
  },
  {
    icon: "heart",
    title: tr(
      "Respond",
      "回應",
      "回应",
    ),
    body: tr(
      "DoDo is designed to chat, give simple reminders, and support familiar daily routines.",
      "DoDo 設計用嚟傾偈、提供簡單提醒，同支援熟悉嘅日常生活。",
      "DoDo 设计用来聊天、提供简单提醒，并支持熟悉的日常生活。",
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
      "The prototype explores ways to help older adults express daily needs, small requests, worries, or repeated concerns more clearly.",
      "原型探索點樣幫長者更清楚表達日常需要、小請求、擔心或重複提到嘅事情。",
      "原型探索怎样帮助长者更清楚地表达日常需要、小请求、担心或反复提到的事情。",
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
      "Trusted family members, carers, NGOs, volunteers, or community partners can decide what support may be useful.",
      "可信任嘅家人、照顧者、社福機構、義工或社區夥伴可以決定咩支援可能有幫助。",
      "可信任的家人、照顾者、社福机构、志愿者或社区伙伴可以决定什么支持可能有帮助。",
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
      tr("An easier way to express small needs", "更容易表達小需要", "更容易表达小需要"),
    ],
  },
  {
    icon: "users",
    title: tr("NGO and elderly service teams", "社福機構與長者服務團隊", "社福机构与长者服务团队"),
    points: [
      tr("Test a light-touch voice support tool", "測試輕量語音支援工具", "测试轻量语音支持工具"),
      tr("Learn what daily needs appear between visits", "了解探訪之間出現嘅日常需要", "了解探访之间出现的日常需要"),
      tr("Connect older adults with suitable community resources", "將長者連結到合適社區資源", "将长者连接到合适社区资源"),
    ],
  },
  {
    icon: "home",
    title: tr("Caregivers and families", "照顧者與家人", "照顾者与家人"),
    points: [
      tr("Share simple updates with trusted people", "同可信任嘅人分享簡單近況", "与可信任的人分享简单近况"),
      tr("Do not rely only on occasional phone calls", "唔使只依靠間中一次電話", "不用只依靠偶尔一次电话"),
      tr("Know when a friendly check-in may be useful", "知道幾時主動問候可能有幫助", "知道什么时候主动问候可能有帮助"),
    ],
  },
];

const DIFFERENCES = [
  {
    category: tr("Emergency alarms", "緊急鐘／平安鐘", "紧急呼叫设备"),
    conventional: tr(
      "Usually reactive and may require the user to trigger an alert.",
      "一般屬於被動應對，亦可能需要長者主動按掣求助。",
      "一般属于被动应对，也可能需要长者主动按键求助。",
    ),
    dodo: tr(
      "Made for everyday conversation, reminders, and small needs between calls or visits.",
      "用於電話或探訪之間嘅日常傾談、提醒同小需要。",
      "用于电话或探访之间的日常聊天、提醒和小需要。",
    ),
  },
  {
    category: tr("Apps and touchscreens", "App 與觸控屏幕", "App 与触控屏幕"),
    conventional: tr(
      "Can require menus, typing, passwords, updates, or confidence using a smartphone.",
      "可能要用選單、打字、密碼、更新，亦要熟悉智能電話。",
      "可能要用菜单、打字、密码、更新，也要熟悉智能手机。",
    ),
    dodo: tr(
      "Designed for older adults who prefer simply speaking and listening.",
      "為偏好直接講同聽嘅長者而設計。",
      "为偏好直接说和听的长者而设计。",
    ),
  },
  {
    category: tr("Generic AI chatbots", "一般 AI 聊天工具", "一般 AI 聊天工具"),
    conventional: tr(
      "May not reflect Hong Kong Cantonese, older adults’ habits, or local support options.",
      "未必配合香港廣東話、長者生活習慣或本地支援選擇。",
      "未必配合香港粤语、长者生活习惯或本地支持选择。",
    ),
    dodo: tr(
      "A Cantonese-first prototype shaped around everyday life and Hong Kong community support.",
      "以廣東話為先，並按香港日常生活同社區支援而探索嘅原型。",
      "以粤语为先，并按香港日常生活和社区支持而探索的原型。",
    ),
  },
  {
    category: tr("Standalone smart speakers", "獨立智能喇叭", "独立智能音箱"),
    conventional: tr(
      "Can answer questions or play content, but may remain separate from real people and services.",
      "可以答問題或播放內容，但未必連結到真人同實際服務。",
      "可以回答问题或播放内容，但未必连接到真人和实际服务。",
    ),
    dodo: tr(
      "Explores how simple updates can help trusted people connect daily needs with real support.",
      "探索簡單近況點樣幫可信任嘅人將日常需要連結到實際支援。",
      "探索简单近况怎样帮助可信任的人将日常需要连接到实际支持。",
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

const TRUST_ITEMS = [
  tr(
    "DoDo is not an emergency service, a medical device, or a replacement for professional care.",
    "DoDo 唔係緊急服務、醫療裝置，亦唔會取代專業照護。",
    "DoDo 不是紧急服务、医疗设备，也不会取代专业照护。",
  ),
  tr(
    "Participation should be voluntary, with clear consent and a practical way to pause or withdraw.",
    "參與應該出於自願，並設有清晰同意、暫停或退出安排。",
    "参与应该出于自愿，并设有清晰同意、暂停或退出安排。",
  ),
  tr(
    "Access should be limited to agreed trusted contacts or authorised care teams and governed by the pilot’s access rules.",
    "存取應只限已協定嘅可信任聯絡人或獲授權照護團隊，並按試點存取規則管理。",
    "访问应只限已协定的可信任联系人或获授权照护团队，并按试点访问规则管理。",
  ),
  tr(
    "Privacy-conscious summaries should be preferred; sharing full conversations should not be the default.",
    "應優先使用重視私隱嘅摘要；分享完整對話唔應該係預設做法。",
    "应优先使用注重隐私的摘要；分享完整对话不应该是默认做法。",
  ),
  tr(
    "A person should review context and decide any follow-up; DoDo should not automate care decisions.",
    "任何跟進都應由人檢視情況再作決定；DoDo 唔應該自動作出照護決定。",
    "任何跟进都应由人工查看情况后再作决定；DoDo 不应该自动作出照护决定。",
  ),
  tr(
    "Pilot partners should agree data handling, retention, access, and escalation procedures before use.",
    "試點使用前，合作夥伴應先協定資料處理、保存、存取同跟進程序。",
    "试点使用前，合作伙伴应先协定数据处理、保存、访问和跟进流程。",
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
        "A voice box for everyday companionship",
        "陪伴日常生活嘅語音盒子",
        "陪伴日常生活的语音盒子",
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
            h("div", { className: "deviceLogo" },
              h("img", { src: LOGO, alt: "DoDo VoiceBox" }),
            ),
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
            h("p", null,
              tr(
                "With consent, family or service teams may see a short update and decide whether to check in.",
                "在同意安排下，家人或服務團隊可睇到簡短近況，再決定係咪需要問候。",
                "在同意安排下，家人或服务团队可看到简短近况，再决定是否需要问候。",
              )[lang],
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
    h("div", { className: "visualFooter" },
      h("span", null, tr("Talk", "傾偈", "聊天")[lang]),
      h("span", null, tr("Ask", "提出需要", "提出需要")[lang]),
      h("span", null, tr("Stay connected", "保持連結", "保持连接")[lang]),
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

  return h("div", { ref: rootRef, className: "page", lang: code },
    h("style", null, `
      @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Noto+Sans+SC:wght@400;500;600;700;800&family=Noto+Sans+TC:wght@400;500;600;700;800&display=swap');
      * { box-sizing: border-box; }
      html, body, #root { margin: 0; min-height: 100%; }
      body { background: #f5faf7; color: #17383b; }
      button { font: inherit; }
      a { color: inherit; text-decoration: none; }
      h1, h2, h3, p { letter-spacing: 0; }
      .page {
        height: 100vh;
        overflow: auto;
        overflow-x: hidden;
        background:
          radial-gradient(circle at 82% 8%, rgba(159, 225, 208, .23), transparent 30%),
          linear-gradient(180deg, #f8fcf9 0%, #eef8f3 48%, #fff8ef 100%);
        font-family: ${lang === "EN" ? "'Manrope', system-ui, sans-serif" : "'Noto Sans TC', 'Noto Sans SC', system-ui, sans-serif"};
      }
      .wrap {
        width: min(1240px, calc(100% - 48px));
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
        position: relative;
        width: 38px;
        height: 38px;
        overflow: hidden;
        border-radius: 10px;
        background: #fff;
        border: 1px solid rgba(31, 89, 83, .12);
      }
      .brandMark img {
        position: absolute;
        width: 370%;
        max-width: none;
        transform: translate(-36.5%, -26%);
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
        color: #476465;
        font-size: 13px;
        font-weight: 800;
      }
      .liveDot {
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
        font-size: 12px;
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
        position: relative;
        width: 92px;
        height: 62px;
        overflow: hidden;
      }
      .deviceLogo img {
        position: absolute;
        width: 400%;
        max-width: none;
        transform: translate(-37%, -33%);
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
        font-size: 13px;
        line-height: 1.45;
        font-weight: 800;
        text-align: center;
      }
      .deviceCaption {
        margin: 9px 0 0;
        color: #5b7475;
        font-size: 11px;
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
        color: #607879;
        font-size: 10px;
        line-height: 1.2;
        font-weight: 800;
        text-align: center;
      }
      .summaryPreview {
        width: 100%;
        min-height: 250px;
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
        font-size: 11px;
        font-weight: 800;
        letter-spacing: .06em;
        text-transform: uppercase;
      }
      .summaryPreview strong {
        color: #17383b;
        font-size: 17px;
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
        color: #466667;
        background: #eff8f4;
        font-size: 11px;
        line-height: 1.35;
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
        font-size: 12px;
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
        padding: 78px 0;
        scroll-margin-top: 82px;
      }
      .sectionIntro {
        max-width: 850px;
        margin-bottom: 34px;
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
      }
      .intro {
        margin: 15px 0 0;
        color: #587273;
        font-size: 20px;
        line-height: 1.7;
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
      .comparison {
        overflow: hidden;
        border-radius: 22px;
        border: 1px solid rgba(31, 89, 83, .12);
        background: rgba(255, 255, 255, .8);
      }
      .comparisonHeader, .comparisonRow {
        display: grid;
        grid-template-columns: .75fr 1.15fr 1.15fr;
      }
      .comparisonHeader {
        color: #fff;
        background: #173f40;
        font-size: 14px;
        font-weight: 800;
      }
      .comparisonHeader div, .comparisonRow div { padding: 18px 20px; }
      .comparisonRow + .comparisonRow { border-top: 1px solid rgba(31, 89, 83, .1); }
      .comparisonRow div + div, .comparisonHeader div + div { border-left: 1px solid rgba(31, 89, 83, .1); }
      .comparisonRow strong {
        color: #17383b;
        font-size: 17px;
      }
      .comparisonRow p {
        margin: 0;
        color: #5b7475;
        font-size: 16px;
        line-height: 1.55;
        font-weight: 600;
      }
      .comparisonRow .dodoColumn {
        color: #235f5a;
        background: rgba(229, 245, 239, .5);
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
        color: rgba(255, 255, 255, .76);
        font-size: 15px;
        line-height: 1.5;
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
        color: #506c6d;
        font-size: 14px;
        line-height: 1.5;
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
      }
      @media (max-width: 780px) {
        .hero { padding: 46px 0 58px; }
        .heroGrid, .needPanel, .journeyPanel, .progressGrid, .teamPanel {
          grid-template-columns: 1fr;
        }
        .prototypeVisual { max-width: 620px; }
        .stageCard { position: static; }
        .comparisonHeader { display: none; }
        .comparisonRow {
          grid-template-columns: 1fr;
          padding: 18px;
          gap: 12px;
        }
        .comparisonRow div { padding: 0; }
        .comparisonRow div + div { border-left: 0; }
        .comparisonRow .dodoColumn {
          padding: 14px;
          border-radius: 12px;
        }
        .comparisonRow p::before {
          display: block;
          margin-bottom: 5px;
          color: #12877b;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
        }
        .comparisonRow .typicalColumn p::before { content: "${tr("Typical approach", "一般做法", "一般做法")[lang]}"; }
        .comparisonRow .dodoColumn p::before { content: "${tr("DoDo direction", "DoDo 方向", "DoDo 方向")[lang]}"; }
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
        .brandMark { display: none; }
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
        .deviceLogo { width: 88px; height: 58px; }
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
          h("span", { className: "brandMark", "aria-hidden": "true" },
            h("img", { src: LOGO, alt: "" }),
          ),
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
                "A Cantonese voice box for everyday companionship and support.",
                "陪伴長者日常生活嘅廣東話語音盒子。",
                "陪伴长者日常生活的粤语语音盒子。",
              )[lang],
            ),
            h("p", { className: "heroLead" },
              tr(
                "DoDo lets older adults speak naturally, receive simple reminders, share daily needs, and stay connected with family, carers, or community support — with no apps or touchscreens.",
                "DoDo 俾長者自然咁講廣東話、收到簡單提醒、表達日常需要，同家人、照顧者或社區支援保持連結，毋須使用 app 或觸控屏幕。",
                "DoDo 让长者自然地说粤语、收到简单提醒、表达日常需要，并与家人、照顾者或社区支持保持连接，无需使用 app 或触控屏幕。",
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
                ["wave", tr("Simply speak", "開口就用到", "开口就能用")],
                ["message", tr("Daily companionship", "日常陪伴", "日常陪伴")],
                ["users", tr("Community connection", "連結社區支援", "连接社区支持")],
              ].map(([icon, label]) => h("span", { className: "heroProof", key: label.EN },
                h(Icon, { name: icon, size: 15 }),
                label[lang],
              )),
            ),
          ),
          h(ProductVisual, { lang }),
        ),
      ),

      h("section", { id: "need", className: "section wrap" },
        h("div", { className: "needPanel" },
          h("div", null,
            h("p", { className: "eyebrow", style: { color: "#8ce3d2" } },
              tr("The unmet need", "尚未被滿足嘅需要", "尚未被满足的需要")[lang],
            ),
            h("p", { className: "needStatement" },
              tr(
                "Small daily needs can be missed between calls and visits.",
                "電話同探訪之間，一啲日常小需要好容易被忽略。",
                "电话和探访之间，一些日常小需要很容易被忽略。",
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

      h("section", { id: "how", "data-section": true, className: "section wrap" },
        h(SectionIntro, {
          lang,
          centered: true,
          eyebrow: tr("How DoDo works", "DoDo 點樣運作", "DoDo 怎样运作"),
          title: tr(
            "A simple way to speak, ask, and stay connected",
            "簡單咁講、提出需要，同身邊人保持連結",
            "简单地说、提出需要，并与身边人保持连接",
          ),
          body: tr(
            "Designed for older adults who do not want to use apps or touchscreens. They can simply talk to a small voice box in Cantonese.",
            "為唔想用 app 或觸控屏幕嘅長者而設。佢哋只需要用廣東話同一個小型語音盒子傾偈。",
            "为不想使用 app 或触控屏幕的长者而设。他们只需要用粤语和一个小型语音盒子聊天。",
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

      h("section", { id: "journey", className: "section wrap" },
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
                "Mrs. Chan lives alone and does not enjoy using smartphone apps. She talks to DoDo in Cantonese, receives a reminder, and mentions that collecting her medicine is difficult this week.",
                "陳婆婆獨居，亦唔鍾意用智能電話 app。佢用廣東話同 DoDo 傾偈、收到提醒，亦提到今個星期攞藥有啲困難。",
                "陈婆婆独居，也不喜欢使用智能手机 app。她用粤语和 DoDo 聊天、收到提醒，也提到这个星期取药有些困难。",
              )[lang],
            ),
            h("p", { className: "journeyNote" },
              tr(
                "This is an illustrative scenario, not evidence of a completed care outcome or validated monitoring capability.",
                "呢個只係示意情境，唔代表已完成嘅照護成效，亦唔代表已驗證嘅監察能力。",
                "这只是示意情境，不代表已完成的照护成效，也不代表已验证的监测能力。",
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

      h("section", { id: "benefits", className: "section wrap" },
        h(SectionIntro, {
          lang,
          centered: true,
          eyebrow: tr("Benefits by audience", "按使用者劃分嘅價值", "按用户划分的价值"),
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

      h("section", { id: "difference", "data-section": true, className: "section wrap" },
        h(SectionIntro, {
          lang,
          eyebrow: tr("Why DoDo is different", "DoDo 有咩唔同", "DoDo 有什么不同"),
          title: tr(
            "More everyday, easier to use, and connected to real support",
            "更貼近日常、更易用，亦連結到實際支援",
            "更贴近日常、更易用，也连接到实际支持",
          ),
          body: tr(
            "DoDo is not a replacement for emergency devices, professionals, or family. It explores an easier way to support daily conversation, small needs, and community connection.",
            "DoDo 唔會取代緊急裝置、專業人員或家人。佢探索一種更簡單嘅方式，支援日常傾談、小需要同社區連結。",
            "DoDo 不会取代紧急设备、专业人员或家人。它探索一种更简单的方式，支持日常聊天、小需要和社区连接。",
          ),
        }),
        h("div", { className: "comparison" },
          h("div", { className: "comparisonHeader" },
            h("div", null, tr("Category", "類別", "类别")[lang]),
            h("div", null, tr("Typical approach", "一般做法", "一般做法")[lang]),
            h("div", null, tr("DoDo direction", "DoDo 方向", "DoDo 方向")[lang]),
          ),
          DIFFERENCES.map((item) => h("div", { className: "comparisonRow", key: item.category.EN },
            h("div", null, h("strong", null, item.category[lang])),
            h("div", { className: "typicalColumn" }, h("p", null, item.conventional[lang])),
            h("div", { className: "dodoColumn" }, h("p", null, item.dodo[lang])),
          )),
        ),
      ),

      h("section", { id: "pilot", "data-section": true, className: "pilotSection" },
        h("div", { className: "wrap" },
          h(SectionIntro, {
            lang,
            light: true,
            eyebrow: tr("Explore a structured pilot", "探索有結構嘅試點", "探索有结构的试点"),
            title: tr(
              "Pilot collaboration for NGOs and elderly service providers",
              "為社福機構與長者服務提供者而設嘅試點合作",
              "为社福机构与长者服务提供者而设的试点合作",
            ),
            body: tr(
              "A pilot would test whether older adults actually talk to DoDo, what daily needs they express, and whether NGOs or service teams can use simple updates to offer better support.",
              "試點會測試長者係咪願意同 DoDo 傾偈、會表達咩日常需要，以及社福機構或服務團隊可唔可以運用簡單近況提供更合適支援。",
              "试点会测试长者是否愿意和 DoDo 聊天、会表达什么日常需要，以及社福机构或服务团队能否运用简单近况提供更合适的支持。",
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
                "The purpose is to explore, test, evaluate, and learn together — not to claim proven outcomes. Each partner would agree the participants, duration, consent, trusted contacts, access, and support responsibilities before testing.",
                "目的係一齊探索、測試、評估同學習，而唔係宣稱已有成效。測試前會同每位夥伴協定參與者、時間、同意、可信任聯絡人、存取同支援責任。",
                "目的是一起探索、测试、评估和学习，而不是声称已有成效。测试前会与每位伙伴协定参与者、时间、同意、可信任联系人、访问和支持责任。",
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
          eyebrow: tr("Evidence and progress", "證據與研發進度", "证据与研发进度"),
          title: tr(
            "Current stage: working prototype",
            "目前階段：研發中原型",
            "目前阶段：研发中原型",
          ),
          body: tr(
            "DoDo is an early-stage product project. The current work demonstrates the intended experience and helps identify what still needs refinement before a responsible pilot.",
            "DoDo 係早期產品項目。現階段工作用嚟展示預期體驗，同時辨認負責任試點之前仍需改良嘅部分。",
            "DoDo 是早期产品项目。现阶段工作用来展示预期体验，同时识别负责任试点之前仍需改进的部分。",
          ),
        }),
        h("div", { className: "progressGrid" },
          h("aside", { className: "stageCard" },
            h("strong", null,
              tr("Working prototype, not a deployed service", "研發中原型，並非已投入服務", "研发中原型，并非已投入服务")[lang],
            ),
            h("p", null,
              tr(
                "The current build demonstrates the product direction. It is intended for controlled demonstrations and partner discovery while technical, privacy, and service details are refined.",
                "現有版本用嚟展示產品方向，適合受控示範同合作探索；技術、私隱同服務細節仍在改良。",
                "现有版本用来展示产品方向，适合受控演示和合作探索；技术、隐私和服务细节仍在改进。",
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
      ),

      h("section", { id: "trust", "data-section": true, className: "section wrap" },
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
              "A responsible pilot must define consent, access, escalation, and data handling before use.",
              "負責任嘅試點必須喺使用前清楚定義同意、存取、跟進同資料處理安排。",
              "负责任的试点必须在使用前清楚定义同意、访问、跟进和数据处理安排。",
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

      h("section", { id: "team", className: "section wrap" },
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
                "DoDo is being developed by an early-stage project team working across voice interaction, hardware prototyping, and elderly-care service design.",
                "DoDo 由一個早期項目團隊開發，工作涵蓋語音互動、硬件原型同長者服務設計。",
                "DoDo 由一个早期项目团队开发，工作涵盖语音互动、硬件原型和长者服务设计。",
              )[lang],
            ),
            h("p", null,
              tr(
                "Development is focused on making the voice box easy to use, useful in everyday life, and responsible when simple updates are shared with trusted people. Team biographies, advisors, institutional support, and funding information will be published only when formally confirmed.",
                "現階段開發聚焦令語音盒子更易用、更適合日常生活，亦確保同可信任嘅人分享簡單近況時有負責任安排。團隊簡介、顧問、院校支援同資助資料只會喺正式確認後公布。",
                "现阶段开发聚焦让语音盒子更易用、更适合日常生活，也确保与可信任的人分享简单近况时有负责任的安排。团队简介、顾问、院校支持和资助信息只会在正式确认后公布。",
              )[lang],
            ),
          ),
        ),
      ),
    ),

    h("footer", { id: "contact", className: "footer wrap" },
      h("div", { className: "contactPanel" },
        h("h2", null,
          tr(
            "Could DoDo help older adults stay connected between visits?",
            "DoDo 可唔可以幫長者喺探訪之間保持連結？",
            "DoDo 能否帮助长者在探访之间保持连接？",
          )[lang],
        ),
        h("p", null,
          tr(
            "Talk with us about the older adults you support, the daily needs that appear between visits, and what a small responsible prototype test could learn.",
            "同我哋傾下你服務嘅長者、探訪之間出現嘅日常需要，同一個小型負責任原型測試可以學到啲乜。",
            "和我们谈谈你服务的长者、探访之间出现的日常需要，以及一个小型负责任原型测试可以学到什么。",
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
