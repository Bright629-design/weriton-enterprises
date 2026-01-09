import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Bot, Lightbulb, Recycle, TestTube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


const innovations = [
    {
        icon: Recycle,
        title: "Sustainable Materials",
        description: "We are pioneering the use of recycled and eco-friendly materials, including reclaimed wood and organic textiles, to reduce the environmental impact of our furniture."
    },
    {
        icon: Bot,
        title: "AI-Powered Design",
        description: "Our proprietary AI system helps you visualize furniture in your space and recommends pieces that match your style, ensuring the perfect fit for your home."
    },
    {
        icon: TestTube,
        title: "Material Innovation",
        description: "Our in-house lab is constantly developing and testing next-generation materials that are more durable, beautiful, and sustainable than ever before."
    },
    {
        icon: Lightbulb,
        title: "Smart Furniture",
        description: "We offer a range of products designed for modern living, from IoT-enabled lighting to furniture with integrated charging and smart storage solutions."
    }
]
export default function InnovationPage() {
    const innovationImage = PlaceHolderImages.find(p => p.id === 'innovation-banner');

    return (
        <div>
            <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center text-center text-white">
                {innovationImage && (
                    <Image
                        src={innovationImage.imageUrl}
                        alt={innovationImage.description}
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint={innovationImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                <div className="relative z-10 max-w-4xl p-4">
                    <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-md">
                        Designing the Future
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
                        At Weriton Enterprises, innovation is at the core of everything we do. We're not just selling furniture; we're developing the solutions for tomorrow's homes.
                    </p>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-background">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Pillars of Innovation</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            We focus our research and development on key areas that will define the future of interior design and home living.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {innovations.map((item, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                        <item.icon className="w-8 h-8"/>
                                    </div>
                                    <CardTitle className="font-headline">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-16 md:py-24 bg-secondary">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div className="rounded-lg overflow-hidden shadow-lg aspect-w-4 aspect-h-3">
                         <Image
                            src="https://picsum.photos/seed/lab/800/600"
                            alt="Weriton Enterprises Innovation Lab"
                            width={800}
                            height={600}
                            className="w-full h-full object-cover"
                            data-ai-hint="design studio"
                        />
                    </div>
                     <div>
                        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                        The Weriton Design Lab
                        </h2>
                        <p className="text-muted-foreground mb-6 text-lg">
                        Our state-of-the-art design studio is where ideas become reality. Staffed by a dedicated team of designers, engineers, and sustainability experts, the lab is the engine of our progress.
                        </p>
                        <p className="text-muted-foreground mb-8">We partner with universities and tech startups to stay at the forefront of material science and home technology, ensuring our customers always have access to the most advanced products on the market.</p>
                        <Button size="lg" asChild variant="outline">
                        <Link href="/contact">
                            Collaborate with Us <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Have an Idea?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        We believe the best ideas can come from anywhere. If you have an innovative idea for a new product or a way to improve the home, we want to hear from you.
                    </p>
                    <Button size="lg">Submit Your Idea</Button>
                </div>
            </section>
        </div>
    )
}
