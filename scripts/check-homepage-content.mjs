// =============================================================================
// DoDo VoiceBox — 網站 claims 機器 guard（v4 re-pin，2026-07-06）
//   1. PIN — 批准文案一字不差；改一個字即紅，要有意識重 pin。
//   2. BAN — 四條 hard line 禁詞＋文風禁詞（負面鏈式句），白名單除外。
//   3. SYNC — 每個 tr() 三語齊全。
//   4. LABEL — 介面預覽必須帶「產品介面預覽 · 開發中版本」標示，截圖必須被引用。
// 用法：npm run check:content
// =============================================================================

import { readFile } from "node:fs/promises";

const content = await readFile(new URL("../content.js", import.meta.url), "utf8");
const launch = await readFile(new URL("../dodo-launch.js", import.meta.url), "utf8");
const indexHtml = await readFile(new URL("../index.html", import.meta.url), "utf8");
const failures = [];

const pinnedPhrases = [
  "一隻會主動開口嘅廣東話公仔，陪爸媽過每一日。",
  "一只会主动开口的粤语陪伴公仔，陪爸妈过好每一天。",
  "A Cantonese companion that starts the conversation — keeping Mum and Dad company every day.",
  "DoDo 會同爸媽講早晨、陪佢哋傾偈，仲會輕輕提一提：飲啖水、帶鎖匙。",
  "經人手對照官方網站核實",
  "爸媽同意，先會同你分享關注。",
  "開口講嘢，就係全部操作。",
  "針對香港長者嘅孤獨問題，DoDo 嘅諗法誕生。",
  "中途一次故障，成個系統要刪除重建——我哋由零再嚟一次。",
  "走訪多位教授同專家",
  "由三月到而家，日日喺屋企真機傾。",
  "獲嶺南大學 IIF 撥款 HK$30,000，研發本產品。",
  "嶺南大學 IIF 資助已經落實",
  "A HK$30,000 grant from Lingnan University's IIF",
  "逐條對照 .gov.hk 官方頁人手核實",
  "積極尋找試點合作同夥伴，收集意見，完善產品。",
  "核實先講，過期寧靜",
  "大約數畀長者，準確數畀照顧者",
  "對話原文一概不存",
  "預設係拒絕",
  "唔係平安鐘",
  "唔係醫療器械",
  "唔會代替你",
  "產品介面預覽 · 開發中版本",
  "一個香港早期產品項目",
  "等 DoDo 幫你，日日陪住爸媽。",
  "獻畀曾經照顧我哋嘅人。",
];

for (const phrase of pinnedPhrases) {
  if (!content.includes(phrase)) {
    failures.push(`PIN 失守（批准文案被改動）: "${phrase}"`);
  }
}

const WHITELIST = [
  "唔係平安鐘",
  "不是平安钟",
];

const banned = [
  "平安鐘", "平安钟", "跌倒", "覆診", "复诊", "食藥", "食药", "服藥", "服药", "攞藥", "拿药", "取药",
  "監測", "监测", "監察", "监察", "診斷", "诊断", "抑鬱", "抑郁", "認知障礙", "认知障碍",
  "emergency", "SOS button", "fall detection", "diagnos", "monitor",
  "準確率", "准确率", "accuracy", "數據留喺香港", "数据留在香港", "不出香港",
  "用戶見證", "位長者用緊", "testimonial",
  "革命性", "顛覆", "颠覆", "世界級", "世界级", "game-changing", "revolutionary",
  "唔使", "無需", "无需", "不用",
  "OpenAI", "Qwen", "ESP32", "RBAC", "TLS",
];

const scanTargets = [
  ["content.js", content],
  ["dodo-launch.js", launch],
  ["index.html", indexHtml],
];

for (const [name, raw] of scanTargets) {
  let sanitized = raw;
  for (const allow of WHITELIST) sanitized = sanitized.split(allow).join("");
  for (const term of banned) {
    if (sanitized.toLowerCase().includes(term.toLowerCase())) {
      failures.push(`BAN 禁詞出現喺 ${name}: "${term}"`);
    }
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
    failures.push(`LABEL/素材：裁切預覽未被引用（${file}）——v4 規定照顧者區展示三張 crop`);
  }
}
// v4：全版 dashboard 截圖唔准再上 page（減少內部 UI 字眼曝光，等 post-gate review）
for (const file of ["dodo-care-console-overview.png", "dodo-care-console-reminders.png", "dodo-care-console-proactive.png"]) {
  if (content.includes(file) || launch.includes(file)) {
    failures.push(`素材違規：全版截圖被引用（${file}）——v4 只准裁切預覽出街`);
  }
}
if (!content.includes("產品介面預覽 · 開發中版本")) {
  failures.push("LABEL 失守：介面預覽缺「產品介面預覽 · 開發中版本」標示");
}
if (/lingnan|嶺南/i.test(launch)) {
  failures.push("素材違規：dodo-launch.js 出現嶺南字眼——大學只准喺文案（content.js）文字提及，唔准 logo/素材");
}

if (failures.length > 0) {
  console.error("網站文案 guard 檢查失敗：");
  for (const failure of failures) console.error(`- ${failure}`);
  console.error("");
  console.error("若屬有意改動：文案改動須過 claims review，然後先更新本 guard 嘅 pin 清單。");
  process.exit(1);
}

console.log(`PIN ${pinnedPhrases.length} 句批准文案完好`);
console.log(`BAN ${banned.length} 個禁詞零出現（白名單 ${WHITELIST.length} 句否認句除外）`);
console.log(`SYNC ${trCalls.length} 個 tr() 三語齊全`);
console.log("LABEL 介面預覽有標示；三張截圖已引用；無大學 logo");
console.log("網站文案 guard 全部通過。");
