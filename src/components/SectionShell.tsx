import type { ReactNode } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

type SectionShellProps = {
  id: string;
  index: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function SectionShell({
  id,
  index,
  title,
  description,
  children,
}: SectionShellProps) {
  const contentRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id={id} className="scroll-mt-24 border-t border-[color:var(--color-line)] py-10 first:border-t-0 md:py-14">
      <div className="grid gap-6 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10">
        <div className="space-y-3 md:sticky md:top-24 md:self-start md:pt-4 md:pb-4 md:-ml-4 md:pl-4 md:-mr-4 md:pr-4 md:rounded-[24px] md:bg-[color:rgba(250,249,245,0.86)] md:backdrop-blur">
          <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
            {index}
          </p>
          <div className="space-y-2">
            <h2 className="font-display text-2xl font-bold text-[color:var(--color-fg)] md:text-3xl">
              {title}
            </h2>
            <p className="max-w-xs text-sm leading-7 text-[color:var(--color-muted)]">
              {description}
            </p>
          </div>
        </div>
        <div ref={contentRef} className="reveal-block">
          {children}
        </div>
      </div>
    </section>
  );
}
