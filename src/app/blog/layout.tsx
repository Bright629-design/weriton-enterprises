export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Blog & Insights</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Hardware guides, design trends, renovation tips, and maintenance advice from our experts.
          </p>
        </div>
        {children}
      </div>
    </div>
  )
}
