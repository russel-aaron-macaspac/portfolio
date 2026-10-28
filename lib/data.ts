export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  images?: string[];
  objectives: string[];
  contribution: string;
  role: string;
  status: string;
};

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    eyebrow: "Third Year Academic & Personal project",
    description: "A modern portfolio showcasing my skills and projects.",
    technologies: ["Node.js", "React", "TypeScript", "Next.js", "Tailwind CSS"],
    github: "https://github.com/Russel-Aaron-Macaspac/portfolio",
    objectives: ["Present my technical skills and selected work in one place.", "Create an accessible way to learn about my background."],
    contribution: "Designed and built the original portfolio website and its responsive pages.",
    role: "Developer",
    status: "Active",
    images: [
      "/assets/port1.png",
      "/assets/port2.png",
      
    ],

  },
  {
    slug: "smart-clearance-faculty-system",
    title: "Smart Clearance Faculty System",
    eyebrow: "Third Year Academic project",
    description: "A smart faculty clearance system for managing clearance requirements and processes.",
    technologies: ["Web technologies", "AI-Assisted Workflows", "OCR Scanner","Flutter", "Dart", "MongoDB"],
    github: "https://github.com/art-nymrah-tiamzon/smart-clearance-front-end-copy",
    objectives: ["Support a more organized faculty clearance process through a dedicated system."],
    contribution: "Analyzed the system requirements and helped translate the project needs into a workable solution.",
    role: "System Analyst",
    status: "Completed",
    images: [
      "/assets/fac-clearance1.png",
      "/assets/fac-clearance2.png",
      "/assets/fac-clearance3.png",
      "/assets/fac-clearance4.png",
      "/assets/fac-clearance5.png",
      "/assets/fac-clearance6.png",
      
    ],
  },
  {
    slug: "ai-assisted-faculty-Scheduling",
    title: "AI-assisted Faculty Scheduling and Requirements Management System",
    eyebrow: "Capstone project",
    description: "An AI-assisted system for managing faculty Schedules and requirements.",
    technologies: ["Web technologies", "AI-assisted workflows", "React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "JavaScript"],
    github: "https://github.com/russel-aaron-macaspac/ai-faculty-management-web",
    objectives: ["Organize faculty scheduling and requirements management in a centralized web application."],
    contribution: "Built and refined the user-facing interface for the faculty management web application.",
    role: "Frontend Developer",
    status: "Ongoing",
    images: [
      "/assets/domstax1.png",
      "/assets/domstax2.png",
      "/assets/domstax3.png",
      "/assets/domstax4.png",
      "/assets/domstax5.png",
      "/assets/domstax6.png",
      
    ],

  },
  {
    slug: "rfid-room-scanner",
    title: "RFID Room Scanner",
    eyebrow: "IoT project",
    description: "An RFID-based room scanning project developed as part of an IoT repository.",
    technologies: ["RFID", "IoT", "Arduino", "C", "JavaScript"],
    github: "http://github.com/lee-joshua-reyes/SDCA_BSIT3B_G11_IoT-Repository",
    objectives: ["Explore RFID technology for room scanning and IoT project development."],
    contribution: "Contributed to the development of the RFID room scanner project.",
    role: "Developer",
    status: "Completed",
    images: [
      "/assets/IOT.png",
      "/assets/IOT2.png",
      "/assets/IOT3.jpg",
      "/assets/IOT4.png",
      
    ],
  },
];

export const skills = [
  { name: "JavaScript", group: "Languages", color: "text-yellow-300", description: "Interactive web experiences and application logic." },
  { name: "TypeScript", group: "Languages", color: "text-blue-300", description: "Typed JavaScript for reliable application development." },
  { name: "C", group: "Languages", color: "text-blue-300", description: "Foundational programming and problem solving." },
  { name: "Java", group: "Languages", color: "text-red-300", description: "Object-oriented application development." },
  { name: "Dart", group: "Languages", color: "text-cyan-300", description: "Language used with Flutter projects." },
  { name: "HTML", group: "Web technologies", color: "text-orange-300", description: "Semantic structure for the web." },
  { name: "CSS", group: "Web technologies", color: "text-sky-300", description: "Responsive layouts and visual styling." },
  { name: "Oracle", group: "Databases", color: "text-red-300", description: "Relational database technology." },
  { name: "MongoDB", group: "Databases", color: "text-emerald-300", description: "Document-oriented database technology." },
  { name: "Supabase", group: "Databases", color: "text-emerald-300", description: "Backend platform with a PostgreSQL database." },
  { name: "React", group: "Frameworks and runtimes", color: "text-cyan-300", description: "Library for building component-based user interfaces." },
  { name: "Next.js", group: "Frameworks and runtimes", color: "text-white", description: "React framework for full-stack web applications." },
  { name: "Flutter", group: "Frameworks and runtimes", color: "text-cyan-300", description: "Cross-platform app development framework." },
  { name: "Firebase", group: "Frameworks and runtimes", color: "text-amber-300", description: "Backend and app platform." },
  { name: "Node.js", group: "Frameworks and runtimes", color: "text-lime-300", description: "JavaScript runtime for server-side development." },
  { name: "Express.js", group: "Frameworks and runtimes", color: "text-slate-200", description: "Web framework for Node.js." },
  { name: "GitHub", group: "Tools and Environment", color: "text-white", description: "Source control and project collaboration." },
  { name: "Visual Studio Code", group: "Tools and Environment", color: "text-blue-300", description: "Primary code editor." },
  { name: "Android Studio", group: "Tools and Environment", color: "text-green-300", description: "Android development environment." },
  { name: "Postman", group: "Tools and Environment", color: "text-orange-300", description: "API development and testing tool." },
];

export const achievements = [
  {
    title: "Scholarship",
    details: ["Recipient of the prestigious Development Bank of the Philippines (DBP) Academic Scholarship"],
  },
  {
    title: "Dean's Lister",
    details: [
      "Academic Year 2023-2024 · First Semester",
      "Academic Year 2024-2025 · Second Semester",
      "Academic Year 2025-2026 · First Semester",
    ],
  },
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