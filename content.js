// =============================================================================
// DoDo VoiceBox — 文案單一事實來源 v8（owner de-translationese pass，2026-07-06）
// 規則：zh-HK 係源語言；SC/EN 係 native 演繹。
// 文風（owner's rule）：直接肯定句；一句一個意思；短；香港人同屋企人解釋嘢嘅口語；
// 唔准自創四字格；唔准工程語域；唔准翻譯腔（標題禁「topic，comment」句式，
// 一律主謂賓；每句過「讀出嚟似唔似香港人講嘢」測試）。
// 負面句式全站清除——唯一例外：COMPARE 區嘅刻意誠實否認句。
// 情感語域（owner v6.1 裁定）：准 了解／留意／關心／觀察；禁詞清單一律見檢查腳本。
// 改文案必須過 scripts/check-homepage-content.mjs（pin＋禁詞＋退役詞）。
// =============================================================================

export const tr = (EN, TC, SC) => ({ EN, TC, SC });
export const text = (value, lang) => (typeof value === "string" ? value : value[lang]);

export const LANGS = [
  { key: "TC", label: "廣", aria: "Cantonese Traditional Chinese" },
  { key: "SC", label: "简", aria: "Simplified Chinese" },
  { key: "EN", label: "EN", aria: "English" },
];

export const CONTACT = {
  phone: "64104866",
  whatsapp: "https://wa.me/85264104866",
  email: "dodoaivoicebox@gmail.com",
};

export const NAV = [
  { id: "experience", label: tr("Experience", "產品體驗", "产品体验") },
  { id: "progress", label: tr("Our story", "我哋去到邊", "我们到哪了") },
  { id: "why-trust", label: tr("Why trust it", "點解可信", "为何可信") },
  { id: "caregivers", label: tr("For caregivers", "照顧者", "照顾者") },
];

export const HERO = {
  h1: tr(
    "A companion that checks in on your parents.",
    "主動關心父母心情嘅公仔",
    "主动关心父母心情的公仔",
  ),
  h1Parts: {
    TC: ["主動關心", "父母心情嘅公仔"],
    SC: ["主动关心", "父母心情的公仔"],
  },
  lead: tr(
    "DoDo is a small tool that keeps your parents company in Cantonese. Chatting every day, you'll notice how they're feeling. Even from overseas, you can still show you care. It gives daily reminders too, and shares only welfare facts that have been checked. Above all, it respects your parents' privacy and wishes.",
    "DoDo 係一件用廣東話陪父母傾偈嘅小工具。日日傾計，你會留意到父母嘅心情變化。人喺外地，一樣關心到。佢仲識日常提醒，福利資訊亦只講核實過嘅。最緊要，佢尊重父母嘅私隱同意願。",
    "DoDo 是一件用粤语陪父母聊天的小工具。天天聊天，你会留意到父母的心情变化。人在外地，一样关心得到。它还会日常提醒，福利资讯也只讲核实过的。最重要的是，它尊重父母的隐私和意愿。",
  ),
  chips: [
    { label: tr("Checks in first", "會主動關心", "会主动关心"), target: "exp-greet" },
    { label: tr("Notices their mood", "留意到心情變化", "留意到心情变化"), target: "exp-handoff" },
    { label: tr("Daily reminders", "日常提醒", "日常提醒"), target: "exp-remind" },
  ],
  ctaPrimary: tr("Talk to us", "同我哋傾下", "和我们聊聊"),
  ctaSecondary: tr("How DoDo works", "DoDo 點樣運作", "DoDo 怎样运作"),
  deviceCaption: tr("Cantonese · It says good morning first", "廣東話 · 主動同你講早晨", "粤语 · 主动和你说早安"),
  deviceBubble: tr(
    "Good morning. Bit cool out there today — wear something warm.",
    "早晨呀。今朝有啲涼，記住著多件衫呀。",
    "早上好。今早有点凉，记得多穿件衣服。",
  ),
  deviceLabel: tr("At your parents' home", "喺父母屋企", "在父母家里"),
};

