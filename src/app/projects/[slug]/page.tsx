import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, ExternalLink, Github, ImageIcon } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/portfolio";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} – ${project.subtitle}`,
    description: project.overview,
  };
}

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="section-label mb-4">{title}</h2>
      {children}
    </section>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const detailSections = [
    { title: "Project Overview", content: project.overview },
    { title: "Problem Statement", content: project.problem },
    { title: "Solution", content: project.solution },
    { title: "Architecture", content: project.architecture },
  ] as const;

  const listSections = [
    { title: "Features", items: project.features },
    { title: "Challenges", items: project.challenges },
    { title: "Results", items: project.results },
  ] as const;

  return (
    <div className="relative min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 page-grid opacity-40" />
      <div className="pointer-events-none fixed inset-0 bg-hero-glow" />

      <main className="section-container section-padding pb-20 pt-24">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2} />
          Back to Projects
        </Link>

        <header className="glass-card rounded-card p-6 md:p-10">
          <p className="section-label mb-3">Featured Project</p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-2 text-lg font-medium text-foreground/80">
            {project.subtitle}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
            <Calendar className="h-4 w-4 text-primary/70" strokeWidth={2} />
            {project.period}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
            >
              <Github className="h-4 w-4" strokeWidth={2} />
              GitHub
            </a>
            <a
              href={project.liveUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" strokeWidth={2} />
              Live Demo
            </a>
          </div>
        </header>

        <div className="mt-8 space-y-2 glass-card rounded-card p-6 md:p-10">
          {detailSections.map((section) => (
            <DetailSection key={section.title} title={section.title}>
              <p className="text-sm leading-relaxed text-foreground/80 md:text-[15px]">
                {section.content}
              </p>
            </DetailSection>
          ))}

          <DetailSection title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="skill-badge">
                  {tech}
                </span>
              ))}
            </div>
          </DetailSection>

          {listSections.map((section) => (
            <DetailSection key={section.title} title={section.title}>
              <ul className="space-y-2.5">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-relaxed text-foreground/80 md:text-[15px]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </DetailSection>
          ))}

          <DetailSection title="Resume Highlights">
            <ul className="space-y-2.5">
              {project.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex gap-2.5 text-sm leading-relaxed text-foreground/80 md:text-[15px]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  {achievement}
                </li>
              ))}
            </ul>
          </DetailSection>

          <DetailSection title="Screenshots">
            <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-border bg-background/60">
              <div className="text-center text-muted">
                <ImageIcon className="mx-auto mb-3 h-8 w-8 opacity-60" strokeWidth={1.5} />
                <p className="text-sm">Screenshot placeholder</p>
              </div>
            </div>
          </DetailSection>
        </div>
      </main>
    </div>
  );
}
