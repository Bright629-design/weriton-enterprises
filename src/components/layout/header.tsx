import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HardHat, Menu, MessageCircle } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/blog', label: 'Knowledge Hub' },
  { href: '/contractors', label: 'Contractors' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <HardHat className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Weriton Hub</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-primary text-foreground/60"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                <HardHat className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline text-lg">Weriton Hub</span>
              </Link>
              <nav className="grid gap-4">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center py-2 text-lg font-medium text-muted-foreground hover:text-foreground"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <a href="https://wa.me/1234567890?text=I'd%20like%20to%20place%20an%20order" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Order
            </a>
          </Button>
          <Button asChild>
            <Link href="/quote-request">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
