import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Contact.module.css";
const Contacts = () => {
  return (
    <div>
      <Header />
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.row}>
            <h3>Get in touch</h3>
            <p>
              Thank you for choosing [Stuff] as your go-to destination for
              all things fashion and beyond. We invite you to explore our
              collection, join our community, and discover the perfect pieces to
              elevate your wardrobe and your lifestyle.
            </p>

            <div className={styles.fullwidth_wrapper}>
              <div className={styles.row}>
                <div className={styles.colmd}>
                  <div className={styles.form_group}>
                    <input placeholder="Fist name" type="text" />
                  </div>
                </div>
                <div className={styles.colmd}>
                  <div className={styles.form_group}>
                    <input placeholder="Fist name" type="text" />
                  </div>
                </div>
              </div>

              <div className={styles.form_group}>
                <input placeholder="Email" type="text" />
              </div>

              <div className={styles.form_group}>
                <input placeholder="Phone" type="text" />
              </div>

              <div className={styles.form_group}>
                <textarea placeholder="Message" type="text" />
              </div>

              <button className={styles.angle_right} type="submit">
                Send message
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contacts;
