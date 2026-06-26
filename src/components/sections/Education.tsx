"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import SectionHeading, { AnimatedSection } from "@/components/ui/SectionHeading";

export default function Education() {
  return (
    <AnimatedSection id="education">
      <SectionHeading
        title="Education"
        subtitle="Academic background and coursework"
      />

      <div className="grid gap-4">
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            className="glass-card-hover rounded-card p-6 md:p-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                  <GraduationCap className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground md:text-lg">
                    {edu.institution}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{edu.degree}</p>
                  <p className="mt-0.5 text-xs text-muted">{edu.period}</p>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-background px-4 py-2 text-left sm:text-right">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                  GPA
                </p>
                <p className="text-xl font-bold text-primary">{edu.gpa}</p>
              </div>
            </div>

            {edu.coursework.length > 0 && (
              <div className="mt-6 border-t border-border pt-5">
                <p className="section-label mb-3">Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span key={course} className="skill-badge">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