export const EXPERIENCE = {
  eyebrow: tr("The experience", "產品體驗", "产品体验"),
  title: tr(
    "How DoDo works, day to day",
    "DoDo 嘅日常運作",
    "DoDo 的日常运作",
  ),
  body: tr(
    "Speaking is the whole interface.",
    "開口講嘢，就係全部操作。",
    "开口说话，就是全部操作。",
  ),
  scenes: [
    {
      k: "greet",
      title: tr("Says good morning first", "一朝早就主動問候", "一早就主动问候"),
      body: tr(
        "DoDo says good morning first and chats about the day ahead. Someone answers. Someone listens. The flat feels alive.",
        "DoDo 主動講早晨，同父母傾下今日想做乜。屋企有人應、有嘢傾，成日都有生氣。",
        "DoDo 主动道早安，和父母聊聊今天想做什么。家里有人应、有话聊，整天都有生气。",
      ),
      dialog: [
        { who: "dodo", say: tr(
          "Good morning. Lovely bit of sun this morning — fancy a walk later?",
          "早晨呀。今朝出便好靚太陽，陣間想唔想落街行下？",
          "早上好。今早外面阳光很好，等会儿想不想下楼走走？",
        ) },
        { who: "elder", say: tr(
          "Maybe after lunch. Keep me company till then.",
          "食晏先啦。你陪我傾住先。",
          "吃过午饭再说吧。你先陪我聊聊。",
        ) },
      ],
    },
    {
      k: "facts",
      title: tr(
        "Only checked welfare facts",
        "核實過嘅福利資訊",
        "核实过的福利资讯",
      ),
      body: tr(
        "On welfare and policy, DoDo only gives facts that have been checked — it never makes things up. Every entry is checked by hand against official government pages; once it expires, DoDo stops saying it.",
        "講到福利同政策，DoDo 只會答核實過嘅資料，絕唔亂噏。每一條都有人手對照過政府官方網站，過咗期就唔會再講。",
        "讲到福利和政策，DoDo 只会答核实过的资料，绝不乱说。每一条都经人工对照过政府官方网站，过了期就不会再讲。",
      ),
      dialog: [
        { who: "elder", say: tr(
          "How much is the fruit money these days?",
          "生果金而家係幾多呀？",
          "生果金现在是多少呀？",
        ) },
        { who: "dodo", say: tr(
          "That one's checked — here's the rough figure. For the exact amount and the application, your daughter can go through it with you.",
          "呢條我哋核實過，話你知個大約數。確實金額同申請，等阿女同你一齊搞。",
          "这条我们核实过，告诉你一个大约数。确切金额和申请，让女儿和你一起办。",
        ) },
      ],
    },
    {
      k: "remind",
      title: tr("Daily reminders", "日常提醒", "日常提醒"),
      body: tr(
        "A dim sum date, keys before heading out, a drink of water — set it once, and DoDo reminds them in Cantonese, right on time.",
        "約咗人飲茶、出門帶鎖匙、記得飲水——設定一次，DoDo 到時就用廣東話提返佢。",
        "约了人喝茶、出门带钥匙、记得喝水——设置一次，DoDo 到时就用粤语提醒他。",
      ),
      dialog: [
        { who: "dodo", say: tr(
          "It's almost three — your grandson's video call is coming up. Shall I stay on until it rings?",
          "就嚟三點喇，孫仔約咗同你視像。我陪你等佢打嚟，好唔好？",
          "快三点了，孙子约了和你视频。我陪你等他打来，好不好？",
        ) },
      ],
    },
    {
      k: "handoff",
      title: tr(
        "Tells you what matters",
        "值得關心嘅事就話你知",
        "值得关心的事就告诉你",
      ),
      body: tr(
        "With your parents' consent, DoDo tells you what deserves attention. Follow-up stays a person's call — always yours.",
        "父母同意，DoDo 就會將值得關心嘅事話你知。跟進點做，永遠由你哋屋企人決定。",
        "父母同意，DoDo 就会把值得关心的事告诉你。跟进怎么做，永远由你们家人决定。",
      ),
      dialog: [
        { who: "update", say: tr(
          "To the family, with consent: “Dad mentioned today he'd love a dim sum outing together soon.”",
          "經同意，話畀屋企人知：「爸爸今日提起，想搵日一齊去飲茶。」",
          "经同意，告诉家人：「爸爸今天提起，想找天一起去喝茶。」",
        ) },
      ],
    },
  ],
};

