import Link from "next/link";

type FeatureCardProps = {
  href: string;
  title: string;
  description: string;
  meta?: string;
  cta?: string;
  index?: string;
};

export function FeatureCard({ href, title, description, meta, cta = "进入查看", index }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-[1.35rem] border border-[#ded8cc] bg-[#fffdf8]/88 p-5 shadow-[0_14px_42px_rgba(74,64,52,0.055)] transition hover:-translate-y-0.5 hover:border-[#9db7ad] hover:bg-white hover:shadow-[0_18px_46px_rgba(37,72,63,0.10)] focus:outline-none focus:ring-2 focus:ring-[#25483f]/30 md:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        {meta ? <p className="text-xs font-medium text-[#7c6750]">{meta}</p> : <span />}
        {index ? <span className="text-xs font-semibold text-[#c3b7a8]">{index}</span> : null}
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-tight text-[#22201c]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#686159]">{description}</p>
      <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#25483f]">
        {cta}
        <span className="transition group-hover:translate-x-1">→</span>
      </p>
    </Link>
  );
}
