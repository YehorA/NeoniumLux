import styles from "./AboutUsSection.module.scss";
import aboutUsImage1 from "../../assets/images/img-about-section-1.jpg";
import aboutUsImage2 from "../../assets/images/img-about-section-2.jpg";

function AboutUsSection() {
  return (
    <div className={styles["about-us-section"]}>
      <div className={styles["about-us-content"]}>
        <div className={styles["aus-text"]}>
          <h2 className={styles["aus-heading"]}>About NeonLux</h2>
          <div className={styles["aus-secondary-heading"]}>
            <i className="fa-solid fa-palette"></i> Creative Craftsmanship:
          </div>
          <p className={styles["aus-description"]}>
            Welcome to NeonLux, where each neon sign is a canvas of creativity.
            Our artisans blend art and innovation, crafting visually stunning
            neon art that tells a unique story.
          </p>
          <div className={styles["aus-secondary-heading"]}>
            <i className="fas fa-shield-alt"></i> Quality Materials, Lasting
            Impressions:
          </div>
          <p className={styles["aus-description"]}>
            At NeonLux, excellence is in every detail. We use premium materials
            for durable and aesthetically pleasing neon signs, ensuring that
            each piece is a lasting symbol of craftsmanship.
          </p>
          <div className={styles["aus-secondary-heading"]}>
            <i className="fas fa-globe"></i> Europe-Wide Delivery:
          </div>
          <p className={styles["aus-description"]}>
            NeonLux delivers enchanting neon art to your doorsteps across
            Europe, illuminating homes, businesses, and creative spaces with
            unique creations. Illuminate your space with NeonLux, anywhere in
            Europe.
          </p>
          <div className={styles["aus-secondary-heading"]}>
            <i className="fas fa-paint-brush"></i> Your Vision, Our Craft:
          </div>
          <p className={styles["aus-description"]}>
            Turn your ideas into vibrant reality with NeonLux's personalized
            neon signs. Our skilled artisans craft unique creations, bringing
            your imagination to life with a personalized glow.
          </p>
        </div>
        <div className={styles["aus-image"]}>
          <img
            src={aboutUsImage1}
            alt="Neon sign on the wall of bar with Chinese characters"
          />
          <img src={aboutUsImage2} alt="Neon signs inside bar" />
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
