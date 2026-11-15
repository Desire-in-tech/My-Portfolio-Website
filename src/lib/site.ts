export const SITE_URL = 'https://desire-djh.pages.dev';

export function normalizeCanonicalPath(pathname: string): string {
  const path = pathname.split(/[?#]/, 1)[0] || '/';
  const segments = path.split('/').filter(Boolean);
  return segments.length === 0 ? '/' : `/${segments.join('/')}/`;
}

export function toCanonicalUrl(pathname: string): string {
  const url = new URL(pathname, SITE_URL);
  return `${SITE_URL}${normalizeCanonicalPath(url.pathname)}`;
}
