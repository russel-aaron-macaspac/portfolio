export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="max-w-2xl"><p className="eyebrow">{eyebrow}</p><h1 className="section-title">{title}</h1>{intro && <p className="muted mt-4">{intro}</p>}</div>;
}
