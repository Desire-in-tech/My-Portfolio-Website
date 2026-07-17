import { Twitter, Linkedin, Facebook, Link as LinkIcon } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
}

export default function SocialShare({ url, title }: SocialShareProps) {
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
    } catch {
      // clipboard not available — no-op
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted">Share:</span>
      {links.map((l) => (
        <a
          key={l.name}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${l.name}`}
          className="p-2 bg-card rounded-lg text-muted hover:text-primary-accent hover:bg-secondary-bg transition-all"
        >
          <l.icon size={18} />
        </a>
      ))}
      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="p-2 bg-card rounded-lg text-muted hover:text-primary-accent hover:bg-secondary-bg transition-all"
      >
        <LinkIcon size={18} />
      </button>
    </div>
  );
}
