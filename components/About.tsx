'use client'

import { motion } from 'framer-motion'
import { Code2, GraduationCap, MapPin, Rocket } from 'lucide-react'

const items = [
  {
    icon: MapPin,
    title: 'Rosario, Argentina',
    description: 'Disponible para trabajo remoto y freelance.'
  },
  {
    icon: GraduationCap,
    title: 'Programación',
    description: 'Formación enfocada en desarrollo frontend y fullstack.'
  },
  {
    icon: Code2,
    title: 'React & Next.js',
    description: 'Construyendo interfaces modernas y escalables.'
  },
  {
    icon: Rocket,
    title: 'Aprendizaje constante',
    description: 'Explorando nuevas tecnologías y mejores prácticas.'
  }
]

export default function About() {
  return (
    <section
      id="about"
      className="section relative overflow-hidden"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Sobre mí
        </p>

        <h2 className="mb-6 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
          Más que código, busco construir soluciones útiles.
        </h2>

        <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
          Actualmente desarrollo proyectos con React, Next.js y TypeScript, mientras continúo
          ampliando conocimientos en análisis de datos y tecnologías modernas.
        </p>
      </motion.div>

      <div className="relative z-10 mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                <Icon size={28} />
              </div>

              <h3 className="mb-2 text-xl font-bold">{item.title}</h3>

              <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
