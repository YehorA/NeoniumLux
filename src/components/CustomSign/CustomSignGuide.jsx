import React from "react";
import styles from "./CustomSignGuide.module.scss";

function CustomSignGuide() {
  return (
    <div className={styles["customSignGuide"]}>
      {/* <h1>Order Custom Neon Sign</h1> */}
      <div className={styles["stepsContainer"]}>
        <div className={styles["step"]}>
          <i className="fas fa-edit"></i>
          <h2>Fill out the form</h2>
          <p>
            Provide your name, email, upload a picture, and leave a message.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pulvinar tellus vel hendrerit consectetur. Sed eget ex ut libero
            venenatis accumsan.
          </p>
        </div>
        <div className={styles["step"]}>
          <i className="fas fa-paper-plane"></i>
          <h2>Submit the form and wait for our confirmation</h2>
          <p>
            We'll review your order and send you a confirmation email. Mauris eu
            diam dapibus, tempus purus nec, mattis eros. Morbi eget scelerisque
            ante.
          </p>
        </div>
        <div className={styles["step"]}>
          <i className="fas fa-clock"></i>
          <h2>Wait for creating and delivering your own neon sign</h2>
          <p>
            Once confirmed, we'll start crafting your custom neon sign and
            deliver it to your address. Nulla facilisi. Vestibulum lacinia
            lectus sed nunc eleifend interdum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomSignGuide;
