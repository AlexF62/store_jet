import type { Metadata } from 'next'
import './globals.scss'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { ReduxProvider } from '@/UI/ReduxProvider'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
 
export default function RootLayout({
  children,
  
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <Header/>
     <ReduxProvider>
        {children}
     </ReduxProvider>
        <Footer/>
        </body>
    </html>
  )
}