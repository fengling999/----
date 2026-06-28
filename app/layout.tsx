import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://fengling999.github.io/----");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "明心觉察 | 佛学智慧与现代心理学的情绪觉察平台",
    template: "%s | 明心觉察"
  },
  description:
    "明心觉察是一个中文自我觉察与情绪教育网站，结合佛学智慧、现代心理学、正念练习和日常修心工具，帮助用户温和地理解情绪与内在经验。",
  applicationName: "明心觉察",
  keywords: ["佛学智慧", "现代心理学", "正念练习", "情绪觉察", "自我成长"],
  authors: [{ name: "明心觉察" }],
  creator: "明心觉察",
  publisher: "明心觉察",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    siteName: "明心觉察",
    title: "明心觉察 | 佛学智慧与现代心理学的情绪觉察平台",
    description:
      "结合佛学智慧与现代心理学，提供情绪急救、今日觉察、正念练习与修心文章。"
  },
  twitter: {
    card: "summary",
    title: "明心觉察 | 佛学智慧与现代心理学",
    description: "一个中文自我觉察、正念练习与情绪教育网站。"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
