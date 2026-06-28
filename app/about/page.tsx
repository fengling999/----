import { Container } from "@/components/Container";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { PageHeader } from "@/components/PageHeader";
import { QuietCard } from "@/components/QuietCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于本站",
  description: "了解明心觉察的定位、适合场景、内容边界、隐私说明与免责声明。",
  openGraph: {
    title: "关于本站 | 明心觉察",
    description: "本站不提供心理诊断，也不替代心理咨询、精神科或医疗服务。"
  }
};

const sections = [
  {
    title: "本站定位",
    content:
      "明心觉察是一个中文自我觉察与情绪教育网站。它用温和、清晰的方式，把佛学中的观照智慧与现代心理学中的情绪理解、压力调节和自我接纳结合起来，帮助你在日常生活里更细致地看见自己。"
  },
  {
    title: "适合谁使用",
    content:
      "适合希望进行日常情绪觉察、正念练习、关系反思和自我理解的人。你可以在焦虑、愤怒、难过、内耗或睡前难以安定时，把这里当作一个安静的练习空间。"
  },
  {
    title: "不适合什么场景",
    content:
      "本站不适合处理急性危机、严重失控、持续恶化的心理痛苦，或任何需要专业评估和干预的情况。如果你正处于危险中，请优先联系现实中的帮助。"
  },
  {
    title: "佛学与心理学如何结合",
    content:
      "佛学部分侧重无常、缘起、执着、慈悲与正念的观照；心理学部分侧重情绪命名、压力反应、认知理解、自我接纳和可执行的小练习。两者在本站都作为教育和自我觉察资源，而不是宗教劝导或医疗方案。"
  },
  {
    title: "内容边界",
    content:
      "本站内容用于日常自我观察、情绪教育和正念练习，不提供心理诊断，不替代心理咨询、精神科、心理治疗或其他医疗服务，也不承诺治愈任何问题。"
  },
  {
    title: "隐私说明",
    content:
      "本站当前不提供登录、数据库、支付、社区或 AI 聊天功能。今日觉察记录仅保存在你的本机浏览器 localStorage 中，不会上传到服务器。若你清理浏览器数据，记录可能会被删除。"
  }
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="关于本站"
        title="一个安静、清晰的自我觉察空间"
        description="这里提供文章、情绪急救、正念练习和今日觉察记录，帮助你在日常经验中看见情绪、念头、执着与可行动的一步。"
      />
      <Container className="grid gap-8 py-10 pb-16 md:grid-cols-[1fr_0.78fr] md:pb-20">
        <section className="grid gap-5">
          {sections.map((section) => (
            <QuietCard key={section.title}>
              <h2 className="text-xl font-semibold text-[#22201c]">{section.title}</h2>
              <p className="mt-3 leading-7 text-[#686159]">{section.content}</p>
            </QuietCard>
          ))}
        </section>

        <aside className="grid content-start gap-5">
          <DisclaimerBox compact />
          <QuietCard tone="warm">
            <h2 className="text-xl font-semibold text-[#22201c]">温和说明</h2>
            <p className="mt-3 leading-7 text-[#686159]">
              如果你正在经历痛苦，愿你不用独自承担。本站可以陪你做一点整理，但真正需要支持时，请把自己交给现实中可靠的人和专业资源。
            </p>
          </QuietCard>
        </aside>
      </Container>
    </main>
  );
}
