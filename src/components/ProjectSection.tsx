import type { ProjectItem } from "@/data/siteContent";

type ProjectSectionProps = {
  items: ProjectItem[];
  label: string;
};

export default function ProjectSection({ items, label }: ProjectSectionProps) {
  return (
    <div className="grid gap-5">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-[28px] border border-[color:var(--color-line)] bg-[color:var(--color-panel)] p-6 shadow-[0_16px_40px_rgba(20,20,19,0.04)] md:p-8"
        >
          <div className="flex flex-col gap-4 border-b border-[color:var(--color-line)] pb-5 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                {label}
              </p>
              <h3 className="font-display text-xl font-bold text-[color:var(--color-fg)] md:text-2xl">
                {item.title}
              </h3>
            </div>
            <p className="text-sm leading-7 text-[color:var(--color-muted)]">{item.period}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[color:var(--color-line)] px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-[color:var(--color-muted)]"
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
        </article>
      ))}
    </div>
  );
}
