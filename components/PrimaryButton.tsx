import Link from "next/link";
import type { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  className?: string;
};

const variants = {
  primary: "bg-[#25483f] text-white hover:bg-[#16352e] focus:ring-[#25483f]/30",
  secondary: "border border-[#cfc7ba] bg-[#fffdf8] text-[#22201c] hover:border-[#9db7ad] hover:bg-white focus:ring-[#25483f]/20"
};

export function PrimaryButton({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = ""
}: PrimaryButtonProps) {
  const classes = `inline-flex min-h-12 w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium leading-5 transition focus:outline-none focus:ring-2 sm:w-auto ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
