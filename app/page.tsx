import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStrip from "@/components/TechStrip";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import StatusBar from "@/components/StatusBar";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <StatusBar />
      <BackToTop />
    </>
  );
}
