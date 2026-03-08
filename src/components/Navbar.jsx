import TerminalLogo from './TerminalLogo'
import styles from './Navbar.module.css'

const Navbar = () => (
  <nav className={styles.nav}>
    <a href="#" className={styles.brand}>
      <TerminalLogo size={28} />
      <span className={styles.brandName}>Dev<span>Force</span></span>
    </a>
    <ul className={styles.links}>
      <li><a href="#recursos">Recursos</a></li>
      <li><a href="#como-funciona">Cómo funciona</a></li>
      <li><a href="#nosotros">Nosotros</a></li>
    </ul>
    <a href="#recursos" className={styles.cta}>Ver recursos →</a>
  </nav>
)

export default Navbar