import { AwarenessJournal } from "@/components/AwarenessJournal";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "今日觉察",
  description: "用三句话记录今日情绪、执着或害怕，以及一个慈悲的小行动。记录仅保存在当前浏览器中。",
  openGraph: {
    title: "今日觉察 | 明心觉察",
    description: "一个安静的本地情绪觉察记录空间。"
  }
};

export default function DailyPage() {
  return (
    <main>
      <PageHeader
        eyebrow="今日觉察"
        title="给此刻留一页安静"
        description="用三句话看见情绪、执着与一个慈悲的小行动。这里不是后台表单，而是一处只属于当前浏览器的日记空间。"
      />
      <Container narrow className="py-10 pb-16 md:pb-20">
        <AwarenessJournal />
      </Container>
    </main>
  );
}
