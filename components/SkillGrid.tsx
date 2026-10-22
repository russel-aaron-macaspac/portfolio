import { Code2, Database, FileCode2, GitBranch, Layers3, Wrench } from "lucide-react";
import { skills } from "@/lib/data";
const groups = ["Languages", "Web technologies", "Databases", "Frameworks and runtimes", "Tools and Environment"] as const;
const icons = { Languages: Code2, "Web technologies": FileCode2, Databases: Database, "Frameworks and runtimes": Layers3, "Tools and Environment": Wrench };
export function SkillGrid() {
  return <div className="space-y-12">{groups.map((group) => <section key={group}><div className="mb-5 flex items-center gap-3"><h2 className="section-title">{group}</h2><span className="h-px flex-1 bg-slate-800" /></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{skills.filter((skill) => skill.group === group).map((skill, index) => { const Icon = icons[group]; return <div key={skill.name} className={`reveal reveal-delay-${(index % 3) + 1} card p-5 transition hover:-translate-y-1 hover:border-electric/40 hover:shadow-glow`}><div className="mb-4 flex items-center justify-between"><Icon className={`${skill.color} transition duration-300 hover:scale-110`} size={22} /><GitBranch className="text-slate-700" size={16} /></div><h3 className="font-medium text-white">{skill.name}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{skill.description}</p></div>; })}</div></section>)}</div>;
}
