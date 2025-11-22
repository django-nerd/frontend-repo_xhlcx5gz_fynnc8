import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Github, Linkedin, Twitter } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { ease: [0.22, 1, 0.36, 1], duration: 0.7 } },
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center"
      >
        <div>
          <motion.h2 variants={item} className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Hi, I'm Idris.
          </motion.h2>
          <motion.p variants={item} className="mt-4 text-lg md:text-xl text-cyan-100/90">
            20-year-old software engineer, C language expert, UI/UX designer, web developer, and aspiring game developer.
          </motion.p>
          <motion.p variants={item} className="mt-5 text-white/80 max-w-xl">
            I craft modern, interactive experiences with clean UI, smooth animations, and a focus on user delight. I build websites, experiment with game development, and love turning ideas into expressive digital interfaces.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="magnetic relative group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-white backdrop-blur-md" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))', border: '1px solid rgba(180,220,255,0.25)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06), 0 10px 40px rgba(0,200,255,0.08)' }}>
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 rounded-xl overflow-hidden">
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'radial-gradient(120% 120% at 80% 0%, rgba(0,200,255,0.35), rgba(255,255,255,0.0) 60%)' }} />
              </span>
            </a>
            <a href="#contact" className="magnetic relative group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-cyan-100 backdrop-blur-md" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))', border: '1px solid rgba(180,220,255,0.2)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04), 0 10px 40px rgba(180,0,255,0.08)' }}>
              <span className="relative z-10">Download Resume</span>
              <span className="absolute inset-0 rounded-xl overflow-hidden">
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'radial-gradient(120% 120% at 20% 0%, rgba(180,0,255,0.28), rgba(255,255,255,0.0) 60%)' }} />
              </span>
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            {[{Icon: Github, href: 'https://github.com/'}, {Icon: Linkedin, href: 'https://linkedin.com/'}, {Icon: Twitter, href: 'https://twitter.com/'}].map(({Icon, href}, i) => (
              <a key={i} href={href} aria-label={href} className="magnetic group relative w-12 h-12 rounded-2xl grid place-items-center text-cyan-100" style={{ border: '1px solid rgba(180,220,255,0.22)', background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05), 0 8px 30px rgba(0,200,255,0.1)' }}>
                <span className="absolute inset-0 rounded-2xl transition-transform duration-300 group-hover:-translate-y-0.5" style={{ background: 'radial-gradient(140% 120% at 80% 0%, rgba(0,200,255,0.18), rgba(255,255,255,0) 60%)' }} />
                <Icon className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div variants={item} className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))', boxShadow: '0 30px 80px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.05)' }}>
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
