import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/data/siteContent";

const RESUME_PASSWORD = "88888888";
const STORAGE_KEY = "resume-access-granted";

const copy = {
  en: {
    title: "View Resume",
    description: "This file is password protected. Enter the access password to continue.",
    placeholder: "Password",
    confirm: "Confirm",
    cancel: "Cancel",
    error: "Incorrect password, please try again.",
  },
  zh: {
    title: "查看简历",
    description: "该文件已设置访问密码，请输入密码后继续。",
    placeholder: "请输入密码",
    confirm: "确认",
    cancel: "取消",
    error: "密码不正确，请重试。",
  },
};

type ResumeGateProps = {
  resumeHref: string;
  locale: Locale;
};

export default function ResumeGate({ resumeHref, locale }: ResumeGateProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const t = copy[locale];

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (!href.toLowerCase().endsWith(".pdf")) return;
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
      event.preventDefault();
      event.stopPropagation();
      setValue("");
      setError(false);
      setOpen(true);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 60);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const submit = () => {
    if (value === RESUME_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(false);
      window.open(resumeHref, "_blank", "noopener");
    } else {
      setError(true);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[color:rgba(24,44,41,0.32)] p-5 backdrop-blur-sm"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label={t.title}
    >
      <div
        className="w-full max-w-[360px] rounded-[24px] border border-[color:var(--color-line)] bg-[color:#fffefa] p-6 shadow-[0_24px_60px_rgba(24,44,41,0.18)]"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="font-display text-lg font-bold text-[color:var(--color-fg)]">{t.title}</h2>
        <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">{t.description}</p>
        <form
          className="mt-5 space-y-3"
          onSubmit={(event) => {
            event.preventDefault();
            submit();
          }}
        >
          <input
            ref={inputRef}
            type="password"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              setError(false);
            }}
            placeholder={t.placeholder}
            className="w-full rounded-full border border-[color:var(--color-line)] bg-[color:rgba(255,255,255,0.6)] px-4 py-2.5 text-sm text-[color:var(--color-fg)] outline-none transition focus:border-[color:var(--color-accent)]"
          />
          {error ? <p className="text-xs text-[color:#be704b]">{t.error}</p> : null}
          <div className="flex items-center justify-end gap-3 pt-1">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-[color:var(--color-line)] px-4 py-2 text-sm text-[color:var(--color-muted)] transition hover:text-[color:var(--color-fg)]"
            >
              {t.cancel}
            </button>
            <button
              type="submit"
              className="rounded-full bg-[color:var(--color-accent)] px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              {t.confirm}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
