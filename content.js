// =============================================================================
// DoDo VoiceBox — 文案單一事實來源 (single source of truth for all copy)
// 框架：VISION site（docs/CLAIMS_AUDIT_2026-07-06.md v2）
// 規則：zh-HK (TC) 係源語言；SC/EN 係 native 演繹，唔係直譯。
// 硬規則：文案改動必須過 scripts/check-homepage-content.mjs（pin + 禁詞）。
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
  { id: "progress", label: tr("Where we are", "我哋去到邊", "我们到哪了") },
  { id: "why-trust", label: tr("Why trust it", "點解可信", "为何可信") },
  { id: "caregivers", label: tr("For caregivers", "照顧者", "照顾者") },
  { id: "pilot", label: tr("Talk to us", "同我哋傾", "联系我们") },
];

// --- 1 · HERO（vision layer，方案 A，owner 批准 2026-07-06）---------------------

export const HERO = {
  h1: tr(
    "A Cantonese companion that starts the conversation — keeping Mum and Dad company every day.",
    "一隻會主動開口嘅廣東話公仔，陪爸媽過每一日。",
    "一只会主动开口的粤语陪伴公仔，陪爸妈过好每一天。",
  ),
  lead: tr(
    "On the days you can't be there, DoDo says good morning first, keeps your parents chatting, and gently reminds them about the small things — drink some water, take the keys. When it comes to government benefits, it only shares facts a person has checked against official Hong Kong sources. And it shares how your parents are doing only with their consent.",
    "你返唔到去嘅日子，DoDo 會同爸媽講早晨、陪佢哋傾偈，輕輕提一提飲水、帶鎖匙呢啲小事。講到政府福利，佢只會講經人手對照官方網站核實嘅資料。喺爸媽同意之下，先會同你分享關注。",
    "你不能回去的日子，DoDo 会先向爸妈道早安、陪他们聊天，轻轻提醒喝水、带钥匙这些小事。讲到政府福利，它只讲经人工对照官方网站核实过的资料。在爸妈同意之下，才会和你分享值得关心的事。",
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

// --- 2 · STATUS BAND（progress layer —— 全站唯一階段標示）------------------------

export const STATUS_BAND = {
  line: tr(
    "July 2026 · Founder testing on the real device · Pilot in preparation",
    "2026年7月 · 創辦人真機測試中 · 試點籌備中",
    "2026年7月 · 创始人真机测试中 · 试点筹备中",
  ),
  link: tr("See where we are", "睇下我哋去到邊", "看看我们到哪了"),
};

// --- 3 · 產品體驗（vision layer，四幕，現在式）----------------------------------

export const EXPERIENCE = {
  eyebrow: tr("The experience", "產品體驗", "产品体验"),
  title: tr(
    "What DoDo does through the day",
    "一日之間，DoDo 做啲乜",
    "一天之中，DoDo 做些什么",
  ),
  body: tr(
    "Nothing to learn, nothing to install. Speaking is the whole interface.",
    "唔使學、唔使裝 app。開聲講嘢，就係全部嘅操作。",
    "不用学、不用装 app。开口说话，就是全部的操作。",
  ),
  scenes: [
    {
      k: "greet",
      title: tr("Morning starts with a hello", "朝早，佢先開口", "早上，它先开口"),
      body: tr(
        "DoDo doesn't wait to be spoken to. It says good morning first and chats about the day ahead. Someone answers. Someone listens. The flat feels less quiet.",
        "唔使等人叫，DoDo 會主動講早晨，同爸媽傾下今日想做啲乜。一日落嚟，有人應、有嘢傾，屋企唔再靜英英。",
        "不用等人叫，DoDo 会主动道早安，和爸妈聊聊今天想做什么。一天下来，有人应、有话聊，家里不再冷清。",
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
        "Ask about benefits — it only says what's been checked",
        "問福利，佢核實過先講",
        "问福利，它核实过才说",
      ),
      body: tr(
        "The Old Age Living Allowance, fruit money, health care vouchers, the $2 fare — every benefit fact DoDo gives has been checked by a person against official government pages, with the date on record. When a fact passes its review date, DoDo goes quiet on it rather than guess.",
        "長生津、生果金、醫療券、兩蚊優惠——DoDo 答嘅每一條福利資訊，都經人手對照過政府官方網站，記低核實日期。資料過咗有效期，佢寧願唔講，都唔會靠估。",
        "长生津、生果金、医疗券、两元优惠——DoDo 回答的每一条福利资讯，都经人工对照过政府官方网站，记下核实日期。资料过了有效期，它宁愿不说，也不会乱猜。",
      ),
      dialog: [
        { who: "elder", say: tr(
          "How much is the fruit money these days?",
          "生果金而家係幾多呀？",
          "生果金现在是多少呀？",
        ) },
        { who: "dodo", say: tr(
          "That one I've got checked — I'll tell you roughly what it is. For the exact figure and the application, how about your daughter goes through it with you?",
          "呢條我哋核實過，我話你知個大約數。確實金額同埋點申請，等阿女攞正式資料同你一齊搞，好唔好？",
          "这条我们核实过，我告诉你一个大约数。确切金额和怎么申请，让女儿拿正式资料和你一起办，好不好？",
        ) },
      ],
    },
    {
      k: "remind",
      title: tr("Small things, gently remembered", "小事，輕輕提一提", "小事，轻轻提一提"),
      body: tr(
        "A sip of water, a video call with the family, keys before heading out. Caregivers set it up once; DoDo mentions it at the right moment, in a warm Cantonese voice.",
        "飲多啖水、同屋企人視像、出門帶鎖匙——照顧者較好一次，DoDo 就會喺啱嘅時間，用把溫和嘅廣東話聲提一提。",
        "多喝口水、和家人视频、出门带钥匙——照顾者设置好一次，DoDo 就会在合适的时间，用温和的粤语提醒一声。",
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
        "DoDo never acts on its own. With your parents' consent, it passes on what deserves attention — and whether and how to follow up is always a person's call.",
        "DoDo 唔會自把自為。喺爸媽同意之下，佢會將值得關心嘅事話你知；跟唔跟進、點樣跟進，永遠由你哋屋企人決定。",
        "DoDo 不会自作主张。在爸妈同意之下，它会把值得关心的事告诉你；跟不跟进、怎样跟进，永远由你们家人决定。",
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

// --- 4 · 設計理念＋四款公仔（vision layer）--------------------------------------

export const DESIGN = {
  eyebrow: tr("Design philosophy", "設計理念", "设计理念"),
  title: tr(
    "A friendly companion, not a gadget",
    "一隻親切嘅公仔，唔係一部冷冰冰嘅機器",
    "一只亲切的公仔，不是一部冷冰冰的机器",
  ),
  body: tr(
    "From the start we wanted the most natural thing an older adult could use: open your mouth and talk, nothing to learn. And it should look like something you'd actually want at home — a companion, not equipment.",
    "由一開始，我哋想做嘅就係一件最自然嘅嘢：開口就傾，唔使學。而佢個樣，要係一件你真係想擺喺屋企嘅嘢——一個陪伴，唔係一件器材。",
    "从一开始，我们想做的就是一件最自然的东西：开口就聊，不用学。而它的样子，要是一件你真的想放在家里的东西——一个陪伴，不是一件器材。",
  ),
  points: [
    {
      title: tr("Natural and simple", "自然，簡單", "自然，简单"),
      body: tr(
        "You just talk. Ask a question, hear a reminder, or chat about the day — all by speaking.",
        "開口就用得。想問嘢、聽提一提、又或者淨係想傾下偈，全部用把口就得。",
        "开口就能用。想问事情、听个提醒、或者只是想聊聊天，全部用嘴就行。",
      ),
    },
    {
      title: tr("Familiar, not clinical", "親切，唔似儀器", "亲切，不像仪器"),
      body: tr(
        "Many older adults dislike devices that look technical or hospital-like — they feel cold, like a daily reminder of age. A friendly character carries none of that. It's part of the home, not a machine in it.",
        "好多長者唔鍾意太有科技感、似儀器嘅裝置——覺得冷冰冰，好似日日提住自己年紀。一隻得意嘅公仔冇呢種感覺：佢係屋企嘅一份子，唔係屋企入面嘅一部機。",
        "很多长者不喜欢太有科技感、像仪器的装置——觉得冷冰冰，好像天天提醒自己年纪。一只可爱的公仔没有这种感觉：它是家里的一份子，不是家里的一台机器。",
      ),
    },
    {
      title: tr("A companion to keep close", "想擺喺身邊嘅陪伴", "想放在身边的陪伴"),
      body: tr(
        "Warm, pet-like characters make people want them around every day. DoDo comes as four — pick the one that feels right at home.",
        "暖笠笠、似隻小寵物嘅造型，令人想日日擺喺身邊。DoDo 有四款，揀一隻最啱你屋企嘅。",
        "暖暖的、像只小宠物的造型，让人想天天放在身边。DoDo 有四款，选一只最适合你家的。",
      ),
    },
  ],
  note: tr(
    "This direction draws on elderly-care technology research and our early conversations with older adults. It reflects our design intent.",
    "呢個方向參考咗長者科技研究，同埋我哋同長者傾偈嘅心得。佢代表我哋嘅設計初衷。",
    "这个方向参考了长者科技研究，以及我们和长者聊天的心得。它代表我们的设计初衷。",
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
        "慢慢嚟、好溫柔、好有耐性，適合鍾意安靜節奏嘅長者。",
        "慢慢来、很温柔、很有耐性，适合喜欢安静节奏的长者。",
      ),
      alt: tr("DoDo Cute Sloth companion design", "DoDo 可愛樹懶造型", "DoDo 可爱树懒造型"),
    },
  ],
};

// --- 5 · 我哋去到邊（progress layer —— 事實區，truth sheet §2 為源）---------------

export const PROGRESS = {
  eyebrow: tr("Progress, on the record", "進度實錄", "进度实录"),
  title: tr("Where we are", "我哋去到邊", "我们到哪了"),
  body: tr(
    "This section is facts only: what's done, when, and what's next. The vision is above — the evidence is here.",
    "呢一部分只講事實：做咗乜、幾時做、下一步係乜。願景喺上面，證據喺呢度。",
    "这一部分只讲事实：做了什么、什么时候做、下一步是什么。愿景在上面，证据在这里。",
  ),
  milestones: [
    {
      date: tr("Mid-June 2026", "2026年6月中", "2026年6月中"),
      title: tr("The first real device held a conversation", "第一部真機，傾到偈", "第一台真机，聊上了"),
      body: tr(
        "Our hardware prototype carried a live Cantonese conversation over Wi-Fi — fifteen back-and-forth turns with a real person.",
        "硬件原型行 Wi-Fi，同真人用廣東話連續傾足十五個回合。",
        "硬件原型通过 Wi-Fi，和真人用粤语连续聊了十五个回合。",
      ),
    },
    {
      date: tr("Late June 2026", "2026年6月下旬", "2026年6月下旬"),
      title: tr("A welfare knowledge base, with machine guards", "福利知識庫成形，加上機器防護", "福利知识库成形，加上机器防护"),
      body: tr(
        "We built a Hong Kong welfare knowledge base and locked it down: entries are append-only and fully logged, so nothing can be quietly changed.",
        "起好香港福利知識庫，仲加咗防護：資料只可以追加、全程有紀錄，冇嘢可以靜靜哋改。",
        "建好香港福利知识库，还加了防护：资料只能追加、全程有记录，没有东西可以悄悄地改。",
      ),
    },
    {
      date: tr("Early July 2026", "2026年7月初", "2026年7月初"),
      title: tr("Every elder-facing fact checked by hand", "面向長者嘅資訊，逐條人手核實", "面向长者的资讯，逐条人工核实"),
      body: tr(
        "The founder checked every elder-facing welfare entry, one by one, against official .gov.hk pages — verification date and review deadline on record. When an entry passes its deadline, the device stops saying it. Quiet beats wrong.",
        "創辦人將每條長者版福利資訊，逐條對照 .gov.hk 官方頁核實，記低核實日期同到期日。過咗期，部機就唔會再講嗰條資料——寧靜好過講錯。",
        "创始人把每条长者版福利资讯，逐条对照 .gov.hk 官方页核实，记下核实日期和到期日。过了期，机器就不会再讲那条资料——安静好过说错。",
      ),
    },
    {
      date: tr("5 July 2026", "2026年7月5日", "2026年7月5日"),
      title: tr("Founder live-testing begins", "創辦人真機實測開始", "创始人真机实测开始"),
      body: tr(
        "The product's first daily user is us. For one to two weeks the founder lives with the device — using it every day, logging what works and what doesn't.",
        "產品嘅第一個日常用戶，係我哋自己。創辦人用住部真機生活一至兩個禮拜，日日用、日日記低邊度得、邊度唔得。",
        "产品的第一个日常用户，是我们自己。创始人带着真机生活一到两个星期，天天用、天天记下哪里行、哪里不行。",
      ),
    },
  ],
  stats: [
    tr("11 elder-facing welfare entries · each checked by hand", "11 條長者版福利資訊 · 逐條人手核實", "11 条长者版福利资讯 · 逐条人工核实"),
    tr("13 changes shipped in 3 days", "3 日之內 · 落實 13 個改動", "3 天之内 · 落实 13 个改动"),
    tr("Expired facts · silenced automatically", "過期資料 · 自動收聲", "过期资料 · 自动收声"),
  ],
  nextTitle: tr("What comes next", "下一步", "下一步"),
  next: [
    tr("Pilot preparation: consent and privacy paperwork", "試點籌備：同意書同私隱文件", "试点筹备：同意书和隐私文件"),
    tr("User testing with older adults", "與長者進行用戶測試", "与长者进行用户测试"),
    tr("The caregiver view, in active development", "照顧者介面，密鑼緊鼓整緊", "照顾者界面，正在加紧开发"),
    tr("Real product photography and a short demo film", "產品實拍相同示範短片", "产品实拍照片和示范短片"),
  ],
};

// --- 6 · 點解可信（truth sheet §4 全數納入）--------------------------------------

export const WHY_TRUST = {
  eyebrow: tr("Why trust it", "點解可信", "为何可信"),
  title: tr("Honesty is a product feature", "誠實，係產品功能", "诚实，是产品功能"),
  body: tr(
    "A companion is only worth having if you can trust what it says. These aren't slogans — they're rules built into the product and the process.",
    "一個陪伴，講嘅嘢信得過先有意思。以下唔係口號，係寫咗入產品同流程嘅規則。",
    "一个陪伴，说的话信得过才有意义。以下不是口号，是写进产品和流程的规则。",
  ),
  blocks: [
    {
      title: tr("Checked before spoken; silent when expired", "核實先講，過期寧靜", "核实才说，过期安静"),
      body: tr(
        "Every welfare fact carries a human verification record and a review deadline. Past the deadline, the system structurally cannot say it — quiet beats wrong.",
        "每條福利資訊都有人手核實紀錄同到期日。一過期，系統結構上講唔出口——寧靜好過講錯。",
        "每条福利资讯都有人工核实记录和到期日。一过期，系统结构上说不出口——安静好过说错。",
      ),
    },
    {
      title: tr("Rough numbers for elders, exact ones for caregivers", "大約數畀長者，準確數畀照顧者", "大约数给长者，精确数给照顾者"),
      body: tr(
        "Older adults shouldn't have to memorise figures. DoDo tells them roughly what a benefit is worth; the exact amounts and application steps go to the caregiver side, where paperwork actually happens.",
        "長者唔使死記數字。DoDo 同佢哋講大約數，知道有呢回事就夠；精確金額同申請步驟，去咗照顧者嗰邊——辦手續嘅人先需要。",
        "长者不用死记数字。DoDo 和他们讲大约数，知道有这回事就够；精确金额和申请步骤，去了照顾者那边——办手续的人才需要。",
      ),
    },
    {
      title: tr("Conversations aren't kept as text", "對話唔會俾人睇返", "对话不会被人翻看"),
      body: tr(
        "Logs never store what was actually said — only technical traces. Data has a retention limit and is purged on schedule. Localised voice processing is on our roadmap.",
        "日誌不儲存對話原文，只記必要嘅技術紀錄。資料有保留期限，到期就清。語音處理本地化，喺我哋嘅 roadmap 上。",
        "日志不储存对话原文，只记必要的技术记录。资料有保留期限，到期就清。语音处理本地化，在我们的 roadmap 上。",
      ),
    },
    {
      title: tr("Consent first; the default is no", "分享之前先問同意；預設係唔分享", "分享之前先问同意；默认是不分享"),
      body: tr(
        "Nothing is shared with family without your parents' agreement. Whenever there's doubt, the system defaults to not sharing.",
        "未經爸媽同意，唔會同家人分享任何嘢。有懷疑嗰陣，系統預設係「唔分享」。",
        "未经爸妈同意，不会和家人分享任何东西。有疑问的时候，系统默认是「不分享」。",
      ),
    },
    {
      title: tr("No ads; not built for screen time", "無廣告，唔靠你用得耐", "无广告，不靠你用得久"),
      body: tr(
        "DoDo carries no advertising, and we explicitly refuse to measure success by how long anyone talks to it. It doesn't need your parents to be hooked — only to be helped.",
        "DoDo 無廣告，我哋亦明文唔用「用咗幾耐」做成功指標。佢唔需要爸媽掛住佢，只需要喺有需要嗰時幫到手。",
        "DoDo 没有广告，我们也明文不用「用了多久」做成功指标。它不需要爸妈惦记它，只需要在有需要的时候帮上忙。",
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

// --- 7 · DoDo 唔係乜（honest block，取代舊市場比較卡）----------------------------

export const NOT_DODO = {
  eyebrow: tr("To be clear", "講清楚", "说清楚"),
  title: tr("What DoDo is not", "DoDo 唔係乜", "DoDo 不是什么"),
  items: [
    {
      title: tr("Not an SOS device", "唔係平安鐘", "不是平安钟"),
      body: tr(
        "DoDo is not an urgent-help device. For anything urgent, dedicated services are the right call — always.",
        "DoDo 唔係緊急求助裝置。救急扶危，永遠要靠返專門嘅服務。",
        "DoDo 不是紧急求助装置。救急扶危，永远要靠专门的服务。",
      ),
    },
    {
      title: tr("Not a medical device", "唔係醫療器械", "不是医疗器械"),
      body: tr(
        "DoDo gives no medical advice and replaces no professional judgement.",
        "DoDo 唔會提供醫療建議，亦唔會代替醫生同專業人員嘅判斷。",
        "DoDo 不会提供医疗建议，也不会代替医生和专业人员的判断。",
      ),
    },
    {
      title: tr("Not a stand-in for family", "唔會代替你", "不会代替你"),
      body: tr(
        "DoDo's job is to make caring easier — connecting people, never standing in for them.",
        "DoDo 嘅角色，係令關心更容易發生——連結人，唔係取代人。",
        "DoDo 的角色，是让关心更容易发生——连接人，不是取代人。",
      ),
    },
  ],
};

// --- 8 · 照顧者（vision + concept；一律標示意圖）---------------------------------

export const CAREGIVERS = {
  eyebrow: tr("The caregiver side", "照顧者一面", "照顾者一面"),
  title: tr(
    "On your side, a simple caregiver view",
    "你嗰邊，一個簡單嘅照顧者介面",
    "你那边，一个简单的照顾者界面",
  ),
  body: tr(
    "Your parents do the talking; you see what matters. In the caregiver view you set gentle reminders, tune when DoDo says hello first, and read short updates. Who sees what is decided by your parents.",
    "爸媽負責傾偈，你負責睇重點。喺照顧者介面，你可以設定溫和提一提、較好 DoDo 幾時主動問候，亦睇到簡短近況。邊個睇到啲乜，由爸媽話事。",
    "爸妈负责聊天，你负责看重点。在照顾者界面，你可以设定温和提醒、调好 DoDo 什么时候主动问候，也看到简短近况。谁看到什么，由爸妈说了算。",
  ),
  conceptLabel: tr("Concept illustration", "示意圖 · 概念設計", "示意图 · 概念设计"),
  consentChip: tr("Shared with consent", "經同意先分享", "经同意才分享"),
  updatesTitle: tr("Today, in brief", "今日重點", "今日重点"),
  updates: [
    tr("A good morning chat", "朝早傾咗一輪偈", "早上聊了一阵天"),
    tr("Water reminder — answered", "飲水提一提 · 有回應", "喝水提醒 · 有回应"),
    tr("Mentioned wanting dim sum with the family", "提起想同屋企人去飲茶", "提起想和家人去喝茶"),
  ],
  remindersTitle: tr("Gentle reminders", "溫和提一提", "温和提醒"),
  reminders: [
    tr("Drink some water · three times daily", "飲多啖水 · 每日三次", "多喝口水 · 每天三次"),
    tr("Video call with the family · Saturdays", "同屋企人視像 · 逢禮拜六", "和家人视频 · 每周六"),
    tr("Take the keys · before going out", "出門帶鎖匙 · 出門之前", "出门带钥匙 · 出门之前"),
  ],
};

// --- 9 · 同我哋傾（caregiver-primary；NGO 一行）----------------------------------

export const PILOT = {
  eyebrow: tr("Talk to us", "同我哋傾", "联系我们"),
  title: tr(
    "An older adult at home? Talk to us.",
    "屋企有長者？同我哋傾下。",
    "家里有长者？和我们聊聊。",
  ),
  body: tr(
    "Tell us how your parents' days go, what you worry about, and whether DoDo could help. What we hear shapes what we build.",
    "同我哋講下：爸媽嘅一日係點過、你最擔心啲乜、DoDo 幫唔幫到手。你哋講嘅嘢，會直接影響產品點樣做落去。",
    "和我们说说：爸妈的一天怎么过、你最担心什么、DoDo 帮不帮得上。你们说的话，会直接影响产品怎么做下去。",
  ),
  ngoLine: tr(
    "NGOs and elderly-service teams exploring a pilot are welcome to reach out too.",
    "社福機構或長者服務團隊想探討試點合作，同樣歡迎搵我哋。",
    "社福机构或长者服务团队想探讨试点合作，同样欢迎联系我们。",
  ),
  whatsapp: tr("WhatsApp: 64104866", "WhatsApp：64104866", "WhatsApp：64104866"),
  call: tr("Call: 64104866", "電話：64104866", "电话：64104866"),
};

// --- 10 · 團隊＋Footer -----------------------------------------------------------

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
    "Team members, advisors, institutional support, and funding will be announced only once formally confirmed.",
    "團隊成員、顧問、院校支援同資助，正式落實咗先會公布。",
    "团队成员、顾问、院校支持和资助，正式落实了才会公布。",
  ),
};

export const FOOTER = {
  h2: tr(
    "On the days you can't be there, let DoDo keep them company.",
    "你返唔到去嘅日子，等 DoDo 陪住佢哋。",
    "你不能回去的日子，让 DoDo 陪着他们。",
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
