// =============================================================================
// DoDo VoiceBox — 網站 claims 機器 guard（v6.1 re-pin，2026-07-06）
//   1. PIN — 批准文案一字不差；改一個字即紅，要有意識重 pin。
//   2. BAN — 四條 hard line＋文風＋情感語域禁詞（v5 新增），白名單改為區域制：
//      平安鐘只准出現喺 COMPARE 區（owner「兩樣嘢」框架）。
//   3. SYNC — 每個 tr() 三語齊全。
//   4. LABEL — 裁切預覽＋「產品介面預覽 · 開發中版本」標示。
// 情感語域規則（owner v6.1 裁定）：准用 了解／留意／關心／觀察（觀察係產品自身
// observe-only 詞彙）；禁 檢測／監察／監測／分析／評估 語域。
// 用法：npm run check:content
// =============================================================================

import { readFile } from "node:fs/promises";

const content = await readFile(new URL("../content.js", import.meta.url), "utf8");
const launch = await readFile(new URL("../dodo-launch.js", import.meta.url), "utf8");
const indexHtml = await readFile(new URL("../index.html", import.meta.url), "utf8");
const failures = [];

const pinnedPhrases = [
  // Hero（v5，owner 批准）
  "主動關心父母心情嘅公仔",
  "主动关心父母心情的公仔",
  "A companion that checks in on your parents.",
  "幫父母日常生活、用廣東話陪佢哋傾偈嘅小工具",
  "令你留意到父母嘅心情變化",
  "尊重父母嘅私隱同意願。",
  // 文風樣板
  "開口講嘢，就係全部操作。",
  // 創辦人故事 timeline（owner-attested）
  "針對香港長者嘅孤獨問題，DoDo 嘅諗法誕生。",
  "中途一次故障，成個系統要刪除重建——我哋由零再嚟一次。",
  "走訪多位教授同專家",
  "由三月到而家，日日喺屋企真機傾。",
  "獲嶺南大學 IIF 撥款 HK$30,000，研發本產品。",
  "嶺南大學 IIF 資助已經落實",
  "A HK$30,000 grant from Lingnan University's IIF",
  "逐條對照 .gov.hk 官方頁人手核實",
  "積極尋找試點合作同夥伴，收集意見，完善產品。",
  // 核心 trust claims（同意機制原封不動——owner v5 3d 驗證項）
  "核實先講，過期寧靜",
  "大約數畀長者，準確數畀照顧者",
  "對話原文一概不存",
  "由父母同意開始",
  "預設係拒絕",
  // COMPARE（owner v5 兩樣嘢框架）
  "DoDo 同平安鐘，係兩樣嘢",
  "平常每一日，主動開口關心。",
  "唔會取代平安鐘，亦唔係醫療器械",
  // 素材標示＋團隊＋footer
  "廣東話 · 開口就傾",
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
  failures.push(`COMPARE 區平安鐘出現 ${alarmCount} 次（上限 8）——提防敘事膨脹`);
}

const banned = [
  // hard line 1 — 醫療/監測/緊急
  "平安鐘", "平安钟", "跌倒", "覆診", "复诊", "食藥", "食药", "服藥", "服药", "攞藥", "拿药", "取药",
  "監測", "监测", "監察", "监察", "診斷", "诊断", "抑鬱", "抑郁", "認知障礙", "认知障碍",
  "emergency", "SOS button", "fall detection", "diagnos", "monitor",
  // v5/v6.1 情感語域禁詞（owner 明令；bare 分析/評估/檢測 都唔准）
  "情緒分析", "情绪分析", "情緒監測", "情绪监测", "情緒評估", "情绪评估",
  "心理分析", "遠程照顧", "远程照顾", "emotion analysis", "emotional assessment",
  "分析", "评估", "評估", "檢測", "检测",
  // hard line 2 — 假現況事實／benchmark
  "準確率", "准确率", "accuracy", "數據留喺香港", "数据留在香港", "不出香港",
  // hard line 3 — 假社會證明
  "用戶見證", "位長者用緊", "testimonial",
  // hype＋文風禁詞
  "革命性", "顛覆", "颠覆", "世界級", "世界级", "game-changing", "revolutionary",
  "唔使", "無需", "无需", "不用",
  // v5 register 鎖：全站一律 父母
  "爸媽", "爸妈",
  // §6 永不出街
  "OpenAI", "Qwen", "ESP32", "RBAC", "TLS",
];

const scanTargets = [
  ["content.js（COMPARE 區除外）", contentOutside],
  ["dodo-launch.js", launch],
  ["index.html", indexHtml],
];

for (const [name, raw] of scanTargets) {
  for (const term of banned) {
    if (raw.toLowerCase().includes(term.toLowerCase())) {
      failures.push(`BAN 禁詞出現喺 ${name}: "${term}"`);
    }
  }
}

// COMPARE 區內都要掃（除咗平安鐘本身）
for (const term of banned) {
  if (term === "平安鐘" || term === "平安钟") continue;
  if (compareBlock.toLowerCase().includes(term.toLowerCase())) {
    failures.push(`BAN 禁詞出現喺 COMPARE 區: "${term}"`);
  }
}

const exclaims = content.match(/[!！](?=["'」』])/g) || [];
if (exclaims.length > 0) {
  failures.push(`BAN 文案內出現感嘆號 ×${exclaims.length}`);
}

const trCalls = content.match(/tr\(\s*\n?\s*"/g) || [];
const emptyLang = content.match(/tr\(\s*"",|,\s*"",|,\s*""\s*,?\s*\)/g) || [];
if (trCalls.length < 40) {
  failures.push(`SYNC 異常：tr() 數量得 ${trCalls.length}，疑似文案被大量刪除`);
}
if (emptyLang.length > 0) {
  failures.push(`SYNC 失守：有 ${emptyLang.length} 個 tr() 存在空語言欄`);
}

const CROP_FILES = [
  "care-crop-summary.webp",
  "care-crop-status.webp",
  "care-crop-trend.webp",
];
for (const file of CROP_FILES) {
  if (!content.includes(file)) {
    failures.push(`LABEL/素材：裁切預覽未被引用（${file}）`);
  }
}
for (const file of ["dodo-care-console-overview.png", "dodo-care-console-reminders.png", "dodo-care-console-proactive.png"]) {
  if (content.includes(file) || launch.includes(file)) {
    failures.push(`素材違規：全版截圖被引用（${file}）——只准裁切預覽出街`);
  }
}
if (!content.includes("產品介面預覽 · 開發中版本")) {
  failures.push("LABEL 失守：介面預覽缺「產品介面預覽 · 開發中版本」標示");
}
if (/lingnan|嶺南/i.test(launch)) {
  failures.push("素材違規：dodo-launch.js 出現嶺南字眼——大學只准喺文案文字提及");
}

if (failures.length > 0) {
  console.error("網站文案 guard 檢查失敗：");
  for (const failure of failures) console.error(`- ${failure}`);
  console.error("");
  console.error("若屬有意改動：文案改動須過 claims review，然後先更新本 guard 嘅 pin 清單。");
  process.exit(1);
}

console.log(`PIN ${pinnedPhrases.length} 句批准文案完好`);
console.log(`BAN ${banned.length} 個禁詞零出現（平安鐘限 COMPARE 區，現 ${alarmCount}/8）`);
console.log(`SYNC ${trCalls.length} 個 tr() 三語齊全`);
console.log("LABEL 裁切預覽＋標示齊；無全版截圖；無大學 logo");
console.log("網站文案 guard 全部通過。");
