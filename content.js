// =============================================================================
// DoDo VoiceBox — 文案單一事實來源 v3（owner direction pass，2026-07-06）
// 規則：zh-HK 係源語言；SC/EN 係 native 演繹。
// 文風（owner's rule）：直接肯定句；一句一個意思；短。
// 負面句式全站清除——唯一例外：NOT_DODO 三句（刻意誠實定位）。
// 改文案必須過 scripts/check-homepage-content.mjs（pin＋禁詞）。
// =============================================================================

export const tr = (EN, TC, SC) => ({ EN, TC, SC });
export const text = (value, lang) => (typeof value === "string" ? value : value[lang]);

export const LANGS = [
  { key: "TC", label: "廣東話", aria: "Cantonese Traditional Chinese" },
  { key: "SC", label: "简体", aria: "Simplified Chinese" },
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
  { id: "pilot", label: tr("Talk to us", "同我哋傾", "联系我们") },
];

export const HERO = {
  h1: tr(
    "A Cantonese companion that starts the conversation — keeping Mum and Dad company every day.",
    "一隻會主動開口嘅廣東話公仔，陪爸媽過每一日。",
    "一只会主动开口的粤语陪伴公仔，陪爸妈过好每一天。",
  ),
  lead: tr(
    "DoDo says good morning first. It keeps your parents chatting and gently reminds them — drink some water, take the keys. Every benefit fact it shares is human-checked against official Hong Kong sources. With your parents' consent, it shares what matters with you.",
    "DoDo 會同爸媽講早晨、陪佢哋傾偈，仲會輕輕提一提：飲啖水、帶鎖匙。講到政府福利，佢只講經人手對照官方網站核實嘅資料。爸媽同意，先會同你分享關注。",
    "DoDo 会先向爸妈道早安、陪他们聊天，还会轻轻提醒：喝口水、带钥匙。讲到政府福利，它只讲经人工对照官方网站核实过的资料。爸妈同意，才会和你分享关注。",
  ),
  chips: [
    tr("Speaks first", "會主動問候", "会主动问候"),
    tr("Facts, checked", "講嘢有根有據", "讲话有依据"),
    tr("Shares only with consent", "經同意先分享", "经同意才分享"),
  ],
  ctaPrimary: tr("Talk to us", "同我哋傾下", "和我们聊聊"),
  ctaSecondary: tr("How DoDo works", "DoDo 點樣運作", "DoDo 怎样运作"),
  deviceCaption: tr("Cantonese · Just start talking", "廣東話 · 開口就傾", "粤语 · 开口就聊"),
  deviceBubble: tr(
    "Good morning. Bit cool out there today — wear something warm.",
    "早晨呀。今朝有啲涼，記住著多件衫呀。",
    "早上好。今早有点凉，记得多穿件衣服。",
  ),
  deviceLabel: tr("At your parents' home", "喺爸媽屋企", "在爸妈家里"),
};

