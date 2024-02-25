import React from "react";
import styles from "./TestimonialsSection.module.scss";
import personPhoto1 from "../../assets/images/testimonials-face-1.jpg";
import personPhoto2 from "../../assets/images/testimonials-face-2.jpg";
import personPhoto3 from "../../assets/images/testimonials-face-3.jpg";

function TestimonialsSection() {
  function renderStars(count, starType) {
    const renderStar = () => {
      switch (starType) {
        case "half":
          return <i className="fa-solid fa-star-half-stroke"></i>;
        case "empty":
          return <i className="fa-regular fa-star"></i>;
        default:
          return <i className="fa-solid fa-star"></i>;
      }
    };

    return Array.from({ length: count }, (_, index) => (
      <span key={index}>{renderStar()}</span>
    ));
  }

  //<i class="fa-regular fa-star-half-stroke"></i>

  return (
    <div className={styles["testimonials-section"]}>
      <h2>What Our Customers Are Saying</h2>

      <div className={styles["testimonials-list"]}>
        <div className={styles["testimonial-item"]}>
          <div className={styles["testimonial-container"]}>
            <div className={styles["testimonial-text"]}>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
              <div className={styles["star-rating"]}>{renderStars(5)}</div>
            </div>
            <div className={styles["testimonials-author"]}>
              <img src={personPhoto1} alt="Person 1" />
              <p className={styles["testimonial-author-text"]}>- John Doe</p>
            </div>
          </div>
        </div>

        <div className={styles["testimonial-item"]}>
          <div className={styles["testimonial-container"]}>
            <div className={styles["testimonials-author"]}>
              <img src={personPhoto2} alt="Person 2" />
              <p className={styles["testimonial-author-text"]}>- Jane Smith</p>
            </div>
            <div className={styles["testimonial-text"]}>
              <p>
                "Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas."
              </p>
              <div className={styles["star-rating"]}>
                {renderStars(4)}
                {renderStars(1, "empty")}
              </div>
            </div>
          </div>
        </div>

        <div className={styles["testimonial-item"]}>
          <div className={styles["testimonial-container"]}>
            <div className={styles["testimonial-text"]}>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                convallis ex vel lectus imperdiet sagittis. Nulla laoreet quam
                non tellus."
              </p>
              <div className={styles["star-rating"]}>
                {renderStars(4)}
                {renderStars(1, "half")}
              </div>
            </div>
            <div className={styles["testimonials-author"]}>
              <img src={personPhoto3} alt="Person 3" />
              <p className={styles["testimonial-author-text"]}>- Bob Mas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
