"use client";

import { useEffect, useMemo, useState } from "react";
import { PrimaryButton } from "@/components/PrimaryButton";
import { QuietCard } from "@/components/QuietCard";

const STORAGE_KEY = "daily-awareness-records";

type JournalDraft = {
  emotion: string;
  attachment: string;
  compassionateAction: string;
};

type JournalRecord = JournalDraft & {
  id: string;
  date: string;
  createdAt: string;
};

const emptyDraft: JournalDraft = {
  emotion: "",
  attachment: "",
  compassionateAction: ""
};

const questions = [
  {
    key: "emotion",
    label: "此刻我最明显的情绪是什么？",
    placeholder: "例如：焦虑、委屈、烦躁、疲惫，或只是说不清的沉重。"
  },
  {
    key: "attachment",
    label: "这份情绪背后，我正在执着或害怕什么？",
    placeholder: "例如：害怕失控、希望被理解、放不下某个结果。"
  },
  {
    key: "compassionateAction",
    label: "如果我以慈悲回应自己，我可以做一个什么小行动？",
    placeholder: "例如：喝一杯水、暂停争辩、写下事实、给自己十分钟安静。"
  }
] satisfies Array<{
  key: keyof JournalDraft;
  label: string;
  placeholder: string;
}>;

function formatDate(date: Date) {
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  });
}

function formatTime(value: string) {
  return new Date(value).toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function readRecords() {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value ? (JSON.parse(value) as JournalRecord[]) : [];
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return [];
  }
}

function createRecordId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function AwarenessJournal() {
  const [today, setToday] = useState("");
  const [draft, setDraft] = useState<JournalDraft>(emptyDraft);
  const [records, setRecords] = useState<JournalRecord[]>([]);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    // Dates and localStorage are browser-only concerns for this journal.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(formatDate(new Date()));
    setRecords(readRecords().slice(0, 7));
  }, []);

  const canSave = useMemo(
    () => Object.values(draft).some((value) => value.trim().length > 0),
    [draft]
  );

  function updateDraft(field: keyof JournalDraft, value: string) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  function persist(nextRecords: JournalRecord[]) {
    const recentRecords = nextRecords.slice(0, 7);
    setRecords(recentRecords);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(recentRecords));
  }

  function saveRecord() {
    if (!canSave) {
      setNotice("可以先写下一点点，再保存。");
      return;
    }

    const now = new Date();
    const nextRecord: JournalRecord = {
      id: createRecordId(),
      date: formatDate(now),
      createdAt: now.toISOString(),
      emotion: draft.emotion.trim(),
      attachment: draft.attachment.trim(),
      compassionateAction: draft.compassionateAction.trim()
    };

    persist([nextRecord, ...records]);
    setDraft(emptyDraft);
    setNotice("已保存。记录仅保存在当前浏览器中。");
  }

  function deleteRecord(id: string) {
    persist(records.filter((record) => record.id !== id));
    setNotice("已删除这条记录。");
  }

  return (
    <div className="grid gap-8">
      <QuietCard tone="warm" className="p-5 md:p-7">
        <div className="flex flex-col gap-3 border-b border-[#ded8cc] pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-[#7c6750]">今日日期</p>
            <h2 className="mt-1 text-2xl font-semibold text-[#22201c]">{today || "正在载入日期"}</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#686159]">
            记录仅保存在当前浏览器中，不需要登录，也不会上传任何数据。
          </p>
        </div>

        <div className="mt-6 grid gap-5">
          {questions.map((question) => (
            <label key={question.key} className="grid gap-2">
              <span className="text-base font-medium leading-7 text-[#22201c]">{question.label}</span>
              <textarea
                value={draft[question.key]}
                onChange={(event) => updateDraft(question.key, event.target.value)}
                placeholder={question.placeholder}
                className="min-h-32 resize-y rounded-xl border border-[#ded8cc] bg-[#fffdf8] px-4 py-3 leading-7 text-[#22201c] outline-none transition placeholder:text-[#9a9288] focus:border-[#25483f] focus:ring-2 focus:ring-[#25483f]/15"
              />
            </label>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <PrimaryButton onClick={saveRecord}>保存今日觉察</PrimaryButton>
          {notice ? <p className="text-sm text-[#25483f]">{notice}</p> : null}
        </div>
      </QuietCard>

      <section>
        <div className="mb-4">
          <p className="text-sm font-medium tracking-[0.14em] text-[#25483f]">最近记录</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#22201c]">最近 7 条觉察</h2>
        </div>

        {records.length === 0 ? (
          <QuietCard>
            <p className="leading-7 text-[#686159]">
              这里还没有记录。你可以先写下此刻最明显的一句话，不需要完整，也不需要正确。
            </p>
          </QuietCard>
        ) : (
          <div className="grid gap-4">
            {records.map((record) => (
              <QuietCard key={record.id} className="p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#7c6750]">{record.date}</p>
                    <p className="mt-1 text-xs text-[#8a8177]">保存于 {formatTime(record.createdAt)}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => deleteRecord(record.id)}
                    className="self-start rounded-lg border border-[#ded8cc] bg-[#fffdf8] px-3 py-2 text-sm text-[#686159] transition hover:border-[#9db7ad] hover:text-[#25483f] focus:outline-none focus:ring-2 focus:ring-[#25483f]/20"
                  >
                    删除
                  </button>
                </div>

                <div className="mt-5 grid gap-4 text-sm leading-7 text-[#686159]">
                  <RecordLine title="情绪" value={record.emotion} />
                  <RecordLine title="执着或害怕" value={record.attachment} />
                  <RecordLine title="慈悲小行动" value={record.compassionateAction} />
                </div>
              </QuietCard>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function RecordLine({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <p className="font-medium text-[#22201c]">{title}</p>
      <p className="mt-1 whitespace-pre-wrap">{value || "未填写"}</p>
    </div>
  );
}
