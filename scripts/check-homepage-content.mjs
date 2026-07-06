// =============================================================================
// DoDo VoiceBox — 網站 claims 機器檢查（v8 re-pin，2026-07-06）
//   1. PIN — 批准文案一字不差。
//   2. BAN — 四條 hard line＋情感語域＋文風＋工程語域禁詞（v7.1）。
//   3. RETIRED — 退役講法永不重現（開口就傾、過期寧靜、機器防護等）。
//   4. SYNC — tr() 三語齊全；LABEL — 素材標示。
// 文風法（owner v7/v7.1）：香港人同屋企人解釋嘢嘅口語；唔准自創四字格；
// 唔准工程語域。情感語域：准 了解／留意／關心／觀察。
// 用法：npm run check:content
// =============================================================================

import { readFile } from "node:fs/promises";

const content = await readFile(new URL("../content.js", import.meta.url), "utf8");
const launch = await readFile(new URL("../dodo-launch.js", import.meta.url), "utf8");
const indexHtml = await readFile(new URL("../index.html", import.meta.url), "utf8");
const failures = [];

const pinnedPhrases = [
  // Hero（v6.1）
  "主動關心父母心情嘅公仔",
  "主动关心父母心情的公仔",
  "A companion that checks in on your parents.",
  "用廣東話陪父母傾偈嘅小工具",
  "日日傾計，你會留意到父母嘅心情變化。",
  "人喺外地，一樣關心到。",
  "佢尊重父母嘅私隱同意願。",
  "會主動關心",
  "留意到心情變化",
  "日常提醒",
  "廣東話 · 主動同你講早晨",
  // 體驗區（v8 owner verbatim）
  "DoDo 嘅日常運作",
  "DoDo 只會答核實過嘅資料，絕唔亂噏。",
  "過咗期就唔會再講。",
  "約咗人飲茶、出門帶鎖匙、記得飲水",
  "DoDo 到時就用廣東話提返佢。",
  // 文風樣板
  "開口講嘢，就係全部操作。",
  "開口就用得",
  // 創辦人故事 timeline（owner-attested）
  "針對香港長者嘅孤獨問題，DoDo 嘅諗法誕生。",
  "中途一次故障，成個系統要刪除重建——我哋由零再嚟一次。",
  "走訪多位教授同專家",
  "由三月到而家，日日喺屋企真機傾。",
  "獲嶺南大學 IIF 撥款 HK$30,000，研發本產品。",
  "嶺南大學 IIF 資助已經落實",
  "A HK$30,000 grant from Lingnan University's IIF",
  "逐條對照 .gov.hk 官方頁人手核實",
  "會一直自己更新。創辦人日日喺屋企實測緊。",
  "積極尋找試點合作同夥伴，收集意見，完善產品。",
  // 點解可信（v7 owner 文案）
  "誠實同準確，係 DoDo 嘅核心。",
  "以下每一條，都係我哋起產品嘅原則。",
  "福利資料核實咗先講",
  "核實咗先會講。一過期就取消，我哋自己更新。",
  "照顧者攞呢啲資料去申請社會資源，一樣用得住。",
  "DoDo 無廣告",
  "大約數畀長者，準確數畀照顧者",
  "對話原文一概不存",
  "由父母同意開始",
  "預設係拒絕",
  // 比較區（v7 逐項陪伴軸）
  "同市面產品有咩唔同",
  "主動關心，係 DoDo 同其他產品最大嘅分別。",
  "唔會取代平安鐘，亦唔係醫療器械",
  // 願景區（v7；義工句只准 intent 語氣，pin 鎖住 owner 措辭）
  "我哋想用一部細細嘅裝置，連結長者同照顧者，連結長者同社區。",
  "我哋計劃同義工機構合作，目標係每個月都有真人探訪同陪伴",
  "機器陪日常，人情味不可代替",
  // 素材＋團隊＋footer
  "產品介面預覽 · 開發中版本",
  "一個香港早期產品項目",
  "等 DoDo 幫你，日日陪住父母。",
  "獻畀曾經照顧我哋嘅人。",
];

for (const phrase of pinnedPhrases) {
  if (!content.includes(phrase)) {
    failures.push(`PIN 失守（批准文案被改動）: "${phrase}"`);
  }
}

// --- RETIRED：退役講法，永不重現（v7-6／v7.1-4）------------------------------------

const retired = [
  "一日之間", "一日之间",
  "開口就傾", "开口就聊",
  "過期寧靜", "过期安静",
  "機器防護", "机器防护", "防護上鎖", "防护上锁",
  "寫咗入產品同流程",
];

// --- COMPARE 區切割：平安鐘只准喺呢度出現 --------------------------------------------

const compStart = content.indexOf("export const COMPARE");
const compEnd = content.indexOf("export const", compStart + 10);
if (compStart < 0 || compEnd < 0) {
  failures.push("結構失守：搵唔到 COMPARE 區");
}
const compareBlock = compStart >= 0 ? content.slice(compStart, compEnd) : "";
const contentOutside = compStart >= 0 ? content.slice(0, compStart) + content.slice(compEnd) : content;

const alarmCount = (compareBlock.match(/平安鐘|平安钟/g) || []).length;
if (alarmCount > 8) {
  failures.push(`COMPARE 區平安鐘出現 ${alarmCount} 次（上限 8）`);
}

