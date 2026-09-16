import type { ReactNode } from 'react'

interface SectionCardProps {
  title: string
  description?: string
  children: ReactNode
}

function SectionCard({
  title,
  description,
  children,
}: SectionCardProps) {
  return (
    <section className="section-card">
      <div className="section-card__header">
        <div>
          <h3 className="section-card__title">{title}</h3>

          {description && (
            <p className="section-card__description">{description}</p>
          )}
        </div>
      </div>

      <div className="section-card__body">{children}</div>
    </section>
  )
}

export default SectionCard