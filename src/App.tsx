import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { DownloadCV } from "@/components/DownloadCV";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "./components/Navbar";
import { projects } from './data/projects';
import { ProjectCarousel } from './components/ProjectCarousel';
import { motion } from "framer-motion";
import { Skills } from "./components/Skills";

function App() {
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen bg-background text-foreground">
        <ThemeToggle />
        <main className="w-full">
          <Navbar/>
          <Hero />
          <About />
          <Skills/>
          <section id="projects" className="py-20 px-4">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <ProjectCarousel projects={projects} />
          </section>
          <Timeline />
          <Achievements />
          <Contact />
          <Footer />
          <DownloadCV />
        </main>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;