import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle, ClipboardList, Package, Truck, Wrench, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        icon: ClipboardList,
        title: "Material Take-offs & Quoting",
        description: "Save time and ensure accuracy. Provide us with your blueprints, and our team will perform a detailed material take-off and provide a comprehensive, competitive quote."
    },
    {
        icon: Truck,
        title: "On-Site Delivery & Logistics",
        description: "We offer fast and reliable delivery directly to your job site. Our fleet can handle orders of any size, with options for crane and boom truck off-loading to keep your project moving."
    },
    {
        icon: Package,
        title: "Custom Fabrication",
        description: "Need something specific? We provide custom cutting, bending, and fabrication for materials like steel beams, rebar, and lumber to meet your exact project specifications."
    },
    {
        icon: Wrench,
        title: "Tool & Equipment Rental",
        description: "Access professional-grade tools and heavy equipment without the cost of ownership. From excavators to power tools, we have what you need to get the job done right."
    }
]

export default function ServicePage() {
    const serviceImage = PlaceHolderImages.find(p => p.id === 'service-banner');

    return (
        <div>
            <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center text-center text-white">
                {serviceImage && (
                    <Image
                        src={serviceImage.imageUrl}
                        alt={serviceImage.description}
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint={serviceImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-4xl p-4">
                    <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-md">
                        Services to Support Your Success
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
                       More than a supplier, we are your project partner from start to finish.
                    </p>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-background">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">How We Help</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            We've structured our services to address the real-world challenges of construction projects, helping you save time, reduce costs, and build better.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                             <Card key={index}>
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                                        <service.icon className="w-8 h-8"/>
                                    </div>
                                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

             <section className="bg-secondary py-16 md:py-24">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                            Your Dedicated Project Partner
                        </h2>
                        <p className="text-muted-foreground mb-6 text-lg">
                            When you work with Weriton Hub, you get more than just materials. You get a team of experts dedicated to your success.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Expert Consultation</h4>
                                    <p className="text-muted-foreground">Our specialists can advise on material selection, compliance, and value engineering to optimize your project.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Dedicated Account Management</h4>
                                    <p className="text-muted-foreground">For our trade partners, a single point of contact ensures seamless communication and order management.</p>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Post-Project Support</h4>
                                    <p className="text-muted-foreground">We stand by our products and services, offering support even after your project is complete.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="https://picsum.photos/seed/service-team/800/1000"
                            alt="Weriton Hub Team"
                            width={800}
                            height={1000}
                            className="w-full h-full object-cover"
                            data-ai-hint="team meeting construction"
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Ready to Build Better?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        Let's discuss how our services can streamline your next project. Contact us today for a free consultation or to request a quote.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" asChild>
                            <Link href="/quote-request">
                                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
