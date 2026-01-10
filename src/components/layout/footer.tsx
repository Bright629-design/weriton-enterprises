import Link from 'next/link';
import { Construction } from 'lucide-react';
import { categories } from '@/lib/data';

const mainLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/hardware', label: 'Hardware & Supplies' },
    { href: '/finishing-security', label: 'Finishing & Security' },
    { href: '/design-renovation', label: 'Design & Renovation' },
    { href: '/projects', label: 'Projects' },
]

const companyLinks = [
     { href: '/why-us', label: 'Why Choose Us' },
     { href: '/testimonials', label: 'Testimonials' },
     { href: '/blog', label: 'Blog / Insights' },
     { href: '/faq', label: 'FAQs' },
     { href: '/contact', label: 'Contact Us' },
]

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-12 text-secondary-foreground">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="flex flex-col space-y-4 col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Construction className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline">Weriton Enterprises</span>
            </Link>
            <p className="text-sm text-muted-foreground">Quality materials, professional tools, and innovative design under one roof.</p>
             <address className="not-italic text-sm text-muted-foreground space-y-1">
              <p>123 Build Well Rd, Constructville, ST 12345</p>
              <p>Email: <a href="mailto:sales@weritonenterprises.com" className="hover:text-primary transition-colors">sales@weritonenterprises.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="hover:text-primary transition-colors">(123) 456-7890</a></p>
            </address>
          </div>
          <div>
            <h3 className="font-semibold font-headline mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
                {mainLinks.map(link => (
                    <li key={link.href}><Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
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
            <h3 className="font-semibold font-headline mb-4">Our Offerings</h3>
            <ul className="space-y-2 text-sm columns-2">
              <li><Link href="/hardware#materials" className="text-muted-foreground hover:text-primary transition-colors">Construction Materials</Link></li>
              <li><Link href="/hardware#electrical" className="text-muted-foreground hover:text-primary transition-colors">Electrical Supplies</Link></li>
              <li><Link href="/hardware#plumbing" className="text-muted-foreground hover:text-primary transition-colors">Plumbing & Sanitary</Link></li>
              <li><Link href="/hardware#tools" className="text-muted-foreground hover:text-primary transition-colors">Tools & Equipment</Link></li>
              <li><Link href="/finishing-security#finishing" className="text-muted-foreground hover:text-primary transition-colors">Finishing Materials</Link></li>
              <li><Link href="/finishing-security#security" className="text-muted-foreground hover:text-primary transition-colors">Security & Safety</Link></li>
              <li><Link href="/design-renovation#design" className="text-muted-foreground hover:text-primary transition-colors">Interior & Exterior Design</Link></li>
              <li><Link href="/design-renovation#renovation" className="text-muted-foreground hover:text-primary transition-colors">Renovation Services</Link></li>
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
