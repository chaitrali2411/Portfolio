"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import SectionHeading, { AnimatedSection } from "@/components/ui/SectionHeading";

function CertificationLogo({ logo }: { logo: string }) {
  if (logo === "aws") {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FF9900]/25 bg-[#FF9900]/8">
        <span className="text-xs font-bold text-[#FF9900]">AWS</span>
      </div>
    );
  }

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0078D4]/25 bg-[#0078D4]/8">
      <span className="text-[10px] font-bold text-[#0078D4]">Azure</span>
    </div>
  );
}

export default function Certifications() {
  return (
    <AnimatedSection id="certifications" className="section-alt">
      <SectionHeading
        title="Certifications"
        subtitle="Industry-recognized cloud credentials"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            className="glass-card-hover flex items-center gap-4 rounded-card p-5 md:p-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
          >
            <CertificationLogo logo={cert.logo} />
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                {cert.provider}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-foreground md:text-base">
                {cert.title}
              </h3>
              {cert.code ? (
                <p className="mt-0.5 font-mono text-xs text-primary">{cert.code}</p>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
