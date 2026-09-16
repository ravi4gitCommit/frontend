import type { ReactNode } from 'react'

interface EmptyStateProps {
  title: string
  description?: string
  action?: ReactNode
}

function EmptyState({
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="empty-state">
      <div className="empty-state__content">
        <h3 className="empty-state__title">{title}</h3>

        {description && (
          <p className="empty-state__description">
            {description}
          </p>
        )}

        {action && (
          <div className="empty-state__action">
            {action}
          </div>
        )}
      </div>
    </div>
  )
}

export default EmptyState