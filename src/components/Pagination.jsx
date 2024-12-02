function Pagination({ currentPage, setCurrentPage, maxPages }) {
  return (
    <div className="pagination">
      <button
        id="prev-button"
        onClick={() => setCurrentPage(prev => prev - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button id="page-number-button">
        Current Page: {currentPage}
      </button>
      <button
        id="next-button"
        onClick={() => setCurrentPage(prev => prev + 1)}
        disabled={currentPage === maxPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;