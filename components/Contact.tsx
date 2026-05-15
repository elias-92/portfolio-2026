'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)

  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState(false)

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    try {
      setLoading(true)

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      setSuccess(true)

      form.current.reset()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="section relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 mb-16 text-center"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Contacto
        </p>

        <h2 className="mx-auto mb-6 max-w-4xl text-4xl font-black leading-tight md:text-5xl">
          ¿Tenés una idea, proyecto o propuesta?
        </h2>

        <p className="mx-auto max-w-2xl text-lg text-zinc-400">
          Estoy abierto a oportunidades, colaboraciones y nuevos desafíos.
        </p>
      </motion.div>

      <div className="relative z-10 grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
              <Mail size={28} />
            </div>

            <h3 className="mb-2 text-2xl font-bold">Email</h3>

            <p className="text-zinc-400">Martinezelias@hotmail.com.ar</p>
          </div>

          <div className="flex justify-between md:justify-start gap-4">
            <a
              href="https://github.com/elias-92"
              target="_blank"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub size={20} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/elias--martinez/"
              target="_blank"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
        >
          <div className="mb-6">
            <label htmlFor='name' className="mb-2 block text-sm text-zinc-400">Nombre</label>

            <input
              id='name'
              type="text"
              name="name"
              required
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition focus:border-cyan-400"
            />
          </div>

          <div className="mb-6">
            <label htmlFor='email' className="mb-2 block text-sm text-zinc-400">Email</label>

            <input
              id='email'
              type="email"
              name="email"
              required
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition focus:border-cyan-400"
            />
          </div>

          <div className="mb-8">
            <label htmlFor='message' className="mb-2 block text-sm text-zinc-400">Mensaje</label>

            <textarea
              id='message'
              name="message"
              rows={6}
              required
              className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition focus:border-cyan-400"
            />
          </div>

          <button
            aria-label="Enviar Mensaje"
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-6 py-4 font-semibold text-black transition hover:scale-[1.02]"
          >
            {loading ? 'Enviando...' : 'Enviar mensaje'}

            <Send size={18} />
          </button>

          {success && (
            <p className="mt-5 text-center text-sm text-cyan-400">
              Mensaje enviado correctamente 🚀
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
