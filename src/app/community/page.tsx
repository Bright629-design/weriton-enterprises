import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const events = [
    {
        title: 'Annual Design Conference',
        date: 'October 15-17, 2024',
        location: 'Downtown Convention Center',
        description: 'Join us for three days of networking, workshops, and keynote speeches from industry leaders in design.',
        imageId: 'community-conference'
    },
    {
        title: 'DIY Upholstery Workshop',
        date: 'September 21, 2024',
        location: 'Weriton Enterprises - Showroom #3',
        description: 'Learn the fundamentals of upholstery from our in-house experts. All skill levels welcome.',
        imageId: 'community-workshop'
    },
    {
        title: 'Designer Networking Night',
        date: 'September 5, 2024',
        location: 'The Rooftop Bar & Grill',
        description: 'An exclusive evening for our trade partners to connect, share insights, and enjoy complimentary food and drinks.',
        imageId: 'community-networking'
    }
]

export default function CommunityPage() {
    return (
        <div className="bg-background">
             <div className="container py-12 md:py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold">Weriton Community Hub</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                       Connecting designers, makers, and dreamers. Join our events, workshops, and forums.
                    </p>
                </div>

                <section id="events">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-8">Upcoming Events & Workshops</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map(event => {
                            const eventImage = PlaceHolderImages.find(p => p.id === event.imageId);
                            return (
                                <Card key={event.title} className="flex flex-col">
                                    {eventImage && (
                                        <Image src={eventImage.imageUrl} alt={event.title} width={600} height={400} className="rounded-t-lg object-cover aspect-video" data-ai-hint={eventImage.imageHint}/>
                                    )}
                                    <CardHeader>
                                        <CardTitle>{event.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow space-y-4">
                                        <div className="flex items-center text-muted-foreground text-sm">
                                            <Calendar className="mr-2 h-4 w-4" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center text-muted-foreground text-sm">
                                            <MapPin className="mr-2 h-4 w-4" />
                                            <span>{event.location}</span>
                                        </div>
                                        <p className="text-muted-foreground">{event.description}</p>
                                    </CardContent>
                                    <div className="p-6 pt-0">
                                        <Button>Register Now</Button>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                </section>

                <section id="forum" className="mt-16 md:mt-24 text-center bg-secondary py-16 rounded-lg">
                     <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                     <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Join the Conversation</h2>
                     <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        Have a design dilemma? Want to share your latest project? Our online forum is the perfect place to connect with fellow designers and get expert advice.
                    </p>
                    <Button size="lg">
                        Visit the Community Forum <ArrowRight className="ml-2 h-5 w-5"/>
                    </Button>
                </section>

                <section id="spotlight" className="mt-16 md:mt-24">
                     <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8">Community Spotlight</h2>
                     <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="aspect-video rounded-lg overflow-hidden">
                            <Image src="https://picsum.photos/seed/spotlight/800/600" alt="Community Project" width={800} height={600} className="object-cover" data-ai-hint="beautiful living room"/>
                        </div>
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <Avatar className="h-16 w-16">
                                    <AvatarImage src="https://picsum.photos/seed/avatar1/100" alt="Avatar"/>
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4 className="font-bold">Jane Doe Interiors</h4>
                                    <p className="text-sm text-muted-foreground">Featured Project: "The Hillside Modern"</p>
                                </div>
                            </div>
                             <p className="text-muted-foreground mb-4">"We couldn't have completed our award-winning 'Hillside Modern' project without the quality pieces and timely delivery from Weriton Enterprises. Their trade program is second to none, and their team always goes the extra mile."</p>
                             <Link href="/projects/hillside-modern">
                                <Button variant="outline">View Project Case Study</Button>
                             </Link>
                        </div>
                     </div>
                </section>

            </div>
        </div>
    )
}
