'use client'

import { useEffect, useState } from 'react'

import { AnimatePresence } from 'framer-motion'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import Noise from '@/components/Noise'
import BackgroundEffects from '@/components/BackgroundEffects'
import Spotlight from '@/components/Spotlight'
import Certifications from '@/components/Certifications'
export default function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Spotlight />
      <Noise />
      <BackgroundEffects />
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <main className="overflow-hidden">
          <Navbar />

          <Hero />

          <About />

          <Skills />

          <Certifications />

          <Projects />

          <Experience />

          <Contact />

          <Footer />
        </main>
      )}
    </>
  )
}
