# Redesign — Phase 0 特徵報告 ＋ Phase 1 結構/Hero 提案
**日期：** 2026-07-06 ｜ **狀態：** ✅ 已批准（owner）並已實施（Phase 2–4 完成，commit f42f67d）
**批准內容：** IA 十區照做｜Hero 方案 A｜Care Console 截圖暫時落架等重出
**框架：** VISION site（兩層）；hard lines ×4；詳見 `CLAIMS_AUDIT_2026-07-06.md` v2
**未解決 escalation：** 截圖重出（改字眼）｜YouTube 簡報過檢先再掛｜如加表格先攞 PICS 措辭

---

## PHASE 0 — 網站特徵（read-only 已核實）

**Stack：** Vite 7.2 ＋ React 19.2（唯二 dependencies）。無 router、無 CSS framework、
無 tracker/analytics。單頁 SPA。**唔需要新框架** —— 現有 stack 完全夠做本次 redesign。

**檔案地圖：**

| 檔案 | 角色 |
|---|---|
| `dodo-launch.js`（2519 行） | **全部嘢喺呢度**：三語文案（`tr(EN, TC, SC)` tuple）＋全部 CSS（template string）＋全部 markup（`createElement`）。`dodo-launch.jsx` 只係 re-export shim |
| `main.js` | mount 入口（6 行） |
| `index.html` | meta/OG/title —— **只有英文、唔跟語言切換**（已知 gap）；favicon 指 `api/files/logo_dodo_20260412.png` |
| `public/assets/` | 4 公仔、3 張 Care Console 截圖、workflow 圖、og-image |
| 根目錄 `*.png`、`api/files/` | 鬆散重複素材（公仔原圖、新舊 logo）——清理候選 |
| `scripts/check-homepage-content.mjs` | 文案機器 guard；**而家 fail 緊 10 項**（pin 住舊版文案），Phase 4 重寫 |
| `dist/` | build 產物，**有 commit 入 repo**，而家係舊 build |
| `.github/workflows/deploy.yml` | push main → `npm ci` → `npm run build` → GitHub Pages（`base: /dodo-voicebox/`）。注意：CI 自己 build，`dist/` 入唔入 repo 其實無關 deploy |

**三語接線：** runtime `useState(lang)`，預設 TC；`document.documentElement.lang` 同步
（zh-Hant/zh-Hans/en）；字體按語言切（EN=Manrope，中文=Noto Sans TC/SC）。

**「文案單一事實來源」喺呢度嘅意思：** 每一句 user-facing 文字＝`dodo-launch.js` 入面
一個 `tr()` tuple（另加 `index.html` meta 呢個例外）。冇 CMS、冇 markdown、冇翻譯檔。
→ Phase 2 建議：**將文案抽做 `content.js`**（一個 module 淨係擺 tr tuples），
present­ation 同 copy 分離，Phase 4 guard 就可以逐句 pin `content.js`，唔使 grep 成個 2500 行檔。
（屬輕refactor，唔係新框架。）

**Build/verify 指令：** `npm run dev`｜`npm run build`｜`npm run check:content`

**現有 section 次序：** hero → 真正需要 → 設計理念+公仔 → 運作方式 → 示意情境 →
對象得益 → 市場比較 → 試點 → 進度+截圖 → 私隱限制 → 團隊 → footer

---

## PHASE 1 — 新資訊架構提案

讀者優先序：**成年仔女／照顧者**（買家）為主，NGO 一行帶過。粵語優先，三語。

