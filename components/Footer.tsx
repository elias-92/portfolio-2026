'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="section relative z-10 py-16">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <motion.div
            className="text-center lg:text-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-3 text-3xl font-black">Elias Martinez</h2>

            <p className="max-w-md text-zinc-400">
              Frontend Developer construyendo interfaces modernas, rápidas y enfocadas en
              experiencia de usuario.
            </p>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-zinc-400 transition hover:text-cyan-400"
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            viewport={{ once: true }}
            className="flex items-center gap-5"
          >
            <a
              aria-label="Ver perfil de GitHub"
              href="https://github.com/elias-92"
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub size={20} />
            </a>

            <a
              aria-label="Ver perfil de LinkedIn"
              href="https://www.linkedin.com/in/elias--martinez/"
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedin size={20} />
            </a>
          </motion.div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-zinc-500">
            © 2026 Elias Martinez. Construido con Next.js, Tailwind CSS y mucho café ☕
          </p>
        </div>
      </div>
    </footer>
  )
}
