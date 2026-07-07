import { ArrowUpRight, Download, Github, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import type { Locale, SiteContent } from "@/data/siteContent";
import useScrollReveal from "@/hooks/useScrollReveal";

type HeroHeaderProps = {
  locale: Locale;
  content: SiteContent;
};

export default function HeroHeader({ locale, content }: HeroHeaderProps) {
  const headerRef = useScrollReveal<HTMLElement>();
  const { hero, nav, profile } = content;

  return (
    <header ref={headerRef} className="reveal-block space-y-8 pb-12 pt-4 md:space-y-12 md:pb-16">
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

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_320px] md:items-end">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--color-muted)]">{hero.eyebrow}</p>
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-bold leading-tight text-[color:var(--color-fg)] md:text-6xl">
                {profile.name}
              </h1>
              <div className="space-y-2 text-[color:var(--color-muted)]">
                <p className="text-sm uppercase tracking-[0.18em] md:text-base">
                  {hero.nameLabel}: {profile.englishName}
                </p>
                <p className="text-base md:text-lg">{profile.title}</p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl space-y-4">
            <p className="text-lg leading-8 text-[color:var(--color-fg)] md:text-xl md:leading-9">
              {profile.summary}
            </p>
            <p className="max-w-2xl text-base leading-8 text-[color:var(--color-muted)]">
              {profile.statement}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {profile.interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-panel)] px-4 py-2 text-sm text-[color:var(--color-fg)]"
              >
                {interest}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] px-5 py-3 font-display text-sm text-[color:var(--color-bg)] transition hover:translate-y-[-1px] hover:shadow-[0_12px_24px_rgba(217,119,87,0.22)]"
            >
              <Download className="h-4 w-4" />
              {hero.resumeLabel}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line)] px-5 py-3 font-display text-sm text-[color:var(--color-fg)] transition hover:border-[color:var(--color-accent-blue)] hover:text-[color:var(--color-accent-blue)]"
            >
              <Github className="h-4 w-4" />
              {hero.githubLabel}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <aside className="rounded-[28px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(232,230,220,0.75),rgba(250,249,245,0.95))] p-6 shadow-[0_20px_60px_rgba(20,20,19,0.06)]">
          <div className="space-y-4">
            <p className="font-display text-sm uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
              {hero.contactLabel}
            </p>
            <div className="space-y-3 text-sm leading-7 text-[color:var(--color-fg)]">
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[color:var(--color-accent-green)]" />
                {profile.institution} · {profile.location}
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 transition hover:text-[color:var(--color-accent)]"
              >
                <Mail className="h-4 w-4 text-[color:var(--color-accent)]" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 transition hover:text-[color:var(--color-accent-blue)]"
              >
                <Phone className="h-4 w-4 text-[color:var(--color-accent-blue)]" />
                {profile.phone}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
