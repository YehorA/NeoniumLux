import { Link } from "react-router-dom";
import styles from "./HeroSection.module.scss";

function HeroSection() {
  return (
    <div id="hero-section" className={styles["hero-section"]}>
      <div className={styles["hero-content"]}>
        <h1 className={styles["hero-heading"]}>NeonLux: Art in Light</h1>
        <p className={styles["hero-subheading"]}>
          Explore the fusion of imagination and skill at NeonLux, where we
          present an enchanting collection of captivating neon artworks.
        </p>
        <Link to="/shop">
          <button className={styles["hero-button"]}>Start shopping now!</button>
        </Link>
      </div>
      <i
        className={`fa-solid fa-arrow-down ${styles["scroll-down-indicator"]}`}></i>
    </div>
  );
}

export default HeroSection;
