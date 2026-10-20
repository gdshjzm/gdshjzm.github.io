import { Link } from "react-router-dom";
import type { Locale, SiteContent } from "@/data/siteContent";
import useScrollReveal from "@/hooks/useScrollReveal";

type HeroHeaderProps = {
  locale: Locale;
  content: SiteContent;
};

export default function HeroHeader({ locale, content }: HeroHeaderProps) {
  const headerRef = useScrollReveal<HTMLElement>();
  const { nav } = content;

  return (
    <header ref={headerRef} className="reveal-block">
      <div className="sticky top-4 z-20 rounded-full border border-[color:var(--color-line)] bg-[color:rgba(250,249,245,0.86)] px-4 py-3 backdrop-blur">
        <nav className="flex flex-wrap items-center justify-between gap-3 text-sm text-[color:var(--color-muted)]">
          <span className="font-display text-[0.95rem] text-[color:var(--color-fg)]">
            {nav.brand}
          </span>
          <div className="flex flex-wrap items-center gap-4">
            {nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[color:var(--color-fg)]"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2 border-l border-[color:var(--color-line)] pl-4">
              <Link
                to="/"
                className={[
                  "rounded-full px-3 py-1.5 font-display text-xs transition",
                  locale === "en"
                    ? "bg-[color:var(--color-fg)] text-[color:var(--color-bg)]"
                    : "text-[color:var(--color-muted)] hover:text-[color:var(--color-fg)]",
                ].join(" ")}
              >
                EN
              </Link>
              <Link
                to="/zh"
                className={[
                  "rounded-full px-3 py-1.5 font-display text-xs transition",
                  locale === "zh"
                    ? "bg-[color:var(--color-fg)] text-[color:var(--color-bg)]"
                    : "text-[color:var(--color-muted)] hover:text-[color:var(--color-fg)]",
                ].join(" ")}
              >
                中文
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
