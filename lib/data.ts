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
  role: string;
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
    role: "Developer",
    status: "Active",
  },
  {
    slug: "smart-clearance-faculty-system",
    title: "Smart Clearance Faculty System",
    eyebrow: "Academic project",
    description: "A smart faculty clearance system for managing clearance requirements and processes.",
    technologies: ["Web technologies"],
    github: "https://github.com/art-nymrah-tiamzon/smart-clearance-front-end-copy",
    objectives: ["Support a more organized faculty clearance process through a dedicated system."],
    contribution: "Analyzed the system requirements and helped translate the project needs into a workable solution.",
    role: "System Analyst",
    status: "Completed",
  },
  {
    slug: "ai-assisted-faculty-Scheduling",
    title: "AI-assisted Faculty Scheduling and Requirements Management System",
    eyebrow: "Academic project",
    description: "An AI-assisted system for managing faculty Schedules and requirements.",
    technologies: ["Web technologies", "AI-assisted workflows"],
    github: "https://github.com/russel-aaron-macaspac/ai-faculty-management-web",
    objectives: ["Organize faculty scheduling and requirements management in a centralized web application."],
    contribution: "Built and refined the user-facing interface for the faculty management web application.",
    role: "Frontend Developer",
    status: "Completed",
  },
  {
    slug: "rfid-room-scanner",
    title: "RFID Room Scanner",
    eyebrow: "IoT project",
    description: "An RFID-based room scanning project developed as part of an IoT repository.",
    technologies: ["RFID", "IoT"],
    github: "http://github.com/lee-joshua-reyes/SDCA_BSIT3B_G11_IoT-Repository",
    objectives: ["Explore RFID technology for room scanning and IoT project development."],
    contribution: "Contributed to the development of the RFID room scanner project.",
    role: "Developer",
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
  { title: "Microsoft PowerPoint Certification", provider: "Certiport", year: "2024", image: "/assets/powerpointCert.png", verificationUrl: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=421&cvid=+AzOPx8z3uc5aPuRIqjUlg==" },
  { title: "Microsoft Word Certification", provider: "Certiport", year: "2024", image: "/assets/wordCert.png", verificationUrl: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=418&cvid=opDw1BMLsdxrXlr5De2dkg==" },
  { title: "Database Certification", provider: "Certiport", year: "2025", image: "/assets/databaseCert-1.png", verificationUrl: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=467&cvid=I3f2N2A7hPOw0R3jZRf6sQ==" },
  { title: "Cybersecurity Certification", provider: "Certiport", year: "2026", image: "/assets/Cybersecurity_cert.png", verificationUrl: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=494&cvid=a3c1fvd2HWDQ86KSxIrvgA==" },
  { title: "HTML and CSS Certification", provider: "Certiport", year: "2026", image: "/assets/HTMLCSS_cert.png", verificationUrl: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=468&cvid=lggzbEh/r9vxj/NetupQCw==" },
];

export const courses = [
  {
    title: "Introduction to Cybersecurity",
    provider: "Cisco Networking Academy",
    year: "2025",
    description: "Fundamentals of cybersecurity and online safety.",
    image: "/assets/cisco_cybersecurity.png",
  },

  {
    title: "Introduction to IoT and Digital Transformation",
    provider: "Cisco Networking Academy",
    year: "2026",
    description: "Learned how IoT is digitally transforming the world.",
    image: "/assets/cisco_iot.png",
  },

   {
    title: "Getting Started with Cisco Packet Tracer",
    provider: "Cisco Networking Academy",
    year: "2026",
    description: "Familiarized with the Packet Tracer simulation environment.",
    image: "/assets/cisco_packetTracer.png",
  },
];