import { type FormEvent, useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness, Check, Code2, Mail } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { safeEmail, safeExternalUrl } from '../utils/links'

export function ContactSection() {
  const [status, setStatus] = useState('')
  const githubUrl = safeExternalUrl(portfolio.profile.githubUrl)
  const linkedinUrl = safeExternalUrl(portfolio.profile.linkedinUrl)
  const email = safeEmail(portfolio.profile.email)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.reportValidity()) return

    setStatus(
      'Your details look good, but no message was sent. Connect a backend or form service to receive submissions.',
    )
    form.reset()
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="page-shell contact-layout">
        <div className="contact-copy">
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title={portfolio.copy.contactHeadline}
            description={portfolio.copy.contactMessage}
          />
          {email && (
            <a className="contact-email" href={`mailto:${email}`}>
              {email} <ArrowUpRight size={20} />
            </a>
          )}
          {(githubUrl || linkedinUrl || email) && (
            <div className="contact-socials">
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  <Code2 size={16} /> GitHub
                </a>
              )}
              {linkedinUrl && (
                <a href={linkedinUrl} target="_blank" rel="noreferrer">
                  <BriefcaseBusiness size={16} /> LinkedIn
                </a>
              )}
              {email && <a href={`mailto:${email}`}><Mail size={16} /> Email</a>}
            </div>
          )}
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Your name
              <input name="name" type="text" autoComplete="name" placeholder="Your name" required minLength={2} />
            </label>
            <label>
              Email address
              <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </label>
          </div>
          <label>
            What’s on your mind?
            <textarea name="message" placeholder="A little about your project or idea…" rows={4} required minLength={10} />
          </label>
          <p className="form-note">
            This template validates your details in the browser but doesn’t send or store them. Add a backend or form service to receive messages.
          </p>
          <button className="button button-primary form-submit" type="submit">
            Validate message <Check size={16} aria-hidden="true" />
          </button>
          <p className="form-status" role="status" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  )
}
