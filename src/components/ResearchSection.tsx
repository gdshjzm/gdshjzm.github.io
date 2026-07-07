import { ArrowUpRight } from "lucide-react";
import type { ResearchItem } from "@/data/siteContent";

type ResearchSectionProps = {
  items: ResearchItem[];
};

export default function ResearchSection({ items }: ResearchSectionProps) {
  return (
    <div className="relative space-y-6 before:absolute before:left-[13px] before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-[color:var(--color-line)] md:before:left-[18px]">
      {items.map((item) => (
        <article key={item.title} className="relative pl-10 md:pl-14">
          <span className="absolute left-0 top-4 h-7 w-7 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg)] shadow-[0_6px_16px_rgba(20,20,19,0.05)] md:h-9 md:w-9" />
          <div className="rounded-[28px] border border-[color:var(--color-line)] bg-[color:var(--color-panel)] p-6 shadow-[0_18px_44px_rgba(20,20,19,0.04)] md:p-8">
            <div className="flex flex-col gap-4 border-b border-[color:var(--color-line)] pb-5 md:flex-row md:items-start md:justify-between">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                  {item.role}
                </p>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-display text-xl font-bold leading-8 text-[color:var(--color-fg)] transition hover:text-[color:var(--color-accent)] md:text-2xl"
                  >
                    {item.title}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <h3 className="font-display text-xl font-bold leading-8 text-[color:var(--color-fg)] md:text-2xl">
                    {item.title}
                  </h3>
                )}
                <p className="text-sm leading-7 text-[color:var(--color-muted)]">{item.organization}</p>
              </div>
              <p className="text-sm leading-7 text-[color:var(--color-muted)]">{item.period}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <span
                  key={tag}
                  className={[
                    "rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.16em]",
                    index === 0
                      ? "bg-[color:rgba(217,119,87,0.14)] text-[color:var(--color-accent)]"
                      : index === 1
                        ? "bg-[color:rgba(106,155,204,0.14)] text-[color:var(--color-accent-blue)]"
                        : "bg-[color:rgba(120,140,93,0.14)] text-[color:var(--color-accent-green)]",
                  ].join(" ")}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 space-y-3">
              {item.bullets.map((bullet) => (
                <p key={bullet} className="text-sm leading-8 text-[color:var(--color-fg)]">
                  {bullet}
                </p>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
