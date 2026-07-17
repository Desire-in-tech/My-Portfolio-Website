import { Link } from 'react-router-dom';
import { ChevronRight, Hop as Home } from 'lucide-react';
import { useEffect } from 'react';

export interface Crumb {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.label,
        item: item.path
          ? `https://desireeyotaru.vercel.app${item.path}`
          : undefined,
      })),
    };
    let el = document.getElementById('breadcrumb-schema') as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement('script');
      el.id = 'breadcrumb-schema';
      el.type = 'application/ld+json';
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);
    return () => {
      const existing = document.getElementById('breadcrumb-schema');
      if (existing) existing.remove();
    };
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-1 text-sm text-muted">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1">
              {i === 0 && <Home size={14} className="text-muted" />}
              {item.path && !isLast ? (
                <Link
                  to={item.path}
                  className="hover:text-primary-accent transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? 'text-white font-medium' : 'text-muted'}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight size={14} className="text-muted" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
