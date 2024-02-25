import React, { useContext, useState } from "react";
import styles from "./NavigationBar.module.scss";
import logoImage from "../assets/images/logo.png";
import Cart from "./Cart";
import { CartContext } from "./CartContext";
import Status from "./Status";

function NavigationBar({
  showNavBar,
  setStatus,
  status,
  errorMessage,
  successMessage,
}) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const { cart } = useContext(CartContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
    setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className={styles["cross-container"]} onClick={toggleMenu}>
        <div
          className={`${styles["lines"]} ${
            isMenuOpen && styles["cross"]
          }`}></div>
      </div>

      <nav
        className={`${styles["nav-bar"]} ${
          showNavBar ? styles["visible"] : styles["invisible"]
        } ${isMenuOpen ? styles["visibleLeft"] : styles["invisibleLeft"]}`}>
        <div className={`${styles["nav-content"]} `}>
          <div className={styles["left-content"]}>
            <div className={styles["logo"]}>
              <a href="/">
                <img src={logoImage} alt="Logo" />
              </a>
            </div>
            <div className={styles["shop"]}>
              <a href="/shop">Shop</a>
            </div>
            <div className={styles["create-your-own"]}>
              <a href="/customSign">Create Your Own Design</a>
            </div>
          </div>
          <div className={styles["right-content"]}>
            <div className={styles["cart-icon"]}>
              <button onClick={toggleCart} data-cart-count={cart.length}>
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`${styles["overlay"]} ${
          isMenuOpen ? styles["overlayOpen"] : ""
        }`}
        onClick={toggleMenu}></div>
      <div
        className={`${styles["overlay"]} ${
          isCartOpen ? styles["overlayOpen"] : ""
        }`}
        onClick={toggleCart}></div>
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
      <Status
        status={status}
        setStatus={setStatus}
        showNavBar={showNavBar}
        errorMessage={errorMessage}
        successMessage={successMessage}
      />
    </>
  );
}

export default NavigationBar;
