import { Container } from "@/components/Container";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHeader } from "@/components/PageHeader";
import { QuietCard } from "@/components/QuietCard";
import { SectionTitle } from "@/components/SectionTitle";
import { emergencyGuides } from "@/data/emergency";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "情绪急救",
  description: "面向焦虑、愤怒、难过、迷茫、放不下和自责的情绪急救练习，帮助用户先稳定当下。",
  openGraph: {
    title: "情绪急救 | 明心觉察",
    description: "温和的情绪稳定步骤与自我觉察练习。"
  }
};

export default function EmergencyPage() {
  return (
    <main>
      <PageHeader
        eyebrow="情绪急救"
        title="先稳定当下，再慢慢看清"
        description="选择最接近你此刻状态的入口。这里提供短时稳定与自我觉察练习，不进行诊断，也不替代心理咨询或医疗。"
      />

      <Container className="grid gap-8 py-10 pb-16 md:pb-20">
        <QuietCard tone="green" className="p-5 md:p-6">
          <p className="text-sm font-medium text-[#7c6750]">使用前先读</p>
          <p className="mt-3 leading-7 text-[#686159]">
            如果情绪非常强烈，先不要急着分析原因。请选择一个入口，跟随呼吸和书写步骤，让身体先回到可承受的范围。
          </p>
        </QuietCard>

        <section>
          <SectionTitle eyebrow="选择入口" title="我现在正在经历什么" />
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {emergencyGuides.map((guide) => (
              <FeatureCard
                key={guide.slug}
                href={`/emergency/${guide.slug}`}
                title={guide.entry}
                description={guide.summary}
                meta="情绪急救"
                cta="开始稳定"
              />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
