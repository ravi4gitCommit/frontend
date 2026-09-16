interface LoadingStateProps {
    message?: string
  }
  
  function LoadingState({
    message = 'Loading...',
  }: LoadingStateProps) {
    return (
      <div className="loading-state">
        <div className="loading-state__spinner" aria-hidden="true" />
  
        <p className="loading-state__message">
          {message}
        </p>
      </div>
    )
  }
  
  export default LoadingState