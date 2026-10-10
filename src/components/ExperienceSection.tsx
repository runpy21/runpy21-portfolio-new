import { BriefcaseBusiness } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function ExperienceSection() {
  const experience = portfolio.experience ?? []
  if (experience.length === 0) return null

  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="page-shell experience-layout">
        <div className="experience-intro">
          <SectionHeading
            id="experience-title"
            eyebrow="Experience"
            title={portfolio.copy.experienceHeadline}
            description={portfolio.copy.experienceDescription}
          />
        </div>
        <ol className="timeline">
          {experience.map((item, index) => (
            <li
              className="timeline-item"
              key={`${item.organization}-${item.role}-${item.period}-${index}`}
            >
              <span className="timeline-mark">
                <BriefcaseBusiness size={13} aria-hidden="true" />
              </span>
              <div className="timeline-content">
                <p className="timeline-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="timeline-org">{item.organization}</p>
                {item.description && (
                  <p className="timeline-description">{item.description}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
