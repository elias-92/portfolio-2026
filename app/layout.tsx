import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Elias Martinez | Frontend Developer',

    template: '%s | Elias Martinez'
  },

  description:
    'Portfolio de Elias Martinez. Desarrollo frontend moderno con React, Next.js, TypeScript y experiencias enfocadas en interfaces modernas.',

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
    title: 'Elias Martinez | Frontend Developer',

    description: 'Portfolio profesional con proyectos, experiencia y desarrollo web moderno.',

    url: 'https://martinezelias.netlify.app',

    siteName: 'Portfolio Elias Martinez',

    images: [
      {
        url: '/og-image.png',

        width: 1200,

        height: 630
      }
    ],

    locale: 'es_AR',

    type: 'website'
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Elias Martinez | Frontend Developer',

    description: 'Portfolio profesional con proyectos y experiencia.',

    images: ['/og-image.png']
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
