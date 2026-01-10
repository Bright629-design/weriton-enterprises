import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Construction, Menu, ChevronDown, Wrench, PaintBucket, ShieldCheck, DraftingCompass, Hammer } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';

const hardwareLinks = [
    { href: '/hardware#materials', label: 'Construction Materials', icon: Construction },
    { href: '/hardware#electrical', label: 'Electrical Supplies', icon: Wrench },
    { href: '/hardware#plumbing', label: 'Plumbing & Sanitary', icon: Wrench },
    { href: '/hardware#tools', label: 'Tools & Equipment', icon: Wrench },
];

const finishingLinks = [
    { href: '/finishing-security#finishing', label: 'Finishing Materials', icon: PaintBucket },
    { href: '/finishing-security#security', label: 'Security & Safety', icon: ShieldCheck },
]

const designLinks = [
    { href: '/design-renovation#design', label: 'Design Services', icon: DraftingCompass },
    { href: '/design-renovation#renovation', label: 'Renovation & Installation', icon: Hammer },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Construction className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Weriton Enterprises</span>
          </Link>
          <nav className="flex items-center space-x-1 text-sm font-medium">
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1 text-foreground/60 hover:text-primary">
                      Hardware & Supplies
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {hardwareLinks.map(subLink => (
                        <DropdownMenuItem key={subLink.href} asChild>
                            <Link href={subLink.href}><subLink.icon className="mr-2 h-4 w-4"/>{subLink.label}</Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" asChild>
                <Link href="/finishing-security" className="text-foreground/60 hover:text-primary">Finishing & Security</Link>
            </Button>
            
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1 text-foreground/60 hover:text-primary">
                      Design & Renovation
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {designLinks.map(subLink => (
                        <DropdownMenuItem key={subLink.href} asChild>
                            <Link href={subLink.href}><subLink.icon className="mr-2 h-4 w-4"/>{subLink.label}</Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" asChild>
                <Link href="/projects" className="text-foreground/60 hover:text-primary">Projects</Link>
            </Button>
             <Button variant="ghost" asChild>
                <Link href="/blog" className="text-foreground/60 hover:text-primary">Blog</Link>
            </Button>
             <Button variant="ghost" asChild>
                <Link href="/about" className="text-foreground/60 hover:text-primary">About</Link>
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
                <Construction className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline text-lg">Weriton Enterprises</span>
              </Link>
              <nav className="grid gap-4">
                <div>
                  <h4 className="font-semibold text-muted-foreground px-3 mb-2">Hardware & Supplies</h4>
                  {hardwareLinks.map(link => (
                    <Link key={link.href} href={link.href} className="flex items-center py-2 px-3 text-base font-medium text-muted-foreground hover:text-foreground">
                      {link.label}
                    </Link>
                  ))}
                </div>
                 <div>
                  <h4 className="font-semibold text-muted-foreground px-3 mb-2">Finishing & Security</h4>
                  {finishingLinks.map(link => (
                    <Link key={link.href} href={link.href} className="flex items-center py-2 px-3 text-base font-medium text-muted-foreground hover:text-foreground">
                      {link.label}
                    </Link>
                  ))}
                </div>
                 <div>
                  <h4 className="font-semibold text-muted-foreground px-3 mb-2">Design & Renovation</h4>
                  {designLinks.map(link => (
                    <Link key={link.href} href={link.href} className="flex items-center py-2 px-3 text-base font-medium text-muted-foreground hover:text-foreground">
                      {link.label}
                    </Link>
                  ))}
                </div>
                <Link href="/projects" className="flex items-center py-2 px-3 text-lg font-medium text-muted-foreground hover:text-foreground">Projects</Link>
                <Link href="/blog" className="flex items-center py-2 px-3 text-lg font-medium text-muted-foreground hover:text-foreground">Blog</Link>
                <Link href="/about" className="flex items-center py-2 px-3 text-lg font-medium text-muted-foreground hover:text-foreground">About</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-center md:justify-end space-x-2">
           <Link href="/" className="flex items-center space-x-2 md:hidden">
            <Construction className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Weriton Enterprises</span>
          </Link>
        </div>

        <div className="flex items-center justify-end space-x-2">
           <Button asChild>
            <Link href="/quote-request">Request a Quote</Link>
          </Button>
           <Button variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
