type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div>
      {eyebrow ? <p className="text-sm font-medium tracking-[0.12em] text-[#25483f]">{eyebrow}</p> : null}
      <h2 className="mt-2 text-2xl font-semibold leading-tight text-[#22201c] md:text-3xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-sm leading-7 text-[#686159]">{description}</p> : null}
    </div>
  );
}
