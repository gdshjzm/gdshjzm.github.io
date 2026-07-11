import { FormEvent, useMemo, useState } from "react";
import { LockKeyhole } from "lucide-react";
import type { SiteContent } from "@/data/siteContent";

type PasswordGateProps = {
  onUnlock: () => void;
  content: SiteContent["passwordGate"];
};

const ACCESS_PASSWORD = "88888888";

export default function PasswordGate({ onUnlock, content }: PasswordGateProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const helperText = useMemo(() => content.helperText, [content.helperText]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password === ACCESS_PASSWORD) {
      setError("");
      onUnlock();
      return;
    }

    setError(content.errorText);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-10 md:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(217,119,87,0.16),transparent_68%)]" />
        <div className="absolute right-[-5rem] top-64 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(106,155,204,0.16),transparent_68%)]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(120,140,93,0.12),transparent_68%)]" />
      </div>

      <section className="w-full max-w-xl rounded-[32px] border border-[color:var(--color-line)] bg-[color:var(--color-panel)] p-7 shadow-[0_24px_60px_rgba(20,20,19,0.08)] md:p-10">
        <div className="mb-8 inline-flex rounded-full bg-[color:rgba(217,119,87,0.12)] p-4 text-[color:var(--color-accent)]">
          <LockKeyhole className="h-6 w-6" />
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--color-muted)]">
            {content.eyebrow}
          </p>
          <h1 className="font-display text-3xl font-bold text-[color:var(--color-fg)] md:text-4xl">
            {content.title}
          </h1>
          <p className="text-sm leading-7 text-[color:var(--color-muted)]">{helperText}</p>
        </div>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <label className="block space-y-2">
            <span className="text-sm text-[color:var(--color-fg)]">{content.fieldLabel}</span>
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                if (error) {
                  setError("");
                }
              }}
              placeholder={content.placeholder}
              className="w-full rounded-2xl border border-[color:var(--color-line)] bg-[color:rgba(255,255,255,0.6)] px-4 py-3 text-base text-[color:var(--color-fg)] outline-none transition placeholder:text-[color:var(--color-soft-muted)] focus:border-[color:var(--color-accent)] focus:shadow-[0_0_0_4px_rgba(217,119,87,0.12)]"
              autoFocus
            />
          </label>

          {error ? (
            <p className="text-sm text-[color:var(--color-accent)]">{error}</p>
          ) : (
            <p className="text-sm text-[color:var(--color-soft-muted)]">{content.successHint}</p>
          )}

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent)] px-5 py-3 font-display text-sm text-[color:var(--color-bg)] transition hover:translate-y-[-1px] hover:shadow-[0_12px_24px_rgba(217,119,87,0.22)]"
          >
            {content.buttonLabel}
          </button>
        </form>
      </section>
    </main>
  );
}
