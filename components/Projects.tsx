'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section
      id="projects"
      className="section relative overflow-hidden"
    >
      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 mb-20"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Proyectos
        </p>

        <h2 className="max-w-4xl text-4xl font-black leading-tight md:text-5xl">
          Proyectos donde transformé necesidades en soluciones reales.
        </h2>
      </motion.div>

      <div className="relative z-10 flex flex-col gap-16">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1
            }}
            viewport={{ once: true }}
            className="group grid gap-10 overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:grid-cols-2"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={700}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="mb-5 text-3xl font-black">{project.title}</h3>

              <p className="mb-8 leading-relaxed text-zinc-400">{project.description}</p>

              <div className="mb-8 flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 rounded-2xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:scale-105"
                >
                  Demo
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
