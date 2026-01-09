import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

type BlogPostCardProps = {
  post: BlogPost;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  const postImage = PlaceHolderImages.find(p => p.id === post.imageId);
  const authorInitials = post.author.split(' ').map(n => n[0]).join('');

  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full group bg-card">
        {postImage && (
          <div className="relative overflow-hidden">
            <Image
              src={postImage.imageUrl}
              alt={post.title}
              width={800}
              height={600}
              className="object-cover aspect-video w-full group-hover:scale-105 transition-transform duration-300"
              data-ai-hint={postImage.imageHint}
            />
          </div>
        )}
        <CardHeader className="p-6">
          <CardTitle className="text-xl font-headline line-clamp-2 h-[2.75em]">{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0 flex-grow">
          <CardDescription className="text-base line-clamp-3">
            {post.excerpt}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-6 pt-0 mt-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border">
                    <AvatarFallback>{authorInitials}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold text-sm">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
            </div>
            <div className="text-primary flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                Read More <ArrowRight className="ml-2 h-4 w-4"/>
            </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
