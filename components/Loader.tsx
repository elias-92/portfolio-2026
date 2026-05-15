'use client'

import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-999 flex items-center justify-center bg-[#09090b]"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

          <h1 className="relative text-6xl font-black tracking-tight text-white">EM</h1>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 180 }}
          transition={{
            duration: 1.2,
            ease: 'easeInOut'
          }}
          className="mt-8 h-0.5 rounded-full bg-cyan-400"
        />
      </div>
    </motion.div>
  )
}
