import { Container } from "@/components/Container";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-[#ded8cc] bg-[radial-gradient(circle_at_12%_18%,rgba(217,230,223,0.7),transparent_22rem),linear-gradient(135deg,#f7f4ee_0%,#eef3ef_58%,#fbf7ef_100%)]">
      <Container className="py-10 md:py-14">
        <p className="text-sm font-medium tracking-[0.14em] text-[#25483f]">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-[#22201c] md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[#686159] md:text-lg">{description}</p>
      </Container>
    </section>
  );
}
