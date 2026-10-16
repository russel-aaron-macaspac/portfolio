export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  image?: string;
  objectives: string[];
  contribution: string;
  status: string;
};

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    eyebrow: "Personal project",
    description: "A modern portfolio showcasing my skills and projects.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Russel-Aaron-Macaspac/portfolio",
    objectives: ["Present my technical skills and selected work in one place.", "Create an accessible way to learn about my background."],
    contribution: "Designed and built the original portfolio website and its responsive pages.",
    status: "Active",
  },
  {
    slug: "folioforge-website",
    title: "FolioForge Website",
    eyebrow: "ITPM project",
    description: "A portfolio website builder developed with HTML and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/russel-aaron-macaspac/ITPM-Project",
    objectives: ["Build a portfolio website builder using core web technologies."],
    contribution: "Contributed to the website builder project as part of the ITPM project.",
    status: "Completed",
  },
];

export const skills = [
  { name: "JavaScript", group: "Programming languages", color: "text-yellow-300", description: "Interactive web experiences and application logic." },
  { name: "C", group: "Programming languages", color: "text-blue-300", description: "Foundational programming and problem solving." },
  { name: "Java", group: "Programming languages", color: "text-red-300", description: "Object-oriented application development." },
  { name: "Dart", group: "Programming languages", color: "text-cyan-300", description: "Language used with Flutter projects." },
  { name: "HTML", group: "Web technologies", color: "text-orange-300", description: "Semantic structure for the web." },
  { name: "CSS", group: "Web technologies", color: "text-sky-300", description: "Responsive layouts and visual styling." },
  { name: "Oracle", group: "Databases", color: "text-red-300", description: "Relational database technology." },
  { name: "MongoDB", group: "Databases", color: "text-emerald-300", description: "Document-oriented database technology." },
  { name: "GitHub", group: "Tools & frameworks", color: "text-white", description: "Source control and project collaboration." },
  { name: "Visual Studio Code", group: "Tools & frameworks", color: "text-blue-300", description: "Primary code editor." },
  { name: "Android Studio", group: "Tools & frameworks", color: "text-green-300", description: "Android development environment." },
  { name: "Flutter", group: "Tools & frameworks", color: "text-cyan-300", description: "Cross-platform app development framework." },
  { name: "Firebase", group: "Tools & frameworks", color: "text-amber-300", description: "Backend and app platform." },
  { name: "Node.js", group: "Tools & frameworks", color: "text-lime-300", description: "JavaScript runtime for server-side development." },
  { name: "Express.js", group: "Tools & frameworks", color: "text-slate-200", description: "Web framework for Node.js." },
  { name: "Postman", group: "Tools & frameworks", color: "text-orange-300", description: "API development and testing tool." },
];

export const certifications = [
  { title: "Microsoft PowerPoint Certification", provider: "Certiport", year: "2024", image: "/assets/powerpointCert.png" },
  { title: "Microsoft Word Certification", provider: "Certiport", year: "2024", image: "/assets/wordCert.png" },
  { title: "Database Certification", provider: "Certiport", year: "2025", image: "/assets/databaseCert-1.png" },
];
