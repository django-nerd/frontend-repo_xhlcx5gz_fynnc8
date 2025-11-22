import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

// Soft gradient blobs + parallax particles background
export default function Background() {
  const containerRef = useRef(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      mx.set(x)
      my.set(y)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my])

  const tx1 = useTransform(mx, [0, 1], ['-10%', '10%'])
  const ty1 = useTransform(my, [0, 1], ['-6%', '6%'])
  const tx2 = useTransform(mx, [0, 1], ['8%', '-8%'])
  const ty2 = useTransform(my, [0, 1], ['10%', '-10%'])

  return (
    <div ref={containerRef} className="fixed inset-0 -z-0 overflow-hidden">
      {/* subtle radial gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(32,64,96,0.6),rgba(10,15,25,1))]" />

      {/* floating blurred blobs with parallax */}
      <motion.div
        className="absolute w-[60vw] h-[60vw] -top-20 -left-20 rounded-full blur-3xl"
        style={{
          x: tx1,
          y: ty1,
          background:
            'radial-gradient(circle at 30% 30%, rgba(0,255,255,0.25), rgba(0,0,0,0) 60%), radial-gradient(circle at 70% 70%, rgba(128,0,255,0.18), rgba(0,0,0,0) 60%)',
          filter: 'saturate(140%)',
        }}
      />
      <motion.div
        className="absolute w-[55vw] h-[55vw] -bottom-24 -right-24 rounded-full blur-3xl"
        style={{
          x: tx2,
          y: ty2,
          background:
            'radial-gradient(circle at 60% 40%, rgba(0,160,255,0.22), rgba(0,0,0,0) 60%), radial-gradient(circle at 40% 60%, rgba(180,0,255,0.16), rgba(0,0,0,0) 60%)',
        }}
      />

      {/* subtle grain/noise overlay */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-soft-light pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,\
        <svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'>\
          <filter id=\'n\'>\
            <feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/>\
          </filter>\
          <rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.8\'/>\
        </svg>\
      ")' }} />
    </div>
  )
}
