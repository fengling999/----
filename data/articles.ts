export const articleCategories = ["无常", "执着", "慈悲", "正念", "焦虑", "愤怒", "亲密关系", "自我接纳"] as const;

export type ArticleCategory = (typeof articleCategories)[number];

export type DharmaArticle = {
  slug: string;
  title: string;
  summary: string;
  category: ArticleCategory;
  readingMinutes: number;
  scene: string;
  buddhistView: string;
  psychologyView: string;
  dailyPractice: string[];
  gentleReminder: string;
};

export const dharmaArticles: DharmaArticle[] = [
  {
    slug: "control-and-anxiety",
    title: "为什么越想控制，越感到焦虑",
    summary: "控制感能带来短暂安全，但当我们试图控制所有结果，焦虑反而会被不断喂大。",
    category: "焦虑",
    readingMinutes: 7,
    scene: "你反复检查消息、预演对话、设想最坏结果。明明已经做了很多准备，心里却还是觉得不够稳。",
    buddhistView: "佛学中的无常并不是要人放弃行动，而是提醒我们：结果从来不是单一意志能完全决定的。越执着于确定，越容易忽略当下已经具备的条件。",
    psychologyView: "焦虑常和对不确定性的低耐受有关。大脑试图通过反复思考获得安全感，但过度控制会让威胁系统持续活跃，使身体更难放松。",
    dailyPractice: ["写下你正在试图控制的三件事。", "圈出其中真正可行动的一件。", "把剩下的写成一句提醒：这部分我暂时只能允许它不确定。"],
    gentleReminder: "你可以认真准备，也可以承认有些结果不由你完全掌控。这不是失败，是现实。"
  },
  {
    slug: "impermanence-and-letting-go",
    title: "无常不是悲观，而是松手的开始",
    summary: "无常不是否定美好，而是让我们在变化中少一点僵硬，多一点清醒。",
    category: "无常",
    readingMinutes: 6,
    scene: "一段关系变淡，一个计划被打乱，曾经熟悉的状态不再稳定。你知道变化发生了，却还是很难接受。",
    buddhistView: "无常不是冷漠地说“一切都会失去”，而是温和地看见：所有经验都在条件中生起，也在条件变化中转变。看见无常，心才有机会从抓紧走向理解。",
    psychologyView: "人在变化面前会自然产生失落和抗拒。心理弹性不是立刻适应，而是在承认失落后，逐渐更新对现实的理解和行动。",
    dailyPractice: ["写下最近正在变化的一件事。", "写下你最舍不得的部分。", "写下今天你仍能照顾的一个具体条件。"],
    gentleReminder: "松手不等于不在乎。有时，松手是为了让自己不再被已经变化的事反复拉伤。"
  },
  {
    slug: "anger-hidden-needs",
    title: "愤怒背后，常常藏着未被看见的需要",
    summary: "愤怒不只是破坏性的情绪，它也可能在提示边界、尊重或公平的需要。",
    category: "愤怒",
    readingMinutes: 6,
    scene: "对方一句话让你立刻火大。你想反击，却又隐约知道，真正刺痛你的不只是这句话。",
    buddhistView: "正念看待愤怒，不是压下火气，而是在火升起时看见它。愤怒背后常有执着于“我必须被这样对待”的期待，也有真实需要等待被理解。",
    psychologyView: "愤怒常与边界被侵犯、委屈积累或需求被忽视有关。若只处理表面的攻击，容易错过更深层的需要。",
    dailyPractice: ["写下让你愤怒的具体事件。", "写下这件事触碰了你的什么需要。", "把指责句改成边界句：当……发生时，我需要……"],
    gentleReminder: "你可以承认愤怒，也可以选择不让愤怒替你说完所有话。"
  },
  {
    slug: "compassion-not-pleasing",
    title: "慈悲不是讨好别人，而是不再攻击自己",
    summary: "真正的慈悲包含清醒的边界，也包含对自己的基本善意。",
    category: "慈悲",
    readingMinutes: 7,
    scene: "你总是担心别人失望，于是答应很多事。表面上很体贴，心里却越来越疲惫，也越来越责怪自己。",
    buddhistView: "慈悲不是牺牲自己来换取关系稳定。若没有智慧和边界，慈悲容易变成讨好。对自己保有不伤害的态度，也是修心的一部分。",
    psychologyView: "讨好常来自对冲突、拒绝或被抛下的担心。自我慈悲能帮助人从羞耻中恢复，而不是靠持续压抑自己维持关系。",
    dailyPractice: ["写下你最近勉强答应的一件事。", "问自己：如果我不攻击自己，我真正想怎样回应？", "练习一句温和边界：我现在不能答应，但我愿意……"],
    gentleReminder: "善良不需要以耗尽自己为代价。边界不是冷漠，而是让关系更真实。"
  },
  {
    slug: "mindfulness-return-now",
    title: "正念练习：把注意力带回这一刻",
    summary: "正念不是清空大脑，而是知道自己正在经历什么，并一次次回到当下。",
    category: "正念",
    readingMinutes: 5,
    scene: "你坐下来想休息，脑子却开始播放今天没做完的事、明天可能发生的问题，以及很多评价自己的声音。",
    buddhistView: "正念是一种知道。知道吸气，知道呼气；知道念头来了，也知道它会走。它不要求心安静，只邀请心被看见。",
    psychologyView: "注意力会被威胁、遗憾和未完成任务吸引。正念训练可以帮助我们减少自动反应，提升对身体和情绪信号的觉察。",
    dailyPractice: ["把注意力放在三次自然呼吸上。", "每次走神时，只标记：想到未来、想到过去、正在评价。", "最后问自己：此刻我真正需要做的下一步是什么？"],
    gentleReminder: "走神不是失败。发现自己走神的那一刻，正是觉察发生的时刻。"
  },
  {
    slug: "relationship-attachment",
    title: "放不下一段关系时，可以先看见自己的执着",
    summary: "放不下常常不是软弱，而是心仍在寻找解释、连接或未完成的告别。",
    category: "亲密关系",
    readingMinutes: 8,
    scene: "你反复想起一个人，查看动态，回忆对话，想知道如果当时换一种方式，结果会不会不同。",
    buddhistView: "执着不是罪过，它说明心曾经投入。观照执着，是看见自己抓住的究竟是那个人，还是被理解、被选择、被珍惜的感受。",
    psychologyView: "关系中的未完成感会让大脑反复寻找解释。反复思考看似在解决问题，实际可能让依恋系统持续被激活。",
    dailyPractice: ["写下：我最放不下的是这个人、这段经历，还是某种可能性？", "写下：这段关系曾满足我什么需要？", "写下：今天我可以用什么方式照顾这个需要？"],
    gentleReminder: "你不必强迫自己立刻放下。先看见自己在抓什么，已经是在慢慢松手。"
  },
  {
    slug: "self-blame-understanding",
    title: "自责的时候，如何重新理解自己",
    summary: "自责有时想推动修正，但过度自责会让人失去真正行动的力量。",
    category: "自我接纳",
    readingMinutes: 6,
    scene: "你想起一件做错的事，脑中不断出现“我怎么这么差”“我总是搞砸”。越想修正，越觉得自己不配被原谅。",
    buddhistView: "修心不是把自己审判到没有余地。看见行为的因缘，承担该承担的部分，同时不把一个行为等同于整个人。",
    psychologyView: "自责常把具体错误扩大成身份否定。区分责任和自我攻击，能让人更有能力道歉、修正和学习。",
    dailyPractice: ["写下我需要承担的具体责任。", "写下我正在攻击自己的话。", "把攻击改写成行动：下一次我可以……"],
    gentleReminder: "承担责任不需要摧毁自己。真正的修正，往往从停止攻击开始。"
  },
  {
    slug: "inner-conflict-reality",
    title: "内耗的本质：心在和现实反复拉扯",
    summary: "内耗常来自现实已经如此，而心里仍在不断要求它不该如此。",
    category: "执着",
    readingMinutes: 7,
    scene: "事情已经发生，你却一遍遍想着“要是当时不是这样就好了”。身体很累，心却停不下来。",
    buddhistView: "执着常表现为对现实的持续抗拒。观照不是被动接受一切，而是先承认“它已经发生”，再从当下条件中选择下一步。",
    psychologyView: "反刍思维会让大脑不断重演压力场景，却不一定带来新信息。把注意力从“为什么已经这样”转向“现在能做什么”，有助于减少内耗。",
    dailyPractice: ["写下我正在反复拉扯的一句话。", "把它改写为事实描述，不加入评价。", "写下一个今天能完成的具体动作。"],
    gentleReminder: "你可以不喜欢现实，但仍然可以从现实开始照顾自己。"
  }
];

export function findDharmaArticle(slug: string) {
  return dharmaArticles.find((article) => article.slug === slug);
}
