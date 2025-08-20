import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mouj Maalik School of Music (MMSM) - Learn • Record • Perform',
  description: 'Founded in 2010, MMSM is one of Delhi\'s most respected music institutions, combining traditional Indian Classical and Western Classical training with modern studio facilities.',
  keywords: 'music school, Delhi, Indian classical, Western classical, music lessons, studio recording, Trinity College London',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
