import React from 'react';
import styles from "./About.module.css";

const Info = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.aboutTitle}>О нас</h2>
      <p className={styles.aboutText}>
        Мы - ваш надежный интернет-магазин, предлагающий широкий ассортимент товаров высокого качества.
        Наша цель - обеспечить наших клиентов лучшим сервисом и удовлетворить их потребности.
        Свяжитесь с нами сегодня, чтобы узнать больше о нашей компании и продукции!
      </p>
    </div>
  );
}

export default Info;
