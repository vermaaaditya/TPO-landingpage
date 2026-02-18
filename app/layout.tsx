import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'SIET TPO | Training & Placement Office - SIET Panchkula',
  description: 'Connecting forward-thinking organizations with the next generation of engineering talent from SIET Panchkula. Explore our industry-aligned curriculum and skilled graduates.',
  keywords: ['SIET Panchkula', 'Training and Placement', 'TPO', 'Engineering College', 'Campus Recruitment'],
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
