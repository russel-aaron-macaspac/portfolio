import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return <article className="reveal card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-electric/50 hover:shadow-glow">
    {project.images?.[0] && <Link href={`/projects/${project.slug}`} className="relative block aspect-video overflow-hidden border-b border-line bg-slate-950">
      <Image src={project.images[0]} alt={`${project.title} preview`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
      {project.images.length > 1 && <span className="absolute bottom-3 right-3 rounded-full border border-white/20 bg-ink/80 px-2.5 py-1 text-xs text-white">{project.images.length} images</span>}
    </Link>}
    <div className="flex h-full flex-col p-6"><div className="mb-8 flex items-center justify-between"><span className="eyebrow">{project.eyebrow}</span><span className="rounded-full border border-line px-3 py-1 text-xs text-slate-400">{project.status}</span></div><h3 className="font-display text-2xl font-semibold">{project.title}</h3><p className="muted mt-3">{project.description}</p><p className="mt-4 text-sm text-slate-400"><span className="text-slate-600">Role:</span> {project.role}</p><div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-md bg-white/[.06] px-2.5 py-1 text-xs text-slate-300 transition hover:bg-electric/15 hover:text-white">{technology}</span>)}</div><div className="mt-auto flex gap-4 pt-8 text-sm"><Link href={`/projects/${project.slug}`} className="focus-ring motion-control inline-flex items-center gap-1 font-medium text-white hover:text-electric">View details <ArrowUpRight size={16} /></Link><Link href={project.github} target="_blank" rel="noreferrer" className="focus-ring motion-control inline-flex items-center gap-1 text-slate-400 hover:text-white"><Github size={16} /> GitHub</Link></div></div>
  </article>;
}
