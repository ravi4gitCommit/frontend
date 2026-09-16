import type { ChangeEvent, ReactNode } from 'react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  label?: string
  value?: string
  disabled?: boolean
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  children?: ReactNode
  options?: SelectOption[]
}

function Select({
  label,
  value,
  disabled = false,
  onChange,
  children,
  options,
}: SelectProps) {
  return (
    <div className="select-field">
      {label && <label className="select-field__label">{label}</label>}

      <select
        className="select-field__control"
        value={value}
        disabled={disabled}
        onChange={onChange}
      >
        {options
          ? options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))
          : children}
      </select>
    </div>
  )
}

export default Select