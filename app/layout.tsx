import type { Metadata } from 'next'
import { Poppins, Bebas_Neue } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
})

export const metadata: Metadata = {
  title: 'YASKA | Agencia Creativa',
  description: 'Elevamos a marcas con identidad y estrategia digital para brillar. Agencia creativa en Buenos Aires, Argentina.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${bebasNeue.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
