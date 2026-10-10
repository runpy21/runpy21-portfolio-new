import { useEffect } from 'react'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { EducationSection } from './components/EducationSection'
import { portfolio } from './data/portfolio'

function App() {
  useEffect(() => {
    document.title = portfolio.seo.title

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    if (description) {
      description.content = portfolio.seo.description
    }

    const socialTitle = document.querySelector<HTMLMetaElement>(
      'meta[property="og:title"]',
    )
    if (socialTitle) {
      socialTitle.content = portfolio.seo.title
    }

    const socialDescription = document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]',
    )
    if (socialDescription) {
      socialDescription.content = portfolio.seo.description
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
