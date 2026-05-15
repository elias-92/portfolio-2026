'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/skills'

export default function Skills() {
  return (
    <section
      id="skills"
      className="section relative overflow-hidden"
    >
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 mb-16"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">Skills</p>

        <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl">
          Tecnologías con las que convierto ideas en productos.
        </h2>
      </motion.div>

      <div className="relative z-10 grid gap-10 lg:grid-cols-3">
        {skills.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: groupIndex * 0.15
            }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            <h3 className="mb-8 text-2xl font-bold">{group.category}</h3>

            <div className="grid grid-cols-2 gap-5">
              {group.technologies.map((tech) => {
                const Icon = tech.icon

                return (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center rounded-2xl border border-white/5 bg-black/20 p-5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-500/5"
                  >
                    <Icon
                      size={42}
                      className="mb-4 text-zinc-300 transition duration-300 group-hover:text-cyan-400"
                    />

                    <span className="text-sm font-medium text-zinc-300">{tech.name}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
