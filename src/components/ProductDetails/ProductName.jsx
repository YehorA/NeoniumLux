import React from "react";
import styles from "./ProductName.module.scss";

function ProductName({ name }) {
  return <h2 className={styles.productName}>{name}</h2>;
}

export default ProductName;
