import { SectionHeading } from "@/components/SectionHeading";
import { SkillGrid } from "@/components/SkillGrid";
export const metadata = { title: "Skills" };
export default function SkillsPage() { return <main className="container-wide py-20"><SectionHeading eyebrow="Toolkit" title="Technologies I’m learning and using." intro="A snapshot of the languages, web technologies, databases, tools, and frameworks I have worked with. No proficiency ratings—just an honest record of my current toolkit." /><div className="mt-12"><SkillGrid /></div></main>; }
