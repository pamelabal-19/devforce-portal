import styles from './About.module.css'

const values = [
  { icon: '🤝', title: 'Conocimiento colectivo', desc: 'Lo que sabe uno, lo sabe el equipo. Acá documentamos para no reinventar la rueda.' },
  { icon: '⚡', title: 'Práctico y directo',     desc: 'Sin teoría abstracta. Todo lo que está acá es lo que realmente usamos en el día a día.' },
  { icon: '🌱', title: 'Siempre creciendo',      desc: 'El portal crece con el equipo. Cada recurso nuevo es una inversión en todos nosotros.' },
]

const About = () => (
  <section id="nosotros" className={styles.section}>
    <div className={styles.left}>
      <div className={styles.label}>// Sobre DevForce</div>
      <h2 className={styles.title}>Construido por el<br /><em>equipo</em>, para el equipo</h2>
      <p className={styles.intro}>DevForce no es una plataforma externa ni un curso comprado. Es nuestro espacio propio para crecer juntos, documentar lo que sabemos y construir conocimiento colectivo.</p>
      <div className={styles.values}>
        {values.map((v, i) => (
          <div key={i} className={styles.valueRow}>
            <span className={styles.icon}>{v.icon}</span>
            <div>
              <h4 className={styles.valueTitle}>{v.title}</h4>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.right}>
      <blockquote className={styles.quote}>
        "El mejor momento para documentar lo que sabés es <em>ahora</em>, antes de que se convierta en conocimiento tácito que solo vive en tu cabeza."
      </blockquote>
      <div className={styles.attr}>Filosofía DevForce</div>
      <a href="#recursos" className={styles.cta}>Ver recursos →</a>
    </div>
  </section>
)

export default About