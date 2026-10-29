import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { profile } from "@/data/resume";
import Providers from "@/components/Providers";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.name} is a ${profile.role} (${profile.stack}) based in ${profile.location}. ${profile.tagline}`,
  keywords: ["Abdullah Azhar", "Full Stack Developer", "Web Developer", "MERN", "Next.js", "React", "Node.js", "Lahore"],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">
        <Providers>
          <SmoothScroll />
          {children}
        </Providers>
      </body>
    </html>
  );
}
