import styles from './header.module.css'
import Logo from "../images/logo.svg"
import { Link } from 'react-router-dom'
import cart from '../Images/cart.svg'
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
          <img src={Logo} alt="Logo" />
      </div>
      <ul>
        <li><Link to='/' className={styles.link}>Home</Link></li>
        <li><Link to='/Catalog' className={styles.link}>Catalog</Link></li>
        <li><Link to='/About' className={styles.link}>About</Link></li>
        <li><Link to='/Contacts'className={styles.link}>Contacts</Link></li>
      </ul>
 
    
      <div><Link to='/Cart'className={styles.link}>
      <img src={cart} alt='cart'/>
      {/* <button><img src={cart} alt='cart'/></button> */}
      </Link>
      </div>




    </div>  
  )
}

export default Header