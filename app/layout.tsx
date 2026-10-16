import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: { default: "Russel Aaron Macaspac | IT Student & Developer", template: "%s | Russel Macaspac" },
  description: "Portfolio of Russel Aaron Macaspac, a BSIT student interested in web and mobile development.",
  icons: { icon: "/assets/R.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${space.variable} font-sans`}><Navbar />{children}<Footer /></body></html>;
}
