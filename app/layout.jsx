import './globals.css'
import Navigation from '@/components/navigation/navigation.component'
import Footer from '@/components/footer/footer.component'
import classes from "./layout.module.css"
import Image from 'next/image'
import whatsAppLogo from "@/public/logos/whatsapp.png"
import { Noto_Sans, Cormorant_Garamond } from "next/font/google"


const NotoSans = Noto_Sans({
  weight: [ "300", "400", "500", "600", "700" ],
  subsets: [ "latin" ],
  variable: '--font-noto-sans',
  display : "swap"
})

const CormorantGaramond = Cormorant_Garamond({
  weight: [ "300", "400", "500", "600", "700" ],
  subsets: [ "latin" ],
  variable: '--font-cormorant-garamond',
  display : "swap"
})

export const metadata = {
  title: 'D&D Productions',
  description: 'You create moments, we make them memories',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${NotoSans.variable} ${CormorantGaramond.variable}`} >
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