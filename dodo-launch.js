import { createElement as h, Fragment, useEffect, useRef, useState } from "react";
import logoUrl from "./api/files/logo_dodo_20260412.png";
import pandaImg from "./cute panda.png";
import capybaraImg from "./Cute Capybara.png";
import penguinImg from "./Cute penguin.png";
import slothImg from "./Cute sloth.png";

const LOGO = logoUrl;
const VIDEO_URL = "https://youtu.be/pOwHZXA-oeY";
const VIDEO_EMBED = "https://www.youtube.com/embed/pOwHZXA-oeY";
const PHONE = "64104866";
const TEL = `tel:${PHONE}`;
const WHATSAPP = "https://wa.me/85264104866";
const EMAIL = "dodoaivoicebox@gmail.com";

const tr = (EN, TC, SC) => ({ EN, TC, SC });
const text = (value, lang) => (typeof value === "string" ? value : value[lang]);

const LANGS = [
  { key: "TC", label: "廣東話", aria: "Cantonese Traditional Chinese" },
  { key: "SC", label: "简体", aria: "Simplified Chinese" },
  { key: "EN", label: "EN", aria: "English" }
];

const NAV = [
  { id: "problem", label: tr("Problem", "問題", "问题") },
  { id: "does", label: tr("What DoDo Does", "DoDo 做啲乜", "DoDo 做什么") },
  { id: "connection", label: tr("Connection", "社區連結", "社区连接") },
  { id: "video", label: tr("Video", "影片", "视频") },
  { id: "contact", label: tr("Contact", "聯絡", "联系") }
];

