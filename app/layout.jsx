import './globals.css'
import Navigation from '@/components/navigation/navigation.component'
import Footer from '@/components/footer/footer.component'

export const metadata = {
  title: 'D&D Productions',
  description: 'You create moments, we make them memory',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
