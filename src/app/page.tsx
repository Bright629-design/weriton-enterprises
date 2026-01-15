
"use client";

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Construction, DraftingCompass, Hammer, HardHat, PaintBucket, ShieldCheck, Wrench, BadgeCheck, Users, Truck } from 'lucide-react';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const offerings = [
  { 
    title: 'Hardware & Supplies',
    description: 'A comprehensive selection of tools, parts, and materials for any job, big or small.',
    icon: Wrench,
    href: '/hardware'
  },
  { 
    title: 'Finishing & Security',
    description: 'High-quality paints, flooring, and security systems to perfect and protect your space.',
    icon: PaintBucket,
    href: '/finishing-security'
  },
  { 
    title: 'Design Services',
    description: 'Creative and functional design solutions for residential and commercial properties.',
    icon: DraftingCompass,
    href: '/design-renovation#design'
  },
  { 
    title: 'Renovation & Installation',
    description: 'Expert installation and renovation services managed by our team of skilled professionals.',
    icon: Hammer,
    href: '/design-renovation#renovation'
  },
]

const whyUsPoints = [
    {
        icon: BadgeCheck,
        title: "Quality Assurance",
        description: "We source only the highest-quality materials and tools from trusted brands to guarantee durability and performance."
    },
    {
        icon: Users,
        title: "Skilled Professionals",
        description: "Our team of designers, contractors, and technicians are experienced, certified, and dedicated to excellence."
    },
    {
        icon: Truck,
        title: "Reliable Supply Chain",
        description: "With our robust logistics network, we ensure your materials and products are delivered on time, every time."
    }
]

export default function Home() {
  const heroImages = PlaceHolderImages.filter(p => p.id.startsWith('hero-'));
  const designImage = PlaceHolderImages.find(p => p.id === 'design-services');
  const renovationImage = PlaceHolderImages.find(p => p.id === 'renovation-services');
  
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <Carousel 
          className="absolute inset-0 w-full h-full"
          plugins={[plugin.current]}
          opts={{ loop: true }}
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={image.id} className="h-full">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  data-ai-hint={image.imageHint}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl p-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-md">
            Complete Hardware Solutions & Creative Design Excellence
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
            Quality materials, professional tools, and innovative design under one roof.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/design-renovation">
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/quote-request">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">What We Offer</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Weriton Enterprises is your one-stop-shop, seamlessly blending a comprehensive hardware supplier with a creative and experienced design and renovation firm.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {offerings.map((item) => (
              <Link href={item.href} key={item.title}>
                <Card className="text-center h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <item.icon className="w-8 h-8"/>
                        </div>
                        <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-2">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            A selection of our top-rated tools and materials, trusted by professionals and DIYers alike.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/hardware">View All Hardware</Link>
            </Button>
          </div>
        </div>
      </section>

       <section className="py-16 md:py-24 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <DraftingCompass className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              Expert Design Services
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Our creative team brings your vision to life. From initial concept and 3D visualization to material selection and final styling, we design spaces that are both beautiful and functional.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /> Interior & Exterior Design</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /> Residential & Commercial Projects</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /> 3D Visualization & Space Planning</li>
            </ul>
            <Button size="lg" asChild>
              <Link href="/design-renovation#design">
                Learn About Design <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg aspect-w-4 aspect-h-3">
            {designImage && (
                <Image
                    src={designImage.imageUrl}
                    alt={designImage.description}
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover"
                    data-ai-hint={designImage.imageHint}
                />
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
           <div className="rounded-lg overflow-hidden shadow-lg aspect-w-4 aspect-h-3 md:order-2">
            {renovationImage && (
                <Image
                    src={renovationImage.imageUrl}
                    alt={renovationImage.description}
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover"
                    data-ai-hint={renovationImage.imageHint}
                />
            )}
          </div>
          <div className="md:order-1">
            <Hammer className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              Professional Renovation & Installation
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              We provide end-to-end renovation solutions. Our skilled tradespeople handle everything from electrical and plumbing to structural changes and final finishes, ensuring your project is completed to the highest standards.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /> Full Home & Office Renovations</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /> Electrical & Plumbing Installation</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /> Project Management & Supervision</li>
            </ul>
            <Button size="lg" asChild>
              <Link href="/design-renovation#renovation">
                Explore Renovations <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Weriton Enterprises?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    We're committed to building lasting relationships with our clients by providing unparalleled service, quality, and value.
                </p>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
                {whyUsPoints.map((point) => (
                    <Card key={point.title} className="text-center border-0 shadow-none">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                <point.icon className="w-8 h-8"/>
                            </div>
                            <CardTitle className="font-headline">{point.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{point.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg">
                    <Link href="/why-us">Learn More About Us</Link>
                </Button>
            </div>
        </div>
      </section>

       <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
            <div className="container">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Start Your Project?</h2>
                <p className="mt-4 text-lg max-w-2xl mx-auto mb-8">
                    Whether you're a homeowner planning a DIY project, a contractor stocking up for a job, or a developer planning a new build, we have the solutions you need.
                </p>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/quote-request">
                        Get a Quote Today <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </section>
    </div>
  );
}

    