import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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
              {/* Replace <a> with <Link> */}
              <Link to="/">
                <img src={logoImage} alt="Logo" />
              </Link>
            </div>
            <div className={styles["shop"]}>
              {/* Replace <a> with <Link> */}
              <Link to="/shop">Shop</Link>
            </div>
            <div className={styles["create-your-own"]}>
              {/* Replace <a> with <Link> */}
              <Link to="/customSign">Create Your Own Design</Link>
            </div>
          </div>
          <div className={styles["right-content"]}>
            <div className={styles["cart-icon"]}>
              <button onClick={toggleCart} data-cart-count={cart.length}>
                {/* You can still use <button> */}
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
