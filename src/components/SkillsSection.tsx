import type { SkillGroup } from "@/data/siteContent";

type SkillsSectionProps = {
  groups: SkillGroup[];
  label: string;
};

export default function SkillsSection({ groups, label }: SkillsSectionProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {groups.map((group) => (
        <article
          key={group.label}
          className="rounded-[28px] border border-[color:var(--color-line)] bg-[color:var(--color-panel)] p-6 shadow-[0_14px_36px_rgba(20,20,19,0.04)]"
        >
          <div className="space-y-3">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                {label}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-[color:var(--color-fg)]">
                {group.label}
              </h3>
            </div>
            <p className="text-sm leading-7 text-[color:var(--color-muted)]">{group.description}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {group.items.map((item, index) => (
              <span
                key={item}
                className={[
                  "rounded-full px-3 py-2 text-sm",
                  index % 3 === 0
                    ? "bg-[color:rgba(217,119,87,0.12)] text-[color:var(--color-accent)]"
                    : index % 3 === 1
                      ? "bg-[color:rgba(106,155,204,0.12)] text-[color:var(--color-accent-blue)]"
                      : "bg-[color:rgba(120,140,93,0.12)] text-[color:var(--color-accent-green)]",
                ].join(" ")}
              >
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
