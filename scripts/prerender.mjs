import { createElement } from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { createServer } from 'vite';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const indexPath = path.join(dist, 'index.html');
const template = await readFile(indexPath, 'utf8');
const socialImage = 'https://res.cloudinary.com/f7ko7ayw/image/upload/v1793539435/Socials_image_vkrgiz.png';
const siteUrl = 'https://desire-djh.pages.dev';
const author = 'Desire Eyotaru';

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]);
}

function safeJson(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');
}

function metaTag(name, content, attribute = 'name') {
  return content ? `<meta ${attribute}="${escapeHtml(name)}" content="${escapeHtml(content)}" />` : '';
}

function makeHead(meta) {
  const canonical = meta.canonical ?? `${siteUrl}${meta.path === '/' ? '/' : meta.path}`;
  const image = meta.image ?? socialImage;
  const tags = [
    `<title>${escapeHtml(meta.title)}</title>`,
    metaTag('description', meta.description),
    metaTag('keywords', meta.keywords?.join(', ')),
    metaTag('author', meta.author ?? author),
    metaTag('robots', meta.noindex ? 'noindex, nofollow' : 'index, follow'),
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    metaTag('og:title', meta.title, 'property'),
    metaTag('og:description', meta.description, 'property'),
    metaTag('og:type', meta.type ?? 'website', 'property'),
    metaTag('og:url', canonical, 'property'),
    metaTag('og:site_name', 'Desire E', 'property'),
    metaTag('og:image', image, 'property'),
    metaTag('og:image:width', '1200', 'property'),
    metaTag('og:image:height', '630', 'property'),
    metaTag('og:image:alt', meta.imageAlt ?? 'Desire E portfolio preview', 'property'),
    metaTag('twitter:card', 'summary_large_image'),
    metaTag('twitter:title', meta.title),
    metaTag('twitter:description', meta.description),
    metaTag('twitter:image', image),
    meta.publishedTime ? metaTag('article:published_time', meta.publishedTime, 'property') : '',
    meta.modifiedTime ? metaTag('article:modified_time', meta.modifiedTime, 'property') : '',
    meta.schema ? `<script id="page-schema" type="application/ld+json">${safeJson(meta.schema)}</script>` : '',
  ].filter(Boolean).join('\n    ');

  // Replace only SEO-owned tags. Keep the favicon, viewport, verification,
  // CSS and other application-level head entries from Vite's built template.
  let head = template.replace(/<title>[\s\S]*?<\/title>/i, '');
  head = head.replace(/<meta\s+(?:name|property)="(?:description|keywords|author|robots|og:[^"]+|twitter:[^"]+|article:[^"]+)"[^>]*\/?>/gi, '');
  head = head.replace(/<link\s+rel="canonical"[^>]*\/?>/gi, '');
  head = head.replace(/<script\s+id="page-schema"[\s\S]*?<\/script>/gi, '');
  return head.replace('</head>', '    ' + tags + '\n  </head>');
}

function homepageSchema() {
  const personId = `${siteUrl}/#person`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Person', '@id': personId, name: author, url: siteUrl, jobTitle: 'Software Engineer & AI Developer' },
      { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: siteUrl, name: 'Desire E', publisher: { '@id': personId } },
    ],
  };
}

const staticPages = [
  { path: '/', title: 'Desire Eyotaru | Software Engineer & AI Developer', description: 'Software Engineer & AI Developer specializing in machine learning, backend development, and data-driven solutions. Building intelligent applications with Python, React, Django, and FastAPI.', schema: homepageSchema() },
  { path: '/about', title: 'About | Desire Eyotaru', description: 'Get to know my journey, skills, and what drives me as a developer' },
  { path: '/projects', title: 'Projects | Desire Eyotaru', description: 'A showcase of my work in machine learning, backend development, and full-stack applications' },
  { path: '/blog', title: 'Blog | Desire Eyotaru', description: 'Technical articles on machine learning, backend development, and data-driven solutions by Desire Eyotaru.' },
  { path: '/contact', title: 'Contact | Desire Eyotaru', description: "Have a project in mind or want to discuss opportunities? I'd love to hear from you." },
  { path: '/privacy-policy', title: 'Privacy Policy | Desire E', description: 'How this website handles browser consent storage, hosting, fonts, images, and the contact form. General information, not legal advice.', canonical: `${siteUrl}/privacy-policy` },
  { path: '/cookies-policy', title: 'Cookies Policy | Desire E', description: 'What this website stores in your browser, how to change the analytics choice, and which font and image requests load for every visitor.', canonical: `${siteUrl}/cookies-policy` },
];

