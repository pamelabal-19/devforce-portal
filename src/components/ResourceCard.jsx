import styles from './ResourceCard.module.css'

const ResourceCard = ({ title, description, tags, meta, badge, badgeType, available, href }) => {
  const Wrapper = available ? 'a' : 'div'
  return (
    <Wrapper href={available ? href : undefined} className={`${styles.card} ${!available ? styles.comingSoon : ''}`}>
      <div className={styles.top}>
        <span className={`${styles.badge} ${styles[badgeType]}`}>{badge}</span>
        <div className={styles.tags}>
          {tags.map((tag, i) => (
            <span key={i} className={`${styles.tag} ${styles[tag.color]}`}>{tag.label}</span>
          ))}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.meta}>
          {meta.map((m, i) => <span key={i} className={styles.metaItem}>{m}</span>)}
        </div>
        <span className={styles.arrow}>{available ? 'Leer →' : 'Pronto'}</span>
      </div>
    </Wrapper>
  )
}

export default ResourceCard