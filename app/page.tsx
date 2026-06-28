import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FeatureCard } from "@/components/FeatureCard";
import { HomeInsightPanel } from "@/components/HomeInsightPanel";
import { PrimaryButton } from "@/components/PrimaryButton";
import { QuietCard } from "@/components/QuietCard";
import { SectionTitle } from "@/components/SectionTitle";
import { dharmaArticles } from "@/data/articles";

export const metadata: Metadata = {
  title: "明心觉察",
  description:
    "明心觉察结合佛学智慧与现代心理学，提供正念练习、情绪觉察、情绪急救、今日记录与修心文章，帮助用户在日常生活中温和地理解自己。",
  openGraph: {
    title: "明心觉察 | 佛学智慧与现代心理学",
    description: "一个面向情绪觉察、正念练习和自我成长的中文网站。",
    url: "/"
  }
};

const coreEntries = [
  {
    href: "/emergency",
    title: "情绪急救",
    description: "当焦虑、愤怒或低落升起时，先用短步骤让身心回到可承受的范围。",
    meta: "稳定系统"
  },
  {
    href: "/daily",
    title: "今日觉察",
    description: "记录当下的情绪、身体信号、念头和一个温和而具体的行动。",
    meta: "每日记录"
  },
  {
    href: "/practice",
    title: "正念练习",
    description: "通过呼吸、身体扫描与慈悲练习，训练在经验中保留一点空间。",
    meta: "短时练习"
  }
];

const pathSteps = ["觉察情绪", "看见执着", "安住当下", "慈悲行动"];

export default function Home() {
  return (
    <main>
      <section className="border-b border-[#ded8cc] bg-[radial-gradient(circle_at_16%_18%,rgba(217,230,223,0.75),transparent_24rem),linear-gradient(135deg,#f8f6f0_0%,#eef3ef_52%,#fbf7ef_100%)]">
        <Container className="grid gap-10 py-14 md:min-h-[680px] md:grid-cols-[1.02fr_0.98fr] md:items-center md:py-16">
          <div>
            <div className="inline-flex rounded-full border border-[#c9d8d0] bg-[#fffdf8]/75 px-3 py-2 text-sm font-medium tracking-[0.12em] text-[#25483f] shadow-[0_10px_30px_rgba(74,64,52,0.04)]">
              佛学智慧 × 现代心理学
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-[#22201c] md:text-6xl">
              在纷乱中，看见自己的心
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#686159]">
              明心觉察提供正念练习、情绪觉察、情绪急救与修心文章。这里把佛学中的无常、执着、慈悲与现代心理学中的情绪调节、自我接纳结合起来，帮助你在日常生活中更温和地理解自己。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/daily">开始今日觉察</PrimaryButton>
              <PrimaryButton href="/emergency" variant="secondary">
                进入情绪急救
              </PrimaryButton>
            </div>
          </div>

          <div className="grid gap-4">
            <QuietCard tone="green" className="relative overflow-hidden p-6 md:p-8">
              <div className="absolute right-6 top-6 h-24 w-24 rounded-full border border-[#c9d8d0] bg-[#fffdf8]/20" />
              <p className="text-sm font-medium text-[#7c6750]">今日一句</p>
              <p className="mt-5 text-2xl font-semibold leading-snug text-[#22201c]">
                情绪不是敌人，它是心在请求被看见。
              </p>
              <p className="mt-5 text-sm leading-7 text-[#686159]">
                先辨认身体里的信号，再决定是否回应。觉察不是控制自己，而是让选择重新出现。
              </p>
            </QuietCard>

            <div className="grid grid-cols-3 gap-3 text-center text-sm text-[#4d463f]">
              <div className="rounded-2xl border border-[#ded8cc] bg-[#fffdf8]/80 px-3 py-4 shadow-sm">观身</div>
              <div className="rounded-2xl border border-[#c9d8d0] bg-[#d9e6df]/80 px-3 py-4 shadow-sm">观受</div>
              <div className="rounded-2xl border border-[#e3d7c8] bg-[#f3eadc]/80 px-3 py-4 shadow-sm">观心</div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12 md:py-16">
        <HomeInsightPanel />
      </Container>

      <Container className="pb-12 md:pb-16">
        <SectionTitle eyebrow="核心入口" title="安静的工具，从一个当下开始" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {coreEntries.map((item, index) => (
            <FeatureCard
              key={item.href}
              href={item.href}
              title={item.title}
              description={item.description}
              meta={item.meta}
              cta="开始使用"
              index={`0${index + 1}`}
            />
          ))}
        </div>
      </Container>

      <section className="border-y border-[#ded8cc] bg-[#fffdf8]/55">
        <Container className="py-12 md:py-16">
          <SectionTitle
            eyebrow="修心路径"
            title="从反应，到回应"
            description="这不是一套要求你立刻变好的方法，而是帮助你在经验中多停留一刻。"
          />
          <div className="mt-7 grid gap-3 md:grid-cols-4">
            {pathSteps.map((step, index) => (
              <QuietCard key={step} tone={index % 2 === 0 ? "light" : "warm"} className="p-5">
                <p className="text-sm font-medium text-[#7c6750]">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-[#22201c]">{step}</h3>
                <div className="mt-5 h-1 w-12 rounded-full bg-[#25483f]" />
              </QuietCard>
            ))}
          </div>
        </Container>
      </section>

      <Container className="grid gap-10 py-12 pb-16 md:grid-cols-[1fr_0.82fr] md:py-16 md:pb-20">
        <section>
          <SectionTitle eyebrow="精选文章" title="用清明的语言理解内在经验" />
          <div className="mt-6 grid gap-4">
            {dharmaArticles.slice(0, 3).map((article, index) => (
              <FeatureCard
                key={article.slug}
                href={`/articles/${article.slug}`}
                title={article.title}
                description={article.summary}
                meta={`${article.category} · ${article.readingMinutes} 分钟`}
                cta="阅读文章"
                index={`精选 0${index + 1}`}
              />
            ))}
          </div>
        </section>

        <aside className="grid content-start gap-6">
          <QuietCard tone="warm" className="p-6">
            <p className="text-sm font-medium text-[#7c6750]">使用方式</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#22201c]">
              不急着解释，先把经验放清楚。
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#686159]">
              你可以从一次呼吸、一条记录或一篇短文开始。重要的不是完成多少，而是更诚实地看见当下。
            </p>
          </QuietCard>
          <DisclaimerBox compact />
        </aside>
      </Container>
    </main>
  );
}
