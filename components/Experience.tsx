'use client'

import { motion } from 'framer-motion'
import { experience } from '@/data/experience'

export default function Experience() {
  return (
    <section
      id="experience"
      className="section relative overflow-hidden"
    >
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 mb-20"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Experiencia
        </p>

        <h2 className="max-w-4xl text-4xl text-center md:text-start font-black leading-tight md:text-5xl">
          Cada proyecto suma experiencia más allá del código.
        </h2>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2" />

        <div className="flex flex-col gap-14">
          {experience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-10 md:self-start' : 'md:pl-10 md:self-end'
              }`}
            >
              <div className="absolute left-0 top-6 h-4 w-4 rounded-full border-4 border-cyan-400 bg-black md:left-auto md:right-" />

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-cyan-400/30">
                <span className="mb-3 inline-block rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  {item.year}
                </span>

                <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>

                <p className="mb-5 text-sm text-zinc-500">{item.company}</p>

                <p className="leading-relaxed text-zinc-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
