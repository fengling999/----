"use client";

import { useMemo, useState } from "react";
import { FeatureCard } from "@/components/FeatureCard";
import { articleCategories, type ArticleCategory, type DharmaArticle } from "@/data/articles";

type ArticleFilterListProps = {
  articles: DharmaArticle[];
};

type Filter = "全部" | ArticleCategory;

export function ArticleFilterList({ articles }: ArticleFilterListProps) {
  const [filter, setFilter] = useState<Filter>("全部");

  const filteredArticles = useMemo(() => {
    if (filter === "全部") {
      return articles;
    }

    return articles.filter((article) => article.category === filter);
  }, [articles, filter]);

  return (
    <div className="grid gap-6">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {(["全部", ...articleCategories] as Filter[]).map((category) => {
          const isActive = filter === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`shrink-0 rounded-lg border px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-[#25483f]/20 ${
                isActive
                  ? "border-[#25483f] bg-[#25483f] text-white"
                  : "border-[#ded8cc] bg-[#fffdf8] text-[#686159] hover:border-[#9db7ad] hover:text-[#25483f]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4">
        {filteredArticles.map((article) => (
          <FeatureCard
            key={article.slug}
            href={`/articles/${article.slug}`}
            title={article.title}
            description={article.summary}
            meta={`${article.category} · ${article.readingMinutes} 分钟`}
            cta="阅读文章"
          />
        ))}
      </div>
    </div>
  );
}
