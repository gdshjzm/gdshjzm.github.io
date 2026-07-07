import { BrainCircuit, FileText, GraduationCap, NotebookPen } from "lucide-react";
import EducationSection from "@/components/EducationSection";
import HeroHeader from "@/components/HeroHeader";
import ProjectSection from "@/components/ProjectSection";
import ResearchSection from "@/components/ResearchSection";
import SectionShell from "@/components/SectionShell";
import SiteFooter from "@/components/SiteFooter";
import SkillsSection from "@/components/SkillsSection";
import StatHighlights from "@/components/StatHighlights";
import type { Locale, SiteContent } from "@/data/siteContent";
import useScrollReveal from "@/hooks/useScrollReveal";

const overviewIcons = [GraduationCap, NotebookPen, BrainCircuit, FileText];

type HomeProps = {
  locale: Locale;
  content: SiteContent;
};

export default function Home({ locale, content }: HomeProps) {
  const overviewRef = useScrollReveal<HTMLElement>();
  const { overview, sections } = content;

  return (
    <main className="relative overflow-x-hidden" data-locale={locale}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(217,119,87,0.16),transparent_68%)]" />
        <div className="absolute right-[-5rem] top-64 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(106,155,204,0.16),transparent_68%)]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(120,140,93,0.12),transparent_68%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-10 pt-6 md:px-8">
        <HeroHeader locale={locale} content={content} />

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
    </main>
  );
}