export const EXPERIENCE = {
  eyebrow: tr("The experience", "產品體驗", "产品体验"),
  title: tr(
    "What DoDo does through the day",
    "一日之間，DoDo 做啲乜",
    "一天之中，DoDo 做些什么",
  ),
  body: tr(
    "Speaking is the whole interface.",
    "開口講嘢，就係全部操作。",
    "开口说话，就是全部操作。",
  ),
  scenes: [
    {
      k: "greet",
      title: tr("Morning starts with a hello", "朝早，佢先開口", "早上，它先开口"),
      body: tr(
        "DoDo says good morning first and chats about the day ahead. Someone answers. Someone listens. The flat feels alive.",
        "DoDo 主動講早晨，同爸媽傾下今日想做乜。屋企有人應、有嘢傾，成日都有生氣。",
        "DoDo 主动道早安，和爸妈聊聊今天想做什么。家里有人应、有话聊，整天都有生气。",
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
        "Ask about benefits — it says what's been checked",
        "問福利，佢講核實過嘅",
        "问福利，它讲核实过的",
      ),
      body: tr(
        "The Old Age Living Allowance, fruit money, health care vouchers, the $2 fare. Every fact carries a human check against official government pages, with the date on record. Past its review date, DoDo goes quiet on it.",
        "長生津、生果金、醫療券、兩蚊優惠。每一條資訊，都有人手對照過政府官方網站，記低核實日期。資料過咗期，DoDo 會收聲。",
        "长生津、生果金、医疗券、两元优惠。每一条资讯，都经人工对照过政府官方网站，记下核实日期。资料过了期，DoDo 会收声。",
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
      title: tr("Small things, gently remembered", "小事，輕輕提一提", "小事，轻轻提一提"),
      body: tr(
        "A sip of water. A video call with the family. Keys before heading out. Set it once — DoDo mentions it at the right moment, in a warm Cantonese voice.",
        "飲啖水。同屋企人視像。出門帶鎖匙。設定一次，DoDo 就會喺啱嘅時間，用溫和嘅廣東話提一提。",
        "喝口水。和家人视频。出门带钥匙。设置一次，DoDo 就会在合适的时间，用温和的粤语提醒一声。",
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
        "What matters gets handed to a person",
        "值得關心嘅事，交返畀人",
        "值得关心的事，交回给人",
      ),
      body: tr(
        "With your parents' consent, DoDo tells you what deserves attention. Follow-up stays a person's call — always yours.",
        "爸媽同意，DoDo 就會將值得關心嘅事話你知。跟進點做，永遠由你哋屋企人決定。",
        "爸妈同意，DoDo 就会把值得关心的事告诉你。跟进怎么做，永远由你们家人决定。",
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
    "The most natural thing an older adult can use: open your mouth and talk. And it looks like a companion — warm, friendly, part of the home.",
    "最自然嘅用法：開口就傾。個樣要似一個陪伴——溫暖、親切，係屋企一份子。",
    "最自然的用法：开口就聊。样子要像一个陪伴——温暖、亲切，是家里的一份子。",
  ),
  points: [
    {
      title: tr("Natural and simple", "自然，簡單", "自然，简单"),
      body: tr(
        "You just talk. Ask a question, hear a reminder, chat about the day — all by speaking.",
        "開口就用得。問嘢、聽提一提、傾下偈，全部用把口搞掂。",
        "开口就能用。问事情、听提醒、聊聊天，全部用嘴完成。",
      ),
    },
    {
      title: tr("Warm, familiar", "親切，有溫度", "亲切，有温度"),
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
      img: "character-panda.png",
      name: tr("Cute Panda", "可愛熊貓", "可爱熊猫"),
      desc: tr(
        "Cuddly and gentle — familiar, soft, always present.",
        "親切柔軟嘅熊貓，熟悉、溫柔、一直喺身邊。",
        "亲切柔软的熊猫，熟悉、温柔、一直在身边。",
      ),
      alt: tr("DoDo Cute Panda companion design", "DoDo 可愛熊貓造型", "DoDo 可爱熊猫造型"),
    },
    {
      img: "character-capybara.png",
      name: tr("Cute Capybara", "可愛水豚", "可爱水豚"),
      desc: tr(
        "The world's most relaxed animal — calm, warm, at ease anywhere.",
        "世界上最放鬆嘅動物，安定、溫暖，放喺邊都自然。",
        "世界上最放松的动物，安定、温暖，放在哪都自然。",
      ),
      alt: tr("DoDo Cute Capybara companion design", "DoDo 可愛水豚造型", "DoDo 可爱水豚造型"),
    },
    {
      img: "character-penguin.png",
      name: tr("Cute Penguin", "可愛企鵝", "可爱企鹅"),
      desc: tr(
        "Upright and cheerful — ready to greet the day, every day.",
        "企得挺直又開朗，日日準備好打招呼。",
        "站得挺直又开朗，天天准备好打招呼。",
      ),
      alt: tr("DoDo Cute Penguin companion design", "DoDo 可愛企鵝造型", "DoDo 可爱企鹅造型"),
    },
    {
      img: "character-sloth.png",
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
    "From an idea to a talking device. The facts, in order.",
    "由一個諗法，到一部識傾偈嘅真機。事實，順住時間講。",
    "从一个想法，到一台会聊天的真机。事实，按时间讲。",
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
      title: tr("Real-device testing, ongoing", "真機對話測試，持續至今", "真机对话测试，持续至今"),
      body: tr(
        "Conversation testing on the real device begins — and continues to this day.",
        "真機對話測試開始，一直做到而家。",
        "真机对话测试开始，一直做到现在。",
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
      title: tr("Facts checked, guards on", "知識庫核實，防護上鎖", "知识库核实，防护上锁"),
      body: tr(
        "Every welfare entry checked by hand against official .gov.hk pages. Machine guards lock the knowledge base. Founder daily live-testing under way.",
        "福利知識庫逐條對照 .gov.hk 官方頁人手核實，加上機器防護。創辦人日常實測進行中。",
        "福利知识库逐条对照 .gov.hk 官方页人工核实，加上机器防护。创始人日常实测进行中。",
      ),
    },
    {
      date: tr("Now", "而家", "现在"),
      title: tr("Building with partners", "搵緊夥伴，一齊做好佢", "找伙伴，一起做好它"),
      body: tr(
        "Actively seeking pilot partners. Gathering feedback. Refining the product.",
        "積極尋找試點合作同夥伴，收集意見，完善產品。",
        "积极寻找试点合作和伙伴，收集意见，完善产品。",
      ),
    },
  ],
};

export const WHY_TRUST = {
  eyebrow: tr("Why trust it", "點解可信", "为何可信"),
  title: tr("Honesty is a product feature", "誠實，係產品功能", "诚实，是产品功能"),
  body: tr(
    "Every rule below is built into the product and the process.",
    "以下每一條，都寫咗入產品同流程。",
    "以下每一条，都写进了产品和流程。",
  ),
  blocks: [
    {
      title: tr("Checked before spoken; silent when expired", "核實先講，過期寧靜", "核实才说，过期安静"),
      body: tr(
        "Every welfare fact carries a human verification record and a review deadline. Past the deadline, the system goes quiet on it. Quiet beats wrong.",
        "每條福利資訊，都有人手核實紀錄同到期日。一過期，系統就收聲。寧靜好過講錯。",
        "每条福利资讯，都有人工核实记录和到期日。一过期，系统就收声。安静好过说错。",
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
      title: tr("Conversations stay private", "對話，保得住私隱", "对话，保得住隐私"),
      body: tr(
        "Logs keep technical traces only — never the words themselves. Data has a retention limit and is purged on schedule. Localised voice processing is on the roadmap.",
        "日誌只記必要嘅技術紀錄，對話原文一概不存。資料有保留期限，到期就清。語音處理本地化，喺 roadmap 上。",
        "日志只记必要的技术记录，对话原文一概不存。资料有保留期限，到期就清。语音处理本地化，在 roadmap 上。",
      ),
    },
    {
      title: tr("Consent first; the default is no", "分享先問同意；預設係拒絕", "分享先问同意；默认是拒绝"),
      body: tr(
        "Sharing with family starts with your parents' agreement. In any doubt, the system holds back.",
        "同家人分享，由爸媽同意開始。有懷疑，系統一律扣起。",
        "和家人分享，由爸妈同意开始。有疑问，系统一律扣下。",
      ),
    },
    {
      title: tr("No ads; built to help, not to hook", "無廣告；為幫手而做", "无广告；为帮忙而做"),
      body: tr(
        "DoDo carries zero advertising. Success means one thing: helping at the right moment. Time-on-device stays off our scoreboard, by written rule.",
        "DoDo 零廣告。成功只有一個定義：喺有需要嗰陣幫到手。「用得耐」明文剔出成功指標。",
        "DoDo 零广告。成功只有一个定义：在有需要的时候帮上忙。「用得久」明文剔出成功指标。",
      ),
    },
  ],
  principlesTitle: tr("Five principles we build by", "我哋起產品嘅五大原則", "我们做产品的五大原则"),
  principles: [
    tr(
      "Safety comes before every feature.",
      "安全路徑，永遠行喺所有功能之前。",
      "安全路径，永远走在所有功能之前。",
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

export const NOT_DODO = {
  eyebrow: tr("To be clear", "講清楚", "说清楚"),
  title: tr("What DoDo is not", "DoDo 唔係乜", "DoDo 不是什么"),
  items: [
    {
      title: tr("Not an SOS device", "唔係平安鐘", "不是平安钟"),
      body: tr(
        "For anything urgent, dedicated services are the right call — always.",
        "救急扶危，請搵專門嘅服務。",
        "救急扶危，请找专门的服务。",
      ),
    },
    {
      title: tr("Not a medical device", "唔係醫療器械", "不是医疗器械"),
      body: tr(
        "Health questions belong with doctors and professionals.",
        "健康問題，請問醫生同專業人員。",
        "健康问题，请问医生和专业人员。",
      ),
    },
    {
      title: tr("Not a stand-in for family", "唔會代替你", "不会代替你"),
      body: tr(
        "DoDo's job is to make caring easier — it connects people.",
        "DoDo 嘅角色，係令關心更容易發生——佢連結人。",
        "DoDo 的角色，是让关心更容易发生——它连接人。",
      ),
    },
  ],
};

export const CAREGIVERS = {
  eyebrow: tr("The caregiver side", "照顧者一面", "照顾者一面"),
  title: tr(
    "On your side, a simple caregiver view",
    "你嗰邊，一個簡單嘅照顧者介面",
    "你那边，一个简单的照顾者界面",
  ),
  body: tr(
    "Your parents do the talking; you see what matters. Set gentle reminders. Tune when DoDo says hello. Read short updates. Your parents decide who sees what.",
    "爸媽負責傾偈，你負責睇重點。設定提一提。較好問候時間。睇簡短近況。邊個睇到啲乜，由爸媽話事。",
    "爸妈负责聊天，你负责看重点。设定提醒。调好问候时间。看简短近况。谁看到什么，由爸妈说了算。",
  ),
  consentChip: tr("Shared with consent", "經同意先分享", "经同意才分享"),
  previewLabel: tr(
    "Product interface preview · In-development build",
    "產品介面預覽 · 開發中版本",
    "产品界面预览 · 开发中版本",
  ),
  shots: [
    {
      img: "dodo-care-console-overview.png",
      caption: tr(
        "One page: daily summary, follow-up queue, 7-day trend.",
        "一頁睇晒：每日摘要、跟進佇列、七日趨勢。",
        "一页看全：每日摘要、跟进队列、七日趋势。",
      ),
      alt: tr(
        "Care view overview screen: daily summary, follow-up queue and 7-day trend",
        "照顧者介面總覽：每日摘要、跟進佇列同七日趨勢",
        "照顾者界面总览：每日摘要、跟进队列和七日趋势",
      ),
    },
    {
      img: "dodo-care-console-reminders.png",
      caption: tr(
        "Set spoken reminders: type, time, schedule.",
        "設定語音提一提：揀類型、時間、頻率。",
        "设定语音提醒：选类型、时间、频率。",
      ),
      alt: tr(
        "Care view reminder form with type, time and schedule fields",
        "照顧者介面提醒表單：類型、時間、頻率",
        "照顾者界面提醒表单：类型、时间、频率",
      ),
    },
    {
      img: "dodo-care-console-proactive.png",
      caption: tr(
        "Tune when DoDo greets first. Pause anytime.",
        "較好 DoDo 幾時主動問候。隨時暫停。",
        "调好 DoDo 什么时候主动问候。随时暂停。",
      ),
      alt: tr(
        "Care view settings for proactive greetings with pause control",
        "照顧者介面主動問候設定，可隨時暫停",
        "照顾者界面主动问候设定，可随时暂停",
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
    "同我哋講下：爸媽嘅一日點過、你最擔心乜、DoDo 可以點幫手。你講嘅嘢，直接影響產品點做落去。",
    "和我们说说：爸妈的一天怎么过、你最担心什么、DoDo 可以怎么帮。你说的话，直接影响产品怎么做下去。",
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
    "Team members, advisors, institutional support, and funding are announced once formally confirmed.",
    "團隊成員、顧問、院校支援同資助，正式落實咗就會公布。",
    "团队成员、顾问、院校支持和资助，正式落实了就会公布。",
  ),
};

export const FOOTER = {
  h2: tr(
    "Let DoDo keep your parents company, every day.",
    "等 DoDo 幫你，日日陪住爸媽。",
    "让 DoDo 帮你，天天陪着爸妈。",
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
