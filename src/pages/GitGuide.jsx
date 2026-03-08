import styles from './GitGuide.module.css'

const GitGuide = () => {
  return (
    <div className={styles.wrapper}>
      <iframe
        src="/git-guide.html"
        className={styles.frame}
        title="Git para Designers"
      />
    </div>
  )
}

export default GitGuide