export const DESIGN = {
  eyebrow: tr("Design philosophy", "設計理念", "设计理念"),
  title: tr(
    "A companion you'd want at home",
    "一隻你想日日擺喺屋企嘅公仔",
    "一只你想天天放在家里的公仔",
  ),
  body: tr(
    "The most natural thing an older adult can use: just talk to it. And it looks like a companion — warm, friendly, part of the home.",
    "最自然嘅用法：直接同佢講嘢。個樣要似一個陪伴——溫暖、親切，係屋企一份子。",
    "最自然的用法：直接和它说话。样子要像一个陪伴——温暖、亲切，是家里的一份子。",
  ),
  points: [
    {
      title: tr("Natural and simple", "簡單自然", "简单自然"),
      body: tr(
        "You just talk. Ask a question, hear a reminder, chat about the day — all by speaking.",
        "開口就用得。問嘢、聽提一提、傾下偈，全部用把口搞掂。",
        "开口就能用。问事情、听提醒、聊聊天，全部用嘴完成。",
      ),
    },
    {
      title: tr("Warm and familiar", "親切有溫度", "亲切有温度"),
      body: tr(
        "Older adults warm to friendly, familiar shapes. A cute character feels like part of the family — it sits happily in the living room, every day.",
        "長者鍾意親切、熟悉嘅造型。一隻得意嘅公仔，似屋企人多過似機器，日日擺喺廳都舒服。",
        "长者喜欢亲切、熟悉的造型。一只可爱的公仔，像家人多过像机器，天天放在客厅都舒服。",
      ),
    },
    {
      title: tr("A companion to keep close", "想擺喺身邊嘅陪伴", "想放在身边的陪伴"),
      body: tr(
        "Warm, pet-like characters make people want them around every day. DoDo comes as four — pick the one that fits your home.",
        "暖笠笠、似小寵物嘅造型，令人想日日擺喺身邊。DoDo 有四款，揀一隻最啱你屋企嘅。",
        "暖暖的、像小宠物的造型，让人想天天放在身边。DoDo 有四款，选一只最适合你家的。",
      ),
    },
  ],
  note: tr(
    "This direction draws on elderly-care technology research and our conversations with older adults. It reflects our design intent.",
    "呢個方向嚟自長者科技研究，加上我哋同長者傾偈嘅心得。佢代表我哋嘅設計初衷。",
    "这个方向来自长者科技研究，加上我们和长者聊天的心得。它代表我们的设计初衷。",
  ),
  characters: [
    {
      img: "character-panda.webp", w: 702, h: 702,
      name: tr("Cute Panda", "可愛熊貓", "可爱熊猫"),
      desc: tr(
        "Cuddly and gentle — familiar, soft, always present.",
        "親切柔軟嘅熊貓，熟悉、溫柔、一直喺身邊。",
        "亲切柔软的熊猫，熟悉、温柔、一直在身边。",
      ),
      alt: tr("DoDo Cute Panda companion design", "DoDo 可愛熊貓造型", "DoDo 可爱熊猫造型"),
    },
    {
      img: "character-capybara.webp", w: 711, h: 711,
      name: tr("Cute Capybara", "可愛水豚", "可爱水豚"),
      desc: tr(
        "The world's most relaxed animal — calm, warm, at ease anywhere.",
        "世界上最放鬆嘅動物，安定、溫暖，放喺邊都自然。",
        "世界上最放松的动物，安定、温暖，放在哪都自然。",
      ),
      alt: tr("DoDo Cute Capybara companion design", "DoDo 可愛水豚造型", "DoDo 可爱水豚造型"),
    },
    {
      img: "character-penguin.webp", w: 756, h: 756,
      name: tr("Cute Penguin", "可愛企鵝", "可爱企鹅"),
      desc: tr(
        "Upright and cheerful — ready to greet the day, every day.",
        "企得挺直又開朗，日日準備好打招呼。",
        "站得挺直又开朗，天天准备好打招呼。",
      ),
      alt: tr("DoDo Cute Penguin companion design", "DoDo 可愛企鵝造型", "DoDo 可爱企鹅造型"),
    },
    {
      img: "character-sloth.webp", w: 844, h: 844,
      name: tr("Cute Sloth", "可愛樹懶", "可爱树懒"),
      desc: tr(
        "Slow, gentle, endlessly patient — for a quieter pace of life.",
        "慢慢嚟、好溫柔、好有耐性，啱鍾意安靜節奏嘅長者。",
        "慢慢来、很温柔、很有耐性，适合喜欢安静节奏的长者。",
      ),
      alt: tr("DoDo Cute Sloth companion design", "DoDo 可愛樹懶造型", "DoDo 可爱树懒造型"),
    },
  ],
};

