import { BookOpen, GraduationCap, Languages, Trophy } from "lucide-react";
import type { EducationItem } from "@/data/siteContent";

const icons = [GraduationCap, BookOpen, Languages, Trophy];

type EducationSectionProps = {
  items: EducationItem[];
  label: string;
};

export default function EducationSection({ items, label }: EducationSectionProps) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <article
          key={item.school}
          className="rounded-[28px] border border-[color:var(--color-line)] bg-[color:var(--color-panel)] p-6 shadow-[0_16px_40px_rgba(20,20,19,0.04)] md:p-8"
        >
          <div className="flex flex-col gap-4 border-b border-[color:var(--color-line)] pb-5 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--color-muted)]">{label}</p>
              <h3 className="font-display text-2xl font-bold text-[color:var(--color-fg)]">
                {item.school}
              </h3>
              <p className="text-base text-[color:var(--color-fg)]">{item.program}</p>
            </div>
            <div className="space-y-1 text-sm leading-7 text-[color:var(--color-muted)] md:text-right">
              <p>{item.location}</p>
              <p>{item.period}</p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {item.highlights.map((highlight, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div
                  key={highlight}
                  className="flex gap-3 border-b border-[color:rgba(20,20,19,0.08)] pb-3 last:border-b-0 last:pb-0"
                >
                  <div className="mt-1 text-[color:var(--color-accent-blue)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-7 text-[color:var(--color-fg)]">{highlight}</p>
                </div>
              );
            })}
          </div>
        </article>
      ))}
    </div>
  );
}
