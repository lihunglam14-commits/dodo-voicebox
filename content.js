// =============================================================================
// DoDo VoiceBox — 文案單一事實來源 v10（owner 比較區四行＋H1 一行法，2026-07-06）
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
  { key: "TC", code: "zh-Hant", label: "廣", aria: "Cantonese Traditional Chinese" },
  { key: "SC", code: "zh-Hans", label: "简", aria: "Simplified Chinese" },
  { key: "EN", code: "en", label: "EN", aria: "English" },
];

export const CONTACT = {
  phone: "64104866",
  whatsapp: "https://wa.me/85264104866",
  email: "dodoaivoicebox@gmail.com",
};

export const NAV_COPY = {
  label: tr("Main navigation", "主要導覽", "主要导航"),
  sections: tr("Sections", "章節", "章节"),
  language: tr("Language", "語言", "语言"),
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
    "DoDo is a small tool that keeps your parents company in Cantonese. Chatting every day, you'll notice how they're feeling. Even from overseas, you can still show you care. Daily reminders and welfare facts — it helps with both, and only says what has been checked. Above all, it respects your parents' privacy and wishes.",
    "DoDo 係一件用廣東話陪父母傾偈嘅小工具。日日傾計，你會留意到父母嘅心情變化。人喺外地，一樣關心到。日常提醒、福利資訊，佢都幫到手——而且只講核實過嘅。最緊要，佢尊重父母嘅私隱同意願。",
    "DoDo 是一件用粤语陪父母聊天的小工具。天天聊天，你会留意到父母的心情变化。人在外地，一样关心得到。日常提醒、福利资讯，它都帮得上——而且只讲核实过的。最重要的是，它尊重父母的隐私和意愿。",
  ),
  chips: [
    { label: tr("Checks in first", "會主動關心", "会主动关心"), target: "exp-greet" },
    { label: tr("Notices their mood", "留意到心情變化", "留意到心情变化"), target: "exp-handoff" },
    { label: tr("Daily reminders", "日常提醒", "日常提醒"), target: "exp-remind" },
  ],
  ctaPrimary: tr("Talk to us", "同我哋傾下", "和我们聊聊"),
  ctaSecondary: tr("How DoDo works", "DoDo 點樣運作", "DoDo 怎样运作"),
  deviceCaption: tr("Cantonese · It says good morning first", "廣東話 · 主動同你講早晨", "粤语 · 主动和你说早安"),
  carousel: {
    title: tr("DoDo's day", "DoDo 嘅一日", "DoDo 的一天"),
    play: tr("Play slideshow", "播放輪播", "播放轮播"),
    pause: tr("Pause slideshow", "暫停輪播", "暂停轮播"),
    frames: [
      {
        label: tr("Morning · Checks in first", "朝早 · 主動問候", "早上 · 主动问候"),
        bubble: tr(
          "Good morning. Bit cool out there today — wear something warm.",
          "早晨呀。今朝有啲涼，記住著多件衫呀。",
          "早上好。今早有点凉，记得多穿件衣服。",
        ),
      },
      {
        label: tr("Afternoon · Keeps company", "下晝 · 陪傾偈", "下午 · 陪聊天"),
        bubble: tr(
          "That film we talked about yesterday — fancy chatting about it again today?",
          "尋日講開嗰齣戲，今日想唔想再傾下？",
          "昨天说起的那部戏，今天想不想再聊聊？",
        ),
      },
      {
        label: tr("Evening · A gentle reminder", "黃昏 · 提一提", "黄昏 · 小提醒"),
        bubble: tr(
          "Nearly six. Remember you're meeting Mrs Chan for dim sum tomorrow?",
          "就嚟六點喇。記唔記得聽日約咗陳太飲茶呀？",
          "快六点了。记不记得明天约了陈太喝茶呀？",
        ),
      },
    ],
  },
};