| # | Section（id） | 層 | 內容 |
|---|---|---|---|
| 1 | **Hero**（`hero`） | vision | 主動問候定位＋三粒 proof chips＋雙 CTA（下文逐字稿） |
| 2 | **Status band**（`status`） | progress | 一條幼帶：「2026年7月 · 創辦人真機測試中 · 試點籌備中」＋「睇下我哋去到邊 →」錨點。全站唯一 stage 標示 |
| 3 | **產品體驗**（`experience`） | vision | 四幕，現在式無 hedge：①主動問候（朝早場景）②有根有據嘅答案（長者問生果金，DoDo 答核實大約數）③日常提一提（**飲水/同屋企人視像/帶鎖匙**）④交棒畀人（**經同意**同家人分享關注，人決定跟進） |
| 4 | **四款公仔**（`design`） | vision | 保留現有（熊貓/水豚/企鵝/樹懶）＋設計理念（刪 D2 研究句） |
| 5 | **我哋去到邊**（`progress`） | progress | **投資者可信度主菜**：里程碑 timeline（06月中 ESP32-S3 真機對話迴路 → 福利語料創辦人逐條對照 .gov.hk 核實（附日期）→ 機器 guard＋fail-closed → 07-05 起創辦人真機實測 → 三日 13 刀 merge）＋「下一步」（試點/長者測試/私隱流程） |
| 6 | **點解可信**（`why-trust`） | 兩層之間 | §4 七項：核實先講，過期寧靜｜雙層數字設計｜五大原則全文｜私隱工程（日誌無原文、30日限期、同意先披露；**本地化處理：遷移中** roadmap 式）｜無廣告｜唔靠你用得耐 |
| 7 | **DoDo 唔係乜**（`not`） | honest | 否認句三連：唔係平安鐘、唔係醫療器械、唔會代替家人同人手關懷（取代舊市場比較卡） |
| 8 | **照顧者**（`caregivers`） | vision+concept | Care Console 概念，現在式描寫，截圖一律標 **「示意圖 / Concept」**（截圖重出問題見 escalation） |
| 9 | **試點／同我哋傾**（`pilot`） | progress | caregiver-primary（「屋企有長者？同我哋傾下」）＋ NGO 一行（「機構合作查詢」）＋mailto/WhatsApp（唔加表格；一加即觸發 PICS → architect） |
| 10 | **團隊＋Footer**（`team`/`contact`) | — | 香港團隊、落實先公布、獻辭，保留 |

**刪走：** 市場比較區（K1/K2）、獨立「真正需要」大版（問題敘事收入 hero/體驗）、
示意 journey 版（故事融入產品體驗四幕）。

---

## Hero 文案逐字稿（三語，待批）

### 方案 A —— 對住仔女講（推薦）

**status badge（唔用，hero 乾淨；stage 資訊落 status band）**

**H1**
- TC：`一隻會主動開口嘅廣東話公仔，陪爸媽過每一日。`
- SC：`一只会主动开口的粤语陪伴公仔，陪爸妈过好每一天。`
- EN：`A Cantonese companion that starts the conversation — keeping Mum and Dad company every day.`

**Hero lead**
- TC：`你返唔到去嘅日子，DoDo 會同爸媽講早晨、陪佢哋傾偈，輕輕提一提飲水、帶鎖匙呢啲小事。講到政府福利，佢只會講經人手對照官方網站核實嘅資料。喺爸媽同意之下，先會同你分享關注。`
- SC：`你不能回去的日子，DoDo 会先向爸妈道早安、陪他们聊天，轻轻提醒喝水、带钥匙这些小事。讲到政府福利，它只讲经人工对照官方网站核实过的资料。在爸妈同意之下，才会和你分享值得关心的事。`
- EN：`On the days you can't be there, DoDo says good morning first, keeps your parents chatting, and gently reminds them about the small things — drink some water, take the keys. When it comes to government benefits, it only shares facts a person has checked against official Hong Kong sources. And it shares how your parents are doing only with their consent.`

**Proof chips（×3）**
- TC：`會主動問候`｜`講嘢有根有據`｜`經同意先分享`
- SC：`会主动问候`｜`讲话有依据`｜`经同意才分享`
- EN：`Speaks first`｜`Facts, checked`｜`Shares only with consent`

**CTA**
- 主：TC `同我哋傾下`／SC `和我们聊聊`／EN `Talk to us`（→ mailto）
- 次：TC `DoDo 點樣運作`／SC `DoDo 怎样运作`／EN `How DoDo works`（→ #experience）

### 方案 B —— 產品自述（備選）

**H1**
- TC：`會主動開口嘅廣東話陪伴公仔。講嘅嘢，逐條核實過。`
- SC：`会主动开口的粤语陪伴公仔。它讲的资料，逐条核实过。`
- EN：`The Cantonese companion that speaks first. Every fact it shares has been checked.`

（lead/chips/CTA 同方案 A）

### Status band（兩方案共用）
- TC：`2026年7月 · 創辦人真機測試中 · 試點籌備中`
- SC：`2026年7月 · 创始人真机测试中 · 试点筹备中`
- EN：`July 2026 · Founder testing on the real device · Pilot in preparation`

---

## 等裁決先郁（Phase 1 STOP 清單）
1. IA 十區次序批唔批
2. Hero 方案 A 定 B（或改字）
3. Care Console 截圖：重出（改「照護管理主控台/風險/情緒線索」字眼）／裁圖／暫時落架
4. 