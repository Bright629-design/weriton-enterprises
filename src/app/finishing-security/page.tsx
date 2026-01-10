import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PaintBucket, ShieldCheck, Lock, Video, Wallpaper, CheckSquare } from 'lucide-react';
import Image from 'next/image';

const sections = [
    {
        id: "finishing",
        title: "Finishing Materials",
        icon: PaintBucket,
        description: "The final touches that define a space's character and aesthetic. We offer a curated selection of premium finishing materials that combine beauty with durability, ensuring a flawless look that lasts for years.",
        items: [
            { name: "Paints and Coatings", description: "A vast spectrum of interior and exterior paints, primers, and specialty coatings with superior coverage and longevity." },
            { name: "Tiles and Flooring", description: "From elegant hardwood and durable laminate to stylish ceramic and porcelain tiles for any room." },
            { name: "Ceiling Systems", description: "Acoustic panels, decorative tiles, and suspension systems for commercial and residential applications." },
            { name: "Decorative Fittings", description: "Mouldings, trim, and architectural details that add a touch of sophistication and personality." },
        ]
    },
    {
        id: "security",
        title: "Security & Safety",
        icon: ShieldCheck,
        description: "Protect your property and the people in it with our comprehensive range of security and safety solutions. We provide reliable, cutting-edge products for residential, commercial, and industrial use.",
        items: [
            { name: "Locks and Door Hardware", description: "High-security deadbolts, smart locks, and commercial-grade door hardware for robust access control." },
            { name: "CCTV Systems", description: "Advanced surveillance cameras, DVRs, and NVRs for 24/7 monitoring and peace of mind." },
            { name: "Alarm Solutions", description: "Integrated intrusion detection systems, sensors, and alarms to deter and alert you to threats." },
            { name: "Protective Equipment", description: "Essential personal protective equipment (PPE) including hard hats, safety vests, gloves, and respiratory protection." },
        ]
    }
];

export default function FinishingSecurityPage() {
    const bannerImage = PlaceHolderImages.find(p => p.id === 'finishing-banner');

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
                        Finishing & Security
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
                        Perfecting and protecting your property with premium materials and reliable solutions.
                    </p>
                </div>
            </section>

            <div className="container py-12 md:py-16">
                {sections.map((section, index) => (
                    <section key={section.id} id={section.id} className={`py-12 ${index > 0 ? 'border-t' : ''}`}>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-1">
                                 <div className="sticky top-24">
                                    <section.icon className="h-12 w-12 text-primary mb-4" />
                                    <h2 className="text-3xl font-headline font-bold mb-4">{section.title}</h2>
                                    <p className="text-muted-foreground">{section.description}</p>
                                 </div>
                            </div>
                            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
                                {section.items.map(item => (
                                    <Card key={item.name} className="bg-secondary">
                                        <CardHeader>
                                            <CardTitle className="font-headline text-xl">{item.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
