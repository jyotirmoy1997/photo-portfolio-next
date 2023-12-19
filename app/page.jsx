import styles from './page.module.css'
import CoverPage from '@/components/cover-page/cover-page.component'
import CarouselComponent from '@/components/carousel/carousel-component'
import CategoryCard from '@/components/category-card/category-card.component'

export default function Home() {
  return (
    <main className={styles.main}>
      <CoverPage/>
      <CarouselComponent/>
      <CategoryCard/>
    </main>
  )
}
