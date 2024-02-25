import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import styles from "./AddToCartButton.module.scss";

function AddToCartButton({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <button className={styles.addToCartButton} onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
