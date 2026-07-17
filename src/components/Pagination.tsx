interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({ page, totalPages, onChange }: PaginationProps) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page <= 1}
        className="px-4 py-2 bg-card text-muted rounded-lg border border-gray-800 hover:border-primary-accent/50 hover:text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      <span className="px-4 py-2 text-muted text-sm">
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => onChange(page + 1)}
        disabled={page >= totalPages}
        className="px-4 py-2 bg-card text-muted rounded-lg border border-gray-800 hover:border-primary-accent/50 hover:text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}
