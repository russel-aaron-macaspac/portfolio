import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export function Footer() {
  return <footer className="reveal border-t border-line/70 py-8"><div className="container-wide flex flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row"><p>© {new Date().getFullYear()} Russel Aaron Macaspac</p><div className="flex items-center gap-5"><Link className="focus-ring motion-control transition hover:text-white" href="https://github.com/Russel-Aaron-Macaspac" target="_blank" rel="noreferrer"><Github size={17} aria-label="GitHub" /></Link><Link className="focus-ring motion-control transition hover:text-white" href="https://www.linkedin.com/in/russel-aaron-macaspac" target="_blank" rel="noreferrer"><Linkedin size={17} aria-label="LinkedIn" /></Link><Link className="focus-ring motion-control flex items-center gap-1 transition hover:text-white" href="/contact">Get in touch <ArrowUpRight size={15} /></Link></div></div></footer>;
}
