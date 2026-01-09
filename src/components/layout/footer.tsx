import Link from 'next/link';
import { HardHat } from 'lucide-react';
import { categories } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-12 text-secondary-foreground">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4 col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <HardHat className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline">Weriton Hub</span>
            </Link>
            <p className="text-sm text-muted-foreground">Your one-stop shop for building materials.</p>
          </div>
          <div>
            <h3 className="font-semibold font-headline mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Knowledge Hub</Link></li>
              <li><Link href="/contractors" className="text-muted-foreground hover:text-primary transition-colors">Contractor Portal</Link></li>
              <li><Link href="/quote-request" className="text-muted-foreground hover:text-primary transition-colors">Request a Quote</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold font-headline mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              {categories.map(cat => (
                 <li key={cat.id}><Link href={`/products?category=${cat.id}`} className="text-muted-foreground hover:text-primary transition-colors">{cat.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold font-headline mb-4">Contact Us</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>123 Construction Ave, Builderville, ST 12345</p>
              <p>Email: <a href="mailto:sales@weritonhub.com" className="hover:text-primary transition-colors">sales@weritonhub.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="hover:text-primary transition-colors">(123) 456-7890</a></p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Weriton Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
