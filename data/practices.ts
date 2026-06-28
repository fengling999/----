export type MindfulnessPractice = {
  slug: string;
  title: string;
  durationMinutes: number;
  summary: string;
  whenToUse: string[];
  posture: string;
  guidance: string[];
  reflectionQuestions: string[];
};

export const mindfulnessPractices: MindfulnessPractice[] = [
  {
    slug: "three-minute-breath-awareness",
    title: "三分钟呼吸觉察",
    durationMinutes: 3,
    summary: "用几分钟回到呼吸，帮助自己从纷乱念头中稍微退后一步。",
    whenToUse: ["刚开始焦虑或烦躁时", "工作或学习中需要短暂停顿时", "想先稳定身体再做决定时"],
    posture: "坐在椅子上或垫子上，让双脚或坐骨有稳定支撑。背部自然立起，不需要僵硬。",
    guidance: [
      "先感觉身体被椅子或地面承托。",
      "把注意力放到一次自然吸气，再放到一次自然呼气。",
      "如果念头离开呼吸，只在心里说“知道了”，再轻轻回来。",
      "最后一次呼气后，感受此刻身体有没有多一点空间。"
    ],
    reflectionQuestions: ["练习前后，我的身体有什么变化？", "刚才最常把我带走的念头是什么？", "接下来我可以慢一点做什么？"]
  },
  {
    slug: "five-minute-body-scan",
    title: "五分钟身体扫描",
    durationMinutes: 5,
    summary: "从头到脚观察身体信号，不急着改变，只练习看见。",
    whenToUse: ["身体紧绷、疲惫或麻木时", "情绪很强但说不清楚时", "睡前想从头脑回到身体时"],
    posture: "可以坐着，也可以躺下。让手臂自然放松，选择一个不会勉强自己的姿势。",
    guidance: [
      "从头顶开始，留意有没有紧、热、沉或空的感觉。",
      "慢慢经过脸、下颌、肩膀和胸口，只观察，不评价。",
      "继续感受腹部、背部、双腿和脚底。",
      "遇到不舒服的区域，可以停留一两次呼吸；如果太强烈，就回到脚底。",
      "结束时感受整个身体作为一个整体。"
    ],
    reflectionQuestions: ["身体哪里最需要被照顾？", "我有没有对某种感觉做评价？", "今天我可以给身体一个什么小照顾？"]
  },
  {
    slug: "letting-go-attachment",
    title: "放下执着练习",
    durationMinutes: 4,
    summary: "温和看见自己正在抓住什么，不强迫立刻放下。",
    whenToUse: ["反复想着某个人或某件事时", "很想控制结果时", "明知疲惫但停不下来时"],
    posture: "坐稳，把一只手轻轻握拳，另一只手自然放在腿上。",
    guidance: [
      "吸气时感受握拳的力量，承认：我正在抓住某些东西。",
      "呼气时慢慢松开一点，不要求完全放下。",
      "在心里问：我真正害怕失去的是什么？",
      "再次吸气，允许这份在意存在；再次呼气，给自己一点空间。",
      "最后把手完全放松，感受抓紧和松开的差别。"
    ],
    reflectionQuestions: ["我正在抓住的是结果、关系，还是某种解释？", "这份执着背后有什么重要需要？", "即使还放不下，我今天能少用一点力的地方是什么？"]
  },
  {
    slug: "compassion-practice",
    title: "慈悲观练习",
    durationMinutes: 5,
    summary: "在自责、羞耻或疲惫中，练习用更不伤人的方式对待自己。",
    whenToUse: ["对自己很苛刻时", "犯错后反复自责时", "需要恢复一点温和力量时"],
    posture: "坐着或站着都可以。可以把手放在胸口，也可以只是自然垂放。",
    guidance: [
      "先承认：此刻有困难在这里。",
      "轻轻感受胸口或手掌的温度。",
      "在心里说：愿我在困难中仍能被善待。",
      "如果这句话不适合你，可以换成：愿我少一点攻击自己。",
      "最后想一个具体行动，让慈悲落到生活里。"
    ],
    reflectionQuestions: ["我最常用什么话攻击自己？", "如果对朋友说话，我会怎么说？", "今天一个慈悲而负责的小行动是什么？"]
  },
  {
    slug: "bedtime-settling",
    title: "睡前安定练习",
    durationMinutes: 6,
    summary: "在睡前放慢身体和念头，让一天有一个温和的结束。",
    whenToUse: ["睡前脑中停不下来时", "白天压力还残留在身体里时", "想用安静方式结束一天时"],
    posture: "躺下或坐在床边。调暗灯光，手机可以放远一点。若练习中不舒服，可以随时停止。",
    guidance: [
      "先做三次自然呼气，不刻意深呼吸。",
      "从脚底开始，轻轻告诉身体：今天到这里就够了。",
      "把注意力移到小腿、腹部、肩膀和脸，逐处放松一点。",
      "如果想到未完成的事，在心里说：明天再处理。",
      "结束时只感受身体与床或椅子的接触。"
    ],
    reflectionQuestions: ["今天有什么事可以暂时放到明天？", "我的身体最想休息的地方在哪里？", "睡前我愿意减少一个什么刺激？"]
  }
];

export function findMindfulnessPractice(slug: string) {
  return mindfulnessPractices.find((practice) => practice.slug === slug);
}
