"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [{ href: "/about", label: "About" }, { href: "/skills", label: "Skills" }, { href: "/projects", label: "Projects" }, { href: "/certifications", label: "Credentials" }, { href: "/contact", label: "Contact" }];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const shouldUseLightMode = savedTheme === "light";
    document.documentElement.classList.toggle("light", shouldUseLightMode);
    setLightMode(shouldUseLightMode);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function toggleTheme() {
    const nextLightMode = !lightMode;
    document.documentElement.classList.toggle("light", nextLightMode);
    window.localStorage.setItem("theme", nextLightMode ? "light" : "dark");
    setLightMode(nextLightMode);
  }

  return <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur-xl">
    <nav className="container-wide flex h-20 items-center justify-between" aria-label="Main navigation">
      <Link href="/" className="focus-ring motion-control font-display text-lg font-semibold tracking-tight" onClick={() => setOpen(false)}>Russel<span className="text-electric">.</span></Link>
      <div className="hidden items-center gap-7 md:flex">{links.map((link) => {
        const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
        return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={`focus-ring motion-control relative py-2 text-sm ${active ? "text-white" : "text-slate-400 hover:text-white"}`}>{link.label}{active && <span className="absolute inset-x-0 -bottom-1 mx-auto h-px w-5 bg-electric shadow-[0_0_10px_rgba(79,140,255,.9)]" />}</Link>;
      })}<button type="button" onClick={toggleTheme} aria-label={lightMode ? "Switch to dark mode" : "Switch to light mode"} className="focus-ring motion-control rounded-lg p-2 text-slate-300 hover:text-white">{lightMode ? <Moon size={19} /> : <Sun size={19} />}</button></div>
      <div className="flex items-center gap-2 md:hidden"><button type="button" onClick={toggleTheme} aria-label={lightMode ? "Switch to dark mode" : "Switch to light mode"} className="focus-ring motion-control rounded-lg p-2 text-slate-300">{lightMode ? <Moon size={19} /> : <Sun size={19} />}</button><button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className={`focus-ring motion-control rounded-xl border p-2.5 md:hidden ${open ? "border-electric/50 bg-electric/10 text-white" : "border-line/70 text-slate-300"}`} onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button></div>
    </nav>
    {open && <><button type="button" aria-label="Close navigation menu" className="mobile-backdrop fixed inset-0 top-20 bg-slate-950/60 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)} /><div className="mobile-menu absolute inset-x-0 top-full overflow-hidden border-b border-electric/20 bg-ink/95 shadow-2xl shadow-black/30 md:hidden"><div className="container-wide py-5"><div className="mb-4 flex items-center justify-between border-b border-line/70 pb-4"><span className="eyebrow">Navigation</span><span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.8)]" /> Available</span></div><div className="flex flex-col">{links.map((link, index) => {
      const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
      return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={`mobile-nav-link focus-ring group flex items-center gap-4 rounded-xl px-3 py-3.5 ${active ? "bg-electric/10 text-white" : "text-slate-300"}`} onClick={() => setOpen(false)}><span className={`font-mono text-[10px] ${active ? "text-electric" : "text-slate-600"}`}>0{index + 1}</span><span className="flex-1 text-base font-medium">{link.label}</span><ArrowUpRight size={17} className={`transition-transform duration-300 ${active ? "text-electric" : "text-slate-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric"}`} /></Link>;
    })}</div><div className="mt-5 flex items-center justify-between border-t border-line/70 pt-4 text-[10px] uppercase tracking-[0.18em] text-slate-500"><span>Russel Macaspac</span><span>2024—25</span></div></div></div></>}
  </header>;
}
