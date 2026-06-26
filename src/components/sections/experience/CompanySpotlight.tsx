"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import type { Experience } from "@/types";

interface CompanySpotlightProps {
  experience: Experience;
}

export default function CompanySpotlight({ experience }: CompanySpotlightProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={experience.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card rounded-card p-6 md:p-8"
      >
        <div className="border-b border-border pb-5">
          <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
            {experience.company}
          </h3>
          <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Briefcase className="h-4 w-4 text-primary/70" strokeWidth={2} />
              {experience.role}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-primary/70" strokeWidth={2} />
              {experience.period}
            </span>
            {experience.location && (
              <span className="text-muted">{experience.location}</span>
            )}
          </div>
        </div>

        <div className="mt-5">
          <p className="section-label mb-3">Achievements</p>
          <ul className="space-y-2.5">
            {experience.achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex gap-2.5 text-sm leading-relaxed text-foreground/80 md:text-[15px]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 border-t border-border pt-5">
          <p className="section-label mb-3">Technologies Used</p>
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech) => (
              <span key={tech} className="skill-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </AnimatePresence>
  );
}
