import type { Product, Category, BlogPost } from '@/lib/types';
import { BrickWall, Wrench, Sprout } from 'lucide-react';

export const categories: Category[] = [
  { id: 'bricks', name: 'Bricks & Masonry', icon: BrickWall },
  { id: 'tools', name: 'Tools & Equipment', icon: Wrench },
  { id: 'landscaping', name: 'Landscaping', icon: Sprout },
];

export const products: Product[] = [
  {
    id: 'red-bricks',
    name: 'Classic Red Bricks',
    description: 'High-quality clay bricks for all general construction needs. Durable and weather-resistant.',
    category: 'bricks',
    priceRange: '$0.50 - $0.75 / brick',
    imageId: 'product-bricks',
  },
  {
    id: 'cement-mix',
    name: 'All-Purpose Cement Mix',
    description: 'Just add water for a strong, durable concrete. Ideal for setting posts, and creating slabs.',
    category: 'bricks',
    priceRange: '$10 - $15 / bag',
    imageId: 'product-cement',
  },
  {
    id: 'hammer',
    name: '20oz Claw Hammer',
    description: 'A 20oz forged steel claw hammer with a shock-absorbing grip, perfect for general purpose use.',
    category: 'tools',
    priceRange: '$25 - $40',
    imageId: 'product-tools',
  },
  {
    id: 'pine-lumber',
    name: 'Pine Lumber 2x4 (8ft)',
    description: 'Standard dimensional lumber for framing and various construction projects. Pressure-treated for longevity.',
    category: 'landscaping',
    priceRange: '$5 - $8 / board',
    imageId: 'product-lumber',
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'choosing-the-right-foundation',
    title: 'Choosing the Right Foundation for Your Project',
    excerpt: 'A solid foundation is crucial. Learn about the different types like slab-on-grade, crawlspace, and basement foundations to decide what\'s best for your build.',
    content: '<p>A solid foundation is the most critical part of any construction project. It supports the entire structure, and a mistake here can be catastrophic. There are several types of foundations to choose from, each with its own pros and cons.</p><h3>Slab-on-Grade</h3><p>This is one of the most common types. It involves pouring a concrete slab directly on the ground. It\'s relatively inexpensive and quick to install, but offers no extra space like a basement.</p><h3>Crawlspace</h3><p>A crawlspace foundation raises the house off the ground, creating a small space underneath. This is useful for running plumbing and electrical lines, but can be prone to moisture issues if not properly ventilated.</p>',
    imageId: 'blog-foundation',
    author: 'Weriton Costa',
    date: '2024-05-15',
  },
  {
    slug: 'essential-framing-tips',
    title: '5 Essential Tips for Perfect Wood Framing',
    excerpt: 'From selecting the right lumber to ensuring everything is plumb and square, these essential tips will help you build a sturdy and reliable structure.',
    content: '<p>Wood framing is like creating the skeleton of a building. Precision is key. Here are five tips to keep in mind:</p><ol><li><strong>Start with a Square and Level Foundation:</strong> Your framing is only as good as what it sits on.</li><li><strong>Choose Quality Lumber:</strong> Avoid warped or cracked boards.</li><li><strong>Measure Twice, Cut Once:</strong> It\'s a classic for a reason.</li><li><strong>Use the Right Fasteners:</strong> Ensure your nails or screws are rated for structural work.</li><li><strong>Brace Your Walls:</strong> Temporary bracing is essential until the structure is fully sheathed and stable.</li></ol>',
    imageId: 'blog-framing',
    author: 'Jane Doe',
    date: '2024-05-10',
  },
];
