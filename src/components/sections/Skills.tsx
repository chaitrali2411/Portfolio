"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import SectionHeading, { AnimatedSection } from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="section-alt">
      <SectionHeading
        title="Skills & Technologies"
        subtitle="Resume-backed tools and technologies across cloud, DevOps, and software engineering"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="glass-card-hover rounded-card p-5 md:p-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.04, duration: 0.4 }}
          >
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
