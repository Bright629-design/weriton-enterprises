import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BadgeCheck, Users, Truck, Sparkles, Wallet, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const reasons = [
    {
        icon: Award,
        title: "Trusted Supplier",
        description: "With decades of experience, we've built a reputation for reliability. Our clients trust us to provide top-quality materials and meet project deadlines."
    },
    {
        icon: Users,
        title: "Experienced Professionals",
        description: "Our team consists of certified designers, skilled tradespeople, and knowledgeable sales staff, all dedicated to your project's success."
    },
    {
        icon: BadgeCheck,
        title: "Quality Materials",
        description: "We partner with leading manufacturers to source durable, high-performance materials that meet and exceed industry standards."
    },
    {
        icon: Wallet,
        title: "Affordable Pricing",
        description: "Our scale and strong supplier relationships allow us to offer competitive pricing without compromising on quality."
    },
    {
        icon: Sparkles,
        title: "End-to-End Solutions",
        description: "From initial design concepts and material supply to final installation, we offer a seamless, integrated service to save you time and hassle."
    }
]

export default function WhyUsPage() {
    const bannerImage = PlaceHolderImages.find(p => p.id === 'why-us-banner');

    return (
        <div>
            <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center text-center text-white">
                {bannerImage && (
                    <Image
                        src={bannerImage.imageUrl}
                        alt={bannerImage.description}
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint={bannerImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-4xl p-4">
                    <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-md">
                        Why Choose Weriton Enterprises?
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
                        Your partner in quality, reliability, and excellence from start to finish.
                    </p>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-background">
                <div className="container">
                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reasons.map((reason) => (
                             <Card key={reason.title}>
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                                        <reason.icon className="w-8 h-8"/>
                                    </div>
                                    <CardTitle className="font-headline text-xl">{reason.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{reason.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="bg-secondary py-16 md:py-24">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Ready to Experience the Difference?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        Let's discuss how our commitment to quality and service can benefit your next project. Contact our team today.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" asChild>
                            <Link href="/quote-request">
                                Get a Quote
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
