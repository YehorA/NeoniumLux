import React from "react";
import styles from "./Pagination.module.scss";

function Pagination({ currentPage, setCurrentPage, totalPages }) {
  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  function handlePrevPage() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }

  function handleNextPage() {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  }

  function renderNumericButton(page) {
    return (
      <button
        key={page}
        onClick={() => handlePageChange(page)}
        className={currentPage === page ? styles.active : ""}>
        {page}
      </button>
    );
  }

  return (
    <div className={styles.pagination}>
      {currentPage !== 1 ? (
        <button onClick={handlePrevPage}>
          <i className="fas fa-chevron-left"></i>
        </button>
      ) : (
        <span style={{ width: "4.2rem" }}></span>
      )}
      {/* renders left button */}

      {totalPages < 8 ? (
        <>
          {Array.from({ length: totalPages }).map((_, index) =>
            renderNumericButton(index + 1)
          )}
        </>
      ) : currentPage <= 3 ? (
        <>
          {Array.from({ length: Math.min(totalPages, 5) }).map((_, index) =>
            renderNumericButton(index + 1)
          )}
          {totalPages > 3 && <span className={styles["ellipsis"]}>...</span>}
          {renderNumericButton(totalPages)}
        </>
      ) : (
        // renders first 5 numeric buttons and last
        <>
          {renderNumericButton(1)}
          <span className={styles["ellipsis"]}>...</span>

          {currentPage >= totalPages - 2 ? (
            <>
              {Array.from({ length: Math.min(totalPages, 5) }).map((_, index) =>
                renderNumericButton(totalPages - 4 + index)
              )}
            </>
          ) : (
            // renders last 5 numeric buttons and first
            <>
              {Array.from({ length: 3 }).map((_, index) =>
                renderNumericButton(currentPage - 1 + index)
              )}
              <span className={styles["ellipsis"]}>...</span>
              {renderNumericButton(totalPages)}
            </>
            // renders current button and buttons around it
          )}
        </>
      )}

      {currentPage !== totalPages ? (
        <button onClick={handleNextPage}>
          <i className="fas fa-chevron-right"></i>
        </button>
      ) : (
        <span style={{ width: "4.2rem" }}></span>
      )}
    </div>
  );
}

export default Pagination;
