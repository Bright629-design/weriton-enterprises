import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, Lightbulb, ShieldCheck, Handshake, Target, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const values = [
    {
        icon: ShieldCheck,
        title: "Quality",
        description: "We are committed to providing only the highest quality products and services that meet rigorous standards of performance and durability."
    },
    {
        icon: Handshake,
        title: "Integrity",
        description: "Our business is built on honesty and transparency. We build trust with every client through clear communication and reliable service."
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "We constantly seek out new technologies, materials, and design approaches to provide creative and effective solutions for our clients."
    },
    {
        icon: Users,
        title: "Customer Focus",
        description: "Our clients are at the heart of everything we do. We listen to their needs and dedicate ourselves to ensuring their complete satisfaction."
    }
]

export default function AboutPage() {
    const historyImage = PlaceHolderImages.find(p => p.id === 'about-history');
    const teamImage = PlaceHolderImages.find(p => p.id === 'about-team');
    const ceoImage = PlaceHolderImages.find(p => p.id === 'ceo-justus');

    return (
        <div className="bg-background">
            <div className="container py-12 md:py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold">About Weriton Enterprises</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Your trusted partner for comprehensive hardware solutions, construction materials, and creative design excellence since 2015.
                    </p>
                </div>

                <section id="history" className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
                    {historyImage && (
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={historyImage.imageUrl}
                                alt={historyImage.description}
                                width={800}
                                height={600}
                                className="object-cover"
                                data-ai-hint={historyImage.imageHint}
                            />
                        </div>
                    )}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Story</h2>
                        <p className="text-muted-foreground text-lg mb-4">
                            Founded in 2015 by Justus, Weriton Enterprises started as a small, local hardware store with a simple mission: to provide quality tools and materials to the community's builders and craftspeople.
                        </p>
                        <p className="text-muted-foreground text-lg">
                            Over the years, we've grown into a comprehensive solution provider, expanding our offerings to include a full range of construction supplies, and eventually, a dedicated design and renovation division. While our services have evolved, our founding commitment to quality and customer satisfaction remains unchanged.
                        </p>
                    </div>
                </section>
                
                <section id="ceo" className="py-16 md:py-24 bg-secondary rounded-lg">
                    <div className="container grid md:grid-cols-2 gap-12 items-center">
                        {ceoImage && (
                            <div className="rounded-lg overflow-hidden shadow-lg aspect-square">
                                <Image
                                    src={ceoImage.imageUrl}
                                    alt={ceoImage.description}
                                    width={800}
                                    height={800}
                                    className="object-cover w-full h-full"
                                    data-ai-hint={ceoImage.imageHint}
                                />
                            </div>
                        )}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">A Word from Our CEO</h2>
                            <p className="text-muted-foreground text-lg mb-4">
                                "Welcome to Weriton Enterprises. When I started this company, my goal was to build more than just a store; I wanted to build a partner for our community. A place where professionals and homeowners alike could find not just the best materials, but also the expertise and support to bring their projects to life."
                            </p>
                            <p className="text-muted-foreground text-lg mb-6">
                                "Today, I'm proud of the team we've built and the comprehensive services we offer. Whether you're laying a foundation or choosing the perfect paint color, we are here to ensure your success. Thank you for trusting us with your vision."
                            </p>
                            <p className="font-semibold text-xl font-headline">Justus</p>
                            <p className="text-muted-foreground">Founder & CEO, Weriton Enterprises</p>
                        </div>
                    </div>
                </section>


                <section id="mission-vision" className="py-16 md:py-24">
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-secondary">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Target className="h-10 w-10 text-primary"/>
                                <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-lg">To empower builders, designers, and homeowners by providing a comprehensive range of high-quality products, expert services, and innovative solutions, ensuring every project's success from foundation to finish.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Lightbulb className="h-10 w-10 text-primary"/>
                                <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-lg">To be the region's leading and most trusted partner for all construction, renovation, and design needs, known for our unwavering commitment to quality, innovation, and customer success.</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section id="values">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Core Values</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            The principles that guide our work and define our company culture.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value) => (
                            <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                        <value.icon className="w-8 h-8"/>
                                    </div>
                                    <CardTitle className="font-headline">{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
                
                <section id="team" className="py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-2">
                        {teamImage && (
                            <div className="rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={teamImage.imageUrl}
                                    alt={teamImage.description}
                                    width={800}
                                    height={600}
                                    className="object-cover"
                                    data-ai-hint={teamImage.imageHint}
                                />
                            </div>
                        )}
                    </div>
                    <div className="md:order-1">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Meet Our Experts</h2>
                        <p className="text-muted-foreground text-lg mb-6">
                           Our success is driven by our people. Weriton Enterprises is proud to have a diverse team of experienced hardware specialists, creative designers, certified technicians, and dedicated project managers. We invest in continuous training to ensure our team is equipped with the latest industry knowledge.
                        </p>
                        <Button size="lg">
                            Join Our Team <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </section>

                <section className="py-16 text-center bg-primary text-primary-foreground rounded-lg">
                    <h2 className="text-3xl font-headline font-bold mb-4">Let's Build Something Great Together</h2>
                    <p className="max-w-2xl mx-auto mb-8">
                       Contact us today to discuss your project. We're ready to put our expertise to work for you.
                    </p>
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="/quote-request">
                            Request a Quote
                        </Link>
                    </Button>
                </section>
            </div>
        </div>
    );
}
