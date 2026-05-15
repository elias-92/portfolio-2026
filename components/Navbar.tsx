'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'

const links = [
  {
    name: 'Sobre mí',
    href: '#about'
  },

  {
    name: 'Skills',
    href: '#skills'
  },
  {
    name: 'Certificaciones',
    href: '#certifications'
  },

  {
    name: 'Proyectos',
    href: '#projects'
  },

  {
    name: 'Experiencia',
    href: '#experience'
  },

  {
    name: 'Contacto',
    href: '#contact'
  }
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = links.map((link) => link.href.replace('#', ''))

      sections.forEach((section) => {
        const element = document.getElementById(section)

        if (!element) return

        const rect = element.getBoundingClientRect()

        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(section)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-300',
          isScrolled ? 'border-b border-white/10 bg-black/40 backdrop-blur-xl' : 'bg-transparent'
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="#hero"
            className="text-2xl font-black tracking-tight"
          >
            EM
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((link) => {
              const section = link.href.replace('#', '')

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm font-medium transition',
                      activeSection === section ? 'text-cyan-400' : 'text-zinc-400 hover:text-white'
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="https://github.com/elias-92"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 transition hover:text-cyan-400"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/elias--martinez/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 transition hover:text-cyan-400"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="/cv/EliasFrontEnd.pdf"
              download
              className="flex items-center gap-2 rounded-2xl bg-cyan-500 px-6 py-3 font-medium text-black transition hover:scale-105"
            >
              Descargar CV
              <Download size={18} />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white lg:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex h-full flex-col items-center justify-center gap-8"
            >
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-white transition hover:text-cyan-400"
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-8 flex flex-col items-center gap-3">
                <a
                  href="/cv/EliasFrontEnd.pdf"
                  download
                  className="flex items-center gap-3 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
                >
                  <Download size={20} />
                  Descargar CV
                </a>

                <div className="flex items-center gap-6">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <FaGithub size={24} />
                  </a>

                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
