import './globals.css'
import Navigation from '@/components/navigation/navigation.component'
import Footer from '@/components/footer/footer.component'
import classes from "./layout.module.css"

export const metadata = {
  title: 'D&D Productions',
  description: 'You create moments, we make them memories',
}

export default function RootLayout({ children }) {
  if(!children)
    console.log("bug")
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navigation/>
        <div className={classes.wrapper}>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
