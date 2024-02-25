import React from "react";
import styles from "./ProductDetails.module.scss";
import allProductsData from "../data/allProductsData";
import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import ProductImage from "../components/ProductDetails/ProductImage";
import ProductName from "../components/ProductDetails/ProductName";
import ProductPrice from "../components/ProductDetails/ProductPrice";
import ProductDescription from "../components/ProductDetails/ProductDescription";
import AddToCartButton from "../components/ProductDetails/AddToCartButton";

function ProductDetails() {
  const { productId } = useParams();
  // Find the product with the matching ID
  const product = allProductsData.find(
    (product) => product.id === parseInt(productId)
  );

  // If the product with the given ID is not found, handle the error or render a loading state
  if (!product) {
    return <div>Error: Product not found</div>;
  }

  const { name, price, imageUrl, description } = product;

  return (
    <>
      <NavigationBar showNavBar={true} />
      <div className={styles["productDetails"]}>
        <ProductImage src={imageUrl} alt={name} />
        <div className={styles["productInfo"]}>
          <ProductName name={name} />
          <ProductPrice price={price} />
          <ProductDescription description={description} />
          <AddToCartButton product={product} />
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