export const PROGRESS = {
  eyebrow: tr("Our story, on the record", "進度實錄", "进度实录"),
  title: tr("Where we are", "我哋去到邊", "我们到哪了"),
  body: tr(
    "From an idea to a talking device — here are the facts, in order.",
    "由一個諗法，到一部識傾偈嘅真機。下面順住時間講事實。",
    "从一个想法，到一台会聊天的真机。下面按时间讲事实。",
  ),
  milestones: [
    {
      date: tr("Jan 2026", "2026年1月", "2026年1月"),
      title: tr("The idea is born", "意念誕生", "意念诞生"),
      body: tr(
        "A companion for older Hong Kongers facing loneliness.",
        "針對香港長者嘅孤獨問題，DoDo 嘅諗法誕生。",
        "针对香港长者的孤独问题，DoDo 的想法诞生。",
      ),
    },
    {
      date: tr("Feb 2026", "2026年2月", "2026年2月"),
      title: tr("Development begins", "開發啟動", "开发启动"),
      body: tr(
        "A failure mid-way forced a full rebuild — we started again from zero.",
        "中途一次故障，成個系統要刪除重建——我哋由零再嚟一次。",
        "中途一次故障，整个系统要删除重建——我们从零再来一次。",
      ),
    },
    {
      date: tr("Feb–Mar 2026", "2026年2–3月", "2026年2–3月"),
      title: tr("Deep research", "深入研究", "深入研究"),
      body: tr(
        "We consulted professors and specialists across elderly care and technology.",
        "走訪多位教授同專家，深入研究長者服務同科技。",
        "走访多位教授和专家，深入研究长者服务和科技。",
      ),
    },
    {
      date: tr("From Mar–Apr 2026", "2026年3–4月起", "2026年3–4月起"),
      title: tr("Real-device testing, ongoing", "真機對話測試持續至今", "真机对话测试持续至今"),
      body: tr(
        "From March until now: real-device conversations at home, every day.",
        "由三月到而家，日日喺屋企真機傾。",
        "从三月到现在，天天在家里真机聊。",
      ),
    },
    {
      date: tr("Apr–May 2026", "2026年4–5月", "2026年4–5月"),
      title: tr("Funding secured", "獲嶺南大學 IIF 撥款", "获岭南大学 IIF 拨款"),
      body: tr(
        "A HK$30,000 grant from Lingnan University's IIF funds the product's development.",
        "申請資助成功：獲嶺南大學 IIF 撥款 HK$30,000，研發本產品。",
        "申请资助成功：获岭南大学 IIF 拨款 HK$30,000，研发本产品。",
      ),
    },
    {
      date: tr("Jun–Jul 2026", "2026年6–7月", "2026年6–7月"),
      title: tr("Every welfare fact checked by hand", "福利資料逐條人手核實", "福利资料逐条人工核实"),
      body: tr(
        "Every welfare fact is checked by hand against official .gov.hk pages, and we keep it up to date ourselves. The founder tests the device at home, every day.",
        "福利資料逐條對照 .gov.hk 官方頁人手核實，會一直自己更新。創辦人日日喺屋企實測緊。",
        "福利资料逐条对照 .gov.hk 官方页人工核实，会一直自己更新。创始人天天在家里实测着。",
      ),
    },
    {
      date: tr("Now", "而家", "现在"),
      title: tr("Building with partners", "搵緊夥伴一齊做好佢", "找伙伴一起做好它"),
      body: tr(
        "Actively seeking pilot partners. Gathering feedback. Refining the product.",
        "積極尋找試點合作同夥伴，收集意見，完善產品。",
        "积极寻找试点合作和伙伴，收集意见，完善产品。",
      ),
      link: { label: tr("Talk to us", "同我哋傾下", "和我们聊聊"), target: "pilot" },
    },
  ],
};

