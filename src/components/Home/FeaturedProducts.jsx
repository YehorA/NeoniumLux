import React from "react";
import FeaturedProductCard from "./FeaturedProductCard";
import featuredProductsData from "../../data/featuredProductsData";
import allProductsData from "../../data/allProductsData";
import styles from "./FeaturedProducts.module.scss";

function FeaturedProductsSection() {
  const findProductById = (productId) => {
    // Logic to find the product by ID in the all products database
    return allProductsData.find((product) => product.id === productId);
  };

  return (
    <div className={styles["featured-products-section"]}>
      <h2>Featured Products</h2>
      <div className={styles["featured-products-container"]}>
        {featuredProductsData.map((product) => (
          <FeaturedProductCard
            key={product.id}
            product={product}
            findProductById={findProductById}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProductsSection;