function blogMeta(post) {
  const canonical = `${siteUrl}/blog/${post.slug}`;
  return {
    path: `/blog/${post.slug}`,
    canonical,
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt || post.title,
    keywords: post.targetKeywords,
    image: post.featuredImage,
    imageAlt: post.imageAlt,
    type: 'article',
    publishedTime: post.publishDate,
    modifiedTime: post.updatedDate || post.publishDate,
    author: post.author || author,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription || post.excerpt || post.title,
      image: post.featuredImage,
      datePublished: post.publishDate,
      dateModified: post.updatedDate || post.publishDate,
      author: { '@type': 'Person', name: post.author || author },
      publisher: { '@type': 'Person', name: author },
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    },
  };
}

function projectMeta(project) {
  const canonical = `${siteUrl}/projects/${project.slug}`;
  return {
    path: `/projects/${project.slug}`,
    canonical,
    title: `${project.title} | Desire Eyotaru`,
    description: project.description,
    image: project.image,
    imageAlt: project.title,
    type: 'article',
  };
}

function outputPath(route) {
  if (route === '/') return indexPath;
  return path.join(dist, route.slice(1), 'index.html');
}

async function streamToString(stream) {
  const chunks = [];
  for await (const chunk of stream) chunks.push(Buffer.from(chunk));
  return Buffer.concat(chunks).toString('utf8');
}

const vite = await createServer({
  configFile: path.join(root, 'vite.config.ts'),
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true, hmr: false },
});

try {
  const [{ default: StaticApp }, { blogPosts }, { projects }] = await Promise.all([
    vite.ssrLoadModule('/src/StaticApp.tsx'),
    vite.ssrLoadModule('/src/data/blogPosts.ts'),
    vite.ssrLoadModule('/src/data/projects.ts'),
  ]);

  const routes = [
    ...staticPages,
    ...projects.map(projectMeta),
    ...blogPosts.map(blogMeta),
  ];
  const seen = new Set();
  for (const route of routes) {
    if (seen.has(route.path)) throw new Error(`Duplicate prerender route: ${route.path}`);
    seen.add(route.path);
  }

  async function renderRoute(route, destination = outputPath(route.path)) {
    const { prelude, postponed } = await prerenderToNodeStream(
      createElement(StaticApp, { location: route.path }),
      { identifierPrefix: 'desire-portfolio-' },
    );
    if (postponed !== null) throw new Error(`Prerender did not finish for ${route.path}`);
    const markup = await streamToString(prelude);
    if (!markup.trim()) throw new Error(`Empty rendered markup for ${route.path}`);
    if (markup.includes('Loading article...')) throw new Error(`Article content did not finish loading for ${route.path}`);

    const html = makeHead(route).replace(
      '<div id="root"></div>',
      `<div id="root">${markup}</div>`,
    );
    if (html === makeHead(route)) throw new Error(`Could not inject rendered markup for ${route.path}`);
    if (!html.includes(`<title>${escapeHtml(route.title)}</title>`)) throw new Error(`Missing title for ${route.path}`);
    if (!html.includes(`href="${escapeHtml(route.canonical ?? `${siteUrl}${route.path === '/' ? '/' : route.path}`)}"`)) {
      throw new Error(`Missing canonical URL for ${route.path}`);
    }
    if (route.path.startsWith('/blog/') && !markup.includes('blog-content')) {
      throw new Error(`Blog body missing from generated HTML for ${route.path}`);
    }
    if (route.path.startsWith('/projects/') && !markup.includes('Tech Stack')) {
      throw new Error(`Project detail body missing from generated HTML for ${route.path}`);
    }

    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, html, 'utf8');
    return { route: route.path, destination: path.relative(root, destination), bytes: Buffer.byteLength(html) };
  }

  const results = [];
  for (const route of routes) results.push(await renderRoute(route));

  const notFound = {
    path: '/__not-found__',
    title: 'Page Not Found | Desire E',
    description: 'The page you are looking for could not be found.',
    noindex: true,
    canonical: `${siteUrl}/__not-found__`,
  };
  const notFoundPath = path.join(dist, '404.html');
  results.push(await renderRoute(notFound, notFoundPath));

  console.log(`Prerendered ${routes.length} valid routes and a Cloudflare Pages 404 page.`);
  console.log(`Verified ${results.length} HTML files; largest output: ${Math.max(...results.map((item) => item.bytes))} bytes.`);
} finally {
  await vite.close();
}
