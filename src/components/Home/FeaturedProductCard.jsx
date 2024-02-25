import React, { useContext } from "react";
import styles from "./FeaturedProductCard.module.scss";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

function FeaturedProductCard({ product, findProductById }) {
  const { name, price, status, imageUrl } = product;
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    // Find the corresponding product in the all products database
    const productFromAllProducts = findProductById(product.id);
    addToCart(productFromAllProducts);
  };

  return (
    <div className={`${styles["featured-product-card"]} ${styles[status]}`}>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <div className={styles["featured-product-details"]}>
        <p className={styles["featured-product-price"]}>Price: ${price}</p>

        <div className={styles["featured-buttons"]}>
          <Link
            to={`/product/${product.id}`}
            className={`${styles["details-button"]} ${
              status === "new" ? styles["new"] : styles["popular"]
            }`}>
            View details
          </Link>
          <button className={styles["cart-button"]} onClick={handleAddToCart}>
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProductCard;
