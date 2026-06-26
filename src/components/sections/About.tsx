"use client";

import { motion } from "framer-motion";
import { Check, MapPin } from "lucide-react";
import { Download, FolderKanban, Mail } from "lucide-react";
import { aboutContent, personalInfo } from "@/data/portfolio";
import ProfilePhoto from "@/components/sections/about/ProfilePhoto";
import Button from "@/components/ui/Button";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding flex min-h-[calc(100vh-3.5rem)] items-center pt-20 md:pt-24"
    >
      <div className="section-container w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[40%_60%] lg:gap-16">
          <ProfilePhoto />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p className="text-sm font-medium text-primary">
              Hi, I&apos;m{" "}
              <span className="text-foreground">{personalInfo.name}</span>
            </p>

            <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              {personalInfo.title}
            </h1>

            <div className="mt-3 flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-primary/70" strokeWidth={2} />
              {personalInfo.location}
            </div>

            <div className="mt-6 space-y-4">
              {aboutContent.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[15px] leading-relaxed text-muted md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="mt-4 text-[15px] leading-relaxed text-muted md:text-base">
              {aboutContent.closing}
            </p>

            <div className="mt-8">
              <h2 className="section-label mb-3">Expertise</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {aboutContent.expertise.map((skill, i) => (
                  <motion.li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-foreground/85"
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.03, duration: 0.35 }}
                  >
                    <Check className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={2.5} />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-7">
              <h2 className="section-label mb-3">Key Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {aboutContent.keyTechnologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="skill-badge"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 + i * 0.03, duration: 0.3 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <Button href={personalInfo.resumeUrl} icon={Download}>
                Download Resume
              </Button>
              <Button href="#projects" variant="outline" icon={FolderKanban}>
                View Projects
              </Button>
              <Button href="#contact" variant="secondary" icon={Mail}>
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
