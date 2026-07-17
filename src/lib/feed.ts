import { blogPosts } from '../data/blogPosts';
import { getSortedPosts } from '../data/blogPosts';
import { getExcerpt } from './blog';
import { profile } from '../data/profile';

const SITE_URL = 'https://desireeyotaru.vercel.app';

export function generateRssFeed(): string {
  const posts = getSortedPosts();
  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      const excerpt = getExcerpt(post);
      const desc = escapeXml(excerpt);
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>
      <description>${desc}</description>
      <category>${escapeXml(post.category)}</category>
      <enclosure url="${post.featuredImage}" type="image/png" />
    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(profile.name)} - Blog</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Technical articles on machine learning, backend development, and data-driven solutions by ${escapeXml(profile.name)}.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export { blogPosts };
