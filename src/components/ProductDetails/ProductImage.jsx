import React from "react";
import styles from "./ProductImage.module.scss";

function ProductImage({ src, alt }) {
  return (
    <div className={styles["imageContainer"]}>
      <img src={src} alt={alt} className={styles["image"]} />
    </div>
  );
}

export default ProductImage;
