"use client";

import { useEffect, useMemo, useState } from "react";
import { PrimaryButton } from "@/components/PrimaryButton";

type PracticeTimerProps = {
  minutes: number;
  completionPrompts?: string[];
};

export function PracticeTimer({ minutes, completionPrompts = [] }: PracticeTimerProps) {
  const initialSeconds = minutes * 60;
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timer = window.setInterval(() => {
      setRemainingSeconds((current) => {
        if (current <= 1) {
          window.clearInterval(timer);
          setIsRunning(false);
          setMessage("时间到了。可以慢慢睁眼，给自己一点缓冲。");
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isRunning]);

  const displayTime = useMemo(() => {
    const minutesPart = Math.floor(remainingSeconds / 60).toString().padStart(2, "0");
    const secondsPart = (remainingSeconds % 60).toString().padStart(2, "0");
    return `${minutesPart}:${secondsPart}`;
  }, [remainingSeconds]);

  function startTimer() {
    if (remainingSeconds === 0) {
      setRemainingSeconds(initialSeconds);
    }

    setMessage("");
    setIsRunning(true);
  }

  function pauseTimer() {
    setIsRunning(false);
    setMessage("已暂停。你可以停在这里，也可以稍后继续。");
  }

  function resetTimer() {
    setIsRunning(false);
    setRemainingSeconds(initialSeconds);
    setMessage("");
  }

  return (
    <div className="rounded-xl border border-[#c9d8d0] bg-[#eef3ef] p-5">
      <p className="text-sm font-medium text-[#7c6750]">简单计时器</p>
      <p className="mt-3 text-5xl font-semibold tabular-nums text-[#22201c]">{displayTime}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <PrimaryButton onClick={startTimer}>{isRunning ? "继续计时" : "开始"}</PrimaryButton>
        <PrimaryButton onClick={pauseTimer} variant="secondary">
          暂停
        </PrimaryButton>
        <PrimaryButton onClick={resetTimer} variant="secondary">
          重置
        </PrimaryButton>
      </div>
      {message ? <p className="mt-4 text-sm leading-6 text-[#25483f]">{message}</p> : null}
      {remainingSeconds === 0 && completionPrompts.length > 0 ? (
        <div className="mt-5 rounded-2xl border border-[#c9d8d0] bg-[#fffdf8]/80 p-4">
          <p className="text-sm font-medium text-[#7c6750]">完成后可以轻轻问自己</p>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#686159]">
            {completionPrompts.slice(0, 3).map((prompt) => (
              <li key={prompt}>· {prompt}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
