import { useEffect } from 'react';
import { SITE_URL } from '../lib/site';

const DEFAULT_SOCIAL_IMAGE =
  'https://res.cloudinary.com/f7ko7ayw/image/upload/v1793539435/Socials_image_vkrgiz.png';
const DEFAULT_AUTHOR = 'Desire Eyotaru';

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
  noindex?: boolean;
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

function removeTag(attr: 'name' | 'property', key: string) {
  document.head.querySelector(`meta[${attr}="${key}"]`)?.remove();
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

function getCanonicalUrl(canonical?: string) {
  if (canonical) return canonical;
  const pathname = window.location.pathname.replace(/\\/+$/, '') || '/';
  return `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
}

function getHomepageSchema(): Record<string, unknown> {
  const personId = `${SITE_URL}/#person`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: DEFAULT_AUTHOR,
        url: SITE_URL,
        jobTitle: 'Software Engineer & AI Developer',
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Desire E',
        publisher: { '@id': personId },
      },
    ],
  };
}

export function useSeo(meta: SeoMeta) {
  useEffect(() => {
    const canonical = getCanonicalUrl(meta.canonical);
    const isHomepage = window.location.pathname === '/';
    const schema = meta.articleSchema ?? (isHomepage ? getHomepageSchema() : undefined);

    document.title = meta.title;
    setTag('name', 'description', meta.description);
    setTag('property', 'og:title', meta.title);
    setTag('property', 'og:description', meta.description);
    setTag('property', 'og:type', meta.type ?? 'website');
    setTag('property', 'og:url', canonical);
    setTag('property', 'og:site_name', 'Desire E');
    setTag('name', 'twitter:card', 'summary_large_image');
    setTag('name', 'twitter:title', meta.title);
    setTag('name', 'twitter:description', meta.description);
    const socialImage = meta.image ?? DEFAULT_SOCIAL_IMAGE;
    setTag('property', 'og:image', socialImage);
    setTag('name', 'twitter:image', socialImage);
    setLink('canonical', canonical);
    setTag('name', 'robots', meta.noindex ? 'noindex, nofollow' : 'index, follow');

    if (meta.keywords?.length) {
      setTag('name', 'keywords', meta.keywords.join(', '));
    } else {
      removeTag('name', 'keywords');
    }

    if (meta.author) {
      setTag('name', 'author', meta.author);
    } else {
      removeTag('name', 'author');
    }

    if (meta.publishedTime) {
      setTag('property', 'article:published_time', meta.publishedTime);
    } else {
      removeTag('property', 'article:published_time');
    }

    if (meta.modifiedTime) {
      setTag('property', 'article:modified_time', meta.modifiedTime);
    } else {
      removeTag('property', 'article:modified_time');
    }

    if (schema) {
      setJsonLd('page-schema', schema);
    } else {
      document.getElementById('page-schema')?.remove();
    }
  }, [meta]);
}
