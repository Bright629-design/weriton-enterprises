import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "John D., Homeowner",
        avatar: "JD",
        rating: 5,
        quote: "The design team at Weriton was incredible. They took our vague ideas for a kitchen remodel and turned them into a stunning, functional space. The quality of the materials and the professionalism of the installation crew were top-notch."
    },
    {
        name: "Sarah P., Prime Contractors",
        avatar: "SP",
        rating: 5,
        quote: "As a general contractor, having a reliable supplier is crucial. Weriton Enterprises has been my go-to for years. They always have what I need in stock, their pricing is fair, and their delivery is always on time. They are a true partner."
    },
    {
        name: "Mike R., Developer",
        avatar: "MR",
        rating: 5,
        quote: "For our latest commercial project, Weriton handled everything from material procurement for the structure to the final decorative finishes. Their end-to-end service saved us time and money, and the final result exceeded our expectations."
    },
     {
        name: "Emily C., Interior Designer",
        avatar: "EC",
        rating: 5,
        quote: "I rely on Weriton for their vast selection of high-quality finishing materials. Their team is knowledgeable and always helps me find the perfect tiles, paints, and hardware to bring my client's vision to life."
    },
     {
        name: "David L., DIY Enthusiast",
        avatar: "DL",
        rating: 4,
        quote: "The staff at the hardware counter are amazing. I'm a weekend warrior, and they've patiently answered countless questions and given me great advice for my home projects. Their tool selection is fantastic."
    },
    {
        name: "Jessica B., Facility Manager",
        avatar: "JB",
        rating: 5,
        quote: "We use Weriton for all our facility's maintenance and safety supplies. Their security solutions, from CCTV to access control hardware, are reliable and their team provided excellent training and support."
    }
]

export default function TestimonialsPage() {
    const bannerImage = PlaceHolderImages.find(p => p.id === 'testimonials-banner');

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
                        What Our Clients Say
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
                       Stories of trust, quality, and success from our valued partners and customers.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background">
                <div className="container">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="break-inside-avoid">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <Avatar>
                                            <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-bold">{testimonial.name}</p>
                                            <div className="flex">
                                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                                ))}
                                                {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 text-muted" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <blockquote className="italic text-muted-foreground">
                                        "{testimonial.quote}"
                                    </blockquote>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
