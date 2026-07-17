import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../data/blogPosts';
import { formatDate, getReadingTime, getExcerpt } from '../lib/blog';
import CloudinaryImage from './CloudinaryImage';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-card rounded-xl overflow-hidden hover:ring-1 hover:ring-primary-accent/50 transition-all duration-300 flex flex-col"
    >
      <Link to={`/blog/${post.slug}`} className="block aspect-video overflow-hidden">
        <CloudinaryImage
          src={post.featuredImage}
          alt={post.imageAlt}
          aspectClass="w-full h-full"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3 text-xs text-muted">
          <span className="px-2 py-1 bg-primary-accent/10 text-primary-accent rounded font-medium">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {formatDate(post.publishDate)}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readingTime ?? getReadingTime(post.content)}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-accent transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-muted text-sm mb-4 line-clamp-3 flex-1">{getExcerpt(post)}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-primary-accent text-sm font-medium hover:gap-2 transition-all"
        >
          Read More <ArrowRight size={14} />
        </Link>
      </div>
    </motion.article>
  );
}
