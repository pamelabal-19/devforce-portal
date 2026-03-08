import styles from './Ticker.module.css'

const items = [
  'Git para Designers', 'Capacitación Técnica', 'Design Systems',
  'Storybook', 'Branches & Deploy', 'Recursos por el equipo', 'Para el equipo'
]

const Ticker = () => (
  <div className={styles.ticker}>
    <div className={styles.track}>
      {[...items, ...items].map((item, i) => (
        <span key={i} className={styles.item}>{item} <span className={styles.sep}>·</span></span>
      ))}
    </div>
  </div>
)

export default Ticker