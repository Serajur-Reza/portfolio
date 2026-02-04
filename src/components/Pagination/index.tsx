import { ChevronLeft, ChevronRight } from "lucide-react";

const getPaginationRange = (currentPage, totalPages) => {
  const delta = 2; // Number of pages to show before/after current
  const range = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - delta && i <= currentPage + delta)
    ) {
      range.push(i);
    }
  }

  const rangeWithDots = [];
  let l;
  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }
  return rangeWithDots;
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = getPaginationRange(currentPage, totalPages);

  return (
    <nav
      className="flex items-center justify-center space-x-2 py-10"
      aria-label="Pagination"
    >
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-1">
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && onPageChange(page)}
            disabled={page === "..."}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer disabled:cursor-not-allowed ${
              page === currentPage
                ? "bg-blue-600 text-white border border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                : page === "..."
                  ? "text-slate-500 cursor-default"
                  : "text-slate-400 bg-slate-900 border border-slate-800 hover:border-slate-600 hover:text-white"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </nav>
  );
};

export default Pagination;
