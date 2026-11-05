import BlogCard from './BlogCard';

interface BlogGridPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  publishDate: string;
  readingTime: string;
  excerpt?: string;
  displayExcerpt: string;
  featuredImage: string;
  imageAlt: string;
}

interface BlogGridProps {
  posts: BlogGridPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted">No articles found.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, i) => (
        <BlogCard key={post.id} post={post} index={i} />
      ))}
    </div>
  );
}
