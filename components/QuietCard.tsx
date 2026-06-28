import type { ReactNode } from "react";

type QuietCardProps = {
  children: ReactNode;
  className?: string;
  tone?: "light" | "green" | "warm";
};

const tones = {
  light: "border-[#ded8cc] bg-[#fffdf8]/88 shadow-[0_14px_42px_rgba(74,64,52,0.055)]",
  green: "border-[#c9d8d0] bg-[#eef3ef]/92 shadow-[0_14px_42px_rgba(37,72,63,0.075)]",
  warm: "border-[#e3d7c8] bg-[#fbf7ef]/92 shadow-[0_14px_42px_rgba(124,103,80,0.07)]"
};

export function QuietCard({ children, className = "", tone = "light" }: QuietCardProps) {
  return <div className={`rounded-[1.35rem] border p-5 ${tones[tone]} ${className}`}>{children}</div>;
}
