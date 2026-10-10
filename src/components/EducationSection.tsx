import { GraduationCap } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function EducationSection() {
  const education = portfolio.education ?? []
  if (education.length === 0) return null

  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="page-shell experience-layout">
        <div className="experience-intro">
          <SectionHeading
            id="education-title"
            eyebrow="Education"
            title={portfolio.copy.educationHeadline}
            description={portfolio.copy.educationDescription}
          />
        </div>
        <ol className="timeline">
          {education.map((item, index) => (
            <li
              className="timeline-item"
              key={`${item.institution}-${item.period}-${index}`}
            >
              <span className="timeline-mark is-education">
                <GraduationCap size={15} aria-hidden="true" />
              </span>
              <div className="timeline-content">
                <p className="timeline-period">{item.period}</p>
                <h3>{item.institution}</h3>
                {item.qualification && (
                  <p className="timeline-org">{item.qualification}</p>
                )}
                {item.details && (
                  <p className="timeline-description">{item.details}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
