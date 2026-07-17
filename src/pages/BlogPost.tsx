import { useParams, Link, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight, User, CreditCard as Edit3 } from 'lucide-react';
import { blogPosts, getBlogPostBySlug, getSortedPosts } from '../data/blogPosts';
import type { BlogPost } from '../data/blogPosts';
import { getProjectBySlug } from '../data/projects';
import {
  AnimatedSection,
  TableOfContents,
  RelatedArticles,
  RelatedProjects,
  SocialShare,
} from '../components';
import { useSeo } from '../hooks/use-seo';
import { extractHeadings, renderMarkdown, formatDate } from '../lib/blog';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = slug ? getBlogPostBySlug(slug) : undefined;

  const headings = useMemo(() => (post ? extractHeadings(post.content) : []), [post]);
  const html = useMemo(() => (post ? renderMarkdown(post.content) : ''), [post]);

  const sorted = useMemo(() => getSortedPosts(), []);
  const index = post ? sorted.findIndex((p) => p.slug === post.slug) : -1;
  const prev = index > 0 ? sorted[index - 1] : undefined;
  const next = index >= 0 && index < sorted.length - 1 ? sorted[index + 1] : undefined;

  const relatedProject = post?.relatedProjectSlug
    ? getProjectBySlug(post.relatedProjectSlug)
    : undefined;

  const relatedArticles = useMemo<BlogPost[]>(() => {
    if (!post) return [];
    return blogPosts
      .filter((p) => p.slug !== post.slug && p.category === post.category)
      .slice(0, 3);
  }, [post]);

  useSeo({
    title: post?.metaTitle ?? post?.title ?? 'Article | Desire Eyotaru',
    description: post?.metaDescription ?? '',
    keywords: post?.targetKeywords,
    image: post?.featuredImage,
    type: 'article',
    publishedTime: post?.publishDate,
    modifiedTime: post?.updatedDate,
    author: post?.author,
    canonical: post ? `https://desireeyotaru.vercel.app/blog/${post.slug}` : undefined,
    articleSchema: post
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.metaDescription,
          image: post.featuredImage,
          datePublished: post.publishDate,
          dateModified: post.updatedDate ?? post.publishDate,
          author: { '@type': 'Person', name: post.author },
          publisher: { '@type': 'Person', name: 'Desire Eyotaru' },
          mainEntityOfPage: { '@type': 'WebPage', '@id': `https://desireeyotaru.vercel.app/blog/${post.slug}` },
        }
      : undefined,
  });

  if (!post) {
    return (
      <div className="min-h-screen bg-primary-bg pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Article not found</h1>
          <Link to="/blog" className="text-primary-accent hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-bg pt-20">
      <article className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-bg/30 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted hover:text-primary-accent transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-4 text-sm text-muted">
              <span className="px-2 py-1 bg-primary-accent/10 text-primary-accent rounded font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} /> {formatDate(post.publishDate)}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} /> {post.readingTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mb-8 text-sm text-muted">
              <span className="flex items-center gap-1">
                <User size={14} /> {post.author}
              </span>
              {post.updatedDate && (
                <span className="flex items-center gap-1">
                  <Edit3 size={14} /> Updated {formatDate(post.updatedDate)}
                </span>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-video rounded-2xl overflow-hidden bg-secondary-bg mb-8"
            >
              <img
                src={post.featuredImage}
                alt={post.imageAlt}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <SocialShare
              url={`https://desireeyotaru.vercel.app/blog/${post.slug}`}
              title={post.title}
            />
          </AnimatedSection>
        </div>
      </article>

      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12">
          <div
            className="prose prose-invert max-w-none blog-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <aside className="hidden lg:block">
            <TableOfContents headings={headings} />
          </aside>
        </div>
      </section>

      <section className="py-12 border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SocialShare
            url={`https://desireeyotaru.vercel.app/blog/${post.slug}`}
            title={post.title}
          />
        </div>
      </section>

      {relatedProject && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RelatedProjects projects={[relatedProject]} />
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedArticles posts={relatedArticles} />
        </div>
      </section>

      <section className="py-12 border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prev ? (
            <button
              onClick={() => navigate(`/blog/${prev.slug}`)}
              className="text-left p-5 bg-card rounded-xl border border-gray-800 hover:border-primary-accent/30 transition-colors"
            >
              <span className="flex items-center gap-2 text-xs text-muted mb-2">
                <ArrowLeft size={14} /> Previous
              </span>
              <span className="text-white font-medium">{prev.title}</span>
            </button>
          ) : (
            <div />
          )}
          {next ? (
            <button
              onClick={() => navigate(`/blog/${next.slug}`)}
              className="text-right p-5 bg-card rounded-xl border border-gray-800 hover:border-primary-accent/30 transition-colors"
            >
              <span className="flex items-center justify-end gap-2 text-xs text-muted mb-2">
                Next <ArrowRight size={14} />
              </span>
              <span className="text-white font-medium">{next.title}</span>
            </button>
          ) : (
            <div />
          )}
        </div>
      </section>
    </div>
  );
}
