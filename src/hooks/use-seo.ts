import { useEffect } from 'react';

export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  articleSchema?: Record<string, unknown>;
}

function setTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id: string, data: Record<string, unknown>) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function useSeo(meta: SeoMeta) {
  useEffect(() => {
    document.title = meta.title;
    setTag('name', 'description', meta.description);
    if (meta.keywords?.length) setTag('name', 'keywords', meta.keywords.join(', '));
    setTag('property', 'og:title', meta.title);
    setTag('property', 'og:description', meta.description);
    setTag('property', 'og:type', meta.type ?? 'website');
    setTag('name', 'twitter:card', 'summary_large_image');
    setTag('name', 'twitter:title', meta.title);
    setTag('name', 'twitter:description', meta.description);
    if (meta.image) {
      setTag('property', 'og:image', meta.image);
      setTag('name', 'twitter:image', meta.image);
    }
    if (meta.canonical) {
      setLink('canonical', meta.canonical);
      setTag('property', 'og:url', meta.canonical);
    }
    if (meta.author) setTag('name', 'author', meta.author);
    if (meta.publishedTime) setTag('property', 'article:published_time', meta.publishedTime);
    if (meta.modifiedTime) setTag('property', 'article:modified_time', meta.modifiedTime);
    if (meta.articleSchema) setJsonLd('article-schema', meta.articleSchema);
  }, [meta]);
}