const banned = [
  // hard line 1 — 醫療/監測/緊急
  "平安鐘", "平安钟", "跌倒", "覆診", "复诊", "食藥", "食药", "服藥", "服药", "攞藥", "拿药", "取药", "藥物", "药物",
  "監測", "监测", "監察", "监察", "診斷", "诊断", "抑鬱", "抑郁", "認知障礙", "认知障碍",
  "emergency", "SOS button", "fall detection", "diagnos", "monitor",
  // 情感語域（owner v5/v6.1）
  "情緒分析", "情绪分析", "情緒監測", "情绪监测", "情緒評估", "情绪评估",
  "心理分析", "遠程照顧", "远程照顾", "emotion analysis", "emotional assessment",
  "分析", "评估", "評估", "檢測", "检测",
  // v7.1 工程語域（user-facing 唔准）
  "機制", "机制", "系統會", "系統就", "系统会", "系统就",
  "數據庫", "数据库", "知識庫", "知识库", "核實紀錄", "核实记录",
  "流程", "演算法", "算法", "模型", "監控", "监控", "佇列", "队列",
  "技術紀錄", "技术记录", "roadmap", "algorithm", "database",
  "fail-safe", "fail-closed", "lockfile", "machine guard",
  // 義工句只准 intent；交付動詞禁
  "提供義工", "提供义工",
  // hard line 2 — 假現況事實／benchmark
  "準確率", "准确率", "accuracy", "數據留喺香港", "数据留在香港", "不出香港",
  // hard line 3 — 假社會證明
  "用戶見證", "位長者用緊", "testimonial",
  // hype＋文風
  "革命性", "顛覆", "颠覆", "世界級", "世界级", "game-changing", "revolutionary",
  "唔使", "無需", "无需", "不用",
  // register 鎖
  "爸媽", "爸妈",
  // §6 永不出街
  "OpenAI", "Qwen", "ESP32", "RBAC", "TLS",
];

const allBanned = [...banned, ...retired];

// v8：提一提 只准喺 body；hero 區＋所有 title 一律唔准
const heroScope = content.slice(content.indexOf("export const HERO"), content.indexOf("export const EXPERIENCE"));
const titleScope = (content.match(/title: tr\([\s\S]*?\),\n/g) || []).join("");
for (const t of ["提一提"]) {
  if (heroScope.includes(t) || titleScope.includes(t)) {
    failures.push(`RETIRED（headings/hero 範圍）出現: "${t}"`);
  }
}

const scanTargets = [
  ["content.js（COMPARE 區除外）", contentOutside],
  ["dodo-launch.js", launch],
  ["index.html", indexHtml],
];

for (const [name, raw] of scanTargets) {
  for (const term of allBanned) {
    if (raw.toLowerCase().includes(term.toLowerCase())) {
      failures.push(`BAN/RETIRED 出現喺 ${name}: "${term}"`);
    }
  }
}
for (const term of allBanned) {
  if (term === "平安鐘" || term === "平安钟") continue;
  if (compareBlock.toLowerCase().includes(term.toLowerCase())) {
    failures.push(`BAN/RETIRED 出現喺 COMPARE 區: "${term}"`);
  }
}

const exclaims = content.match(/[!！](?=["'」』])/g) || [];
if (exclaims.length > 0) {
  failures.push(`BAN 文案內出現感嘆號 ×${exclaims.length}`);
}

const trCalls = content.match(/tr\(\s*\n?\s*"/g) || [];
const emptyLang = content.match(/tr\(\s*"",|,\s*"",|,\s*""\s*,?\s*\)/g) || [];
if (trCalls.length < 40) {
  failures.push(`SYNC 異常：tr() 數量得 ${trCalls.length}`);
}
if (emptyLang.length > 0) {
  failures.push(`SYNC 失守：有 ${emptyLang.length} 個 tr() 存在空語言欄`);
}

const CROP_FILES = ["care-crop-summary.webp", "care-crop-status.webp", "care-crop-trend.webp"];
for (const file of CROP_FILES) {
  if (!content.includes(file)) failures.push(`素材：裁切預覽未被引用（${file}）`);
}
for (const file of ["dodo-care-console-overview.png", "dodo-care-console-reminders.png", "dodo-care-console-proactive.png"]) {
  if (content.includes(file) || launch.includes(file)) {
    failures.push(`素材違規：全版截圖被引用（${file}）`);
  }
}
if (!content.includes("產品介面預覽 · 開發中版本")) {
  failures.push("LABEL 失守：介面預覽缺標示");
}
if (/lingnan|嶺南/i.test(launch)) {
  failures.push("素材違規：dodo-launch.js 出現嶺南字眼");
}

if (failures.length > 0) {
  console.error("網站文案檢查失敗：");
  for (const failure of failures) console.error(`- ${failure}`);
  console.error("");
  console.error("若屬有意改動：文案改動須過 claims review，然後先更新 pin 清單。");
  process.exit(1);
}

console.log(`PIN ${pinnedPhrases.length} 句批准文案完好`);
console.log(`BAN ${banned.length} 禁詞＋RETIRED ${retired.length} 退役講法：零出現（平安鐘限 COMPARE 區 ${alarmCount}/8）`);
console.log(`SYNC ${trCalls.length} 個 tr() 三語齊全`);
console.log("素材標示齊；無全版截圖；無大學 logo");
console.log("網站文案檢查全部通過。");
