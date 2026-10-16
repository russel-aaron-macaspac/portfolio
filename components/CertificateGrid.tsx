"use client";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";
export function CertificateGrid() {
  return <div className="grid gap-5 md:grid-cols-3">{certifications.map((certificate) => <article key={certificate.title} className="card overflow-hidden"><a href={certificate.image} target="_blank" rel="noreferrer" className="focus-ring relative block aspect-[4/3] bg-slate-900" aria-label={`Open ${certificate.title} image`}><Image src={certificate.image} alt={`${certificate.title} certificate`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></a><div className="p-5"><p className="text-xs uppercase tracking-widest text-electric">{certificate.provider} · {certificate.year}</p><h3 className="mt-2 font-display text-lg font-semibold">{certificate.title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">Certificate image available for viewing. Verification link has not been provided.</p><span className="mt-4 inline-flex items-center gap-1 text-xs text-slate-500"><ExternalLink size={14} /> No verification URL supplied</span></div></article>)}</div>;
}
