import { ArrowUpRight } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function SkillsSection() {
  const groups = (portfolio.skills ?? []).filter(
    (group) => (group.skills ?? []).filter(Boolean).length > 0,
  )

  if (groups.length === 0) return null

  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="page-shell">
        <div className="section-heading-row">
          <SectionHeading
            id="skills-title"
            eyebrow="Technical skills"
            title={portfolio.copy.skillsHeadline}
            description={portfolio.copy.skillsDescription}
          />
          <span className="heading-aside">
            {portfolio.profile.title} <ArrowUpRight size={15} />
          </span>
        </div>
        <div className="skills-grid">
          {groups.map((group, index) => (
            <article className="skill-card" key={group.category}>
              <div className="skill-card-top">
                <span>
                  {String(index + 1).padStart(2, '0')} /{' '}
                  {String(groups.length).padStart(2, '0')}
                </span>
                <span className="skill-sparkle" aria-hidden="true">✳</span>
              </div>
              <h3>{group.category}</h3>
              <ul>
                {(group.skills ?? []).filter(Boolean).map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
