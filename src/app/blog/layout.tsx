export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Design Journal</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert advice, style guides, and inspiration to help you create your perfect space.
          </p>
        </div>
        {children}
      </div>
    </div>
  )
}
