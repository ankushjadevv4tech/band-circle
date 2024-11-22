import React from "react";

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
}) {
  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 0) {
      onPageChange(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages - 1) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-between mt-4">
      <button
        className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-300"
        disabled={currentPage <= 0}
        onClick={() => handlePageChange("prev")}
      >
        Prev
      </button>
      <p>
        Page: {currentPage + 1} / {totalPages}
      </p>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-300"
        disabled={currentPage >= totalPages - 1}
        onClick={() => handlePageChange("next")}
      >
        Next
      </button>
      <div className="ml-4">
        <label htmlFor="itemsPerPage" className="mr-2">
          Items per page:
        </label>
        <select
          id="itemsPerPage"
          className="p-2 border border-gray-300 rounded"
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        >
          {[10, 20, 50, 100].map((limit) => (
            <option key={limit} value={limit}>
              {limit}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Pagination;
