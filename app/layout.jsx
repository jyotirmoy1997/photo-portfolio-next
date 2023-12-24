import './globals.css'
import Navigation from '@/components/navigation/navigation.component'
import Footer from '@/components/footer/footer.component'
import classes from "./layout.module.css"
import Image from 'next/image'
import whatsAppLogo from "@/assets/logos/whatsapp.png"

export const metadata = {
  title: 'D&D Productions',
  description: 'You create moments, we make them memories',
}


export default function RootLayout({ children }) {
  if(!children)
    console.log("bug")
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={classes.body}>
        <Navigation/>
        <div className={classes.wrapper}>
          {children}
          <a href='https://wa.me/917865003343' target='_blank'>
            <div className={classes.whatsappChat}>
              <Image alt='whatsapp-icon' src={whatsAppLogo.src} height={50} width={50} />
            </div>
          </a>
        </div>
        <Footer/>
      </body>
    </html>
  )
}
