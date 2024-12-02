import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
          <About />
          <Skills />
          <Projects />
          <Contact />
        <Footer />
      </main>
    </div>
  );
}
