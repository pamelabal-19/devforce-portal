import TerminalLogo from './TerminalLogo'
import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.top}>
      <div>
        <div className={styles.brand}>
          <TerminalLogo size={26} />
          <span className={styles.brandName}>Dev<span>Force</span></span>
        </div>
        <p className={styles.desc}>El portal de aprendizaje de DevForce. Recursos creados por el equipo, para el equipo. Conocimiento colectivo, acceso libre.</p>
      </div>
      <div className={styles.col}>
        <h4>Recursos</h4>
        <ul>
          <li><a href="#">→ Git para Designers</a></li>
          <li><a href="#" className={styles.disabled}>→ Style Guide (pronto)</a></li>
          <li><a href="#" className={styles.disabled}>→ Storybook (pronto)</a></li>
        </ul>
      </div>
      <div className={styles.col}>
        <h4>Portal</h4>
        <ul>
          <li><a href="#como-funciona">→ Cómo funciona</a></li>
          <li><a href="#nosotros">→ Sobre DevForce</a></li>
          <li><a href="#recursos">→ Ver todos los recursos</a></li>
        </ul>
      </div>
    </div>
    <div className={styles.bottom}>
      <div className={styles.copy}>© 2025 <strong>DevForce</strong> — Portal de aprendizaje interno</div>
      <div className={styles.ctaWrap}>
        <span className={styles.ctaLabel}>¿Listo para aprender?</span>
        <a href="#recursos" className={styles.cta}>Ver recursos →</a>
      </div>
    </div>
  </footer>
)

export default Footer