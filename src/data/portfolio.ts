import type { Project } from "@/types";

export const personalInfo = {
  name: "Chaitrali Kadam",
  title: "DevOps Engineer | Cloud Engineer | Software Developer",
  location: "Denver, Colorado",
  email: "chaitralibalukadam@gmail.com",
  phone: "720-206-8399",
  linkedin: "https://www.linkedin.com/in/chaitrali-kadam-906b8321b/",
  github: "https://github.com/chaitralikadam",
  resumeUrl: "/resume.pdf",
} as const;

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
] as const;

export const aboutContent = {
  paragraphs: [
    "I'm Chaitrali Kadam, a Computer Science graduate student at the University of Colorado Denver with professional experience in Cloud Operations, DevOps Engineering, Infrastructure Automation, and Software Development.",
    "I have worked at Nasdaq and KPIT, where I automated cloud infrastructure, built CI/CD pipelines, optimized deployment processes, and developed scalable cloud-native solutions.",
  ],
  expertise: [
    "AWS Cloud",
    "Microsoft Azure",
    "Terraform",
    "Ansible",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "AWS CodePipeline",
    "GitHub Actions",
    "Python & FastAPI",
    "Infrastructure as Code",
    "Monitoring & Observability",
  ],
  closing:
    "I enjoy building reliable, scalable, and secure systems that improve operational efficiency and accelerate software delivery.",
  keyTechnologies: [
    "AWS",
    "Terraform",
    "Docker",
    "Jenkins",
    "Ansible",
    "Python",
    "FastAPI",
    "Linux",
    "Datadog",
    "GitHub Actions",
  ],
  profileImage: "/images/profile-kpit.jpg",
  roles: ["DevOps Engineer", "Cloud Engineer", "Software Developer"],
} as const;

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Go", "Bash", "Java", "SQL", "JavaScript", "C++", "TypeScript"],
  },
  {
    title: "Cloud Platforms",
    skills: [
      "AWS EC2",
      "AWS ECS",
      "AWS EKS",
      "AWS IAM",
      "AWS S3",
      "AWS Lambda",
      "Amazon SQS",
      "AWS RDS",
      "AWS ECR",
      "AWS CloudWatch",
      "AWS VPC",
      "AWS CodePipeline",
      "AWS CLI",
      "Azure",
      "GCP",
    ],
  },
  {
    title: "Containers & Orchestration",
    skills: ["Docker", "Kubernetes", "Helm", "AWS ECS", "AWS EKS", "Containerization"],
  },
  {
    title: "Infrastructure as Code",
    skills: ["Terraform", "CloudFormation", "Ansible"],
  },
  {
    title: "CI/CD & DevOps",
    skills: [
      "Jenkins",
      "GitHub Actions",
      "AWS CodePipeline",
      "GitLab CI/CD",
      "Argo CD",
      "GitOps",
      "Deployment Automation",
    ],
  },
  {
    title: "Monitoring & Observability",
    skills: ["Datadog", "Prometheus", "Grafana", "ELK Stack"],
  },
  {
    title: "Networking",
    skills: ["DNS", "VPC", "Load Balancing", "Nginx"],
  },
  {
    title: "Security",
    skills: ["IAM", "RBAC", "JWT Authentication"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB", "Supabase"],
  },
  {
    title: "Backend Development",
    skills: ["FastAPI", "REST APIs", "Microservices", "Serverless"],
  },
  {
    title: "Operating Systems",
    skills: ["Linux", "Shell Scripting"],
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    title: "Software Engineering",
    skills: [
      "Agile",
      "Software Testing",
      "High Availability",
      "Disaster Recovery",
    ],
  },
  {
    title: "AI & ML (Projects)",
    skills: [
      "TensorFlow",
      "PyTorch",
      "LSTM",
      "Transformers",
      "LangChain",
      "OpenCV",
      "YOLOv8",
      "Pandas",
      "NumPy",
    ],
  },
] as const;

