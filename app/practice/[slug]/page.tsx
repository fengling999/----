import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { NextStepCard } from "@/components/NextStepCard";
import { PageHeader } from "@/components/PageHeader";
import { PracticeTimer } from "@/components/PracticeTimer";
import { QuietCard } from "@/components/QuietCard";
import { findMindfulnessPractice, mindfulnessPractices } from "@/data/practices";

type PracticeDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return mindfulnessPractices.map((practice) => ({ slug: practice.slug }));
}

export async function generateMetadata({ params }: PracticeDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const practice = findMindfulnessPractice(slug);

  if (!practice) {
    return {
      title: "练习未找到"
    };
  }

  return {
    title: practice.title,
    description: practice.summary,
    openGraph: {
      title: `${practice.title} | 正念练习`,
      description: practice.summary,
      url: `/practice/${practice.slug}`
    }
  };
}

export default async function PracticeDetailPage({ params }: PracticeDetailProps) {
  const { slug } = await params;
  const practice = findMindfulnessPractice(slug);

  if (!practice) {
    notFound();
  }

  return (
    <main>
      <PageHeader eyebrow="正念练习" title={practice.title} description={practice.summary} />
      <Container narrow className="grid gap-5 py-10 pb-16 md:pb-20">
        <QuietCard>
          <p className="text-sm font-medium text-[#7c6750]">练习介绍</p>
          <p className="mt-3 leading-7 text-[#686159]">
            这个练习大约 {practice.durationMinutes} 分钟。它不是为了制造特殊体验，而是帮助你以更稳定的方式留意当下。
            如果过程中出现明显不适，可以睁眼、移动身体或直接停止。
          </p>
        </QuietCard>

        <QuietCard tone="warm">
          <p className="text-sm font-medium text-[#7c6750]">适合什么时候使用</p>
          <ul className="mt-3 grid gap-2 text-sm leading-7 text-[#686159]">
            {practice.whenToUse.map((item) => (
              <li key={item} className="border-l border-[#e3d7c8] pl-3">
                {item}
              </li>
            ))}
          </ul>
        </QuietCard>

        <QuietCard>
          <p className="text-sm font-medium text-[#7c6750]">准备姿势</p>
          <p className="mt-3 leading-7 text-[#686159]">{practice.posture}</p>
        </QuietCard>

        <QuietCard tone="green">
          <p className="text-sm font-medium text-[#7c6750]">分步骤引导</p>
          <ol className="mt-4 grid gap-3 text-sm leading-7 text-[#686159]">
            {practice.guidance.map((step, index) => (
              <li key={step} className="rounded-xl bg-[#fffdf8] px-3 py-3">
                {index + 1}. {step}
              </li>
            ))}
          </ol>
        </QuietCard>

        <PracticeTimer
          minutes={practice.durationMinutes}
          completionPrompts={practice.reflectionQuestions}
        />

        <QuietCard tone="warm">
          <p className="text-sm font-medium text-[#7c6750]">完成后的反思问题</p>
          <ul className="mt-3 grid gap-3 text-sm leading-7 text-[#686159]">
            {practice.reflectionQuestions.map((question) => (
              <li key={question} className="rounded-xl bg-[#fffdf8] px-3 py-3">
                {question}
              </li>
            ))}
          </ul>
        </QuietCard>

        <NextStepCard
          title="练习之后，给自己一个落点"
          description="如果状态允许，可以把刚才的身体感受或一个念头记录下来。"
          steps={[
            {
              href: "/daily",
              title: "写入今日觉察",
              description: "记录练习后最明显的情绪、身体感受和一个温和行动。",
              meta: "今日记录",
              cta: "去记录"
            },
            {
              href: "/articles",
              title: "读一篇相关文章",
              description: "用更清晰的语言理解刚才出现的念头、执着或情绪。",
              meta: "修心文章",
              cta: "去阅读"
            }
          ]}
        />
      </Container>
    </main>
  );
}
