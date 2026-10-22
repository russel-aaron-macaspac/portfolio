import { SectionHeading } from "@/components/SectionHeading";
import { CertificateGrid } from "@/components/CertificateGrid";
import { EmptyState } from "@/components/EmptyState";
export const metadata = { title: "Certifications & Courses" };
export default function CertificationsPage() { return <main className="container-wide py-20"><SectionHeading eyebrow="Certifications" title="Proof of continued learning." /><div className="mt-12"><CertificateGrid /></div><div className="reveal mt-16"><p className="eyebrow">Course completions</p><h2 className="section-title">Learning beyond the classroom.</h2><div className="mt-8"><EmptyState title="No course completions added yet">Add verified course titles, providers, completion dates, descriptions, and links from Cisco Networking Academy, Oracle Academy, AWS Academy, Microsoft, Coursera, Google, Udemy, or other platforms.</EmptyState></div></div></main>; }
