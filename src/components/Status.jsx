import { useEffect, useState } from "react";
import styles from "./Status.module.scss";

function Status({
  status,
  setStatus,
  showNavBar,
  successMessage = "Success",
  errorMessage = "Error",
}) {
  const [timerWidth, setTimerWidth] = useState("100%");

  useEffect(() => {
    if (status) {
      const timeout = setTimeout(() => {
        // console.log(status);
        // console.log(setStatus);
        setStatus(null);
      }, 5000);

      let startTime = Date.now();
      const interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = 5000 - elapsedTime;
        const widthPercentage = (remainingTime / 5000) * 100;
        setTimerWidth(`${widthPercentage}%`);
      }, 100);

      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
      };
    }
  }, [status, setStatus]);

  return (
    <>
      {status && (
        <div
          className={`${styles["status"]} ${
            showNavBar ? styles["underNavBar"] : ""
          }`}>
          {status === "success" ? (
            <p className={styles["statusSuccess"]}>{successMessage}</p>
          ) : (
            <p className={styles["statusError"]}>{errorMessage}</p>
          )}
          <div className={styles["timerBackground"]}></div>
          <div className={styles["timer"]} style={{ width: timerWidth }}></div>
        </div>
      )}
    </>
  );
}

export default Status;
