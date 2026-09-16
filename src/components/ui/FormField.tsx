import type { ReactNode } from 'react'

interface FormFieldProps {
  label?: string
  required?: boolean
  error?: string
  hint?: string
  children: ReactNode
}

function FormField({
  label,
  required = false,
  error,
  hint,
  children,
}: FormFieldProps) {
  return (
    <div className="form-field">
      {label && (
        <label className="form-field__label">
          {label}

          {required && (
            <span className="form-field__required"> *</span>
          )}
        </label>
      )}

      {children}

      {error && (
        <p className="form-field__error">{error}</p>
      )}

      {!error && hint && (
        <p className="form-field__hint">{hint}</p>
      )}
    </div>
  )
}

export default FormField