export const experiences = [
  {
    id: "kpit",
    company: "KPIT",
    role: "Software - Cloud Engineer",
    location: "Novi, Michigan",
    period: "Jun 2025 – Aug 2025",
    achievements: [
      "Designed and implemented a FastAPI-based backend service using Python to process EV charging data and support automated station rating generation, improving scalability, reducing response latency by 30%, optimizing large-scale charging data processing",
      "Provisioned and managed AWS cloud infrastructure using Infrastructure as Code (Terraform), automating the deployment of EC2 instances, S3 buckets, IAM users, groups, and policies while implementing RBAC and environment provisioning workflows.",
      "Designed and automated CI/CD deployment pipelines using Jenkins, Ansible, AWS CLI, and Docker, improving deployment efficiency by 35%, accelerating release cycles, enabling reliable deployments across environments, and minimizing operational overhead",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "AWS EC2",
      "AWS S3",
      "AWS IAM",
      "RBAC",
      "Terraform",
      "Jenkins",
      "Ansible",
      "Docker",
      "AWS CLI",
      "PostgreSQL",
      "Git",
      "Machine Learning",
    ],
  },
  {
    id: "nasdaq",
    company: "Nasdaq",
    role: "Cloud Operation Engineer",
    location: "Pune, India",
    period: "Jan 2023 – Jul 2024",
    achievements: [
      "Automated environment provisioning and configuration across UAT, Non-Prod, and Production environments using Ansible, Terraform, and Docker, enabling scalable deployments, infrastructure consistency, and streamlined release management for Controller View applications",
      "Reduced manual deployment effort by 40% by designing and automating CI/CD pipelines using Jenkins and AWS CodePipeline, enabling repeatable releases, automated rollback mechanisms, faster delivery cycles, and improved deployment reliability across environments",
      "Developed and maintained serverless automation workflows using AWS Lambda and integrated asynchronous application components with Amazon SQS, improving operational efficiency, event-driven processing, and system scalability",
    ],
    techStack: [
      "AWS Lambda",
      "Amazon SQS",
      "AWS S3",
      "AWS CloudWatch",
      "AWS IAM",
      "Terraform",
      "Ansible",
      "Docker",
      "Jenkins",
      "AWS CodePipeline",
      "Datadog",
      "Linux",
      "Git",
      "Serverless",
    ],
  },
  {
    id: "interstellar",
    company: "Interstellar Scientific Private Limited",
    role: "Web Developer",
    location: "Pune, India",
    period: "Jul 2022 – Dec 2022",
    achievements: [
      "Developed responsive and accessible ReactJS-based user interfaces using HTML, CSS, and JavaScript, improving user experience, cross-browser compatibility, application responsiveness, and frontend maintainability across multiple application modules",
      "Built, maintained, and debugged RESTful APIs using FastAPI and PostgreSQL while implementing JWT authentication and RBAC, improving application security and backend reliability.",
      "Integrated end-to-end systems and collaborated with cross-functional teams to deliver scalable features and improve overall system usability",
    ],
    techStack: [
      "ReactJS",
      "JavaScript",
      "HTML",
      "CSS",
      "FastAPI",
      "PostgreSQL",
      "REST APIs",
      "JWT",
      "RBAC",
      "Git",
    ],
  },
  {
    id: "elite",
    company: "Elite Softwares",
    role: "Software Engineer",
    location: "Pune, India",
    period: "Jan 2021 - Jul 2022",
    achievements: [
      "Optimized MySQL and PostgreSQL database schemas and queries to improve application response times, enhance data retrieval efficiency, support reliable performance for web-based applications, and improve overall database scalability and maintainability",
      "Developed and enhanced user-facing features using HTML, CSS, and JavaScript while executing testing, debugging, and release documentation, collaborating within Agile development teams to improve application usability, maintain software quality, and support successful production releases",
    ],
    techStack: [
      "Java",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Agile",
      "Software Testing",
      "Debugging",
    ],
  },
] as const;

