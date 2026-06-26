export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: readonly string[];
  techStack: readonly string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  achievements: readonly string[];
  tech: readonly string[];
  githubUrl: string;
  liveUrl: string;
  gradient: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  features: readonly string[];
  challenges: readonly string[];
  results: readonly string[];
}

export interface Certification {
  title: string;
  code: string;
  provider: string;
  logo: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  coursework: readonly string[];
}

export interface SkillCategory {
  title: string;
  skills: readonly string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
