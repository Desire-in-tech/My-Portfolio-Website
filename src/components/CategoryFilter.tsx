import { motion } from 'framer-motion';

interface CategoryFilterProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {['All', ...categories].map((cat) => (
        <motion.button
          key={cat}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            active === cat
              ? 'bg-primary-accent text-primary-bg'
              : 'bg-card text-muted hover:bg-secondary-bg border border-gray-800'
          }`}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
}
