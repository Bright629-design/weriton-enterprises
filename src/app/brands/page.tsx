import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

const brands = [
    { name: 'Brick Master', id: 'brand-brickmaster', imageHint: 'brick logo', category: 'Masonry' },
    { name: 'Steel Strength', id: 'brand-steelstrength', imageHint: 'steel logo', category: 'Structural' },
    { name: 'Dura-Wood', id: 'brand-durawood', imageHint: 'wood logo', category: 'Lumber' },
    { name: 'ToolMakers', id: 'brand-toolmakers', imageHint: 'tool logo', category: 'Tools' },
    { name: 'Gardeon', id: 'brand-gardeon', imageHint: 'plant logo', category: 'Landscaping' },
    { name: 'Pipe-Line', id: 'brand-pipeline', imageHint: 'pipe logo', category: 'Plumbing' },
    { name: 'Voltex', id: 'brand-voltex', imageHint: 'electric logo', category: 'Electrical' },
    { name: 'Finish Coat', id: 'brand-finishcoat', imageHint: 'paint logo', category: 'Paints & Finishes' },
];

export default function BrandsPage() {
    return (
        <div className="bg-background">
            <div className="container py-12 md:py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Trusted Brands</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        We partner with the industry's leading manufacturers to bring you products you can rely on.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {brands.map(brand => {
                        const brandImage = PlaceHolderImages.find(p => p.id === brand.id);
                        return (
                            <Link href="#" key={brand.id}>
                                <Card className="group overflow-hidden text-center h-full hover:shadow-lg transition-shadow duration-300">
                                    <CardHeader className="p-0">
                                        {brandImage && (
                                            <div className="aspect-video bg-muted flex items-center justify-center">
                                                <Image
                                                    src={brandImage.imageUrl}
                                                    alt={`${brand.name} logo`}
                                                    width={150}
                                                    height={150}
                                                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                                                    data-ai-hint={brand.imageHint}
                                                />
                                            </div>
                                        )}
                                    </CardHeader>
                                    <CardContent className="p-4">
                                        <h3 className="font-semibold font-headline">{brand.name}</h3>
                                        <p className="text-sm text-muted-foreground">{brand.category}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
                 <section className="py-16 md:py-24 text-center bg-secondary my-16 rounded-lg">
                    <h2 className="text-3xl font-headline font-bold mb-4">Become a Partner</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        Are you a manufacturer of high-quality building materials? We're always looking to expand our offerings. Contact our procurement team to explore partnership opportunities.
                    </p>
                    <Link href="/contact">
                        <Button size="lg">Partner With Us</Button>
                    </Link>
                </section>
            </div>
        </div>
    );
}
