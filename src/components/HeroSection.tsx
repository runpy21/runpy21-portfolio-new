import { ArrowDown, ArrowUpRight, Code2 } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { safeExternalUrl } from '../utils/links'

export function HeroSection() {
  const githubUrl = safeExternalUrl(portfolio.profile.githubUrl)
  const initials =
    portfolio.profile.initials?.trim() ||
    portfolio.profile.name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join('')

  return (
    <section className="hero-section page-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          <span className="availability-dot" aria-hidden="true" />
          {portfolio.profile.title}
        </p>
        <h1 id="hero-title">
          {portfolio.copy.heroHeadline}
          <br />
          <span className="serif-accent">{portfolio.copy.heroAccent}</span>
        </h1>
        <p className="hero-intro">{portfolio.profile.shortBio}</p>
        {portfolio.profile.careerGoal && (
          <p className="hero-career-goal">{portfolio.profile.careerGoal}</p>
        )}
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my project <ArrowDown size={16} aria-hidden="true" />
          </a>
          <a className="button button-quiet" href="#contact">
            Contact <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        {githubUrl && (
          <div className="hero-socials" aria-label="Social links">
            <a
              href={githubUrl}
              aria-label="GitHub profile"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={17} />
            </a>
            <span className="social-divider" aria-hidden="true" />
            <span className="hero-location">View my GitHub profile</span>
          </div>
        )}
      </div>

      <div
        className="hero-art"
        role="img"
        aria-label={`Decorative monogram for ${portfolio.profile.name}`}
      >
        <div className="art-orbit art-orbit-one" />
        <div className="art-orbit art-orbit-two" />
        <div className="art-glow" />
        <div className="art-monogram">
          <span>{initials}</span>
        </div>
      </div>

      <a className="hero-scroll" href="#about">
        <span>Scroll to explore</span>
        <span className="scroll-line" aria-hidden="true" />
      </a>
    </section>
  )
}
