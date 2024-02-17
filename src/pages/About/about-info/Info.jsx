import styles from "./About.module.css";
import image1 from "../../../components/Images/man-about.png";
import image2 from "../../../components/Images/aboutphoto2.jpg";
import image3 from "../../../components/Images/aboutphoto2.jpg";

const Info = () => {
  return (
    <section className={styles.about}>
      <div className={styles.block}>
        <div className={styles.text}>
          <h1>Welcome to Purple Boutique!</h1>
          <p>
            At Purple Boutique, we're dedicated to offering you an unparalleled shopping experience. Our online store features a handpicked selection of premium products, carefully curated to meet your diverse needs and preferences.
          </p>
        </div>
        <img src={image1} alt="Image 1" />
      </div>
      <div className={styles.block}>
        <div className={styles.text}>
          <h1>Discover Trendsetting Styles</h1>
          <p>
            Explore our latest collections and discover trendsetting styles that will elevate your wardrobe. From chic apparel to statement accessories, we have everything you need to express your unique sense of fashion.
          </p>
        </div>
        <img src={image2} alt="Image 2" />
      </div>
      <div className={styles.block}>
        <div className={styles.text}>
          <h1>Join Our Fashion Community</h1>
          <p>
            Join our vibrant community of fashion enthusiasts and trendsetters today! Stay updated on the latest trends, share styling tips, and connect with like-minded individuals who share your passion for fashion.
          </p>
        </div>
        <img src={image3} alt="Image 3" />
      </div>
    </section>
  );
};

export default Info;
