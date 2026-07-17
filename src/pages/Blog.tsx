import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { getSortedPosts, getFeaturedPosts } from '../data/blogPosts';
import { AnimatedSection, BlogGrid, BlogSearch, CategoryFilter, Pagination, Breadcrumbs, CloudinaryImage } from '../components';
import { useSeo } from '../hooks/use-seo';
import { formatDate, getReadingTime, getExcerpt } from '../lib/blog';

const POSTS_PER_PAGE = 6;

export default function Blog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);

  useSeo({
    title: 'Blog | Desire Eyotaru',
    description:
      'Technical articles on machine learning, backend development, and data-driven solutions by Desire Eyotaru.',
    type: 'website',
  });

  const allPosts = useMemo(() => getSortedPosts(), []);
  const featuredPosts = useMemo(() => getFeaturedPosts(), []);
  const categories = useMemo(
    () => Array.from(new Set(allPosts.map((p) => p.category))),
    [allPosts]
  );

  const filtered = useMemo(() => {
    return allPosts.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        getExcerpt(p).toLowerCase().includes(q) ||
        p.targetKeywords.some((k) => k.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [allPosts, category, search]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const pagePosts = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };
  const handleCategory = (cat: string) => {
    setCategory(cat);
    setPage(1);
  };

  const featuredPost = featuredPosts[0];

  return (
    <div className="min-h-screen bg-primary-bg pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-bg/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Blog' }]} />
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Blog</h1>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Articles on machine learning, backend engineering, and building
                data-driven applications.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {featuredPost && (
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-sm font-semibold text-primary-accent uppercase tracking-wider mb-4">
                Featured Article
              </h2>
              <motion.div
                whileHover={{ scale: 1.005 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden border border-gray-800 hover:border-primary-accent/30 transition-colors"
              >
                <Link to={`/blog/${featuredPost.slug}`} className="aspect-video lg:aspect-auto overflow-hidden bg-secondary-bg">
                  <CloudinaryImage
                    src={featuredPost.featuredImage}
                    alt={featuredPost.imageAlt}
                    aspectClass="w-full h-full"
                    className="w-full h-full object-cover"
                  />
                </Link>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3 text-xs text-muted">
                    <span className="px-2 py-1 bg-primary-accent/10 text-primary-accent rounded font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {formatDate(featuredPost.publishDate)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {featuredPost.readingTime ?? getReadingTime(featuredPost.content)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h3>
                  <p className="text-muted mb-6 line-clamp-3">{getExcerpt(featuredPost)}</p>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-primary-accent font-medium hover:gap-3 transition-all"
                  >
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      )}

      <section className="py-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <CategoryFilter categories={categories} active={category} onChange={handleCategory} />
            <BlogSearch value={search} onChange={handleSearch} />
          </div>

          <BlogGrid posts={pagePosts} />

          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
      </section>
    </div>
  );
}
