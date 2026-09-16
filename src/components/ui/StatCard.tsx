interface StatCardProps {
    label: string
    value: string
    description?: string
  }
  
  function StatCard({ label, value, description }: StatCardProps) {
    return (
      <div className="stat-card">
        <p className="stat-card__label">{label}</p>
  
        <p className="stat-card__value">{value}</p>
  
        {description && (
          <p className="stat-card__description">{description}</p>
        )}
      </div>
    )
  }
  
  export default StatCard