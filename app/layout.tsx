import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/resume";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.name} is a ${profile.role} (${profile.stack}) based in ${profile.location}. ${profile.tagline}`,
  keywords: ["Abdullah Azhar", "Full Stack Developer", "Software Developer", "MERN", "Next.js", "React", "Node.js", "Lahore"],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#08120f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
