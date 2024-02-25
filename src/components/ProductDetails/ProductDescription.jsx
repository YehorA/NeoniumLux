import React from "react";
import styles from "./ProductDescription.module.scss";

function ProductDescription({ description }) {
  return (
    <div className={styles.productDescription}>
      <h3>Description:</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProductDescription;
