
interface PageHeaderProps {
  title: string
  description?: string
}

function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="page-header">
      <div>
        <h2 className="page-header__title">{title}</h2>

        {description && (
          <p className="page-header__description">{description}</p>
        )}
      </div>
    </div>
  )
}

export default PageHeader
