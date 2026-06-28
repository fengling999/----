import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { NextStepCard } from "@/components/NextStepCard";
import { PageHeader } from "@/components/PageHeader";
import { QuietCard } from "@/components/QuietCard";
import { dharmaArticles, findDharmaArticle } from "@/data/articles";
import { articleRecommendations } from "@/data/recommendations";

type ArticleDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return dharmaArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticleDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const article = findDharmaArticle(slug);

  if (!article) {
    return {
      title: "文章未找到"
    };
  }

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: `${article.title} | 明心觉察`,
      description: article.summary,
      type: "article",
      url: `/articles/${article.slug}`
    }
  };
}

export default async function ArticleDetailPage({ params }: ArticleDetailProps) {
  const { slug } = await params;
  const article = findDharmaArticle(slug);

  if (!article) {
    notFound();
  }

  const recommendation = articleRecommendations[article.slug];

  return (
    <main>
      <PageHeader
        eyebrow={`${article.category} · ${article.readingMinutes} 分钟`}
        title={article.title}
        description={article.summary}
      />
      <Container narrow className="grid gap-5 py-10 pb-16 md:pb-20">
        <ArticleSection title="一个生活场景" content={article.scene} />
        <ArticleSection title="佛学视角" content={article.buddhistView} tone="warm" />
        <ArticleSection title="心理学视角" content={article.psychologyView} />

        <QuietCard tone="green">
          <p className="text-sm font-medium text-[#7c6750]">今日练习</p>
          <ol className="mt-4 grid gap-3 text-sm leading-7 text-[#686159]">
            {article.dailyPractice.map((step, index) => (
              <li key={step} className="rounded-xl bg-[#fffdf8] px-3 py-3">
                {index + 1}. {step}
              </li>
            ))}
          </ol>
        </QuietCard>

        <QuietCard tone="warm">
          <p className="text-sm font-medium text-[#7c6750]">温和提醒</p>
          <p className="mt-3 leading-7 text-[#686159]">{article.gentleReminder}</p>
        </QuietCard>

        {recommendation ? (
          <NextStepCard
            steps={[
              ...(recommendation.emergency
                ? [
                    {
                      href: recommendation.emergency,
                      title: "如果情绪还很强",
                      description: "先做一次对应的情绪急救，让身体回到可承受的范围。",
                      meta: "情绪急救",
                      cta: "去稳定"
                    }
                  ]
                : []),
              {
                href: recommendation.practice,
                title: "配套练习",
                description: "用一个短时正念练习，把文章里的理解落到身体经验中。",
                meta: "正念练习",
                cta: "开始练习"
              },
              {
                href: "/daily",
                title: "写入今日觉察",
                description: recommendation.dailyPrompt,
                meta: "今日记录",
                cta: "去记录"
              }
            ]}
          />
        ) : null}
      </Container>
    </main>
  );
}

function ArticleSection({
  title,
  content,
  tone = "light"
}: {
  title: string;
  content: string;
  tone?: "light" | "green" | "warm";
}) {
  return (
    <QuietCard tone={tone}>
      <p className="text-sm font-medium text-[#7c6750]">{title}</p>
      <p className="mt-3 leading-7 text-[#686159]">{content}</p>
    </QuietCard>
  );
}
