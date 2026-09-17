import { AboutSection } from "./components/AboutSection"
import { ContactSection } from "./components/ContactSection"
import { HeroSection } from "./components/HeroSection"
import { MarqueeSection } from "./components/MarqueeSection"
import { Navbar } from "./components/Navbar"
import { ParticleField } from "./components/ParticleField"
import { ProjectsSection } from "./components/ProjectsSection"

export default function App() {
  return (
    <div className="relative min-h-svh bg-ink">
      <ParticleField />
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
