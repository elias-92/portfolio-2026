'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-cyan-400">Frontend Developer</p>
          <h1 className="mb-6 text-5xl md:text-6xl font-black leading-tight">
            Diseño y desarrollo experiencias digitales que convierten ideas en productos reales.
          </h1>

          <p className="mb-10 text-lg text-zinc-400">
            Desarrollador enfocado en frontend y aplicaciones web, creando interfaces rápidas,
            intuitivas y pensadas para usuarios reales.
          </p>

          <div className="flex gap-4">
            <Link
              href="#proyectos"
              className="rounded-2xl bg-cyan-500 px-6 py-4 font-semibold text-black transition hover:scale-105"
            >
              Ver proyectos
            </Link>

            <Link
              href="#contacto"
              className="rounded-2xl border border-white/10 px-6 py-4 font-semibold transition hover:border-cyan-400"
            >
              Contactarme
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
