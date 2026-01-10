import type { Product, Category, BlogPost, Project } from '@/lib/types';
import { Wrench, PaintBucket, HardHat, Hammer, Construction } from 'lucide-react';

export const categories: Category[] = [
  { id: 'materials', name: 'Construction Materials', icon: Construction },
  { id: 'tools', name: 'Tools & Equipment', icon: Wrench },
  { id: 'finishing', name: 'Finishing & Decoration', icon: PaintBucket },
  { id: 'safety', name: 'Safety & Security', icon: HardHat },
  { id: 'services', name: 'Services', icon: Hammer },
];

export const products: Product[] = [
  {
    id: 'power-drill-kit',
    name: '20V MAX Cordless Drill Kit',
    description: 'High-performance cordless drill with two batteries, charger, and carrying case. Ideal for both professional and DIY projects.',
    category: 'tools',
    priceRange: '$129.99',
    imageId: 'product-drill',
  },
  {
    id: 'premium-interior-paint',
    name: 'Premium Interior Latex Paint',
    description: 'One-coat coverage paint and primer in one. Available in over 1,000 colors with a durable, washable finish.',
    category: 'finishing',
    priceRange: '$45.99 / gallon',
    imageId: 'product-paint',
  },
  {
    id: 'heavy-duty-lumber',
    name: 'Pressure-Treated Lumber 2x4',
    description: '8-foot long pressure-treated lumber for outdoor construction projects. Resistant to rot, decay, and termites.',
    category: 'materials',
    priceRange: '$8.99 / board',
    imageId: 'product-lumber',
  },
  {
    id: 'smart-lock-deadbolt',
    name: 'WiFi Smart Lock Deadbolt',
    description: 'Keyless entry smart lock with built-in WiFi. Lock and unlock your door from anywhere using your smartphone.',
    category: 'safety',
    priceRange: '$249.00',
    imageId: 'product-lock',
  },
];

export const projects: Project[] = [
  {
    id: 'modern-kitchen-reno',
    title: 'Modern Kitchen Renovation',
    category: 'Residential',
    description: 'Complete gut renovation of a 1980s kitchen. We handled the design, material supply, and full installation, including custom cabinetry, electrical, and plumbing.',
    imageId: 'project-kitchen-after',
    beforeImageId: 'project-kitchen-before',
    afterImageId: 'project-kitchen-after'
  },
  {
    id: 'office-fit-out',
    title: 'Commercial Office Fit-Out',
    category: 'Commercial',
    description: 'Full interior fit-out for a 5,000 sq/ft tech startup office. Our scope included space planning, supplying all construction materials, and managing the build.',
    imageId: 'project-office-after',
    beforeImageId: 'project-office-before',
    afterImageId: 'project-office-after'
  },
  {
    id: 'bathroom-remodel',
    title: 'Luxury Bathroom Remodel',
    category: 'Residential',
    description: 'Transformation of a standard bathroom into a spa-like retreat, featuring a walk-in shower, freestanding tub, and high-end finishes.',
    imageId: 'project-bathroom-after',
    beforeImageId: 'project-bathroom-before',
    afterImageId: 'project-bathroom-after'
  },
   {
    id: 'exterior-facelift',
    title: 'Exterior Facade & Landscape',
    category: 'Exterior',
    description: 'Updated the exterior of a suburban home with new siding, paint, and a modern landscaping design for enhanced curb appeal.',
    imageId: 'project-exterior-after',
    beforeImageId: 'project-exterior-before',
    afterImageId: 'project-exterior-after'
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'choosing-the-right-power-tool',
    title: 'How to Choose the Right Power Tool for the Job',
    excerpt: 'Corded or cordless? Brushed or brushless? This guide breaks down what you need to know to make a smart purchase.',
    content: '<p>A good power tool is an investment that pays off in time saved and a job well done. But with so many options, how do you choose?</p><h3>Corded vs. Cordless</h3><p>Cordless tools offer incredible portability, but corded tools provide consistent power without worrying about battery life. For stationary work in a shop, corded is often best. For jobsites or quick tasks, cordless is king.</p><h3>Brushed vs. Brushless Motors</h3><p>Brushless motors are more efficient, run cooler, and have a longer lifespan than traditional brushed motors. They usually come at a higher price point, but are often worth the investment for tools you use frequently.</p>',
    imageId: 'blog-tools',
    author: 'Weriton Costa',
    date: '2024-05-15',
  },
  {
    slug: 'interior-design-trends-2024',
    title: 'Top 5 Interior Design Trends for Late 2024',
    excerpt: 'From sustainable materials to bold colors, discover the trends that are shaping the future of interior design and how to incorporate them.',
    content: '<p>As we move into the second half of the year, several design trends are standing out.</p><ol><li><strong>Biophilic Design:</strong> Bringing the outdoors in with natural materials like wood, stone, and plenty of plants.</li><li><strong>Bold Monochromatics:</strong> Using varying shades and tints of a single bold color for a dramatic, cohesive look.</li><li><strong>Sustainable Materials:</strong> An increasing focus on recycled, reclaimed, and eco-friendly materials for everything from flooring to furniture.</li><li><strong>Curved Lines:</strong> Soft, curved shapes are replacing hard-edged minimalism in furniture and architecture.</li><li><strong>Smart Technology Integration:</strong> Seamlessly integrating technology, like smart lighting and hidden speakers, into the design.</li></ol>',
    imageId: 'blog-design-trends',
    author: 'Jane Doe',
    date: '2024-05-10',
  },
];
