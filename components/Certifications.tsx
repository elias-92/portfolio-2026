'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { certifications } from '@/data/certifications'
import CertificateModal from '@/components/CertificateModal'
import { StaticImageData } from 'next/image'

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState<null | {
    image: string | StaticImageData
    title: string
  }>(null)
  return (
    <section
      id="certifications"
      className="section relative overflow-hidden"
    >
      <div className="mb-16">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Certificaciones
        </p>

        <h2 className="max-w-4xl text-4xl font-black leading-tight md:text-5xl">
          Aprendizaje constante respaldado por formación y práctica.
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <motion.article
            key={cert.title}
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1
            }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <div className="relative overflow-hidden">
              <Image
                src={cert.img}
                alt={cert.title}
                width={1200}
                height={800}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  {cert.date}
                </span>

                <p className="text-sm text-zinc-500">{cert.institution}</p>
              </div>

              <h3 className="mb-6 text-2xl font-bold">{cert.title}</h3>

              <button
                onClick={() =>
                  setSelectedCertificate({
                    image: cert.img,
                    title: cert.title
                  })
                }
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Ver certificado
                <ExternalLink size={18} />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
      <CertificateModal
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        image={selectedCertificate?.image || ''}
        title={selectedCertificate?.title || ''}
      />
    </section>
  )
}
