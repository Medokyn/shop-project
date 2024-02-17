import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import styles from './Contact.module.css'
const Contacts = () => {
  return (
    <div>
      <Header/>
      <div className={styles.about}>
      <h1>Contact Us</h1>
      <div className="contact-info">
        <h2>Our Office</h2>
        <p>123 Purple Street</p>
        <p>Cityville, State</p>
        <p>Country, 12345</p>
        <p>Email: contact@example.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Contacts