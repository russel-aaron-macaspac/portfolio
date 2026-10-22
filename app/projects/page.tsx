import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { EmptyState } from "@/components/EmptyState";
import { projects } from "@/lib/data";
export const metadata = { title: "Projects" };
export default function ProjectsPage() { return <main className="container-wide py-20"><SectionHeading eyebrow="Work & coursework" title="Projects with room to grow." intro="These are the projects currently documented in the portfolio, including academic, web, and IoT work." /><div className="mt-12 grid gap-5 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div><div className="mt-16 grid gap-5 lg:grid-cols-2"><EmptyState title="Capstone project"><span>The featured capstone layout is ready for the title, team, objectives, results, and evidence.</span></EmptyState><EmptyState title="Third-year projects"><span>Additional course project records and supporting links can be added here.</span></EmptyState></div></main>; }
