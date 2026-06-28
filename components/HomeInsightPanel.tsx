"use client";

import { useState } from "react";
import { PrimaryButton } from "@/components/PrimaryButton";

const modes = [
  {
    id: "steady",
    label: "我需要稳定",
    title: "先让身体有一个落点",
    description: "当情绪很强时，不急着分析原因。先回到脚底、呼吸和眼前这一刻。",
    href: "/emergency",
    cta: "进入情绪急救",
    steps: ["感受脚底", "放慢呼气", "决定下一步"]
  },
  {
    id: "reflect",
    label: "我想记录",
    title: "把心里的东西放到纸面上",
    description: "用三句话记录情绪、执着或害怕，以及一个慈悲的小行动。",
    href: "/daily",
    cta: "开始今日觉察",
    steps: ["命名情绪", "看见执着", "写下行动"]
  },
  {
    id: "practice",
    label: "我想练习",
    title: "用几分钟回到当下",
    description: "选择呼吸、身体扫描、慈悲观或睡前安定，让觉察落到身体经验里。",
    href: "/practice",
    cta: "选择正念练习",
    steps: ["调整姿势", "跟随引导", "完成反思"]
  }
];

export function HomeInsightPanel() {
  const [activeId, setActiveId] = useState(modes[0].id);
  const activeMode = modes.find((mode) => mode.id === activeId) ?? modes[0];

  return (
    <section className="rounded-[1.75rem] border border-[#c9d8d0] bg-[#eef3ef]/75 p-4 shadow-[0_22px_70px_rgba(37,72,63,0.10)] md:p-6">
      <div className="grid gap-2 rounded-2xl bg-[#fffdf8]/70 p-1 sm:grid-cols-3">
        {modes.map((mode) => {
          const isActive = mode.id === activeId;

          return (
            <button
              key={mode.id}
              type="button"
              onClick={() => setActiveId(mode.id)}
              className={`min-h-11 rounded-xl px-3 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[#25483f]/20 ${
                isActive ? "bg-[#25483f] text-white shadow-sm" : "text-[#686159] hover:bg-white hover:text-[#25483f]"
              }`}
            >
              {mode.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_0.86fr] md:items-end">
        <div>
          <p className="text-sm font-medium text-[#7c6750]">当下选择</p>
          <h2 className="mt-2 text-2xl font-semibold leading-tight text-[#22201c]">{activeMode.title}</h2>
          <p className="mt-4 text-sm leading-7 text-[#686159]">{activeMode.description}</p>
          <div className="mt-6">
            <PrimaryButton href={activeMode.href}>{activeMode.cta}</PrimaryButton>
          </div>
        </div>

        <ol className="grid gap-3">
          {activeMode.steps.map((step, index) => (
            <li key={step} className="flex items-center gap-3 rounded-2xl border border-[#d7e2dc] bg-[#fffdf8]/75 p-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25483f] text-sm font-semibold text-white">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-[#4d463f]">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
