import type { Product, Category, BlogPost } from '@/lib/types';
import { Armchair, Lamp, Sofa } from 'lucide-react';

export const categories: Category[] = [
  { id: 'seating', name: 'Seating', icon: Sofa },
  { id: 'tables', name: 'Tables & Desks', icon: Armchair },
  { id: 'lighting', name: 'Lighting', icon: Lamp },
];

export const products: Product[] = [
  {
    id: 'velvet-sofa',
    name: 'Emerald Velvet Sofa',
    description: 'A luxurious and comfortable sofa upholstered in rich emerald green velvet. A perfect centerpiece.',
    category: 'seating',
    priceRange: '$1,800 - $2,200',
    imageId: 'product-sofa',
  },
  {
    id: 'marble-coffee-table',
    name: 'Marble & Brass Coffee Table',
    description: 'An elegant circular coffee table with a solid marble top and a brushed brass frame.',
    category: 'tables',
    priceRange: '$600 - $850',
    imageId: 'product-table',
  },
  {
    id: 'arc-floor-lamp',
    name: 'Modern Arc Floor Lamp',
    description: 'A sleek and minimalist floor lamp with a heavy marble base and a sweeping arc. Provides great overhead light.',
    category: 'lighting',
    priceRange: '$350 - $500',
    imageId: 'product-lamp',
  },
  {
    id: 'leather-armchair',
    name: 'Cognac Leather Armchair',
    description: 'A timeless armchair in top-grain cognac leather. Develops a beautiful patina over time.',
    category: 'seating',
    priceRange: '$1,200 - $1,500',
    imageId: 'product-armchair',
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'choosing-the-right-sofa',
    title: 'How to Choose the Right Sofa for Your Space',
    excerpt: 'A sofa is a big investment. Learn about different styles, sizes, and materials to find the perfect one for your home and lifestyle.',
    content: '<p>A sofa is often the largest and most-used piece of furniture in a living room, so it\'s important to choose wisely. Here are a few things to consider:</p><h3>Size & Scale</h3><p>Measure your space carefully. A giant sectional might look great in a showroom, but will it overwhelm your room? Use painter\'s tape on the floor to map out the footprint of a potential sofa.</p><h3>Material & Durability</h3><p>Consider your lifestyle. Do you have pets or kids? A durable performance fabric or leather might be a better choice than delicate velvet. Always ask for a fabric swatch to see how it looks in your home\'s lighting.</p>',
    imageId: 'blog-sofa-selection',
    author: 'Weriton Costa',
    date: '2024-05-15',
  },
  {
    slug: 'essential-lighting-tips',
    title: '5 Essential Tips for Perfect Home Lighting',
    excerpt: 'From creating ambiance to providing functional task lighting, these essential tips will help you illuminate your home like a professional designer.',
    content: '<p>Good lighting can completely transform a room. It\'s not just about being able to see; it\'s about creating a mood. Here are five tips to keep in mind:</p><ol><li><strong>Layer Your Lighting:</strong> Every room should have three types of lighting: ambient (overall), task (for activities), and accent (to highlight features).</li><li><strong>Use Dimmers Everywhere:</strong> Dimmers give you ultimate control over the ambiance.</li><li><strong>Pay Attention to Color Temperature:</strong> Warm light (around 2700K) is cozy and inviting, while cooler light (3000K+) is better for task areas.</li><li><strong>Don\'t Forget the Walls:</strong> Wall sconces can add a beautiful glow and make a room feel larger.</li><li><strong>Think Like a Designer:</strong> A statement fixture, like a chandelier or a sculptural floor lamp, can act as functional art.</li></ol>',
    imageId: 'blog-lighting',
    author: 'Jane Doe',
    date: '2024-05-10',
  },
];
