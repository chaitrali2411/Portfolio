"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      if (window.scrollY < 120) {
        setActiveSection("about");
        return;
      }

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 80;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-[2px] left-0 right-0 z-50 transition-all duration-300 ease-premium",
        scrolled ? "nav-glass" : "bg-transparent"
      )}
    >
      <nav className="section-container flex h-14 items-center justify-between md:h-16">
        <a
          href="#about"
          className="text-sm font-bold tracking-tight"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-foreground">{personalInfo.name.split(" ")[0]}</span>
          <span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-[13px] font-medium transition-colors duration-200",
                    isActive
                      ? "text-primary"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-xl bg-primary px-4 py-2 text-[13px] font-medium text-white shadow-sm shadow-primary/20 transition-all duration-200 hover:bg-primary/90 hover:shadow-md md:inline-flex"
        >
          Hire Me
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-muted transition-colors hover:bg-black/[0.04] hover:text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <motion.div
        className={cn(
          "fixed inset-0 top-14 z-40 border-t border-border bg-white/95 backdrop-blur-xl md:hidden",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      >
        <ul className="flex flex-col p-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mt-2 border-t border-border pt-3">
            <a
              href="#contact"
              className="block rounded-xl bg-primary px-4 py-3 text-center text-sm font-medium text-white shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </motion.div>
    </header>
  );
}
