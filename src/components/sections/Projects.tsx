"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeading, { AnimatedSection } from "@/components/ui/SectionHeading";

export default function Projects() {
  return (
    <AnimatedSection id="projects">
      <SectionHeading
        title="Featured Projects"
        subtitle="AI-powered and cloud-native solutions I've built"
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.slug}
            className="glass-card-hover group flex flex-col rounded-card p-6 md:p-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-foreground/80">
                  {project.subtitle}
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted">
                  <Calendar className="h-3.5 w-3.5" strokeWidth={2} />
                  {project.period}
                </p>
              </div>
              <div className="flex shrink-0 gap-1">
                <a
                  href={project.githubUrl}
                  className="rounded-lg p-2 text-muted transition-colors duration-200 hover:bg-background hover:text-primary"
                  aria-label={`${project.title} GitHub`}
                >
                  <Github size={17} strokeWidth={2} />
                </a>
                <a
                  href={project.liveUrl}
                  className="rounded-lg p-2 text-muted transition-colors duration-200 hover:bg-background hover:text-primary"
                  aria-label={`${project.title} live demo`}
                >
                  <ExternalLink size={17} strokeWidth={2} />
                </a>
              </div>
            </div>

            <ul className="mb-5 flex-1 space-y-2.5">
              {project.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex gap-2.5 text-sm leading-relaxed text-muted md:text-[15px]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  {achievement}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 border-t border-border pt-5">
              {project.tech.map((tech) => (
                <span key={tech} className="skill-badge">
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              View project details
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