export const WHY_TRUST = {
  eyebrow: tr("Why trust it", "點解可信", "为何可信"),
  title: tr("Honesty is a product feature", "誠實，係產品功能", "诚实，是产品功能"),
  body: tr(
    "Honesty, and getting the facts right — that is DoDo's core. Every line below is a principle we build by.",
    "誠實同準確，係 DoDo 嘅核心。以下每一條，都係我哋起產品嘅原則。",
    "诚实和准确，是 DoDo 的核心。以下每一条，都是我们做产品的原则。",
  ),
  blocks: [
    {
      title: tr("Welfare facts checked before spoken", "福利資料核實咗先講", "福利资料核实了才讲"),
      body: tr(
        "Every welfare figure is checked by hand — only then will DoDo say it. The moment it expires we pull it, and we update it ourselves. Elders hear the latest information; caregivers can use the same facts to apply for community resources. And one more thing: DoDo carries no ads.",
        "福利數據人手核實，核實咗先會講。一過期就取消，我哋自己更新。長者收到最新資訊；照顧者攞呢啲資料去申請社會資源，一樣用得住。仲有一樣：DoDo 無廣告。",
        "福利数据人工核实，核实了才会讲。一过期就取消，我们自己更新。长者收到最新资讯；照顾者拿这些资料去申请社会资源，一样用得上。还有一样：DoDo 没有广告。",
      ),
    },
    {
      title: tr("Rough numbers for elders, exact ones for caregivers", "大約數畀長者，準確數畀照顧者", "大约数给长者，精确数给照顾者"),
      body: tr(
        "Elders hear the rough figure — enough to know it exists. Exact amounts and application steps go to the caregiver side, where paperwork happens.",
        "長者聽大約數，知道有呢回事就夠。精確金額同申請步驟，去照顧者嗰邊——辦手續嘅人先用得着。",
        "长者听大约数，知道有这回事就够。精确金额和申请步骤，去照顾者那边——办手续的人才用得着。",
      ),
    },
    {
      title: tr("Conversations stay private", "對話保得住私隱", "对话保得住隐私"),
      body: tr(
        "What was said is never stored — no one can read it back. Data is kept only for a limited time, then cleared. Moving voice processing to Hong Kong is in our plans.",
        "對話原文一概不存，冇人睇得返。資料有限期，到期就自動清走。語音處理搬返香港做，喺我哋計劃入面。",
        "对话原文一概不存，没有人能翻看。资料有限期，到期就自动清走。语音处理搬回香港做，在我们的计划里面。",
      ),
    },
    {
      title: tr("Consent first; the default is no", "分享先問同意；預設係拒絕", "分享先问同意；默认是拒绝"),
      body: tr(
        "Sharing with family starts with your parents' agreement. When in doubt, we treat it as a no.",
        "同家人分享，由父母同意開始。拿唔準嗰陣，一律當父母未同意。",
        "和家人分享，由父母同意开始。拿不准的时候，一律当父母未同意。",
      ),
    },
    {
      title: tr("Simple to use", "簡單易用", "简单易用"),
      body: tr(
        "Just talk. To ask something, to chat, to hear a reminder — speaking is all it takes.",
        "開口就用得。想問嘢、想傾偈、想聽提一提，直接同佢講就得。",
        "开口就能用。想问事情、想聊天、想听提醒，直接和它说就行。",
      ),
    },
  ],
  principlesTitle: tr("Five principles we build by", "我哋起產品嘅五大原則", "我们做产品的五大原则"),
  principles: [
    tr(
      "Safety comes before every feature.",
      "安全，永遠排喺所有功能之前。",
      "安全，永远排在所有功能之前。",
    ),
    tr(
      "Observe only — never act alone, never draw conclusions on its own.",
      "只觀察——永不自動行動，永不自己落結論。",
      "只观察——永不自动行动，永不自己下结论。",
    ),
    tr(
      "Never exploit attachment — time spent is not a success metric.",
      "永不利用長者嘅依附感——「用得耐」唔係成功指標。",
      "永不利用长者的依附感——「用得久」不是成功指标。",
    ),
    tr(
      "Sharing with caregivers requires consent — the default is refusal.",
      "同照顧者分享必須經同意——預設係拒絕。",
      "和照顾者分享必须经同意——默认是拒绝。",
    ),
    tr(
      "Never take medical or urgent action on its own.",
      "永不自主採取醫療或緊急行動。",
      "永不自主采取医疗或紧急行动。",
    ),
  ],
};

