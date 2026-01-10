import { products, categories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageSquare, Plus } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  const productImage = PlaceHolderImages.find(p => p.id === product.imageId);
  const category = categories.find(c => c.id === product.category);

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/hardware">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
          {productImage && (
            <Image
              src={productImage.imageUrl.replace('/600/400', '/800/800')}
              alt={product.name}
              fill
              className="object-cover"
              data-ai-hint={productImage.imageHint}
            />
          )}
        </div>
        <div>
          {category && (
            <Link href={`/hardware#${category.id}`}>
              <Badge variant="secondary" className="mb-2">{category.name}</Badge>
            </Link>
          )}
          <h1 className="text-3xl md:text-4xl font-headline font-bold mb-4">{product.name}</h1>
          {product.priceRange && (
            <p className="text-2xl font-semibold text-primary mb-4">{product.priceRange}</p>
          )}
          <p className="text-lg text-muted-foreground mb-6">{product.description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/quote-request">
                <Plus className="mr-2 h-5 w-5" />
                Add to Quote
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
                <a href={`https://wa.me/1234567890?text=I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}`} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Ask on WhatsApp
                </a>
            </Button>
          </div>
          <div className="mt-8 border-t pt-6">
            <h3 className="font-semibold font-headline mb-2">Product Details</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>SKU: PROD-{product.id.toUpperCase()}</li>
                <li>Category: {category?.name || 'N/A'}</li>
                <li>Availability: In Stock</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
