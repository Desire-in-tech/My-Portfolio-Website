import { useState } from 'react';
import { Twitter, Linkedin, Facebook, Link as LinkIcon } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
}

export default function SocialShare({ url, title }: SocialShareProps) {
  const [copyStatus, setCopyStatus] = useState('');
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    { name: 'Twitter', icon: Twitter, href: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}` },
    { name: 'LinkedIn', icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}` },
    { name: 'Facebook', icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}` },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopyStatus('Link copied to clipboard.');
    } catch {
      setCopyStatus('Unable to copy the link. You can copy the page address from your browser.');
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      <span className="text-sm text-muted">Share:</span>
      {links.map((l) => (
        <a
          key={l.name}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${l.name}`}
          className="p-2 bg-card rounded-lg text-muted hover:text-primary-accent hover:bg-secondary-bg transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-accent"
        >
          <l.icon aria-hidden="true" size={18} />
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        aria-label="Copy link"
        className="p-2 bg-card rounded-lg text-muted hover:text-primary-accent hover:bg-secondary-bg transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-accent"
      >
        <LinkIcon aria-hidden="true" size={18} />
      </button>
      <span role="status" aria-live="polite" aria-atomic="true" className="text-sm text-muted">
        {copyStatus}
      </span>
    </div>
  );
}
