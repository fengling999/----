import { ArticleFilterList } from "@/components/ArticleFilterList";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { dharmaArticles } from "@/data/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "修心文章",
  description: "阅读关于无常、执着、慈悲、正念、焦虑、愤怒、亲密关系和自我接纳的原创修心文章。",
  openGraph: {
    title: "修心文章 | 明心觉察",
    description: "用佛学智慧与现代心理学理解内在经验。"
  }
};

export default function ArticlesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="修心文章"
        title="用清明的语言理解内在经验"
        description="从无常、执着、慈悲、正念与关系经验出发，温和地理解情绪和日常困境。"
      />
      <Container narrow className="py-10 pb-16 md:pb-20">
        <ArticleFilterList articles={dharmaArticles} />
      </Container>
    </main>
  );
}
