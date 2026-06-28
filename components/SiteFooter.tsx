import Link from "next/link";
import { Container } from "@/components/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#ded8cc] bg-[#f2efe7]">
      <Container className="grid gap-4 py-8 text-sm leading-7 text-[#686159] md:grid-cols-[1fr_auto] md:items-center">
        <p>明心觉察提供自我觉察、情绪教育与正念练习内容，不提供诊断、治疗或医疗建议。</p>
        <Link
          href="/about#disclaimer"
          className="rounded-lg text-sm font-medium text-[#25483f] hover:text-[#16352e] focus:outline-none focus:ring-2 focus:ring-[#25483f]/20 md:px-3 md:py-2"
        >
          关于本站与免责声明
        </Link>
      </Container>
    </footer>
  );
}
