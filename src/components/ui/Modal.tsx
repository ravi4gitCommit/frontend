import type { ReactNode } from 'react'

interface ModalProps {
  title: string
  children: ReactNode
  open: boolean
  onClose: () => void
}

function Modal({
  title,
  children,
  open,
  onClose,
}: ModalProps) {
  if (!open) {
    return null
  }

  return (
    <div className="modal-overlay" role="presentation">
      <div className="modal" role="dialog" aria-modal="true">
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>

          <button
            type="button"
            className="modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="modal__body">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal