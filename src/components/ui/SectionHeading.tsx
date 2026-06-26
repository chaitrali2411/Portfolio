"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  id,
}: SectionHeadingProps) {
  const words = title.split(" ");
  const lastWord = words.pop() ?? "";

  return (
    <motion.div
      id={id}
      className="mb-10 md:mb-12"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
        {words.length > 0 && <span>{words.join(" ")} </span>}
        <span className="gradient-text">{lastWord}</span>
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function AnimatedSection({
  children,
  className = "",
  id,
}: AnimatedSectionProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <motion.div
        className="section-container"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
