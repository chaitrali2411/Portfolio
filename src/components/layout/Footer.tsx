import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 py-8">
      <div className="section-container flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <p className="text-xs text-muted/80">
          Built with Next.js, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
