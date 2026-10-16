import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollEffects } from "@/components/ScrollEffects";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: { default: "Russel Aaron Macaspac | IT Student & Aspiring IT Professional", template: "%s | Russel Macaspac" },
  description: "Portfolio of Russel Aaron Macaspac, a BSIT student interested in hands on experience in the field of Information Technology.",
  icons: { icon: "/assets/R.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${space.variable} font-sans`}><ScrollEffects /><Navbar />{children}<Footer /></body></html>;
}
