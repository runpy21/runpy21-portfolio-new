import { ArrowUpRight } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { safeExternalUrl } from '../utils/links'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

export function ProjectsSection() {
  const projects = portfolio.projects ?? []
  if (projects.length === 0) return null

  const githubUrl = safeExternalUrl(portfolio.profile.githubUrl)

  return (
    <section className="section section-tinted" id="projects" aria-labelledby="projects-title">
      <div className="page-shell">
        <div className="section-heading-row">
          <SectionHeading
            id="projects-title"
            eyebrow="Projects"
            title={portfolio.copy.projectsHeadline}
            description={portfolio.copy.projectsDescription}
          />
          {githubUrl && (
            <a
              className="text-link heading-aside"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile <ArrowUpRight size={15} />
            </a>
          )}
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
