import styles from './GitGuide.module.css'
import { useNavigate } from 'react-router-dom'

const GitGuide = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.wrapper}>
      <div className={styles.backBar}>
        <button onClick={() => navigate('/')} className={styles.backBtn}>
          ← Volver al portal
        </button>
      </div>
      <iframe
        src="/git-guide.html"
        className={styles.frame}
        title="Git para Designers"
      />
    </div>
  )
}

export default GitGuide