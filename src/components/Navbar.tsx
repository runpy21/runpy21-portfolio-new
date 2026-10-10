import { useEffect, useRef, useState } from 'react'
import { ArrowDownToLine, Menu, X } from 'lucide-react'
import { navigation, portfolio } from '../data/portfolio'
import { safeLocalAssetPath } from '../utils/links'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const cvPath = safeLocalAssetPath(portfolio.profile.cvPath)
  const visibleNavigation = navigation.filter(({ href }) => {
    if (href === '#projects') return (portfolio.projects ?? []).length > 0
    if (href === '#skills') {
      return (portfolio.skills ?? []).some(
        (group) => (group.skills ?? []).some(Boolean),
      )
    }
    if (href === '#education') return (portfolio.education ?? []).length > 0
    if (href === '#experience') return (portfolio.experience ?? []).length > 0
    return true
  })
  const initials =
    portfolio.profile.initials?.trim() ||
    portfolio.profile.name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join('')

  useEffect(() => {
    if (!isOpen) return

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label={`${portfolio.profile.name}, home`}>
          <span className="wordmark-mark" aria-hidden="true">
            {initials}
          </span>
          <span>{portfolio.profile.name}</span>
        </a>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div
          className={`nav-content${isOpen ? ' is-open' : ''}`}
          id="primary-navigation"
        >
          <ul className="nav-links">
            {visibleNavigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {cvPath && (
            <a
              className="button button-small button-outline"
              href={cvPath}
              download
            >
              <ArrowDownToLine size={15} aria-hidden="true" />
              Download CV
            </a>
          )}
        </div>
      </nav>
    </header>
  )
}
