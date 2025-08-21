
import './globals.css'



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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@geist-ui/font@latest/font.css" />
        <title>Mouj Maalik - Where Music Meets Soul</title>
        <meta name="description" content="Discover the essence of Indian classical music at Mouj Maalik. Learn from master musicians and immerse yourself in centuries-old traditions." />
      </head>
      <body className={` bg-warm-white`}>
          <body className="bg-warm-white">
            {children}
          </body>
      </body>
    </html>
  )
}