export const EXPERIENCE = {
  eyebrow: tr("The experience", "產品體驗", "产品体验"),
  title: tr(
    "How DoDo works, day to day",
    "DoDo 嘅日常運作",
    "DoDo 的日常运作",
  ),
  body: tr(
    "You can chat by voice. On the check-in page, review what DoDo heard and select “Save my answer” to share it with the family members you’ve authorized.",
    "平時可以開口同 DoDo 傾偈。喺問候頁講完，睇清楚佢聽到嘅字，再撳「保存今次回答」，你授權嘅家人先會睇到。",
    "平时可以直接和 DoDo 聊天。在问候页说完，核对识别出来的文字，再点保存这次回答，你授权的家人才能看到。",
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
        "When the elder page shows it’s listening, you can ask a question or tell DoDo about your day.",
        "長者頁顯示收音時，開口就用得。可以問嘢，亦可以同 DoDo 傾下今日發生咩事。",
        "长者页面显示正在收音时，可以开口提问，也可以和 DoDo 聊聊今天的事。",
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
        "Elders hear the rough figure — enough to know it exists. Exact amounts and application steps go to the caregiver. That is who handles the paperwork.",
        "長者聽大約數，知道有呢回事就夠。精確金額同申請步驟，交畀照顧者。辦手續嘅人先用得着。",
        "长者听大约数，知道有这回事就够。精确金额和申请步骤，交给照顾者。办手续的人才用得着。",
      ),
    },
    {
      title: tr("Conversations stay private", "對話保得住私隱", "对话保得住隐私"),
      body: tr(
        "When your parent saves a check-in answer, family members they have authorized can read their exact words. For a web check-in typed from start to finish, your parent can choose to include their own feelings in the seven-day summary. If they use dictation, their feelings from that answer stay out of the summary, even if they edit the draft. If a paired voice box plays the question, a typed answer also stays out of the summary. We also plan to move voice processing to Hong Kong.",
        "父母儲存問候答覆後，獲佢哋授權嘅家人可以睇返原文。喺網頁收到問候，由頭到尾打字答，可以揀將自己嘅感受計入七日摘要。用過聽寫草稿，就算之後改過字，今次感受都唔會計入摘要。由配對聲盒播嘅問候，就算打字答，感受亦唔會計入摘要。我哋仲計劃緊將語音處理搬返香港做。",
        "父母保存问候答复后，经他们授权的家人可以查看原文。在网页收到问候并全程打字回答时，可以选择把自己的感受计入七天摘要。用过听写草稿，即使后来改过文字，这次的感受也不会计入摘要。如果由配对的语音设备播放问候，即使打字回答，感受也不会计入摘要。我们还计划把语音处理搬回香港做。",
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
      intro: tr(
        "For a family conversation, open the family link from your caregiver and enter a valid chat access code. After reopening or reloading the page, connect again. If access expires or is withdrawn, ask your caregiver for a new code. Tap “Start talking” when it appears and wait for the page to show it is listening.",
        "傾家庭對話，請開照顧者畀你嘅家庭連結，再輸入有效授權碼。重開或重新載入網頁後，要重新連結。授權到期或被撤回，就向照顧者攞新碼。見到「開始講」再撳，等畫面顯示收音先開口。",
        "进行家庭对话时，请打开照顾者提供的家庭链接，输入有效授权码。重新打开或刷新页面后，请重新连接。授权到期或被撤回时，请向照顾者索取新码。看到开始说话按钮后再点，等页面显示正在录音再开口。",
      ),
      body: tr(
        "In the separate demo, if the page says you can interrupt, speak while DoDo is playing an ordinary reply. The microphone is off while DoDo is thinking. Tap “Stop Conversation” to end the chat. If you see “I want the next turn”, tap it to reserve a turn with the mic off. When “Start speaking” appears, tap it and wait for the recording message. Choose “Send recording” or “Discard recording” when you finish.",
        "喺獨立示範入面，畫面提示可以插話時，DoDo 講緊普通答覆都可以開聲改口。等 DoDo 諗答案時，咪係閂住嘅。想停就撳「停止傾偈」。見到「下一句我想講」可以先撳掣預約，咪仍然閂住。見到「開始講」再撳，等畫面話收音中先講。講完可揀「講完送出」或「棄錄」。",
        "在独立演示中，页面提示可以插话时，DoDo 的日常回复说到一半也可以开口纠正。等 DoDo 想答案时，麦克风是关着的。想结束对话，请点停止键。看到可以预约下一句时，点一下预约，麦克风仍然关闭。等开始录音按钮出现后再点，看到录音提示就可以说。说完可选择发送或丢弃录音。",
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
  intro: tr(
    "They wait for someone to start. DoDo starts.",
    "佢哋等人開始，DoDo 主動開始。",
    "它们等人开始，DoDo 主动开始。",
  ),
  rows: [
    {
      themName: tr("Personal alarm", "平安鐘", "平安钟"),
      them: tr("Speaks only in an urgent moment", "緊急嗰刻先出聲", "紧急时刻才出声"),
      dodo: tr("Keeps company on ordinary days", "平常日子都陪傾", "平常日子也陪聊"),
    },
    {
      themName: tr("CCTV camera", "監控鏡頭", "监控镜头"),
      them: tr("Points a lens at your parents", "對住父母錄影", "对着父母录像"),
      dodo: tr(
        "No camera or video surveillance. DoDo keeps your parents company by voice.",
        "唔錄影、唔監視，用把聲陪伴，尊重私隱",
        "不录像、不监视，用声音陪伴，尊重隐私",
      ),
    },
    {
      themName: tr("Typical AI chat tools", "市面上嘅 AI 聊天工具", "市面上的 AI 聊天工具"),
      them: tr("Need typing and taps", "要識打字、撳掣先用到", "要会打字、按键才能用"),
      dodo: tr("Chat by voice. DoDo can start a check-in.", "可以開聲傾，DoDo 亦會主動問候", "可以开口聊天，DoDo 也会主动问候"),
    },
    {
      themName: tr("Phone / tablet", "手機／平板", "手机／平板"),
      them: tr("Your parents must learn and remember", "父母要學、要記", "父母要学、要记"),
      dodo: tr("The elder page shows when to speak", "長者頁會提示幾時可以講", "长者页面会提示什么时候可以说话"),
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
    "On the family care page, you can read the family care summary or elder memories. You only see the records your access code covers. Your parents decide who sees what.",
    "喺家庭照護頁，可以按授權碼嘅範圍睇返呢位長者嘅家人關心摘要或長者記憶。邊個睇到啲乜，由父母話事。",
    "在家庭照护页面，可以按授权码的范围查看这位长者的家人关心摘要或长者记忆。谁看到什么，由父母说了算。",
  ),
  consentChip: tr("Shared with consent", "經同意先分享", "经同意才分享"),
  previewLabel: tr(
    "Product interface preview · In-development build · Fictional household",
    "產品介面預覽 · 開發中版本 · 虛構家庭示例",
    "产品界面预览 · 开发中版本 · 虚构家庭示例",
  ),
  previewNote: tr(
    "Reminder settings in the development demo use demo data.",
    "開發示範入面嘅提醒設定用示範資料。",
    "开发演示中的提醒设置使用演示数据。",
  ),
  shots: [
    {
      img: "care-crop-summary.webp", w: 629, h: 162,
      caption: tr(
        "See how many of today’s conversations have a recorded feeling.",
        "睇今日保存咗幾多輪對話，有幾多輪確認到感受。",
        "查看今天保存了几轮对话，其中几轮确认了感受。",
      ),
      alt: tr(
        "Cropped preview of the caregiver view daily summary card",
        "照顧者介面每日摘要卡裁切預覽",
        "照顾者界面每日摘要卡裁切预览",
      ),
    },
    {
      img: "care-crop-status.webp", w: 678, h: 652,
      caption: tr(
        "See how often each of six feelings appeared in the confirmed records.",
        "睇六種感受各佔已確認紀錄幾多。",
        "查看六种感受各占已确认记录的比例。",
      ),
      alt: tr(
        "Chart of six feelings in a fictional household: joy 60%, worry 20%, missing someone 20%",
        "虛構家庭六種感受紀錄圖：開心佔六成，擔心同掛住某人各佔兩成",
        "虚构家庭六种感受记录图：开心占六成，担心和想念某人各占两成",
      ),
    },
    {
      img: "care-crop-trend.webp", w: 1312, h: 302,
      caption: tr(
        "The bars count stored conversation turns. Days with no records are marked separately.",
        "每條柱代表嗰日保存嘅對話輪數。冇紀錄嘅日子會另外標示。",
        "每根柱子表示当天保存的对话轮数。没有记录的日子会单独标出。",
      ),
      alt: tr(
        "Seven days of stored conversation turns, with three days marked as having no records",
        "七日已保存對話輪數，當中三日冇紀錄",
        "七天已保存对话轮数，其中三天没有记录",
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
