export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Knowledge Hub</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert advice, material guides, and building tips to help you succeed.
          </p>
        </div>
        {children}
      </div>
    </div>
  )
}
