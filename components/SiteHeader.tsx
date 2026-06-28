import Link from "next/link";
import { Container } from "@/components/Container";
import { SiteNav } from "@/components/SiteNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#ded8cc]/70 bg-[#f7f4ee]/88 shadow-[0_10px_34px_rgba(74,64,52,0.04)] backdrop-blur-xl">
      <Container className="flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between md:py-4">
        <Link href="/" className="inline-flex items-center gap-3 text-[#22201c]">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#c9d8d0] bg-[#eef3ef] text-sm font-semibold text-[#25483f]">
            明
          </span>
          <span>
            <span className="block text-lg font-semibold leading-none">明心觉察</span>
            <span className="mt-1 block text-xs text-[#7c6750]">佛学智慧 × 现代心理学</span>
          </span>
        </Link>
        <SiteNav />
      </Container>
    </header>
  );
}
