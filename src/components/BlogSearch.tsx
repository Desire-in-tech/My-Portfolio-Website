import { Search } from 'lucide-react';

interface BlogSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function BlogSearch({ value, onChange }: BlogSearchProps) {
  return (
    <div className="relative w-full max-w-md">
      <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search articles..."
        className="w-full pl-11 pr-4 py-3 bg-card border border-gray-700 rounded-lg text-white placeholder-muted focus:outline-none focus:border-primary-accent transition-colors"
      />
    </div>
  );
}
