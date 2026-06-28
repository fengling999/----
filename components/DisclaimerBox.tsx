export const disclaimerNotes = [
  "本站不提供心理诊断，也不会判断你是否患有某种心理或精神疾病。",
  "本站内容不能替代心理咨询、精神科、心理治疗或其他医疗服务。",
  "如果你有自伤、自杀、伤害他人的想法，或处于紧急危险中，请立即联系当地紧急服务、可信任的人或专业机构。",
  "今日觉察记录仅保存在你的本机浏览器中，不会上传到服务器。"
];

type DisclaimerBoxProps = {
  compact?: boolean;
};

export function DisclaimerBox({ compact = false }: DisclaimerBoxProps) {
  return (
    <section
      id="disclaimer"
      className="scroll-mt-28 rounded-xl border border-[#c9d8d0] bg-[#25483f] p-5 text-white shadow-[0_14px_38px_rgba(37,72,63,0.16)]"
    >
      <p className="text-sm text-[#d9e6df]">安全边界</p>
      <h2 className="mt-1 text-xl font-semibold">{compact ? "免责声明" : "温和，但不越界"}</h2>
      <ul className="mt-4 grid gap-3 text-sm leading-7 text-[#f4f7f2]">
        {disclaimerNotes.map((note) => (
          <li key={note} className="border-l border-[#d9e6df] pl-3">
            {note}
          </li>
        ))}
      </ul>
    </section>
  );
}
