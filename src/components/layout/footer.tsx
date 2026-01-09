import Link from 'next/link';
import { Sofa } from 'lucide-react';
import { categories } from '@/lib/data';

const mainLinks = [
    { href: '/products', label: 'Products' },
    { href: '/service', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Knowledge Hub' },
]

const companyLinks = [
     { href: '/about', label: 'About Us' },
     { href: '/community', label: 'Community' },
     { href: '/innovation', label: 'Innovation' },
     { href: '/brands', label: 'Brands' },
     { href: '/contact', label: 'Contact Us' },
]

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-12 text-secondary-foreground">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="flex flex-col space-y-4 col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Sofa className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline">Weriton Enterprises</span>
            </Link>
            <p className="text-sm text-muted-foreground">Design, Delight, Deliver.</p>
             <address className="not-italic text-sm text-muted-foreground space-y-1">
              <p>123 Design Ave, Builderville, ST 12345</p>
              <p>Email: <a href="mailto:sales@weritonenterprises.com" className="hover:text-primary transition-colors">sales@weritonenterprises.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="hover:text-primary transition-colors">(123) 456-7890</a></p>
            </address>
          </div>
          <div>
            <h3 className="font-semibold font-headline mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
                {mainLinks.map(link => (
                    <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
                 <li><Link href="/3d-store" className="text-muted-foreground hover:text-primary transition-colors">3D Store</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="font-semibold font-headline mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
                 {companyLinks.map(link => (
                    <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="font-semibold font-headline mb-4">Product Categories</h3>
            <ul className="space-y-2 text-sm columns-2">
              {categories.map(cat => (
                 <li key={cat.id}><Link href={`/products?category=${cat.id}`} className="text-muted-foreground hover:text-primary transition-colors">{cat.name}</Link></li>
              ))}
               <li><Link href={`/products?category=structural`} className="text-muted-foreground hover:text-primary transition-colors">Structural</Link></li>
                <li><Link href={`/products?category=plumbing`} className="text-muted-foreground hover:text-primary transition-colors">Plumbing</Link></li>
                 <li><Link href={`/products?category=electrical`} className="text-muted-foreground hover:text-primary transition-colors">Electrical</Link></li>
                  <li><Link href={`/products?category=finishes`} className="text-muted-foreground hover:text-primary transition-colors">Finishes</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Weriton Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
