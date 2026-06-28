import { Container } from "@/components/Container";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHeader } from "@/components/PageHeader";
import { QuietCard } from "@/components/QuietCard";
import { mindfulnessPractices } from "@/data/practices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "正念练习",
  description: "提供呼吸觉察、身体扫描、放下执着、慈悲观和睡前安定等短时正念练习。",
  openGraph: {
    title: "正念练习 | 明心觉察",
    description: "短时、清晰、可以随时停止的正念练习。"
  }
};

export default function PracticePage() {
  return (
    <main>
      <PageHeader
        eyebrow="正念练习"
        title="短时、清晰、可以随时停止"
        description="选择一个适合此刻状态的练习。练习用于自我觉察与身心安定，不承诺疗效；如果过程中感到不舒服，可以随时停下。"
      />
      <Container className="grid gap-8 py-10 pb-16 md:pb-20">
        <QuietCard tone="green">
          <p className="text-sm font-medium text-[#7c6750]">练习提醒</p>
          <p className="mt-3 leading-7 text-[#686159]">
            你不需要做到“完全平静”。只要比刚才多看见一点身体、呼吸或念头，练习就已经开始了。
          </p>
        </QuietCard>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mindfulnessPractices.map((practice) => (
            <FeatureCard
              key={practice.slug}
              href={`/practice/${practice.slug}`}
              title={practice.title}
              description={practice.summary}
              meta={`${practice.durationMinutes} 分钟`}
              cta="进入练习"
            />
          ))}
        </section>
      </Container>
    </main>
  );
}
