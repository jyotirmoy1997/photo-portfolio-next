import classes from './page.module.css'
import CoverPage from '@/components/cover-page/cover-page.component'
import CarouselComponent from '@/components/carousel/carousel-component'
import CategoryCard from '@/components/category-card/category-card.component'
import CategoryCardMob from '@/components/category-card-mob/category-card-mob.component'

export default function Home() {
  return (
    <main className={classes.main}>
      <CoverPage/>
      <CarouselComponent/>
      <CategoryCard className={classes.desktop_view_off}/>
      <CategoryCardMob className={classes.mob_view_off}/>
    </main>
  )
}
