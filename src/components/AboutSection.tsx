import { ArrowUpRight, Code2, Compass, UsersRound } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

const valueIcons = [Code2, Compass, UsersRound]

export function AboutSection() {
  const values = portfolio.copy.aboutValues ?? []

  return (
    <section className="section section-tinted" id="about" aria-labelledby="about-title">
      <div className="page-shell about-layout">
        <div className="about-intro">
          <SectionHeading
            id="about-title"
            eyebrow="About me"
            title={portfolio.copy.aboutHeadline}
          />
          {(portfolio.copy.aboutBiography ?? []).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {portfolio.profile.interests.length > 0 && (
            <div className="about-interests">
              <h3>{portfolio.copy.aboutInterestLabel}</h3>
              <ul className="tag-list">
                {portfolio.profile.interests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </div>
          )}
          <a className="text-link" href="#contact">
            Get in touch <ArrowUpRight size={15} />
          </a>
        </div>
        {values.length > 0 && (
          <div className="values-list">
            {values.map(({ title, description }, index) => {
              const Icon = valueIcons[index % valueIcons.length]
              return (
                <article className="value-row" key={`${title}-${index}`}>
                  <span className="value-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="value-icon">
                    <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
