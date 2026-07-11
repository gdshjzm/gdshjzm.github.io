import { ArrowUpRight, Github, Mail, Phone } from "lucide-react";
import type { SiteContent } from "@/data/siteContent";
import useScrollReveal from "@/hooks/useScrollReveal";

type SiteFooterProps = {
  content: SiteContent;
};

export default function SiteFooter({ content }: SiteFooterProps) {
  const footerRef = useScrollReveal<HTMLElement>();
  const { footer, profile } = content;

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="reveal-block mt-14 border-t border-[color:var(--color-line)] pb-10 pt-8 md:mt-20"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
            {footer.eyebrow}
          </p>
          <h2 className="font-display text-2xl font-bold text-[color:var(--color-fg)] md:text-3xl">
            {footer.title}
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-[color:var(--color-muted)]">{footer.description}</p>
        </div>

        <div className="space-y-3 text-sm leading-7 text-[color:var(--color-fg)]">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 transition hover:text-[color:var(--color-accent)]"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-3 transition hover:text-[color:var(--color-accent-blue)]"
          >
            <Phone className="h-4 w-4" />
            {profile.phone}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 transition hover:text-[color:var(--color-accent-green)]"
          >
            <Github className="h-4 w-4" />
            {footer.githubLabel}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