export const projects = [
  {
    slug: "snitch-ai",
    title: "Snitch AI",
    subtitle: "AI-Powered Log Anomaly Detection in Cloud Environments",
    period: "Jan 2026 – Present",
    achievements: [
      "Developed and deployed an AI-powered log anomaly detection platform in a cloud environment, processing 65,000+ cloud log records and automatically detecting 3,277 anomalous events using an LSTM-based deep learning model for proactive infrastructure monitoring.",
      "Built and deployed a containerized full-stack architecture using Docker, FastAPI, React, and AWS ECS, enabling scalable service deployment, environment management, and seamless frontend-backend integration.",
      "Established automated GitHub Actions CI/CD pipelines with Git-based workflows for code validation, Docker image builds, automated testing, deployment automation, and release management, enabling reproducible production-ready environments.",
    ],
    tech: [
      "Python",
      "TensorFlow",
      "LSTM",
      "FastAPI",
      "React",
      "Docker",
      "AWS ECS",
      "Pandas",
      "NumPy",
      "GitHub Actions",
      "Git",
    ],
    githubUrl: "#",
    liveUrl: "#",
    gradient: "from-primary/20 to-accent/20",
    overview:
      "Snitch AI is an AI-powered log anomaly detection platform built for cloud environments. It processes 65,000+ cloud log records and automatically detects 3,277 anomalous events using an LSTM-based deep learning model for proactive infrastructure monitoring.",
    problem:
      "Cloud infrastructure generates large volumes of log data, making it difficult to identify anomalous events manually and respond before they impact system reliability.",
    solution:
      "Built an AI-powered log anomaly detection platform that processes cloud log records at scale, detects anomalous events using an LSTM-based deep learning model, and delivers results through a containerized full-stack architecture with automated CI/CD pipelines.",
    architecture:
      "Containerized full-stack architecture using Docker, FastAPI, React, and AWS ECS, with GitHub Actions CI/CD pipelines for code validation, Docker image builds, automated testing, deployment automation, and release management.",
    features: [
      "AI-powered log anomaly detection using an LSTM-based deep learning model",
      "Processing of 65,000+ cloud log records with detection of 3,277 anomalous events",
      "Containerized deployment on AWS ECS with FastAPI backend and React frontend",
      "Automated GitHub Actions CI/CD pipelines with Git-based workflows",
    ],
    challenges: [
      "Processing 65,000+ cloud log records at scale for anomaly detection",
      "Building a containerized full-stack architecture with seamless frontend-backend integration on AWS ECS",
      "Establishing reproducible production-ready environments through automated CI/CD pipelines",
    ],
    results: [
      "Deployed an AI-powered log anomaly detection platform in a cloud environment",
      "Processed 65,000+ cloud log records and automatically detected 3,277 anomalous events",
      "Enabled scalable service deployment, environment management, and reproducible production-ready environments through Docker, AWS ECS, and GitHub Actions CI/CD",
    ],
  },
  {
    slug: "instamind-tech",
    title: "instaMIND.tech",
    subtitle:
      "On-Device Multi-Agent Security Surveillance - Google DeepMind X InstaLILY AI Hackathon",
    period: "Mar 2026 – May 2026",
    achievements: [
      "Built and deployed an on-device video intelligence system achieving <100ms P95 inference latency using C++/OpenCV, FastAPI, and fine-tuned Gemma 3, optimized for edge deployment",
      "Implemented on-device voice agent processing 160ms audio chunks using Gemma 3n 4B with unified voice+vision inference without separate STT/TTS pipeline, integrated with Twilio for real-time alerting",
      "Accelerated Gemma 3 fine-tuning by 2x at equal accuracy by rebuilding the training stack around Unsloth, QLoRA, and Flash Attention",
    ],
    tech: [
      "PyTorch",
      "TensorFlow",
      "Transformers",
      "PEFT/QLoRA",
      "Unsloth",
      "Flash Attention",
      "llama.cpp",
      "LangChain",
      "Gemma 3",
      "WebRTC",
      "WebSockets",
      "OpenCV",
      "Python",
      "C++",
      "React",
      "FastAPI",
      "Supabase",
      "TypeScript",
      "YOLOv8",
      "Pillow",
      "Twilio",
    ],
    githubUrl: "#",
    liveUrl: "#",
    gradient: "from-secondary/20 to-primary/20",
    overview:
      "instaMIND.tech is an on-device multi-agent security surveillance system built for the Google DeepMind X InstaLILY AI Hackathon. It combines on-device video intelligence and voice agent capabilities optimized for edge deployment.",
    problem:
      "Security surveillance systems often rely on cloud-based inference, introducing latency and privacy concerns for real-time video and voice intelligence at the edge.",
    solution:
      "Built and deployed an on-device video intelligence system with unified voice+vision inference, fine-tuned Gemma 3 models, and real-time alerting through Twilio — optimized for edge deployment with <100ms P95 inference latency.",
    architecture:
      "On-device system using C++/OpenCV, FastAPI, fine-tuned Gemma 3, and Gemma 3n 4B with unified voice+vision inference. Training stack rebuilt around Unsloth, QLoRA, and Flash Attention. Integrated with Twilio for real-time alerting.",
    features: [
      "On-device video intelligence achieving <100ms P95 inference latency",
      "On-device voice agent processing 160ms audio chunks with unified voice+vision inference",
      "Fine-tuned Gemma 3 optimized for edge deployment",
      "Real-time alerting integrated with Twilio",
    ],
    challenges: [
      "Achieving <100ms P95 inference latency for on-device video intelligence",
      "Implementing unified voice+vision inference without a separate STT/TTS pipeline",
      "Accelerating Gemma 3 fine-tuning while maintaining equal accuracy",
    ],
    results: [
      "Built and deployed an on-device video intelligence system achieving <100ms P95 inference latency",
      "Implemented on-device voice agent processing 160ms audio chunks using Gemma 3n 4B",
      "Accelerated Gemma 3 fine-tuning by 2x at equal accuracy using Unsloth, QLoRA, and Flash Attention",
    ],
  },
] as const satisfies readonly Project[];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    code: "CLF-C02",
    provider: "AWS",
    logo: "aws",
  },
  {
    title: "Microsoft Azure Fundamentals",
    code: "AZ-900",
    provider: "Microsoft Azure",
    logo: "azure",
  },
  {
    title: "AWS Certified Solutions Architect",
    code: "",
    provider: "AWS",
    logo: "aws",
  },
] as const;

export const education = [
  {
    institution: "University of Colorado Denver",
    degree: "M.S. in Computer Science",
    period: "Aug 2024 – May 2026",
    gpa: "3.8",
    coursework: [
      "Deep Learning",
      "Machine Learning",
      "Software Architecture",
      "AI with Reinforcement Learning",
      "Algorithms",
    ],
  },
  {
    institution: "Savitribai Phule Pune University",
    degree: "B.E. in Computer Engineering",
    period: "Aug 2019 – May 2023",
    gpa: "3.9",
    coursework: [
      "Data Structures and Algorithms",
      "Object Oriented Programming",
      "Database Management Systems",
      "Machine Learning",
    ],
  },
] as const;
