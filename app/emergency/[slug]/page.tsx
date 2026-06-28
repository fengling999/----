import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { NextStepCard } from "@/components/NextStepCard";
import { PageHeader } from "@/components/PageHeader";
import { QuietCard } from "@/components/QuietCard";
import { emergencyGuides, findEmergencyGuide } from "@/data/emergency";
import { emergencyPracticeMap } from "@/data/recommendations";

type EmergencyDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return emergencyGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: EmergencyDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = findEmergencyGuide(slug);

  if (!guide) {
    return {
      title: "情绪急救未找到"
    };
  }

  return {
    title: guide.entry,
    description: guide.summary,
    openGraph: {
      title: `${guide.entry} | 情绪急救`,
      description: guide.summary,
      url: `/emergency/${guide.slug}`
    }
  };
}

export default async function EmergencyDetailPage({ params }: EmergencyDetailProps) {
  const { slug } = await params;
  const guide = findEmergencyGuide(slug);

  if (!guide) {
    notFound();
  }

  return (
    <main>
      <PageHeader eyebrow="情绪急救" title={guide.title} description={guide.summary} />
      <Container narrow className="grid gap-5 py-10 pb-16 md:pb-20">
        <QuietCard tone="green">
          <p className="text-sm font-medium text-[#7c6750]">1. 稳定当下</p>
          <h2 className="mt-2 text-xl font-semibold text-[#22201c]">30 秒到 1 分钟呼吸引导</h2>
          <ol className="mt-4 grid gap-3 text-sm leading-7 text-[#686159]">
            {guide.breathing.map((step) => (
              <li key={step} className="border-l border-[#c9d8d0] pl-3">
                {step}
              </li>
            ))}
          </ol>
        </QuietCard>

        <QuietCard>
          <p className="text-sm font-medium text-[#7c6750]">2. 命名情绪</p>
          <h2 className="mt-2 text-xl font-semibold text-[#22201c]">把经验说清楚一点</h2>
          <div className="mt-4 grid gap-3 text-sm leading-7 text-[#686159]">
            {guide.naming.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </QuietCard>

        <QuietCard tone="warm">
          <p className="text-sm font-medium text-[#7c6750]">3. 佛学观照</p>
          <h2 className="mt-2 text-xl font-semibold text-[#22201c]">温和地看见它的来去</h2>
          <p className="mt-4 text-sm leading-7 text-[#686159]">{guide.buddhistReflection}</p>
        </QuietCard>

        <QuietCard>
          <p className="text-sm font-medium text-[#7c6750]">4. 心理学理解</p>
          <h2 className="mt-2 text-xl font-semibold text-[#22201c]">理解反应，不急着评判</h2>
          <p className="mt-4 text-sm leading-7 text-[#686159]">{guide.psychologyUnderstanding}</p>
        </QuietCard>

        <QuietCard tone="green">
          <p className="text-sm font-medium text-[#7c6750]">5. 一个小练习</p>
          <h2 className="mt-2 text-xl font-semibold text-[#22201c]">{guide.practice.title}</h2>
          <ol className="mt-4 grid gap-3 text-sm leading-7 text-[#686159]">
            {guide.practice.steps.map((step, index) => (
              <li key={step} className="rounded-xl bg-[#fffdf8] px-3 py-3">
                {index + 1}. {step}
              </li>
            ))}
          </ol>
        </QuietCard>

        <QuietCard tone="warm">
          <p className="text-sm font-medium text-[#7c6750]">6. 安全提醒</p>
          <h2 className="mt-2 text-xl font-semibold text-[#22201c]">需要帮助时，请优先保护安全</h2>
          <p className="mt-4 text-sm leading-7 text-[#686159]">{guide.safety}</p>
        </QuietCard>

        <NextStepCard
          title="稳定之后，再轻轻整理"
          description="如果身体已经稍微降温，可以选择一个后续动作。不需要马上把问题全部解决。"
          steps={[
            {
              href: "/daily",
              title: "写一条今日觉察",
              description: "把刚才的情绪、害怕或执着，以及一个小行动记录下来。",
              meta: "今日记录",
              cta: "去记录"
            },
            {
              href: emergencyPracticeMap[guide.slug] ?? "/practice",
              title: "做一个短时练习",
              description: "用呼吸、身体扫描或慈悲练习，让稳定感多停留一会儿。",
              meta: "正念练习",
              cta: "去练习"
            }
          ]}
        />
      </Container>
    </main>
  );
}
