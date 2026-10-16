import { ClipboardList } from "lucide-react";
export function EmptyState({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="reveal card flex flex-col items-center justify-center px-6 py-14 text-center transition hover:border-electric/40 hover:shadow-glow"><ClipboardList className="pulse-glow text-electric" size={28} /><h3 className="mt-4 font-display text-xl font-semibold text-white">{title}</h3><p className="mt-2 max-w-md text-sm leading-6 text-slate-500">{children}</p></div>;
}
