import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Landing() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300, 600], [1, 0.6, 0])
  const blur = useTransform(scrollY, [0, 600], ['blur(0px)', 'blur(12px)'])
  const scale = useTransform(scrollY, [0, 600], [1, 0.9])
  const y = useTransform(scrollY, [0, 600], [0, -80])

  return (
    <section className="relative h-screen flex items-center justify-center select-none">
      <motion.div
        style={{ opacity, filter: blur, scale, y }}
        className="text-center will-change-transform"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-[10vw] md:text-[8vw] lg:text-[120px] font-black tracking-tight text-transparent bg-clip-text"
          style={{
            backgroundImage:
              'linear-gradient(120deg, rgba(255,255,255,0.85), rgba(200,230,255,0.55))',
            WebkitTextStroke: '1px rgba(255,255,255,0.4)',
            filter: 'drop-shadow(0 0 25px rgba(120,200,255,0.25))',
          }}
        >
          IDRIS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1, ease: 'easeOut' }}
          className="mt-3 text-lg md:text-2xl text-white/80"
          style={{
            textShadow: '0 8px 40px rgba(0,200,255,0.25)',
            backdropFilter: 'blur(10px)',
          }}
        >
          Developer • Designer • Creator
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mx-auto mt-8 w-[70vw] max-w-2xl h-[2px] bg-gradient-to-r from-cyan-400/0 via-cyan-300/60 to-fuchsia-400/0"
        />
      </motion.div>
    </section>
  )
}
