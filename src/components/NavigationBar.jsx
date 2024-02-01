import React from "react";
import styles from "./NavigationBar.module.scss";
import logoImage from "../assets/images/logo.png";

function NavigationBar({ showNavBar }) {
  return (
    <nav className={`${styles["nav-bar"]} ${showNavBar ? styles.visible : ""}`}>
      <div className={styles["nav-content"]}>
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
            <a href="/create">Create Your Own Design</a>
          </div>
        </div>
        <div className={styles["right-content"]}>
          <div className={styles["cart-icon"]}>
            <a href="/">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
