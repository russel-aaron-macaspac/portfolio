import { SectionHeading } from "@/components/SectionHeading";
import { CertificateGrid } from "@/components/CertificateGrid";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { courses } from "@/lib/data";
export const metadata = { title: "Certifications & Courses" };
export default function CertificationsPage() {
  return <main className="container-wide py-20"><SectionHeading eyebrow="Certifications" title="Proof of continued learning." /><div className="mt-12"><CertificateGrid /></div><div className="reveal mt-16"><p className="eyebrow">Course completions</p><h2 className="section-title">Learning beyond the classroom.</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{courses.map((course) => <article key={`${course.provider}-${course.title}`} className="card group overflow-hidden transition hover:-translate-y-1 hover:border-electric/40 hover:shadow-glow"><a href={course.image} target="_blank" rel="noreferrer" className="focus-ring relative block aspect-[4/3] bg-slate-900" aria-label={`Open ${course.title} image`}><Image src={course.image} alt={`${course.title} course completion`} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" /></a><div className="p-5"><p className="text-xs uppercase tracking-widest text-electric">{course.provider} · {course.year}</p><h3 className="mt-2 font-display text-lg font-semibold">{course.title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{course.description}</p><span className="mt-4 inline-flex items-center gap-1 text-xs text-slate-500 transition group-hover:text-slate-300"><ExternalLink size={14} /> View course completion</span></div></article>)}</div></div></main>;
}
