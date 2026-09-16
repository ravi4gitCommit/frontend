interface SkeletonLoaderProps {
    width?: string
    height?: string
    borderRadius?: string
  }
  
  function SkeletonLoader({
    width = '100%',
    height = '20px',
    borderRadius = 'var(--radius-md)',
  }: SkeletonLoaderProps) {
    return (
      <div
        className="skeleton-loader"
        style={{
          width,
          height,
          borderRadius,
        }}
        aria-hidden="true"
      />
    )
  }
  
  export default SkeletonLoader