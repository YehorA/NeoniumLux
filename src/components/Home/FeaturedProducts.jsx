import React from "react";
import FeaturedProductCard from "./FeaturedProductCard";
import featuredProductsData from "../../data/featuredProductsData";
import styles from "./FeaturedProducts.module.scss";

function FeaturedProductsSection() {
  return (
    <div className={styles["featured-products-section"]}>
      <h2>Featured Products</h2>
      <div className={styles["featured-products-container"]}>
        {featuredProductsData.map((product) => (
          <FeaturedProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProductsSection;
