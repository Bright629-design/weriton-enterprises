import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, ShoppingCart, View } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const models = [
    {
        id: 'modern-kitchen',
        name: 'Modern Kitchen Scene',
        description: 'A complete 3D model of a sleek, modern kitchen. Perfect for visualization and planning.',
        price: '$49.99',
        imageId: '3d-kitchen'
    },
    {
        id: 'living-room-set',
        name: 'Cozy Living Room Set',
        description: 'Detailed 3D models of a sofa, armchair, and coffee table for realistic interior renders.',
        price: '$39.99',
        imageId: '3d-deck'
    },
    {
        id: 'house-frame',
        name: 'Scandinavian Dining Set',
        description: 'A 3D model of a minimalist dining table and chairs. Essential for architectural visualization.',
        price: '$29.99',
        imageId: 'blog-framing'
    },
    {
        id: 'garden-pergola',
        name: 'Bedroom Collection',
        description: 'An elegant bedroom set model including a bed, nightstands, and a dresser.',
        price: '$34.99',
        imageId: '3d-pergola'
    }
]

export default function ThreeDStorePage() {
    return (
        <div className="bg-background">
            <div className="container py-12 md:py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold">3D Model Store</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Purchase and download professional 3D models for your architectural visualizations and interior design projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {models.map(model => {
                        const modelImage = PlaceHolderImages.find(p => p.id === model.imageId);
                        return (
                            <Card key={model.id} className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                {modelImage && (
                                    <div className="relative overflow-hidden aspect-video">
                                        <Image
                                            src={modelImage.imageUrl}
                                            alt={model.name}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={modelImage.imageHint}
                                        />
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle>{model.name}</CardTitle>
                                    <CardDescription className="line-clamp-2">{model.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-xl font-bold text-primary">{model.price}</p>
                                </CardContent>
                                <CardFooter className="flex gap-2">
                                    <Button className="w-full">
                                        <ShoppingCart className="mr-2 h-4 w-4" />
                                        Add to Cart
                                    </Button>
                                    <Button variant="outline" size="icon" asChild>
                                        <Link href="#">
                                            <View className="h-5 w-5"/>
                                            <span className="sr-only">View Model</span>
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </div>

                <section className="py-16 md:py-24 text-center">
                     <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Custom 3D Modeling Services</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        Need a specific model for your project? Our team of 3D artists can create custom models from your photos, sketches, or ideas.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">
                            Get a Custom Model Quote <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </section>
            </div>
        </div>
    )
}