export const COMPARE = {
  eyebrow: tr("To be clear", "講清楚", "说清楚"),
  title: tr(
    "How DoDo differs from what's out there",
    "同市面產品有咩唔同",
    "和市面产品有什么不同",
  ),
  themLabel: tr("Others", "市面產品", "市面产品"),
  rows: [
    {
      them: tr("Waits for the elder to work it", "等長者自己操作", "等长者自己操作"),
      dodo: tr("Speaks first, greets every day", "主動開口，日日問候", "主动开口，天天问候"),
    },
    {
      them: tr("Speaks up only when something happens", "有事先出聲", "有事才出声"),
      dodo: tr("Keeps company on ordinary days", "平常日子都陪傾", "平常日子也陪聊"),
    },
    {
      them: tr("Cannot hold a conversation", "唔識傾偈", "不会聊天"),
      dodo: tr("Chats with your parents in Cantonese", "識用廣東話同父母傾計", "会用粤语和父母聊天"),
    },
  ],
  punch: tr(
    "Care that speaks first — that is DoDo's biggest difference from everything else.",
    "主動關心，係 DoDo 同其他產品最大嘅分別。",
    "主动关心，是 DoDo 和其他产品最大的分别。",
  ),
  keepLine: tr(
    "DoDo replaces neither the personal alarm nor any medical device. It is a daily companion.",
    "DoDo 唔會取代平安鐘，亦唔係醫療器械。佢係日常陪伴。",
    "DoDo 不会取代平安钟，也不是医疗器械。它是日常陪伴。",
  ),
};

// --- 願景區（owner v7 concept sentence；義工一句只准 intent 語氣）--------------------

export const VISION = {
  eyebrow: tr("Our vision", "我哋嘅願景", "我们的愿景"),
  statement: tr(
    "We want one small device to connect elders with their caregivers, and elders with their community.",
    "我哋想用一部細細嘅裝置，連結長者同照顧者，連結長者同社區。",
    "我们想用一台小小的装置，连接长者和照顾者，连接长者和社区。",
  ),
  volunteer: tr(
    "We plan to work with volunteer organisations — the goal is a real person visiting for company, every month. A machine keeps the daily rhythm; human warmth is irreplaceable.",
    "我哋計劃同義工機構合作，目標係每個月都有真人探訪同陪伴——機器陪日常，人情味不可代替。",
    "我们计划和义工机构合作，目标是每个月都有真人探访和陪伴——机器陪日常，人情味不可代替。",
  ),
};

