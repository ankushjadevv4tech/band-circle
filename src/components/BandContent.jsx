import React, { useState } from "react";
import BandTableContent from "./BandTableContent";
import Pagination from "./Pagination";

function BandContent({ bandData, loading, onSearch, city, totalBands }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(50);

  const totalPages = Math.ceil(totalBands / itemsPerPage);

  const updatePage = (page) => {
    setCurrentPage(page);
    onSearch(city, page * itemsPerPage, itemsPerPage);
  };

  const updateItemsPerPage = (limit) => {
    setItemsPerPage(limit);
    setCurrentPage(0);
    onSearch(city, 0, limit);
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      {bandData?.length ? (
        <>
           <h2 className="text-lg font-semibold mb-4">
            {totalBands === 1
              ? `Band in ${city}`
              : `Bands in ${city}`}
          </h2>

          <BandTableContent bandData={bandData} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={updatePage}
            itemsPerPage={itemsPerPage}
            onItemsPerPageChange={updateItemsPerPage}
          />
        </>
      ) : loading ? (
        <div className="flex flex-col items-center justify-center h-48">
          <div className="w-8 h-8 border-4 border-t-4 border-orange-500 border-solid rounded-full animate-spin mb-2" />
          <p className="text-sm">Loading...</p>
        </div>
      ) : (
        <p className="text-gray-500">No results found</p>
      )}
    </div>
  );
}

export default BandContent;
