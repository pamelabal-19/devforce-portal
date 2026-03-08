import ResourceCard from './ResourceCard'
import styles from './Resources.module.css'

// ─── AGREGAR NUEVOS RECURSOS ACÁ ───────────────────────────────────
const RESOURCES = [
  {
    title: 'Git & Repos para Designers',
    description: 'Todo lo que necesitás saber sobre repositorios, branches, commits, deploys y Storybook. Explicado con analogías de Figma.',
    badge: '✦ Disponible', badgeType: 'badgeNew',
    tags: [
      { label: 'Git',       color: 'yellow' },
      { label: 'GitHub',    color: 'blue'   },
      { label: 'Deploy',    color: 'green'  },
      { label: 'Storybook', color: 'pink'   },
    ],
    meta: ['📖 8 secciones', '🎯 Designers'],
    available: true, href: '#',
  },
  {
    title: 'Design System & Style Guide',
    description: 'Tokens, componentes, tipografías y paleta de colores. La referencia visual completa del sistema de diseño del equipo.',
    badge: '⏳ Próximamente', badgeType: 'badgeWip',
    tags: [
      { label: 'Tokens',      color: 'blue'   },
      { label: 'Componentes', color: 'pink'   },
      { label: 'CSS',         color: 'yellow' },
    ],
    meta: ['🔒 En preparación'],
    available: false, href: '#',
  },
  {
    title: 'Storybook para Equipos',
    description: 'Cómo documentar componentes, crear stories, conectar con Figma y usar Chromatic para revisiones visuales automáticas.',
    badge: '⏳ Próximamente', badgeType: 'badgeWip',
    tags: [
      { label: 'Storybook', color: 'green' },
      { label: 'Chromatic', color: 'blue'  },
      { label: 'Figma',     color: 'pink'  },
    ],
    meta: ['🔒 En preparación'],
    available: false, href: '#',
  },
]
// ───────────────────────────────────────────────────────────────────

const Resources = () => (
  <section id="recursos" className={styles.section}>
    <div className={styles.label}>// Recursos disponibles</div>
    <h2 className={styles.title}>Qué vas a <em>aprender</em></h2>
    <p className={styles.intro}>Cada recurso es una guía completa creada internamente. Arrancamos con lo esencial y seguimos sumando.</p>
    <div className={styles.grid}>
      {RESOURCES.map((r, i) => <ResourceCard key={i} {...r} />)}
    </div>
  </section>
)

export default Resources