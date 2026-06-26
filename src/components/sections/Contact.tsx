"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import SectionHeading, { AnimatedSection } from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { sendContactEmail, validateContactForm } from "@/lib/emailjs";
import type { ContactFormData } from "@/types";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "chaitrali-kadam",
    href: personalInfo.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "chaitralikadam",
    href: personalInfo.github,
  },
];

const initialFormState: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formState, setFormState] = useState<ContactFormData>(initialFormState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === "sending") return;

    const validationError = validateContactForm(formState);
    if (validationError) {
      setErrorMessage(validationError);
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      await sendContactEmail(formState);
      setStatus("sent");
      setFormState(initialFormState);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again or email me directly."
      );
    }
  };

  return (
    <AnimatedSection id="contact">
      <SectionHeading
        title="Get In Touch"
        subtitle="Let's discuss cloud infrastructure, DevOps, or your next project"
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="glass-card rounded-card p-6">
            <div className="mb-5 flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-primary" strokeWidth={2} />
              {personalInfo.location}
            </div>

            <div className="space-y-1">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.label === "Email" || link.label === "Phone"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    link.label === "Email" || link.label === "Phone"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors duration-200 hover:bg-background"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background transition-colors group-hover:border-primary/25 group-hover:bg-primary/[0.04]">
                    <link.icon
                      className="h-4 w-4 text-muted transition-colors group-hover:text-primary"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                      {link.label}
                    </p>
                    <p className="truncate text-sm font-medium text-foreground">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass-card rounded-card p-6 md:p-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          noValidate
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-muted">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="input-field"
                placeholder="Your name"
                disabled={status === "sending"}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="input-field"
                placeholder="your@email.com"
                disabled={status === "sending"}
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold text-muted">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                value={formState.subject}
                onChange={(e) =>
                  setFormState({ ...formState, subject: e.target.value })
                }
                className="input-field"
                placeholder="What would you like to discuss?"
                disabled={status === "sending"}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-muted">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="input-field resize-none"
                placeholder="Tell me about your project or opportunity..."
                disabled={status === "sending"}
              />
            </div>

            <Button
              type="submit"
              icon={Send}
              disabled={status === "sending"}
              className="w-full"
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                  ? "Message Sent!"
                  : "Send Message"}
            </Button>

            {status === "sent" && (
              <p className="text-center text-sm text-primary" role="status">
                Thank you! Your message was sent successfully. I&apos;ll get back to you soon.
              </p>
            )}

            {status === "error" && errorMessage && (
              <p className="text-center text-sm text-red-600" role="alert">
                {errorMessage}
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </AnimatedSection>
  );
}
