import { ReactNode } from 'react';

interface SkillBadgeProps {
  children: ReactNode;
  variant?: 'default' | 'accent';
}

export default function SkillBadge({
  children,
  variant = 'default',
}: SkillBadgeProps) {
  return (
    <span
      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
        variant === 'accent'
          ? 'bg-primary-accent/10 text-primary-accent border border-primary-accent/30'
          : 'bg-card text-muted hover:bg-secondary-bg'
      }`}
    >
      {children}
    </span>
  );
}
