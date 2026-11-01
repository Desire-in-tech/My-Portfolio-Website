import { blogPosts } from '../data/blogPosts';
import { projects } from '../data/projects';
import { SITE_URL } from './site';

export function generateSitemap(): string {
  const staticPages = ['/', '/about', '/projects', '/blog', '/contact'];

  const projectPages = projects.map((project) => `/projects/${project.slug}`);
  const postPages = blogPosts.map((post) => `/blog/${post.slug}`);
  const allUrls = [...staticPages, ...projectPages, ...postPages];

  const urls = allUrls
    .map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}
