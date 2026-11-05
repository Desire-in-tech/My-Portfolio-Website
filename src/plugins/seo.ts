import { Plugin } from 'vite';
import { generateSitemap } from '../lib/sitemap';
import { generateRssFeed } from '../lib/feed';

export function seoPlugin(): Plugin {
  return {
    name: 'seo-feed',
    apply: 'build',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: generateSitemap(),
      });
      this.emitFile({
        type: 'asset',
        fileName: 'rss.xml',
        source: generateRssFeed(),
      });
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/sitemap.xml') {
          res.setHeader('Content-Type', 'application/xml');
          res.end(generateSitemap());
          return;
        }
        if (req.url === '/rss.xml') {
          res.setHeader('Content-Type', 'application/rss+xml');
          res.end(generateRssFeed());
          return;
        }
        next();
      });
    },
  };
}
