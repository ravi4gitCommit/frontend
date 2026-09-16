interface InputProps {
    label?: string
    placeholder?: string
    type?: string
    value?: string
    disabled?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  }
  
  function Input({
    label,
    placeholder,
    type = 'text',
    value,
    disabled = false,
    onChange,
  }: InputProps) {
    return (
      <div className="input-field">
        {label && <label className="input-field__label">{label}</label>}
  
        <input
          className="input-field__control"
          type={type}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
    )
  }
  
  export default Input
  