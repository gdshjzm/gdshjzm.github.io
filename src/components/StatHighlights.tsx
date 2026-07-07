import type { StatItem } from "@/data/siteContent";

const accentMap = {
  orange: "text-[color:var(--color-accent)]",
  blue: "text-[color:var(--color-accent-blue)]",
  green: "text-[color:var(--color-accent-green)]",
};

type StatHighlightsProps = {
  items: StatItem[];
};

export default function StatHighlights({ items }: StatHighlightsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.label}
          className="rounded-[24px] border border-[color:var(--color-line)] bg-[color:rgba(255,255,255,0.35)] p-5 transition hover:translate-y-[-2px] hover:shadow-[0_16px_32px_rgba(20,20,19,0.05)]"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
            {item.label}
          </p>
          <p className={`mt-3 font-display text-2xl ${accentMap[item.accent]}`}>{item.value}</p>
          <p className="mt-2 text-sm leading-7 text-[color:var(--color-fg)]">{item.note}</p>
        </article>
      ))}
    </div>
  );
}
