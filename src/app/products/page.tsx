import { ProductCard } from '@/components/product-card';
import { products, categories } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ProductsPage() {
  // In a real app, this would be a server component fetching and filtering data based on search params
  const allProducts = products;

  return (
    <div className="bg-background">
      <div className="container py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Products</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of high-quality building materials, tools, and supplies.
          </p>
        </div>
        <div className="sticky top-16 z-40 bg-background/95 py-4 backdrop-blur-sm mb-8">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search for products by name..." className="pl-10" />
                </div>
                <Select>
                <SelectTrigger className="w-full md:w-[240px]">
                    <SelectValue placeholder="Filter by Category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                    ))}
                </SelectContent>
                </Select>
                <Button className="w-full md:w-auto">
                    <Search className="h-4 w-4 md:hidden mr-2" />
                    Search
                </Button>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
