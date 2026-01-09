import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HardHat, Menu, MessageCircle, ShoppingCart } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/service', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { 
    href: '#', 
    label: 'Community',
    subLinks: [
      { href: '/community', label: 'Community Hub' },
      { href: '/blog', label: 'Knowledge Hub' },
    ]
  },
  { 
    href: '#', 
    label: 'Company',
    subLinks: [
        { href: '/innovation', label: 'Innovation' },
        { href: '/brands', label: 'Our Brands' },
        { href: '/contact', label: 'Contact Us' },
    ]
  },
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
          <nav className="flex items-center space-x-1 text-sm font-medium">
            {navLinks.map((link) => (
              link.subLinks ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1 text-foreground/60 hover:text-primary">
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.subLinks.map(subLink => (
                        <DropdownMenuItem key={subLink.href} asChild>
                            <Link href={subLink.href}>{subLink.label}</Link>
                        </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button key={link.href} variant="ghost" asChild>
                  <Link href={link.href} className="text-foreground/60 hover:text-primary">{link.label}</Link>
                </Button>
              )
            ))}
             <Button variant="ghost" asChild>
                <Link href="/3d-store" className="text-foreground/60 hover:text-primary">3D Store</Link>
             </Button>
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
              <nav className="grid gap-2">
                {navLinks.map((link) => {
                  if (link.subLinks) {
                    return (
                      <div key={link.label} className="grid gap-2 px-3">
                        <h4 className="font-semibold text-muted-foreground">{link.label}</h4>
                        {link.subLinks.map(subLink => (
                           <Link
                            key={subLink.href}
                            href={subLink.href}
                            className="flex items-center py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )
                  }
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center py-2 px-3 text-lg font-medium text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <Link href="/3d-store" className="flex items-center py-2 px-3 text-lg font-medium text-muted-foreground hover:text-foreground">3D Store</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-center md:justify-end space-x-2">
           <Link href="/" className="flex items-center space-x-2 md:hidden">
            <HardHat className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Weriton Hub</span>
          </Link>
        </div>

        <div className="flex items-center justify-end space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/3d-store">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">3D Store</span>
            </Link>
          </Button>
          <Button asChild>
            <Link href="/quote-request">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
