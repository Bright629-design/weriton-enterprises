import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find(p => p.id === post.imageId);
  const authorInitials = post.author.split(' ').map(n => n[0]).join('');

  return (
    <article className="max-w-4xl mx-auto">
        <div className="mb-8">
            <Button variant="outline" asChild>
                <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Link>
            </Button>
        </div>
      <header className="mb-8">
        <h1 className="text-3xl md:text-5xl font-headline font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border">
                    <AvatarFallback>{authorInitials}</AvatarFallback>
                </Avatar>
                <span>{post.author}</span>
            </div>
            <span>&bull;</span>
            <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
        </div>
      </header>
      {postImage && (
        <div className="relative aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
          <Image
            src={postImage.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            data-ai-hint={postImage.imageHint}
            priority
          />
        </div>
      )}
      <div
        className="prose dark:prose-invert max-w-none text-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
