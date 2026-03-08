import styles from './HowItWorks.module.css'

const steps = [
  { num: '01', title: 'El equipo crea',      desc: 'Un integrante de DevForce documenta un tema, herramienta o proceso que conoce bien. Sin burocracia, en el formato que mejor funcione.' },
  { num: '02', title: 'Se publica acá',       desc: 'El recurso se sube al portal con todo el contexto necesario: objetivo, nivel, tiempo estimado y contenido completo. Disponible para todos.' },
  { num: '03', title: 'El equipo aprende',    desc: 'Cada persona accede cuando lo necesita, a su ritmo. Sin horarios fijos ni requisitos. Solo conocimiento disponible cuando lo precisás.' },
]

const HowItWorks = () => (
  <section id="como-funciona" className={styles.section}>
    <div className={styles.label}>// El proceso</div>
    <h2 className={styles.title}>Cómo <em>funciona</em></h2>
    <p className={styles.intro}>Simple. El equipo crea recursos, los publica acá, y todos aprendemos juntos a nuestro ritmo.</p>
    <div className={styles.grid}>
      {steps.map((s, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.num}>{s.num}</div>
          <h3 className={styles.cardTitle}>{s.title}</h3>
          <p className={styles.cardDesc}>{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
)

export default HowItWorks