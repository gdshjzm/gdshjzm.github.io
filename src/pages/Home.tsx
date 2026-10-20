import { BrainCircuit, FileText, GraduationCap, NotebookPen } from "lucide-react";
import EducationSection from "@/components/EducationSection";
import HeroHeader from "@/components/HeroHeader";
import ProjectSection from "@/components/ProjectSection";
import ResearchSection from "@/components/ResearchSection";
import ResumeGate from "@/components/ResumeGate";
import SectionShell from "@/components/SectionShell";
import SiteFooter from "@/components/SiteFooter";
import SkillsSection from "@/components/SkillsSection";
import StatHighlights from "@/components/StatHighlights";
import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer";
import SculptureHero from "@/components/ui/liquid-sculpture-hero";
import type { Locale, SiteContent } from "@/data/siteContent";
import useScrollReveal from "@/hooks/useScrollReveal";

const overviewIcons = [GraduationCap, NotebookPen, BrainCircuit, FileText];

type HomeProps = {
  locale: Locale;
  content: SiteContent;
};

export default function Home({ locale, content }: HomeProps) {
  const overviewRef = useScrollReveal<HTMLElement>();
  const { hero, overview, profile, sections, footer, nav } = content;
  const sansFont =
    locale === "zh"
      ? "'Anthropic Sans', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif"
      : "'Anthropic Sans', 'Helvetica Neue', Arial, sans-serif";
  const footerColumns = [
    {
      title: locale === "zh" ? "导航" : "Navigate",
      links: nav.items,
    },
    {
      title: locale === "zh" ? "联系" : "Contact",
      links: [
        { label: profile.email, href: `mailto:${profile.email}` },
        { label: footer.githubLabel, href: profile.github },
      ],
    },
    {
      title: locale === "zh" ? "简历" : "Resume",
      links: [
        { label: hero.resumeLabel, href: profile.resumeHref },
        { label: hero.contactLabel, href: "#contact" },
      ],
    },
  ];

  return (
    <main className="relative overflow-x-hidden" data-locale={locale}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(23,119,107,0.14),transparent_68%)]" />
        <div className="absolute right-[-5rem] top-64 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(102,125,160,0.16),transparent_68%)]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(183,149,83,0.12),transparent_68%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pt-6 md:px-8">
        <HeroHeader locale={locale} content={content} />
      </div>

      <div className="relative z-10 mx-auto mt-4 max-w-[90rem] px-3 md:px-6">
        <SculptureHero
          src="/sculpture/light.webp"
          mobileSrc="/sculpture/mobile-light.webp"
          imageAlt="Abstract sculpture of interwoven metallic filaments and particles"
          imageBackground="#EAE9E7"
          showNav={false}
          eyebrow={hero.eyebrow}
          headline={hero.sculpture.headline}
          headlineAccent={hero.sculpture.headlineAccent}
          body={profile.summary}
          primaryCta={{ label: hero.resumeLabel, href: profile.resumeHref }}
          secondaryCta={{ label: hero.githubLabel, href: profile.github }}
          hint={hero.sculpture.hint}
          hintTouch={hero.sculpture.hintTouch}
          background="#FFFEFA"
          textColor="#182C29"
          accentColor="#BE704B"
          headingFont={sansFont}
          bodyFont={sansFont}
          accentFont="'Anthropic Serif', Georgia, serif"
          loadFonts={false}
          intro
          ambient
          ambientIntensity={0.55}
          backdropText={hero.sculpture.backdropText}
          showCredit
          height="86svh"
          className="rounded-[32px] border border-[color:var(--color-line)]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-10 md:px-8">
        <div className="grid gap-6 py-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-center md:py-10">
          <p className="text-base leading-8 text-[color:var(--color-muted)]">{profile.statement}</p>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {profile.interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-panel)] px-4 py-2 text-sm text-[color:var(--color-fg)]"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        <section
          ref={overviewRef}
          className="reveal-block grid gap-4 border-t border-[color:var(--color-line)] py-10 md:grid-cols-4 md:py-14"
        >
          {overview.items.map((item, index) => {
            const Icon = overviewIcons[index % overviewIcons.length];
            return (
              <article
                key={item.title}
                className="reveal-card rounded-[24px] border border-[color:var(--color-line)] bg-[color:rgba(255,255,255,0.3)] p-5"
                style={{ animationDelay: `${80 + index * 90}ms` }}
              >
                <div className="mb-4 inline-flex rounded-full bg-[color:var(--color-panel)] p-3 text-[color:var(--color-accent)]">
                  <Icon className="h-4 w-4" />
                </div>
                <h2 className="font-display text-lg text-[color:var(--color-fg)]">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </section>

        <SectionShell
          id="overview"
          index={sections.overview.index}
          title={sections.overview.title}
          description={sections.overview.description}
        >
          <StatHighlights items={content.stats} />
        </SectionShell>

        <SectionShell
          id="education"
          index={sections.education.index}
          title={sections.education.title}
          description={sections.education.description}
        >
          <EducationSection items={content.education} label={content.labels.education} />
        </SectionShell>

        <SectionShell
          id="research"
          index={sections.research.index}
          title={sections.research.title}
          description={sections.research.description}
        >
          <ResearchSection items={content.researchItems} />
        </SectionShell>

        <SectionShell
          id="projects"
          index={sections.projects.index}
          title={sections.projects.title}
          description={sections.projects.description}
        >
          <ProjectSection items={content.projectItems} label={content.labels.project} />
        </SectionShell>

        <SectionShell
          id="skills"
          index={sections.skills.index}
          title={sections.skills.title}
          description={sections.skills.description}
        >
          <SkillsSection groups={content.skillGroups} label={content.labels.skillGroup} />
        </SectionShell>

        <SiteFooter content={content} />
      </div>

      <div className="relative z-10 mt-6 px-3 pb-3 md:px-6 md:pb-6">
        <HalftoneWordmarkFooter
          wordmark="Busheng Zhang"
          label={profile.name}
          meta={locale === "zh" ? "© 2026 · 北邮 → 浙大" : "© 2026 · BUPT → ZJU"}
          columns={footerColumns}
          preset="paper"
          palette={{ background: "#FFFEFA", ink: "#182C29", warm: "#BE704B" }}
          fontFamily={sansFont}
          monoFamily={sansFont}
          height="min(58vh, 520px)"
          dotGap={6}
          crop={0.2}
          className="rounded-[32px] border border-[color:var(--color-line)]"
        />
      </div>

      <ResumeGate resumeHref={profile.resumeHref} locale={locale} />
    </main>
  );
}
