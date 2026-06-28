import { FeatureCard } from "@/components/FeatureCard";
import { QuietCard } from "@/components/QuietCard";

type NextStep = {
  href: string;
  title: string;
  description: string;
  meta?: string;
  cta?: string;
};

type NextStepCardProps = {
  title?: string;
  description?: string;
  steps: NextStep[];
};

export function NextStepCard({
  title = "接下来可以做什么",
  description = "不需要一次完成很多。选择一个最轻的下一步，让觉察落回生活。",
  steps
}: NextStepCardProps) {
  return (
    <QuietCard tone="green" className="p-5 md:p-6">
      <p className="text-sm font-medium text-[#7c6750]">下一步</p>
      <h2 className="mt-2 text-2xl font-semibold leading-tight text-[#22201c]">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-[#686159]">{description}</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <FeatureCard
            key={step.href}
            href={step.href}
            title={step.title}
            description={step.description}
            meta={step.meta}
            cta={step.cta ?? "继续"}
            index={`0${index + 1}`}
          />
        ))}
      </div>
    </QuietCard>
  );
}
