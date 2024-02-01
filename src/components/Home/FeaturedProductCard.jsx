import React from "react";
import styles from "./FeaturedProductCard.module.scss";

function FeaturedProductCard({ product }) {
  const { name, price, status, imageUrl } = product;

  return (
    <div className={`${styles["featured-product-card"]} ${styles[status]}`}>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <div className={styles["featured-product-details"]}>
        <p className={styles["featured-product-price"]}>Price: ${price}</p>

        <div className={styles["featured-buttons"]}>
          <button
            className={`${styles["details-button"]} ${
              status === "new" ? styles["new"] : styles["popular"]
            }`}>
            View details
          </button>
          <button className={styles["cart-button"]}>
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProductCard;

// {status === "popular" && (
//           <div
//             className={`${styles["featured-product-status"]} ${styles["popular"]}`}>
//             Popular
//           </div>
//         )}
//         {status === "new" && (
//           <div
//             className={`${styles["featured-product-status"]} ${styles["new"]}`}>
//             New
//           </div>
//         )}
