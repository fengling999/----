"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/daily", label: "今日觉察" },
  { href: "/emergency", label: "情绪急救" },
  { href: "/articles", label: "修心文章" },
  { href: "/practice", label: "正念练习" },
  { href: "/about", label: "关于本站" }
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1 text-sm text-[#686159] md:mx-0 md:px-0 md:pb-0">
      {navItems.map((item) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`shrink-0 rounded-full px-3.5 py-2 transition focus:outline-none focus:ring-2 focus:ring-[#25483f]/20 ${
              isActive
                ? "bg-[#25483f] text-white shadow-[0_8px_22px_rgba(37,72,63,0.18)]"
                : "hover:bg-[#fffdf8] hover:text-[#25483f]"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
