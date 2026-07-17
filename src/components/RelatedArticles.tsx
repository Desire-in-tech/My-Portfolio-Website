import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../data/blogPosts';
import { getExcerpt } from '../lib/blog';
import CloudinaryImage from './CloudinaryImage';

interface RelatedArticlesProps {
  posts: BlogPost[];
}

export default function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (posts.length === 0) return null;
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="group bg-card rounded-xl overflow-hidden hover:ring-1 hover:ring-primary-accent/50 transition-all"
          >
            <div className="aspect-video overflow-hidden">
              <CloudinaryImage
                src={post.featuredImage}
                alt={post.imageAlt}
                aspectClass="w-full h-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <span className="text-xs text-primary-accent font-medium">{post.category}</span>
              <h3 className="text-base font-semibold text-white mt-2 group-hover:text-primary-accent transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-muted text-sm mt-1 line-clamp-2">{getExcerpt(post)}</p>
              <span className="inline-flex items-center gap-1 text-primary-accent text-sm mt-3">
                Read <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
