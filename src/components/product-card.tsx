import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { categories } from '@/lib/data';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const productImage = PlaceHolderImages.find(p => p.id === product.imageId);
  const category = categories.find(c => c.id === product.category);

  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link href={`/products/${product.id}`} className="flex flex-col h-full group bg-card">
        <div className="relative overflow-hidden">
          {productImage && (
            <Image
              src={productImage.imageUrl}
              alt={product.name}
              width={600}
              height={400}
              className="object-cover aspect-[4/3] w-full group-hover:scale-105 transition-transform duration-300"
              data-ai-hint={productImage.imageHint}
            />
          )}
        </div>
        <CardHeader className="p-4">
          {category && <Badge variant="secondary" className="w-fit mb-2">{category.name}</Badge>}
          <CardTitle className="text-lg font-headline line-clamp-2 h-[2.5em]">{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {product.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 mt-auto">
          {product.priceRange ? (
            <p className="font-semibold text-base text-primary">{product.priceRange}</p>
          ) : (
            <p className="text-sm text-muted-foreground">Price on request</p>
          )}
        </CardFooter>
      </Link>
    </Card>
  );
}
