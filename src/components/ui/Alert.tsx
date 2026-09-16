interface AlertProps {
    message: string
    variant?: 'info' | 'success' | 'warning' | 'danger'
  }
  
  function Alert({
    message,
    variant = 'info',
  }: AlertProps) {
    return (
      <div
        className={`alert alert--${variant}`}
        role="alert"
      >
        {message}
      </div>
    )
  }
  
  export default Alert