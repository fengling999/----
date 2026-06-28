export const articleRecommendations: Record<
  string,
  {
    emergency?: string;
    practice: string;
    dailyPrompt: string;
  }
> = {
  "control-and-anxiety": {
    emergency: "/emergency/anxious",
    practice: "/practice/three-minute-breath-awareness",
    dailyPrompt: "我正在试图控制什么？其中哪一部分可以暂时允许它不确定？"
  },
  "impermanence-and-letting-go": {
    practice: "/practice/letting-go-attachment",
    dailyPrompt: "最近正在变化的事情里，我最舍不得的是什么？"
  },
  "anger-hidden-needs": {
    emergency: "/emergency/angry",
    practice: "/practice/three-minute-breath-awareness",
    dailyPrompt: "我的愤怒背后，正在保护什么需要？"
  },
  "compassion-not-pleasing": {
    practice: "/practice/compassion-practice",
    dailyPrompt: "如果不攻击自己，我真正想怎样回应？"
  },
  "mindfulness-return-now": {
    practice: "/practice/three-minute-breath-awareness",
    dailyPrompt: "此刻我最常被什么念头带走？"
  },
  "relationship-attachment": {
    emergency: "/emergency/attached",
    practice: "/practice/letting-go-attachment",
    dailyPrompt: "我放不下的，是关系、解释，还是某种可能性？"
  },
  "self-blame-understanding": {
    emergency: "/emergency/self-blame",
    practice: "/practice/compassion-practice",
    dailyPrompt: "我需要承担的责任是什么？我正在攻击自己的话又是什么？"
  },
  "inner-conflict-reality": {
    emergency: "/emergency/confused",
    practice: "/practice/five-minute-body-scan",
    dailyPrompt: "我正在和哪一个已经发生的现实反复拉扯？"
  }
};

export const emergencyPracticeMap: Record<string, string> = {
  anxious: "/practice/three-minute-breath-awareness",
  angry: "/practice/three-minute-breath-awareness",
  sad: "/practice/compassion-practice",
  confused: "/practice/five-minute-body-scan",
  attached: "/practice/letting-go-attachment",
  "self-blame": "/practice/compassion-practice"
};
