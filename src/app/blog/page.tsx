import { blogPosts } from '@/lib/data';
import { BlogPostCard } from '@/components/blog-post-card';

export default function BlogPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map(post => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