const ICONS = {
  arrow: h(Fragment, null, h("path", { d: "M5 12h14" }), h("path", { d: "m13 6 6 6-6 6" })),
  play: h(Fragment, null, h("circle", { cx: "12", cy: "12", r: "10" }), h("path", { d: "m10 8 6 4-6 4Z" })),
  phone: h("path", { d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z" }),
  mail: h(Fragment, null, h("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }), h("path", { d: "m3 7 9 6 9-6" })),
  message: h(Fragment, null, h("path", { d: "M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" }), h("path", { d: "M8 9h8" }), h("path", { d: "M8 13h5" })),
  heart: h(Fragment, null, h("path", { d: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" }), h("path", { d: "M8.5 12h2l1.1-2.2L13 15l1.2-3H16" })),
  users: h(Fragment, null, h("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }), h("circle", { cx: "9", cy: "7", r: "4" }), h("path", { d: "M22 21v-2a4 4 0 0 0-3-3.9" }), h("path", { d: "M16 3.1a4 4 0 0 1 0 7.8" })),
  hand: h(Fragment, null, h("path", { d: "M7 12V7.5a1.8 1.8 0 1 1 3.6 0V11" }), h("path", { d: "M10.6 11V6.7a1.8 1.8 0 1 1 3.6 0V11" }), h("path", { d: "M14.2 11V8.1a1.8 1.8 0 1 1 3.6 0V14c0 3.9-3.1 7-7 7S4 17.9 4 14v-1.5a1.8 1.8 0 1 1 3.6 0V14" })),
  shield: h(Fragment, null, h("path", { d: "M12 3 5 6.2v5.4c0 4.1 2.7 7.8 7 9.4 4.3-1.6 7-5.3 7-9.4V6.2L12 3Z" }), h("path", { d: "m9 12 2 2 4-4" })),
  check: h("path", { d: "m5.5 12.5 4 4 9-9" })
};

const PROBLEMS = [
  tr("Long hours alone", "長時間獨處", "长时间独处"),
  tr("Small life changes may go unnoticed", "生活變化未必有人察覺", "生活变化未必有人察觉"),
  tr("Family, volunteers, and support may not connect in time", "家人、義工、社區支援未必即時連接到", "家人、义工、社区支持未必能即时连接")
];

const QUICK_POINTS = [
  {
    label: tr("For older adults living alone", "為獨居長者而設", "为独居长者而设"),
    detail: tr("Designed for everyday homes, not clinics or complicated dashboards.", "設計重點係獨居長者屋企嘅日常環境，而唔係複雜系統。", "设计重点是独居长者家里的日常环境，而不是复杂系统。")
  },
  {
    label: tr("Voice-only interaction", "純語音交流", "纯语音交流"),
    detail: tr("Elders can speak and listen without learning a new app.", "長者只需要講同聽，唔需要學新 app。", "长者只需要说和听，不需要学新 app。")
  },
  {
    label: tr("No app, screen, or typing", "毋須 app、屏幕或打字", "无需 app、屏幕或打字"),
    detail: tr("The experience stays simple even for elders who avoid phones.", "就算唔慣用手機，互動方式都保持簡單。", "就算不习惯用手机，互动方式也保持简单。")
  },
  {
    label: tr("People follow up when care is needed", "有需要時由人跟進", "有需要时由人跟进"),
    detail: tr("DoDo helps signals reach family, volunteers, or community teams.", "DoDo 幫需要關注嘅訊號交到家人、義工或社區團隊手上。", "DoDo 帮需要关注的信号交到家人、义工或社区团队手上。")
  }
];

const DOES = [
  {
    icon: "message",
    title: tr("Daily voice check-ins", "每日主動語音問候", "每日主动语音问候"),
    body: tr("DoDo starts simple greetings so elders do not need to ask first.", "DoDo 會先開口問候，長者唔需要主動求助先有人聽見。", "DoDo 会先开口问候，长者不需要主动求助才有人听见。")
  },
  {
    icon: "heart",
    title: tr("Cantonese companionship", "廣東話陪伴同簡單互動", "粤语陪伴和简单互动"),
    body: tr("A familiar voice experience for older adults who may not use apps.", "用熟悉嘅廣東話互動，適合唔習慣用 app 嘅長者。", "用熟悉的粤语互动，适合不习惯用 app 的长者。")
  },
  {
    icon: "users",
    title: tr("Signals for human follow-up", "交畀人手 / 社區跟進", "交给人工 / 社区跟进"),
    body: tr("When something needs attention, DoDo helps route it to people who care.", "當出現需要關注嘅情況，DoDo 幫手交畀家人、義工或社區團隊。", "当出现需要关注的情况，DoDo 帮助交给家人、义工或社区团队。")
  }
];

const CONNECTIONS = [
  {
    title: tr("Families feel closer", "家人更安心", "家人更安心"),
    body: tr("They can know earlier when an elder may need care.", "更早知道長者可能需要關心。", "更早知道长者可能需要关心。")
  },
  {
    title: tr("Volunteers know where to help", "義工更易知道邊個需要關心", "义工更容易知道谁需要关心"),
    body: tr("Check-ins can become clearer outreach priorities.", "探訪同電話關懷可以更有方向。", "探访和电话关怀可以更有方向。")
  },
  {
    title: tr("NGO teams follow up better", "社福機構 / 社區團隊更有系統跟進", "社福机构 / 社区团队更有系统跟进"),
    body: tr("Care signals can support a simple follow-up workflow.", "照護訊號可以配合簡單跟進流程。", "照护信号可以配合简单跟进流程。")
  },
  {
    title: tr("Elders do not learn complex tech", "長者唔需要學複雜科技", "长者不需要学习复杂科技"),
    body: tr("They only speak and listen.", "佢哋只需要講同聽。", "他们只需要说和听。")
  }
];

const HUB_NODES = [
  { key: "family", icon: "heart", label: tr("Family", "家人", "家人") },
  { key: "volunteer", icon: "hand", label: tr("Volunteer", "義工", "义工") },
  { key: "ngo", icon: "users", label: tr("NGO", "社福", "社福") },
  { key: "community", icon: "message", label: tr("Community", "社區", "社区") }
];

const FLOW = [
  tr("DoDo greets the elder every day", "DoDo 每日問候長者", "DoDo 每日问候长者"),
  tr("It notices silence, repeated confusion, and routine changes", "留意沉默、重複困惑、作息變化等訊號", "留意沉默、重复困惑、作息变化等信号"),
  tr("People follow up when attention is needed", "將需要關注嘅情況交畀家人 / 義工 / 社區團隊跟進", "将需要关注的情况交给家人 / 义工 / 社区团队跟进")
];

const SAFETY = [
  tr("DoDo does not replace emergency medical services.", "DoDo 不取代緊急醫療服務。", "DoDo 不取代紧急医疗服务。"),
  tr("Important situations still need human judgement.", "重要情況需要由人判斷。", "重要情况需要由人判断。"),
  tr("Privacy and human follow-up should be defined before use.", "以私隱同人手跟進為核心。", "以隐私和人工跟进为核心。")
];

const APPEARANCES = [
  { name: tr("Panda", "熊貓", "熊猫"), img: pandaImg },
  { name: tr("Capybara", "水豚", "水豚"), img: capybaraImg },
  { name: tr("Penguin", "企鵝", "企鹅"), img: penguinImg },
  { name: tr("Sloth", "樹懶", "树懒"), img: slothImg }
];

const FAQ = [
  {
    q: tr("Does an elder need to know how to use a phone?", "DoDo 需要長者識用手機嗎？", "DoDo 需要长者会用手机吗？"),
    a: tr("No. DoDo is voice-first. Elders can simply speak and listen.", "唔需要。DoDo 以語音為主，長者只需要講同聽。", "不需要。DoDo 以语音为主，长者只需要说和听。")
  },
  {
    q: tr("Does DoDo support Cantonese?", "DoDo 支援廣東話嗎？", "DoDo 支持粤语吗？"),
    a: tr("Yes. DoDo is designed around Cantonese companionship for Hong Kong elders.", "支援。DoDo 以香港長者嘅廣東話陪伴為設計方向。", "支持。DoDo 以香港长者的粤语陪伴为设计方向。")
  },
  {
    q: tr("Will DoDo replace family or volunteers?", "DoDo 會唔會取代家人或義工？", "DoDo 会不会取代家人或义工？"),
    a: tr("No. DoDo helps people know earlier when care may be needed.", "唔會。DoDo 係幫大家更早知道長者可能需要關心。", "不会。DoDo 是帮助大家更早知道长者可能需要关心。")
  },
  {
    q: tr("What if an elder does not respond for a long time?", "如果長者長時間無回應會點？", "如果长者长时间无回应会怎样？"),
    a: tr("That can become a signal for family, volunteers, or the care team to follow up.", "可以成為訊號，交畀家人、義工或照護團隊跟進。", "可以成为信号，交给家人、义工或照护团队跟进。")
  },
  {
    q: tr("How can we learn more or collaborate?", "點樣了解更多或合作？", "怎样了解更多或合作？"),
    a: tr(`Watch the video or contact us by WhatsApp, phone, or email.`, "可以先睇介紹影片，或者用 WhatsApp、電話或電郵聯絡我哋。", "可以先看介绍视频，或者用 WhatsApp、电话或电子邮件联系我们。")
  }
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
    "aria-hidden": "true"
  }, ICONS[name]);
}

function CTA({ href, children, variant = "primary", icon, external = false }) {
  return h("a", {
    className: `btn ${variant}`,
    href,
    target: external ? "_blank" : undefined,
    rel: external ? "noreferrer" : undefined
  }, children, icon ? h(Icon, { name: icon, size: 17 }) : null);
}

function SectionIntro({ eyebrow, title, body, lang, centered = false }) {
  return h("div", { className: `sectionIntro ${centered ? "centered" : ""}` },
    h("p", { className: "eyebrow" }, text(eyebrow, lang)),
    h("h2", null, text(title, lang)),
    body ? h("p", { className: "intro" }, text(body, lang)) : null
  );
}

function SimpleCard({ item, lang }) {
  return h("article", { className: "card" },
    h("div", { className: "iconBox" }, h(Icon, { name: item.icon })),
    h("h3", null, item.title[lang]),
    h("p", null, item.body[lang])
  );
}

function ContactLinks({ lang }) {
  return h("div", { className: "contactLinks" },
    h(CTA, { href: WHATSAPP, variant: "primary", icon: "message", external: true }, tr("WhatsApp: 64104866", "WhatsApp：64104866", "WhatsApp：64104866")[lang]),
    h(CTA, { href: TEL, variant: "secondary", icon: "phone" }, tr("Call: 64104866", "電話：64104866", "电话：64104866")[lang]),
    h(CTA, { href: `mailto:${EMAIL}`, variant: "secondary", icon: "mail" }, EMAIL)
  );
}

function ProductVisual({ lang }) {
  return h("div", { className: "productVisual" },
    h("div", { className: "bubble top" }, tr("早晨，今日點呀？", "早晨，今日點呀？", "早晨，今天怎么样？")[lang]),
    h("div", { className: "signalRing", "aria-hidden": "true" }),
    h("div", { className: "logoFrame" }, h("img", { src: LOGO, alt: "DoDo VoiceBox" })),
    h("div", { className: "hubNodes", "aria-label": tr("Care network", "照護網絡", "照护网络")[lang] },
      HUB_NODES.map((node, index) => h("div", {
        key: node.key,
        className: `hubChip ${node.key}`,
        style: { "--chip-delay": `${index * 90}ms` }
      },
        h(Icon, { name: node.icon, size: 15 }),
        h("span", null, node.label[lang])
      ))
    ),
    h("div", { className: "bubble bottom" }, tr("有人會跟進。", "有人會跟進。", "有人会跟进。")[lang])
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
  const [active, setActive] = useState("problem");
  const [selectedQuick, setSelectedQuick] = useState(1);
  const rootRef = useRef(null);
  const reduced = useReducedMotion();
  const code = lang === "EN" ? "en" : lang === "TC" ? "zh-Hant" : "zh-Hans";
  const jump = (id) => document.getElementById(id)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });

  useEffect(() => {
    document.documentElement.lang = code;
  }, [code]);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const sections = [...node.querySelectorAll("[data-section]")];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target?.id) setActive(visible.target.id);
    }, { root: node, threshold: [0.24, 0.5], rootMargin: "-18% 0px -55% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return h("div", { ref: rootRef, className: "page", lang: code },
    h("style", null, `
      @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Noto+Sans+SC:wght@400;500;700;800&family=Noto+Sans+TC:wght@400;500;700;800&display=swap');
      * { box-sizing: border-box; }
      html, body, #root { margin: 0; min-height: 100%; }
      body { background: #f8fbf8; color: #17383b; }
      button { font: inherit; }
      .page {
        height: 100vh;
        overflow: auto;
        overflow-x: hidden;
        background:
          linear-gradient(180deg, #f7fbf8 0%, #eff8f3 44%, #fff8ef 100%);
        font-family: ${lang === "EN" ? "'Manrope', system-ui, sans-serif" : "'Noto Sans TC', 'Noto Sans SC', system-ui, sans-serif"};
      }
      a { color: inherit; text-decoration: none; }
      button { font: inherit; }
      .wrap {
        width: min(1280px, calc(100% - 48px));
        margin: 0 auto;
      }
      .topbar {
        position: sticky;
        top: 0;
        z-index: 20;
        background: rgba(248,251,248,.9);
        border-bottom: 1px solid rgba(31,89,83,.1);
        backdrop-filter: blur(18px);
      }
      .topbarInner {
        min-height: 78px;
        display: flex;
        align-items: center;
        gap: 18px;
        justify-content: space-between;
      }
      .brand {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        font-weight: 800;
        color: #17383b;
        white-space: nowrap;
        font-size: 20px;
      }
      .brand img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 8px;
      }
      .nav, .langs, .ctaRow, .contactLinks {
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
        padding: 12px 16px;
        background: transparent;
        color: #4d6667;
        font-size: 19px;
        font-weight: 800;
        cursor: pointer;
        transition: color .18s ease, background .18s ease, transform .18s ease;
      }
      .navBtn:hover, .langBtn:hover {
        transform: translateY(-1px);
        background: rgba(229,245,239,.7);
      }
      .navBtn.active, .langBtn.active {
        color: #0f7b70;
        background: #e5f5ef;
      }
      .btn {
        min-height: 46px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border-radius: 999px;
        padding: 0 19px;
        border: 1px solid transparent;
        font-size: 19px;
        font-weight: 800;
        line-height: 1.15;
        box-shadow: 0 8px 20px rgba(20, 95, 87, .1);
        transition: transform .18s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease;
      }
      .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 14px 30px rgba(20, 95, 87, .16);
      }
      .btn:active {
        transform: translateY(1px) scale(.985);
        box-shadow: 0 6px 14px rgba(20, 95, 87, .12);
      }
      .btn.primary {
        color: #fff;
        background: #12877b;
        border-color: #12877b;
      }
      .btn.secondary {
        color: #174d4c;
        background: #fff;
        border-color: rgba(23,77,76,.18);
      }
      .topbar .navBtn,
      .topbar .langBtn {
        font-size: 20px;
      }
      .topbar .btn {
        min-height: 50px;
        padding: 0 22px;
        font-size: 20px;
      }
      .topbar .brand {
        font-size: 20px;
      }
      .hero {
        padding: 62px 0 42px;
      }
      .heroGrid {
        display: grid;
        grid-template-columns: minmax(0, 1.12fr) minmax(420px, .88fr);
        gap: 64px;
        align-items: center;
      }
      .heroGrid > * {
        animation: riseIn .72s cubic-bezier(.2, .8, .2, 1) both;
      }
      .heroGrid > *:nth-child(2) {
        animation-delay: .12s;
      }
      .eyebrow {
        margin: 0 0 12px;
        color: #12877b;
        font-size: 16px;
        line-height: 1.4;
        font-weight: 800;
        letter-spacing: .08em;
        text-transform: uppercase;
      }
      h1, h2, h3, p { letter-spacing: 0; }
      h1 {
        margin: 0;
        color: #16383a;
        font-size: clamp(42px, 6vw, 76px);
        line-height: 1.04;
        max-width: 15ch;
      }
      .heroLead {
        max-width: 820px;
        margin: 22px 0 0;
        color: #4f6a6b;
        font-size: clamp(20px, 2.2vw, 26px);
        line-height: 1.68;
        font-weight: 600;
      }
      .ctaRow {
        margin-top: 30px;
      }
      .quickPoints {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
        margin-top: 34px;
      }
      .quickPoint {
        appearance: none;
        text-align: left;
        min-height: 92px;
        padding: 18px;
        border-radius: 12px;
        border: 1px solid rgba(31,89,83,.12);
        background: rgba(255,255,255,.78);
        color: #254b4c;
        font-size: 19px;
        line-height: 1.45;
        font-weight: 800;
        cursor: pointer;
        box-shadow: 0 8px 20px rgba(21,83,78,.05);
        transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease, background .18s ease;
      }
      .quickPoint:hover {
        transform: translateY(-3px);
        border-color: rgba(18,135,123,.24);
        box-shadow: 0 16px 34px rgba(21,83,78,.11);
      }
      .quickPoint:active {
        transform: translateY(0) scale(.985);
      }
      .quickPoint.active {
        background: #e5f5ef;
        border-color: rgba(18,135,123,.42);
        box-shadow: 0 14px 30px rgba(18,135,123,.12);
      }
      .quickDetail {
        grid-column: 1 / -1;
        margin: 0;
        padding: 18px 20px;
        border-radius: 14px;
        color: #1f5554;
        background: rgba(229,245,239,.8);
        border: 1px solid rgba(18,135,123,.18);
        font-size: 18px;
        line-height: 1.65;
        font-weight: 800;
        animation: softPop .24s ease both;
      }
      .productVisual {
        position: relative;
        min-height: 430px;
        padding: 28px;
        border-radius: 28px;
        display: grid;
        place-items: center;
        background: #fff;
        border: 1px solid rgba(31,89,83,.12);
        box-shadow: 0 24px 60px rgba(21,83,78,.12);
        overflow: hidden;
        animation: floatCard 5.8s ease-in-out infinite;
      }
      .signalRing {
        position: absolute;
        z-index: 0;
        width: min(76%, 380px);
        aspect-ratio: 1 / 1;
        border-radius: 28px;
        border: 1px solid rgba(18,135,123,.2);
        background: radial-gradient(circle, rgba(18,135,123,.08) 0 2px, transparent 3px);
        background-size: 34px 34px;
        animation: signalBreath 4.8s ease-in-out infinite;
      }
      .signalRing::before {
        content: "";
        position: absolute;
        inset: 20px;
        border-radius: 22px;
        border: 1px dashed rgba(18,135,123,.24);
      }
      .logoFrame {
        position: relative;
        z-index: 1;
        width: min(66%, 330px);
        aspect-ratio: 1 / 1;
        border-radius: 22px;
        overflow: hidden;
        background: #f9fcfb;
        border: 1px solid rgba(31,89,83,.1);
        box-shadow: 0 18px 34px rgba(21,83,78,.1);
        transition: transform .24s ease, box-shadow .24s ease;
      }
      .productVisual:hover .logoFrame {
        transform: scale(1.035);
        box-shadow: 0 24px 46px rgba(21,83,78,.14);
      }
      .logoFrame img {
        width: 375%;
        max-width: none;
        display: block;
        transform: translate(-36.7%, -26.2%);
      }
      .hubNodes {
        position: absolute;
        inset: 0;
        z-index: 2;
        pointer-events: none;
      }
      .hubChip {
        position: absolute;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 10px 12px;
        border-radius: 999px;
        background: rgba(255,255,255,.93);
        border: 1px solid rgba(18,135,123,.18);
        color: #1f5554;
        font-size: 15px;
        line-height: 1;
        font-weight: 900;
        box-shadow: 0 12px 24px rgba(21,83,78,.1);
        animation: chipIn .42s cubic-bezier(.2, .8, .2, 1) both, chipFloat 5.2s ease-in-out infinite;
        animation-delay: var(--chip-delay), calc(var(--chip-delay) + .5s);
      }
      .hubChip svg {
        color: #12877b;
        flex: 0 0 auto;
      }
      .hubChip.family { left: 30px; top: 118px; }
      .hubChip.volunteer { right: 30px; top: 126px; }
      .hubChip.ngo { left: 18px; bottom: 112px; }
      .hubChip.community { right: 24px; bottom: 112px; }
      .productVisual:hover .signalRing {
        border-color: rgba(18,135,123,.35);
      }
      .bubble {
        position: absolute;
        z-index: 3;
        padding: 13px 16px;
        border-radius: 15px;
        background: #fff;
        border: 1px solid rgba(31,89,83,.14);
        color: #21494a;
        font-size: 19px;
        font-weight: 800;
        box-shadow: 0 12px 26px rgba(21,83,78,.1);
        animation: bubbleIn .56s cubic-bezier(.2, .8, .2, 1) both;
      }
      .bubble.top { top: 36px; left: 32px; }
      .bubble.bottom { right: 32px; bottom: 48px; animation-delay: .24s; }
      .section {
        padding: 52px 0;
        scroll-margin-top: 88px;
      }
      .sectionIntro {
        max-width: 860px;
        margin-bottom: 26px;
      }
      .sectionIntro.centered {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }
      .sectionIntro h2 {
        margin: 0;
        color: #16383a;
        font-size: clamp(30px, 4vw, 48px);
        line-height: 1.12;
      }
      .intro {
        margin: 14px 0 0;
        color: #587273;
        font-size: 21px;
        line-height: 1.7;
        font-weight: 600;
      }
      .panel {
        padding: clamp(26px, 5vw, 52px);
        border-radius: 24px;
        background: rgba(255,255,255,.78);
        border: 1px solid rgba(31,89,83,.1);
      }
      .panel.green { background: #eaf8f2; }
      .panel.warm { background: #fff6eb; border-color: rgba(184,111,43,.14); }
      .grid3, .grid4 {
        display: grid;
        gap: 16px;
      }
      .grid3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .grid4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
      .card {
        padding: 22px;
        border-radius: 14px;
        background: #fff;
        border: 1px solid rgba(31,89,83,.12);
        box-shadow: 0 10px 26px rgba(21,83,78,.07);
        transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
      }
      .card:hover, .mini:hover, .step:hover, .appearance:hover, .faqItem:hover,
      .problemList li:hover, .safetyList li:hover {
        transform: translateY(-4px);
        border-color: rgba(18,135,123,.22);
        box-shadow: 0 16px 36px rgba(21,83,78,.1);
      }
      .iconBox {
        width: 42px;
        height: 42px;
        display: grid;
        place-items: center;
        margin-bottom: 16px;
        border-radius: 12px;
        color: #12877b;
        background: #e5f5ef;
      }
      .card h3 {
        margin: 0;
        color: #17383b;
        font-size: 24px;
        line-height: 1.25;
      }
      .card p {
        margin: 10px 0 0;
        color: #5e7576;
        font-size: 19px;
        line-height: 1.65;
        font-weight: 600;
      }
      .problemList, .safetyList {
        display: grid;
        gap: 12px;
        margin: 0;
        padding: 0;
        list-style: none;
      }
      .problemList li, .safetyList li {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 18px 20px;
        border-radius: 14px;
        background: #fff;
        border: 1px solid rgba(31,89,83,.12);
        color: #254b4c;
        font-size: 21px;
        line-height: 1.55;
        font-weight: 800;
        transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
      }
      .problemList svg, .safetyList svg {
        flex: 0 0 auto;
        color: #12877b;
        margin-top: 3px;
      }
      .connectionText {
        max-width: 980px;
        margin: 0;
        color: #23494b;
        font-size: clamp(22px, 3vw, 34px);
        line-height: 1.35;
        font-weight: 800;
      }
      .connectionGrid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 14px;
        margin-top: 28px;
      }
      .mini {
        padding: 18px;
        border-radius: 14px;
        background: #fff;
        border: 1px solid rgba(31,89,83,.12);
        transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
      }
      .mini h3 {
        margin: 0;
        color: #17383b;
        font-size: 21px;
        line-height: 1.3;
      }
      .mini p {
        margin: 8px 0 0;
        color: #5e7576;
        font-size: 18px;
        line-height: 1.55;
        font-weight: 600;
      }
      .flow {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
      }
      .step {
        position: relative;
        padding: 24px;
        min-height: 160px;
        border-radius: 16px;
        background: #fff;
        border: 1px solid rgba(31,89,83,.12);
        transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
      }
      .step strong {
        display: inline-grid;
        place-items: center;
        width: 42px;
        height: 42px;
        margin-bottom: 18px;
        border-radius: 50%;
        color: #fff;
        background: #12877b;
      }
      .step p {
        margin: 0;
        color: #254b4c;
        font-size: 21px;
        line-height: 1.55;
        font-weight: 800;
      }
      .appearanceGrid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
      }
      .appearance {
        text-align: center;
        padding: 14px;
        border-radius: 14px;
        background: #fff;
        border: 1px solid rgba(31,89,83,.12);
        transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
      }
      .appearance img {
        width: 100%;
        height: 140px;
        object-fit: contain;
        display: block;
      }
      .appearance strong {
        display: block;
        margin-top: 8px;
        color: #17383b;
      }
      .behind {
        margin-top: 18px;
        padding: 18px;
        border-radius: 14px;
        background: rgba(18,135,123,.08);
        color: #31595a;
        line-height: 1.65;
        font-weight: 700;
      }
      .videoFrame {
        position: relative;
        overflow: hidden;
        border-radius: 22px;
        border: 1px solid rgba(31,89,83,.12);
        background: #17383b;
        box-shadow: 0 22px 50px rgba(21,83,78,.12);
        transition: transform .22s ease, box-shadow .22s ease;
      }
      .videoFrame:hover {
        transform: translateY(-3px);
        box-shadow: 0 28px 62px rgba(21,83,78,.16);
      }
      .videoFrame::before {
        content: "";
        display: block;
        padding-top: 56.25%;
      }
      .videoFrame iframe {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border: 0;
      }
      .faq {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
      }
      .faqItem {
        padding: 22px;
        border-radius: 14px;
        background: #fff;
        border: 1px solid rgba(31,89,83,.12);
        transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
      }
      .faqItem h3 {
        margin: 0;
        color: #17383b;
        font-size: 21px;
        line-height: 1.35;
      }
      .faqItem p {
        margin: 10px 0 0;
        color: #5e7576;
        font-size: 18px;
        line-height: 1.65;
        font-weight: 600;
      }
      .footer {
        padding: 42px 0 70px;
      }
      .contactPanel {
        padding: clamp(30px, 6vw, 62px);
        border-radius: 28px;
        color: #fff;
        background: #17383b;
        text-align: center;
        animation: riseIn .72s cubic-bezier(.2, .8, .2, 1) both;
      }
      .contactPanel h2 {
        max-width: 880px;
        margin: 0 auto;
        font-size: clamp(30px, 5vw, 54px);
        line-height: 1.12;
      }
      .contactPanel p {
        margin: 16px auto 0;
        max-width: 760px;
        color: rgba(255,255,255,.76);
        font-size: 21px;
        line-height: 1.65;
      }
      .contactPanel .ctaRow, .contactPanel .contactLinks {
        justify-content: center;
      }
      .contactPanel .contactLinks {
        margin-top: 12px;
      }
      .tagline {
        display: block;
        margin-top: 24px;
        color: rgba(255,255,255,.66);
        font-weight: 800;
      }
      @media (max-width: 900px) {
        .nav { display: none; }
        .heroGrid { grid-template-columns: 1fr; gap: 30px; }
        .productVisual { min-height: 340px; }
        .signalRing { width: min(72%, 340px); }
        .hubChip.family { left: 52px; top: 92px; }
        .hubChip.volunteer { right: 52px; top: 100px; }
        .hubChip.ngo { left: 48px; bottom: 92px; }
        .hubChip.community { right: 48px; bottom: 92px; }
        .quickPoints { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .grid3, .flow { grid-template-columns: 1fr; }
        .grid4, .connectionGrid, .appearanceGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }
      @media (max-width: 620px) {
        .wrap { width: min(100% - 22px, 1080px); }
        .topbarInner {
          min-height: 58px;
          gap: 8px;
          justify-content: flex-start;
        }
        .brand img { display: none; }
        .brand { font-size: 16px; }
        .langs {
          gap: 3px;
          flex-wrap: nowrap;
          margin-left: auto;
          min-width: 0;
        }
        .langBtn { padding: 8px 9px; font-size: 15px; }
        .topbar .navBtn,
        .topbar .langBtn,
        .topbar .brand {
          font-size: 16px;
        }
        .topbar .btn { display: none; }
        .hero { padding: 32px 0 28px; }
        h1 { font-size: clamp(34px, 12vw, 48px); max-width: 11ch; }
        .heroLead { font-size: 19px; line-height: 1.62; }
        .ctaRow, .contactLinks { align-items: stretch; width: 100%; }
        .ctaRow .btn, .contactLinks .btn { flex: 1 1 100%; }
        .quickPoints { grid-template-columns: 1fr; }
        .productVisual { min-height: 300px; padding: 18px; }
        .signalRing { width: min(72%, 246px); border-radius: 20px; }
        .signalRing::before { inset: 14px; border-radius: 16px; }
        .logoFrame { width: min(58%, 210px); }
        .hubChip { gap: 5px; padding: 8px 9px; font-size: 12px; }
        .hubChip.family { left: 12px; top: 82px; }
        .hubChip.volunteer { right: 12px; top: 88px; }
        .hubChip.ngo { left: 14px; bottom: 78px; }
        .hubChip.community { right: 14px; bottom: 78px; }
        .bubble { font-size: 16px; padding: 10px 12px; }
        .bubble.top { top: 18px; left: 16px; }
        .bubble.bottom { right: 16px; bottom: 28px; }
        .section { padding: 38px 0; scroll-margin-top: 70px; }
        .panel { padding: 24px 16px; border-radius: 18px; }
        .sectionIntro h2 { font-size: clamp(28px, 9vw, 38px); }
        .intro { font-size: 19px; }
        .problemList li, .safetyList li, .step p { font-size: 19px; }
        .connectionText { font-size: clamp(21px, 7vw, 29px); }
        .grid4, .connectionGrid, .appearanceGrid, .faq { grid-template-columns: 1fr; }
        .appearance img { height: 180px; }
        .footer { padding-bottom: 48px; }
        .contactPanel { border-radius: 20px; }
      }
      @keyframes riseIn {
        from { opacity: 0; transform: translateY(22px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes bubbleIn {
        from { opacity: 0; transform: translateY(10px) scale(.96); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes softPop {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes floatCard {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }
      @keyframes signalBreath {
        0%, 100% { opacity: .62; transform: scale(.985); }
        50% { opacity: 1; transform: scale(1.025); }
      }
      @keyframes chipIn {
        from { opacity: 0; transform: translateY(8px) scale(.96); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes chipFloat {
        0%, 100% { translate: 0 0; }
        50% { translate: 0 -5px; }
      }
      @media (prefers-reduced-motion: reduce) {
        * { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; }
      }
    `),

    h("header", { className: "topbar" },
      h("div", { className: "wrap topbarInner" },
        h("button", { type: "button", className: "brand navBtn", onClick: () => jump("hero"), "aria-label": "DoDo VoiceBox" },
          h("img", { src: LOGO, alt: "" }),
          h("span", null, "DoDo VoiceBox")
        ),
        h("nav", { className: "nav", "aria-label": "Main navigation" },
          NAV.map((item) => h("button", {
            key: item.id,
            type: "button",
            className: `navBtn ${active === item.id ? "active" : ""}`,
            onClick: () => jump(item.id)
          }, item.label[lang]))
        ),
        h("div", { className: "langs" },
          LANGS.map((item) => h("button", {
            key: item.key,
            type: "button",
            className: `langBtn ${lang === item.key ? "active" : ""}`,
            onClick: () => setLang(item.key),
            "aria-label": item.aria
          }, item.label)),
          h(CTA, { href: VIDEO_URL, variant: "primary", icon: "play", external: true }, tr("Watch video", "睇影片", "看视频")[lang])
        )
      )
    ),

    h("main", null,
      h("section", { id: "hero", className: "hero wrap" },
        h("div", { className: "heroGrid" },
          h("div", null,
            h("p", { className: "eyebrow" }, tr("DoDo VoiceBox", "DoDo VoiceBox", "DoDo VoiceBox")[lang]),
            h("h1", null, tr("Voice that connects older adults with community care", "用語音連結獨居長者與社區支援", "用语音连接独居长者与社区支持")[lang]),
            h("p", { className: "heroLead" }, tr(
              "DoDo VoiceBox greets older adults every day, keeps them company in Cantonese, and passes care signals to family, volunteers, or community teams.",
              "DoDo VoiceBox 每日主動問候長者，陪伴佢哋傾偈，並將需要關注嘅生活訊號交畀家人、義工或社區團隊跟進。",
              "DoDo VoiceBox 每天主动问候长者，陪伴他们聊天，并将需要关注的生活信号交给家人、义工或社区团队跟进。"
            )[lang]),
            h("div", { className: "ctaRow" },
              h(CTA, { href: VIDEO_URL, variant: "primary", icon: "play", external: true }, tr("Watch the intro video", "觀看介紹影片", "观看介绍视频")[lang]),
              h(CTA, { href: "#contact", variant: "secondary", icon: "arrow" }, tr("Contact us", "聯絡我們", "联系我们")[lang])
            ),
            h("div", { className: "quickPoints" },
              QUICK_POINTS.map((item, index) => h("button", {
                key: item.label.EN,
                type: "button",
                className: `quickPoint ${selectedQuick === index ? "active" : ""}`,
                onClick: () => setSelectedQuick(index),
                "aria-pressed": selectedQuick === index
              }, item.label[lang])),
              h("p", { className: "quickDetail", key: QUICK_POINTS[selectedQuick].detail.EN }, QUICK_POINTS[selectedQuick].detail[lang])
            )
          ),
          h(ProductVisual, { lang })
        )
      ),

      h("section", { id: "problem", "data-section": true, className: "section wrap" },
        h("div", { className: "panel" },
          h(SectionIntro, {
            lang,
            eyebrow: tr("The problem", "問題背景", "问题背景"),
            title: tr("Living alone can hide care needs", "獨居生活容易令需要關心嘅訊號被忽略", "独居生活容易让需要关心的信号被忽略"),
            body: tr("DoDo focuses on the simple gap between daily life and timely human support.", "DoDo 關注嘅係日常生活同及時支援之間嘅空隙。", "DoDo 关注的是日常生活和及时支持之间的空隙。")
          }),
          h("ul", { className: "problemList" },
            PROBLEMS.map((item) => h("li", { key: item.EN }, h(Icon, { name: "check" }), h("span", null, item[lang])))
          )
        )
      ),

      h("section", { id: "does", "data-section": true, className: "section wrap" },
        h(SectionIntro, {
          lang,
          centered: true,
          eyebrow: tr("What DoDo does", "DoDo 做啲乜", "DoDo 做什么"),
          title: tr("A simple voice bridge for daily care", "一個用語音連起日常照護嘅橋樑", "一个用语音连起日常照护的桥梁"),
          body: tr("It is not only for chatting. It helps people notice and follow up earlier.", "佢唔只係陪傾，而係幫大家更早察覺、更早跟進。", "它不只是陪聊，而是帮助大家更早察觉、更早跟进。")
        }),
        h("div", { className: "grid3" }, DOES.map((item) => h(SimpleCard, { key: item.title.EN, item, lang })))
      ),

      h("section", { id: "connection", "data-section": true, className: "section wrap" },
        h("div", { className: "panel green" },
          h("p", { className: "eyebrow" }, tr("Community connection", "社區連結", "社区连接")[lang]),
          h("p", { className: "connectionText" }, tr(
            "DoDo is not here to replace family, volunteers, or social workers. It helps everyone know earlier when an elder may need care, so community support can arrive sooner.",
            "DoDo 不是要取代家人、義工或社工，而是幫大家更早知道長者可能需要關心，令社區支援可以更快到位。",
            "DoDo 不是要取代家人、义工或社工，而是帮助大家更早知道长者可能需要关心，让社区支持可以更快到位。"
          )[lang]),
          h("div", { className: "connectionGrid" },
            CONNECTIONS.map((item) => h("article", { className: "mini", key: item.title.EN },
              h("h3", null, item.title[lang]),
              h("p", null, item.body[lang])
            ))
          )
        )
      ),

      h("section", { id: "flow", className: "section wrap" },
        h(SectionIntro, {
          lang,
          centered: true,
          eyebrow: tr("Simple care flow", "簡單照護流程", "简单照护流程"),
          title: tr("Three simple steps", "三步簡單跟進", "三步简单跟进")
        }),
        h("div", { className: "flow" },
          FLOW.map((item, index) => h("article", { className: "step", key: item.EN },
            h("strong", null, `0${index + 1}`),
            h("p", null, item[lang])
          ))
        )
      ),

      h("section", { id: "safety", className: "section wrap" },
        h("div", { className: "panel" },
          h(SectionIntro, {
            lang,
            eyebrow: tr("Trust and safety", "信任與安全", "信任与安全"),
            title: tr("Technology supports people. People still decide", "科技係支援人，最後仍然由人判斷", "科技是支持人，最后仍然由人判断")
          }),
          h("ul", { className: "safetyList" },
            SAFETY.map((item) => h("li", { key: item.EN }, h(Icon, { name: "shield" }), h("span", null, item[lang])))
          )
        )
      ),

      h("section", { id: "appearance", className: "section wrap" },
        h("div", { className: "panel warm" },
          h(SectionIntro, {
            lang,
            eyebrow: tr("Product appearance", "產品外觀", "产品外观"),
            title: tr("Friendly forms make technology easier to accept", "親切外觀令長者更容易接受科技", "亲切外观让长者更容易接受科技"),
            body: tr("The forms are not about making DoDo a toy. They make it feel like a warm companion at home.", "重點唔係玩具化，而係令 DoDo 感覺似一個親切嘅陪伴物。", "重点不是玩具化，而是让 DoDo 感觉像一个亲切的陪伴物。")
          }),
          h("div", { className: "appearanceGrid" },
            APPEARANCES.map((item) => h("article", { className: "appearance", key: item.name.EN },
              h("img", { src: item.img, alt: item.name[lang] }),
              h("strong", null, item.name[lang])
            ))
          ),
          h("div", { className: "behind" }, tr(
            "Behind the scenes: DoDo uses voice interaction, simple signal review, and human follow-up routing. The technical layer stays in the background.",
            "背後點運作：DoDo 有語音互動、簡單訊號整理同人手跟進分流；技術留喺背後，照護先係重點。",
            "背后如何运作：DoDo 有语音互动、简单信号整理和人工跟进分流；技术留在背后，照护才是重点。"
          )[lang])
        )
      ),

      h("section", { id: "video", "data-section": true, className: "section wrap" },
        h(SectionIntro, {
          lang,
          centered: true,
          eyebrow: tr("Video demo", "影片示範", "视频示范"),
          title: tr("Understand the DoDo VoiceBox project in 5 minutes", "用 5 分鐘了解 DoDo VoiceBox 計劃", "用 5 分钟了解 DoDo VoiceBox 项目"),
          body: tr("Watch the short introduction, then contact us if DoDo may help your family or community.", "先睇短片了解概念，如果 DoDo 可能幫到你嘅家庭或社區，歡迎聯絡我哋。", "先看短片了解概念，如果 DoDo 可能帮到你的家庭或社区，欢迎联系我们。")
        }),
        h("div", { className: "videoFrame" },
          h("iframe", {
            src: VIDEO_EMBED,
            title: "DoDo VoiceBox introduction video",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            allowFullScreen: true
          })
        ),
        h("div", { className: "ctaRow", style: { justifyContent: "center" } },
          h(CTA, { href: VIDEO_URL, variant: "secondary", icon: "play", external: true }, tr("Open on YouTube", "喺 YouTube 開啟", "在 YouTube 打开")[lang])
        )
      ),

      h("section", { id: "faq", className: "section wrap" },
        h(SectionIntro, {
          lang,
          centered: true,
          eyebrow: tr("FAQ", "常見問題", "常见问题"),
          title: tr("Simple answers", "簡單回答幾個常見問題", "简单回答几个常见问题")
        }),
        h("div", { className: "faq" },
          FAQ.map((item) => h("article", { className: "faqItem", key: item.q.EN },
            h("h3", null, item.q[lang]),
            h("p", null, item.a[lang])
          ))
        )
      )
    ),

    h("footer", { id: "contact", "data-section": true, className: "footer wrap" },
      h("div", { className: "contactPanel" },
        h("h2", null, tr("Want to see how DoDo can help a family or community?", "想了解 DoDo 點樣幫到家庭或社區？", "想了解 DoDo 如何帮助家庭或社区？")[lang]),
        h("p", null, tr("Watch the introduction video or contact the DoDo team directly.", "可以先觀看介紹影片，或者直接聯絡 DoDo 團隊。", "可以先观看介绍视频，或者直接联系 DoDo 团队。")[lang]),
        h("div", { className: "ctaRow" },
          h(CTA, { href: VIDEO_URL, variant: "primary", icon: "play", external: true }, tr("Watch intro video", "觀看介紹影片", "观看介绍视频")[lang])
        ),
        h(ContactLinks, { lang }),
        h("span", { className: "tagline" }, tr("For the ones who raised us.", "獻畀曾經照顧我哋嘅人。", "献给曾经照顾我们的人。")[lang])
      )
    )
  );
}

export default DodoFinal;
