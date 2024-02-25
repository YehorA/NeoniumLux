import React from "react";
import styles from "./ProductPrice.module.scss";

function ProductPrice({ price }) {
  return <p className={styles["productPrice"]}>Price: ${price}</p>;
}

export default ProductPrice;
