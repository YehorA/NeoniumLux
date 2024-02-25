import React, { useContext } from "react";
import styles from "./Cart.module.scss";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

function Cart({ isOpen, toggleCart }) {
  const { cart, removeFromCart } = useContext(CartContext);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += product.price * product.quantity; // Multiply price by quantity
    });
    return totalPrice;
  };

  return (
    <div className={`${styles["cart"]} ${isOpen ? styles["open"] : ""}`}>
      {/* Cart Content */}
      <div className={styles["cartContent"]}>
        <div className={styles["cartNavigation"]}>
          <h2>
            Total Price: <span>${calculateTotalPrice()}</span>
          </h2>
          <button className={styles["closeButton"]} onClick={toggleCart}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className={styles["productList"]}>
          {/* Cart Content Products*/}
          {cart.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className={styles["productItem"]}>
              <img src={product.imageUrl} alt={product.name} />
              <div className={styles["productInfo"]}>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
              <button
                className={styles["removeButton"]}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  removeFromCart(product.id);
                }}>
                Remove
              </button>
            </Link>
          ))}
        </div>

        {calculateTotalPrice() > 0 && (
          <Link
            to="/payment"
            // state={{ totalPrice: calculateTotalPrice() }}
            className={styles["cartPayComponent"]}>
            <button className={styles["payButton"]}>Pay and order</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Cart;