export const CAREGIVERS = {
  eyebrow: tr("The caregiver side", "照顧者一面", "照顾者一面"),
  title: tr(
    "A simple view on your side",
    "你嗰邊有個簡單介面",
    "你那边有个简单界面",
  ),
  body: tr(
    "Your parents do the talking; you see what matters. Set gentle reminders. Tune when DoDo says hello. Read short updates. Your parents decide who sees what.",
    "父母負責傾偈，你負責睇重點。設定提一提。較好問候時間。睇簡短近況。邊個睇到啲乜，由父母話事。",
    "父母负责聊天，你负责看重点。设定提醒。调好问候时间。看简短近况。谁看到什么，由父母说了算。",
  ),
  consentChip: tr("Shared with consent", "經同意先分享", "经同意才分享"),
  previewLabel: tr(
    "Product interface preview · In-development build",
    "產品介面預覽 · 開發中版本",
    "产品界面预览 · 开发中版本",
  ),
  shots: [
    {
      img: "care-crop-summary.webp", w: 1630, h: 389,
      caption: tr(
        "The daily summary: today's highlights, in plain words.",
        "每日摘要：今日重點，一眼睇晒。",
        "每日摘要：今日重点，一眼看全。",
      ),
      alt: tr(
        "Cropped preview of the caregiver view daily summary card",
        "照顧者介面每日摘要卡裁切預覽",
        "照顾者界面每日摘要卡裁切预览",
      ),
    },
    {
      img: "care-crop-status.webp", w: 798, h: 588,
      caption: tr(
        "Status across five areas, at a glance.",
        "五個面向嘅狀態，一眼睇清。",
        "五个面向的状态，一眼看清。",
      ),
      alt: tr(
        "Cropped preview of the caregiver view five-point status diagram",
        "照顧者介面五點狀態圖裁切預覽",
        "照顾者界面五点状态图裁切预览",
      ),
    },
    {
      img: "care-crop-trend.webp", w: 1662, h: 281,
      caption: tr(
        "The last seven days, side by side.",
        "最近七日趨勢，逐日並排。",
        "最近七日趋势，逐日并排。",
      ),
      alt: tr(
        "Cropped preview of the caregiver view seven-day trend row",
        "照顧者介面七日趨勢列裁切預覽",
        "照顾者界面七日趋势列裁切预览",
      ),
    },
  ],
};

export const PILOT = {
  eyebrow: tr("Talk to us", "同我哋傾", "联系我们"),
  title: tr(
    "An older adult at home? Talk to us.",
    "屋企有長者？同我哋傾下。",
    "家里有长者？和我们聊聊。",
  ),
  body: tr(
    "Tell us how your parents' days go, what you worry about, and where DoDo could help. What we hear shapes what we build.",
    "同我哋講下：父母嘅一日點過、你最擔心乜、DoDo 可以點幫手。你講嘅嘢，直接影響產品點做落去。",
    "和我们说说：父母的一天怎么过、你最担心什么、DoDo 可以怎么帮。你说的话，直接影响产品怎么做下去。",
  ),
  ngoLine: tr(
    "NGOs and elderly-service teams exploring a pilot are welcome to reach out too.",
    "社福機構或長者服務團隊想探討試點合作，同樣歡迎搵我哋。",
    "社福机构或长者服务团队想探讨试点合作，同样欢迎联系我们。",
  ),
  whatsapp: tr("WhatsApp: 64104866", "WhatsApp：64104866", "WhatsApp：64104866"),
  call: tr("Call: 64104866", "電話：64104866", "电话：64104866"),
};

export const TEAM = {
  eyebrow: tr("About the project team", "關於項目團隊", "关于项目团队"),
  title: tr(
    "A Hong Kong early-stage product project",
    "一個香港早期產品項目",
    "一个香港早期产品项目",
  ),
  p1: tr(
    "DoDo is built by an early-stage Hong Kong team working across voice interaction, hardware prototyping, and elderly-service design.",
    "DoDo 由香港早期團隊開發，涵蓋語音互動、硬件原型同長者服務設計。",
    "DoDo 由香港早期团队开发，涵盖语音交互、硬件原型和长者服务设计。",
  ),
  p2: tr(
    "IIF support from Lingnan University is secured. Further partners, advisors, and institutional support will be announced as they are confirmed.",
    "嶺南大學 IIF 資助已經落實。新嘅夥伴、顧問同院校支援，落實咗就會逐一公布。",
    "岭南大学 IIF 资助已经落实。新的伙伴、顾问和院校支持，落实了就会逐一公布。",
  ),
};

export const FOOTER = {
  h2: tr(
    "Let DoDo keep your parents company, every day.",
    "等 DoDo 幫你，日日陪住父母。",
    "让 DoDo 帮你，天天陪着父母。",
  ),
  p: tr(
    "Tell us about your family.",
    "同我哋講下你屋企嘅故事。",
    "和我们说说你家里的故事。",
  ),
  tagline: tr(
    "For the ones who raised us.",
    "獻畀曾經照顧我哋嘅人。",
    "献给曾经照顾我们的人。",
  ),
};
