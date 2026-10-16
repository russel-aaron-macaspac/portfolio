"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [{ href: "/about", label: "About" }, { href: "/skills", label: "Skills" }, { href: "/projects", label: "Projects" }, { href: "/certifications", label: "Credentials" }, { href: "/contact", label: "Contact" }];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur-xl">
    <nav className="container-wide flex h-20 items-center justify-between" aria-label="Main navigation">
      <Link href="/" className="focus-ring motion-control font-display text-lg font-semibold tracking-tight" onClick={() => setOpen(false)}>Russel<span className="text-electric">.</span></Link>
      <div className="hidden items-center gap-7 md:flex">{links.map((link) => <Link key={link.href} href={link.href} className="focus-ring motion-control text-sm text-slate-400 hover:text-white">{link.label}</Link>)}</div>
      <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="focus-ring motion-control rounded-lg p-2 text-slate-300 md:hidden" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
    </nav>
    {open && <div className="mobile-menu border-t border-line bg-ink md:hidden"><div className="container-wide flex flex-col py-3">{links.map((link) => <Link key={link.href} href={link.href} className="focus-ring motion-control border-b border-line/50 py-4 text-sm text-slate-300 last:border-0" onClick={() => setOpen(false)}>{link.label}</Link>)}</div></div>}
  </header>;
}
