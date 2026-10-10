import { useState } from 'react'
import { ArrowUpRight, Code2 } from 'lucide-react'
import type { Project } from '../data/portfolio'
import { safeExternalUrl, safeLocalAssetPath } from '../utils/links'

type ProjectCardProps = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false)
  const screenshot = project.screenshot
  const screenshotPath = safeLocalAssetPath(screenshot?.src)
  const showScreenshot = Boolean(screenshotPath && !imageFailed)
  const githubUrl = safeExternalUrl(project.githubUrl)
  const liveUrl = safeExternalUrl(project.liveUrl)
  const technologies = (project.technologies ?? []).filter(Boolean)
  const highlights = (project.highlights ?? []).filter(Boolean)
  const challenges = (project.challenges ?? []).filter(Boolean)

  return (
    <article
      className={`project-card${project.featured ? ' project-featured' : ''}`}
    >
      <div
        className={`project-visual${showScreenshot ? ' has-screenshot' : ''}`}
      >
        {showScreenshot && screenshot ? (
          <img
            className="project-screenshot"
            src={screenshotPath}
            alt={screenshot.alt?.trim() || `${project.title} screenshot`}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="project-placeholder">
            <span className="project-placeholder-mark" aria-hidden="true">
              {'</>'}
            </span>
            <span>{project.status || 'Project preview not available'}</span>
          </div>
        )}
        <span className="project-index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="project-info">
        <div className="project-heading">
          <div>
            <h3>{project.title}</h3>
            {project.status && (
              <p className="project-status">{project.status}</p>
            )}
            {project.description && <p>{project.description}</p>}
          </div>
          {(githubUrl || liveUrl) && (
            <div className="project-links">
              {githubUrl && (
                <a
                  href={githubUrl}
                  aria-label={`${project.title} source repository`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={17} />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  aria-label={`Live demo of ${project.title}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowUpRight size={17} />
                </a>
              )}
            </div>
          )}
        </div>
        {technologies.length > 0 && (
          <ul className="tag-list" aria-label={`${project.title} technologies`}>
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        )}
        {highlights.length > 0 && (
          <ul className="project-detail-list" aria-label="Project features">
            {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        )}
        {challenges.length > 0 && (
          <details className="project-challenges">
            <summary>Technical challenges & solutions</summary>
            <ul className="project-detail-list">
              {challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}
            </ul>
          </details>
        )}
        {project.details && <p className="project-details">{project.details}</p>}
      </div>
    </article>
  )
}
