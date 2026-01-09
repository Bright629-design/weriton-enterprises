import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, HardHat, Lightbulb, Users, Warehouse } from 'lucide-react';
import { products, blogPosts } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { BlogPostCard } from '@/components/blog-post-card';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
  const contractorImage = PlaceHolderImages.find(p => p.id === 'contractor-banner');
  const innovationImage = PlaceHolderImages.find(p => p.id === 'innovation-banner');

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl p-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-md">
            Build with Confidence. Build with Weriton.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
            Your trusted partner for high-quality building materials, from foundation to finish.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/products">
                Browse Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/quote-request">Request a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-2">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            A selection of our most popular materials and tools to get your project started.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <HardHat className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              For Contractors & Bulk Buyers
            </h2>
            <p className="text-muted-foreground mb-6">
              Get access to exclusive pricing, dedicated support, and credit terms to keep your projects on track and under budget.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /> Special Contractor Pricing</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /> Bulk Order Discounts</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /> Flexible Credit Terms</li>
            </ul>
            <Button size="lg" asChild>
              <Link href="/contractors">
                Contractor Portal <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg aspect-w-4 aspect-h-3">
            {contractorImage && (
                <Image
                    src={contractorImage.imageUrl}
                    alt={contractorImage.description}
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover"
                    data-ai-hint={contractorImage.imageHint}
                />
            )}
          </div>
        </div>
      </section>
      
        <section className="py-16 md:py-24 bg-background">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <Warehouse className="h-12 w-12 text-primary mb-4 mx-auto" />
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Comprehensive Services</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        More than just a supplier, we are your project partner. We offer a range of services to ensure your project's success from start to finish.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    <div className="p-6">
                        <h3 className="text-xl font-headline font-semibold mb-2">Material Consultation</h3>
                        <p className="text-muted-foreground">Our experts help you select the perfect materials for your project's needs and budget.</p>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-headline font-semibold mb-2">On-Site Delivery</h3>
                        <p className="text-muted-foreground">Fast, reliable, and on-time delivery right to your job site, keeping your project on schedule.</p>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-headline font-semibold mb-2">Project Quoting</h3>
                        <p className="text-muted-foreground">Get detailed and competitive quotes for your entire bill of materials, saving you time and money.</p>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <Button asChild>
                        <Link href="/service">Learn More About Our Services</Link>
                    </Button>
                </div>
            </div>
        </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
           <div className="rounded-lg overflow-hidden shadow-lg aspect-w-4 aspect-h-3">
            {innovationImage && (
                <Image
                    src={innovationImage.imageUrl}
                    alt={innovationImage.description}
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover"
                    data-ai-hint={innovationImage.imageHint}
                />
            )}
          </div>
          <div>
            <Lightbulb className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              Innovation in Construction
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              We are constantly researching and developing new materials and technologies to make construction more efficient, sustainable, and cost-effective.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /> Sustainable & Green Materials</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /> AI-Powered Logistics</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /> Advanced Building Systems</li>
            </ul>
            <Button size="lg" asChild>
              <Link href="/innovation">
                Explore Our Innovations <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              From Our Knowledge Hub
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert advice, material guides, and building tips to help you succeed.
            </p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map(post => (
                    <BlogPostCard key={post.slug} post={post} />
                ))}
            </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog">
                Explore All Articles
              </Link>
            </Button>
          </div>
        </div>
      </section>

       <section className="py-16 md:py-24 bg-secondary text-center">
            <div className="container">
                <Users className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Join Our Community</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    Connect with other builders, attend workshops, and share your work. The Weriton Hub community is a place to learn, grow, and collaborate.
                </p>
                <Button size="lg" asChild>
                    <Link href="/community">
                        Become a Member <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </section>
    </div>
  );
}
