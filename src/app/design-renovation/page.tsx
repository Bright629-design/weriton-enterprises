import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DraftingCompass, Hammer, Ruler, Lightbulb, PaintRoller, Building, Home, HardHat, ClipboardCheck, Wrench } from 'lucide-react';
import Image from 'next/image';

const designServices = [
    { name: "Space Planning", icon: Ruler },
    { name: "Lighting Design", icon: Lightbulb },
    { name: "Furniture Layouts", icon: Ruler },
    { name: "Color & Material Selection", icon: PaintRoller },
    { name: "3D Visualization", icon: DraftingCompass },
];

const renovationServices = [
    { name: "Home & Office Renovations", icon: Home },
    { name: "Electrical Installations", icon: Wrench },
    { name: "Plumbing Installations", icon: Wrench },
    { name: "Design Implementation", icon: ClipboardCheck },
    { name: "Project Supervision", icon: HardHat },
]

export default function DesignRenovationPage() {
    const designBanner = PlaceHolderImages.find(p => p.id === 'design-banner');
    const renovationBanner = PlaceHolderImages.find(p => p.id === 'renovation-banner');

    return (
        <div>
             <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center text-center text-white">
                {designBanner && (
                    <Image
                        src={designBanner.imageUrl}
                        alt={designBanner.description}
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint={designBanner.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-4xl p-4">
                    <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-md">
                        Design & Renovation
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
                        Transforming spaces with creativity, precision, and expert craftsmanship.
                    </p>
                </div>
            </section>

            <section id="design" className="py-16 md:py-24 bg-background">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <DraftingCompass className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">Design Services</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Our design philosophy is simple: creativity meets functionality. We craft spaces that are not only visually stunning but also perfectly tailored to your lifestyle or business needs. Our client-centered approach ensures your vision is at the forefront of every decision.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1">
                             <Card className="sticky top-24 bg-secondary">
                                <CardHeader>
                                    <CardTitle>Design for Every Sector</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <Home className="h-8 w-8 text-primary mt-1"/>
                                        <div>
                                            <h4 className="font-semibold">Residential Design</h4>
                                            <p className="text-sm text-muted-foreground">Crafting comfortable and personal living spaces, from single rooms to entire homes.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Building className="h-8 w-8 text-primary mt-1"/>
                                        <div>
                                            <h4 className="font-semibold">Commercial Design</h4>
                                            <p className="text-sm text-muted-foreground">Designing functional and brand-aligned offices, retail stores, and institutions.</p>
                                        </div>
                                    </div>
                                </CardContent>
                             </Card>
                        </div>
                        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                            {designServices.map(item => (
                                <Card key={item.name}>
                                    <CardHeader className="flex flex-row items-center justify-between">
                                        <CardTitle className="font-headline text-lg">{item.name}</CardTitle>
                                        <item.icon className="h-6 w-6 text-primary"/>
                                    </CardHeader>
                                    <CardContent>
                                         <p className="text-sm text-muted-foreground">Comprehensive service for {item.name.toLowerCase()}.</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="renovation" className="py-16 md:py-24 bg-secondary">
                 <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <Hammer className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">Renovation & Installation</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Bring your vision to life with our expert renovation and installation team. We manage every aspect of the project, from initial demolition to the final coat of paint, ensuring a seamless process and a high-quality result.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                         {renovationServices.map(item => (
                            <Card key={item.name} className="bg-card">
                                <CardHeader className="flex flex-row items-center gap-4">
                                     <div className="bg-primary/10 text-primary p-3 rounded-full">
                                        <item.icon className="w-6 h-6"/>
                                    </div>
                                    <CardTitle className="font-headline text-xl">{item.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Expert execution to bring your project plans to reality, on time and on budget.</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
