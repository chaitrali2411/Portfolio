"use client";

import { experiences } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import type { Experience } from "@/types";

interface CompanyNavProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

function CompanyNavItem({
  exp,
  isActive,
  onSelect,
  layout,
}: {
  exp: Experience;
  isActive: boolean;
  onSelect: () => void;
  layout: "vertical" | "horizontal";
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "relative w-full rounded-xl border px-4 py-3 text-left transition-all duration-200 ease-premium",
        layout === "horizontal" && "min-w-[190px] shrink-0",
        isActive
          ? "border-primary/25 bg-primary/[0.04] text-foreground shadow-sm"
          : "border-transparent bg-transparent text-muted hover:border-border hover:bg-background hover:text-foreground"
      )}
    >
      {isActive && (
        <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-primary" />
      )}
      <span className="block text-sm font-semibold leading-snug">
        {exp.company}
      </span>
      <span className="mt-0.5 block text-xs text-muted">{exp.period}</span>
    </button>
  );
}

export default function CompanyNav({ selectedId, onSelect }: CompanyNavProps) {
  return (
    <>
      <nav className="hidden flex-col gap-1.5 md:flex" aria-label="Company navigation">
        {experiences.map((exp) => (
          <CompanyNavItem
            key={exp.id}
            exp={exp}
            isActive={selectedId === exp.id}
            onSelect={() => onSelect(exp.id)}
            layout="vertical"
          />
        ))}
      </nav>

      <nav
        className="flex gap-2 overflow-x-auto pb-1 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Company navigation"
      >
        {experiences.map((exp) => (
          <CompanyNavItem
            key={exp.id}
            exp={exp}
            isActive={selectedId === exp.id}
            onSelect={() => onSelect(exp.id)}
            layout="horizontal"
          />
        ))}
      </nav>
    </>
  );
}
