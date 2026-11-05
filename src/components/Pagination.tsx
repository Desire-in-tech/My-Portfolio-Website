interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({ page, totalPages, onChange }: PaginationProps) {
  if (totalPages <= 1) return null;
  return (
    <nav aria-label="Article pagination" className="flex flex-wrap items-center justify-center gap-2 mt-12">
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page <= 1}
        className="px-4 py-2 bg-card text-muted rounded-lg border border-gray-800 hover:border-primary-accent/50 hover:text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      <span className="px-2 sm:px-4 py-2 text-muted text-xs sm:text-sm" aria-live="polite" aria-atomic="true">
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => onChange(page + 1)}
        disabled={page >= totalPages}
        className="px-4 py-2 bg-card text-muted rounded-lg border border-gray-800 hover:border-primary-accent/50 hover:text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </nav>
  );
}
