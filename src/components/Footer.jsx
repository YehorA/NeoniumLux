import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footerContent"]}>
        <div className={styles["footerInfo"]}>
          <p>&copy; 2024 Neonium Lux</p>
          <p>
            <span className={styles["heading-footer"]}>Email:</span>{" "}
            artushinegor@gmail.com
          </p>
          <p>
            {" "}
            <span className={styles["heading-footer"]}>Address:</span>{" "}
            Netherlands, Deventer
          </p>
        </div>
        <div className={styles["footerInfo"]}>
          <p className={styles["heading-footer"]}>Follow us on social media:</p>
          <div className={styles["social-media-links"]}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer">
              <i class="fa-brands fa-square-x-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/yehor-artiushyn-1a6287267/"
              target="_blank"
              rel="noopener noreferrer">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
