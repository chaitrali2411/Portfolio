"use client";

import { useState } from "react";
import { experiences } from "@/data/portfolio";
import SectionHeading, { AnimatedSection } from "@/components/ui/SectionHeading";
import CompanyNav from "@/components/sections/experience/CompanyNav";
import CompanySpotlight from "@/components/sections/experience/CompanySpotlight";

export default function ExperienceSection() {
  const [selectedId, setSelectedId] = useState<string>(experiences[0].id);

  const selectedExperience =
    experiences.find((exp) => exp.id === selectedId) ?? experiences[0];

  return (
    <AnimatedSection id="experience" className="section-alt">
      <SectionHeading
        title="Work Experience"
        subtitle="Professional journey in cloud and software engineering"
      />

      <div className="grid gap-4 md:grid-cols-[220px_1fr] md:gap-5 lg:grid-cols-[240px_1fr]">
        <CompanyNav selectedId={selectedId} onSelect={setSelectedId} />
        <CompanySpotlight experience={selectedExperience} />
      </div>
    </AnimatedSection>
  );
}
