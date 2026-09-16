import type { ReactNode } from 'react'

interface ErrorStateProps {
  title?: string
  message?: string
  action?: ReactNode
}

function ErrorState({
  title = 'Something went wrong',
  message = 'We could not load this information. Please try again.',
  action,
}: ErrorStateProps) {
  return (
    <div className="error-state">
      <div className="error-state__content">
        <h3 className="error-state__title">{title}</h3>

        <p className="error-state__message">
          {message}
        </p>

        {action && (
          <div className="error-state__action">
            {action}
          </div>
        )}
      </div>
    </div>
  )
}

export default ErrorState