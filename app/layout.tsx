import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Elias Martinez | Frontend Developer especializado en React y Next.js',

    template: '%s | Elias Martinez'
  },

  description:
    'Portfolio de Elias Martinez con proyectos desarrollados en React, Next.js y TypeScript, enfocados en interfaces modernas y soluciones reales.',

  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio', 'Web Developer'],

  authors: [
    {
      name: 'Elias Martinez'
    }
  ],

  creator: 'Elias Martinez',

  metadataBase: new URL('https://martinezelias.netlify.app'),
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    title: 'Elias Martinez | Frontend Developer especializado en React y Next.js',

    description:
      'Portfolio de Elias Martinez con proyectos desarrollados en React, Next.js y TypeScript, enfocados en interfaces modernas y soluciones reales.',

    url: 'https://martinezelias.netlify.app',

    siteName: 'Portfolio Elias Martinez',

    images: [
      {
        url: '/og-image.webp',

        width: 1200,

        height: 630
      }
    ],

    locale: 'es_AR',

    type: 'website'
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Elias Martinez | Frontend Developer especializado en React y Next.js',

    description:
      'Portfolio de Elias Martinez con proyectos desarrollados en React, Next.js y TypeScript, enfocados en interfaces modernas y soluciones reales.',

    images: ['/og-image.webp']
  },

  robots: {
    index: true,

    follow: true
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
