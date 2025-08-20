import type { Metadata } from 'next'
import { Inter, Playfair_Display, Noto_Sans_Devanagari } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})
const devanagari = Noto_Sans_Devanagari({ 
  subsets: ['devanagari'],
  variable: '--font-devanagari'
})

export const metadata: Metadata = {
  title: 'Sangeet Academy - Where Music Meets Soul',
  description: 'Discover the essence of Indian classical music at Sangeet Academy. Learn from master musicians and immerse yourself in centuries-old traditions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} ${playfair.variable} ${devanagari.variable} bg-warm-white`}>
        {children}
      </body>
    </html>
  )
}
