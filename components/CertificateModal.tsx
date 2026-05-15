'use client'

import Image from 'next/image'
import { X } from 'lucide-react'
import { StaticImageData } from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  isOpen: boolean

  onClose: () => void

  image: string | StaticImageData

  title: string
}

export default function CertificateModal({ isOpen, onClose, image, title }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
        >
          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0.9,
              opacity: 0
            }}
            transition={{
              duration: 0.3
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-4xl border border-white/10 bg-zinc-950"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black"
            >
              <X size={22} />
            </button>

            <Image
              src={image}
              alt={title}
              width={1600}
              height={1200}
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
