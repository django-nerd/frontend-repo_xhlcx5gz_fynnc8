import React from 'react'
import { motion } from 'framer-motion'

const section = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } },
}

function GlassCard({ children, className = '' }) {
  return (
    <div className={`rounded-3xl border backdrop-blur-xl ${className}`} style={{ borderColor: 'rgba(180,220,255,0.2)', background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 80px rgba(0,0,0,0.35)' }}>
      {children}
    </div>
  )
}

export default function Sections() {
  return (
    <div className="space-y-28">
      {/* About */}
      <motion.section id="about" variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <GlassCard className="p-8">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="Abstract portrait" className="w-full h-64 object-cover rounded-2xl" />
          </GlassCard>
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white">About Idris</h3>
            <p className="text-white/80 text-lg">I'm Idris, a 20-year-old software engineer with over 3 years of experience building software and crafting modern UI/UX. I'm an expert in C language, passionate about interactive web experiences, and currently diving deep into game development.</p>
            <p className="text-cyan-100/80">I love blending performance, clean architecture, and motion principles to design interfaces that feel alive.</p>
          </div>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section id="skills" variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Skills</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            title: 'Core Skills',
            items: ['C', 'Data Structures', 'Algorithms']
          },{
            title: 'Frontend & UI/UX',
            items: ['HTML', 'CSS', 'JavaScript', 'React', 'Figma']
          },{
            title: 'Game Dev (Learning)',
            items: ['Unity / Unreal / Godot', 'Game loops', 'Rapid prototypes']
          }].map((c, idx) => (
            <GlassCard key={idx} className="p-6 group">
              <h4 className="text-xl font-semibold text-white mb-3">{c.title}</h4>
              <div className="flex flex-wrap gap-2">
                {c.items.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-sm text-cyan-100/90 border border-cyan-200/20 bg-white/5 group-hover:border-cyan-200/40 transition" >{t}</span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section id="projects" variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[1,2,3,4].map((i) => (
            <GlassCard key={i} className="p-6 relative overflow-hidden group">
              <div className="absolute -inset-20 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" style={{ background: 'radial-gradient(60%_60%_at_70%_0%, rgba(0,200,255,0.14), rgba(0,0,0,0))' }} />
              <h4 className="text-2xl font-semibold text-white">Featured Project #{i}</h4>
              <p className="mt-2 text-white/80">A modern interactive web experience with glassmorphism and buttery animations.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['UI/UX', 'Web App', 'Animations'].map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded-full border border-white/10 text-cyan-100/90">{t}</span>
                ))}
              </div>
              <a href="#" className="magnetic mt-5 inline-block px-4 py-2 rounded-lg text-sm text-white border border-white/10 bg-white/5">View Project</a>
            </GlassCard>
          ))}
        </div>
      </motion.section>

      {/* Game Dev Journey */}
      <motion.section id="journey" variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Game Dev Journey</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            'Learning game engines',
            'Building small prototypes',
            'Experimenting with physics and controls',
            'Designing UI for games',
          ].map((step, idx) => (
            <GlassCard key={idx} className="p-6">
              <div className="text-cyan-200 text-sm">Step {idx + 1}</div>
              <div className="mt-2 text-white font-semibold">{step}</div>
            </GlassCard>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section id="contact" variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Let’s Work Together</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard className="p-8">
            <p className="text-white/80">Have an idea, project, or collaboration in mind? Let’s create something interactive and memorable.</p>
            <form className="mt-6 space-y-4">
              <input aria-label="Name" placeholder="Name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
              <input aria-label="Email" placeholder="Email" type="email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
              <textarea aria-label="Message" placeholder="Message" rows="5" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
              <button type="button" className="magnetic inline-flex items-center justify-center px-6 py-3 rounded-xl text-white border border-white/10 bg-white/5">Send Message</button>
            </form>
          </GlassCard>
          <div className="space-y-4">
            <GlassCard className="p-6">
              <div className="text-white/80">Email</div>
              <a href="mailto:idris@example.com" className="text-cyan-200">idris@example.com</a>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="text-white/80">Social</div>
              <div className="mt-2 flex gap-3">
                <a className="magnetic px-3 py-2 rounded-lg border border-white/10 text-cyan-100/90 bg-white/5" href="https://github.com/">GitHub</a>
                <a className="magnetic px-3 py-2 rounded-lg border border-white/10 text-cyan-100/90 bg-white/5" href="https://linkedin.com/">LinkedIn</a>
                <a className="magnetic px-3 py-2 rounded-lg border border-white/10 text-cyan-100/90 bg-white/5" href="https://twitter.com/">Twitter</a>
              </div>
            </GlassCard>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
