import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import { BookingProvider } from '@/contexts/BookingContext'

export const metadata: Metadata = {
  title: 'Meat_Coin',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className="">
        <BookingProvider>
          <Header />
          <div className="h-[60px] md:h-[90px]" />
          {children}
          <Footer />
        </BookingProvider>
      </body>
    </html>
  )
}
