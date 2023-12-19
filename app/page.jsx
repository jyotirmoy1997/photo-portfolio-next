import styles from './page.module.css'
import CoverPage from '@/components/cover-page/cover-page.component'

export default function Home() {
  return (
    <main className={styles.main}>
      <CoverPage/>
    </main>
  )
}
