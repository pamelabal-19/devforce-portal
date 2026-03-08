import styles from './Hero.module.css'

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.grid}></div>
    <div className={styles.stripe}></div>

    <div className={styles.left}>
      <div className={styles.eyebrow}>El portal de aprendizaje de DevForce</div>
      <h1 className={styles.title}>
        Aprendé.<br />Creá.<br /><em>Crecé.</em>
      </h1>
      <p className={styles.desc}>
        Recursos creados por el equipo, para el equipo. Guías, referencias y materiales de capacitación diseñados para que todos hablemos el mismo idioma técnico.
      </p>
      <div className={styles.actions}>
        <a href="#recursos" className={styles.btnPrimary}>Ver recursos →</a>
        <a href="#como-funciona" className={styles.btnGhost}>Cómo funciona</a>
      </div>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <div className={styles.statNum}>1<span>+</span></div>
          <div className={styles.statLabel}>Recurso disponible</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNum}>∞</div>
          <div className={styles.statLabel}>Por venir</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNum}>1<span>×</span></div>
          <div className={styles.statLabel}>Equipo unido</div>
        </div>
      </div>
    </div>

    <div className={styles.right}>
      <div className={styles.terminal}>
        <div className={styles.tBar}>
          <div className={`${styles.dot} ${styles.dotR}`}></div>
          <div className={`${styles.dot} ${styles.dotY}`}></div>
          <div className={`${styles.dot} ${styles.dotG}`}></div>
          <span className={styles.tTitle}>devforce — recursos</span>
        </div>
        <div className={styles.tBody}>
          <div><span className={styles.tPath}>~/devforce</span></div>
          <div><span className={styles.tPrompt}>➜</span> <span className={styles.tCmd}>ls recursos/</span></div>
          <div><span className={styles.tOk}>git-para-designers.html</span></div>
          <div><span className={styles.tOut}>style-guide/ <span className={styles.tComment}>← próximamente</span></span></div>
          <div><span className={styles.tOut}>storybook-guide/ <span className={styles.tComment}>← próximamente</span></span></div>
          <br />
          <div><span className={styles.tPrompt}>➜</span> <span className={styles.tCmd}>open <span className={styles.tString}>git-para-designers.html</span></span></div>
          <div><span className={styles.tInfo}>✦ Abriendo en el navegador...</span></div>
          <br />
          <div><span className={styles.tPrompt}>➜</span> <span className={styles.cursor}></span></div>
        </div>
      </div>
    </div>
  </section>
)

export default Hero