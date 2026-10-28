import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Sparkles } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function Home() {
  return <main><section className="relative overflow-hidden border-b border-line/70">
    <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-electric/10 blur-3xl pulse-glow" />
    <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-violet/10 blur-3xl pulse-glow" />
    <div className="container-wide grid min-h-[calc(100vh-5rem)] items-center gap-12 py-20 pt-28 sm:pt-32 lg:grid-cols-[1.15fr_.85fr] lg:pt-36">
      <div className="relative"><div className="reveal"><p className="eyebrow flex items-center gap-2 text-[0.7rem] sm:text-[0.75rem]"><Sparkles size={15} /> BSIT student & developer</p>
        <h1 className="mt-5 max-w-full font-display text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
          <span className="typing-line block">Behind every smooth</span>
          <span className="typing-line typing-line-delay block bg-gradient-to-r from-electric to-violet bg-clip-text text-transparent">click is someone like me.</span>
        </h1>
        <p className="muted mt-7 max-w-xl text-lg">I’m Russel Aaron Macaspac, a Bachelor of Science in Information Technology student passionate about technology, problem-solving, and continuous learning. I enjoy exploring different areas of IT and applying my knowledge through academic projects and hands-on experience.</p>
        <div className="mt-9 flex flex-wrap gap-4"><Link href="/projects" className="focus-ring motion-control inline-flex items-center gap-2 rounded-lg bg-electric px-5 py-3 font-medium text-white hover:bg-blue-400">Explore my work <ArrowUpRight size={17} /></Link><Link href="/contact" className="focus-ring motion-control inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 font-medium text-slate-300 hover:border-slate-500 hover:text-white">Let’s connect</Link></div>
        <div className="mt-10 flex gap-5 text-slate-500"><Link href="https://github.com/Russel-Aaron-Macaspac" target="_blank" rel="noreferrer" className="focus-ring motion-control hover:text-white"><Github size={20} /></Link>
          <Link href="https://www.linkedin.com/in/russel-aaron-macaspac" target="_blank" rel="noreferrer" className="focus-ring motion-control hover:text-white"><Linkedin size={20} /></Link></div></div></div>
      <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-sm"><div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-electric/20 to-violet/20 blur-2xl" /><div className="float-slow relative overflow-hidden rounded-[2rem] border border-line bg-panel p-3 shadow-glow">
        <Image src="/assets/gradpic.jpg" alt="Russel Aaron Macaspac" width={600} height={600} priority className="aspect-square w-full rounded-[1.5rem] object-cover grayscale-[15%]" />
        <div className="absolute bottom-7 left-7 right-7 rounded-xl border border-white/10 bg-ink/75 p-4 backdrop-blur"><p className="text-xs uppercase tracking-widest text-electric">Currently</p>
          <p className="mt-1 text-sm text-slate-200">Learning, building, and looking for opportunities.</p></div></div></div></div>
      <div className="container-wide absolute bottom-7 left-1/2 hidden -translate-x-1/2 justify-center text-slate-600 md:flex"><ArrowDown className="animate-bounce" size={18} /></div></section><section className="container-wide py-24"><div className="reveal flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p className="eyebrow">Selected work</p><h2 className="section-title">A small collection of things I’ve built.</h2></div><Link href="/projects" className="focus-ring motion-control inline-flex items-center gap-1 text-sm text-electric hover:text-white">View all projects <ArrowUpRight size={16} /></Link></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section><section className="reveal border-y border-line/70 bg-panel/30"><div className="container-wide flex flex-col items-start justify-between gap-8 py-16 sm:flex-row sm:items-center"><div><p className="eyebrow">Have a project in mind?</p>
          <h2 className="mt-3 font-display text-3xl font-semibold">Let’s make something meaningful.</h2></div><Link href="/contact" className="focus-ring motion-control inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-ink hover:bg-slate-200">Start a conversation <ArrowUpRight size={17} /></Link></div></section></main>;
}
