import { useEffect, useState } from 'react';
import { Heading } from '../lib/blog';

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-80px 0px -70% 0px' }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;
  return (
    <nav className="sticky top-24">
      <h4 className="text-sm font-semibold text-white mb-3">Table of Contents</h4>
      <ul className="space-y-2 border-l border-gray-800 pl-4">
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: h.level > 2 ? '0.75rem' : 0 }}>
            <a
              href={`#${h.id}`}
              className={`block text-sm transition-colors ${
                activeId === h.id
                  ? 'text-primary-accent font-medium'
                  : 'text-muted hover:text-white'
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
