import Logo from "../Logo"
import styles from './Footer.module.css';

const FooterLogo = () => {
  return (
    <div className={styles.logo}>
        <Logo src="./logo_e_favicon/Logo.png" alt="Logo" />
        <p>Onde a realidade econtra a fantasia!</p>
    </div>
  )
}

export default FooterLogo