import { blogPosts } from '../data/blogPosts';
import { projects } from '../data/projects';

const SITE_URL = 'https://desireeyotaru.vercel.app';

export function generateSitemap(): string {
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'monthly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/projects', priority: '0.9', changefreq: 'monthly' },
    { url: '/blog', priority: '0.9', changefreq: 'weekly' },
    { url: '/contact', priority: '0.6', changefreq: 'monthly' },
  ];

  const projectPages = projects.map((p) => ({
    url: `/projects/${p.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
  }));

  const postPages = blogPosts.map((p) => ({
    url: `/blog/${p.slug}`,
    priority: '0.6',
    changefreq: 'monthly',
  }));

  const all = [...staticPages, ...projectPages, ...postPages];

  const urls = all
    .map(
      (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}
