import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 'downtown-loft',
    title: 'Downtown Industrial Loft',
    category: 'Residential',
    description: 'A 4,000 sq/ft loft transformed into a warm, inviting home. Weriton Enterprises provided all key furniture pieces, including the custom sectional sofa and dining set.',
    imageId: 'project-downtown'
  },
  {
    id: 'suburban-residence',
    title: 'The Oak Knoll Residence',
    category: 'Residential',
    description: 'A custom luxury home furnished with our finest collections. We provided timeless pieces that blend classic and modern design.',
    imageId: 'project-residential'
  },
  {
    id: 'boutique-hotel',
    title: 'The Ashton Boutique Hotel',
    category: 'Hospitality',
    description: 'A complete outfitting of a 50-room boutique hotel. Our contribution included custom lobby furniture, room furnishings, and accent lighting throughout.',
    imageId: 'project-park'
  },
   {
    id: 'modern-restaurant',
    title: '"Voro" Restaurant & Bar',
    category: 'Commercial',
    description: 'A chic, modern dining experience. Weriton Enterprises was the primary supplier of all seating, tables, and the statement bar.',
    imageId: 'project-bridge'
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Projects</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Weriton Enterprises furniture and design services have been used to create standout spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
            return (
              <Link href="#" key={project.id}>
                <Card className="group overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    {projectImage && (
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src={projectImage.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                data-ai-hint={projectImage.imageHint}
                            />
                        </div>
                    )}
                    <CardHeader>
                        <Badge variant="secondary" className="w-fit mb-2">{project.category}</Badge>
                        <CardTitle className="text-2xl font-headline">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="text-primary flex items-center font-semibold">
                            View Case Study <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
         <section className="py-16 md:py-24 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Have a Project with Our Furniture?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                We love to see our pieces in beautiful spaces. If you have a completed project you're proud of, share it with us for a chance to be featured in our gallery.
            </p>
            <Button size="lg" asChild>
                <Link href="/contact">
                    Submit Your Project
                </Link>
            </Button>
        </section>
      </div>
    </div>
  );
}
