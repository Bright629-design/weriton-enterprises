import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, Sofa, Truck, CreditCard, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
    {
        icon: Check,
        title: "Exclusive Trade Pricing",
        description: "Access our best pricing tiers reserved for design professionals to maximize your project's profitability."
    },
    {
        icon: Truck,
        title: "Priority Logistics & Delivery",
        description: "Enjoy prioritized scheduling and white-glove delivery services to keep your projects on schedule."
    },
    {
        icon: CreditCard,
        title: "Flexible Billing Options",
        description: "We offer flexible payment terms to help you manage cash flow for projects of any size."
    },
    {
        icon: Sofa,
        title: "Dedicated Design Support",
        description: "A dedicated account manager will be your single point of contact for quotes, orders, and product support."
    }
]

export default function ContractorsPage() {
    const contractorImage = PlaceHolderImages.find(p => p.id === 'contractor-banner');

    return (
        <div>
            <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center text-center text-white">
                {contractorImage && (
                    <Image
                        src={contractorImage.imageUrl}
                        alt={contractorImage.description}
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint={contractorImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-4xl p-4">
                    <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-md">
                        Partner with Weriton Enterprises
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
                        Exclusive benefits for interior designers, architects, and trade professionals.
                    </p>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-background">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">Designed for Professionals Like You</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            We understand the demands of client work. That's why we've designed our Trade Program to provide you with the products, support, and services you need to succeed.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="text-center">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                        <benefit.icon className="w-8 h-8"/>
                                    </div>
                                    <CardTitle className="font-headline">{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        Apply for a trade account today to unlock your benefits or contact our trade desk to discuss your next project.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" asChild>
                            <Link href="/quote-request">
                                Open a Trade Account <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline">Contact Trade Desk</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
