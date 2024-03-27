import React from "react";
import styles from "./About.module.css";

const Info = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.aboutTitle}>About us</h2>
      <p className={styles.aboutText}>
        We are your trusted online store offering a wide range of high quality
        products. Our goal is to provide our customers with the best service and
        fulfill their needs. Contact us today to learn more about our company
        and products!
      </p>
    </div>
  );
};

export default Info;
