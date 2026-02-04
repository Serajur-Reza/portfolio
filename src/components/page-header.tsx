interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
