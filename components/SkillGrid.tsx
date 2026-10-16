import { Code2, Database, FileCode2, GitBranch, Smartphone, Wrench } from "lucide-react";
import { skills } from "@/lib/data";
const icons = { "Programming languages": Code2, "Web technologies": FileCode2, Databases: Database, "Tools & frameworks": Wrench };
export function SkillGrid() {
  return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{skills.map((skill) => { const Icon = icons[skill.group as keyof typeof icons]; return <div key={skill.name} className="card p-5 transition hover:border-electric/40"><div className="mb-4 flex items-center justify-between"><Icon className={skill.color} size={22} /><GitBranch className="text-slate-700" size={16} /></div><h3 className="font-medium text-white">{skill.name}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{skill.description}</p></div>; })}</div>;
}
