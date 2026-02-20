import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Sebastián Arriola | Full Stack Developer',
  description: 'Full Stack Developer Especializado en el desarrollo de aplicaciones web y móviles.',
  icons: {
    icon: [
      {
        url: '/user-profile.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/user-profile.png',
        media: '(prefers-color-scheme: dark)',
      }
    ],
    apple: '/user-profile.png',
  },
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

export const dynamic = "force-static";
