export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  priceRange?: string;
  imageId: string;
};

export type Category = {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageId: string;
  author: string;
  date: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageId: string;
  beforeImageId?: string;
  afterImageId?: string;
};
