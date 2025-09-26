import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Luckiest_Guy } from 'next/font/google'

const luckiestGuy = Luckiest_Guy({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-luckiest-guy',
})

export const metadata: Metadata = {
  title: 'Festival de la Esperanza',
  description: 'Festival de la Esperanza',
  generator: 'v0.app',
  icons: {
    icon: '/logo.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${luckiestGuy.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
