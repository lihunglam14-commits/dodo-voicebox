// =============================================================================
// DoDo VoiceBox — 網站 claims 機器 guard（Phase 4，2026-07-06 重寫）
// 目的：
//   1. PIN — 已批准嘅關鍵文案一字不差；改咗一個字都會紅，要有意識重 pin。
//   2. BAN — 四條 hard line 嘅禁詞唔准喺任何文案出現（白名單除外）。
//   3. SYNC — 每個 tr() tuple 三語齊全。
//   4. LABEL — 概念素材必須帶「示意圖」標示。
// 依據：docs/CLAIMS_AUDIT_2026-07-06.md（v2）＋ docs/REDESIGN_PHASE0_PHASE1.md
// 用法：npm run check:content
// =============================================================================

import { readFile } from "node:fs/promises";

const content = await readFile(new URL("../content.js", import.meta.url), "utf8");
const launch = await readFile(new URL("../dodo-launch.js", import.meta.url), "utf8");
const indexHtml = await readFile(new URL("../index.html", import.meta.url), "utf8");
const failures = [];

// --- 1 · PIN：owner 批准文案（2026-07-06，方案 A）一字不差 ----------------------

const pinnedPhrases = [
  // Hero H1（三語）
  "一隻會主動開口嘅廣東話公仔，陪爸媽過每一日。",
  "一只会主动开口的粤语陪伴公仔，陪爸妈过好每一天。",
  "A Cantonese companion that starts the conversation — keeping Mum and Dad company every day.",
  // Hero lead 核心句（TC）
  "你返唔到去嘅日子，DoDo 會同爸媽講早晨、陪佢哋傾偈，輕輕提一提飲水、帶鎖匙呢啲小事。",
  "經人手對照官方網站核實",
  "喺爸媽同意之下，先會同你分享關注。",
  // Status band（progress layer 唯一階段標示）
  "2026年7月 · 創辦人真機測試中 · 試點籌備中",
  "July 2026 · Founder testing on the real device · Pilot in preparation",
  // 核心 trust claims（truth sheet §5 ✅ 行）
  "核實先講，過期寧靜",
  "大約數畀長者，準確數畀照顧者",
  "日誌不儲存對話原文",
  "無廣告，唔靠你用得耐",
  "預設係拒絕",
  // 唔係乜（honest block —— 三連否認）
  "唔係平安鐘",
  "唔係醫療器械",
  "連結人，唔係取代人",
  // 里程碑事實（truth sheet §2）
  "逐條對照 .gov.hk 官方頁核實",
  "創辦人真機實測開始",
  // 團隊講法（§5 ⚠ 准用措辭）
  "一個香港早期產品項目",
  // 獻辭
  "獻畀曾經照顧我哋嘅人。",
];

for (const phrase of pinnedPhrases) {
  if (!content.includes(phrase)) {
    failures.push(`PIN 失守（批准文案被改動）: "${phrase}"`);
  }
}

// --- 2 · BAN：hard-line 禁詞（掃 content.js＋dodo-launch.js＋index.html）----------
// 白名單：喺「DoDo 唔係乜」否認句入面嘅指定字眼先准出現。

const WHITELIST = [
  "唔係平安鐘",   // NOT_DODO 否認句（owner 指定）
  "不是平安钟",   // SC 否認句
];

const banned = [
  // hard line 1 — 醫療/監測/緊急
  "平安鐘", "平安钟", "跌倒", "覆診", "复诊", "食藥", "食药", "服藥", "服药", "攞藥", "拿药", "取药",
  "監測", "监测", "監察", "监察", "診斷", "诊断", "抑鬱", "抑郁", "認知障礙", "认知障碍",
  "emergency", "SOS button", "fall detection", "diagnos", "monitor",
  // hard line 2 — 假現況事實／benchmark
  "準確率", "准确率", "accuracy", "數據留喺香港", "数据留在香港", "不出香港",
  // hard line 3 — 假社會證明（常見字眼）
  "用戶見證", "位長者用緊", "testimonial",
  // hype 禁詞（copy rules）
  "革命性", "顛覆", "颠覆", "世界級", "世界级", "game-changing", "revolutionary",
  // §6 永不出街（vendor/內部）
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
    const hay = sanitized.toLowerCase();
    const needle = term.toLowerCase();
    if (hay.includes(needle)) {
      failures.push(`BAN 禁詞出現喺 ${name}: "${term}"`);
    }
  }
}

// 感嘆號（body copy 唔准；掃 tr() 字串內容）
const exclaims = content.match(/[!！](?=["'」』])/g) || [];
if (exclaims.length > 0) {
  failures.push(`BAN 文案內出現感嘆號 ×${exclaims.length}（copy rule：body copy 無感嘆號）`);
}

// --- 3 · SYNC：每個 tr() 三語齊全（粗檢）--------------------------------------------

const trCalls = content.match(/tr\(\s*\n?\s*"/g) || [];
const emptyLang = content.match(/tr\(\s*"",|,\s*"",|,\s*""\s*,?\s*\)/g) || [];
if (trCalls.length < 40) {
  failures.push(`SYNC 異常：tr() 數量得 ${trCalls.length}，疑似文案被大量刪除`);
}
if (emptyLang.length > 0) {
  failures.push(`SYNC 失守：有 ${emptyLang.length} 個 tr() 存在空語言欄`);
}

// --- 4 · LABEL：概念素材必須標示意圖；舊 Care Console 截圖唔准再被引用 --------------

if (!content.includes("示意圖")) {
  failures.push('LABEL 失守：概念素材缺「示意圖」標示');
}
for (const file of ["dodo-care-console-overview.png", "dodo-care-console-reminders.png", "dodo-care-console-proactive.png"]) {
  if (content.includes(file) || launch.includes(file)) {
    failures.push(`LABEL/素材違規：舊 Care Console 截圖被引用（${file}）——owner 裁決：落架等重出`);
  }
}

// --- 結果 --------------------------------------------------------------------------

if (failures.length > 0) {
  console.error("網站文案 guard 檢查失敗：");
  for (const failure of failures) console.error(`- ${failure}`);
  console.error("\n若屬有意改動：文案改動須過 claims review，然後先更新本 guard 嘅 pin 清單。");
  process.exit(1);
}

console.log(`✓ PIN ${pinnedPhrases.length} 句批准文案完好`);
console.log(`✓ BAN ${banned.length} 個禁詞零出現（白名單 ${WHITELIST.length} 句否認句除外）`);
console.log(`✓ SYNC ${trCalls.length} 個 tr() 三語齊全`);
console.log("✓ LABEL 概念素材有示意圖標示；舊截圖冇被引用");
console.log("\n網站文案 guard 全部通過。");
