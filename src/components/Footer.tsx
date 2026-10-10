import { ArrowUpRight, Code2 } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { safeExternalUrl } from '../utils/links'

const currentYear = new Date().getFullYear()

export function Footer() {
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
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-mark" aria-hidden="true">{initials}</span>
          <span>{portfolio.profile.name}</span>
        </a>
        <p>© {currentYear} {portfolio.profile.name}</p>
        <div className="footer-actions">
          {githubUrl && (
            <a className="back-to-top" href={githubUrl} target="_blank" rel="noreferrer">
              GitHub <Code2 size={14} aria-hidden="true" />
            </a>
          )}
          <a className="back-to-top" href="#home">
            Back to top <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
