type SectionHeadingProps = {
  id?: string
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      {title && <h2 id={id}>{title}</h2>}
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}
