import type { ReactNode } from 'react'

interface ToastProps {
  message: string
  variant?: 'info' | 'success' | 'warning' | 'danger'
  action?: ReactNode
}

function Toast({
  message,
  variant = 'info',
  action,
}: ToastProps) {
  return (
    <div
      className={`toast toast--${variant}`}
      role="status"
      aria-live="polite"
    >
      <span className="toast__message">
        {message}
      </span>

      {action && (
        <div className="toast__action">
          {action}
        </div>
      )}
    </div>
  )
}

export default Toast