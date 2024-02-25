import React, { useEffect, useState } from "react";
import styles from "./ProductList.module.scss";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

function ProductList({ filteredProducts, currentPage, setCurrentPage }) {
  const [cardsPerPage, setCardsPerPage] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Less than md screen size
        setCardsPerPage(6);
      } else {
        // Greater than or equal to md screen size
        setCardsPerPage(8);
      }
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, totalProducts);

  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className={styles["productList"]}>
      <div className={styles["productContainer"]}>
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default ProductList;
