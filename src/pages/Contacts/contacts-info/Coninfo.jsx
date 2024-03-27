
import styles from "./Contact.module.css";
const Contacts = () => {
  return (
    <div>
     
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.row}>
            <h3>Get in touch</h3>
            <p>
              Thank you for choosing Stuff as your go-to destination for
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
                <input placeholder="Message" type="text" />
              </div>

              <button className={styles.angle_right} type="submit">
                Send message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
