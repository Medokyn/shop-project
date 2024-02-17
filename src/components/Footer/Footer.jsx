import styles from './footer.module.css'
import { router } from '../../router'
import LOGO from '../../components/Images/logo.svg'
import github from '../../components/Images/github.svg'
import instagram from '../../components/Images/instagram.svg'
import facebook from '../../components/Images/facebook.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={router.Home}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>

      <div className={styles.right}>
        <a
          href="https://qamalladin.university/"
          target='_blank'
          rel='noreferrer'
        >Qamalladin university</a>
      </div>

      <div className={styles.socials}>
        <a
          href="https://www.facebook.com/?locale=ru_RU"
          target='_blank'
          rel='noreferrer'
        ><img src={facebook} alt='facebook' /></a>

        <a
          href="https://www.instagram.com/"
          target='_blank'
          rel='noreferrer'
        ><img src={instagram} alt='instagram' /></a>

        <a
          href="https://github.com/Medokyn"
          target='_blank'
          rel='noreferrer'
        ><img src={github} alt='github' /></a>
      </div>
    </section>
  )
}

export default Footer;
