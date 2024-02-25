import React, { useContext } from "react";
import styles from "./ProductCard.module.scss";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { id, name, price, imageUrl } = product;
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/product/${id}`} className={styles["productCard"]}>
      <div className={styles["cartButton"]}>
        <button className={styles["addToCartButton"]} onClick={handleAddToCart}>
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
      <img src={imageUrl} alt={name} className={styles["productImage"]} />
      <div className={styles["productInfo"]}>
        <h3 className={styles["productName"]}>{name}</h3>
        <p className={styles["productPrice"]}>${price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
