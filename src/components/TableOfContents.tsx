import { useEffect, useId, useState } from 'react';
import { ChevronDown, List } from 'lucide-react';
import { Heading } from '../lib/blog';

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [expanded, setExpanded] = useState(true);
  const contentId = useId();

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

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="blog-toc rounded-xl border border-gray-800 bg-secondary-bg/70 p-5 sm:p-6"
    >
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={contentId}
        onClick={() => setExpanded((value) => !value)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="flex items-center gap-2 text-base font-semibold text-white">
          <List size={18} className="text-primary-accent" />
          Table of Contents
        </span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={`shrink-0 text-muted transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      {expanded && (
        <ul id={contentId} className="mt-5 max-h-[60vh] space-y-2 overflow-y-auto overscroll-contain border-l border-gray-700 pl-4 pr-3 sm:max-h-[70vh]">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={heading.level > 2 ? 'pl-4' : ''}
            >
              <a
                href={`#${heading.id}`}
                aria-current={activeId === heading.id ? 'location' : undefined}
                className={`block break-words text-sm leading-relaxed transition-colors ${
                  activeId === heading.id
                    ? 'text-primary-accent font-semibold'
                    : 'text-muted hover:text-white'
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
