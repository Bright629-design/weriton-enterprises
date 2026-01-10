import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrickWall, Cable, Wrench, Drill, Pipette, HardHat } from 'lucide-react';
import Image from 'next/image';

const sections = [
    {
        id: "materials",
        title: "Construction Materials",
        icon: BrickWall,
        description: "The foundation of any great project. We supply a comprehensive range of high-grade construction materials suitable for residential, commercial, and industrial applications. Our materials meet all safety and quality standards, ensuring your build is strong and durable.",
        items: [
            { name: "Cement, Aggregates & Steel", description: "From foundation to framework, we have the core materials you need." },
            { name: "Timber and Boards", description: "Sustainably sourced lumber, plywood, MDF, and specialty boards for framing and finishing." },
            { name: "Roofing Materials", description: "A wide selection of shingles, tiles, membranes, and underlayments to protect your structure." },
            { name: "Bricks and Blocks", description: "Various types and sizes of bricks and concrete blocks for walls and paving." },
        ],
        imageIds: ["mat-cement", "mat-aggregates", "mat-steel", "mat-timber", "mat-roofing", "mat-bricks"]
    },
    {
        id: "electrical",
        title: "Electrical Supplies",
        icon: Cable,
        description: "Power your project safely and efficiently with our extensive stock of electrical supplies. We carry everything from basic wiring to advanced solar systems, all from trusted manufacturers.",
        items: [
            { name: "Cables and Wiring", description: "A full range of gauges and types for residential and commercial wiring." },
            { name: "Switches and Sockets", description: "Modern and classic designs to fit any interior style." },
            { name: "Lighting Solutions", description: "LEDs, fixtures, landscape lighting, and smart lighting systems." },
            { name: "Solar Systems", description: "Panels, inverters, and batteries for sustainable energy solutions." },
        ],
        imageIds: ["elec-cables", "elec-switches", "elec-lighting", "elec-solar", "elec-conduit", "elec-breakers"]
    },
    {
        id: "plumbing",
        title: "Plumbing & Sanitary",
        icon: Pipette,
        description: "Reliable plumbing is crucial. We offer a vast selection of pipes, fittings, fixtures, and accessories to ensure a leak-free and efficient system for any building.",
        items: [
            { name: "Pipes and Fittings", description: "PVC, copper, PEX, and all the necessary connectors for any application." },
            { name: "Taps and Mixers", description: "Durable and stylish faucets for kitchens, bathrooms, and utility areas." },
            { name: "Water Tanks", description: "Storage solutions for residential and commercial water management." },
            { name: "Bathroom Accessories", description: "Complete your bathroom with our range of high-quality accessories." },
        ],
        imageIds: ["plumb-pipes", "plumb-taps", "plumb-tanks", "plumb-accessories", "plumb-sinks", "plumb-toilets"]
    },
    {
        id: "tools",
        title: "Tools & Equipment",
        icon: Drill,
        description: "The right tool makes all the difference. We stock a professional-grade selection of hand tools, power tools, and heavy equipment for sale and for rent. Built to last and perform under pressure.",
        items: [
            { name: "Hand Tools", description: "Hammers, wrenches, screwdrivers, and everything in between for precision work." },
            { name: "Power Tools", description: "Drills, saws, sanders, and grinders from the industry's most trusted brands." },
            { name: "Construction Equipment", description: "Ladders, scaffolding, and mixers to support larger projects." },
            { name: "Safety Gear", description: "Hard hats, gloves, safety glasses, and harnesses to keep you safe on the job." },
        ],
        imageIds: []
    }
];

export default function HardwarePage() {
    const bannerImage = PlaceHolderImages.find(p => p.id === 'materials-banner');

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
                        Hardware & Supplies
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
                        The professional's choice for quality materials, tools, and equipment.
                    </p>
                </div>
            </section>

            <div className="container py-12 md:py-16">
                {sections.map((section, index) => (
                    <section key={section.id} id={section.id} className={`py-12 ${index > 0 ? 'border-t' : ''}`}>
                        <div className="grid lg:grid-cols-3 gap-12 items-start">
                            <div className="lg:col-span-1">
                                 <div className="sticky top-24">
                                    <section.icon className="h-12 w-12 text-primary mb-4" />
                                    <h2 className="text-3xl font-headline font-bold mb-4">{section.title}</h2>
                                    <p className="text-muted-foreground">{section.description}</p>
                                 </div>
                            </div>
                            <div className="lg:col-span-2">
                                <div className="grid sm:grid-cols-2 gap-6">
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
                                {section.imageIds && section.imageIds.length > 0 && (
                                    <div className="mt-8">
                                        <h3 className="text-2xl font-headline font-bold mb-4">Examples</h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                            {section.imageIds.map(imageId => {
                                                const image = PlaceHolderImages.find(p => p.id === imageId);
                                                return image ? (
                                                    <div key={image.id} className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                                        <Image
                                                            src={image.imageUrl}
                                                            alt={image.description}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform"
                                                            data-ai-hint={image.imageHint}
                                                        />
                                                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                                            <p className="text-white text-xs font-semibold">{image.description}</p>
                                                        </div>
                                                    </div>
                                                ) : null;
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

    